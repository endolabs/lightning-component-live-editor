({
    update : function(component, event, helper) {
        var codeInfo = helper.codeInfo(component);
       
        var code = codeInfo.code;
        component.set("v.code", code);
        
        component.set("v.toggleSpinner", true);         
        helper.create(component, codeInfo.componentName, codeInfo.componentAttributes);
        helper.renderCode(component);
        
        setTimeout(function() {
            component.set("v.toggleSpinner", false); 
        }, 1000);
    },
})