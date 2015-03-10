hljs.initHighlightingOnLoad();var Demo={};Demo.Table=function(){this.initChecker=function(){var e=new UI.Checker({selector:"#table-checker",onCheck:function(e){$("#table-sample").addClass(e.data("type"))},onUncheck:function(e){$("#table-sample").removeClass(e.data("type"))}})},this.init=function(){return this.initChecker(),this}},Demo.Checker=function(){this.initChecker=function(){var e=new UI.Checker({selector:"#sample-checker"})},this.init=function(){return this.initChecker(),this}},Demo.Popup=function(){var e=this;this.initPopup1=function(){var t=new UI.Template("template-demo-popup-1-content").render();this.samplePopup1=new UI.Popup({width:500,onShow:function(e){var t=new UI.Checker({selector:"#popup-sample-waiting-checker",onCheck:function(){e.setWaitingMode(2e3,function(){$("#popup-sample-waiting-checker a").click()})},onUncheck:function(){e.removeWaitingMode()}})}}),$("#show-sample-popup-1").on("click",function(n){n.preventDefault(),e.samplePopup1.show("Waiting mode",t)})},this.initPopup2=function(){var t=new UI.Template("template-demo-popup-2-content").render();this.samplePopup2=new UI.Popup({width:500,onShow:function(e){$("#popup-sample-messages-error").on("click",function(){e.showMessage("error",5e3,'Here is your error message! <span class="text-fade">Will disappear in 5 seconds.</span>')}),$("#popup-sample-messages-success").on("click",function(){e.showMessage("success",5e3,'Here is your success message! <span class="text-fade">Will disappear in 5 seconds.</span>')})}}),$("#show-sample-popup-2").on("click",function(n){n.preventDefault(),e.samplePopup2.show("Messages system",t)})},this.initPopup3=function(){var t=new UI.Template("template-demo-popup-3-content").render();this.samplePopup3=new UI.Popup({width:500,overlay:!1,modal:!1,onShow:function(e){$("#popup-sample-messages-error").on("click",function(){e.showMessage("error",5e3,'Here is your error message! <span class="text-fade">Will disappear in 5 seconds.</span>')}),$("#popup-sample-messages-success").on("click",function(){e.showMessage("success",5e3,'Here is your success message! <span class="text-fade">Will disappear in 5 seconds.</span>')})}}),$("#show-sample-popup-3").on("click",function(n){n.preventDefault(),e.samplePopup3.show("Not modal",t)})},this.initPopup4=function(){var t=new UI.Template("template-demo-popup-4-content").render();this.samplePopup4=new UI.Popup({width:500,overlay:!0,modal:!0,onBeforeShow:function(e){var t=new UI.Tabs({tabsSelector:"#tabs-popup",tabsContentSelector:"#tabs-popup-content",sliding:!0});$("#tabs-popup-content .tab-trigger").on("click",function(e){e.preventDefault(),t.openTab($(this).data("name"))})},onShow:function(e){}}),$("#tabs-popup-trigger").on("click",function(n){n.preventDefault(),e.samplePopup4.show("Tabs are inside",t)})},this.init=function(){return this.initPopup1(),this.initPopup2(),this.initPopup3(),this.initPopup4(),this}},Demo.Tabs=function(){var e=this;this.initTabs=function(){this.sampleTabs=new UI.Tabs({tabsSelector:"#tabs",tabsContentSelector:"#tabs-content",sliding:!0}),$("#tabs-content .tab-trigger").on("click",function(t){t.preventDefault(),e.sampleTabs.openTab($(this).data("name"))})},this.init=function(){return this.initTabs(),this}},Demo.Fullscreen=function(){var e=this;this.initFullscreen1=function(){this.sampleFullscreen1=new UI.Fullscreen,$("#fullscreen-demo-1").on("click",function(t){t.preventDefault(),e.sampleFullscreen1.show("Fullscreen demo 1","Simple photo demo",'<img width="100%" src="http://lorempixel.com/1200/1200/?123"/>','<div class="button-group"><a class="button wireframe bg-cold-light" href="#">Send</a><a class="button wireframe bg-heat-light" href="#">Delete</a></div>')})},this.initFullscreen2=function(){this.sampleFullscreen2=new UI.Fullscreen,$("#fullscreen-demo-2").on("click",function(t){t.preventDefault(),e.sampleFullscreen2.show("Fullscreen demo 1","Simple photo demo",'<img width="100%" src="http://lorempixel.com/1200/1200/?123"/>','<div class="button-group"><a class="button wireframe bg-cold-light" href="#">Send</a><a class="button wireframe bg-heat-light" href="#">Delete</a></div>')})},this.init=function(){return this.initFullscreen1(),this.initFullscreen2(),this}},Demo.init=function(){this.table=(new this.Table).init(),this.checker=(new this.Checker).init(),this.popup=(new this.Popup).init(),this.tabs=(new this.Tabs).init(),this.fullscreen=(new this.Fullscreen).init()},$(function(){Demo.init()});