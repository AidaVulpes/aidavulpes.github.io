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
        income.push({id : id});
        $(".income").append(function(){
            return "<div class=\"sidebox\" id=\""+ id +"\">"
                + "<label for=\"" + id + "_name\">Название</label><br />"
                + "<input type=\"text\" id=\""+ id +"_name\"><br />"
                + "<label for=\"" + id + "_price\">Сумма</label><br />"
                + "<input type=\"number\" id=\""+ id +"_price\"><br />"
                + "<label for=\"" + id + "_date\">День</label><br />"
                + "<input type=\"number\" id=\""+ id +"_date\"><br />"
                + "<button class=\"delete_input\" value=\""+ id +"\">-</button>"
                + "</div>"
        });
        $("#" + id).on("click", ".delete_input", function () {
            $("#" + id).remove();
            income.remove(income.indexOf(id));
        });
    });
    $("#add_free_income").click(function(){
        var id = "fi_" + make_id();
        free_income.push(({id : id}));
        $(".free_income").append(function(){
            return "<div class=\"sidebox\" id=\""+ id +"\">"
                + "<label for=\"" + id + "_name\">Название</label><br />"
                + "<input type=\"text\" id=\""+ id +"_name\"><br />"
                + "<label for=\"" + id + "_price\">Сумма</label><br />"
                + "<input type=\"number\" id=\""+ id +"_price\"><br />"
                + "<label for=\"" + id + "_date\">День</label><br />"
                + "<input type=\"date\" id=\""+ id +"_date\"><br />"
                + "<button class=\"delete_input\" value=\""+ id +"\">-</button>"
                + "</div>"
        });
        $("#" + id).on("click", ".delete_input", function () {
            $("#" + id).remove();
        });
    });
    $("#add_month_payments").click(function(){
        var id = "mp_" + make_id();
        month_payments.push(({id : id}));
        $(".month_payments").append(function(){
            return "<div class=\"sidebox\" id=\""+ id +"\">"
                + "<label for=\"" + id + "_name\">Название</label><br />"
                + "<input type=\"text\" id=\""+ id +"_name\"><br />"
                + "<label for=\"" + id + "_price\">Сумма</label><br />"
                + "<input type=\"number\" id=\""+ id +"_price\"><br />"
                + "<label for=\"" + id + "_date\">День</label><br />"
                + "<input type=\"number\" id=\""+ id +"_date\"><br />"
                + "<button class=\"delete_input\" value=\""+ id +"\">-</button>"
                + "</div>"
        });
        $("#" + id).on("click", ".delete_input", function () {
            $("#" + id).remove();
        });
    });
    $("#add_week_payments").click(function(){
        var id = "wp_" + make_id();
        week_payments.push(({id : id}));
        $(".week_payments").append(function(){
            return "<div class=\"sidebox\" id=\""+ id +"\">"
                + "<label for=\"" + id + "_name\">Название</label><br />"
                + "<input type=\"text\" id=\""+ id +"_name\"><br />"
                + "<label for=\"" + id + "_price\">Сумма</label><br />"
                + "<input type=\"number\" id=\""+ id +"_price\"><br />"
                + "<label for=\"" + id + "_date\">День</label><br />"
                + "<input type=\"number\" id=\""+ id +"_date\"><br />"
                + "<button class=\"delete_input\" value=\""+ id +"\">-</button>"
                + "</div>"
        });
        $("#" + id).on("click", ".delete_input", function () {
            $("#" + id).remove();
        });
    });
    $("#add_daily_payments").click(function(){
        var id = "dp_" + make_id();
        daily_payments.push(({id : id}));
        $(".daily_payments").append(function(){
            return "<div class=\"sidebox\" id=\""+ id +"\">"
                + "<label for=\"" + id + "_name\">Название</label><br />"
                + "<input type=\"text\" id=\""+ id +"_name\"><br />"
                + "<label for=\"" + id + "_price\">Сумма</label><br />"
                + "<input type=\"number\" id=\""+ id +"_price\"><br />"
                + "<button class=\"delete_input\" value=\""+ id +"\">-</button>"
                + "</div>"
        });
        $("#" + id).on("click", ".delete_input", function () {
            $("#" + id).remove();
        });
    });
    $("#add_extra_payments").click(function(){
        var id = "ep_" + make_id();
        extra_payments.push(({id : id}));
        $(".extra_payments").append(function(){
            return "<div class=\"sidebox\" id=\""+ id +"\">"
                + "<label for=\"" + id + "_name\">Название</label><br />"
                + "<input type=\"text\" id=\""+ id +"_name\"><br />"
                + "<label for=\"" + id + "_price\">Сумма</label><br />"
                + "<input type=\"number\" id=\""+ id +"_price\"><br />"
                + "<label for=\"" + id + "_date\">День</label><br />"
                + "<input type=\"date\" id=\""+ id +"_date\"><br />"
                + "<button class=\"delete_input\" value=\""+ id +"\">-</button>"
                + "</div>"
        });
        $("#" + id).on("click", ".delete_input", function () {
            $("#" + id).remove();
        });
    });
    $("#add_periodic_payments").click(function(){
        var id = "pp_" + make_id();
        periodic_payments.push(({id : id}));
        $(".periodic_payments").append(function(){
            return "<div class=\"sidebox\" id=\""+ id +"\">"
                + "<label for=\"" + id + "_name\">Название</label><br />"
                + "<input type=\"text\" id=\""+ id +"_name\"><br />"
                + "<label for=\"" + id + "_price\">Сумма</label><br />"
                + "<input type=\"number\" id=\""+ id +"_price\"><br />"
                + "<label for=\"" + id + "_period\">Период</label><br />"
                + "<input type=\"number\" id=\""+ id +"_period\"><br />"
                + "<label for=\"" + id + "_left\">Осталось до выплаты</label><br />"
                + "<input type=\"number\" id=\""+ id +"_left\"><br />"
                + "<button class=\"delete_input\" value=\""+ id +"\">-</button>"
                + "</div>"
        });
        $("#" + id).on("click", ".delete_input", function () {
            $("#" + id).remove();
        });
    });

    $("#reg").click(function () {
        $("#cash").val(118233);
        $("#bound_date").val("2017-10-20");
        $("#end_date").val("2018-06-04");
        $("#change").val(20);
        var id = "";
        id = "i_" + make_id();
        income.push(({id : id}));
        $(".income").append(function(){
            return "<div class=\"sidebox\" id=\""+ id +"\">"
                + "<label for=\"" + id + "_name\" >Название</label><br />"
                + "<input type=\"text\" id=\""+ id +"_name\" value=\"Аванс\"><br />"
                + "<label for=\"" + id + "_price\" >Сумма</label><br />"
                + "<input type=\"number\" id=\""+ id +"_price\" value=\"3521\"><br />"
                + "<label for=\"" + id + "_date\">День</label><br />"
                + "<input type=\"number\" id=\""+ id +"_date\" value=\"10\"><br />"
                + "<button class=\"delete_input\" value=\""+ id +"\">-</button>"
                + "</div>"
        });
        $("#" + id).on("click", ".delete_input", function () {
            $("#" + id).remove();
        });
        id = "i_" + make_id();
        income.push(({id : id}));
        $(".income").append(function(){
            return "<div class=\"sidebox\" id=\""+ id +"\">"
                + "<label for=\"" + id + "_name\" >Название</label><br />"
                + "<input type=\"text\" id=\""+ id +"_name\" value=\"Зарплата\"><br />"
                + "<label for=\"" + id + "_price\" >Сумма</label><br />"
                + "<input type=\"number\" id=\""+ id +"_price\" value=\"3874\"><br />"
                + "<label for=\"" + id + "_date\">День</label><br />"
                + "<input type=\"number\" id=\""+ id +"_date\" value=\"25\"><br />"
                + "<button class=\"delete_input\" value=\""+ id +"\">-</button>"
                + "</div>"
        });
        $("#" + id).on("click", ".delete_input", function () {
            $("#" + id).remove();
        });
        id = "i_" + make_id();
        income.push(({id : id}));
        $(".income").append(function(){
            return "<div class=\"sidebox\" id=\""+ id +"\">"
                + "<label for=\"" + id + "_name\" >Название</label><br />"
                + "<input type=\"text\" id=\""+ id +"_name\" value=\"Стипендия\"><br />"
                + "<label for=\"" + id + "_price\" >Сумма</label><br />"
                + "<input type=\"number\" id=\""+ id +"_price\" value=\"1725\"><br />"
                + "<label for=\"" + id + "_date\">День</label><br />"
                + "<input type=\"number\" id=\""+ id +"_date\" value=\"25\"><br />"
                + "<button class=\"delete_input\" value=\""+ id +"\">-</button>"
                + "</div>"
        });
        $("#" + id).on("click", ".delete_input", function () {
            $("#" + id).remove();
        });
        id = "mp_" + make_id();
        month_payments.push(({id : id}));
        $(".month_payments").append(function(){
            return "<div class=\"sidebox\" id=\""+ id +"\">"
                + "<label for=\"" + id + "_name\" >Название</label><br />"
                + "<input type=\"text\" id=\""+ id +"_name\" value=\"Квартира\"><br />"
                + "<label for=\"" + id + "_price\" >Сумма</label><br />"
                + "<input type=\"number\" id=\""+ id +"_price\" value=\"10500\"><br />"
                + "<label for=\"" + id + "_date\">День</label><br />"
                + "<input type=\"number\" id=\""+ id +"_date\" value=\"20\"><br />"
                + "<button class=\"delete_input\" value=\""+ id +"\">-</button>"
                + "</div>"
        });
        $("#" + id).on("click", ".delete_input", function () {
            $("#" + id).remove();
        });
        id = "mp_" + make_id();
        month_payments.push(({id : id}));
        $(".month_payments").append(function(){
            return "<div class=\"sidebox\" id=\""+ id +"\">"
                + "<label for=\"" + id + "_name\" >Название</label><br />"
                + "<input type=\"text\" id=\""+ id +"_name\" value=\"Интернет\"><br />"
                + "<label for=\"" + id + "_price\" >Сумма</label><br />"
                + "<input type=\"number\" id=\""+ id +"_price\" value=\"710\"><br />"
                + "<label for=\"" + id + "_date\">День</label><br />"
                + "<input type=\"number\" id=\""+ id +"_date\" value=\"7\"><br />"
                + "<button class=\"delete_input\" value=\""+ id +"\">-</button>"
                + "</div>"
        });
        $("#" + id).on("click", ".delete_input", function () {
            $("#" + id).remove();
        });
        id = "mp_" + make_id();
        month_payments.push(({id : id}));
        $(".month_payments").append(function(){
            return "<div class=\"sidebox\" id=\""+ id +"\">"
                + "<label for=\"" + id + "_name\" >Название</label><br />"
                + "<input type=\"text\" id=\""+ id +"_name\" value=\"ЯМ\"><br />"
                + "<label for=\"" + id + "_price\" >Сумма</label><br />"
                + "<input type=\"number\" id=\""+ id +"_price\" value=\"170\"><br />"
                + "<label for=\"" + id + "_date\">День</label><br />"
                + "<input type=\"number\" id=\""+ id +"_date\" value=\"23\"><br />"
                + "<button class=\"delete_input\" value=\""+ id +"\">-</button>"
                + "</div>"
        });
        $("#" + id).on("click", ".delete_input", function () {
            $("#" + id).remove();
        });
        id = "wp_" + make_id();
        week_payments.push(({id : id}));
        $(".week_payments").append(function(){
            return "<div class=\"sidebox\" id=\""+ id +"\">"
                + "<label for=\"" + id + "_name\">Название</label><br />"
                + "<input type=\"text\" id=\""+ id +"_name\" value=\"Еда на начало недели\"><br />"
                + "<label for=\"" + id + "_price\">Сумма</label><br />"
                + "<input type=\"number\" id=\""+ id +"_price\" value=\"600\"><br />"
                + "<label for=\"" + id + "_date\">День</label><br />"
                + "<input type=\"number\" id=\""+ id +"_date\" value=\"0\"><br />"
                + "<button class=\"delete_input\" value=\""+ id +"\">-</button>"
                + "</div>"
        });
        $("#" + id).on("click", ".delete_input", function () {
            $("#" + id).remove();
        });
        id = "wp_" + make_id();
        week_payments.push(({id : id}));
        $(".week_payments").append(function(){
            return "<div class=\"sidebox\" id=\""+ id +"\">"
                + "<label for=\"" + id + "_name\">Название</label><br />"
                + "<input type=\"text\" id=\""+ id +"_name\" value=\"Еда до выходных\"><br />"
                + "<label for=\"" + id + "_price\">Сумма</label><br />"
                + "<input type=\"number\" id=\""+ id +"_price\" value=\"600\"><br />"
                + "<label for=\"" + id + "_date\">День</label><br />"
                + "<input type=\"number\" id=\""+ id +"_date\" value=\"3\"><br />"
                + "<button class=\"delete_input\" value=\""+ id +"\">-</button>"
                + "</div>"
        });
        $("#" + id).on("click", ".delete_input", function () {
            $("#" + id).remove();
        });id = "wp_" + make_id();
        week_payments.push(({id : id}));
        $(".week_payments").append(function(){
            return "<div class=\"sidebox\" id=\""+ id +"\">"
                + "<label for=\"" + id + "_name\">Название</label><br />"
                + "<input type=\"text\" id=\""+ id +"_name\" value=\"Еда на выходные\"><br />"
                + "<label for=\"" + id + "_price\">Сумма</label><br />"
                + "<input type=\"number\" id=\""+ id +"_price\" value=\"600\"><br />"
                + "<label for=\"" + id + "_date\">День</label><br />"
                + "<input type=\"number\" id=\""+ id +"_date\" value=\"5\"><br />"
                + "<button class=\"delete_input\" value=\""+ id +"\">-</button>"
                + "</div>"
        });
        $("#" + id).on("click", ".delete_input", function () {
            $("#" + id).remove();
        });
        id = "dp_" + make_id();
        daily_payments.push(({id : id}));
        $(".daily_payments").append(function(){
            return "<div class=\"sidebox\" id=\""+ id +"\">"
                + "<label for=\"" + id + "_name\">Название</label><br />"
                + "<input type=\"text\" id=\""+ id +"_name\" value=\"Автобус\"><br />"
                + "<label for=\"" + id + "_price\">Сумма</label><br />"
                + "<input type=\"number\" id=\""+ id +"_price\" value=\"30\"><br />"
                + "<button class=\"delete_input\" value=\""+ id +"\">-</button>"
                + "</div>"
        });
        $("#" + id).on("click", ".delete_input", function () {
            $("#" + id).remove();
        });
        id = "pp_" + make_id();
        periodic_payments.push(({id : id}));
        $(".periodic_payments").append(function(){
            return "<div class=\"sidebox\" id=\""+ id +"\">"
                + "<label for=\"" + id + "_name\">Название</label><br />"
                + "<input type=\"text\" id=\""+ id +"_name\" value=\"Сим\"><br />"
                + "<label for=\"" + id + "_price\">Сумма</label><br />"
                + "<input type=\"number\" id=\""+ id +"_price\" value=\"1850\"><br />"
                + "<label for=\"" + id + "_period\">Период</label><br />"
                + "<input type=\"number\" id=\""+ id +"_period\" value=\"28\"><br />"
                + "<label for=\"" + id + "_left\">Осталось до выплаты</label><br />"
                + "<input type=\"number\" id=\""+ id +"_left\" value=\"21\"><br />"
                + "<button class=\"delete_input\" value=\""+ id +"\">-</button>"
                + "</div>"
        });
        $("#" + id).on("click", ".delete_input", function () {
            $("#" + id).remove();
        });
    });

    $("#calc").click(function () {
        var cash = parseInt($("#cash").val());
        var change = parseInt($("#change").val());
        var end_date = new Date("2018-06-04");
        var start_date = Date.parse($("#bound_date").val());

        window.income.forEach(function (t, i, ts) {
            var t_arr = [];
            t.name = $("#" + t.id + "_name").val();
            t_arr.push(parseInt($("#" + t.id + "_price").val()));
            t_arr.push($("#" + t.id + "_date").val());
            t.data = t_arr;
            t.part = 0;
        });
        window.free_income.forEach(function (t, i, ts) {
            var t_arr = [];
            t.name = $("#" + t.id + "_name").val();
            t_arr.push(parseInt($("#" + t.id + "_price").val()));
            t_arr.push($("#" + t.id + "_date").val());
            t.data = t_arr;
            t.part = 0;
        });
        window.month_payments.forEach(function (t, i, ts) {
            var t_arr = [];
            t.name = $("#" + t.id + "_name").val();
            t_arr.push(parseInt($("#" + t.id + "_price").val()));
            t_arr.push($("#" + t.id + "_date").val());
            t.data = t_arr;
            t.part = 0;
        });
        window.week_payments.forEach(function (t, i, ts) {
            var t_arr = [];
            t.name = $("#" + t.id + "_name").val();
            t_arr.push(parseInt($("#" + t.id + "_price").val()));
            t_arr.push($("#" + t.id + "_date").val());
            t.data = t_arr;
            t.part = 0;
        });
        window.daily_payments.forEach(function (t, i, ts) {
            var t_arr = [];
            t.name = $("#" + t.id + "_name").val();
            t_arr.push(parseInt($("#" + t.id + "_price").val()));
            t.data = t_arr;
            t.part = 0;
        });
        window.extra_payments.forEach(function (t, i, ts) {
            var t_arr = [];
            t.name = $("#" + t.id + "_name").val();
            t_arr.push(parseInt($("#" + t.id + "_price").val()));
            t_arr.push($("#" + t.id + "_date").val());
            t.data = t_arr;
            t.part = 0;
        });
        window.periodic_payments.forEach(function (t, number, ts) {
            var t_arr = [];
            t.name = $("#" + t.id + "_name").val();
            t_arr.push(parseInt($("#" + t.id + "_price").val()));
            t_arr.push($("#" + t.id + "_period").val());
            t_arr.push($("#" + t.id + "_left").val());
            t.data = t_arr;
            t.part = 0;
        });

        var labels = [];
        var temp_date = new Date(start_date);

        var table_dataset = [];

        var dataset_total = [];
        var dataset_in = [];
        var dataset_out = [];
        var cash_today = 0;

        while (end_date.getTime() >= temp_date.getTime()){
            var cash_in = 0;
            var cash_out = 0;

            income.forEach(function (t) {
                if(temp_date.getDate() == t.data[1]){
                    t.part +=  t.data[0];
                    cash += t.data[0];
                    cash_in += t.data[0];
                    table_dataset.push([temp_date.toLocaleDateString(), t.name, t.data[0], 0, cash, change]);
                }
            });
            free_income.forEach(function (t) {
                if(temp_date.getTime() == new Date(t.data[1]).getTime()){
                    t.part +=  t.data[0];
                    cash += t.data[0];
                    cash_in += t.data[0];
                    table_dataset.push([temp_date.toLocaleDateString(), t.name, t.data[0], 0, cash, change]);
                }
            });

            month_payments.forEach(function (t) {
                if(temp_date.getDate() == t.data[1]){
                    t.part +=  t.data[0];
                    cash -= t.data[0];
                    cash_out += t.data[0];
                    table_dataset.push([temp_date.toLocaleDateString(), t.name, 0, t.data[0], cash, change]);
                }
            });
            week_payments.forEach(function (t) {
                if(temp_date.getDay() == t.data[1]){
                    t.part +=  t.data[0];
                    cash -= t.data[0];
                    cash_out += t.data[0];
                    table_dataset.push([temp_date.toLocaleDateString(), t.name, 0, t.data[0], cash, change]);
                }
            });
            daily_payments.forEach(function (t) {
                if(change >= t.data[0]){
                    change -= t.data[0]
                    table_dataset.push([temp_date.toLocaleDateString(), t.name, 0, "0 (" + t.data[0] +")", cash, change]);
                }
                else
                {
                    t.part +=  200;
                    change += 200;
                    cash -= 200;
                    cash_out += 200;
                    change -=t.data[0];
                    table_dataset.push([temp_date.toLocaleDateString(), t.name, "0 (200)", "200 (" + t.data[0] +")", cash, change]);
                }
            });

            periodic_payments.forEach(function (t) {
                if(t.data[2] == 0){
                    t.part +=  t.data[0];
                    cash -= t.data[0];
                    cash_out += t.data[0];
                    t.data[2] = t.data[1];
                    table_dataset.push([temp_date.toLocaleDateString(), t.name, 0, t.data[0], cash, change]);
                }
                else
                {
                    t.data[2] -= 1;
                }
            });
            extra_payments.forEach(function (t) {
                if(temp_date.getTime() == new Date(t.data[1]).getTime()){
                    t.part +=  t.data[0];
                    cash -= t.data[0];
                    cash_out += t.data[0];
                }
            });

            if(cash_in != 0 || cash_out !=0){
                labels.push(temp_date.toLocaleDateString());
                dataset_total.push(cash);
                dataset_in.push(cash_in);
                dataset_out.push(cash_out);
            }

            var today = new Date();
            if(temp_date.getFullYear() == today.getFullYear() && temp_date.getMonth() == today.getMonth() && temp_date.getDate() == today.getDate()){
                cash_today = cash;
            }
            temp_date.setDate(temp_date.getDate() + 1);
        }
        var income_dataset = {
            labels: [],
            color: [],
            data: []
        };
        var payment_dataset = {
            labels: [],
            color: [],
            data: []
        };

        income.forEach(function (t) {
            income_dataset.labels.push(t.name);
            income_dataset.color.push(getRandomColor());
            income_dataset.data.push(t.part);
        });
        free_income.forEach(function (t) {
            income_dataset.labels.push(t.name);
            income_dataset.color.push(getRandomColor());
            income_dataset.data.push(t.part);
        });
        month_payments.forEach(function (t) {
            payment_dataset.labels.push(t.name);
            payment_dataset.color.push(getRandomColor());
            payment_dataset.data.push(t.part);
        });
        week_payments.forEach(function (t) {
            payment_dataset.labels.push(t.name);
            payment_dataset.color.push(getRandomColor());
            payment_dataset.data.push(t.part);
        });
        daily_payments.forEach(function (t) {
            payment_dataset.labels.push(t.name);
            payment_dataset.color.push(getRandomColor());
            payment_dataset.data.push(t.part);
        });
        periodic_payments.forEach(function (t) {
            payment_dataset.labels.push(t.name);
            payment_dataset.color.push(getRandomColor());
            payment_dataset.data.push(t.part);
        });
        extra_payments.forEach(function (t) {
            payment_dataset.labels.push(t.name);
            payment_dataset.color.push(getRandomColor());
            payment_dataset.data.push(t.part);
        });



        $("#short-resolt").html(
            "<h3>Сумма, которая должна быть сегодня:" + cash_today + "<br />" +
            "Итоговый остаток:" + cash + "<br />" +
            "Всего прибыли: " + income_dataset.data.reduce((a, b) => a + b, 0) + "<br />" +
            "Всего трат:" + payment_dataset.data.reduce((a, b) => a + b, 0) + "</h3><br />"
        );
        $(".charts").html("<canvas id=\"graphic\"></canvas>\n" +
            "<canvas id=\"total-chart\"></canvas>");

        var ctx = document.getElementById("graphic").getContext('2d');
        var graph = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Деньги',
                        yAxisID: 'A',
                        data: dataset_total,
                        borderWidth: 1,
                        borderColor: 'rgba(255,99,132,1)'
                    },
                    {
                        label: 'Прибыть',
                        yAxisID: 'B',
                        data: dataset_in,
                        borderWidth: 1,
                        borderColor: 'rgba(150,99,132,1)'
                    },
                    {
                        label: 'Траты',
                        yAxisID: 'B',
                        data: dataset_out,
                        borderWidth: 1,
                        borderColor: 'rgba(0,99,132,1)'
                    }]
            },
            options: {
                tooltips:{
                    mode: 'index'
                },
                scales: {
                    yAxes: [{
                        id: 'A',
                        type: 'linear',
                        position: 'left',
                    }, {
                        id: 'B',
                        type: 'linear',
                        position: 'right'
                    }]
                }
            }
        });

        var tctx = document.getElementById("total-chart").getContext('2d');
        var myChart = new Chart(tctx, {
            type: 'pie',
            data: {
                labels: income_dataset.labels.concat(payment_dataset.labels),
                datasets: [{
                        backgroundColor: payment_dataset.color.concat(payment_dataset.color),
                        data: income_dataset.data.concat(payment_dataset.color)
                    },
                    {
                        backgroundColor: payment_dataset.color.concat(payment_dataset.color),
                        data: income_dataset.color.concat(payment_dataset.data)
                    }]
            }
        });

        var table = "<table class=\"table-fill\" width=100%><thead><tr><th>Дата</th><th>Описание</th><th>Прибыль</th><th>Траты</th><th>Балланс</th><th>Наличка</th></tr></thead><tbody class=\"table-hover\">";

        table_dataset.forEach(function (t) {
           table += "<tr><td>" + t[0] + "</td><td>" + t[1] + "</td><td>" + t[2] + "</td><td>" + t[3] + "</td><td>" + t[4] + "</td><td>" + t[5] + "</td></tr>";
        });
        table += "</tbody><tfoot><td></td></td><td>ИТОГ</td><td>" + income_dataset.data.reduce((a, b) => a + b, 0) + "</td><td>" + payment_dataset.data.reduce((a, b) => a + b, 0) + "</td><td>" + cash + "</td><td>" + change+ "</td></tr></tfoot></table>";

        $(".resolt-table").html(table);
    });
});

function make_id() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}