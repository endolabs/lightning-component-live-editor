({
    createComponent : function(component, callerComponent, type, attributes, onSuccess) {
        $A.createComponent(
            type, attributes, 
            function(createdComponent, status, errorMessage){
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
        
    createComponents : function(component, callerComponent, componentInfo, onSuccess) {
        console.log("create components", componentInfo);
        
        var buildComponent = function(cmpInfo, parentSetting, createdComponents) {
            var isAuraSet = (cmpInfo.componentName == 'aura:set');
            
            var targetCmp = isAuraSet ? createdComponents[parentSetting.order] : createdComponents[cmpInfo.order];
            if (targetCmp == null) {
                return null;
            }
            
            var cmp = isAuraSet ? null : targetCmp;            

            var subCmpGroup = {};
            cmpInfo.children.forEach(function(childCmpInfo) {
                var childComponent = buildComponent(childCmpInfo, cmpInfo, createdComponents);
                if (!childComponent) return;
                
                var attrName = isAuraSet ? cmpInfo.componentAttributes.attribute : 'body';
                    
                var subCmps = subCmpGroup[attrName] || [];
                subCmps.push(childComponent);
                subCmpGroup[attrName] = subCmps;
            });
            
            Object.keys(subCmpGroup).forEach(function(attrName) {
                if (attrName === 'body') {
                    var container = targetCmp.get("v." + attrName);
                    if (!container) return;
                    
                    subCmpGroup[attrName].forEach(function(subCmp) {
                       container.push(subCmp);                        
                    });
                    targetCmp.set("v." + attrName, container);
                } else {
                    // TODO: some attributes is array type.
                    targetCmp.set("v." + attrName, subCmpGroup[attrName][0]);
                }
            });
            
            return cmp;
        };
        
        $A.createComponents(
            componentInfo.components, 
            function(createdComponents, status, errorMessage){
                if (status === "SUCCESS") {
                    var p = buildComponent(componentInfo, null, createdComponents);
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
                        errorMessage.forEach(function(err, i) {
                           console.log("Error[" + i + "] ", err); 
                        });
                    } else {
                        console.log("Error: " + errorMessage);
                    }
                }
            }
        );
    }
})