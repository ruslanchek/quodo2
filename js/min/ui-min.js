var UI={settings:{templateSettings:{interpolate:/\{\{(.+?)\}\}/g}}};UI.Template=function(t){_.templateSettings=UI.settings.templateSettings;var e=function(){var e=$("#"+t).html();return e?e:void console.error("UI.Template","Template is empty!")};this.render=function(t){var n=_.template(e());return n(t)}},UI.Checker=function(t){var e=this;this.options=$.extend({selector:".checker",onCheck:function(t){},onUncheck:function(t){}},t),$(this.options.selector).find(">a").off("click.UIChecker").on("click.UIChecker",function(t){t.preventDefault();var n="";$(this).data("activeClass")&&(n=" "+$(this).data("activeClass")),$(this).hasClass("active")?($(this).removeClass("active"+n),e.options.onUncheck($(this))):($(this).addClass("active"+n),e.options.onCheck($(this)))})},UI.Popup=function(t){var e=this;this.$popup=null,this.options=$.extend({templateName:"template-ui-popup",onShow:function(){},onHide:function(){}},t);var n=function(){i(),e.$popup&&e.$popup.find(".close").on("click",function(t){t.preventDefault(),e.hide()}),$(document).on("keyup.UIPopup",function(t){switch(t.keyCode){case 27:e.hide()}})},i=function(){$(document).off("keyup.UIPopup")},o=new UI.Template(e.options.templateName),p=function(t,e){return o.render({title:t,content:e})};this.changeContent=function(t){this.$popup&&this.$popup.find(".content").html(t)},this.changeTitle=function(t){this.$popup&&this.$popup.find(".title").html(t)},this.show=function(t,e){this.hide(),this.$popup=$(p(t,e)),$("body").append(this.$popup),this.options.onShow(),n()},this.hide=function(){i(),this.$popup&&this.$popup.remove(),this.options.onHide()}};