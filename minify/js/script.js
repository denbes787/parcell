function touchScroll(){(new TouchScroll).init({id:"carriers-viewer",draggable:!0,wait:!1})}function detailList(){var o=$(".details-list-container").clone().html(),i=$(".info-input-more"),t=$(".details-list-container");$(".custom-picker").selectpicker(),i.on("click",function(){$(o).appendTo(t),$(".custom-picker").selectpicker(),$(".details-list-row .info-input-more.remove").on("click",function(){$(this).closest(".details-list-row").remove()})})}function events(){var o=$(".more-info"),i=$(".view-drop-btn"),t=$(".options-list"),c=$(".choose-collection"),e=$(".carier-window-more");$(o).on("click",function(){modalOpen("#modal-hermes")}),$(e).on("click",function(){modalOpen("#modal-hermes")}),$(i).on("click",function(){modalOpen("#modal-map")}),$("[data-action=shipment]").on("click",function(o){$(t).slideToggle()}),$(".map-carriers-block").on("click",function(o){$(".map-carriers-block").removeClass("active"),$(this).toggleClass("active")}),$("[data-action=collection-date]").on("click",function(o){$(o.target).hasClass("btn-close")||$(c).toggle()}),$(".close-choose-btn").on("click",function(o){$(".choose-collection").toggle()}),$("[data-action=postal]").on("input",function(){3<$(this).val().length?$("[data-action=view-drop]").addClass("active"):$("[data-action=view-drop]").removeClass("active")})}window.onload=function(){events(),detailList(),touchScroll()};