({
    update : function(component, event, helper) {
        var componentSetting = helper.componentSetting(component);
       
        var code = componentSetting.code;
        component.set("v.code", code);
        
        component.set("v.toggleSpinner", true);         
        helper.create(component, componentSetting.componentName, componentSetting.componentAttributes);
        helper.renderCode(component);
        
        setTimeout(function() {
            component.set("v.toggleSpinner", false); 
        }, 1000);
    },
})
