({
	getTemplate : function() {
        return {
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

    codeInfo: function(component) {
        var template = this.getTemplate(component);
        return component.find("util").parseTemplate("lightning:card", template);
    },
    
    create: function(component, codeInfo) {
        // FIXME: aura:set cannot be created via $A.createComponent(s)
        // component.find("preview").createComponents(component, codeInfo);
    },
    
    renderCode : function(component) {
        console.log("render code");
        component.find("highlight").highlightCode(component.get("v.code"));
    }
})
