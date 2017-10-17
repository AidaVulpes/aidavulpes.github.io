var income = [];
var free_income = [];
var month_payments = [];
var week_payments = [];
var daily_payments = [];

$(document).ready(function(){
    $("#add_income").click(function(){
        $(".income").html(function(i,origText){
            var id = "i_" + make_id();
            income.push(id);
            return origText + "<div class=\"sidebox\" id=\""+ id +"\">"
                + "<label for=\"" + id + "_name\">Название</label>"
                + "<input type=\"text\" id=\""+ id +"_name\">"
                + "<label for=\"" + id + "_price\">Сумма</label>"
                + "<input type=\"number\" id=\""+ id +"_price\">"
                + "<label for=\"" + id + "_date\">День</label>"
                + "<input type=\"number\" id=\""+ id +"_date\">"
                + "<button class=\"delete_income\" value=\""+ id +"\">-</button>"
                + "</div>"
        });
    });
    $(".delete_income").click(function () {
        $("#"+$(this).val()).remove();
    });
    $("#add_income").click(function(){
        $(".income").html(function(i,origText){
            var id = "i_" + make_id();
            income.push(id);
            return origText + "<div class=\"sidebox\">"
                + "<label for=\"" + id + "_name\">Название</label>"
                + "<input type=\"text\" id=\""+ id +"_name\">"
                + "<label for=\"" + id + "_price\">Сумма</label>"
                + "<input type=\"number\" id=\""+ id +"_price\">"
                + "<label for=\"" + id + "_date\">День</label>"
                + "<input type=\"number\" id=\""+ id +"_date\">"
                + "<button id=\"delete_income\" value=\""+ id +"\">-</button>"
                + "</div>"
        });
    });
    $("#add__free_income").click(function(){
        $(".add_free_income").html(function(i,origText){
            var id = "i_" + make_id();
            free_income.push(id);
            return origText + "<div class=\"sidebox\">"
                + "<label for=\"" + id + "_name\">Название</label>"
                + "<input type=\"text\" id=\""+ id +"_name\">"
                + "<label for=\"" + id + "_price\">Сумма</label>"
                + "<input type=\"number\" id=\""+ id +"_price\">"
                + "<label for=\"" + id + "_date\">День</label>"
                + "<input type=\"date\" id=\""+ id +"_date\">"
                + "</div>"
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