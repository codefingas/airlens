$(document).ready(function(){//this part mainly controls the triggers to the applcation functionality

    $("#join").scrollSpy();//initializing the scroll spy
    $(".sidenav").sidenav();//this triggers the sidenav
    // $(".tabs").tabs();

    /**creating a trigger for the cart area */
    $(".cart-trigger").on("click", function () {
       $("#cart-area").css('width', "250px");//increasing the width of the cart area
    })
    /**end of creating trigger for the cart area */
  });

  // <i class="small material-icons  teal-text accent-2">assignment_turned_in</i>