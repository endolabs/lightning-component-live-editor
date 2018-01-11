({
  handleClick: function (component, event, helper) {
    var buttonSelected = component.get('v.selected');
    component.set('v.selected', !buttonSelected);
  },

  update: function (component, event, helper) {
    var componentSetting = helper.componentSetting(component);

    var code = componentSetting.code;
    component.set("v.code", code);

    helper.create(component, componentSetting.componentName, componentSetting.componentAttributes);
    helper.renderCode(component);
  },
})