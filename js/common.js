$(document).ready(function () {

    //Таймер обратного отсчета
    //Документация: http://keith-wood.name/countdown.html
    //<div class="countdown" date-time="2015-01-07"></div>
    var austDay = new Date($(".countdown").attr("date-time"));
    $(".countdown").countdown({until: austDay, format: 'yowdHMS'});

    $("span .till_content").each(function () {
        var parh = $(this).parent().height();
        $(this).height(parh);
    });


    $(".top_bar").click(function () {
        $(".wrapper_navigation").animate({"right": "+=250px"}, 250);
        $(".abc").animate({"right": "+=250px"}, 250);
        $("body").css("overflow", "hidden");
        $(".public_info").css("left", "-=250px");
    });

    $(".x").click(function () {
        $(".wrapper_navigation").animate({"right": "-=250px"}, 250);
        $(".abc").animate({"right": "-=250px"}, 250);
        $("body").css("overflow-y", "scroll");
        $(".public_info").css("left", "55%");


    });

    $(".abc").css("display", "none").fadeIn(1500);

    $(".order").click(function () {
        $(".order_form").css("display", "block");
        $(".os_product_page").css("position", "fixed");


    });
    $(".close_order").click(function () {
        $(".order_form").css("display", "none");
        $(".os_product_page").css("position", "relative");

    });

  $('#btn-1').click(function () {
        if ($(this).hasClass('button-expand')) {
            $('#item-1').animate({"left": "+=640px"}, 200);
            $(this).removeClass('button-expand').addClass('active_slider');
        } else {
            $('#item-1').animate({"left": "-=640px"}, 200);
            $(this).removeClass('active_slider').addClass('button-expand');
        }
    });
    $('#btn-2').click(function () {
        if ($(this).hasClass('button-expand')) {
            $('#item-2').animate({"left": "+=640px"}, 200);
            $(this).removeClass('button-expand').addClass('active_slider');
        } else {
            $('#item-2').animate({"left": "-=640px"}, 200);
            $(this).removeClass('active_slider').addClass('button-expand');
        }
    });
    $('#btn-3').click(function () {
        if ($(this).hasClass('button-expand')) {
            $('#item-3').animate({"left": "+=640px"}, 200);
            $(this).removeClass('button-expand').addClass('active_slider');
        } else {
            $('#item-3').animate({"left": "-=640px"}, 200);
            $(this).removeClass('active_slider').addClass('button-expand');
        }
    });
    $('#btn-4').click(function () {
        if ($(this).hasClass('button-expand')) {
            $('#item-4').animate({"left": "+=640px"}, 200);
            $(this).removeClass('button-expand').addClass('active_slider');
        } else {
            $('#item-4').animate({"left": "-=640px"}, 200);
            $(this).removeClass('active_slider').addClass('button-expand');
        }
    });
    $('#btn-5').click(function () {
        if ($(this).hasClass('button-expand')) {
            $('#item-5').animate({"left": "+=640px"}, 200);
            $(this).removeClass('button-expand').addClass('active_slider');
        } else {
            $('#item-5').animate({"left": "-=640px"}, 200);
            $(this).removeClass('active_slider').addClass('button-expand');
        }
    });
    $('#btn-6').click(function () {
        if ($(this).hasClass('button-expand')) {
            $('#item-6').animate({"left": "+=640px"}, 200);
            $(this).removeClass('button-expand').addClass('active_slider');
        } else {
            $('#item-6').animate({"left": "-=640px"}, 200);
            $(this).removeClass('active_slider').addClass('button-expand');
        }
    });
    $('#btn-7').click(function () {
        if ($(this).hasClass('button-expand')) {
            $('#item-7').animate({"left": "+=640px"}, 200);
            $(this).removeClass('button-expand').addClass('active_slider');
        } else {
            $('#item-7').animate({"left": "-=640px"}, 200);
            $(this).removeClass('active_slider').addClass('button-expand');
        }
    });
    $('#btn-8').click(function () {
        if ($(this).hasClass('button-expand')) {
            $('#item-8').animate({"left": "+=640px"}, 200);
            $(this).removeClass('button-expand').addClass('active_slider');
        } else {
            $('#item-8').animate({"left": "-=640px"}, 200);
            $(this).removeClass('active_slider').addClass('button-expand');
        }
    });
    $('#btn-9').click(function () {
        if ($(this).hasClass('button-expand')) {
            $('#item-9').animate({"left": "+=640px"}, 200);
            $(this).removeClass('button-expand').addClass('active_slider');
        } else {
            $('#item-9').animate({"left": "-=640px"}, 200);
            $(this).removeClass('active_slider').addClass('button-expand');
        }
    });
    $('#btn-10').click(function () {
        if ($(this).hasClass('button-expand')) {
            $('#item-10').animate({"left": "+=640px"}, 200);
            $(this).removeClass('button-expand').addClass('active_slider');
        } else {
            $('#item-10').animate({"left": "-=640px"}, 200);
            $(this).removeClass('active_slider').addClass('button-expand');
        }
    });
    $('#btn-11').click(function () {
        if ($(this).hasClass('button-expand')) {
            $('#item-11').animate({"left": "+=640px"}, 200);
            $(this).removeClass('button-expand').addClass('active_slider');
        } else {
            $('#item-11').animate({"left": "-=640px"}, 200);
            $(this).removeClass('active_slider').addClass('button-expand');
        }
    });
    $('#btn-12').click(function () {
        if ($(this).hasClass('button-expand')) {
            $('#item-12').animate({"left": "+=640px"}, 200);
            $(this).removeClass('button-expand').addClass('active_slider');
        } else {
            $('#item-12').animate({"left": "-=640px"}, 200);
            $(this).removeClass('active_slider').addClass('button-expand');
        }
    });
    $('#btn-13').click(function () {
        if ($(this).hasClass('button-expand')) {
            $('#item-13').animate({"left": "+=640px"}, 200);
            $(this).removeClass('button-expand').addClass('active_slider');
        } else {
            $('#item-13').animate({"left": "-=640px"}, 200);
            $(this).removeClass('active_slider').addClass('button-expand');
        }
    });
    $('#btn-14').click(function () {
        if ($(this).hasClass('button-expand')) {
            $('#item-14').animate({"left": "+=640px"}, 200);
            $(this).removeClass('button-expand').addClass('active_slider');
        } else {
            $('#item-14').animate({"left": "-=640px"}, 200);
            $(this).removeClass('active_slider').addClass('button-expand');
        }
    });
    $('#btn-15').click(function () {
        if ($(this).hasClass('button-expand')) {
            $('#item-15').animate({"left": "+=640px"}, 200);
            $(this).removeClass('button-expand').addClass('active_slider');
        } else {
            $('#item-15').animate({"left": "-=640px"}, 200);
            $(this).removeClass('active_slider').addClass('button-expand');
        }
    });
    $('#btn-16').click(function () {
        if ($(this).hasClass('button-expand')) {
            $('#item-16').animate({"left": "+=640px"}, 200);
            $(this).removeClass('button-expand').addClass('active_slider');
        } else {
            $('#item-16').animate({"left": "-=640px"}, 200);
            $(this).removeClass('active_slider').addClass('button-expand');
        }
    });
    $('#btn-17').click(function () {
        if ($(this).hasClass('button-expand')) {
            $('#item-17').animate({"left": "+=640px"}, 200);
            $(this).removeClass('button-expand').addClass('active_slider');
        } else {
            $('#item-17').animate({"left": "-=640px"}, 200);
            $(this).removeClass('active_slider').addClass('button-expand');
        }
    });
    $('#btn-18').click(function () {
        if ($(this).hasClass('button-expand')) {
            $('#item-18').animate({"left": "+=640px"}, 200);
            $(this).removeClass('button-expand').addClass('active_slider');
        } else {
            $('#item-18').animate({"left": "-=640px"}, 200);
            $(this).removeClass('active_slider').addClass('button-expand');
        }
    });
    $('#btn-19').click(function () {
        if ($(this).hasClass('button-expand')) {
            $('#item-19').animate({"left": "+=640px"}, 200);
            $(this).removeClass('button-expand').addClass('active_slider');
        } else {
            $('#item-19').animate({"left": "-=640px"}, 200);
            $(this).removeClass('active_slider').addClass('button-expand');
        }
    });
    $('#btn-20').click(function () {
        if ($(this).hasClass('button-expand')) {
            $('#item-20').animate({"left": "+=640px"}, 200);
            $(this).removeClass('button-expand').addClass('active_slider');
        } else {
            $('#item-20').animate({"left": "-=640px"}, 200);
            $(this).removeClass('active_slider').addClass('button-expand');
        }
    });
    $('#btn-21').click(function () {
        if ($(this).hasClass('button-expand')) {
            $('#item-21').animate({"left": "+=640px"}, 200);
            $(this).removeClass('button-expand').addClass('active_slider');
        } else {
            $('#item-21').animate({"left": "-=640px"}, 200);
            $(this).removeClass('active_slider').addClass('button-expand');
        }
    });
    $('#btn-22').click(function () {
        if ($(this).hasClass('button-expand')) {
            $('#item-22').animate({"left": "+=640px"}, 200);
            $(this).removeClass('button-expand').addClass('active_slider');
        } else {
            $('#item-22').animate({"left": "-=640px"}, 200);
            $(this).removeClass('active_slider').addClass('button-expand');
        }
    });
    $('#btn-23').click(function () {
        if ($(this).hasClass('button-expand')) {
            $('#item-23').animate({"left": "+=640px"}, 200);
            $(this).removeClass('button-expand').addClass('active_slider');
        } else {
            $('#item-23').animate({"left": "-=640px"}, 200);
            $(this).removeClass('active_slider').addClass('button-expand');
        }
    });
    $('#btn-24').click(function () {

        if ($(this).hasClass('button-expand')) {
            $('#item-24').animate({"left": "+=640px"}, 200);
            $(this).removeClass('button-expand').addClass('active_slider');
        } else {
            $('#item-24').animate({"left": "-=640px"}, 200);
            $(this).removeClass('active_slider').addClass('button-expand');
        }
    });
    $('#btn-25').click(function () {

        if ($(this).hasClass('button-expand')) {
            $('#item-25').animate({"left": "+=640px"}, 200);
            $(this).removeClass('button-expand').addClass('active_slider');
        } else {
            $('#item-25').animate({"left": "-=640px"}, 200);
            $(this).removeClass('active_slider').addClass('button-expand');
        }
    });

 //Попап менеджер FancyBox
    //Документация: http://fancybox.net/howto
    //<a class="fancybox"><img src="image.jpg" /></a>
    //<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
//    $(".fancybox").fancybox();
    $('.fancybox').fancybox( );

    //Добавляет классы дочерним блокам .block для анимации
    //Документация: http://imakewebthings.com/jquery-waypoints/
    $(".block").waypoint(function (direction) {
        if (direction === "down") {
            $(".class").addClass("active");
        } else if (direction === "up") {
            $(".class").removeClass("deactive");
        }
        ;
    }, {offset: 100});

    //Плавный скролл до блока .div по клику на .scroll
    //Документация: https://github.com/flesler/jquery.scrollTo
    $("a.scroll").click(function () {
        $.scrollTo($(".div"), 800, {
            offset: -90
        });
    });

    //Каруселька
    //Документация: http://owlgraphic.com/owlcarousel/
    var owl = $(".carousel");
    owl.owlCarousel({
        items: 4
    });
    owl.on("mousewheel", ".owl-wrapper", function (e) {
        if (e.deltaY > 0) {
            owl.trigger("owl.prev");
        } else {
            owl.trigger("owl.next");
        }
        e.preventDefault();
    });
    $(".next_button").click(function () {
        owl.trigger("owl.next");
    });
    $(".prev_button").click(function () {
        owl.trigger("owl.prev");
    });

    //Кнопка "Наверх"
    //Документация:
    //http://api.jquery.com/scrolltop/
    //http://api.jquery.com/animate/
    $("#top").click(function () {
        $("body, html").animate({
            scrollTop: 0
        }, 800);
        return false;
    });





    //Аякс отправка форм
    //Документация: http://api.jquery.com/jquery.ajax/
    $("form").submit(function () {
        $.ajax({
            type: "GET",
            url: "mail.php",
            data: $("form").serialize()
        }).done(function () {
            alert("Спасибо за заявку!");
            setTimeout(function () {
                $.fancybox.close();
            }, 1000);
        });
        return false;
    });

});