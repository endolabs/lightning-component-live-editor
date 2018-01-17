({
  updateOptions: function (component) {
    var options = [];
    var defaultValue = "";

    var type = component.get("v.type");
    if (type === 'eq') {
      options = ['play', 'stop'];
      defaultValue = 'play';
    } else if (type === 'score') {
      options = ['positive', 'negative'];
      defaultValue = 'positive';
    } else if (type === 'strength') {
      options = ['-3', '-2', '-1', '0', '1', '2', '3'];
      defaultValue = '0'
    } else if (type === 'trend') {
      options = ['neutral', 'up', 'down'];
      defaultValue = 'neutral';
    }

    component.set("v.options", options);
    component.set("v.option", defaultValue);
  },

  componentSetting: function (component) {
    return component.find("util").parseTemplate('lightning:dynamicIcon', {
      '@type': component.get("v.type"),
      '@option': component.get("v.option"),
      '@alternativeText': component.get("v.alternativeText")
    });
  },

  create: function (component, componentSetting) {
    component.find("preview").createComponent(component, componentSetting.componentName, componentSetting.componentAttributes);
  },

  renderCode: function (component) {
    component.find("highlight").highlightCode(component.get("v.code"));
  }
})
