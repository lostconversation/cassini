function infoBox(){

    this.fps = fps;
    this.intro=intro;
    this.sound=sound;
    this.timerSpace = timerSpace;
    this.dopeTimeout = dopeTimeout;
    // this.camera=camera;
    
    // console.log(info)
    if (intro==1){
      setTimeout(function(){
        $( "#instructions" ).fadeOut( "slow", function() {});
        $('html,body').css('cursor', 'auto');
        clearInterval(loadingDots);
      }, 200)
        $( "#storyBG" ).fadeOut( "slow", function() {
          playSound(sound);
          
        // Sound();
        

        
        $( ".top" ).fadeIn( "slow", function() {});
        // console.log("sdf")
        if ($(window).width() > 769){
          // console.log(camera)
          $( ".bottom" ).fadeIn( "slow", function() {});

          // new TWEEN.Tween( pivotText.position).to({ x: 0, y: 0, z: -500 }, 4000 ).easing(TWEEN.Easing.Quartic.InOut).start();
          new TWEEN.Tween( cluster.position).to({ x: 0, y: 0, z: 0 }, 4000 ).easing(TWEEN.Easing.Quartic.InOut).start().onComplete(function() {
              new TWEEN.Tween( pivotText.position).to({ x: 0, y: 0, z: -500 }, 4000 ).easing(TWEEN.Easing.Quartic.InOut).start().onComplete(function() {
              // $( "#description" ).fadeIn( "slow", function() {});
              var descrFade = setTimeout(function(){
                $( "#description" ).fadeOut( "slow", function() {});
                clearTimeout(descrFade)
              }, 2000)
          });
          });

          // $( "#description" ).fadeIn( "slow", function() {});
        }
        // var pT = scene.getObjectByName("pivotText");
        // new TWEEN.Tween( pT.position).to({ x: 0, y: 0, z: 0 }, 3000 ).easing(TWEEN.Easing.Quartic.InOut).start();
        // console.log(pT.position)
        intro=0;

        clearTimeout(loadingDots);
        loadBar(window.timerSpace);
      });
    } else if (intro==0){
      timerSpace = 0;
      // timerSpace = this.timerSpace;
     $( "#storyBG").css("background", "rgba(0, 0, 0, .9)");
     $( "#storyBG" ).fadeIn( "slow", function() {});  
     $( "#intro" ).fadeIn( "slow", function() {});   
     $( ".bottom" ).fadeOut( "slow", function() {});
     $( "#instructions" ).text("CONTINUE");
     $( "#instructions" ).fadeIn( "slow", function() {});
     $('html,body').css('cursor', 'pointer');
     if(fps>=1){
    clearInterval(myTimer);
    clearInterval(myTimerVideo);
    if (num==4){
    playAnim=2;
  }
  }
    intro=2;

    } else if (intro==2){
      timerSpace = timerSpaceOrig;
     $( "#storyBG" ).fadeOut( "slow", function() {}); 
     $( "#intro" ).fadeOut( "slow", function() {}); 
     $( "#instructions" ).fadeOut( "slow", function() {});
     if (fps==1){
     $( ".bottom" ).fadeIn( "slow", function() {}); 
      } else if(fps>=1){
      video(letter);
    }
    intro=0;
    }
    // console.log(info)
    
    // console.log(timerSpace)
      
}



$( "#intro" ).click(function() { 
  // console.log(timerSpace)
    // timerSpace=0;
    infoBox();
    if (/Mobi/.test(navigator.userAgent)) {
    $("#mobileTouch").fadeIn();
  }
});


function loadBar(timerSpace) {
            var elem = document.getElementById("myBar"); 
            loadBarWidth = 0;
            loadBarId = setInterval(frame, 50);
            var timerSpace = window.timerSpace;

            function frame() {
              // console.log(letter)
                if (loadBarWidth >= 100) {
                    clearInterval(loadBarId);
                    // console.log(letter)
                    if (letter =='A'){
                        letter = 'B';
                    } else if (letter =='B'){
                        letter = 'C';
                    } else if (letter =='C'){
                        letter = 'D';
                    } else if (letter =='D'){
                        letter = 'A';
                    } 
                    loadBarId=0;
                    loadBarWidth = 0;
                    changeScene(letter);
                    // loadBar(window.timerSpace)
                } else {
                    // console.log(window.timerSpace)
                    loadBarWidth = loadBarWidth+=window.timerSpace; 
                    elem.style.width = loadBarWidth + '%'; 
                }
            }
        }




function loading(){
  var text = ". loading .";
  var dotCounter = 0;
  $('#loading').text(text);

  loadingDots = setInterval(function() {

    dotCounter++;

    if (dotCounter > 10) {
      dotCounter = 0;
    }

    var newText = text;

    for (var i = 0; i < dotCounter; i++) {
      newText = newText + ".";
      newText = "." + newText;
    };

    // loadingText.text(newText);
    $('#loading').text(newText);
  }, 200);
  // this.loadingDots = loadingDots;
}



function zoom(event) {
    // console.log(camera.position.z);
    // console.log("fsd")

    // camera.position.z-=50;

    var delta;
if (event.wheelDelta){
    delta = event.wheelDelta;
}else{
    delta = -1 *event.deltaY;
}
if (delta < 0 && camera.position.z<maxCam){
    camera.position.z+=scrollSpeed;
    // console.log(camera.position.z);
}else if (delta > 0 && camera.position.z>-8000){
    camera.position.z-=scrollSpeed;
    // console.log(camera.position.z);
}

}




function onWindowResize() {
    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
}




function onDocumentMouseMove(event) {
    event.preventDefault();
    mouseX = ( event.clientX - windowHalfX ) * 20;
    mouseY = ( event.clientY - windowHalfY ) * 20;

    // for hover/click
    mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

    // $('#instructions').css({
    //    left:  event.pageX,
    //    top:   event.pageY
    // });

}



function onDocumentTouchMove(event) {
    var touch = event.touches[0];
    var x = touch.pageX;
    var y = touch.pageY;
    // console.log(x);
    mouseX = ( x - windowHalfX ) * 1000;
    mouseY = ( y - windowHalfY ) * 1000;


    // console.log(mouseX);
}
function onDocumentKeyDown(event) {
    // console.log(hideUI)
    this.hideUI=hideUI;
    var keyCode = event.which;
    if (keyCode == 32) {
        // $(".ui").hide();
        if (hideUI==1){
            $(".ui").hide();
            hideUI=0;
        } else if (hideUI==0){
            $(".ui").show();
            hideUI=1;
        }
    
    };

}

//


    
    
    