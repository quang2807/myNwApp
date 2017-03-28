/**
 
    Example1:
          {
            patient:
                    {
                       key1:{
                               code:"Thông báo",
                               data:[]
                       }
                       ,key2:{
                               code:"",
                               data:[MinNumeric,MaxNumeric]
                       }
                    }
          }

           $myValidate.showError('patient.key1');
           $myValidate.showError('patient.key2');

   Example2:
   {
           arrRelative:
           [
                   {
                    key1:{
                            code:"Thông báo",
                            data:[]
                    }
                    ,key2:{
                            code:"",
                            data:[MinNumeric,MaxNumeric]
                    }
                   },
                   {
                        key1:{
                                code:"Thông báo",
                                data:[]
                        }
                        ,key2:{
                                code:"",
                                data:[MinNumeric,MaxNumeric]
                        }
                   }
           ]
   }

    $myValidate.showError('arrRelative.key1',0);
    $myValidate.showError('arrRelative.key2',0);

    $myValidate.showError('arrRelative.key1',1);
    $myValidate.showError('arrRelative.key2',1);
 */

RED.ngApp.factory('$myValidate', function ($apply, $sce) {
    var exports = function(errorData){
        /**
         * private interface
         * @param {type} msg
         * @param {type} specialMsgFunction
         * @returns {myValidate_L1.exports.interfaceType}
         */
        function interfaceType(msg, specialMsgFunction){
            this.defaultMsg = msg;
            this.specialMsg = specialMsgFunction;
        };
        var arrCodeMsg = {
            //check empty
            EmptyValidator: new interfaceType('Không được bỏ trống giá trị này ', function(specialValue){
                return '';
            }),
            RequiredValidator: new interfaceType('Không được bỏ trống giá trị này ', function(specialValue){
                return '';
            }),
            //check datetime
            DateTimeValidator: new interfaceType('Định dạng thời gian không đúng ', function(specialValue){
                var format = specialValue.format;
                return '('+ format +')';
            }),
            MinMaxDate: new interfaceType('Thời gian không được ', function(specialValue){
                var MinDate = specialValue.MinDate;
                var MaxDate = specialValue.MaxDate;
                return ' nhỏ hơn ' + MinDate + ' lớn hơn' + MaxDate;
            }),
            MinDate: new interfaceType('Thời gian không được ', function(specialValue){
                var MinDate = specialValue.MinDate;
                return ' nhỏ hơn ' + MinDate;
            }),
            MaxDate: new interfaceType('Thời gian không được ', function(specialValue){
                var MinDate = specialValue.MinDate;
                var MaxDate = specialValue.MaxDate;
                return 'lớn hơn' + MaxDate;
            }),
            //check email
            EmailValidator: new interfaceType('Định dạng thời gian không đúng ', function(specialValue){
                return '';
            }),
            //check numerric
            NumericValidator: new interfaceType('Định dạng kiểu số không đúng ', function(specialValue){
                return '';
            }),
            MinMaxNumeric: new interfaceType('Số không được ', function(specialValue){
                var min = specialValue.min;
                var max = specialValue.max;
                
                return 'nhỏ hơn ' + min + ' lớn hơn ' + max;
            }),
            MinNumeric: new interfaceType('Số không được ', function(specialValue){
                var min = specialValue.min;
                return 'nhỏ hơn ' + min;
            }),
            MaxNumeric: new interfaceType('Số không được ', function(specialValue){
                var max = specialValue.max;
                
                return 'lớn hơn ' + max;
            }),
            //check string
            StrLenValidator: new interfaceType('Độ dài chuỗi  ', function(specialValue){
                var min = specialValue.min;
                var max = specialValue.max;
                
                return 'từ ' + min + ' đến ' + max + ' ký tự';
            }),
            MaxLenValidator: new interfaceType('Độ dài chuỗi không được ', function(specialValue){
                var max = specialValue.max;
                
                return 'lớn hơn ' + max;
            }),
            MinLenValidator: new interfaceType('Độ dài chuỗi không được ', function(specialValue){
                var min = specialValue.min;
                
                return 'nhỏ hơn ' + min;
            }),
            //check url
            UrlValidator: new interfaceType('Link liên kết không đúng định dạng ', function(specialValue){
                return '';
            }),
            //check enum
            EnumValidator: new interfaceType('Kiểu dữ liệu không đúng định dạng ', function(specialValue){
                return '';
            }),
            //check enum
            DbError: new interfaceType('Xảy ra sự cố trong lúc cập nhật ', function(specialValue){
                return '';
            })
        }
        
        /**
         * private function
         * @returns {String}
         */
        function getMsg(errorInfo){
            var code = errorInfo.code;
            var specialData = errorInfo.data;
            var msg = '';
            
            console.log(arrCodeMsg,code);
            
            var codeMsg = arrCodeMsg[code] || false;
            
            if(codeMsg == false)
                return errorInfo.code;
            
            msg = codeMsg.defaultMsg + codeMsg.specialMsg(specialData);
            return msg;
        }
        
        /**
         * 
         * @param {type} name
         * @param {int} index chi so trong mang loi
         * @returns {String|codeMsg.defaultMsg|errorInfo.code}
         */
        this.showError = function(name,index){
            var msg = '';
            var tmpData = {};
            if(this.hasError(name,index))
            {
                tmpData = getData(errorData, name,index);
                
                if(Object.prototype.toString.call(tmpData) === '[object Array]')
                {
                    msg = getMsg(tmpData[0]);
                }
                else if (typeof tmpData == 'object')
                {
                    msg = getMsg(tmpData);
                }
            }
            return msg;
        };
        /**
         * 
         * @param {type} name
         * @param {type} index
         * @returns {Boolean}
         */
        this.hasError = function(name,index){
            var tmp = getData(errorData, name,index);
            return (tmp === false)? false: true;
        };
        
        /**
         * 
         * @returns {undefined}
         */
        function getData(object, name,index){
            var result = object;
            var arrElement = name.split('.');
            
            if(typeof(index) != 'undefined')
            {          
                $.each(arrElement,function(k,v)
                {
                        if( k < (arrElement.length -1))
                        {
                            result = result[v] || false; 
                            if(!result)
                            {
                                return false;
                            }
                        }
                        else
                        {
                            result = result[index][v] || false;
                        }
                });
            }
            else
            {
                for(var key in arrElement)
                {
                    result = result[arrElement[key]] || false;
                    if(!result)
                    {
                        return false;
                    }
                }
            }
            return result;
        }
    };
    
    return exports;
});