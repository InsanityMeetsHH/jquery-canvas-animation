(function($) {
    $.fn.canvasAnimation = function(config) {
        var thisCanvas = this;

        var config = $.extend({
            steps: [],
            timeout: 0, // 0 = starts immediately the first step (milliseconds)
            resetDuration: 500, // time it takes to reset all animations (milliseconds)
            infinity: true, // if true: plays animation infinity
            autoplay: true, // if true: plays animation instantly
            controls: true, // if true: adds controls to canvas
            fontawesomeVersion: null, // fontawesome version (4 or 5)
            controlsWrapper: '.controls', // class of the controls wrapper
            backwardButton: '.backward', // class of step backward button
            playButton: '.play', // class of play button
            pauseButton: '.pause', // class of pause button
            resetButton: '.reset', // class of reset button
            forwardButton: '.forward', // class of step forward button
            fullscreenButton: '.fullscreen', // class of fullscreen button
            classDone: 'done', // is set if the animation is done
            classWait: 'wait', // is set if autoplay : false and animation is never played or user clicked on reset button
            classForward: 'forward', // is set if user clicked forward
            classBackward: 'backward', // is set if user clicked backward
            classWrap: 'canvas-animation',
            controlsTemplate:
                '<div class="controls">' +
                    '<div class="backward #BACKWARD#"></div>' +
                    '<div class="play #PLAY#"></div>' +
                    '<div class="pause #PAUSE#"></div>' +
                    '<div class="reset #RESET#"></div>' +
                    '<div class="forward #FORWARD#"></div>' +
                    '<div class="fullscreen #FULLSCREEN#"></div>' +
                '</div>',
            onPlay: null, // called before first animation step
            onDone: null, // called after last animation step
            onWait: null  // called if classWait was added
        }, config );
        var infinity = config.infinity;
        var animationTimeouts = [];
        var currentAnimationStep = -1;
        var lastStepTimeout;
        
        thisCanvas.wrap('<div class="' + config.classWrap + '"></div>');
        
        switch (parseInt(config.fontawesomeVersion)) {
            case 4:
            case 5:
                // if is fontawesome version 4 or 5
                var ns = 'fa';
                
                if (parseInt(config.fontawesomeVersion) === 5) {
//                    ns = 'fas';
                }
                
                config.controlsTemplate = config.controlsTemplate.replace('#BACKWARD#', ns + ' fa-step-backward');
                config.controlsTemplate = config.controlsTemplate.replace('#PLAY#', ns + ' fa-play');
                config.controlsTemplate = config.controlsTemplate.replace('#PAUSE#', ns + ' fa-pause');
                config.controlsTemplate = config.controlsTemplate.replace('#RESET#', ns + ' fa-stop');
                config.controlsTemplate = config.controlsTemplate.replace('#FORWARD#', ns + ' fa-step-forward');
                config.controlsTemplate = config.controlsTemplate.replace('#FULLSCREEN#', ns + ' fa-expand');
                break;
                
            default:
                config.controlsTemplate = config.controlsTemplate.replace('#BACKWARD#', '');
                config.controlsTemplate = config.controlsTemplate.replace('#PLAY#', '');
                config.controlsTemplate = config.controlsTemplate.replace('#PAUSE#', '');
                config.controlsTemplate = config.controlsTemplate.replace('#RESET#', '');
                config.controlsTemplate = config.controlsTemplate.replace('#FORWARD#', '');
                config.controlsTemplate = config.controlsTemplate.replace('#FULLSCREEN#', '');
        }
        
        // if controls enabled
        if (config.controls) {
            thisCanvas.closest('.' + config.classWrap).append(config.controlsTemplate);
        }
        
        /**
         * @returns {void}
         */
        var callCallback = function(callback) {
            // if callback is defined
            if (callback) {
                callback();
            }
        };
        
        /**
         * @returns {void}
         */
        var enterFullscreen = function(element) {
            if(element.requestFullscreen) {
                element.requestFullscreen();
            } else if(element.mozRequestFullScreen) {
                element.mozRequestFullScreen();
            } else if(element.msRequestFullscreen) {
                element.msRequestFullscreen();
            } else if(element.webkitRequestFullscreen) {
                element.webkitRequestFullscreen();
            }
        };
        
        /**
         * @returns {void}
         */
        var exitFullscreen = function() {
            if(document.exitFullscreen) {
                document.exitFullscreen();
            } else if(document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if(document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            }
        };
        
        /**
         * @returns {void}
         */
        var play = function() {
            var timeout = config.timeout;
            animationTimeouts = [];
            
            if (thisCanvas.hasClass(config.classDone)) {
                reset();
            }
            
            if (thisCanvas.hasClass('forward')) {
                currentAnimationStep--;
            }
            
            // if has class done
            if (thisCanvas.hasClass(config.classDone)) {
                thisCanvas.removeClass(config.classDone);
                timeout += config.resetDuration;
            }
            
            thisCanvas.removeClass(config.classWait);
            callCallback(config.onPlay);
            
            // play animation
            $.each(config.steps, function(key, value) {
                if (currentAnimationStep < key) {
                    var animationTimeout = setTimeout(function() {
                        currentAnimationStep = key;
                        thisCanvas.addClass(value.addClass);
                        thisCanvas.removeClass(value.removeClass);
                        
                        if (typeof value.pause === 'boolean' && value.pause === true) {
                            config.infinity = false;
                            stop(false);
                        }

                        // if is last step
                        if (config.steps.length - 1 === key) {
                            lastStep(value.duration);
                        }
                    }, timeout);
                    
                    if (typeof value.duration !== 'number') {
                        value.duration = 500;
                    }
                    
                    timeout += value.duration;
                    animationTimeouts.push(animationTimeout);
                }
            });
        };
        
        /**
         * @param {int} duration
         * @returns {void}
         */
        var lastStep = function(duration) {
            lastStepTimeout = setTimeout(function() {
                thisCanvas.addClass(config.classDone);
                if (!thisCanvas.hasClass(config.classWait)) {
                    if (config.infinity) {
                        play();
                    } else {
                        callCallback(config.onDone);
                    }
                }
            }, duration);
        };
        
        /**
         * @returns {void}
         */
        var reset = function() {
            // reset classes
            $.each(config.steps, function(key, value) {
                thisCanvas.removeClass(value.addClass);
            });
            currentAnimationStep = -1;
        };
        
        /**
         * @param {bool} callReset
         * @returns {void}
         */
        var stop = function(callReset) {
            // if animationSteps is not empty
            if (animationTimeouts.length > 0) {
                $.each(animationTimeouts, function(key, value) {
                    clearTimeout(animationTimeouts[key]);
                });
                
                if (callReset) {
                    reset();
                }
                
                thisCanvas.addClass(config.classWait);
                callCallback(config.onWait);
                
                if (typeof lastStepTimeout !== 'undefined') {
                    clearTimeout(lastStepTimeout);
                }
            }
        };
        
        // if is autoplay
        if (config.autoplay) {
            play();
        } else {
            thisCanvas.addClass(config.classWait);
            callCallback(config.onWait);
        }

        // click on canvas
        thisCanvas.click(function() {
            config.infinity = infinity;
            
            if (thisCanvas.hasClass(config.classDone) || thisCanvas.hasClass(config.classWait)) {
                play();
            }
        });
        
        // click on step backward
        thisCanvas.next(config.controlsWrapper).find(config.backwardButton).click(function() {
            if (thisCanvas.hasClass(config.classDone) || thisCanvas.hasClass(config.classWait)) {
                if (thisCanvas.hasClass(config.classForward)) {
                    currentAnimationStep--;
                }
                
                thisCanvas.removeClass(config.classForward);
                thisCanvas.addClass(config.classBackward);
                
                // if step not exist
                if (currentAnimationStep < 0) {
                    currentAnimationStep = config.steps.length;
                }
                
                // if is last step
                if (currentAnimationStep === config.steps.length) {
                    $.each(config.steps, function(key, value) {
                        thisCanvas.addClass(value.addClass);
                        thisCanvas.removeClass(value.removeClass);
                    });
                } else {
                    thisCanvas.removeClass(config.steps[currentAnimationStep].addClass);
                    thisCanvas.addClass(config.steps[currentAnimationStep].removeClass);
                }
                
                currentAnimationStep--;
            }
        });
        
        // click on play
        thisCanvas.next(config.controlsWrapper).find(config.playButton).click(function() {
            config.infinity = infinity;
            
            if (thisCanvas.hasClass(config.classDone) || thisCanvas.hasClass(config.classWait)) {
                play();
            }
        });
        
        // click on pause
        thisCanvas.next(config.controlsWrapper).find(config.pauseButton).click(function() {
            config.infinity = false;
            stop(false);
        });
        
        // click on reset
        thisCanvas.next(config.controlsWrapper).find(config.resetButton).click(function() {
            config.infinity = false;
            stop(true);
            reset();
            thisCanvas.removeClass(config.classDone);
            thisCanvas.addClass(config.classWait);
            callCallback(config.onWait);
        });
        
        // click on step forward
        thisCanvas.next(config.controlsWrapper).find(config.forwardButton).click(function() {
            if (thisCanvas.hasClass(config.classDone) || thisCanvas.hasClass(config.classWait)) {
                if (thisCanvas.hasClass(config.classBackward)) {
                    currentAnimationStep++;
                }
                
                thisCanvas.addClass(config.classForward);
                thisCanvas.removeClass(config.classBackward);
                
                // if step not exists
                if (currentAnimationStep > config.steps.length || currentAnimationStep === -1) {
                    currentAnimationStep = 0;
                }
                
                // if is last step
                if (currentAnimationStep === config.steps.length) {
                    reset();
                } else {
                    thisCanvas.addClass(config.steps[currentAnimationStep].addClass);
                    thisCanvas.removeClass(config.steps[currentAnimationStep].removeClass);
                }
                
                currentAnimationStep++;
            }
        });

        // click on fullscreen
        thisCanvas.next(config.controlsWrapper).find(config.fullscreenButton).click(function() {
//            enterFullscreen(document.documentElement);
            enterFullscreen(thisCanvas[0]);
//            enterFullscreen(thisCanvas.closest('.' + config.classWrap)[0]);
        });
    };
})(jQuery);