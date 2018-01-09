({
    update : function(component) {
        var componentSetting = this.componentSetting(component);
       
        var code = componentSetting.code;
        component.set("v.code", code);
        
        this.create(component, componentSetting.componentName, componentSetting.componentAttributes);
        this.renderCode(component);
    },
    
    componentSetting : function(component) {
        return component.find("util").parseTemplate('lightning:helptext', {
            '@content': component.get("v.content"),
            '@iconName': component.get("v.iconName")
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
