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
                  "@value": "3"
                }
              },
              {
                "@flexibility": "auto",
                "@padding": "around-small",
                "aura:text": {
                  "@value": "4"
                }
              },
              {
                "@flexibility": "auto",
                "@padding": "around-small",
                "aura:text": {
                  "@value": "1"
                }
              }
            ]
        };
	},
    
    layoutAttribute: function(component) {
        return { 
            "horizontalAlign": component.get("v.horizontalAlign"),
            "pullToBoundary": component.get("v.pullToBoundary")
        };
    },
    
    layoutItemAttribute: function(component) {
        return {
            "flexibility": "auto",
            "padding": "around-small"
        };
    },
    
    buildCode: function(component) {
        var template = this.getTemplate(component);
        var codeInfo = component.find("util").parseTemplate("lightning:layout", template);
        return codeInfo.code;
    },

    create: function(component) {
        var layoutAttribute = this.layoutAttribute(component);
        var layoutItemAttribute = this.layoutItemAttribute(component);
        
        var toAdd = [];
        toAdd.push([ "lightning:layout", layoutAttribute ]);
        for (var i=0; i<4; i++) {
            toAdd.push([ "lightning:layoutItem", layoutItemAttribute ]);
            toAdd.push([ "aura:text", { "value": i+1 }])
        }
                
        $A.createComponents(toAdd, function(components, status, errorMessage) {
                if (status === "SUCCESS") { 
                    // var [layout, item1, item2, text1, text2] = components;
                    // 
                    var layout = components[0];
                    
                    var body = layout.get("v.body");
                    
                    for (var i=1; i<components.length; i+=2) {
                        var item = components[i];
                        var text = components[i+1];
                        item.set("v.body", text);
                        
                        body.push(item);
                    }
                    
                    layout.set("v.body", body);
                    
                    component.set("v.body", layout);
                }
                else if (status === "INCOMPLETE") {
                    console.log("No response from server or client is offline.")
                    // Show offline error
                }
                else if (status === "ERROR") {
                    console.log("Error: " + errorMessage);
                    // Show error message
                }
            }
        );        
    },
    
    renderCode : function(component) {
        console.log("render code");
        component.find("highlight").highlightCode(component.get("v.code"));
    }
})