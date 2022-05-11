function getOZResource(url) {
 try{
		if(window.XMLHttpRequest && !(window.ActiveXObject)) {
		  //netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead");
			var req = new XMLHttpRequest();
			if(req.readyState == null) 
			{
				req.readyState = 1;
				req.addEventListener("load", 
									function() 
									{
										req.readyState = 4;
										if(typeof req.onreadystatechange == "function")
											req.onreadystatechange();
									},
									false);
			}
      req.open('GET',url,false);
      var oXML = null;
      try{
	      oXML = new ActiveXObject("Msxml.DOMDocument");
	    }catch(e){
	    }
      if (oXML && req.overrideMimeType) req.overrideMimeType('text/plain; charset=x-user-defined');
      req.send(null);
      
      if (req.status != 200) return "@error@";
      if(oXML){
       var oXML = new ActiveXObject("Msxml.DOMDocument");
       var oNode = oXML.createElement("base64");
       oNode.dataType = "bin.base64";
       oNode.nodeTypedValue = req.responseBody;
       return oNode.text;
			}else{      
       var text = req.responseText;
       var out='';
       for(var i=0;i<text.length;i++){
       	out+=String.fromCharCode(text.charCodeAt(i) & 0xff);
       }
       return window.btoa(out);
      }
		} else if(window.ActiveXObject) {
			var xhr = new ActiveXObject("Microsoft.XMLHTTP");
			xhr.open("GET", url, false);
			xhr.send(null);
      if(xhr.status != 200){
				return "@error@";
      }
      var oXML = new ActiveXObject("Msxml.DOMDocument");
      var oNode = oXML.createElement("base64");
      oNode.dataType = "bin.base64";
      oNode.nodeTypedValue = xhr.responseBody;
      return oNode.text;
		}else{
				return "@error@";
		}
 }catch(e){
//alert(e.message);
	 return "@error@";
 }
}


function ozexport(url, data, compress, filename){   
   var form = document.createElement("form");   
   form.style.display = "none";
   form.action = url;
   form.method = "post";
   form.target = "_blank";
   
   var data_input = document.createElement("input");
   data_input.type = "hidden";
   data_input.name = "data";
   data_input.value = data;
   form.appendChild(data_input);
   
   var compress_input = document.createElement("input");
   compress_input.type = "hidden";
   compress_input.name = "compress";
   compress_input.value = compress;
   form.appendChild(compress_input);
   
   var filename_input = document.createElement("input");
   filename_input.type = "hidden";
   filename_input.name = "filename";
   filename_input.value = filename;
   form.appendChild(filename_input);

   document.body.appendChild(form);
   form.submit();
   document.body.removeChild(form);
}   

function _GetURLTextContents_GET(url) {
 try{
		if(window.XMLHttpRequest && !(window.ActiveXObject)) {
		  //netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead");
			var req = new XMLHttpRequest();
			if(req.readyState == null) 
			{
				req.readyState = 1;
				req.addEventListener("load", 
									function() 
									{
										req.readyState = 4;
										if(typeof req.onreadystatechange == "function")
											req.onreadystatechange();
									},
									false);
			}
      req.open('GET',url,false);
      req.send(null);
      
      if (req.status != 200){
				throw new Error("Error: Failed to http : invalid request url" + url);
      }
      
      return req.responseText;
		} else if(window.ActiveXObject) {
			var xhr = new ActiveXObject("Microsoft.XMLHTTP");
			xhr.open("GET", url, false);
			xhr.send(null);
      if(xhr.status != 200){
				throw new Error("Error: Failed to http : invalid request url" + url);
      }
      return xhr.responseText;
		}else{
				throw new Error("not support");
		}
 }catch(e){
	 throw new Error("Error: Failed to http : error " + e.message);
 }
 return "";
}
function _GetURLTextContents_POST(url, strParam) {
 try{
		if(window.XMLHttpRequest && !(window.ActiveXObject)) {
		  //netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead");
			var req = new XMLHttpRequest();
			if(req.readyState == null) 
			{
				req.readyState = 1;
				req.addEventListener("load", 
									function() 
									{
										req.readyState = 4;
										if(typeof req.onreadystatechange == "function")
											req.onreadystatechange();
									},
									false);
			}
      req.open('POST',url,false);
			req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      req.send(strParam);
      
      if (req.status != 200){
				throw new Error("Error: Failed to http : invalid request url" + url);
      }
      
      return req.responseText;
		} else if(window.ActiveXObject) {
			var xhr = new ActiveXObject("Microsoft.XMLHTTP");
			xhr.open("POST", url, false);
			xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			xhr.send(strParam);
      if(xhr.status != 200){
				throw new Error("Error: Failed to http : invalid request url" + url);
      }
      return xhr.responseText;
		}else{
				throw new Error("not support");
		}
 }catch(e){
	 throw new Error("Error: Failed to http : error " + e.message);
 }
 return "";
}				

function getOZPosition(id){

  try{
    var elem = document.getElementById(id);
    var srcelem = elem;
    var offsetParent = elem.offsetParent,    doc = elem.ownerDocument,    docElem = doc.documentElement,    body = doc.body,    top = elem.offsetTop,    left = elem.offsetLeft;
    if( typeof( window.pageXOffset) == 'number' ) {
        top  -= window.pageYOffset;
        left -= window.pageXOffset;
    } else if( document.documentElement && ( document.documentElement.scrollLeft  || document.documentElement.scrollTop ) ) {
        top  -= document.documentElement.scrollTop ;
        left -= document.documentElement.scrollLeft ;
    } else if( document.body && ( document.body.scrollLeft || document.body.scrollTop ) ) {
        top  -= document.body.scrollTop;
        left -= document.body.scrollLeft;
    }
                                  
  
     while ( (elem = elem.parentNode) && elem !== body && elem !== docElem ) {
        top  -= elem.scrollTop;
        left -= elem.scrollLeft;
  
        if ( elem === offsetParent ) {
                  top  += elem.offsetTop;
                  left += elem.offsetLeft;
  
                  offsetParent = elem.offsetParent;
        }
  
     }
  
    var scWidth = 0, scHeight = 0;
    if( typeof( window.innerWidth ) == 'number' ) {
      scWidth = window.innerWidth;
      scHeight = window.innerHeight;
    } else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
      scWidth = document.documentElement.clientWidth;
      scHeight = document.documentElement.clientHeight;
    } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
      scWidth = document.body.clientWidth;
      scHeight = document.body.clientHeight;
    }
    if(top >= 0){
      if(top >= scHeight){
        top = 0;
        scHeight = 0;
      }else if((top+srcelem.clientHeight) >= scHeight){
        scHeight = scHeight - top;
        top = 0;

      }else{
        top = 0;
        scHeight = 0;
      }
    }else{
      if((top+srcelem.clientHeight) < 0){
        top = 0;
        scHeight = 0;
      }else if((top+srcelem.clientHeight) >= scHeight){
        top = -top;
      }else{
        scHeight = top+srcelem.clientHeight;
        top = -top;
      }
    }
    if(left >= 0){
      if(left >= scWidth){
        left = 0;
        scWidth = 0;
      }else if((left+srcelem.clientWidth) >= scWidth){
        scWidth = scWidth - left;
        left = 0;
        
      }else{
        left = 0;
        scWidth = 0;
      }
    }else{
      if((left+srcelem.clientWidth) < 0){
        left = 0;
        scWidth = 0;
      }else if((left+srcelem.clientWidth) >= scWidth){
        left = -left;
      }else{
        scWidth = left+srcelem.clientWidth;
        left = -left;
      }
    }
    
    return left+","+top+","+scWidth+","+scHeight;
 }catch(e){
  

 }
 	return "@error@";
}
if (typeof JSON !== 'object') {
    JSON = {};
}
(function () {
    'use strict';
    var f = function(n) {
        return n < 10 ? '0' + n : n;
    };
    if (typeof Date.prototype.toJSON !== 'function') {
        Date.prototype.toJSON = function (key) {
            return isFinite(this.valueOf())
                ? this.getUTCFullYear()     + '-' +
                    f(this.getUTCMonth() + 1) + '-' +
                    f(this.getUTCDate())      + 'T' +
                    f(this.getUTCHours())     + ':' +
                    f(this.getUTCMinutes())   + ':' +
                    f(this.getUTCSeconds())   + 'Z'
                : null;
        };
        String.prototype.toJSON      =
            Number.prototype.toJSON  =
            Boolean.prototype.toJSON = function (key) {
                return this.valueOf();
            };
    }
    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap,
        indent,
        meta = {    // table of character substitutions
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"' : '\\"',
            '\\': '\\\\'
        },
        rep;
    var quote = function(string) {
        escapable.lastIndex = 0;
        return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
            var c = meta[a];
            return typeof c === 'string'
                ? c
                : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
        }) + '"' : '"' + string + '"';
    };
    var str = function(key, holder) {
        var i,
            k,
            v,
            length,
            mind = gap,
            partial,
            value = holder[key];
        if (value && typeof value === 'object' &&
                typeof value.toJSON === 'function') {
            value = value.toJSON(key);
        }
        if (typeof rep === 'function') {
            value = rep.call(holder, key, value);
        }
        switch (typeof value) {
        case 'string':
            return quote(value);
        case 'number':
            return isFinite(value) ? String(value) : 'null';
        case 'boolean':
        case 'null':
            return String(value);
        case 'object':
            if (!value) {
                return 'null';
            }
            gap += indent;
            partial = [];
            if (Object.prototype.toString.apply(value) === '[object Array]') {
                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || 'null';
                }
                v = partial.length === 0
                    ? '[]'
                    : gap
                    ? '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']'
                    : '[' + partial.join(',') + ']';
                gap = mind;
                return v;
            }
            if (rep && typeof rep === 'object') {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    if (typeof rep[i] === 'string') {
                        k = rep[i];
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            } else {
                for (k in value) {
                    if (Object.prototype.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            }
            v = partial.length === 0
                ? '{}'
                : gap
                ? '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}'
                : '{' + partial.join(',') + '}';
            gap = mind;
            return v;
        }
    };
    if (typeof JSON.stringify !== 'function') {
        JSON.stringify = function (value, replacer, space) {
            var i;
            gap = '';
            indent = '';
            if (typeof space === 'number') {
                for (i = 0; i < space; i += 1) {
                    indent += ' ';
                }
            } else if (typeof space === 'string') {
                indent = space;
            }
            rep = replacer;
            if (replacer && typeof replacer !== 'function' &&
                    (typeof replacer !== 'object' ||
                    typeof replacer.length !== 'number')) {
                throw new Error('JSON.stringify');
            }
            return str('', {'': value});
        };
    }
    if (typeof JSON.parse !== 'function') {
        JSON.parse = function (text, reviver) {
            var j;


            function walk(holder, key) {
                var k, v, value = holder[key];
                if (value && typeof value === 'object') {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v;
                            } else {
                                delete value[k];
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value);
            }
            text = text+"";
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function (a) {
                    return '\\u' +
                        ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                });
            }
            if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
                j = eval('(' + text + ')');
                return typeof reviver === 'function'
                    ? walk({'': j}, '')
                    : j;
            }
            throw new Error('JSON.parse');
        };
    }
}());
