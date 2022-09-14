function cityFunction(currentElem) {
    let input = currentElem;
    let div = currentElem.parentElement;
    div.classList.add("onprocess");
    div.classList.remove("complete");
    let filter = input.value.toUpperCase();
    let ul = div.querySelector("ul")
    let li = ul.querySelectorAll("li")
    ul.style.display = 'block';

    for (let i = 0; i < li.length; i++) {
        let a = li[i].getElementsByTagName("a")[0];
        let txtValue = a.textContent || a.innerText;

        if (txtValue.toUpperCase().includes(filter)) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}



$(document).mouseup(function (e) {
    var container = $(".cityList");
    var ext = $(".inputLocation");

    // if the target of the click isn't the container nor a descendant of the container
    if (!ext.is(e.target) && !container.is(e.target) && ext.has(e.target).length === 0) {

        if (ext.find('input').val() == "") {
            ext.removeClass('onprocess');
            ext.removeClass('complete');
        } else {
            ext.removeClass('onprocess');
            ext.addClass('complete');
        }
        container.hide();

    }
});



$(document).ready(function () {

    /* ВАРИАНТ выпадашки для пункта Отправки (дизайн не позволяет обойтись стандартными средствами) */
    class Dropdown {
        constructor(selector) {
            /* this.$el = document.querySelector(selector) */
            this.$el = selector
            this.items = []

            var forItems = Array.from(this.$el.querySelectorAll('li'))
            forItems.forEach(function (item) {
                var itemsList = {}
                itemsList.name = item.dataset.name
                itemsList.time = item.dataset.time
                itemsList.summ = item.dataset.summ
                itemsList.id = item.dataset.id
                this.items.push(itemsList)
            }.bind(this))


            this.$el.querySelector('.dropdownJS__label .dropdownJS__text1').textContent = this.items[0].name
            this.$el.querySelector('.dropdownJS__label .dropdownJS__text2-value').textContent = this.items[0].time
            this.$el.querySelector('.dropdownJS__label .dropdownJS__text3').textContent = this.items[0].summ
            this.$el.querySelector('.dropdownJS__label input').value = this.items[0].id

            this.$el.querySelector('.dropdownJS__label').addEventListener('click', event => {
                if (this.$el.classList.contains('open')) {
                    this.close()
                } else {
                    this.open()
                }

            })

            this.$el.querySelectorAll('li').forEach(function (event) {
                event.addEventListener('click', function (event) {
                    this.select(event.currentTarget.dataset.id)
                }.bind(this))
            }.bind(this))

        }

        select(id) {
            const item = this.items.find(i => i.id === id)
            this.$el.querySelector('.dropdownJS__label .dropdownJS__text1').textContent = item.name
            this.$el.querySelector('.dropdownJS__label .dropdownJS__text2-value').textContent = item.time
            this.$el.querySelector('.dropdownJS__label .dropdownJS__text3').textContent = item.summ
            this.$el.querySelector('.dropdownJS__label input').value = item.id
            this.close()
        }

        open() {
            this.$el.classList.add('open')
        }

        close() {
            this.$el.classList.remove('open')
        }
    }

    document.querySelectorAll('.dropdownJS').forEach(function (item) {
        new Dropdown(item)
    });

    /* END   выпадашка */


    (function ($) {
        $(function () {

            $('.calctabs-js').on('click', 'li:not(.active)', function () {
                $(this).addClass('active').siblings().removeClass('active');
                $(this).closest('div.calcitem_tabs-js').find('div.calcitem__content').find('div.calcform-js').removeClass('active').eq($(this).index()).addClass('active');
                $(this).closest('div.calcitem_tabs-js').find('div.calctabs__action').removeClass('active').eq($(this).index()).addClass('active');

            });
        });
    })(jQuery);


    function incrementValue(e) {
        e.preventDefault();
        var fieldName = $(e.target).data('field');
        var parent = $(e.target).closest('div');
        var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);
        if (!isNaN(currentVal)) {
            parent.find('input[name=' + fieldName + ']').val(currentVal + 1);
        } else {
            parent.find('input[name=' + fieldName + ']').val(1);
        }
    }

    function decrementValue(e) {
        e.preventDefault();
        var fieldName = $(e.target).data('field');
        var parent = $(e.target).closest('div');
        var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);
        if (!isNaN(currentVal) && currentVal > 1) {
            parent.find('input[name=' + fieldName + ']').val(currentVal - 1);
        } else {
            parent.find('input[name=' + fieldName + ']').val(1);
        }
    }


    $('.quantity').on('click', '.quantity-plus', function (e) {
        incrementValue(e);
    });
    $('.quantity').on('click', '.quantity-minus', function (e) {
        decrementValue(e);
    });



    $('input[type="tel"]').mask('+7 (999) 999-99-99');




    $('.pageslider__slider').slick({
        dots: true,
        arrows: false,
        vertical: false,

        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 4000,
        speed: 800,
        infinite: true,
        customPaging: (mainslider, i) => '<span>0' + (i + 1) + '</span>',
        responsive: [{
                breakpoint: 1023,
                settings: "unslick"
            },


        ]
    });


    function animationCounter1() {
        $('.stats__number span').each(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 2000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });

    }
    animationCounter1();




    $('.cityList li a').on('click', function (e) {
        e.preventDefault();
        $(this).closest('ul').siblings('input').val($(this).html());

        if ($(this).closest('ul').siblings('input').val() != "") {
            $(this).closest('.inputLocation').addClass('complete');
        }

        $(this).closest('.inputLocation').removeClass('onprocess');
        $(this).closest('ul').hide();
    });


    (function ($) {
        $(function () {

            $('.tabs__caption_js').on('click', '.tabs__tab_js:not(.active)', function () {
                $(this)
                    .addClass('active').siblings().removeClass('active')
                    .closest('div.tabs').find('div.tabs__content_js').removeClass('active').eq($(this).index()).addClass('active');
            });

        });
    })(jQuery);




    $('.accordeonheader_js').click(function (event) {
        $('.accordeon__content_js').not($(this).next()).hide().removeClass('active');
        $('.accordeonheader_js').not($(this)).removeClass('active');
        $(this).toggleClass('active');
        $(this).next('.accordeon__content_js').slideToggle();
    });

    $('.accordeonbutton_js').click(function (event) {

        $('.accordeonbutton_js').not($(this)).removeClass('active');
        $(this).toggleClass('active');
        $(this).next('.accordeoncontent_js').slideToggle().toggleClass('active');
    });

    $(document).on('change', '.switches input[type="checkbox"]', function () {
        if ($(this).is(':checked')) {
            $(this).closest('li').find('.switches__name').addClass('active');
        } else {
            $(this).closest('li').find('.switches__name').removeClass('active');
        }
    });


    $('.newslist__slider').each(function () {
        $(this).slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            /* autoplay: true,
              autoplaySpeed: 3000,*/
            arrows: false,
            dots: false,
            fade: false,
            mobileFirst: false,
            responsive: [{
                    breakpoint: 1023,
                    settings: {
                        slidesToShow: 3,

                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                    }
                }

            ]
        });
    });

    $('.managerslider__slider').each(function () {
        $(this).slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            /* autoplay: true,
              autoplaySpeed: 3000,*/
            arrows: false,
            dots: false,
            fade: false,
            mobileFirst: false,
            fade: true,
            responsive: [

                {
                    breakpoint: 1023,
                    settings: {

                        dots: true
                    }
                },

            ]
        });
    });

    $(".showmore__manager").on("click", function () {
        $(this).closest('.managerblock').find('.managerblock__form').slideToggle();
        $(this).hide();
    });

    $(".managerslider__slider").on("afterChange", function () {
        var dataId = $('.slick-current').attr("data-slick-index");
        $('.managerblock__tab').removeClass('active');
        $('.managerblock__tab[data-slickindex=' + dataId + ']').addClass('active');

        $('.select-manager-js option').eq(dataId).prop('selected', true);

    });


    $("[data-slickindex]").click(function (e) {
        e.preventDefault();
        actIndex = $(this).attr('data-slickindex');
        var slider = $('.managerslider__slider');
        slider[0].slick.slickGoTo(parseInt(actIndex));
    });


    $(".select-manager-js").change(function () {
        goTo = $(this).prop("selectedIndex");
        console.log(goTo);
        $(".managerslider__slider").slick("goTo", goTo);
    });


    $(".slider__right").click(function (e) {
        $(this).parent().parent().find(".slick-slider").slick("slickNext");
    });
    $(".slider__left").click(function (e) {
        $(this).parent().parent().find(".slick-slider").slick("slickPrev");
    });

    $(".location__wno a").click(function (e) {
        e.preventDefault();
        $('.header-region').toggle();
        $('.header-region').toggleClass('header-region_active');


    });

    $(".js-region-close").click(function (e) {
        e.preventDefault();
        $('.header-region').toggle();
        $('.header-region').toggleClass('header-region_active');


    });


    $(".mobilebutton").click(function (e) {
        $('.mobilepanel').toggle();
        $('.overlay').toggle();
        $('.search').toggle();

    });


    $(".mobilemenu-js").click(function (e) {
        $(this).siblings('.mobilemenu__menu').slideToggle();
        $(this).toggleClass('active');

    });
    $(document).on("click", ".limittext__button", function () {
        $(this).closest('.limittext').toggleClass('full');
        $(this).toggleClass('active');
        $(this).siblings('.mask-hidden').toggle();

    });



    $('.accordeon-titlejs').click(function (event) {
        /* $(this).closest('.accordeon-js').find('.accordeon-contentjs').not($(this).next()).hide(300).removeClass('active'); */
        $(this).closest('.accordeon-js').find('.accordeon-titlejs').not($(this)).removeClass('active');
        $(this).toggleClass('active');
        $(this).next('.accordeon-contentjs').slideToggle();
    });


    $('.accordeon-titlejs').click(function (event) {
        /* $(this).closest('.accordeon-js').find('.accordeon-contentjs').not($(this).next()).hide(300).removeClass('active'); */
        $(this).closest('.accordeon-js').find('.accordeon-titlejs').not($(this)).removeClass('active');
        $(this).toggleClass('active');
        $(this).next('.accordeon-contentjs').slideToggle();
    });

    $('.location__title a').click(function (event) {
        event.preventDefault();
        $(this).toggleClass('active');
        $('.location_tooltip').slideToggle();
    });

    if ($(window).width() < 1024) {

        $(".footer__block_menu .footer__title").click(function (e) {
            $(this).siblings('.footer__list').slideToggle();

        });


        $('.ways__list').each(function () {
            if ($(this).innerHeight() > 420) {
                $(this).addClass('limittext');
                $(this).append('<div class="mask-hidden"></div><div class="limittext__button"><svg width="87" height="92" viewBox="0 0 87 92" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d)"><rect x="56" y="21" width="40" height="40" rx="20" transform="rotate(90 56 21)" fill="#F8F8F8" stroke="white" stroke-width="2"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M35.9998 39.6203L40.7498 34.761L42.3911 36.44L35.9998 42.9784L29.6085 36.44L31.2498 34.761L35.9998 39.6203Z" fill="#F23F34"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M35.9998 45.4538L40.7498 40.5945L42.3911 42.2735L35.9998 48.8119L29.6085 42.2735L31.2498 40.5945L35.9998 45.4538Z" fill="#F23F34"></path></g><defs><filter id="filter0_d" x="-5" y="0" width="92" height="92" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dx="5" dy="5"></feOffset><feGaussianBlur stdDeviation="12.5"></feGaussianBlur><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend></filter></defs></svg></div>');
            }
        });



        $('.maccordeon_js').click(function (event) {
            /* $(this).closest('.accordeon-js').find('.accordeon-contentjs').not($(this).next()).hide(300).removeClass('active'); */
            /*$(this).closest('.tabscontent__wrapper').find('.maccordeon_js').not($(this)).removeClass('active');*/
            $(this).toggleClass('active');
            $(this).next().slideToggle().toggleClass('active');
        });
    }





});


$(document).ready(function() {
    const progress = [
        {
            block: stats1,
            value: 53
        }, 
        {
            block: stats2,
            value: 29
        }, 
        {
            block: stats3,
            value: 14
        }, 
        {
            block: stats4,
            value: 4
        }
    ]
    const createProgress = function (block, percent) {
        var bar = new ProgressBar.Circle(block, {
            color: '#F23F34',
            // This has to be the same size as the maximum width to
            // prevent clipping
            strokeWidth: 5,
            trailWidth: 5,
            trailColor: '#eee',
            easing: 'easeInOut',
            duration: 1400,
            text: {
            autoStyleContainer: false
            },
            from: { color: '#F23F34', width: 5 },
            to: { color: '#F23F34', width: 5 },
            // Set default step function for all animate calls
            step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);
        
            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText('');
            } else {
                circle.setText(value+'%');
            }
        
            }
        });
        bar.animate(percent*0.01);  
    }

    progress.forEach(item => createProgress(item.block, item.value))

       
})