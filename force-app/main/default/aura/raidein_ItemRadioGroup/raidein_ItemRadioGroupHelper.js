({
  componentSetting: function (component) {
    return component.find("util").parseTemplate('lightning:radioGroup', {
      '@name': component.get("v.name"),
      '@value': component.get("v.value"),
      '@label': component.get("v.label"),
      '@options': component.get("v.options"),
      '@type': component.get("v.type"),
      '@messageWhenValueMissing': component.get("v.messageWhenValueMissing"),
      '@title': component.get("v.title")
    });
  },

  create: function (component, componentSetting) {
    component.find("preview").createComponent(component, componentSetting.componentName, componentSetting.componentAttributes);
  },

  renderCode: function (component) {
    component.find("highlight").highlightCode(component.get("v.code"));
  }
})
