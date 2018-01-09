({    
	getTemplate : function() {
        var dtdd = function(parentClass, childClass, childTitle, childText) {
            return {
                "@class": parentClass,
                "p": {
                    "@class": childClass,
                    "@title": childTitle,
                    "aura:text": { "@value": childText }
                }
            };
        };
        
        return {
            "@label": "Salesforce UX",
            "@href": "/path/to/somewhere",
            "aura:set": [
                {
                    "@attribute": "media",
                    "lightning:icon": {
                        "@iconName": "standard:groups"
                    }
                }
            ],
            // FIXME:
            "dl": [
                { "dt": dtdd("slds-dl--horizontal__label", "slds-truncate", "Company", "Company:") },
                { "dd": dtdd("slds-dl--horizontal__detail slds-tile__meta", "slds-truncate", "Salesforce", "Salesforce") },
                { "dt": dtdd("slds-dl--horizontal__label", "slds-truncate", "Email", "Email:") },
                { "dd": dtdd("slds-dl--horizontal__detail slds-tile__meta", "slds-truncate",
                            "salesforce-ux@salesforce.com", "salesforce-ux@salesforce.com") }
            ]
        };
	},

    codeInfo: function(component) {
        var template = this.getTemplate(component);
        return component.find("util").parseTemplate("lightning:tile", template);
    },
    
    create: function(component, codeInfo) {
        component.find("preview").createComponents(component, codeInfo);
    },
    
    renderCode : function(component) {
        console.log("render code");
        component.find("highlight").highlightCode(component.get("v.code"));
    }
})