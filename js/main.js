let income = [];
let free_income = [];
let month_payments = [];
let week_payments = [];
let daily_payments = [];
let extra_payments = [];
let periodic_payments = [];

function flush() {
    $("#cash").removeAttr('value');
    $("#bound_date").removeAttr('value');
    $("#end_date").removeAttr('value');
    $("#change").removeAttr('value');

    $(".income").empty();
    $(".free_income").empty();
    $(".month_payments").empty();
    $(".week_payments").empty();
    $(".daily_payments").empty();
    $(".periodic_payments").empty();
    $(".extra_payments").empty();
    $(".container").empty().html(
        '<div id="short-result"></div>' +
        '<canvas id="graphic"></canvas>' +
        '<div class="charts">' +
        '<canvas id="income-chart"></canvas>' +
        '<canvas id="payment-chart"></canvas>' +
        '</div>' +
        '<div class="result-table"></div>'
    );

    income = [];
    free_income = [];
    month_payments = [];
    week_payments = [];
    daily_payments = [];
    extra_payments = [];
    periodic_payments = [];
}

$(document).ready(function () {
    $("#add_income").click(function () {
        const id = "i_" + make_id();
        income.push({id: id});
        $(".income").append(function () {
            return "<div class=\"sidebox\" id=\"" + id + "\">"
                + "<label for=\"" + id + "_name\">Название</label><br />"
                + "<input type=\"text\" id=\"" + id + "_name\"><br />"
                + "<label for=\"" + id + "_price\">Сумма</label><br />"
                + "<input type=\"number\" id=\"" + id + "_price\"><br />"
                + "<label for=\"" + id + "_date\">День</label><br />"
                + "<input type=\"number\" id=\"" + id + "_date\"><br />"
                + "<div class=\"delete_input btn\" id=\"" + id + "_del\">-</div>"
                + "</div>"
        });
        $(document.body).on("click", "#" + id + "_del", function () {
            $("#" + id).remove();
        });
    });
    $("#add_free_income").click(function () {
        const id = "fi_" + make_id();
        free_income.push(({id: id}));
        $(".free_income").append(function () {
            return "<div class=\"sidebox\" id=\"" + id + "\">"
                + "<label for=\"" + id + "_name\">Название</label><br />"
                + "<input type=\"text\" id=\"" + id + "_name\"><br />"
                + "<label for=\"" + id + "_price\">Сумма</label><br />"
                + "<input type=\"number\" id=\"" + id + "_price\"><br />"
                + "<label for=\"" + id + "_date\">День</label><br />"
                + "<input type=\"date\" id=\"" + id + "_date\"><br />"
                + "<div class= value=\"" + id + "\">-</div>"
                + "</div>"
        });
        $(document.body).on("click", "#" + id + "_del", function () {
            $("#" + id).remove();
        });
    });
    $("#add_month_payments").click(function () {
        const id = "mp_" + make_id();
        month_payments.push(({id: id}));
        $(".month_payments").append(function () {
            return "<div class=\"sidebox\" id=\"" + id + "\">"
                + "<label for=\"" + id + "_name\">Название</label><br />"
                + "<input type=\"text\" id=\"" + id + "_name\"><br />"
                + "<label for=\"" + id + "_price\">Сумма</label><br />"
                + "<input type=\"number\" id=\"" + id + "_price\"><br />"
                + "<label for=\"" + id + "_date\">День</label><br />"
                + "<input type=\"number\" id=\"" + id + "_date\"><br />"
                + "<div class=\"delete_input btn\" id=\"" + id + "_del\">-</div>"
                + "</div>"
        });
        $(document.body).on("click", "#" + id + "_del", function () {
            $("#" + id).remove();
        });
    });
    $("#add_week_payments").click(function () {
        const id = "wp_" + make_id();
        week_payments.push(({id: id}));
        $(".week_payments").append(function () {
            return "<div class=\"sidebox\" id=\"" + id + "\">"
                + "<label for=\"" + id + "_name\">Название</label><br />"
                + "<input type=\"text\" id=\"" + id + "_name\"><br />"
                + "<label for=\"" + id + "_price\">Сумма</label><br />"
                + "<input type=\"number\" id=\"" + id + "_price\"><br />"
                + "<label for=\"" + id + "_date\">День</label><br />"
                + "<input type=\"number\" id=\"" + id + "_date\"><br />"
                + "<div class=\"delete_input btn\" id=\"" + id + "_del\">-</div>"
                + "</div>"
        });
        $(document.body).on("click", "#" + id + "_del", function () {
            $("#" + id).remove();
        });
    });
    $("#add_daily_payments").click(function () {
        const id = "dp_" + make_id();
        daily_payments.push(({id: id}));
        $(".daily_payments").append(function () {
            return "<div class=\"sidebox\" id=\"" + id + "\">"
                + "<label for=\"" + id + "_name\">Название</label><br />"
                + "<input type=\"text\" id=\"" + id + "_name\"><br />"
                + "<label for=\"" + id + "_price\">Сумма</label><br />"
                + "<input type=\"number\" id=\"" + id + "_price\"><br />"
                + "<div class=\"delete_input btn\" id=\"" + id + "_del\">-</div>"
                + "</div>"
        });
        $(document.body).on("click", "#" + id + "_del", function () {
            $("#" + id).remove();
        });
    });
    $("#add_extra_payments").click(function () {
        const id = "ep_" + make_id();
        extra_payments.push(({id: id}));
        $(".extra_payments").append(function () {
            return "<div class=\"sidebox\" id=\"" + id + "\">"
                + "<label for=\"" + id + "_name\">Название</label><br />"
                + "<input type=\"text\" id=\"" + id + "_name\"><br />"
                + "<label for=\"" + id + "_price\">Сумма</label><br />"
                + "<input type=\"number\" id=\"" + id + "_price\"><br />"
                + "<label for=\"" + id + "_date\">День</label><br />"
                + "<input type=\"date\" id=\"" + id + "_date\"><br />"
                + "<div class=\"delete_input btn\" id=\"" + id + "_del\">-</div>"
                + "</div>"
        });
        $(document.body).on("click", "#" + id + "_del", function () {
            $("#" + id).remove();
        });
    });
    $("#add_periodic_payments").click(function () {
        const id = "pp_" + make_id();
        periodic_payments.push(({id: id}));
        $(".periodic_payments").append(function () {
            return "<div class=\"sidebox\" id=\"" + id + "\">"
                + "<label for=\"" + id + "_name\">Название</label><br />"
                + "<input type=\"text\" id=\"" + id + "_name\"><br />"
                + "<label for=\"" + id + "_price\">Сумма</label><br />"
                + "<input type=\"number\" id=\"" + id + "_price\"><br />"
                + "<label for=\"" + id + "_period\">Период</label><br />"
                + "<input type=\"number\" id=\"" + id + "_period\"><br />"
                + "<label for=\"" + id + "_left\">Осталось до выплаты</label><br />"
                + "<input type=\"number\" id=\"" + id + "_left\"><br />"
                + "<div class=\"delete_input btn\" id=\"" + id + "_del\">-</div>"
                + "</div>"
        });
        $(document.body).on("click", "#" + id + "_del", function () {
            $("#" + id).remove();
        });
    });

    $("#flush").click(function () {
        flush();
    });

    $("#reg").click(function () {
        flush();

        $("#cash").val(204042);
        $("#bound_date").val("2018-05-16");
        $("#end_date").val("2018-11-07");
        $("#change").val(200);
        let id = "i_" + make_id();
        income.push(({id: id}));

        let income_obj = $(".income");
        let mp_obj = $(".month_payments");
        let wp_obj = $(".week_payments");

        income_obj.append(function () {
            return "<div class=\"sidebox\" id=\"" + id + "\">"
                + "<label for=\"" + id + "_name\" >Название</label><br />"
                + "<input type=\"text\" id=\"" + id + "_name\" value=\"Аванс\"><br />"
                + "<label for=\"" + id + "_price\" >Сумма</label><br />"
                + "<input type=\"number\" id=\"" + id + "_price\" value=\"8090\"><br />"
                + "<label for=\"" + id + "_date\">День</label><br />"
                + "<input type=\"number\" id=\"" + id + "_date\" value=\"10\"><br />"
                + "<div class=\"delete_input btn\" id=\"" + id + "_del\">-</div>"
                + "</div>"
        });
        const i1_id = id;
        $(document.body).on("click", "#" + id + "_del", function () {
            $("#" + i1_id).remove();
        });
        id = "i_" + make_id();
        income.push(({id: id}));
        income_obj.append(function () {
            return "<div class=\"sidebox\" id=\"" + id + "\">"
                + "<label for=\"" + id + "_name\" >Название</label><br />"
                + "<input type=\"text\" id=\"" + id + "_name\" value=\"Зарплата\"><br />"
                + "<label for=\"" + id + "_price\" >Сумма</label><br />"
                + "<input type=\"number\" id=\"" + id + "_price\" value=\"8090\"><br />"
                + "<label for=\"" + id + "_date\">День</label><br />"
                + "<input type=\"number\" id=\"" + id + "_date\" value=\"25\"><br />"
                + "<div class=\"delete_input btn\" id=\"" + id + "_del\">-</div>"
                + "</div>"
        });
        const i2_id = id;
        $(document.body).on("click", "#" + id + "_del", function () {
            $("#" + i2_id).remove();
        });
        id = "mp_" + make_id();
        month_payments.push(({id: id}));
        mp_obj.append(function () {
            return "<div class=\"sidebox\" id=\"" + id + "\">"
                + "<label for=\"" + id + "_name\" >Название</label><br />"
                + "<input type=\"text\" id=\"" + id + "_name\" value=\"Квартира\"><br />"
                + "<label for=\"" + id + "_price\" >Сумма</label><br />"
                + "<input type=\"number\" id=\"" + id + "_price\" value=\"10500\"><br />"
                + "<label for=\"" + id + "_date\">День</label><br />"
                + "<input type=\"number\" id=\"" + id + "_date\" value=\"20\"><br />"
                + "<div class=\"delete_input btn\" id=\"" + id + "_del\">-</div>"
                + "</div>"
        });
        const m1_id = id;
        $(document.body).on("click", "#" + id + "_del", function () {
            $("#" + m1_id).remove();
        });
        id = "mp_" + make_id();
        month_payments.push(({id: id}));
        mp_obj.append(function () {
            return "<div class=\"sidebox\" id=\"" + id + "\">"
                + "<label for=\"" + id + "_name\" >Название</label><br />"
                + "<input type=\"text\" id=\"" + id + "_name\" value=\"Интернет\"><br />"
                + "<label for=\"" + id + "_price\" >Сумма</label><br />"
                + "<input type=\"number\" id=\"" + id + "_price\" value=\"710\"><br />"
                + "<label for=\"" + id + "_date\">День</label><br />"
                + "<input type=\"number\" id=\"" + id + "_date\" value=\"7\"><br />"
                + "<div class=\"delete_input btn\" id=\"" + id + "_del\">-</div>"
                + "</div>"
        });
        const m2_id = id;
        $(document.body).on("click", "#" + id + "_del", function () {
            $("#" + m2_id).remove();
        });
        id = "mp_" + make_id();
        month_payments.push(({id: id}));
        mp_obj.append(function () {
            return "<div class=\"sidebox\" id=\"" + id + "\">"
                + "<label for=\"" + id + "_name\" >Название</label><br />"
                + "<input type=\"text\" id=\"" + id + "_name\" value=\"ЯМ\"><br />"
                + "<label for=\"" + id + "_price\" >Сумма</label><br />"
                + "<input type=\"number\" id=\"" + id + "_price\" value=\"100\"><br />"
                + "<label for=\"" + id + "_date\">День</label><br />"
                + "<input type=\"number\" id=\"" + id + "_date\" value=\"23\"><br />"
                + "<div class=\"delete_input btn\" id=\"" + id + "_del\">-</div>"
                + "</div>"
        });
        const m3_id = id;
        $(document.body).on("click", "#" + id + "_del", function () {
            $("#" + m3_id).remove();
        });
        id = "mp_" + make_id();
        month_payments.push(({id: id}));
        mp_obj.append(function () {
            return "<div class=\"sidebox\" id=\"" + id + "\">"
                + "<label for=\"" + id + "_name\" >Название</label><br />"
                + "<input type=\"text\" id=\"" + id + "_name\" value=\"Сервер\"><br />"
                + "<label for=\"" + id + "_price\" >Сумма</label><br />"
                + "<input type=\"number\" id=\"" + id + "_price\" value=\"200\"><br />"
                + "<label for=\"" + id + "_date\">День</label><br />"
                + "<input type=\"number\" id=\"" + id + "_date\" value=\"21\"><br />"
                + "<div class=\"delete_input btn\" id=\"" + id + "_del\">-</div>"
                + "</div>"
        });
        const m4_id = id;
        $(document.body).on("click", "#" + id + "_del", function () {
            $("#" + m4_id).remove();
        });
        id = "wp_" + make_id();
        week_payments.push(({id: id}));
        wp_obj.append(function () {
            return "<div class=\"sidebox\" id=\"" + id + "\">"
                + "<label for=\"" + id + "_name\">Название</label><br />"
                + "<input type=\"text\" id=\"" + id + "_name\" value=\"Еда на начало недели\"><br />"
                + "<label for=\"" + id + "_price\">Сумма</label><br />"
                + "<input type=\"number\" id=\"" + id + "_price\" value=\"600\"><br />"
                + "<label for=\"" + id + "_date\">День</label><br />"
                + "<input type=\"number\" id=\"" + id + "_date\" value=\"0\"><br />"
                + "<div class=\"delete_input btn\" id=\"" + id + "_del\">-</div>"
                + "</div>"
        });
        const w1_id = id;
        $(document.body).on("click", "#" + id + "_del", function () {
            $("#" + w1_id).remove();
        });
        id = "wp_" + make_id();
        week_payments.push(({id: id}));
        wp_obj.append(function () {
            return "<div class=\"sidebox\" id=\"" + id + "\">"
                + "<label for=\"" + id + "_name\">Название</label><br />"
                + "<input type=\"text\" id=\"" + id + "_name\" value=\"Еда до выходных\"><br />"
                + "<label for=\"" + id + "_price\">Сумма</label><br />"
                + "<input type=\"number\" id=\"" + id + "_price\" value=\"600\"><br />"
                + "<label for=\"" + id + "_date\">День</label><br />"
                + "<input type=\"number\" id=\"" + id + "_date\" value=\"3\"><br />"
                + "<div class=\"delete_input btn\" id=\"" + id + "_del\">-</div>"
                + "</div>"
        });
        const w2_id = id;
        $(document.body).on("click", "#" + id + "_del", function () {
            $("#" + w2_id).remove();
        });
        id = "wp_" + make_id();
        week_payments.push(({id: id}));
        wp_obj.append(function () {
            return "<div class=\"sidebox\" id=\"" + id + "\">"
                + "<label for=\"" + id + "_name\">Название</label><br />"
                + "<input type=\"text\" id=\"" + id + "_name\" value=\"Еда на выходные\"><br />"
                + "<label for=\"" + id + "_price\">Сумма</label><br />"
                + "<input type=\"number\" id=\"" + id + "_price\" value=\"600\"><br />"
                + "<label for=\"" + id + "_date\">День</label><br />"
                + "<input type=\"number\" id=\"" + id + "_date\" value=\"5\"><br />"
                + "<div class=\"delete_input btn\" id=\"" + id + "_del\">-</div>"
                + "</div>"
        });
        const w3_id = id;
        $(document.body).on("click", "#" + id + "_del", function () {
            $("#" + w3_id).remove();
        });
        id = "dp_" + make_id();
        daily_payments.push(({id: id}));
        $(".daily_payments").append(function () {
            return "<div class=\"sidebox\" id=\"" + id + "\">"
                + "<label for=\"" + id + "_name\">Название</label><br />"
                + "<input type=\"text\" id=\"" + id + "_name\" value=\"Автобус\"><br />"
                + "<label for=\"" + id + "_price\">Сумма</label><br />"
                + "<input type=\"number\" id=\"" + id + "_price\" value=\"30\"><br />"
                + "<div class=\"delete_input btn\" id=\"" + id + "_del\">-</div>"
                + "</div>"
        });
        const d_id = id;
        $(document.body).on("click", "#" + id + "_del", function () {
            $("#" + d_id).remove();
        });
        id = "pp_" + make_id();
        periodic_payments.push(({id: id}));
        $(".periodic_payments").append(function () {
            return "<div class=\"sidebox\" id=\"" + id + "\">"
                + "<label for=\"" + id + "_name\">Название</label><br />"
                + "<input type=\"text\" id=\"" + id + "_name\" value=\"Сим\"><br />"
                + "<label for=\"" + id + "_price\">Сумма</label><br />"
                + "<input type=\"number\" id=\"" + id + "_price\" value=\"1600\"><br />"
                + "<label for=\"" + id + "_period\">Период</label><br />"
                + "<input type=\"number\" id=\"" + id + "_period\" value=\"28\"><br />"
                + "<label for=\"" + id + "_left\">Осталось до выплаты</label><br />"
                + "<input type=\"number\" id=\"" + id + "_left\" value=\"21\"><br />"
                + "<div class=\"delete_input btn\" id=\"" + id + "_del\">-</div>"
                + "</div>"
        });
        $(document.body).on("click", "#" + id + "_del", function () {
            $("#" + id).remove();
        });
    });

    $("#calc").click(function () {
        let cash = parseInt($("#cash").val());
        let change = parseInt($("#change").val());
        const end_date = new Date($("#end_date").val());
        const start_date = new Date($("#bound_date").val());

        income.forEach(function (t) {
            const t_arr = [];
            t.name = $("#" + t.id + "_name").val();
            t_arr.push(parseInt($("#" + t.id + "_price").val()));
            t_arr.push($("#" + t.id + "_date").val());
            t.data = t_arr;
            t.part = 0;
        });
        free_income.forEach(function (t) {
            const t_arr = [];
            t.name = $("#" + t.id + "_name").val();
            t_arr.push(parseInt($("#" + t.id + "_price").val()));
            t_arr.push($("#" + t.id + "_date").val());
            t.data = t_arr;
            t.part = 0;
        });
        month_payments.forEach(function (t) {
            const t_arr = [];
            t.name = $("#" + t.id + "_name").val();
            t_arr.push(parseInt($("#" + t.id + "_price").val()));
            t_arr.push($("#" + t.id + "_date").val());
            t.data = t_arr;
            t.part = 0;
        });
        week_payments.forEach(function (t) {
            const t_arr = [];
            t.name = $("#" + t.id + "_name").val();
            t_arr.push(parseInt($("#" + t.id + "_price").val()));
            t_arr.push($("#" + t.id + "_date").val());
            t.data = t_arr;
            t.part = 0;
        });
        daily_payments.forEach(function (t) {
            const t_arr = [];
            t.name = $("#" + t.id + "_name").val();
            t_arr.push(parseInt($("#" + t.id + "_price").val()));
            t.data = t_arr;
            t.part = 0;
        });
        extra_payments.forEach(function (t) {
            const t_arr = [];
            t.name = $("#" + t.id + "_name").val();
            t_arr.push(parseInt($("#" + t.id + "_price").val()));
            t_arr.push($("#" + t.id + "_date").val());
            t.data = t_arr;
            t.part = 0;
        });
        periodic_payments.forEach(function (t) {
            const t_arr = [];
            t.name = $("#" + t.id + "_name").val();
            t_arr.push(parseInt($("#" + t.id + "_price").val()));
            t_arr.push($("#" + t.id + "_period").val());
            t_arr.push($("#" + t.id + "_left").val());
            t.data = t_arr;
            t.part = 0;
        });

        const labels = [];
        const temp_date = new Date(start_date);

        const table_dataset = [];

        const dataset_total = [];
        const dataset_in = [];
        const dataset_out = [];
        let cash_today = 0;

        while (end_date.getTime() >= temp_date.getTime()) {
            let cash_in = 0;
            let cash_out = 0;

            income.forEach(function (t) {
                if (temp_date.getDate() === new Date(t.data[1]).getDate()) {
                    t.part += t.data[0];
                    cash += t.data[0];
                    cash_in += t.data[0];
                    table_dataset.push([temp_date.toLocaleDateString(), t.name, t.data[0], 0, cash, change]);
                }
            });
            free_income.forEach(function (t) {
                if (temp_date.getDate() === new Date(t.data[1]).getDate()) {
                    t.part += t.data[0];
                    cash += t.data[0];
                    cash_in += t.data[0];
                    table_dataset.push([temp_date.toLocaleDateString(), t.name, t.data[0], 0, cash, change]);
                }
            });

            month_payments.forEach(function (t) {
                if (temp_date.getDate() === new Date(t.data[1]).getDate()) {
                    t.part += t.data[0];
                    cash -= t.data[0];
                    cash_out += t.data[0];
                    table_dataset.push([temp_date.toLocaleDateString(), t.name, 0, t.data[0], cash, change]);
                }
            });
            week_payments.forEach(function (t) {
                if (temp_date.getDay() === new Date(t.data[1]).getDay()) {
                    t.part += t.data[0];
                    cash -= t.data[0];
                    cash_out += t.data[0];
                    table_dataset.push([temp_date.toLocaleDateString(), t.name, 0, t.data[0], cash, change]);
                }
            });
            daily_payments.forEach(function (t) {
                if (change >= t.data[0]) {
                    change -= t.data[0];
                    table_dataset.push([temp_date.toLocaleDateString(), t.name, 0, "0 (" + t.data[0] + ")", cash, change]);
                }
                else {
                    t.part += 200;
                    change += 200;
                    cash -= 200;
                    cash_out += 200;
                    change -= t.data[0];
                    table_dataset.push([temp_date.toLocaleDateString(), t.name, "0 (200)", "200 (" + t.data[0] + ")", cash, change]);
                }
            });

            periodic_payments.forEach(function (t) {
                if (t.data[2] === 0) {
                    t.part += t.data[0];
                    cash -= t.data[0];
                    cash_out += t.data[0];
                    t.data[2] = t.data[1];
                    table_dataset.push([temp_date.toLocaleDateString(), t.name, 0, t.data[0], cash, change]);
                }
                else {
                    t.data[2] -= 1;
                }
            });
            extra_payments.forEach(function (t) {
                if (temp_date.getDate() === new Date(t.data[1]).getDate()) {
                    t.part += t.data[0];
                    cash -= t.data[0];
                    cash_out += t.data[0];
                }
            });

            if (cash_in !== 0 || cash_out !== 0) {
                labels.push(temp_date.toLocaleDateString());
                dataset_total.push(cash);
                dataset_in.push(cash_in);
                dataset_out.push(cash_out);
            }

            const today = new Date();
            if (temp_date.getFullYear() === today.getFullYear() && temp_date.getMonth() === today.getMonth() && temp_date.getDate() === today.getDate()) {
                cash_today = cash;
            }
            temp_date.setDate(temp_date.getDate() + 1);
        }
        const income_dataset = {
            labels: [],
            color: [],
            data: []
        };
        const payment_dataset = {
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


        $("#short-result").html(
            "<h3>Сумма, которая должна быть сегодня:" + cash_today + "<br />" +
            "Итоговый остаток:" + cash + "<br />" +
            "Всего прибыли: " + income_dataset.data.reduce((a, b) => a + b, 0) + "<br />" +
            "Всего трат:" + payment_dataset.data.reduce((a, b) => a + b, 0) + "</h3><br />"
        );
        $(".charts").html("<canvas id=\"graphic\"></canvas>\n" +
            "<canvas id=\"total-chart\"></canvas>");

        const ctx = document.getElementById("graphic").getContext('2d');
        // noinspection Annotator
        new Chart(ctx, {
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
                tooltips: {
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

        const tctx = document.getElementById("total-chart").getContext('2d');
        new Chart(tctx, {
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

        let table = "<table class=\"table-fill\" width=100%><thead><tr><th>Дата</th><th>Описание</th><th>Прибыль</th><th>Траты</th><th>Балланс</th><th>Наличка</th></tr></thead><tbody class=\"table-hover\">";

        table_dataset.forEach(function (t) {
            table += "<tr><td>" + t[0] + "</td><td>" + t[1] + "</td><td>" + t[2] + "</td><td>" + t[3] + "</td><td>" + t[4] + "</td><td>" + t[5] + "</td></tr>";
        });
        table += "</tbody><tfoot><td></td></td><td>ИТОГ</td><td>" + income_dataset.data.reduce((a, b) => a + b, 0) + "</td><td>" + payment_dataset.data.reduce((a, b) => a + b, 0) + "</td><td>" + cash + "</td><td>" + change + "</td></tr></tfoot></table>";

        $(".resolt-table").html(table);
    });
});

function make_id() {
    let text = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
