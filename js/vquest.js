// ==================================================
$(document).ready(function(){
    var scrolling = false;

    var ypict=250;
    var margin=0;
    var maxdist=50;

    var myx = 0;

    var myMainDiv= document.getElementById("myMain");
    var ss = "";
    var count;
    var myx = -1000;
    

setInterval( function() {
  if ( scrolling ) {
    scrolling = false;
    // Do your thang!
     }
  }, 250 );

// Let op: als windows horizontaal wordt geresized, klopt navbar-attribuut 'top' niet meer; de laatst toegevoegde class "side_vq_scroll#" wordt niet weggehaald
  $( window ).scroll( function() {
    scrolling = true;
    ypict = Math.floor(parseFloat( $("#headerpic").css("height") ));
        if($("#mySidebarNw2.w3-sidebar").hasClass("side_vq_scroll10") )  {$("#mySidebarNw2.w3-sidebar").removeClass("side_vq_scroll10")};
        if($("#mySidebarNw2.w3-sidebar").hasClass("side_vq_scroll50") )  {$("#mySidebarNw2.w3-sidebar").removeClass("side_vq_scroll50")};
        if($("#mySidebarNw2.w3-sidebar").hasClass("side_vq_scroll100") ) { $("#mySidebarNw2.w3-sidebar").removeClass("side_vq_scroll100")};
        if($("#mySidebarNw2.w3-sidebar").hasClass("side_vq_scroll150") ) { $("#mySidebarNw2.w3-sidebar").removeClass("side_vq_scroll150")};
        if($("#mySidebarNw2.w3-sidebar").hasClass("side_vq_scroll200") ) { $("#mySidebarNw2.w3-sidebar").removeClass("side_vq_scroll200")};
        if($("#mySidebarNw2.w3-sidebar").hasClass("side_vq_scroll250") ) { $("#mySidebarNw2.w3-sidebar").removeClass("side_vq_scroll250") };

          myx=ypict-window.pageYOffset; // myx is afstand onderkant plaatje header tot bovenkant document

          if( myx > (250-maxdist-margin)){
           if(!$("#mySidebarNw2.w3-sidebar").hasClass("side_vq_scroll250") ) {$("#mySidebarNw2.w3-sidebar").addClass("side_vq_scroll250")};
          }
          else if( myx > (200-maxdist-margin) )
           {
                if(!$("#mySidebarNw2.w3-sidebar").hasClass("side_vq_scroll200") ) {$("#mySidebarNw2.w3-sidebar").addClass("side_vq_scroll200")};
          }
          else if( myx > (150-maxdist-margin) )
          {
               if(!$("#mySidebarNw2.w3-sidebar").hasClass("side_vq_scroll150") ) {$("#mySidebarNw2.w3-sidebar").addClass("side_vq_scroll150")};
         }
         else if( myx > (100-maxdist-margin) )
         {
              if(!$("#mySidebarNw2.w3-sidebar").hasClass("side_vq_scroll100") ) {$("#mySidebarNw2.w3-sidebar").addClass("side_vq_scroll100")};
        }
        else if( myx > (50-maxdist-margin) )
        {
             if(!$("#mySidebarNw2.w3-sidebar").hasClass("side_vq_scroll50") ) {$("#mySidebarNw2.w3-sidebar").addClass("side_vq_scroll50")};
        }
        else if( myx > (10-maxdist-margin) )
        {
             if(!$("#mySidebarNw2.w3-sidebar").hasClass("side_vq_scroll10") ) {$("#mySidebarNw2.w3-sidebar").addClass("side_vq_scroll10")};
        }
        else{
          if(!$("#mySidebarNw2.w3-sidebar").hasClass("side_vq_scroll10") ) {$("#mySidebarNw2.w3-sidebar").addClass("side_vq_scroll10")};
        }
   });
// ==================================================
}); // end document ready

