function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}import{randomizer}from"./index.js";export var Trash=function(){function e(t){_classCallCheck(this,e),this.trashFieldDom=t,this.trashFieldWidth=t.offsetWidth,this.trashFieldHeight=t.offsetHeight}return _createClass(e,[{key:"numberOfColumns",value:function(){var e=document.body.offsetWidth;return e>=1200?16:e>=992?12:e>=768?8:e>=576?5:4}},{key:"createTrashDom",value:function(){var e=document.createElement("span");e.classList.add("trash");var t=document.createElement("img");t.src="../img/trash".concat(randomizer(1,3),".png"),t.classList.add("trash-img"),e.append(t);var r=this.numberOfColumns(),a=this.trashFieldWidth/r*randomizer(1,r)-this.trashFieldWidth/(2*r)-e.offsetWidth/2;e.style.left=a+"px";var i=randomizer(-this.trashFieldHeight,-30);e.style.top=i+"px";var s=this.trashFieldHeight/(this.trashFieldHeight+-1*i);return e.style.animationDuration=6/s+.2*randomizer(-10,10)+"s",e}},{key:"createTrash",value:function(){var e=this.createTrashDom();this.trashFieldDom.append(e)}},{key:"createAllTrash",value:function(){var e,t=document.body.offsetWidth;e=t>=1200?9:t>=992?8:t>=768?7:t>=576?6:5;for(var r=0;r<e;r++)this.createTrash()}}]),e}();