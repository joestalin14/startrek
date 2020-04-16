function _createForOfIteratorHelper(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=_unsupportedIterableToArray(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,r,i=!0,a=!1;return{s:function(){o=e[Symbol.iterator]()},n:function(){var e=o.next();return i=e.done,e},e:function(e){a=!0,r=e},f:function(){try{i||null==o.return||o.return()}finally{if(a)throw r}}}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}import{klingonsMaker,counter}from"./index.js";export var ShipShot=function(){function e(t,n){_classCallCheck(this,e),this.ship=t,this.field=n,this.weaponHandler=this.photonTorpedo.bind(this),this.mobileWeaponHandler=this.mobileDevicePhotonTorpedo.bind(this),this.stopShotHandler=this.removeWeapon.bind(this),this.stopMobileShotHandler=this.removeMobileWeapon.bind(this)}return _createClass(e,[{key:"addWeapon",value:function(){window.addEventListener("keydown",this.weaponHandler),window.addEventListener("touchstart",this.mobileWeaponHandler)}},{key:"removeWeapon",value:function(){window.removeEventListener("keydown",this.weaponHandler)}},{key:"removeMobileWeapon",value:function(){window.removeEventListener("touchstart",this.mobileWeaponHandler)}},{key:"photonTorpedo",value:function(){if("ArrowUp"==event.key){var e=this.ship,t=this.field,n=document.createElement("span");n.classList.add("torpedo"),t.append(n),n.style.left=e.offsetLeft+e.offsetWidth/2-2+"px",n.style.top=e.offsetTop+"px",n.find=setInterval((function(){n.onanimationend=function(){n.remove(),clearInterval(n.find)};var e,t=_createForOfIteratorHelper(document.querySelectorAll(".klingon"));try{var o=function(){var t=e.value,o=n.getBoundingClientRect(),r=t.getBoundingClientRect();o.left>r.left&&o.left<r.left+r.width&&o.top<r.bottom&&(t.classList.contains("banged-klingon")||(t.querySelector(".klingon-img").src="./img/bang.png",t.classList.add("banged-klingon"),n.remove(),counter.totalCount+=10,setTimeout((function(){t.remove(),klingonsMaker.createKlingon()}),500),clearInterval(n.find)))};for(t.s();!(e=t.n()).done;)o()}catch(e){t.e(e)}finally{t.f()}}),10)}}},{key:"mobileDevicePhotonTorpedo",value:function(){if(event.target.closest(".btn-shot")){var e=this.ship,t=this.field,n=document.createElement("span");n.classList.add("torpedo"),t.append(n),n.style.left=e.offsetLeft+e.offsetWidth/2-2+"px",n.style.top=e.offsetTop+"px",n.find=setInterval((function(){n.onanimationend=function(){n.remove(),clearInterval(n.find)};var e,t=_createForOfIteratorHelper(document.querySelectorAll(".klingon"));try{var o=function(){var t=e.value,o=n.getBoundingClientRect(),r=t.getBoundingClientRect();o.left>r.left&&o.left<r.left+r.width&&o.top<r.bottom&&(t.classList.contains("banged-klingon")||(t.querySelector(".klingon-img").src="./img/bang.png",t.classList.add("banged-klingon"),n.remove(),counter.totalCount+=10,setTimeout((function(){t.remove(),klingonsMaker.createKlingon()}),500),clearInterval(n.find)))};for(t.s();!(e=t.n()).done;)o()}catch(e){t.e(e)}finally{t.f()}}),10)}}}]),e}();