!function(g){g.fn.canvasAnimationEditor=function(o){var r=this,e=[],i="",d="",p="",m="",u=0,v=0,a=(o=g.extend({enable:!1,decimal:2,draggableItems:!0,labels:{top:"top",left:"left",width:"width",height:"height",newItemBlank:"New Item (Blank)",newItemExt:"New Item (Extended)",selectCss:"Select CSS",selectHtml:"Select HTML",removeItem:"Remove Item",className:"CSS class name",parentWidth:"Parent width in px",parentHeight:"Parent height in px",itemWidth:"Item width in px",itemHeight:"Item height in px",itemTop:"Item offset top in px",itemLeft:"Item offset left in px",confirmAppendPrepend:"OK = append item / Cancel = prepend item"},template:'<div class="jca-editor"><div class="jca-container"><div class="jca-col jca-cord-dimension"><div class="jca-box"><div class="jca-label jca-top"></div><div class="jca-label jca-left"></div><div class="jca-label jca-width"></div><div class="jca-label jca-height"></div><input type="number" step="0.1" name="jca_top" /><input type="number" step="0.1" name="jca_left" /><input type="number" step="0.1" name="jca_width" /><input type="number" step="0.1" name="jca_height" /></div></div><div class="jca-col jca-selector-breadcrumb"></div><div class="jca-col"><div id="jca-html"></div><div id="jca-css"></div></div><div class="jca-col"><input type="button" name="jca_new_item" value=""/> <input type="button" name="jca_new_item_ext" value=""/><br/><input type="button" name="jca_html" value=""/> <input type="button" name="jca_css" value="Select CSS"/><br/><br/><input type="button" name="jca_remove_item" value=""/><br/></div></div></div>'},o),g(o.template));function f(a,e,t,s,n){var l=g('<div class="'+a+'"></div>');l.css("position","absolute"),l.css("top",e),l.css("left",t),l.css("width",s),l.css("height",n),l.attr("data-hash",j()),l.css("background-color",h());var c='[data-hash="'+l.attr("data-hash")+'"]';if(g("head").append("<style>"+c+"{background-color:"+h()+"}</style>"),a.length){if(g(".jca-active-element").length)var i=g(".jca-active-element").parent();else i=r;confirm(o.labels.confirmAppendPrepend)?i.append(l):i.prepend(l),g(c).click()}}function s(a){a.toggleClass("jca-active-element");var e=l(a)+" {<br/>";return e+="&nbsp;&nbsp;&nbsp;&nbsp;top: "+a.css("top")+";<br>",e+="&nbsp;&nbsp;&nbsp;&nbsp;left: "+a.css("left")+";<br>",e+="&nbsp;&nbsp;&nbsp;&nbsp;width: "+a.css("width")+";<br>",e+="&nbsp;&nbsp;&nbsp;&nbsp;height: "+a.css("height")+";<br>",e+="}",a.toggleClass("jca-active-element"),e}function n(a){return(a=a.clone()).removeAttr("data-hash"),a.removeAttr("style"),a.removeClass("jca-active-element"),a[0].outerHTML.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function l(a){var e=a.attr("id"),t=a.attr("class"),s="";return a.hasClass("jca-active-element")&&(a.toggleClass("jca-active-element"),t=a.attr("class"),a.toggleClass("jca-active-element")),void 0!==e&&e.length&&(s+="#"+e),void 0!==t&&t.length&&(s+="."+t.replace(/ /gi,".")),s}function h(){for(var a="#",e=0;e<6;e++)a+="0123456789ABCDEF"[Math.floor(16*Math.random())];return a}function c(a){var e=a.attr("id"),t="";return(void 0===e||void 0!==e&&e!==r.attr("id"))&&(t=c(a.parent())),t+'<a href="'+a.data("hash")+'">'+l(a)+"</a> > "}function j(){for(var a="";(a=h())in e;);return e[a]=1,a}function t(){r.hide();var a=g(".jca-active-element");a.css("top",g('[name="jca_top"]').val()+"%"),a.css("left",g('[name="jca_left"]').val()+"%"),a.css("width",g('[name="jca_width"]').val()+"%"),a.css("height",g('[name="jca_height"]').val()+"%"),g("#jca-css").html(s(a)),r.show()}function b(a){var e,t,s=document,n=s.getElementById(a);s.body.createTextRange?((e=document.body.createTextRange()).moveToElementText(n),e.select()):window.getSelection&&(t=window.getSelection(),(e=document.createRange()).selectNodeContents(n),t.removeAllRanges(),t.addRange(e))}a.find(".jca-label.jca-top").attr("data-label",o.labels.top),a.find(".jca-label.jca-left").attr("data-label",o.labels.left),a.find(".jca-label.jca-width").attr("data-label",o.labels.width),a.find(".jca-label.jca-height").attr("data-label",o.labels.height),a.find('[name="jca_new_item"]').val(o.labels.newItemBlank),a.find('[name="jca_new_item_ext"]').val(o.labels.newItemExt),a.find('[name="jca_css"]').val(o.labels.selectCss),a.find('[name="jca_html"]').val(o.labels.selectHtml),a.find('[name="jca_remove_item"]').val(o.labels.removeItem),g("body").prepend(a),r.attr("data-hash",j()),g(".jca-selector-breadcrumb").html(c(r)),g("*",r).each(function(){g(this).attr("data-hash",j())}),g(r).click(function(a){var t=g(a.target);r.hide(),g("*",r).removeClass("jca-active-element"),g("*",r).css("background-color",""),void 0===t.attr("id")||void 0!==t.attr("id")&&t.attr("id")!==r.attr("id")?(g('[name="jca_top"]').val(parseFloat(t.css("top"))),g('[name="jca_left"]').val(parseFloat(t.css("left"))),g('[name="jca_width"]').val(parseFloat(t.css("width"))),g('[name="jca_height"]').val(parseFloat(t.css("height"))),t.addClass("jca-active-element"),t.css("background-color",h()),g("#jca-css").html(s(t)),g("#jca-html").html(n(t))):(g('[name="jca_top"]').val(""),g('[name="jca_left"]').val(""),g('[name="jca_width"]').val(""),g('[name="jca_height"]').val(""),g("#jca-css").html(""),g("#jca-html").html("")),r.show(),g(".jca-selector-breadcrumb").html(c(t)),o.draggableItems&&"function"==typeof g.fn.draggable&&!t.hasClass("ui-draggable")&&(void 0===t.attr("id")||void 0!==t.attr("id")&&t.attr("id")!==r.attr("id"))&&t.draggable({stop:function(a,e){g("#jca-css").html(s(t)),g("#jca-html").html(n(t))}})}),g(".jca-cord-dimension input").change(function(){t()}),g(".jca-cord-dimension input").keyup(function(){t()}),g('[name="jca_new_item"]').click(function(){f(prompt(o.labels.className),"0","0","25%","25%")}),g('[name="jca_new_item_ext"]').click(function(){var a=prompt(o.labels.className),e=i=parseInt(prompt(o.labels.parentWidth,i)),t=d=parseInt(prompt(o.labels.parentHeight,d)),s=m=parseInt(prompt(o.labels.itemWidth,m)),n=p=parseInt(prompt(o.labels.itemHeight,p)),l=u=parseInt(prompt(o.labels.itemTop,u)),c=v=parseInt(prompt(o.labels.itemLeft,v));f(a,(100*l/t).toFixed(1)+"%",(100*c/e).toFixed(1)+"%",(100*s/e).toFixed(1)+"%",(100*n/t).toFixed(1)+"%")}),g('[name="jca_remove_item"]').click(function(){g(".jca-active-element").length&&confirm("Are you sure to remove "+l(g(".jca-active-element"))+"?")&&(g(".jca-active-element").remove(),r.click())}),g('[name="jca_css"]').click(function(){b("jca-css")}),g('[name="jca_html"]').click(function(){b("jca-html")}),g(".jca-selector-breadcrumb").on("click","a",function(a){a.preventDefault(),g('[data-hash="'+g(this).attr("href")+'"]').click()})}}(jQuery),function(u){u.fn.canvasAnimation=function(n){var e,l=this,a=(n=u.extend({steps:[],timeout:0,resetDuration:500,infinity:!0,autoplay:!0,controls:!0,editorConfig:{enable:!1},fontawesomeVersion:null,controlsWrapper:".jca-controls",backwardButton:".jca-backward",playButton:".jca-play",pauseButton:".jca-pause",resetButton:".jca-reset",forwardButton:".jca-forward",expandButton:".jca-expand",editButton:".jca-edit",classDone:"jca-done",classWait:"jca-wait",classForward:"jca-forward",classBackward:"jca-backward",classWrap:"jca-wrap",controlsTemplate:'<div class="jca-controls"><div class="jca-backward"></div><div class="jca-play"></div><div class="jca-pause"></div><div class="jca-reset"></div><div class="jca-forward"></div><div class="jca-expand"></div><div class="jca-edit"></div></div>',onPlay:null,onDone:null,onWait:null},n)).infinity,c=[],i=-1,t=u(n.controlsTemplate);switch(l.wrap('<div class="'+n.classWrap+'"></div>'),parseInt(n.fontawesomeVersion)){case 4:case 5:var s="fa";5===parseInt(n.fontawesomeVersion)&&(s="fas"),u("html").addClass("jca-fontawesome"),t.find(n.backwardButton).append('<i class="'+s+' fa-step-backward"></i>'),t.find(n.playButton).append('<i class="'+s+' fa-play"></i>'),t.find(n.pauseButton).append('<i class="'+s+' fa-pause"></i>'),t.find(n.resetButton).append('<i class="'+s+' fa-stop"></i>'),t.find(n.forwardButton).append('<i class="'+s+' fa-step-forward"></i>'),t.find(n.expandButton).append('<i class="'+s+' fa-expand"></i>'),t.find(n.editButton).append('<i class="'+s+' fa-edit"></i>')}n.controls&&(n.editorConfig.enable||t.find(n.editButton).remove(),l.closest("."+n.classWrap).append(t.clone()));var o=function(a){a&&a()},r=function(){var s=n.timeout;c=[],l.hasClass(n.classDone)&&p(),l.hasClass(n.forwardButton.substring(1))&&i--,l.hasClass(n.classDone)&&(l.removeClass(n.classDone),s+=n.resetDuration),l.removeClass(n.classWait),o(n.onPlay),u.each(n.steps,function(a,e){if(i<a){var t=setTimeout(function(){i=a,l.addClass(e.addClass),l.removeClass(e.removeClass),"boolean"==typeof e.pause&&!0===e.pause&&(n.infinity=!1,m(!1)),n.steps.length-1===a&&d(e.duration)},s);"number"!=typeof e.duration&&(e.duration=500),s+=e.duration,c.push(t)}})},d=function(a){e=setTimeout(function(){l.addClass(n.classDone),l.hasClass(n.classWait)||(n.infinity?r():o(n.onDone))},a)},p=function(){u.each(n.steps,function(a,e){l.removeClass(e.addClass)}),i=-1},m=function(a){0<c.length&&(u.each(c,function(a,e){clearTimeout(c[a])}),a&&p(),l.addClass(n.classWait),o(n.onWait),void 0!==e&&clearTimeout(e))};n.autoplay?r():(l.addClass(n.classWait),o(n.onWait)),n.editorConfig.enable||l.click(function(){n.infinity=a,(l.hasClass(n.classDone)||l.hasClass(n.classWait))&&r()}),l.next(n.controlsWrapper).find(n.backwardButton).click(function(){(l.hasClass(n.classDone)||l.hasClass(n.classWait))&&(l.hasClass(n.classForward)&&i--,l.removeClass(n.classForward),l.addClass(n.classBackward),i<0&&(i=n.steps.length),i===n.steps.length?u.each(n.steps,function(a,e){l.addClass(e.addClass),l.removeClass(e.removeClass)}):(l.removeClass(n.steps[i].addClass),l.addClass(n.steps[i].removeClass)),i--)}),l.next(n.controlsWrapper).find(n.playButton).click(function(){n.infinity=a,(l.hasClass(n.classDone)||l.hasClass(n.classWait))&&r()}),l.next(n.controlsWrapper).find(n.pauseButton).click(function(){n.infinity=!1,m(!1)}),l.next(n.controlsWrapper).find(n.resetButton).click(function(){n.infinity=!1,m(!0),p(),l.removeClass(n.classDone),l.addClass(n.classWait),o(n.onWait)}),l.next(n.controlsWrapper).find(n.forwardButton).click(function(){(l.hasClass(n.classDone)||l.hasClass(n.classWait))&&(l.hasClass(n.classBackward)&&i++,l.addClass(n.classForward),l.removeClass(n.classBackward),(i>n.steps.length||-1===i)&&(i=0),i===n.steps.length?p():(l.addClass(n.steps[i].addClass),l.removeClass(n.steps[i].removeClass)),i++)}),l.next(n.controlsWrapper).find(n.expandButton).click(function(){var a;(a=l[0]).requestFullscreen?a.requestFullscreen():a.mozRequestFullScreen?a.mozRequestFullScreen():a.msRequestFullscreen?a.msRequestFullscreen():a.webkitRequestFullscreen&&a.webkitRequestFullscreen()}),n.editorConfig.enable&&(l.canvasAnimationEditor(n.editorConfig),l.next(n.controlsWrapper).find(n.editButton).click(function(){u(".jca-editor").is(":visible")?u(".jca-editor").hide():u(".jca-editor").show()}))}}(jQuery);