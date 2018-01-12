({
  componentSetting: function (component) {
    return component.find("util").parseTemplate('lightning:combobox', {
      '@name': component.get("v.name"),
      '@value': component.get("v.value"),
      '@label': component.get("v.label"),
      '@options': component.get("v.options"),
      '@variant': component.get("v.variant"),
      '@required': component.get("v.required"),
      '@disabled': component.get("v.disabled"),
      // '@readonly': component.get("v.readonly"),
      '@placeholder': component.get("v.placeholder"),
      '@dropdownAlignment': component.get("v.dropdownAlignment"),
      '@messageWhenValueMissing': component.get("v.messageWhenValueMissing")
    });
  },

  create: function (component, componentSetting) {
    component.find("preview").createComponent(component, componentSetting.componentName, componentSetting.componentAttributes);
  },

  renderCode: function (component) {
    component.find("highlight").highlightCode(component.get("v.code"));
  }
})
