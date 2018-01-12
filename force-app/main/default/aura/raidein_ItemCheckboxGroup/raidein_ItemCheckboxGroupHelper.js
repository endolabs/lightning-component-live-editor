({
  componentSetting: function (component) {
    return component.find("util").parseTemplate('lightning:checkboxGroup', {
      '@name': 'checkboxGroup',
      '@value': component.get("v.value"),
      '@label': component.get("v.label"),
      '@options': component.get("v.options"),
      '@messageWhenValueMissing': component.get("v.messageWhenValueMissing"),
      '@required': component.get("v.required"),
      '@disabled': component.get("v.disabled")
    });
  },

  create: function (component, componentSetting) {
    component.find("preview").createComponent(component, componentSetting.componentName, componentSetting.componentAttributes);
  },

  renderCode: function (component) {
    component.find("highlight").highlightCode(component.get("v.code"));
  }
})
