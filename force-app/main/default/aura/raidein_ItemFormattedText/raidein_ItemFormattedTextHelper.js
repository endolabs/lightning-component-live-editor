({
  componentSetting: function (component) {
    return component.find("util").parseTemplate('lightning:formattedText', {
      '@value': component.get("v.value"),
      '@linkify': component.get("v.linkify")
    });
  },

  create: function (component, componentSetting) {
    component.find("preview").createComponent(component, componentSetting.componentName, componentSetting.componentAttributes);
  },

  renderCode: function (component) {
    component.find("highlight").highlightCode(component.get("v.code"));
  }
})
