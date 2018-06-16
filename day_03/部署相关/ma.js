(function () {
    var params = {};  //定义一个对象
    //Document对象数据
    if(document) {
        params.domain = document.domain || '';  //给对象里面赋值
        params.url = document.URL || ''; 
        params.title = document.title || ''; 
        params.referrer = document.referrer || ''; 
    }   
    //Window对象数据
    if(window && window.screen) {
        params.sh = window.screen.height || 0;
        params.sw = window.screen.width || 0;
        params.cd = window.screen.colorDepth || 0;
    }   
    //navigator对象数据
    if(navigator) {
        params.lang = navigator.language || ''; 
    }   
    //解析_maq配置
    if(_maq) {
        for(var i in _maq) {
            switch(_maq[i][0]) {
                case 'type':
                    params.account = _maq[i][1];
                    break;
                default:
                    break;
            }   
        }   
    }   
    //拼接参数串
    var args = ''; 
    for(var i in params) {    //遍历对象里的属性
        if(args != '') {
            args += '&';
        }   
        args += i + '=' + encodeURIComponent(params[i]);
    }   
 
    //通过Image对象请求后端脚本
    var img = new Image(1, 1); 
    img.src = 'http://xxx.xxx.xxx.xxx/log.gif?' + args;
})();
