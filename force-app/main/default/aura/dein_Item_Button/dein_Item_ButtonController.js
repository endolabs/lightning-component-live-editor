({
    update : function(component, event, helper) {
        console.log("update");
        
        component.set("v.code",
                '<lightning:input label="' + component.get("v.label") + '" variant="' 
                + component.get("v.variant") + '" />');
        
        helper.create(component);
        helper.renderCode(component);
    },
})