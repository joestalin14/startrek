function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _createForOfIteratorHelper(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=_unsupportedIterableToArray(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,r,i=!0,a=!1;return{s:function(){o=e[Symbol.iterator]()},n:function(){var e=o.next();return i=e.done,e},e:function(e){a=!0,r=e},f:function(){try{i||null==o.return||o.return()}finally{if(a)throw r}}}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(e){return function(){var t,n=_getPrototypeOf(e);if(_isNativeReflectConstruct()){var o=_getPrototypeOf(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return _possibleConstructorReturn(this,t)}}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}import{GameFunc,gameFuncClass}from"./gamefunc.js";import{klingonsClass}from"./klingons.js";import{counterClass}from"./counter.js";var ShipShot=function(e){_inherits(n,GameFunc);var t=_createSuper(n);function n(){var e;return _classCallCheck(this,n),(e=t.call(this)).weaponHandler=e.photonTorpedo.bind(_assertThisInitialized(e)),e.stopShotHandler=e.removeWeapon.bind(_assertThisInitialized(e)),e.mobileWeaponHandler=e.mobileDevicePhotonTorpedo.bind(_assertThisInitialized(e)),e.stopMobileShotHandler=e.removeMobileWeapon.bind(_assertThisInitialized(e)),e}return _createClass(n,[{key:"addWeapon",value:function(){window.addEventListener("keydown",this.weaponHandler),window.addEventListener("touchstart",this.mobileWeaponHandler)}},{key:"removeWeapon",value:function(){window.removeEventListener("keydown",this.weaponHandler)}},{key:"removeMobileWeapon",value:function(){window.removeEventListener("touchstart",this.mobileWeaponHandler)}},{key:"startShotMethods",value:function(){var e=this;this.startBtn.addEventListener("click",(function(){"stop"===gameFuncClass.state&&e.addWeapon()})),this.stopBtn.addEventListener("click",(function(){if("play"===gameFuncClass.state){e.removeWeapon(),e.removeMobileWeapon();var t,n=_createForOfIteratorHelper(document.querySelectorAll("torpedo"));try{for(n.s();!(t=n.n()).done;){t.value.remove()}}catch(e){n.e(e)}finally{n.f()}}})),this.pauseBtn.addEventListener("click",(function(){if("play"===gameFuncClass.state){e.removeWeapon(),e.removeMobileWeapon();var t,n=_createForOfIteratorHelper(document.querySelectorAll("torpedo"));try{for(n.s();!(t=n.n()).done;){t.value.style.webkitAnimationPlayState="paused"}}catch(e){n.e(e)}finally{n.f()}}else if("paused"===gameFuncClass.state){e.addWeapon();var o,r=_createForOfIteratorHelper(document.querySelectorAll("torpedo"));try{for(r.s();!(o=r.n()).done;){o.value.style.webkitAnimationPlayState="running"}}catch(e){r.e(e)}finally{r.f()}}}))}},{key:"photonTorpedo",value:function(e){if("ArrowUp"===e.key){var t=this.ship,n=this.klingonsField,o=document.createElement("span");o.classList.add("torpedo"),n.append(o),o.style.left=t.offsetLeft+t.offsetWidth/2-2+"px",o.style.top=t.offsetTop+"px",o.findMethod=setInterval((function(){o.onanimationend=function(){o.remove(),clearInterval(o.findMethod)};var e,t=_createForOfIteratorHelper(document.querySelectorAll(".klingon"));try{var n=function(){var t=e.value,n=o.getBoundingClientRect(),r=t.getBoundingClientRect();n.left>r.left&&n.left<r.left+r.width&&n.top<r.bottom&&(t.classList.contains("banged-klingon")||(t.querySelector(".klingon-img").src="./img/bang.png",t.classList.add("banged-klingon"),o.remove(),setTimeout((function(){counterClass.totalCount+=10,t.remove(),klingonsClass.createKlingon()}),500),clearInterval(o.findMethod)))};for(t.s();!(e=t.n()).done;)n()}catch(e){t.e(e)}finally{t.f()}}),10)}}},{key:"mobileDevicePhotonTorpedo",value:function(e){if(e.target.closest(".btn-shot")){var t=this.ship,n=this.klingonsField,o=document.createElement("span");o.classList.add("torpedo"),n.append(o),o.style.left=t.offsetLeft+t.offsetWidth/2-2+"px",o.style.top=t.offsetTop+"px",o.findMethod=setInterval((function(){o.onanimationend=function(){o.remove(),clearInterval(o.findMethod)};var e,t=_createForOfIteratorHelper(document.querySelectorAll(".klingon"));try{var n=function(){var t=e.value,n=o.getBoundingClientRect(),r=t.getBoundingClientRect();n.left>r.left&&n.left<r.left+r.width&&n.top<r.bottom&&(t.classList.contains("banged-klingon")||(t.querySelector(".klingon-img").src="./img/bang.png",t.classList.add("banged-klingon"),o.remove(),setTimeout((function(){counterClass.totalCount+=10,t.remove(),klingonsClass.createKlingon()}),500),clearInterval(o.findMethod)))};for(t.s();!(e=t.n()).done;)n()}catch(e){t.e(e)}finally{t.f()}}),10)}}}]),n}();export var shipShotClass=new ShipShot;