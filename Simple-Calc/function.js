
jQuery.noConflict();
jQuery(document).ready(function ($) {
    display = $("#display>p");
    var value = 0;
    var counter = 0;
    function findOperator(class_related) {
        switch (class_related) {
            case "fa-divide":
                return "/";
                break;
            case "fa-plus":
                return "+";
                break;
            case "fa-minus":
                return "-";
                break;
            case "fa-xmark":
                return "*";
                break;
            case "fa-superscript":
                return "**";
                break;
            case "fa-square-root-variable":
                return "**0.5";
                break;
        }
    }
    $("td i").each((e) => {
        $("td")[e].addEventListener("click", function () {
            if ($("td i")[e].classList.contains("numeric")) {
                if (e <= 6) {
                    $("p,span").append(e - 3);
                } else if (e > 6 && e <= 10) {
                    $("p,span").append(e - 4);
                } else if (e > 10 && e < 16) {
                    $("p,span").append(e - 5);
                } else {
                    $("p,span").append(0);
                }
            } else if ($("td i")[e].classList.contains("operation")) {
                operator = findOperator($("td>i")[e].classList[1]);
                $("p").append(operator);
                $("span").append(operator);
                to_eval = $("p").text();
                console.log(to_eval);
            } else if ($("td i")[e].classList.contains("equalsto")) {
                $("p").text(eval($("p").text()));
            } else if ($("td i")[e].classList.contains("fa-delete-left")) {
                value = Number($("p").text());
                value = Math.floor(value / 10);
                $("p").text(`${value}`);
                if (value == 0) {
                    $("p,span").text("");
                }
            } else {
                $("p,span").text("");
            }
        });
    });
});
