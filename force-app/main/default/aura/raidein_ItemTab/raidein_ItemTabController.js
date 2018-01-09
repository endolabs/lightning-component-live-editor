({
    tabSelected: function(component,event,helper) {
        console.log(component.get("v.selTabId"));
    },
    
    update: function(component, event, helper) {
        var componentSetting = helper.componentSetting(component);
        component.set("v.code", componentSetting.code);
        
        helper.create(component, componentSetting);
        helper.renderCode(component);
    }
})
