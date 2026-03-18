import { headerSearch } from "../../plugins/ComponentsUi/HeaderSearch/HeaderSearch";
import { detectCloseElement } from "./helper";
/*==================== Header ====================*/
/**
 * @param header
 */
const vw = $(window).width();
export const header = {
	scrollActive: function () {
		let height = $("header").height();
		if ($(window).scrollTop() > height) {
			$("header").addClass("active");
		} else {
			$("header").removeClass("active");
		}
	},
	mobile: function () {
		$(".header-hambuger").on("click", function () {
			$('body').toggleClass('openMenuMobile')
		});
	},
	init: function () {
		headerSearch();
		header.scrollActive();
		header.mobile();
	},
};

// custom sub-menu for wp
jQuery(document).ready(function ($) {
	// Chỉ chạy dưới mobile
	function isMobile() {
		return window.innerWidth < 1200; // theo breakpoint xl
	}

	// Thêm wrap-toggle + icon
	$('.header-menu li.menu-item-has-children').each(function () {
		if (!$(this).find('.wrap-toggle').length) {
			const $link = $(this).children('a');
			const $icon = $('<i class="fa-sharp fa-light fa-chevron-down"></i>');
			const $wrapToggle = $('<div class="wrap-toggle"></div>');
			$wrapToggle.append($link.clone()).append($icon);
			$link.replaceWith($wrapToggle);
		}
	});

	// Toggle khi click icon
	$(document).on('click', '.header-menu li.menu-item-has-children .wrap-toggle i', function (e) {
		e.preventDefault();
		e.stopPropagation();

		const $parentLi = $(this).closest('li');
		const $megaMenu = $parentLi.children('.mega-menu');

		if (isMobile()) {
			// Đóng các mega-menu khác
			$('.header-menu .mega-menu').not($megaMenu).slideUp().removeClass('active');
			$('.wrap-toggle i').not($(this)).removeClass('open');

			// Toggle cái hiện tại
			$megaMenu.slideToggle().toggleClass('active');
			$(this).toggleClass('open');
		}
	});

	// Click ngoài thì đóng menu
	$(document).on('click', function (e) {
		if (!$(e.target).closest('.header-menu').length && isMobile()) {
			$('.header-menu .mega-menu').slideUp().removeClass('active');
			$('.wrap-toggle i').removeClass('open');
		}
	});
});



document.addEventListener(
	"scroll",
	function (e) {
		header.scrollActive();
	},
	true
);
