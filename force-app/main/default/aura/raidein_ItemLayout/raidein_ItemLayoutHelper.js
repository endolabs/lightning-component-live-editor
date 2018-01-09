({
	getTemplate : function(component) {
        return {
            "@horizontalAlign": component.get("v.horizontalAlign"),
            "@pullToBoundary": component.get("v.pullToBoundary"),
            "lightning:layoutItem": [
              {
                "@flexibility": "auto",
                "@padding": "around-small",
                "aura:text": {
                  "@value": "1"
                }
              },
              {
                "@flexibility": "auto",
                "@padding": "around-small",
                "aura:text": {
                  "@value": "2"
                }
              },
              {
                "@flexibility": "auto",
                "@padding": "around-small",
                "aura:text": {
                  "@value": "3"
                }
              },
              {
                "@flexibility": "auto",
                "@padding": "around-small",
                "aura:text": {
                  "@value": "4"
                }
              }
            ]
        };
	},
    
    componentSetting: function(component) {
        var template = this.getTemplate(component);
        return component.find("util").parseTemplate("lightning:layout", template);
    },
    
    create: function(component, componentSetting) {
        component.find("preview").createComponents(component, componentSetting);
    },
    
    renderCode : function(component) {
        console.log("render code");
        component.find("highlight").highlightCode(component.get("v.code"));
    }
})
