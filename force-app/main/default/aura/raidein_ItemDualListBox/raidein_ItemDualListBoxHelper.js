({
  componentSetting: function (component) {
    return component.find("util").parseTemplate('lightning:dualListbox', {
      '@name': 'Select Options',
      '@value': component.get("v.value"),
      '@label': component.get("v.label"),
      '@sourceLabel': component.get("v.sourceLabel"),
      '@selectedLabel': component.get("v.selectedLabel"),
      '@options': component.get("v.options"),
      '@requiredOptions': ['2', '7'],
      '@variant': component.get("v.variant"),
      // '@readonly': false,
      '@min': component.get("v.min"),
      '@max': component.get("v.max")
    });
  },

  create: function (component, componentSetting) {
    // FIXME: At initializing, create component failed:
    // "readonly" must either be a public property of lightningDualListbox or a global HTML attribute : false
    component.find("preview").createComponent(component, componentSetting.componentName, componentSetting.componentAttributes);
  },

  renderCode: function (component) {
    component.find("highlight").highlightCode(component.get("v.code"));
  }
})
