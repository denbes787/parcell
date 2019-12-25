$(function () {
  detailList();
  tooltips();
  selectControl();
  initMaterialUI();
  tables();
});

function tables() {
  var tables = document.querySelectorAll(".table");

  tables.forEach(function (table) {
    var tableSelect = table.querySelector(".table-select");
    var checkBoxes = table.querySelectorAll("table tr input");
    var length = 0;

    if (tableSelect) {
      var buttons = tableSelect.querySelectorAll("button");
      tableSelect.querySelector("input[type=checkbox]").addEventListener("click", function (e) {
        checkBoxes.forEach(function (checkbox) {
          if (e.target.checked != checkbox.checked) checkbox.click();
          setButtons(buttons);
        });
      });

      table.querySelectorAll("input[type=checkbox]").forEach(function (input) {
        input.addEventListener("click", function (e) {
          setButtons(buttons);
        })
      })
    }

    function setButtons(buttons) {
      table.querySelectorAll("input[type=checkbox]").forEach(function (input) {
        if (input.checked) length++;
      });
      buttons.forEach(function (button) {
        if (length > 0) {
          button.removeAttribute("disabled");
        }
        else {
          button.setAttribute("disabled", true);
        }
      })
      length = 0;
    }
  });
}

function initMaterialUI() {
  if (typeof $('[data-materialize]').materialUI() === "function") {
    $('[data-materialize]').materialUI();
    $(".element-style-wrap").data('rippleColor', '#0e827a').rippleIt();
  }

}

function selectControl() {
  var selects = document.querySelectorAll("[select-controll]");

  selects.forEach(function (elm) {
    elm.addEventListener("change", function (e) {
      var group = document.querySelectorAll("[select-group=" + elm.getAttribute("select-controll") + "]");
      group.forEach(function (itm) {
        $(itm).collapse('hide');
      });
      setTimeout(function () {
        $("#" + e.target.value).collapse("show");
      }, 300);

    });
  });
}

function tooltips() {
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
}

function detailList() {
  var row = $(".details-list-container").clone().html();
  var add = $(".info-input-more");
  var container = $(".details-list-container");

  $('.custom-picker').selectpicker();

  add.on("click", function () {
    $(row).appendTo(container);
    $('.custom-picker').selectpicker();
    $('.details-list-row .info-input-more.remove').on("click", function () {
      $(this).closest(".details-list-row").remove();
    })
  })
}

