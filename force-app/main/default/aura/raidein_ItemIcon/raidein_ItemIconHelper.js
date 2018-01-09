({
    componentSetting : function(component) {
        return component.find("util").parseTemplate('lightning:icon', {
            "@iconName": "action:approval",
            "@size": "large",
            "@alternativeText": "Indicates approval"
        });
    },
    
    create : function(component, name, attributes) {
        component.find("preview").createComponent(component, name, attributes);
    },
    
    renderCode : function(component) {
        console.log("button render code.");
        component.find("highlight").highlightCode(component.get("v.code"));
    }
})
