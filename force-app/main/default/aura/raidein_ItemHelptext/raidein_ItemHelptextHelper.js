({
    update : function(component) {
        var codeInfo = this.codeInfo(component);
       
        var code = codeInfo.code;
        component.set("v.code", code);
        
        this.create(component, codeInfo.componentName, codeInfo.componentAttributes);
        this.renderCode(component);
    },
    
    codeInfo : function(component) {
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
