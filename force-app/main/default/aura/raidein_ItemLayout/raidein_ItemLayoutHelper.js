({
  getItemTemplate: function (component, value) {
    return {
      "@flexibility": "auto",
      "@padding": "around-small",
      "aura:text": {
        "@value": value
      }
    }
  },

  getTemplate: function (component) {
    return {
      "@horizontalAlign": component.get("v.horizontalAlign"),
      "@verticalAlign": component.get("v.verticalAlign"),
      "@pullToBoundary": component.get("v.pullToBoundary"),
      "lightning:layoutItem": [
        this.getItemTemplate(component, "1"),
        this.getItemTemplate(component, "2"),
        this.getItemTemplate(component, "3"),
        this.getItemTemplate(component, "4")
      ]
    };
  },

  componentSetting: function (component) {
    var template = this.getTemplate(component);
    return component.find("util").parseTemplate("lightning:layout", template);
  },

  create: function (component, componentSetting) {
    component.find("preview").createComponents(component, componentSetting);
  },

  renderCode: function (component) {
    console.log("render code");
    component.find("highlight").highlightCode(component.get("v.code"));
  }
})
