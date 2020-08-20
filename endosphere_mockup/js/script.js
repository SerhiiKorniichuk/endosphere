$(document).ready(function () {

	// Adaptive window resize for mobile browser
	$(window).on('resize', function () {
		let vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);
	});


	// Opening Mobile-Menu on click
	$('.burger-btn').on('click', function () {
		toggleMenu()
	})

	function toggleMenu() {
		$('.burger-btn').toggleClass('_active')
		$('.burger-menu').toggleClass('_active')
	}

	// Opening and Closing PopUp on click
	$('.regist-btn').on('click', function (e) {
		e.preventDefault()
		$('.popup-regist').addClass('_active')
		$('.popup-regist__body').addClass('_active')
	})

	$('.popup-regist__close-btn').on('click', function () {
		$('.popup-regist').removeClass('_active')
		$('.popup-regist__body').removeClass('_active')
	})

	let popupRegist = $('.popup-regist')
	let popupRegistBody = $('.popup-regist__body')

	$(document).on('mouseup', function (e) {
		if (popupRegist.hasClass('_active')
			&& popupRegistBody.hasClass('_active')) {
			if (!popupRegistBody.is(e.target)
				&& !popupRegistBody.is(e.target)
				&& popupRegistBody.has(e.target).length === 0) {
				popupRegist.removeClass('_active')
				popupRegistBody.removeClass('_active')
			}
		}
	})


	// Closing Mobile-Menu after click on link
	$('.scroll-to-el').on('click', function () {
		if ($('.burger-btn').hasClass('_active') && $('.burger-menu').hasClass('_active'))
			setTimeout(toggleMenu, 50)
	})


	// Animated scroll to section
	$(".scroll-to-el").on("click", "a", function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({ scrollTop: top - 100 }, 1500);
	});


	// Sliders settings
	$('.advantages__slider').slick({
		settings: 'unslick',
		autoplay: true,
		autoplaySpeed: 2500,
		responsive: [
			{
				breakpoint: 9999,
				settings: 'unslick'
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					dots: true,
					adaptiveHeight: true
				}
			}
		]
	});

	$('.actions__slider').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		autoplay: true,
		autoplaySpeed: 2500,
		adaptiveHeight: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

	$('.phases__slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		adaptiveHeight: true,
		autoplay: true,
		autoplaySpeed: 2500,
		responsive: [
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				}
			},

		]
	});

	$('.comparison__slider').slick({
		settings: 'unslick',
		autoplay: true,
		autoplaySpeed: 2500,
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		adaptiveHeight: true,
		responsive: [
			{
				breakpoint: 99999,
				settings: 'unslick'
			},
			{
				breakpoint: 768,
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});
	//----------------------------------------

});


// Text-Area autoresize plugin
let textareas = document.querySelectorAll('.form-text-area'),
	hiddenDiv = document.createElement('div'),
	content = null;

for (let j of textareas) {
	j.classList.add('txtstuff');
}

hiddenDiv.classList.add('form-text-area');
hiddenDiv.style.display = 'none';
hiddenDiv.style.whiteSpace = 'pre-wrap';
hiddenDiv.style.wordWrap = 'break-word';

for (let i of textareas) {
	(function (i) {
		i.addEventListener('input', function () {
			i.parentNode.appendChild(hiddenDiv);
			i.style.resize = 'none';
			i.style.overflow = 'hidden';
			content = i.value;
			content = content.replace(/\n/g, '<br>');
			hiddenDiv.innerHTML = content + '<br style="line-height: 3px;">';
			hiddenDiv.style.visibility = 'hidden';
			hiddenDiv.style.display = 'block';
			i.style.height = hiddenDiv.offsetHeight + 'px';
			hiddenDiv.style.visibility = 'visible';
			hiddenDiv.style.display = 'none';
		});
	})(i);
}

// GOOGLE Map settings
function initMap() {
	var uluru = { lat: 48.922002, lng: 24.716437 };

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 17,
		center: uluru,
		disableDefaultUI: true,
	});

	var marker = new google.maps.Marker({
		position: uluru,
		map: map
	});
}