$(document).ready(function () {
  
/**initializing the face detection */
    $('#picture').faceDetection({
      complete : function (faces) {
        console.log(faces);//logging the faces to the console
      }

    });
/**end of initializing the face detection */

});