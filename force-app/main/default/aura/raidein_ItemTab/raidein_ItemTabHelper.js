({
  getTemplate: function (component) {
    return {
      "@selectedTabId": component.get("v.selTabId"),
      "lightning:tab": [
        {
          "@aura:id": "tab1",
          "@tabindex": "1",
          "@id": "tab1",
          "@title": "Tab 1",
          "@label": "Tab 1",
          "aura:text": { "@value": "First Tab" }
        },
        {
          "@aura:id": "tab2",
          "@tabindex": "2",
          "@id": "tab2",
          "@title": "Tab 2",
          "aura:set": {
            "@attribute": "label",
            "aura:text": { "@value": "Tab 2" },
            "lightning:icon": { "@iconName": "utility:connected_apps" }
          },
          "aura:text": { "@value": "Second Tab" }
        }
      ]
    };
  },

  componentSetting: function (component) {
    var template = this.getTemplate(component);
    return component.find("util").parseTemplate("lightning:tabset", template);
  },

  create: function (component, componentSetting) {
    // FIXME: template cause exception!
    // aura://ComponentController: java.lang.ClassCastException: java.lang.String cannot be cast to java.util.List
    // component.find("preview").createComponents(component, componentSetting);
  },

  renderCode: function (component) {
    console.log("render code");
    component.find("highlight").highlightCode(component.get("v.code"));
  }
})
