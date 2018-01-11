({
  componentSetting: function (component) {
    return component.find("util").parseTemplate('lightning:helptext', {
      '@content': component.get("v.content"),
      '@iconName': component.get("v.iconName")
    });
  },

  create: function (component, name, attributes) {
    component.find("preview").createComponent(component, name, attributes);
  },

  renderCode: function (component) {
    console.log("button render code.");
    component.find("highlight").highlightCode(component.get("v.code"));
  }
})
