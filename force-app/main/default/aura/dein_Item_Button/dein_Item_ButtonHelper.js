({
	create : function(component) {
        component.find("preview")
          .createComponent(component, "lightning:button",
                    {
                        "label": component.get("v.label"),
                        "variant": component.get("v.variant")
                    });
    },
    
    renderCode : function(component) {
        console.log("button render code.");
        component.find("highlight").highlightCode(component.get("v.code"));
    }
})