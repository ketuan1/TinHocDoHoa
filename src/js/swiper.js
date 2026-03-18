import Swiper from "swiper";
import { Pagination, EffectCreative, Keyboard, Mousewheel, Navigation, Thumbs, EffectFade, Autoplay, EffectCoverflow, Grid, FreeMode } from "swiper/modules";

/**
 * @param swiperInit
 */
export default function swiperInit() {

	$(".banner-page-home .swiper").each(function () {
		new Swiper(this, {
			modules: [Pagination, Autoplay, Navigation],
			slidesPerView: 1,
			speed: 1000,
			effect: "fade",
			autoplay: {
				delay: 3500,
			},
			loop: true,
			pagination: {
				el: $(this).closest('.banner-page-home').find('.swiper-pagination')[0],
				clickable: true,
			},
			navigation: {
				nextEl: $(this).closest(".banner-page-home").find(".btn-next")[0],
				prevEl: $(this).closest(".banner-page-home").find(".btn-prev")[0],
			},
		});
	});

	$(".home-cols-brand .swiper").each(function () {
		new Swiper(this, {
			modules: [Pagination, Autoplay, Navigation],
			slidesPerView: "auto",
			spaceBetween: 30,
			speed: 3500,
			allowTouchMove: false,
			autoplay: {
				delay: 0,
				disableOnInteraction: false,
				pauseOnMouseEnter: false,
			},
			loop: true,
			pagination: {
				el: $(this).closest('.home-cols-brand').find('.swiper-pagination')[0],
				clickable: true,
			},
			navigation: {
				nextEl: $(this).closest(".home-cols-brand").find(".btn-next")[0],
				prevEl: $(this).closest(".home-cols-brand").find(".btn-prev")[0],
			},
		});
	});

	$(".home-cols-3 .swiper").each(function () {
		new Swiper(this, {
			modules: [Pagination, Autoplay, Navigation],
			slidesPerView: 1,
			spaceBetween: 30,
			autoplay: {
				delay: 4000,
			},
			loop: true,
			pagination: {
				el: $(this).closest('.home-cols-3').find('.swiper-pagination')[0],
				clickable: true,
			},
			navigation: {
				nextEl: $(this).closest(".home-cols-3").find(".btn-next")[0],
				prevEl: $(this).closest(".home-cols-3").find(".btn-prev")[0],
			},
			breakpoints: {
				768: {
					slidesPerView: 2,
				},
				1290: {
					slidesPerView: 3,
				},
			},
		});
	});

	$(".home-cols-2 .swiper").each(function () {
		new Swiper(this, {
			modules: [Pagination, Autoplay, Navigation],
			slidesPerView: 1,
			spaceBetween: 30,
			autoplay: {
				delay: 4000,
			},
			loop: true,
			pagination: {
				el: $(this).closest('.home-cols-2').find('.swiper-pagination')[0],
				clickable: true,
			},
			navigation: {
				nextEl: $(this).closest(".home-cols-2").find(".btn-next")[0],
				prevEl: $(this).closest(".home-cols-2").find(".btn-prev")[0],
			},
			breakpoints: {
				768: {
					slidesPerView: 2,
				},
				1290: {
					slidesPerView: 2,
				},
			},
		});
	});

	$(".home-cols-4 .swiper").each(function () {
		new Swiper(this, {
			modules: [Pagination, Autoplay, Navigation],
			slidesPerView: 1,
			spaceBetween: 30,
			autoplay: {
				delay: 4000,
			},
			loop: true,
			pagination: {
				el: $(this).closest('.home-cols-4').find('.swiper-pagination')[0],
				clickable: true,
			},
			navigation: {
				nextEl: $(this).closest(".home-cols-4").find(".btn-next")[0],
				prevEl: $(this).closest(".home-cols-4").find(".btn-prev")[0],
			},
			breakpoints: {
				1200: {
					slidesPerView: 4,
				},
			},
		});
	});

	$(".home-cols-6 .swiper").each(function () {
		new Swiper(this, {
			modules: [Pagination, Autoplay, Navigation],
			slidesPerView: 2,
			spaceBetween: 20,
			//centeredSlides: true,
			//autoplay: {
			//	delay: 4000,
			//},
			loop: true,
			pagination: {
				el: $(this).closest('.home-cols-6').find('.swiper-pagination')[0],
				clickable: true,
			},
			navigation: {
				nextEl: $(this).closest(".home-cols-6").find(".btn-next")[0],
				prevEl: $(this).closest(".home-cols-6").find(".btn-prev")[0],
			},
			breakpoints: {
				768: {
					slidesPerView: 4,
				},
				1290: {
					slidesPerView: 5,
				},
			},
		});
	});

	//swiper grid
	$(".home-cols-project .swiper").each(function () {
		new Swiper(this, {
			modules: [Pagination, Autoplay, Navigation, Grid],
			slidesPerView: 2,
			spaceBetween: 20,
			autoplay: {
				delay: 4000,
			},
			loop: true,
			grid: {
			rows: 2, // 2 hàng
			fill: 'row', // mặc định, điền hàng trước
		},
			pagination: {
				el: $(this).closest('.home-cols-project').find('.swiper-pagination')[0],
				clickable: true,
			},
			navigation: {
				nextEl: $(this).closest(".home-cols-project").find(".btn-next")[0],
				prevEl: $(this).closest(".home-cols-project").find(".btn-prev")[0],
			},
			breakpoints: {
				//768: {
				//	slidesPerView: 3,
				//},
				1200: {
					slidesPerView: 4,
				},
			},
		});
	});
	//end


	// slider gallery
	var sliderThumbnail = new Swiper('.thumb-slider .swiper', {
		modules: [Autoplay, Navigation],
		loop: true,
		//autoplay: {
		//	delay: 4000,
		//},
		slidesPerView: 2,
		spaceBetween: 20,
		freeMode: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		breakpoints: {
			768: {
				slidesPerView: 3,
			},
			1290: {
				slidesPerView: 5,
				spaceBetween: 30,
			},
		},

	});
	var mainSlider = new Swiper('.main-slider .swiper', {
		modules: [Thumbs, Autoplay, Navigation],
		navigation: {
			nextEl: '.thumb-slider .btn-next',
			prevEl: '.thumb-slider .btn-prev',
		},
		//autoplay: {
		//	delay: 4000,
		//},
		loop: true,
		thumbs: {
			swiper: sliderThumbnail
		}
	});
	// end

	// swiper cards
	var swiperCards = new Swiper(".cols-home-thumb .swiper", {
			modules: [Pagination, Autoplay, Navigation],
			effect: "slide",
			slidesPerView: 1,
			//loop: true,
			//initialSlide: 0,
			allowTouchMove: true,
			speed: 800,
		});
	var swiperCardsText = new Swiper(".cols-home-content .swiper", {
			modules: [Pagination, Autoplay, Navigation],
			effect: "slide", 
			slidesPerView: 1,
			//loop: true,
			slideShadows: false,
			allowTouchMove: true,
			speed: 800,
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
				type: "fraction",
				renderFraction: function (currentClass, totalClass) {
					return '<span class="' + currentClass + '"></span><span class="' + totalClass + '"></span>';
				},
				formatFractionCurrent: function (number) {
					return number < 10 ? "0" + number + "/" : number + "/";
				},
				formatFractionTotal: function (number) {
					return number < 10 ? "0" + number : number;
				}
			},
			navigation: {
				nextEl: ".cols-home-content .btn-prev",
				prevEl: ".cols-home-content .btn-next",
			},
		});

		// Sync navigation between swipers
		swiperCards.on('slideChange', function () {
			swiperCardsText.slideTo(swiperCards.activeIndex);
		});

		swiperCardsText.on('slideChange', function () {
			swiperCards.slideTo(swiperCardsText.activeIndex);
		});
	//end

}
