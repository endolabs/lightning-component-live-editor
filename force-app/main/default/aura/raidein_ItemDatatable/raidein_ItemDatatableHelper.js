({
  sampleColumns: function (component) {
    return [
      { label: 'Opportunity name', fieldName: 'opportunityName', type: 'text' },
      { label: 'Confidence', fieldName: 'confidence', type: 'percent' },
      { label: 'Amount', fieldName: 'amount', type: 'currency', typeAttributes: { currencyCode: 'EUR' } },
      { label: 'Contact Email', fieldName: 'contact', type: 'email' },
      { label: 'Contact Phone', fieldName: 'phone', type: 'phone' }
    ];
  },

  sampleData: function (component) {
    return [{
      id: 'a',
      opportunityName: 'Cloudhub',
      confidence: 0.2,
      amount: 25000,
      contact: 'jrogers@cloudhub.com',
      phone: '2352235235'
    },
    {
      id: 'b',
      opportunityName: 'Quip',
      confidence: 0.78,
      amount: 740000,
      contact: 'quipy@quip.com',
      phone: '2352235235'
    }];
  },

  update: function (component) {
    var componentSetting = this.componentSetting(component);
    component.set("v.code", componentSetting.code);

    this.create(component, componentSetting);
    this.renderCode(component);
  },

  componentSetting: function (component) {
    return component.find("util").parseTemplate('lightning:datatable', {
      '@data': component.get("v.mydata"),
      '@columns': component.get("v.mycolumns"),
      '@keyField': 'id'
    });
  },

  create: function (component, componentSetting) {
    component.find("preview").createComponent(component,
      componentSetting.componentName, componentSetting.componentAttributes);
  },

  renderCode: function (component) {
    console.log("button render code.");
    component.find("highlight").highlightCode(component.get("v.code"));
  }
})
