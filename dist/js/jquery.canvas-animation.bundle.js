!function(g){g.fn.canvasAnimationEditor=function(o){var r=this,a=[],i="",d="",p="",m="",u=0,v=0;o=g.extend({enable:!1,decimal:2,draggableItems:!0,labels:{top:"top",left:"left",width:"width",height:"height",newItem:"New: ",newItemBlank:"Blank",newItemExt:"Extended",select:"Select: ",selectCss:"CSS",selectHtml:"HTML",remove:"Remove: ",removeItem:"Item",removeStyle:"Style",className:"CSS class name",parentWidth:"Parent width in px",parentHeight:"Parent height in px",itemWidth:"Item width in px",itemHeight:"Item height in px",itemTop:"Item offset top in px",itemLeft:"Item offset left in px",confirmAppendPrepend:"OK = append item / Cancel = prepend item",confirmRemoveItem:"Are you sure to remove item?",confirmRemoveStyle:"Are you sure to remove style?",alertCanvasId:'Canvas needs attribute "id".'},template:'<div class="jca-editor"><div class="jca-container"><div class="jca-col jca-cord-dimension"><div class="jca-box"><div class="jca-label jca-top"></div><div class="jca-label jca-left"></div><div class="jca-label jca-width"></div><div class="jca-label jca-height"></div><input type="number" step="0.01" name="jca_top" /><input type="number" step="0.01" name="jca_left" /><input type="number" step="0.01" name="jca_width" /><input type="number" step="0.01" name="jca_height" /></div></div><div class="jca-col jca-selector-breadcrumb"></div><div class="jca-col"><div id="jca-html"></div><div id="jca-css"></div></div><div class="jca-col"><span class="jca-new"></span><input type="button" name="jca_new_item" value=""/> <input type="button" name="jca_new_item_ext" value=""/><br/><span class="jca-select"></span><input type="button" name="jca_html" value=""/> <input type="button" name="jca_css" value=""/><br/><span class="jca-remove"></span><input type="button" name="jca_remove_item" value=""/> <input type="button" name="jca_remove_style" value=""/><br/></div></div></div>'},o);if("undefined"!==r.attr("id")){var e=g(o.template);e.find(".jca-label.jca-top").attr("data-label",o.labels.top),e.find(".jca-label.jca-left").attr("data-label",o.labels.left),e.find(".jca-label.jca-width").attr("data-label",o.labels.width),e.find(".jca-label.jca-height").attr("data-label",o.labels.height),e.find('[name="jca_new_item"]').val(o.labels.newItemBlank),e.find('[name="jca_new_item_ext"]').val(o.labels.newItemExt),e.find('[name="jca_css"]').val(o.labels.selectCss),e.find('[name="jca_html"]').val(o.labels.selectHtml),e.find('[name="jca_remove_item"]').val(o.labels.removeItem),e.find('[name="jca_remove_style"]').val(o.labels.removeStyle),e.find(".jca-new").text(o.labels.newItem),e.find(".jca-select").text(o.labels.select),e.find(".jca-remove").text(o.labels.remove),g("body").prepend(e),o.decimal<1&&(o.decimal=2),e.find('[name="jca_top"]').attr("step",1/Math.pow(10,o.decimal)),e.find('[name="jca_left"]').attr("step",1/Math.pow(10,o.decimal)),e.find('[name="jca_width"]').attr("step",1/Math.pow(10,o.decimal)),e.find('[name="jca_height"]').attr("step",1/Math.pow(10,o.decimal)),r.attr("data-hash",j()),g(".jca-selector-breadcrumb").html(c(r)),g("*",r).each(function(){g(this).attr("data-hash",j()),g(this).attr("data-class",g(this).attr("class")),b(g(this))}),g(r).click(function(e){var a=g(e.target);r.hide(),g("*",r).removeClass("jca-active-element"),g("*",r).css("background-color",""),void 0===a.attr("id")||void 0!==a.attr("id")&&a.attr("id")!==r.attr("id")?(g('[name="jca_top"]').val(parseFloat(a.css("top"))),g('[name="jca_left"]').val(parseFloat(a.css("left"))),g('[name="jca_width"]').val(parseFloat(a.css("width"))),g('[name="jca_height"]').val(parseFloat(a.css("height"))),a.addClass("jca-active-element"),a.css("background-color",f()),g("#jca-css").html(s(a)),g("#jca-html").html(n(a))):(g('[name="jca_top"]').val(""),g('[name="jca_left"]').val(""),g('[name="jca_width"]').val(""),g('[name="jca_height"]').val(""),g("#jca-css").html(""),g("#jca-html").html("")),r.show(),g(".jca-selector-breadcrumb").html(c(a)),(void 0===a.attr("id")||void 0!==a.attr("id")&&a.attr("id")!==r.attr("id"))&&b(a)}),g(".jca-cord-dimension input").change(function(){t()}),g(".jca-cord-dimension input").keyup(function(){t()}),g('[name="jca_new_item"]').click(function(){h(prompt(o.labels.className),"0","0","25%","25%")}),g('[name="jca_new_item_ext"]').click(function(){var e=prompt(o.labels.className),a=i=parseInt(prompt(o.labels.parentWidth,i)),t=d=parseInt(prompt(o.labels.parentHeight,d)),s=m=parseInt(prompt(o.labels.itemWidth,m)),n=p=parseInt(prompt(o.labels.itemHeight,p)),l=u=parseInt(prompt(o.labels.itemTop,u)),c=v=parseInt(prompt(o.labels.itemLeft,v));h(e,(100*l/t).toFixed(o.decimal)+"%",(100*c/a).toFixed(o.decimal)+"%",(100*s/a).toFixed(o.decimal)+"%",(100*n/t).toFixed(o.decimal)+"%")}),g('[name="jca_remove_item"]').click(function(){if(g(".jca-active-element").length&&confirm(o.labels.confirmRemoveItem+" "+l(g(".jca-active-element")))){var e=g(".jca-active-element").parent();g(".jca-active-element").remove(),e.click()}}),g('[name="jca_remove_style"]').click(function(){g(".jca-active-element").length&&confirm(o.labels.confirmRemoveStyle+" "+l(g(".jca-active-element")))&&g(".jca-active-element").attr("style","")}),g('[name="jca_css"]').click(function(){w("jca-css")}),g('[name="jca_html"]').click(function(){w("jca-html")}),g(".jca-selector-breadcrumb").on("click","a",function(e){e.preventDefault(),g('[data-hash="'+g(this).attr("href")+'"]').click()})}else alert(o.labels.alertCanvasId);function h(e,a,t,s,n){var l=g('<div class="'+e+'" data-class="'+e+'"></div>');l.css("position","absolute"),l.css("top",a),l.css("left",t),l.css("width",s),l.css("height",n),l.attr("data-hash",j()),l.css("background-color",f());var c='[data-hash="'+l.attr("data-hash")+'"]';if(g("head").append("<style>"+c+"{background-color:"+f()+"}</style>"),e.length){if(g(".jca-active-element").length)var i=g(".jca-active-element");else i=r;confirm(o.labels.confirmAppendPrepend)?i.append(l):i.prepend(l),g(c).click()}b(g(c))}function s(e){var a=l(e)+" {<br/>";return a+="&nbsp;&nbsp;&nbsp;&nbsp;top: "+e.css("top")+";<br>",a+="&nbsp;&nbsp;&nbsp;&nbsp;left: "+e.css("left")+";<br>",a+="&nbsp;&nbsp;&nbsp;&nbsp;width: "+e.css("width")+";<br>",a+="&nbsp;&nbsp;&nbsp;&nbsp;height: "+e.css("height")+";<br>",a+="}"}function n(e){return('<div class="'+e.data("class")+'"></div>').replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function l(e){var a=(e=e.clone()).attr("id"),t=e.data("class"),s="";return void 0!==a&&a.length&&(s+="#"+a),void 0!==t&&t.length&&(s+="."+t.replace(/ /gi,".")),s}function f(){for(var e="#",a=0;a<6;a++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}function c(e){var a=e.attr("id"),t="";return(void 0===a||void 0!==a&&a!==r.attr("id"))&&(t=c(e.parent())),t+'<a href="'+e.data("hash")+'">'+l(e)+'</a> <span class="jca-pointer">></span> '}function j(){for(var e="";e=f(),-1<a.indexOf(e););return a.push(e),e}function b(t){o.draggableItems&&"function"==typeof g.fn.draggable&&!t.hasClass("ui-draggable")&&t.draggable({stop:function(e,a){g("*",r).removeClass("jca-active-element"),t.css("top",(100*parseFloat(t.css("top"))/t.parent().height()).toFixed(o.decimal)+"%"),t.css("left",(100*parseFloat(t.css("left"))/t.parent().width()).toFixed(o.decimal)+"%"),g('[name="jca_top"]').val((100*parseFloat(t.css("top"))/t.parent().height()).toFixed(o.decimal)),g('[name="jca_left"]').val((100*parseFloat(t.css("left"))/t.parent().width()).toFixed(o.decimal)),r.hide(),g('[name="jca_width"]').val(parseFloat(t.css("width"))),g('[name="jca_height"]').val(parseFloat(t.css("height"))),g("#jca-css").html(s(t)),g("#jca-html").html(n(t)),r.show(),g(".jca-selector-breadcrumb").html(c(t)),g(a.helper).hasClass("jca-active-element")||g(a.helper).addClass("jca-active-element")}})}function t(){if(g(".jca-active-element").length){var e=g(".jca-active-element");e.css("top",g('[name="jca_top"]').val()+"%"),e.css("left",g('[name="jca_left"]').val()+"%"),e.css("width",g('[name="jca_width"]').val()+"%"),e.css("height",g('[name="jca_height"]').val()+"%"),r.hide(),g("#jca-css").html(s(e)),r.show()}else g('[name="jca_top"]').val(""),g('[name="jca_left"]').val(""),g('[name="jca_width"]').val(""),g('[name="jca_height"]').val("")}function w(e){var a,t,s=document,n=s.getElementById(e);s.body.createTextRange?((a=document.body.createTextRange()).moveToElementText(n),a.select()):window.getSelection&&(t=window.getSelection(),(a=document.createRange()).selectNodeContents(n),t.removeAllRanges(),t.addRange(a))}}}(jQuery),function(u){u.fn.canvasAnimation=function(n){if("undefined"!==this.attr("id")){var a,l=this,c=[],i=-1,e=(n=u.extend({steps:[],timeout:0,resetDuration:500,infinite:!0,autoplay:!0,controls:!0,editor:{enable:!1},fontawesomeVersion:null,controlsWrapper:".jca-controls",backwardButton:".jca-backward",playButton:".jca-play",pauseButton:".jca-pause",resetButton:".jca-reset",forwardButton:".jca-forward",expandButton:".jca-expand",editButton:".jca-edit",classDone:"jca-done",classWait:"jca-wait",classForward:"jca-forward",classBackward:"jca-backward",classWrap:"jca-wrap",controlsTemplate:'<div class="jca-controls"><div class="jca-backward"></div><div class="jca-play"></div><div class="jca-pause"></div><div class="jca-reset"></div><div class="jca-forward"></div><div class="jca-expand"></div><div class="jca-edit"></div></div>',onPlay:null,onDone:null,onWait:null},n)).infinite,t=u(n.controlsTemplate);switch(n.editor.enable=n.editor.enable&&"function"==typeof u.fn.canvasAnimationEditor,l.wrap('<div class="'+n.classWrap+'"></div>'),parseInt(n.fontawesomeVersion)){case 4:case 5:var s="fa";5===parseInt(n.fontawesomeVersion)&&(s="fas"),u("html").addClass("jca-fontawesome"),t.find(n.backwardButton).append('<i class="'+s+' fa-step-backward"></i>'),t.find(n.playButton).append('<i class="'+s+' fa-play"></i>'),t.find(n.pauseButton).append('<i class="'+s+' fa-pause"></i>'),t.find(n.resetButton).append('<i class="'+s+' fa-stop"></i>'),t.find(n.forwardButton).append('<i class="'+s+' fa-step-forward"></i>'),t.find(n.expandButton).append('<i class="'+s+' fa-expand"></i>'),t.find(n.editButton).append('<i class="'+s+' fa-edit"></i>')}n.controls&&(n.editor.enable||t.find(n.editButton).remove(),l.closest("."+n.classWrap).append(t.clone()));var o=function(e){e&&e()},r=function(){var s=n.timeout;c=[],l.hasClass(n.classDone)&&p(),l.hasClass(n.forwardButton.substring(1))&&i--,l.hasClass(n.classDone)&&(l.removeClass(n.classDone),s+=n.resetDuration),l.removeClass(n.classWait),o(n.onPlay),u.each(n.steps,function(e,a){if(i<e){var t=setTimeout(function(){i=e,l.addClass(a.addClass),l.removeClass(a.removeClass),"boolean"==typeof a.pause&&!0===a.pause&&(n.infinite=!1,m(!1)),n.steps.length-1===e&&d(a.duration)},s);"number"!=typeof a.duration&&(a.duration=500),s+=a.duration,c.push(t)}})},d=function(e){a=setTimeout(function(){l.addClass(n.classDone),l.hasClass(n.classWait)||(n.infinite?r():o(n.onDone))},e)},p=function(){u.each(n.steps,function(e,a){l.removeClass(a.addClass)}),i=-1},m=function(e){0<c.length&&(u.each(c,function(e,a){clearTimeout(c[e])}),e&&p(),l.addClass(n.classWait),o(n.onWait),void 0!==a&&clearTimeout(a))};n.autoplay?r():(l.addClass(n.classWait),o(n.onWait)),n.editor.enable||l.click(function(){n.infinite=e,(l.hasClass(n.classDone)||l.hasClass(n.classWait))&&r()}),l.next(n.controlsWrapper).find(n.backwardButton).click(function(){(l.hasClass(n.classDone)||l.hasClass(n.classWait))&&(l.hasClass(n.classForward)&&i--,l.removeClass(n.classForward),l.addClass(n.classBackward),i<0&&(i=n.steps.length),i===n.steps.length?u.each(n.steps,function(e,a){l.addClass(a.addClass),l.removeClass(a.removeClass)}):(l.removeClass(n.steps[i].addClass),l.addClass(n.steps[i].removeClass)),i--)}),l.next(n.controlsWrapper).find(n.playButton).click(function(){n.infinite=e,(l.hasClass(n.classDone)||l.hasClass(n.classWait))&&r()}),l.next(n.controlsWrapper).find(n.pauseButton).click(function(){n.infinite=!1,m(!1)}),l.next(n.controlsWrapper).find(n.resetButton).click(function(){n.infinite=!1,m(!0),p(),l.removeClass(n.classDone),l.addClass(n.classWait),o(n.onWait)}),l.next(n.controlsWrapper).find(n.forwardButton).click(function(){(l.hasClass(n.classDone)||l.hasClass(n.classWait))&&(l.hasClass(n.classBackward)&&i++,l.addClass(n.classForward),l.removeClass(n.classBackward),(i>n.steps.length||-1===i)&&(i=0),i===n.steps.length?p():(l.addClass(n.steps[i].addClass),l.removeClass(n.steps[i].removeClass)),i++)}),l.next(n.controlsWrapper).find(n.expandButton).click(function(){var e;(e=l[0]).requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.msRequestFullscreen?e.msRequestFullscreen():e.webkitRequestFullscreen&&e.webkitRequestFullscreen()}),n.editor.enable&&(l.canvasAnimationEditor(n.editor),l.next(n.controlsWrapper).find(n.editButton).click(function(){u(".jca-editor").is(":visible")?u(".jca-editor").hide():u(".jca-editor").show()}))}}}(jQuery);