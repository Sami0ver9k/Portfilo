$(document).ready(function() {

    $('#slides').superslides({

        animation: 'fade',
        play: 10000,
        pagination: false



    });


    //owl carousel func

    $('.owl-carousel').owlCarousel({
        loop: true,


        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });





    var skillsOffset = $(".skills").offset().top;

    $(window).scroll(function() {

        if (window.pageYOffset > skillsOffset - $(window).height() + 300) {
            console.log(window.pageYOffset);
            console.log(skillsOffset - $(window).height() + 200);

            $('.chart').easyPieChart({

                easing: 'easeInOut',
                barColor: '#d2dae2',
                trackColor: false,
                scaleColor: false,
                lineCap: 'square',
                animate: ({
                    duration: 800,
                    enabled: true
                }),
                size: 150,
                lineWidth: 4,
                onStep: function(from, to, percent) {

                    $(this.el).find('.percent').text(Math.round(percent));
                }




            });




        }




    });



  $(".items").isotope({
        filter: '*'
       
    });

  $("#filters a").click(function(){
    $("#filters .current").removeClass("current");
    $(this).addClass("current");
    
    var selector = $(this).attr("data-filter");

   $(".items").isotope({
        filter: selector
       
    });


   return false;

  });




    //auto typed

    var typed = new Typed(".typed", {

        strings: ["", "Software Engineer.", "Machine Learning Enthusiast."],
        typeSpeed: 80,
        loop: true,
        startDelay: 1200,
        showCursor: false,
        fadeOut: true,
        fadeOutDelay: 100


    });



  



});