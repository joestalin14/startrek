function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}import{randomizer}from"./index.js";export var Stars=function(){function e(t){_classCallCheck(this,e),this.starsField=t}return _createClass(e,[{key:"createStarDOM",value:function(){var e=document.createElement("span");e.classList.add("star");var t=this.starsField.offsetWidth,r=this.starsField.offsetHeight,a=randomizer(0,t),n=randomizer(-r,-5);e.style.left=a+"px",e.style.top=n+"px";var s=r/(r+-n);return e.style.animationDuration=5/s+"s",e}},{key:"createStar",value:function(){var e=this.createStarDOM();this.starsField.append(e)}},{key:"createAllStars",value:function(){for(var e=0;e<60;e++)this.createStar()}}]),e}();