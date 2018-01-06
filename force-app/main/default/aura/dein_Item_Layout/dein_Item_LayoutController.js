({
	update : function(component, event, helper) {        
        var code = helper.buildCode(component);
        component.set("v.code", code);
        
        helper.create(component);
        helper.renderCode(component);
	},
})