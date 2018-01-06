({
	handleToggle : function(component, event, helper) {
        var liked = component.get("v.liked");
        component.set("v.liked", !liked);
	}
})