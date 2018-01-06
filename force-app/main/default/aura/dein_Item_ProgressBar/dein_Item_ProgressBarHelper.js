({
	create : function(component) {
        component.find("preview")
          .createComponent(component, "lightning:progressBar",
                    {
                        "variant": component.get("v.variant"),
                        "value": component.get("v.progress"),
                        "size": component.get("v.size")
                    });
    },
    
    renderCode : function(component) {
        component.find("highlight").highlightCode(component.get("v.code"));
    }
})