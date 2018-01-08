({
    init : function(component, event, helper) {
        component.set("v.iconNames", component.find("util").getUtilityIconNames());
        helper.update(component);
    },
    
    update : function(component, event, helper) {
        helper.update(component);
    },
})