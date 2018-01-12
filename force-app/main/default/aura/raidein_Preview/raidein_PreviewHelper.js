({
  clear: function (component) {
    var oldComponent = component.get("v.content");
    if (oldComponent) {
      oldComponent.destroy();
    }
  },

  createComponent: function (component, callerComponent, type, attributes, onSuccess) {
    // this.clear(component);

    $A.createComponent(
      type, attributes,
      function (createdComponent, status, errorMessage) {
        if (status === "SUCCESS") {
          component.set("v.content", createdComponent);
          if (onSuccess) {
            onSuccess(callerComponent, createdComponent);
          }
        }
        else if (status === "INCOMPLETE") {
          console.log("No response from server or client is offline.")
          // Show offline error
        }
        else if (status === "ERROR") {
          console.log("Error: " + errorMessage);
          // Show error message
        }
      }
    );
  },

  createComponents: function (component, callerComponent, componentSetting, onSuccess) {
    // this.clear(component);

    console.log("create components", componentSetting);

    var buildComponent = function (setting, parentSetting, createdComponents) {
      var isAuraSet = (setting.componentName == 'aura:set');

      var targetCmp = isAuraSet ? createdComponents[parentSetting.order] : createdComponents[setting.order];
      if (!targetCmp) {
        return null;
      }

      var subCmpGroup = {};
      setting.children.forEach(function (childSetting) {
        var childComponent = buildComponent(childSetting, setting, createdComponents);
        if (!childComponent) return;

        var attrName = isAuraSet ? setting.componentAttributes.attribute : 'body';

        var subCmps = subCmpGroup[attrName] || [];
        subCmps.push(childComponent);
        subCmpGroup[attrName] = subCmps;
      });

      Object.keys(subCmpGroup).forEach(function (attrName) {
        if (attrName === 'body') {
          var container = targetCmp.get("v." + attrName);
          if (!container) return;

          subCmpGroup[attrName].forEach(function (subCmp) {
            container.push(subCmp);
          });
          targetCmp.set("v." + attrName, container);
        } else {
          // TODO: some attributes is array type.
          targetCmp.set("v." + attrName, subCmpGroup[attrName][0]);
        }
      });

      return isAuraSet ? null : targetCmp;
    };

    $A.createComponents(
      componentSetting.components,
      function (createdComponents, status, errorMessage) {
        if (status === "SUCCESS") {
          var p = buildComponent(componentSetting, null, createdComponents);
          component.set("v.content", p);

          if (onSuccess) {
            onSuccess(callerComponent, createdComponents);
          }
        }
        else if (status === "INCOMPLETE") {
          console.log("No response from server or client is offline.")
          // Show offline error
        }
        else if (status === "ERROR") {
          // Show error message
          if (Array.isArray(errorMessage)) {
            errorMessage.forEach(function (err, i) {
              console.log("Error[" + i + "] ", err, componentSetting.components[i]);
            });
          } else {
            console.log("Error: " + errorMessage);
          }
        }
      }
    );
  }
})