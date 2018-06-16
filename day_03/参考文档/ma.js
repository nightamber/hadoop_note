(function () {
    var params = {};
    //Document��������
    if(document) {
        params.domain = document.domain || ''; 
        params.url = document.URL || ''; 
        params.title = document.title || ''; 
        params.referrer = document.referrer || ''; 
    }   
    //Window��������
    if(window && window.screen) {
        params.sh = window.screen.height || 0;
        params.sw = window.screen.width || 0;
        params.cd = window.screen.colorDepth || 0;
    }   
    //navigator��������
    if(navigator) {
        params.lang = navigator.language || ''; 
    }   
    //����_maq����
    if(_maq) {
        for(var i in _maq) {
            switch(_maq[i][0]) {
                case '_setAccount':
                    params.account = _maq[i][1];
                    break;
				case '_a_value':
                    params.avalue = _maq[i][1];
                    break;
				case 'type0':
                    params.type0 = _maq[i][1];
                    break;
				case 'type1':
                    params.type1 = _maq[i][1];
                    break;
				case 'type2':
                    params.type2 = _maq[i][1];
                    break;
                default:
                    break;
            }   
        }   
    }   
    //ƴ�Ӳ�����
    var args = ''; 
    for(var i in params) {
        if(args != '') {
            args += '&';
        }   
        args += i + '=' + encodeURIComponent(params[i]);
    }   
 
    //ͨ��Image���������˽ű�
    var img = new Image(1, 1); 
    img.src = 'http://192.168.30.130/log.gif?' + args;
})();
