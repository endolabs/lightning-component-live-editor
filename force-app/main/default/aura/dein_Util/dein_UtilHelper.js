({
	parseTemplate : function(componentName, template) {
        var keys = Object.keys(template);
        
        var cmpAttrs = {};
        var code = '<' + componentName;
        
        keys.forEach(function(key) {
           var attrs = [];
           
           if (key[0] === '@') { // attribute
               var attrName = key.substring(1);
               var attrValue = template[key];
        
               attrs.push(attrName + '="' + attrValue + '"');
               cmpAttrs[attrName] = attrValue;
           } else {
               // TODO: child components
           }
        
           code += ' ' + attrs.join(" ");
        });
        
        code += ' />';
        
        return {
            componentName: componentName,
            componentAttributes: cmpAttrs,
            code: code
        };
	}
})