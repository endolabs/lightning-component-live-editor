({
    update: function(component, event, helper) {
        var code = '<lightning:badge label="' + component.get("v.label") + '" />';
        component.set("v.code", code);
        
        helper.create(component);
        helper.renderCode(component);
    },
})