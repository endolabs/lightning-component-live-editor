({
  componentSetting: function (component) {
    return component.find("util").parseTemplate('lightning:inputLocation', {
      '@label': component.get("v.label"),
      '@latitude': component.get("v.latitude"),
      '@longitude': component.get("v.longitude"),
      '@variant': component.get("v.variant")
    });
  },

  create: function (component, componentSetting) {
    component.find("preview").createComponent(component, componentSetting.componentName, componentSetting.componentAttributes);
  },

  renderCode: function (component) {
    component.find("highlight").highlightCode(component.get("v.code"));
  }
})
