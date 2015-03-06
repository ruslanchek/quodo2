var UI={settings:{templateSettings:{interpolate:/\{\{(.+?)\}\}/g}}};UI.ClickOutside=function(t){var i=this,n=_.uniqueId("UIClickOutside_");this.options=$.extend({selector:"",onClickOutside:function(t){}},t),this.bind=function(){this.unbind(),$(document).on("mouseup."+n,function(t){var n=$(i.options.selector);n.is(t.target)||0!==n.has(t.target).length||i.options.onClickOutside(t.target)})},this.unbind=function(){$(document).off("mouseup."+n)}},UI.Animate=function(t){var i=this,n={};this.options=$.extend({$element:"",animationDuration:300},t),n.fadeIn=function(t){i.options.$element.transition({opacity:1},i.options.animationDuration),t()},n.fadeOut=function(t){i.options.$element.transition({opacity:0},i.options.animationDuration),t()},n.appear=function(t){i.options.$element.transition({scale:0,opacity:1,perspective:"1500px",rotateX:"-90deg"},0),setTimeout(function(){i.options.$element.transition({scale:1,opacity:1,rotateX:"0deg"},i.options.animationDuration,"easeOutBack"),t()},50)},n.disappear=function(t){i.options.$element.transition({scale:0,opacity:1,rotateX:"90deg"},i.options.animationDuration,"easeInBack"),t()},this.play=function(t,e){n[t]?n[t](function(){setTimeout(function(){e&&e()},i.options.animationDuration)}):console.error("UI.Animate","Animation method not defined",t)}},UI.Template=function(t){var i=this;_.templateSettings=UI.settings.templateSettings;var n=function(){var i=$("#"+t).html();return i?i:void console.error("UI.Template","Template is empty",t)};this.render=function(t){var i=_.template(n());return i(t)}},UI.Checker=function(t){var i=this;this.options=$.extend({selector:".checker",onCheck:function(t){},onUncheck:function(t){},onToggle:function(t,i){}},t);var n=$(this.options.selector).find(">a");n.each(function(){$(this).data("originalContent",$(this).html())}),n.off("click.UIChecker").on("click.UIChecker",function(t){t.preventDefault();var n="";$(this).data("activeClass")&&(n=" "+$(this).data("activeClass")),$(this).data("toggledContent")&&$(this).html($(this).data("toggledContent")!=$(this).html()?$(this).data("toggledContent"):$(this).data("originalContent")),$(this).hasClass("active")?($(this).removeClass("active"+n),i.options.onUncheck($(this)),i.options.onToggle(!1,$(this))):($(this).addClass("active"+n),i.options.onCheck($(this)),i.options.onToggle(!0,$(this)))})},UI.Popup=function(t){var i=this,n=_.uniqueId("UIPopup_"),e,o,s=!1,a=null,p=null,u=null;this.$popup=null,this.state="idle",this.options=$.extend({width:400,animationDuration:500,modal:!0,overlay:!0,onBeforeShow:function(){},onShow:function(t){},onHide:function(t){}},t),this.options.modal!==!0&&(u=new UI.ClickOutside({selector:".popup#"+n+" .window",onClickOutside:function(t){i.hide()}}));var c=function(){l(),i.$popup&&(i.$popup.find(".close").on("click",function(t){t.preventDefault(),i.hide()}),!i.options.modal&&u&&u.bind()),$(window).on("resize.UIPopup",function(){d()}),$(document).on("keyup.UIPopup",function(t){switch(t.keyCode){case 27:i.hide()}})},l=function(){$(document).off("keyup.UIPopup"),i.options.modal||null===u||u.unbind()},r=function(t,e){var o=new UI.Template("template-ui-popup");return o.render({title:t,content:e,overlay:i.options.overlay?"":"no-overlay",_id:n})},d=function(){if(i.$popup){var t=i.$popup.find(".window").outerHeight();i.$popup.find(".window").css({width:i.options.width,marginTop:-t/2,marginLeft:-i.options.width/2})}};this.showMessage=function(t,n,e){this.hideMessage(function(){var o=new UI.Template("template-ui-popup-message"),p="";switch(t){case"error":p="error";break;case"success":p="success";break;default:p=""}var u=o.render({className:p,content:e});i.$popup&&(i.$popup.find(".messages").html(u).transition({height:i.$popup.find(".messages > .message").outerHeight()},300,"easeOutQuad"),setTimeout(function(){n>0&&(a=setTimeout(function(){i.hideMessage()},n))},300)),s=!0})},this.hideMessage=function(t){clearTimeout(a),s?(this.$popup.find(".messages").transition({height:0},200,"easeOutQuad"),setTimeout(function(){s=!1,i.$popup.find(".messages").empty(),t&&t()},200)):(s=!1,t&&t())},this.changeContent=function(t){this.$popup&&(this.$popup.find(".content").html(t),d())},this.changeTitle=function(t){this.$popup&&(this.$popup.find(".title").html(t),d())},this.setWaitingMode=function(t,n){clearTimeout(p),this.state="waiting",i.$popup&&(i.$popup.find(".window").addClass("wait"),t>0&&(p=setTimeout(function(){i.removeWaitingMode(),n&&n()},t)))},this.removeWaitingMode=function(){clearTimeout(p),this.state="idle",i.$popup&&i.$popup.find(".window").removeClass("wait")},this.show=function(t,n){this.hide(),this.$popup=$(r(t,n)),$("body").append(this.$popup),this.options.modal&&$("html,body").css("overflow","hidden"),d(),i.options.onBeforeShow(i),e=new UI.Animate({$element:this.$popup.find(".window"),animationDuration:this.options.animationDuration}),o=new UI.Animate({$element:this.$popup.find(".overlay"),animationDuration:this.options.animationDuration}),o.play("fadeIn"),e.play("appear",function(){c(),i.options.onShow(i)})},this.hide=function(){this.$popup&&(o.play("fadeOut"),e.play("disappear",function(){l(),i.$popup.remove(),i.options.onHide(i),i.$popup=null,e=null,o=null,i.options.modal&&$("html,body").css("overflow","auto")}))}},UI.Tabs=function(t){var i=this,n=_.uniqueId("UITabs_"),e;this.options=$.extend({tabsSelector:"#tabs",tabsContentSelector:"#tabs-content",sliding:!0,onTabOpen:function(t){}},t);var o=$(this.options.tabsSelector),s=$(this.options.tabsContentSelector),a=null;this.openTab=function(t){return e=t,c(),u(),this.options.onTabOpen(t),t},this.next=function(){var t=o.find(">a.active").next("a");return t.length>0?i.openTab(p(t)):void 0},this.prev=function(){var t=o.find(">a.active").prev("a");return t.length>0?i.openTab(p(t)):void 0},this.getActive=function(){return active};var p=function(t){var i=t.attr("href");return i?i.substr(1,i.length):void 0},u=function(t){i.options.sliding!==!0||t||s.addClass("sliding");var n=s.find(".page").filter('[data-tab="'+e+'"]');s.find(".page").removeClass("active"),n.addClass("active"),l(),i.options.sliding!==!0||t||(clearTimeout(a),a=setTimeout(function(){s.removeClass("sliding")},450))},c=function(){var t=o.find('>a[href="#'+e+'"]');o.find(">a").removeClass("active"),t.addClass("active"),t.length>0&&o.find(">.marker").css({left:t.position().left,top:t.position().top,width:t.outerWidth(),height:t.outerHeight()})},l=function(){var t=s.width()-(s.outerWidth()-s.width()),i=s.find(".page"),n=i.filter(".active");i.css({width:t}),s.find(".pages").css({width:t*i.length,left:-n.position().left}),s.css({height:n.outerHeight()})},r=function(){o.find(">a").off("click").on("click",function(t){t.preventDefault(),i.openTab(p($(this)))}),s.wrapInner('<div class="pages"></div>'),s.find(".page").css({display:"block"}),e=p(o.find(">a.active")),c(),u(!0),i.options.sliding===!0&&setTimeout(function(){o.addClass("sliding")},1),$(window).off("resize."+n).on("resize."+n,function(){l()})};o.length>0&&s.length>0&&r()},UI.Fullscreen=function(t){var i=this,n=_.uniqueId("UIFullscreen_");this.options=$.extend({},t),this.$fs=null};