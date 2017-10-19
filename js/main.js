var income = [];
var free_income = [];
var month_payments = [];
var week_payments = [];
var daily_payments = [];
var extra_payments = [];
var periodic_payments = [];

$(document).ready(function(){
    $("#add_income").click(function(){
        var id = "i_" + make_id();
        income.push(id);
        $(".income").append(function(){
            return "<div class=\"sidebox\" id=\""+ id +"\">"
                + "<label for=\"" + id + "_name\">Название</label>"
                + "<input type=\"text\" id=\""+ id +"_name\"><br />"
                + "<label for=\"" + id + "_price\">Сумма</label>"
                + "<input type=\"number\" id=\""+ id +"_price\"><br />"
                + "<label for=\"" + id + "_date\">День</label>"
                + "<input type=\"number\" id=\""+ id +"_date\"><br />"
                + "<button class=\"delete_input\" value=\""+ id +"\">-</button>"
                + "</div>"
        });
        $("#" + id).on("click", ".delete_input", function () {
            $("#" + id).remove();
        });
    });
    $("#add_free_income").click(function(){
        var id = "fi_" + make_id();
        free_income.push(id);
        $(".free_income").append(function(){
            return "<div class=\"sidebox\" id=\""+ id +"\">"
                + "<label for=\"" + id + "_name\">Название</label>"
                + "<input type=\"text\" id=\""+ id +"_name\"><br />"
                + "<label for=\"" + id + "_price\">Сумма</label>"
                + "<input type=\"number\" id=\""+ id +"_price\"><br />"
                + "<label for=\"" + id + "_date\">День</label>"
                + "<input type=\"date\" id=\""+ id +"_date\"><br />"
                + "<button class=\"delete_input\" value=\""+ id +"\">-</button>"
                + "</div>"
        });
        $("#" + id).on("click", ".delete_input", function () {
            $("#" + id).remove();
        });
    });
    $("#add_month_payments").click(function(){
        var id = "i_" + make_id();
        month_payments.push(id);
        $(".month_payments").append(function(){
            return "<div class=\"sidebox\" id=\""+ id +"\">"
                + "<label for=\"" + id + "_name\">Название</label>"
                + "<input type=\"text\" id=\""+ id +"_name\"><br />"
                + "<label for=\"" + id + "_price\">Сумма</label>"
                + "<input type=\"number\" id=\""+ id +"_price\"><br />"
                + "<label for=\"" + id + "_date\">День</label>"
                + "<input type=\"number\" id=\""+ id +"_date\"><br />"
                + "<button class=\"delete_input\" value=\""+ id +"\">-</button>"
                + "</div>"
        });
        $("#" + id).on("click", ".delete_input", function () {
            $("#" + id).remove();
        });
    });
    $("#add_week_payments").click(function(){
        var id = "i_" + make_id();
        week_payments.push(id);
        $(".week_payments").append(function(){
            return "<div class=\"sidebox\" id=\""+ id +"\">"
                + "<label for=\"" + id + "_name\">Название</label>"
                + "<input type=\"text\" id=\""+ id +"_name\"><br />"
                + "<label for=\"" + id + "_price\">Сумма</label>"
                + "<input type=\"number\" id=\""+ id +"_price\"><br />"
                + "<label for=\"" + id + "_date\">День</label>"
                + "<input type=\"number\" id=\""+ id +"_date\"><br />"
                + "<button class=\"delete_input\" value=\""+ id +"\">-</button>"
                + "</div>"
        });
        $("#" + id).on("click", ".delete_input", function () {
            $("#" + id).remove();
        });
    });
    $("#add_daily_payments").click(function(){
        var id = "i_" + make_id();
        daily_payments.push(id);
        $(".daily_payments").append(function(){
            return "<div class=\"sidebox\" id=\""+ id +"\">"
                + "<label for=\"" + id + "_name\">Название</label>"
                + "<input type=\"text\" id=\""+ id +"_name\"><br />"
                + "<label for=\"" + id + "_price\">Сумма</label>"
                + "<input type=\"number\" id=\""+ id +"_price\"><br />"
                + "<button class=\"delete_input\" value=\""+ id +"\">-</button>"
                + "</div>"
        });
        $("#" + id).on("click", ".delete_input", function () {
            $("#" + id).remove();
        });
    });
    $("#add_extra_payments").click(function(){
        var id = "i_" + make_id();
        extra_payments.push(id);
        $(".extra_payments").append(function(){
            return "<div class=\"sidebox\" id=\""+ id +"\">"
                + "<label for=\"" + id + "_name\">Название</label>"
                + "<input type=\"text\" id=\""+ id +"_name\"><br />"
                + "<label for=\"" + id + "_price\">Сумма</label>"
                + "<input type=\"number\" id=\""+ id +"_price\"><br />"
                + "<label for=\"" + id + "_date\">День</label>"
                + "<input type=\"number\" id=\""+ id +"_date\"><br />"
                + "<button class=\"delete_input\" value=\""+ id +"\">-</button>"
                + "</div>"
        });
        $("#" + id).on("click", ".delete_input", function () {
            $("#" + id).remove();
        });
    });
    $("#add_periodic_payments").click(function(){
        var id = "i_" + make_id();
        periodic_payments.push(id);
        $(".periodic_payments").append(function(){
            return "<div class=\"sidebox\" id=\""+ id +"\">"
                + "<label for=\"" + id + "_name\">Название</label>"
                + "<input type=\"text\" id=\""+ id +"_name\"><br />"
                + "<label for=\"" + id + "_price\">Сумма</label>"
                + "<input type=\"number\" id=\""+ id +"_price\"><br />"
                + "<label for=\"" + id + "_period\">Период</label>"
                + "<input type=\"number\" id=\""+ id +"_period\"><br />"
                + "<label for=\"" + id + "_left\">Осталось до выплаты</label>"
                + "<input type=\"number\" id=\""+ id +"_left\"><br />"
                + "<button class=\"delete_input\" value=\""+ id +"\">-</button>"
                + "</div>"
        });
        $("#" + id).on("click", ".delete_input", function () {
            $("#" + id).remove();
        });
    });

    $("#calc").click(function () {
        var cash = $("#cash").val();
        var change = $("#change").val();
        var end_date = new Date(2018,6,4);
        var start_date = Date.parse($("#bound_date").val());

        var income_data = [];
        var free_income_data = [];
        var month_payments_data = [];
        var week_payments_data = [];
        var daily_payments_data = [];
        var extra_payments_data = [];
        var periodic_payments_data = [];

        window.income.forEach(function (t, i, ts) {
            var t_arr = [];
            t_arr.push($("#" + t + "_name").val());
            t_arr.push($("#" + t + "_price").val());
            t_arr.push($("#" + t + "_date").val());
            income_data.push(t_arr);
        });
        window.free_income.forEach(function (t, i, ts) {
            var t_arr = [];
            t_arr.push($("#" + t + "_name").val());
            t_arr.push($("#" + t + "_price").val());
            t_arr.push($("#" + t + "_date").val());
            free_income_data.push(t_arr);
        });
        window.month_payments.forEach(function (t, i, ts) {
            var t_arr = [];
            t_arr.push($("#" + t + "_name").val());
            t_arr.push($("#" + t + "_price").val());
            t_arr.push($("#" + t + "_date").val());
            month_payments_data.push(t_arr);
        });
        window.week_payments.forEach(function (t, i, ts) {
            var t_arr = [];
            t_arr.push($("#" + t + "_name").val());
            t_arr.push($("#" + t + "_price").val());
            t_arr.push($("#" + t + "_date").val());
            week_payments_data.push(t_arr);
        });
        window.daily_payments.forEach(function (t, i, ts) {
            var t_arr = [];
            t_arr.push($("#" + t + "_name").val());
            t_arr.push($("#" + t + "_price").val());
            daily_payments_data.push(t_arr);
        });
        window.extra_payments.forEach(function (t, i, ts) {
            var t_arr = [];
            t_arr.push($("#" + t + "_name").val());
            t_arr.push($("#" + t + "_price").val());
            t_arr.push($("#" + t + "_date").val());
            extra_payments_data.push(t_arr);
        });
        window.periodic_payments.forEach(function (t, number, ts) {
            var t_arr = [];
            t_arr.push($("#" + t + "_name").val());
            t_arr.push($("#" + t + "_price").val());
            t_arr.push($("#" + t + "_period").val());
            t_arr.push($("#" + t + "_left").val());
            periodic_payments_data.push(t_arr);
        });

        $(".report-table").append(cash + "<br />");
        $(".report-table").append(change + "<br />");
        $(".report-table").append(start_date + "<br />");
        $(".report-table").append(income_data + "<br />");
        $(".report-table").append(free_income_data + "<br />");
        $(".report-table").append(month_payments_data + "<br />");
        $(".report-table").append(week_payments_data + "<br />");
        $(".report-table").append(daily_payments_data + "<br />");
        $(".report-table").append(extra_payments_data + "<br />");
        $(".report-table").append(periodic_payments_data + "<br />");

        var labels = [];
        var temp_date = new Date(start_date);

        var dataset_total = [];
        var dataset_in = [];
        var dataset_out = [];

        while (end_date.getTime() >= temp_date.getTime()){
            var cash_in = 0;
            var cash_out = 0;

            income_data.forEach(function (t) {
                if(temp_date.getDate() == t[2]){
                    cash += t[1];
                    cash_in += t[1];
                }
            });
            free_income_data.forEach(function (t) {
                if(temp_date.getTime() == new Date(t[2]).getTime()){
                    cash += t[1];
                    cash_in += t[1];
                }
            });

            month_payments_data.forEach(function (t) {
                if(temp_date.getDate() == t[2]){
                    cash -= t[1];
                    cash_out += t[1];
                }
            });
            week_payments_data.forEach(function (t) {
                if(temp_date.getDay() == t[2]){
                    cash -= t[1];
                    cash_out += t[1];
                }
            });
            daily_payments_data.forEach(function (t) {

            });

            periodic_payments_data.forEach(function (t) {

            });
            extra_payments_data.forEach(function (t) {

            });

            if(cash_in != 0 && cash_out !=0){
                labels.push(temp_date.toLocaleDateString());
                dataset_total.push(cash);
                dataset_in.push(cash_in);
                dataset_out.push(cash_out);
            }
            temp_date.setDate(temp_date.getDate() + 1);
        }

        var ctx = document.getElementById("graphic").getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: [1,2,3,4,5],
                datasets: [{
                        label: 'Деньги',
                        data: [10,20,30,40,50],
                        borderWidth: 1
                    },
                    {
                        label: 'Убытки',
                        data: [50,40,30,20,10],
                        borderWidth: 1
                    }]
            },
            options: {

            }
        });
    });
});

function make_id() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}