var close=$(".close-btn");function modalOpen(o){$(o).addClass("active")}function modalClose(o){$(o).removeClass("active")}$(close).on("click",function(){modalClose($(this).closest(".modal-custom"))}),$(".modal").click(function(){var o=$(".modal-custom-content");$(event.target).closest(o).length||modalClose($(this).closest(".modal-custom"))});