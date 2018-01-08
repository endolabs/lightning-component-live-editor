({
	parseTemplate : function(componentName, template) {
        var parseTemplateInternal = function(componentName, template, depth) {
            var indent = Array(depth+1).join('  ');
            var cmpAttrs = {};
            var code = indent + '<' + componentName;
            var children = [];
            
            var keys = Object.keys(template);
            var attrs = [];
            
            keys.forEach(function(key) {
               if (key[0] === '@') { // attribute
                   var attrName = key.substring(1);
                   var attrValue = template[key];
            
                   attrs.push(attrName + '="' + attrValue + '"');
                   cmpAttrs[attrName] = attrValue;
               } else {
                   var value = template[key];
                   
                   if (typeof value === 'string' || value instanceof String) {
                       console.log("[WARN] invalid attriubute name or value", key, value);
                       return;
                   }
                   
                   if (Array.isArray(value)) {
                       value.forEach(function(child) {
                           children.push(parseTemplateInternal(key, child, depth+1));
                       });
                   } else {
                       children.push(parseTemplateInternal(key, value, depth+1));
                   }
               }
            });
            code += ' ' + attrs.join(" ");
            
            if (children.length) {
                code += '>'; // close start tag
                children.forEach(function(child) {
                    code += '\n' + child.code;
                });
                code += indent + '</' + componentName + '>\n'; // end tag
            } else {
                code += ' />\n'; // self closing
            }
            
            return {
                componentName: componentName,
                componentAttributes: cmpAttrs,
                code: code,
                children: children
            };
        };
        
        var parsed = parseTemplateInternal(componentName, template, 0);
        var order = 0;
        if (parsed.children.length) {
            var components = [];
            var pushCmp = function(cmp) {
                cmp.order = order++;
                
                components.push([ cmp.componentName, cmp.componentAttributes ]);
                (cmp.children || []).forEach(function(child) {
                   pushCmp(child); 
                });
            };            
            pushCmp(parsed);
            parsed.components = components;
        }
        
        return parsed;
	},
    
    getUtilityIconNames: function() {
        return [
            'activity', 'ad_set', 'add', 'adduser', 'anchor', 'animal_and_nature',
            'announcement', 'answer', 'answered_twice', 'apex', 'approval', 'apps',
            'arrowdown', 'arrowup', 'attach', 'automate', 'back', 'ban',
            'block_visitor', 'bold','bookmark', 'breadcrumbs', 'broadcast', 'brush',
            'bucket', 'builder', 'call', 'campaign', 'cancel_file_request', 'cancel_transfer',
            'capslock', 'case', 'cases', 'center_align_text', 'change_owner', 'change_record_type',
            'chart', 'chat', 'check', 'checkin', 'chevrondown', 'chevronleft',
            'chevronright', 'chevronup', 'classic_interface', 'clear', 'clock', 'close',
            'collapse_all', 'comments', 'company', 'connected_apps', 'contract_alt', 'contract',
            'copy_to_clipboard', 'copy', 'crossfilter', 'custom_apps', 'cut', 'dash',
            'database', 'datadotcom', 'dayview', 'delete', 'deprecate', 'description',
            'desktop', 'dislike', 'dock_panel', 'down', 'download', 'edit_form',
            'edit', 'email', 'emoji', 'end_call', 'end_chat', 'erect_window',
            'error', 'event', 'expand_all', 'expand_alt', 'expand', 'fallback',
            'favorite', 'feed', 'file', 'filter', 'filterList', 'flow',
            'food_and_drink', 'forward', 'frozen', 'full_width_view', 'graph', 'groups',
            'help', 'hide', 'home', 'identity', 'image', 'inbox',
            'info_alt', 'info', 'insert_tag_field', 'insert_template', 'internal_share', 'italic',
            'jump_to_bottom', 'jump_to_top', 'justify_text', 'kanban', 'keyboard_dismiss', 'knowledge_base',
            'layers', 'layout', 'left_align_text', 'left', 'level_up', 'light_bulb',
            'like', 'link', 'list', 'location', 'lock', 'log_a_call',
            'logout', 'lower_flag', 'macros', 'magicwand', 'mark_all_as_read', 'matrix',
            'merge_field', 'merge', 'metrics', 'minimize_window', 'moneybag', 'monthlyview',
            'move', 'muted', 'new_direct_message', 'new_window', 'new', 'news',
            'note', 'notebook', 'notification', 'office365', 'offline_cached', 'offline',
            'omni_channel', 'open_folder', 'open', 'opened_folder', 'overflow', 'package_org_beta',
            'package_org', 'package', 'page', 'palette', 'paste', 'pause',
            'people', 'phone_landscape', 'phone_portrait', 'photo', 'picklist', 'pin',
            'pinned', 'power', 'preview', 'priority', 'privately_shared', 'process',
            'push', 'puzzle', 'question_mark', 'question', 'questions_and_answers', 'quick_text',
            'quotation_marks', 'rating', 'record_create', 'record', 'redo', 'refresh',
            'relate', 'reminder', 'remove_formatting', 'remove_link', 'replace', 'reply_all',
            'reply', 'reset_password', 'resource_absence', 'resource_capacity', 'resource_territory', 'retweet',
            'richtextbulletedlist', 'richtextindent', 'richtextnumberedlist', 'richtextoutdent', 'right_align_text', 'right',
            'rotate', 'rows', 'rules', 'salesforce1', 'save', 'search',
            'settings', 'setup_assistant_guide', 'setup', 'share_file', 'share_mobile', 'share_post',
            'share', 'shield', 'shopping_bag', 'side_list', 'signpost', 'smiley_and_people',
            'sms', 'snippet', 'socialshare', 'sort', 'spinner', 'standard_objects',
            'stop', 'strikethrough', 'success', 'summary', 'summarydetail', 'switch',
            'symbols', 'sync', 'table', 'tablet_landscape', 'tablet_portrait', 'tabset',
            'task', 'text_background_color', 'text_color', 'threedots_vertical', 'threedots', 'thunder',
            'tile_card_list', 'topic', 'touch_action', 'trail', 'travel_and_places', 'trending',
            'turn_off_notifications', 'type_tool', 'undelete', 'undeprecate', 'underline', 'undo',
            'unlock', 'unmuted', 'up', 'upload', 'user_role', 'user',
            'video', 'voicemail_drop', 'volume_high', 'volume_low', 'volume_off', 'warning',
            'weeklyview', 'wifi', 'work_order_type', 'world', 'yubi_key', 'zoomin',
            'zoomout'
        ];
    }
})