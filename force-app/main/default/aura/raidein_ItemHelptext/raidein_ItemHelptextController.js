({
    init : function(component, event, helper) {
        var iconNames = component.find("util").getUtilityIconNames().map(function(icon) {
            return 'utility:' + icon; 
        });
        // iconNames.push('action:change_record_type');
        
        component.set("v.iconNames", iconNames);
        helper.update(component);
    },
    
    update : function(component, event, helper) {
        helper.update(component);
    },
})
