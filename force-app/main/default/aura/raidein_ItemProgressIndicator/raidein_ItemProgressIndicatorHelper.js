({
  componentSetting: function (component) {
    return component.find("util").parseTemplate('lightning:progressIndicator', {
      '@currentStep': component.get("v.currentStep"),
      '@hasError': component.get("v.hasError"),
      '@type': component.get("v.type"),
      '@variant': component.get("v.variant"), // TODO: for the base type only
      'lightning:progressStep':
        [['Step One', 'step1'], ['Step Two', 'step2'], ['Step Three', 'step3']].map(function (steps) {
          return { '@label': steps[0], '@value': steps[1] }
        })
    });
  },

  create: function (component, componentSetting) {
    component.find("preview").createComponents(component, componentSetting);
  },

  renderCode: function (component) {
    console.log("button render code.");
    component.find("highlight").highlightCode(component.get("v.code"));
  }
})
