 $(document).ready(function(){
        
        $(window).trigger("resize");            
        init_team();
       
    });
    
 /* ---------------------------------------------
     Team
     --------------------------------------------- */   
     
    
    function init_team(){
    
        // Hover        
        $(".team-item").hover(function(){
                $(this).toggleClass("js-active");
            
        });
        
    }