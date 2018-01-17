({
  componentSetting: function (component) {
    return component.find("util").parseTemplate('lightning:breadcrumbs', {
      'lightning:breadcrumb': [
        {
          '@label': "Parent Account",
          '@href': "path/to/place/1"
        }, {
          '@label': "Case",
          '@href': "path/to/place/2"
        }
      ]
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
