// type="button" id = "act"が押された時、JQueryをつかって、DOMを取得
// そのDOMに対して、クリックイベントを発生させる
$(function(){
    $("#act").click(function(){
        // 入力された文字列を取得
        var date = new Date ($("#date").val());
        var add = Number($("#add_day").val());
        // 日付を加算
        date.setDate(date.getDate() + add);
        var weekday = date.getDay();
        var WeekChars = [ "日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日" ];
        // 曜日を取得

        $("#result").text(date.toLocaleDateString() + WeekChars[weekday] + "です。") ;
    });
    });