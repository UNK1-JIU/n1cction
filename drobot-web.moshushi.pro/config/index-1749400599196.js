﻿/**
 * 生产环境
 */
;(function () {
  window.SITE_CONFIG = {};
  // var URL = 'http://39.108.213.177:8098/'; //接口地址
  var URL = 'https://drobot-service2.moshushi.pro/'; //接口地址
  var URL_PROD = 'http://localhost:8098/'; //接口地址

  // api接口请求地址
  window.SITE_CONFIG['baseUrl'] = URL+'/plastic/';
  window.SITE_CONFIG['baseUrlProd'] = URL_PROD + 'plastic/';
  window.SITE_CONFIG['goViewServer'] = URL + '/bigscreen/';
  window.SITE_CONFIG['baseUrlWx'] = URL +'/wx/';
  window.SITE_CONFIG['BiUrl'] =  URL + '/bi'

  window.SITE_CONFIG['webSocketUrl'] = 'wss://drobot-service.it-ot.cn/plastic';
  // window.SITE_CONFIG['webSocketUrl'] = 'ws://39.108.213.177:8098/plastic';

  window.SITE_CONFIG['webAddress'] = 'https://x.moshushi.pro';
  window.SITE_CONFIG['homeAddress'] = 'https://x.moshushi.pro';

  // cdn地址 = 域名 + 版本号
  window.SITE_CONFIG['domain']  = './'; // 域名
  window.SITE_CONFIG['version'] = '2506082306';   // 版本号(年月日时分)
  window.SITE_CONFIG['cdnUrl']  = window.SITE_CONFIG.domain + window.SITE_CONFIG.version;
  window.SITE_CONFIG['goViewUrl'] = 'https://x.moshushi.pro/bigscreen/#/';// goview服务前端地址
  window.SITE_CONFIG['datartUrl'] = 'https://x.moshushi.pro/bi/';// datart服务前端地址
})();

/**
 * 动态加载初始资源
 */
;(function() {
  var resList = {
    icon: window.SITE_CONFIG.cdnUrl + '/static/img/favicon.ico',
    css: [
      window.SITE_CONFIG.cdnUrl + '/static/css/app.css',
    ],
    js: [
      // 插件, 放置业务之前加载, 以免业务需求依赖插件时, 还未加载出错
      // 插件 - echarts
      window.SITE_CONFIG.cdnUrl + '/static/plugins/echarts-3.8.5/echarts.common.min.js',

      // window.SITE_CONFIG.cdnUrl + '/static/tinymce4.7.5/tinymce.min.js',
      // 插件 - ueditor
      // window.SITE_CONFIG.cdnUrl + '/static/plugins/ueditor-1.4.3.3/ueditor.config.js',
      // window.SITE_CONFIG.cdnUrl + '/static/plugins/ueditor-1.4.3.3/ueditor.all.min.js',
      // window.SITE_CONFIG.cdnUrl + '/static/plugins/ueditor-1.4.3.3/lang/zh-cn/zh-cn.js',
      // 业务
      window.SITE_CONFIG.cdnUrl + '/static/js/manifest.js',
      window.SITE_CONFIG.cdnUrl + '/static/js/vendor.js',
      window.SITE_CONFIG.cdnUrl + '/static/js/app.js',
      window.SITE_CONFIG.cdnUrl + '/static/js/vFun.js',
      window.SITE_CONFIG.cdnUrl + '/static/js/webmssdk.es5.js',
      window.SITE_CONFIG.cdnUrl + './static/js/obs-websocket-js'
    ]
  };

  // 图标
  (function () {
    var _icon = document.createElement('link');
    _icon.setAttribute('rel', 'shortcut icon');
    _icon.setAttribute('type', 'image/x-icon');
    _icon.setAttribute('href', resList.icon);
    document.getElementsByTagName('head')[0].appendChild(_icon);
  })();

  // 样式
  (function () {
    document.getElementsByTagName('html')[0].style.opacity = 0;
    var i = 0;
    var _style = null;
    var createStyles = function () {
      if (i >= resList.css.length) {
        document.getElementsByTagName('html')[0].style.opacity = 1;
        return;
      }
      _style = document.createElement('link');
      _style.href = resList.css[i];
      _style.setAttribute('rel', 'stylesheet');
      _style.onload = function () {
        i++;
        createStyles();
      }
      document.getElementsByTagName('head')[0].appendChild(_style);
    }
    createStyles();
  })();

  // 脚本
  document.onreadystatechange = function () {
    if (document.readyState === 'interactive') {
      var i = 0;
      var _script = null;
      var createScripts = function () {
        if (i >= resList.js.length) {
          return;
        }
        _script = document.createElement('script');
        _script.src = resList.js[i];
        _script.onload = function () {
          i++;
          createScripts();
        }
        document.getElementsByTagName('body')[0].appendChild(_script);
      }
      createScripts();
    }
  };
})();
