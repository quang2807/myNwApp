RED.ngApp.factory('$myDate', function ($filter, $sce)
{
    var exports = {
        format: function (format, date) {
            if(typeof date === 'string')
            {
                date = new Date(date);
            }

            if (!date)
            {
                return '--';
            }
            return $filter('date')(date, format);
        },
        showYMD: function (date)
        {
            return exports.format('yyyy-MM-dd', date);
        },
        showYMDHIS: function (date)
        {
            return exports.format('yyyy-MM-dd HH:mm:ss', date);
        },
        showDMY: function (date)
        {
            return exports.format('dd/MM/yyyy', date);
        },
        showDM: function (date)
        {
            return exports.format('dd/MM', date);
        },
        showDMYHIS: function (date)
        {
            return exports.format('dd/MM/yyyy HH:mm:ss', date);
        },
        showDMYHI: function (date)
        {
            return exports.format('dd/MM/yyyy HH:mm', date);
        },
        showHIS: function (date)
        {
            return exports.format('HH:mm:ss', date);
        },
        showHI: function (date)
        {
            return exports.format('HH:mm', date);
        },
        createDateFromFormat: function (input, format)
        {
            format = format || 'yyyy-mm-dd'; // default format
            var parts = input.match(/(\d+)/g),
                    i = 0, fmt = {};
            // extract date-part indexes from the format
            format.replace(/(yyyy|dd|mm)/g, function (part)
            {
                fmt[part] = i++;
            });

            return new Date(parts[fmt['yyyy']], parts[fmt['mm']] - 1, parts[fmt['dd']]);
        },
        createDate: function (strDate)
        {
            return new Date(strDate);
        },
        now: function ()
        {
            return new Date();
        },
        formatdmYtoYmd: function (date, operator)
        {
            operator = operator || '-';
            date = date.replace(new RegExp("/", 'g'), '-');
            var arrSplit = date.split('-');
            if (arrSplit.length != 3)
            {
                return false;
            }
            var newDate = arrSplit[2] + operator + arrSplit[1] + operator + arrSplit[0];
            return newDate;
        }
    };

    return exports;
});