$(document).ready(function() {
    
    


(function(){var qs,js,q,s,d=document,gi=d.getElementById,ce=d.createElement,gt=d.getElementsByTagName,id='typef_orm',b='https://s3-eu-west-1.amazonaws.com/share.typeform.com/';if(!gi.call(d,id)){js=ce.call(d,'script');js.id=id;js.src=b+'share.js';q=gt.call(d,'script')[0];q.parentNode.insertBefore(js,q)}})()


    $(".button").on("click", function( e ) {
        
        $(".typeform-widget").toggleClass("open");

    });
    
    
    //Nav Hamburger
    
    $(".hamburger").on("click", function( e ) {
        
        $("nav ul").toggleClass("showing");

    });
    
    $("nav ul").on("click", function( e ) {

        $("nav ul").toggleClass("showing");

    });

    //Scroll on click
                     
    $(".jumper").on("click", function( e ) {

        e.preventDefault();

        $("body, html").animate({ 
            scrollTop: $( $(this).attr('href') ).offset().top + 50
        }, 600);

    });
    
    $('.scrollup1').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
    
    $('.scrollup2').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
    
    $('.scrollup3').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
    
    //Background animate
    
    $("body").scroll(function (e) {
        $("body").scrollLeft(0);    
    });
    
    $(function(){
        var x = 0;
        setInterval(function(){
            x-=1;
            $('.slide1').css('background-position', x + 'px 0');
        }, 70);
    });
    
    $(function(){
        var x = 0;
        setInterval(function(){
            x-=1;
            $('.slide3').css('background-position', x + 'px 0');
        }, 70);
    });
    
    $(function(){
        var x = 0;
        setInterval(function(){
            x-=1;
            $('.slide5').css('background-position', x + 'px 0');
        }, 70);
    });
    
    
    
});