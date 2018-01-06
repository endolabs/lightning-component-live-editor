({
    update : function(component, event, helper) {
        console.log("update");
        
        var code = [
            '<lightning:accordion activeSectionName="B">',
            '    <lightning:accordionSection name="A" label="Accordion Title A">This is the content area for section A</lightning:accordionSection>',
            '    <lightning:accordionSection name="B" label="Accordion Title B">This is the content area for section B</lightning:accordionSection>',
            '    <lightning:accordionSection name="C" label="Accordion Title C">This is the content area for section C</lightning:accordionSection>',
            '</lightning:accordion>'
        ].join('\n');
        
        component.set("v.code", code);
        
        helper.create(component);
        helper.renderCode(component);
    },
})