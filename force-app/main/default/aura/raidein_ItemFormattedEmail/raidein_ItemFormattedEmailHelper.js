({
  componentSetting: function (component) {
    return component.find("util").parseTemplate('lightning:formattedEmail', {
      '@value': component.get("v.value"),
      '@label': component.get("v.label")
    });
  },

  create: function (component, componentSetting) {
    component.find("preview").createComponent(component, componentSetting.componentName, componentSetting.componentAttributes);
  },

  renderCode: function (component) {
    component.find("highlight").highlightCode(component.get("v.code"));
  }
})
