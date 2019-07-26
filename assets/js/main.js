$(document).ready(function () {
  
/**initializing the face detection */
    $('.picture').faceDetection({
      complete : function (faces) {
        // console.log(faces);//logging the faces to the console
        
          $div = $("<div>", {"class" : "face-box"});//creating a div element with class face-box
          $div.css("top", faces[0].positionY);//setting the top css to the same as the returned value from the facedetectr plugin
          $div.css("left", faces[0].positionX);//setting the left to equals the returned positionX
          $div.css("width", faces[0].width);//setting the width to equal each other
          $div.css('height', faces[0].height);//setting the height of the div to equals each other
       
        $("#wrapper").append($div);//appending the just made div to the image
      }

    });
/**end of initializing the face detection */

});