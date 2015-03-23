

//定义一个ui tool工具
"use strict";

define(function(require,exports,module) {
	
	var $ = require('zepto');

	return {

		tips:function(msg,width) {
			$('.tips').remove();
			var oDiv = document.creatElement('div');
			oDiv.className = 'tips';
			document.body.append(oDiv);
			return $(oDiv);
		}

		mask:function () {
			$('.mask').remove();
			var oDiv = document.creatElement('div');
			oDiv.className = 'mask';
			document.body.append(oDiv);
			return $(oDiv);
		},

		loading:function(){
			$('.loadingBox').remove();
        	var a = document.createElement('div'),
            var b = document.createElement('div'),
            var c = document.createElement('div'),
            var d = document.createElement('div');
        	a.className = 'double-bounce1';
        	b.className = 'double-bounce2';
        	c.className = 'spinn';
        	d.className = 'loadingBox bfc';
        	c.appendChild(a);
        	c.appendChild(b);
        	d.appendChild(c);
        	document.body.appendChild(d);
        	return $(d);
		}



	}
});