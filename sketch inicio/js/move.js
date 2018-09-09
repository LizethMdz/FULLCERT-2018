$("#welcome-slide header .menu-b").click(function(){
        $( "#welcome-slide header ul" ).css( "left", "0px" );
        $( "#welcome-slide header .login" ).css( "display", "none" );
        $( "#welcome-slide header .menu-x" ).css( "display", "inline-block" );
        $( this ).css( "display", "none" );
    });

    $("#welcome-slide header .menu-x").click(function(){
            $( "#welcome-slide header ul" ).css( "left", "-100%" );
            $( "#welcome-slide header .login" ).css( "display", "inline-block" );
            $( this ).css( "display", "none" );
            $( "#welcome-slide header .menu-b" ).css( "display", "inline-block" );
        });

    $(window).resize(function(){
           if ($(window).width() >= 1130) {
                $( "#welcome-slide header .register" ).css( "right", "0px" );
           }
    });
