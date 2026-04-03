import AOS from "aos";
import lozad from "lozad";
import { setBackgroundElement, detectCloseElement, buttonToTop, clickScrollToDiv, appendCaptchaASP } from "./helper";
import { header } from "./header";
import swiperInit from "./swiper";
$(document).ready(function () {
	setBackgroundElement();
	header.init();
	swiperInit();
	FAQ();
	buttonToTop();
	CounterUps();
	ListNavTab();
	AccordionImg();
	AOS.init({
		offset: 100,
	});
});

/*==================== Aos Init ====================*/


/*==================== FAQ =================*/
function FAQ() {
	jQuery(document).ready(function ($) {

		$('.wrap-faq .content').hide();

		$('.wrap-faq .wrap-heading').on('click', function () {

			var parent = $(this).closest('.wrap-faq');
			var content = parent.find('.content');

			if (parent.hasClass('active')) {

				content.slideUp(300);
				parent.removeClass('active');
				parent.find('i').removeClass('fa-minus').addClass('fa-plus');

			} else {

				$('.wrap-faq.active .content').slideUp(300);
				$('.wrap-faq.active')
					.removeClass('active')
					.find('i')
					.removeClass('fa-minus')
					.addClass('fa-plus');

				content.slideDown(300);
				parent.addClass('active');
				parent.find('i').removeClass('fa-plus').addClass('fa-minus');

			}

		});

	});

}

function CounterUps() {
	$(document).ready(function () {
		$(".countup").each(function () {
			const $this = $(this);
			const targetNumber = parseInt($this.data("number"));
			const duration = 1500;
			const increment = Math.ceil(targetNumber / (duration / 16));
			let currentNumber = 0;
			const timer = setInterval(function () {
				currentNumber += increment;
				if (currentNumber >= targetNumber) {
					currentNumber = targetNumber;
					clearInterval(timer);
				}
				$this.text(currentNumber);
			}, 16);
		});
	});
}

function ListNavTab() {
	$(document).ready(function () {
		// Sử dụng class .wrap-content-solution làm selector gốc
		$(".wrap-content-solution").each(function (layoutIndex) {
			var currentLayout = $(this);

			// Thêm data-target attribute cho mỗi nav-item là số đơn giản
			currentLayout.find(".nav-item").each(function (index) {
				// Sử dụng số làm data-target
				$(this).attr("data-target", index);

				// Thêm data-id tương ứng cho tab-content
				currentLayout.find(".tab-content").eq(index).attr("data-id", index);
			});

			// Ẩn tất cả các tab-content ngoại trừ tab đầu tiên
			currentLayout.find(".tab-content").hide();
			currentLayout.find(".tab-content:first").show();

			// Đảm bảo nav-link đầu tiên có class active ban đầu
			currentLayout.find(".nav-link:first").addClass("active");

			// Xử lý sự kiện click cho từng nav-item trong layout hiện tại
			currentLayout.find(".nav-item").click(function (e) {
				e.preventDefault(); // Ngăn chặn hành vi mặc định

				// Loại bỏ class active từ tất cả nav-link trong layout này
				currentLayout.find(".nav-link").removeClass("active");

				// Thêm class active cho nav-link được click
				$(this).find(".nav-link").addClass("active");

				// Lấy target id từ data-target của nav-item được click (đơn giản là số)
				var targetId = $(this).attr("data-target");

				// Ẩn tất cả các tab-content trong layout này
				currentLayout.find(".tab-content").hide();

				// Hiển thị tab-content tương ứng với data-id
				currentLayout.find(".tab-content[data-id='" + targetId + "']").fadeIn(300);
			});
		});
	});
}

function AccordionImg() {
	$(document).ready(function () {
		// Lưu trữ các element quan trọng
		const $accordionTitles = $('.accordion-title');
		const $accordionContents = $('.accordion-content');
		const $faqImage = $('.faq-image img');
		// Đóng tất cả các accordion trước tiên
		function hideAllAccordions() {
			$accordionTitles.removeClass('active');
			$accordionTitles.find('.icon i').removeClass('fa-minus').addClass('fa-plus');
			$accordionContents.hide();
		}
		// Hàm để đóng tất cả các accordion
		function closeAllAccordions() {
			$accordionTitles.removeClass('active');
			$accordionTitles.find('.icon i').removeClass('fa-minus').addClass('fa-plus');
			$accordionContents.slideUp(300);
		}

		// Hàm để mở một accordion cụ thể
		function openAccordion($title) {
			const $content = $title.next('.accordion-content');
			const imageUrl = $title.data('image');
			// Thêm class active cho title
			$title.addClass('active');
			// Thay đổi icon từ plus thành minus
			$title.find('.icon i').removeClass('fa-plus').addClass('fa-minus');
			// Hiển thị nội dung accordion
			$content.slideDown(300);
			// Cập nhật hình ảnh
			if (imageUrl) {
				$faqImage.attr('src', imageUrl);
			}
		}
		// Xử lý sự kiện click vào title
		$accordionTitles.on('click', function () {
			const $this = $(this);
			// Nếu title đang được active, đóng nó lại
			if ($this.hasClass('active')) {
				$this.removeClass('active');
				$this.find('.icon i').removeClass('fa-minus').addClass('fa-plus');
				$this.next('.accordion-content').slideUp(300);
			} else {
				// Đóng tất cả các accordion khác
				closeAllAccordions();
				// Mở accordion hiện tại
				openAccordion($this);
			}
		});

		// Khi trang tải xong, đóng tất cả accordion trước
		hideAllAccordions();

		// Sau đó chỉ mở accordion đầu tiên
		const $firstTitle = $accordionTitles.first();
		const firstImageUrl = $firstTitle.data('image');

		$firstTitle.addClass('active');
		$firstTitle.find('.icon i').removeClass('fa-plus').addClass('fa-minus');
		$firstTitle.next('.accordion-content').show();

		// Cập nhật hình ảnh cho item đầu tiên
		if (firstImageUrl) {
			$faqImage.attr('src', firstImageUrl);
		}
	});

}





/*==================== Lazyload JS ====================*/
const observer = lozad(); // lazy loads elements with default selector as '.lozad'
observer.observe();
