/**
 * Created by shawn on 2017. 7. 20..
 */
(function (exports, doc) {
  'use strict';
  function executeUnderline() {
    var _ = {};
    _.select = function (t) {
      return doc.querySelectorAll(t);
    };
    _.on = function (el, evtName, hnr) {
      if(el.addEventListener){
        el.addEventListener(evtName, hnr);
      }else{
        el.attachEvent('on'+evtName, function () {
          hnr.call(el);
        });
      }
    };
    _.fire = function (el, evtName, opts) {
      var evt;
      if (window.CustomEvent) {
        evt = new CustomEvent(evtName, opts);
      } else {
        evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(evtName, true, true, opts);
      }
      el.dispatchEvent(evt);
    };
    return _;
  }
  if (typeof _ === 'undefined') {
    exports._ = executeUnderline();
  }
})(window, document);