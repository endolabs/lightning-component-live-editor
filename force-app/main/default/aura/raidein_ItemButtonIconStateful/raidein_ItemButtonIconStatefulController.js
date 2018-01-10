({
  handleClick: function (component, event, helper) {
    var buttonSelected = component.get('v.selected');
    component.set('v.selected', !buttonSelected);
  },

  init: function (component, event, helper) {
    var iconNames = component.find("util").getUtilityIconNames().map(function (icon) {
      return 'utility:' + icon;
    });

    component.set("v.iconNames", iconNames);
    helper.update(component);
  },

  update: function (component, event, helper) {
    helper.update(component);
  },
})