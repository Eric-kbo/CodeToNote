

var a="2018-11-14 10:25:42";

var dd=new Date();
console.log(formatDate(a))




function formatDate(date) {
    if (!date)
        return '';
        // return '';
    return formatTime(date).substr(0, 10);
}


function formatTime(date) {
    if (!date) return '';
    if (typeof date == "string") {
			if(date.length > 10) {
				var re = /([0-9]{4})-([0-9]{1,2})-([0-9]{1,2}) ([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2})/;
				var m = date.match(re);
				date = new Date(m[1], parseInt(m[2], 10) - 1, m[3], m[4], m[5], m[6]);
			}
			else {				
				var re = /([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})/;
				var m = date.match(re);
				date = new Date(m[1], parseInt(m[2], 10) - 1, m[3]);
			}
    }
    if ((date - 0) == -62135596800000) return '';
    return date.getFullYear() + '-' + fill2zero((date.getMonth() + 1)) + '-' + fill2zero(date.getDate()) + ' ' + fill2zero(date.getHours())
     + ':' + fill2zero(date.getMinutes()) + ':' + fill2zero(date.getSeconds());
}

function fill2zero(val) {
    val = String(val);
    return val.length < 2 ? '0' + val : val;
}
