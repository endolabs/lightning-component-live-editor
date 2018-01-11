({
  getTemplate: function (component) {
    return {
      "lightning:button": [
        { "@label": "Refresh" },
        { "@label": "Edit" },
        { "@label": "Save" }
      ]
    };
  },

  componentSetting: function (component) {
    var template = this.getTemplate(component);
    return component.find("util").parseTemplate("lightning:buttonGroup", template);
  },

  create: function (component, componentSetting) {
    component.find("preview").createComponents(component, componentSetting);
  },

  renderCode: function (component) {
    console.log("render code");
    component.find("highlight").highlightCode(component.get("v.code"));
  }
})
