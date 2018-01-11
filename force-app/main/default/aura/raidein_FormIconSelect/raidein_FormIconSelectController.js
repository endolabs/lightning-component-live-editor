({
  init: function (component, event, helper) {
    var iconNames = component.find("util").getUtilityIconNames().map(function (icon) {
      return 'utility:' + icon;
    });

    component.set("v.iconNames", iconNames);
  },

  onchange: function (component, event, helper) {
    var event = component.getEvent("onchange");
    event.fire();
  }
})