({
  componentSetting: function (component) {
    return component.find("util").parseTemplate('lightning:buttonStateful', {
      '@iconNameWhenHover': component.get("v.iconNameWhenHover"),
      '@iconNameWhenOff': component.get("v.iconNameWhenOff"),
      '@iconNameWhenOn': component.get("v.iconNameWhenOn"),
      '@labelWhenHover': component.get("v.labelWhenHover"),
      '@labelWhenOff': component.get("v.labelWhenOff"),
      '@labelWhenOn': component.get("v.labelWhenOn"),
      '@state': component.get("v.state"),
      '@variant': component.get("v.variant")
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
