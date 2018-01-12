({
  componentSetting: function (component) {
    return component.find("util").parseTemplate('lightning:formattedUrl', {
      '@value': component.get("v.value"),
      '@target': component.get("v.target"),
      '@label': component.get("v.label"),
      '@tooltip': component.get("v.tooltip")
    });
  },

  create: function (component, componentSetting) {
    component.find("preview").createComponent(component, componentSetting.componentName, componentSetting.componentAttributes);
  },

  renderCode: function (component) {
    component.find("highlight").highlightCode(component.get("v.code"));
  }
})
