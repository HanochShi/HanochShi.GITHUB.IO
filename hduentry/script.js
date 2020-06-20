window.setInterval(function() {
    var timeInfo = document.getElementById("time-info").childNodes[1];
    var myDate = new Date();
    var month = myDate.getMonth() + 1;
    var day = myDate.getDate();
    var hour = myDate.getHours();
    var ampm = hour < 13 ? "上午" : "下午";
    hour -= hour < 13 ? 0 : 12;
    var minutes = myDate.getMinutes();
    var seconds = myDate.getSeconds();
    timeInfo.innerHTML = "<b>当前时间:  " + month + "月" + day +
        "日  " + ampm + hour + ":" + minutes + ":" + seconds;
}, 1000);