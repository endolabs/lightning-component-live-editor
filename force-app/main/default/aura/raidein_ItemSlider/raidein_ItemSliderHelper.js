({
  componentSetting: function (component) {
    return component.find("util").parseTemplate('lightning:slider', {
      '@name': 'select',
      '@value': component.get("v.value"),
      '@label': component.get("v.label"),
      '@variant': component.get("v.variant"),
      '@min': component.get("v.min"),
      '@max': component.get("v.max"),
      '@step': component.get("v.step"),
      '@size': component.get("v.size"),
      '@messageWhenBadInput': component.get("v.messageWhenBadInput"),
      '@messageWhenPatternMismatch': component.get("v.messageWhenPatternMismatch"),
      '@messageWhenTypeMismatch': component.get("v.messageWhenTypeMismatch"),
      '@messageWhenValueMissing': component.get("v.messageWhenValueMissing"),
      '@messageWhenRangeOverflow': component.get("v.messageWhenRangeOverflow"),
      '@messageWhenRangeUnderflow': component.get("v.messageWhenRangeUnderflow"),
      '@messageWhenStepMismatch': component.get("v.messageWhenStepMismatch"),
      '@messageWhenTooLong': component.get("v.messageWhenTooLong")
    });
  },

  create: function (component, componentSetting) {
    component.find("preview").createComponent(component, componentSetting.componentName, componentSetting.componentAttributes);
  },

  renderCode: function (component) {
    component.find("highlight").highlightCode(component.get("v.code"));
  }
})
