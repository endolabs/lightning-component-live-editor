({
    update: function(component, event, helper) {
        var codeInfo = helper.codeInfo(component);
       
        var code = codeInfo.code;
        component.set("v.code", code);
        
        helper.create(component, codeInfo.componentName, codeInfo.componentAttributes);
        helper.renderCode(component);
    },
})
