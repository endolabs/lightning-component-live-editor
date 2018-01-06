({
	create : function(component) {
        var toAdd = [];
        toAdd.push([ "lightning:accordion", { activeSectionName: 'B' } ]);
        [ 'A', 'B', 'C' ].forEach(function(name) {
            toAdd.push([ "lightning:accordionSection", {
                name: name,
                label: "Accordion Title " + name,
                
            } ]); 
            toAdd.push([ "aura:text", { "value": 'This is the content area for section ' + name }]);
        });
        
        $A.createComponents(toAdd, function(components, status, errorMessage) {
                if (status === "SUCCESS") { 
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
        console.log("button render code.");
        component.find("highlight").highlightCode(component.get("v.code"));
    }
})