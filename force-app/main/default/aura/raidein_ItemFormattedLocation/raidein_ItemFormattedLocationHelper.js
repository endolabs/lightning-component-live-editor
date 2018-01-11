({
  componentSetting: function (component) {
    return component.find("util").parseTemplate('lightning:formattedLocation', {
      '@latitude': component.get("v.latitude"),
      '@longitude': component.get("v.longitude")
    });
  },

  create: function (component, componentSetting) {
    component.find("preview").createComponent(component, componentSetting.componentName, componentSetting.componentAttributes);
  },

  renderCode: function (component) {
    component.find("highlight").highlightCode(component.get("v.code"));
  }
})
