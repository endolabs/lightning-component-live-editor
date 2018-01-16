({
  componentSetting: function (component) {
    return component.find("util").parseTemplate('lightning:avatar', {
      '@src': component.get("v.src"),
      '@alternativeText': component.get("v.alternativeText"),
      '@fallbackIconName': component.get("v.fallbackIconName"),
      '@initials': component.get("v.initials"),
      '@size': component.get("v.size"),
      '@variant': component.get("v.variant")
    });
  },

  create: function (component, componentSetting) {
    component.find("preview").createComponent(component, componentSetting.componentName, componentSetting.componentAttributes);
  },

  renderCode: function (component) {
    console.log("button render code.");
    component.find("highlight").highlightCode(component.get("v.code"));
  }
})
