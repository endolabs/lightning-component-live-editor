({
  componentSetting: function (component) {
    return component.find("util").parseTemplate('lightning:pill', {
      '@label': component.get("v.label"),
      '@hasError': component.get("v.hasError"),
      '@href': component.get("v.href"),
      '@name': component.get("v.name"),
      '@title': component.get("v.title"),
      // TODO: make option whether use media or not
      // '@media': component.get("v.media"),
      'aura:set': {
        '@attribute': 'media',
        'lightning:icon': {
          '@iconName': 'standard:account',
          '@alternativeText': 'Account'
        }
      }
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
