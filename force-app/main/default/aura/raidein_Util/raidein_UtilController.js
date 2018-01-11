({
  parseTemplate: function (component, event, helper) {
    var params = event.getParams().arguments;

    var componentName = params.componentName;
    var template = params.template;
    return helper.parseTemplate(componentName, template);
  },

  getUtilityIconNames: function (component, event, helper) {
    return helper.getUtilityIconNames();
  }
})