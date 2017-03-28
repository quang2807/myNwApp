function myHttp(url, method, data, succesCallBack, errorCallBack) {
    //set bien constructor
    this.url = url || '';
    if (!this.url)
    {
        console.log('url is null');
        return false;
    }

    this.method = method || "POST";
    this.data = data || {};
    this.succesCallBack = succesCallBack || function () {};
    this.errorCallBack = errorCallBack || function () {};
    this.beforeSendCallBack = function () {};
    this.async = true;

    //set method
    this.setMethod = function (method) {
        this.method = method;
        return this;
    };
    
    //set data
    this.setData = function (data) {
        this.data = data;
        return this;
    };
    
    //set success
    this.setSuccessCallBack = function (succesCallBack) {
        this.succesCallBack = succesCallBack;
        return this;
    };
    
    //set error
    this.setErrorCallBack = function (errorCallBack) {
        this.errorCallBack = errorCallBack;
        return this;
    };
    
    //set beforeSend
    this.setBeforeSendCallBack = function (beforeSendCallBack) {
        this.beforeSendCallBack = beforeSendCallBack;
        return this;
    };
    
    //set async
    this.setAsync = function (async)
    {
        this.async = async;
        return this;
    };

    this.send = function () {
        $.ajax({
            'type': this.method,
            'data': this.data,
            'url': this.url,
            'dataType': 'json',
            'success': this.succesCallBack,
            'beforeSend': this.beforeSendCallBack,
            'error': this.errorCallBack
        })
    };
    return this;
};
