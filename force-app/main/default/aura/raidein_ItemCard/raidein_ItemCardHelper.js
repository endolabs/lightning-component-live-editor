({
  getTemplate: function (component) {
    return {
      "@iconName": component.get("v.iconName"),
      "@variant": component.get("v.variant"),
      "aura:set": [
        {
          "@attribute": "title",
          "aura:text": {
            "@value": "Hello!"
          }
        },
        {
          "@attribute": "footer",
          "lightning:button": {
            "@label": "footer"
          }
        },
        {
          "@attribute": "actions",
          "lightning:button": {
            "@label": "New"
          }
        }
      ],
      "p": {
        "@class": "slds-p-horizontal--small",
        "aura:text": { "@value": "Card Body (custom component)" }
      }
    };
  },

  componentSetting: function (component) {
    var template = this.getTemplate(component);
    return component.find("util").parseTemplate("lightning:card", template);
  },

  create: function (component, componentSetting) {
    component.find("preview").createComponents(component, componentSetting);
  },

  renderCode: function (component) {
    console.log("render code");
    component.find("highlight").highlightCode(component.get("v.code"));
  }
})
