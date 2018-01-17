({
  init: function (component, event, helper) {
    component.set("v.mycolumns", helper.sampleColumns(component));
    component.set("v.mydata", helper.sampleData(component));

    helper.update(component);
  },

  update: function (component, event, helper) {
    helper.update(component);
  },
})
