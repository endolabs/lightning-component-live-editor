({
    create: function(component) {
        component.find("preview").createComponent(component, "lightning:badge", {
            "label": component.get("v.label") 
        });
    },
    
    renderCode: function(component) {
        component.find("highlight").highlightCode(component.get("v.code"));
    }
})