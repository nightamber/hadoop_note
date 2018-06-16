(function () {
    var params = {};  //����һ������
    //Document��������
    if(document) {
        params.domain = document.domain || '';  //���������渳ֵ
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
                case 'type':
                    params.account = _maq[i][1];
                    break;
                default:
                    break;
            }   
        }   
    }   
    //ƴ�Ӳ�����
    var args = ''; 
    for(var i in params) {    //���������������
        if(args != '') {
            args += '&';
        }   
        args += i + '=' + encodeURIComponent(params[i]);
    }   
 
    //ͨ��Image���������˽ű�
    var img = new Image(1, 1); 
    img.src = 'http://xxx.xxx.xxx.xxx/log.gif?' + args;
})();
