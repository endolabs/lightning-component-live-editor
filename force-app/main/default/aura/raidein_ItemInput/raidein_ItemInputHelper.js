({
  componentSetting: function (component) {
    return component.find("util").parseTemplate('lightning:input', {
      // required
      '@name': component.get("v.name"),
      '@value': component.get("v.value"),
      '@label': component.get("v.label"),
      '@options': component.get("v.options")
      // options
    });
  },

  create: function (component, componentSetting) {
    component.find("preview").createComponent(component, componentSetting.componentName, componentSetting.componentAttributes);
  },

  renderCode: function (component) {
    component.find("highlight").highlightCode(component.get("v.code"));
  }
})
