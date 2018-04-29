(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
var css = "/*! lightslider - v1.1.6 - 2016-10-25\r\n* https://github.com/sachinchoolur/lightslider\r\n* Copyright (c) 2016 Sachin N; Licensed MIT */\n/*! lightslider - v1.1.3 - 2015-04-14\r\n* https://github.com/sachinchoolur/lightslider\r\n* Copyright (c) 2015 Sachin N; Licensed MIT */\n/** /!!! core css Should not edit !!!/**/\n.lSSlideOuter {\n  overflow: hidden;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.lightSlider:before,\n.lightSlider:after {\n  content: \" \";\n  display: table;\n}\n.lightSlider {\n  overflow: hidden;\n  margin: 0;\n}\n.lSSlideWrapper {\n  max-width: 100%;\n  overflow: hidden;\n  position: relative;\n}\n.lSSlideWrapper > .lightSlider:after {\n  clear: both;\n}\n.lSSlideWrapper .lSSlide {\n  -webkit-transform: translate(0px, 0px);\n  -ms-transform: translate(0px, 0px);\n  transform: translate(0px, 0px);\n  -webkit-transition: all 1s;\n  -webkit-transition-property: -webkit-transform,height;\n  -moz-transition-property: -moz-transform,height;\n  transition-property: transform,height;\n  -webkit-transition-duration: inherit !important;\n  transition-duration: inherit !important;\n  -webkit-transition-timing-function: inherit !important;\n  transition-timing-function: inherit !important;\n}\n.lSSlideWrapper .lSFade {\n  position: relative;\n}\n.lSSlideWrapper .lSFade > * {\n  position: absolute !important;\n  top: 0;\n  left: 0;\n  z-index: 9;\n  margin-right: 0;\n  width: 100%;\n}\n.lSSlideWrapper.usingCss .lSFade > * {\n  opacity: 0;\n  -webkit-transition-delay: 0s;\n  transition-delay: 0s;\n  -webkit-transition-duration: inherit !important;\n  transition-duration: inherit !important;\n  -webkit-transition-property: opacity;\n  transition-property: opacity;\n  -webkit-transition-timing-function: inherit !important;\n  transition-timing-function: inherit !important;\n}\n.lSSlideWrapper .lSFade > *.active {\n  z-index: 10;\n}\n.lSSlideWrapper.usingCss .lSFade > *.active {\n  opacity: 1;\n}\n/** /!!! End of core css Should not edit !!!/**/\n/* Pager */\n.lSSlideOuter .lSPager.lSpg {\n  margin: 10px 0 0;\n  padding: 0;\n  text-align: center;\n}\n.lSSlideOuter .lSPager.lSpg > li {\n  cursor: pointer;\n  display: inline-block;\n  padding: 0 5px;\n}\n.lSSlideOuter .lSPager.lSpg > li a {\n  background-color: #222222;\n  border-radius: 30px;\n  display: inline-block;\n  height: 8px;\n  overflow: hidden;\n  text-indent: -999em;\n  width: 8px;\n  position: relative;\n  z-index: 99;\n  -webkit-transition: all 0.5s linear 0s;\n  transition: all 0.5s linear 0s;\n}\n.lSSlideOuter .lSPager.lSpg > li:hover a,\n.lSSlideOuter .lSPager.lSpg > li.active a {\n  background-color: #428bca;\n}\n.lSSlideOuter .media {\n  opacity: 0.8;\n}\n.lSSlideOuter .media.active {\n  opacity: 1;\n}\n/* End of pager */\n/** Gallery */\n.lSSlideOuter .lSPager.lSGallery {\n  list-style: none outside none;\n  padding-left: 0;\n  margin: 0;\n  overflow: hidden;\n  transform: translate3d(0px, 0px, 0px);\n  -moz-transform: translate3d(0px, 0px, 0px);\n  -ms-transform: translate3d(0px, 0px, 0px);\n  -webkit-transform: translate3d(0px, 0px, 0px);\n  -o-transform: translate3d(0px, 0px, 0px);\n  -webkit-transition-property: -webkit-transform;\n  -moz-transition-property: -moz-transform;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.lSSlideOuter .lSPager.lSGallery li {\n  overflow: hidden;\n  -webkit-transition: border-radius 0.12s linear 0s 0.35s linear 0s;\n  transition: border-radius 0.12s linear 0s 0.35s linear 0s;\n}\n.lSSlideOuter .lSPager.lSGallery li.active,\n.lSSlideOuter .lSPager.lSGallery li:hover {\n  border-radius: 5px;\n}\n.lSSlideOuter .lSPager.lSGallery img {\n  display: block;\n  height: auto;\n  max-width: 100%;\n}\n.lSSlideOuter .lSPager.lSGallery:before,\n.lSSlideOuter .lSPager.lSGallery:after {\n  content: \" \";\n  display: table;\n}\n.lSSlideOuter .lSPager.lSGallery:after {\n  clear: both;\n}\n/* End of Gallery*/\n/* slider actions */\n.lSAction > a {\n  width: 32px;\n  display: block;\n  top: 50%;\n  height: 32px;\n  background-image: url('../../../../node_modules/lightslider/dist/img/controls.png');\n  cursor: pointer;\n  position: absolute;\n  z-index: 99;\n  margin-top: -16px;\n  opacity: 0.5;\n  -webkit-transition: opacity 0.35s linear 0s;\n  transition: opacity 0.35s linear 0s;\n}\n.lSAction > a:hover {\n  opacity: 1;\n}\n.lSAction > .lSPrev {\n  background-position: 0 0;\n  left: 10px;\n}\n.lSAction > .lSNext {\n  background-position: -32px 0;\n  right: 10px;\n}\n.lSAction > a.disabled {\n  pointer-events: none;\n}\n.cS-hidden {\n  height: 1px;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  overflow: hidden;\n}\n/* vertical */\n.lSSlideOuter.vertical {\n  position: relative;\n}\n.lSSlideOuter.vertical.noPager {\n  padding-right: 0px !important;\n}\n.lSSlideOuter.vertical .lSGallery {\n  position: absolute !important;\n  right: 0;\n  top: 0;\n}\n.lSSlideOuter.vertical .lightSlider > * {\n  width: 100% !important;\n  max-width: none !important;\n}\n/* vertical controlls */\n.lSSlideOuter.vertical .lSAction > a {\n  left: 50%;\n  margin-left: -14px;\n  margin-top: 0;\n}\n.lSSlideOuter.vertical .lSAction > .lSNext {\n  background-position: 31px -31px;\n  bottom: 10px;\n  top: auto;\n}\n.lSSlideOuter.vertical .lSAction > .lSPrev {\n  background-position: 0 -31px;\n  bottom: auto;\n  top: 10px;\n}\n/* vertical */\n/* Rtl */\n.lSSlideOuter.lSrtl {\n  direction: rtl;\n}\n.lSSlideOuter .lightSlider,\n.lSSlideOuter .lSPager {\n  padding-left: 0;\n  list-style: none outside none;\n}\n.lSSlideOuter.lSrtl .lightSlider,\n.lSSlideOuter.lSrtl .lSPager {\n  padding-right: 0;\n}\n.lSSlideOuter .lightSlider > *,\n.lSSlideOuter .lSGallery li {\n  float: left;\n}\n.lSSlideOuter.lSrtl .lightSlider > *,\n.lSSlideOuter.lSrtl .lSGallery li {\n  float: right !important;\n}\n/* Rtl */\n@-webkit-keyframes rightEnd {\n  0% {\n    left: 0;\n  }\n\n  50% {\n    left: -15px;\n  }\n\n  100% {\n    left: 0;\n  }\n}\n@keyframes rightEnd {\n  0% {\n    left: 0;\n  }\n\n  50% {\n    left: -15px;\n  }\n\n  100% {\n    left: 0;\n  }\n}\n@-webkit-keyframes topEnd {\n  0% {\n    top: 0;\n  }\n\n  50% {\n    top: -15px;\n  }\n\n  100% {\n    top: 0;\n  }\n}\n@keyframes topEnd {\n  0% {\n    top: 0;\n  }\n\n  50% {\n    top: -15px;\n  }\n\n  100% {\n    top: 0;\n  }\n}\n@-webkit-keyframes leftEnd {\n  0% {\n    left: 0;\n  }\n\n  50% {\n    left: 15px;\n  }\n\n  100% {\n    left: 0;\n  }\n}\n@keyframes leftEnd {\n  0% {\n    left: 0;\n  }\n\n  50% {\n    left: 15px;\n  }\n\n  100% {\n    left: 0;\n  }\n}\n@-webkit-keyframes bottomEnd {\n  0% {\n    bottom: 0;\n  }\n\n  50% {\n    bottom: -15px;\n  }\n\n  100% {\n    bottom: 0;\n  }\n}\n@keyframes bottomEnd {\n  0% {\n    bottom: 0;\n  }\n\n  50% {\n    bottom: -15px;\n  }\n\n  100% {\n    bottom: 0;\n  }\n}\n.lSSlideOuter .rightEnd {\n  -webkit-animation: rightEnd 0.3s;\n  animation: rightEnd 0.3s;\n  position: relative;\n}\n.lSSlideOuter .leftEnd {\n  -webkit-animation: leftEnd 0.3s;\n  animation: leftEnd 0.3s;\n  position: relative;\n}\n.lSSlideOuter.vertical .rightEnd {\n  -webkit-animation: topEnd 0.3s;\n  animation: topEnd 0.3s;\n  position: relative;\n}\n.lSSlideOuter.vertical .leftEnd {\n  -webkit-animation: bottomEnd 0.3s;\n  animation: bottomEnd 0.3s;\n  position: relative;\n}\n.lSSlideOuter.lSrtl .rightEnd {\n  -webkit-animation: leftEnd 0.3s;\n  animation: leftEnd 0.3s;\n  position: relative;\n}\n.lSSlideOuter.lSrtl .leftEnd {\n  -webkit-animation: rightEnd 0.3s;\n  animation: rightEnd 0.3s;\n  position: relative;\n}\n/*/  GRab cursor */\n.lightSlider.lsGrab > * {\n  cursor: -webkit-grab;\n  cursor: -moz-grab;\n  cursor: -o-grab;\n  cursor: -ms-grab;\n  cursor: grab;\n}\n.lightSlider.lsGrabbing > * {\n  cursor: move;\n  cursor: -webkit-grabbing;\n  cursor: -moz-grabbing;\n  cursor: -o-grabbing;\n  cursor: -ms-grabbing;\n  cursor: grabbing;\n}\n"; (require("browserify-css").createStyle(css, { "href": "app\\css\\bundle_node_mod.css" }, { "insertAt": "bottom" })); module.exports = css;
},{"browserify-css":3}],2:[function(require,module,exports){
var css = require('../css/bundle_node_mod.css');
},{"../css/bundle_node_mod.css":1}],3:[function(require,module,exports){
'use strict';
// For more information about browser field, check out the browser field at https://github.com/substack/browserify-handbook#browser-field.

var styleElementsInsertedAtTop = [];

var insertStyleElement = function(styleElement, options) {
    var head = document.head || document.getElementsByTagName('head')[0];
    var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];

    options = options || {};
    options.insertAt = options.insertAt || 'bottom';

    if (options.insertAt === 'top') {
        if (!lastStyleElementInsertedAtTop) {
            head.insertBefore(styleElement, head.firstChild);
        } else if (lastStyleElementInsertedAtTop.nextSibling) {
            head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
        } else {
            head.appendChild(styleElement);
        }
        styleElementsInsertedAtTop.push(styleElement);
    } else if (options.insertAt === 'bottom') {
        head.appendChild(styleElement);
    } else {
        throw new Error('Invalid value for parameter \'insertAt\'. Must be \'top\' or \'bottom\'.');
    }
};

module.exports = {
    // Create a <link> tag with optional data attributes
    createLink: function(href, attributes) {
        var head = document.head || document.getElementsByTagName('head')[0];
        var link = document.createElement('link');

        link.href = href;
        link.rel = 'stylesheet';

        for (var key in attributes) {
            if ( ! attributes.hasOwnProperty(key)) {
                continue;
            }
            var value = attributes[key];
            link.setAttribute('data-' + key, value);
        }

        head.appendChild(link);
    },
    // Create a <style> tag with optional data attributes
    createStyle: function(cssText, attributes, extraOptions) {
        extraOptions = extraOptions || {};

        var style = document.createElement('style');
        style.type = 'text/css';

        for (var key in attributes) {
            if ( ! attributes.hasOwnProperty(key)) {
                continue;
            }
            var value = attributes[key];
            style.setAttribute('data-' + key, value);
        }

        if (style.sheet) { // for jsdom and IE9+
            style.innerHTML = cssText;
            style.sheet.cssText = cssText;
            insertStyleElement(style, { insertAt: extraOptions.insertAt });
        } else if (style.styleSheet) { // for IE8 and below
            insertStyleElement(style, { insertAt: extraOptions.insertAt });
            style.styleSheet.cssText = cssText;
        } else { // for Chrome, Firefox, and Safari
            style.appendChild(document.createTextNode(cssText));
            insertStyleElement(style, { insertAt: extraOptions.insertAt });
        }
    }
};

},{}]},{},[2]);
