({
	update : function(component, event, helper) {        
        var codeInfo = helper.codeInfo(component);
        component.set("v.code", codeInfo.code);
        
        helper.create(component, codeInfo);
        helper.renderCode(component);
	},
})