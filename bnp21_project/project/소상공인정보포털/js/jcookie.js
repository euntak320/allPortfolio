(function() {
    var jcookie = {

      makeDomain: function(url) {
        var _url = url.replace(/(www.)?/i, '');
        return _url;
      },

      extend: function() {
        var i = 0;
        var result = {};
        var item;

        for(; i < arguments.length; i++) {
            item = arguments[i];
            for(var key in item) {
              result[key] = item[key];
            }
        }

        return result;
      },

      setCookie: function(name, value, attributes) {
        if(!name) {
          return;
        }
        var name = encodeURIComponent(name);
        var value = encodeURIComponent(value);
        var attributes = jcookie.extend({expires: -1, path: "/"}, attributes);

        if(typeof attributes.expires == "number" && attributes.expires > -1) {
          var date = new Date();
          date.setMilliseconds(date.getMilliseconds() + attributes.expires * 24 * 60 * 60 * 1000);
          attributes.expires = date.toUTCString();
        }

        document.cookie = [
          name, "=", value, ";",
          "expires=", attributes.expires, ";",
          "Path=/;"
        ].join("");

      },

      getCookie: function(name) {
        var cookies = document.cookie ? document.cookie.split("; ") : [];
        var item;
        var key, value;
        var result;
        if(cookies.length > 0) {
          for(var i = 0, len = cookies.length; i < len; i++) {
            var item = cookies[i];
            var key = item.split("=")[0].trim();
            var value = item.split("=")[1].trim();
            if(name == key) {
              result = decodeURIComponent(value);
            }
          }
        }

        return result;
      },

      removeCookie: function(name, attributes) {
        if(!name) {
          return;
        }

        var attributes = jcookie.extend({path: '/'}, attributes);

        document.cookie = [name + '=;',
         'Path=/;',
         'Expires=Thu, 01, Jan 1970 00:00:01 GMT;'
       ].join("");
      }
    };

    window.jcookie = jcookie;
})();
