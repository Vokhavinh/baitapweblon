$(document).ready(function(){
                $("#gototop").hide()
                $(window).scroll(function(){
                    var t=$(this).scrollTop()
                    if(t>=100)
                        $("gototop").show(500)
                    else
                        $("#gototop").hide(500)    
                });

                $("gototop").click(function(){
                    $('html,body').animate({
                        'scrollTop':0
                    },1000)
                })
            })
