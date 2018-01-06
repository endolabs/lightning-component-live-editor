({
	init : function(component, event, helper) {
        component.set('v.past', Date.now()-(2*60*60*1000));
        component.set('v.future', Date.now()+(2*24*60*60*1000));
	}
})