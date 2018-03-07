var container, stats;
var camera, controls, scene, renderer, num;
var mesh, geometry, sphere;
var mouseX = 0, mouseY = 0;
var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;
document.addEventListener( 'mousemove', onDocumentMouseMove, false );
document.addEventListener( 'touchmove', onDocumentTouchMove, false );
// document.addEventListener( 'keydown' , onDocumentKeyDown, false);
// document.addEventListener( 'click', click, false );
document.addEventListener( 'wheel', zoom);
window.addEventListener('resize', onWindowResize, false);
audioSfx1 = document.createElement('audio');
audioSfx1.src = 'audio_1/SFX/sfx-1.mp3';
audioSfx2 = document.createElement('audio');
audioSfx2.src = 'audio_1/SFX/sfx-2.mp3';
audioSfx3 = document.createElement('audio');
audioSfx3.src = 'audio_1/SFX/sfx-3.mp3';
audioSfx4 = document.createElement('audio');
audioSfx4.src = 'audio_1/SFX/sfx-4.mp3';
audioSfx5 = document.createElement('audio');
audioSfx5.src = 'audio_1/SFX/sfx-5.mp3';
audioSfx6 = document.createElement('audio');
audioSfx6.src = 'audio_1/SFX/sfx-6.mp3';
audioSfx7 = document.createElement('audio');
audioSfx7.src = 'audio_1/SFX/sfx-7.mp3';
var A;
var B;
var C;
var D;
var E;
var F;
var letter = 'A';
var prevLetter = letter;
var range1 = 40;
var range3 = 200;
var range4 = 125;
var size1 = 1500;
var size3 = 1500;
var size4 = 1500;
var depth1 =12000;
var depth2=8000;
var depth=depth1;
var maxCam;
var size = size1;
var range = range1;
var speed= .01;
var scrollSpeed = 300;
var sound = 0;
var dope = 1;
var fps = 1;
var hideUI=1;
var myTimer;
var myTimerVideo;
var bottomFadeIn;
var playAnim=0;
var intro=1;
var clickCheck = 0;
// var interval;
var loadBarWidth = 0;
var timerSpaceOrig = .1;
var timerSpace = timerSpaceOrig;
var once=0;
var sfxToggle=1;
var ramp = 0;
var time = Date.now() * 0.0001;
var plufPrev;
var n = 1;
var lowRes = 1;
var idleTime = 0;
var prevInt;

var raycaster;
var mouse = new THREE.Vector2(), INTERSECTED;
// var stars=[];
// var infoTexts=[];



var sceneTitleA="SKY";
var sceneTxtA="description<br>on two lines";
var sceneTitleB="WORLD";
var sceneTxtB="description<br>on two lines";
var sceneTitleC="JOURNEY";
var sceneTxtC="description<br>on two lines";
var sceneTitleD="MOONS";
var sceneTxtD="description<br>on two lines";
var sceneTitleE="ASTEROIDS";
var sceneTxtE="description<br>on two lines";

var sceneTitle = sceneTitleA;
var sceneTxt = sceneTxtA;

var query = "(-webkit-min-device-pixel-ratio: 2), (min-device-pixel-ratio: 2), (min-resolution: 192dpi)";
 
if (matchMedia(query).matches) {
  // do high-dpi stuff
  var retinaCheck = 2;
  var www = window.innerWidth/2;
  var hhh = window.innerHeight/2;

} else {
  // do non high-dpi stuff
  var retinaCheck = 1;
  var www = window.innerWidth;
  var hhh = window.innerHeight;
}

$(document).ready(function() {
$("#closeTxt").fadeOut();
// TouchEmulator();
loading();
Sound();
dataSheet();
init(false);

create(letter,range1, size, depth,1,1,1,0)
animate();







// $('#instructions').css({ left:  windowHalfX , top:   windowHalfY+200 });
$('html,body').css('cursor', 'pointer');

setTimeout( function() {
    // console.log($( "#loading" ))
    
$( "#loading" ).fadeOut( "slow", function() {
    $( "#instructions" ).fadeIn();
    $("#storyBG").css("background", "rgba(0, 0, 0, .9)"); 
    // $( "#instructions" ).fadeIn( "slow", function() {});
});

$('.q4').prop('disabled', true);
// $('.q4').css({ opacity: .3 });

var dopePerc = 61;
dopeTimeout = setInterval(function(){
        dopePerc-=1;
        $("#dopeTimeout").text("- "+dopePerc)
        // console.log($("#dopeTimeout").text())
        if(dopePerc==0){
            
            $("#dopeTimeout").remove()
            $('.q4').prop('disabled', false);
            // $('.q4').css({ opacity: .3 });
            // $('.q4').css({ opacity: "" });
            clearInterval(dopeTimeout);
        }
    }, 1000)

}, 500 );




var cont = document.getElementById('cont');
cont.onclick = function() {

    // this.clickCheck = clickCheck;
    // console.log("sdf")
if( $(window).width() < 769 ) {
    $(".mobileText").css('opacity', 0.3);
}
var dist = 1500
// console.log(num)
if(num==2) {dist = -3500};
if(playAnim == 1){
    // clearInterval(myTimer);
    // clearInterval(myTimerVideo);
    var strobo = setInterval(function(){
        n+=1
        if (n>2) n=1;
    },50)
    setTimeout(function(){
        clearInterval(strobo);
    },3000);
    raycaster.setFromCamera( mouse, camera );
        // console.log(clickCheck)
    var cluster = scene.getObjectByName( "cluster" , true)
        if (!cluster){} else {
    var int2 = raycaster.intersectObjects( cluster.children, true );
    // console.log(intersects2.length, INTERSECTED)
    // var INTERSECTED
        if ( int2.length > 0 ) {
            var INTERSECTED1;
            if ( INTERSECTED1 != int2[ 0 ].object ) {
                INTERSECTED1 = int2[ 0 ].object;
                xx = INTERSECTED1.scale.x;
                yy = INTERSECTED1.scale.y;
            new TWEEN.Tween( INTERSECTED1.scale).to({x: -xx, y: -yy},2000).easing(TWEEN.Easing.Quartic.Out).start();
        }
            // console.log(yoyo.position.x)
            // new TWEEN.Tween( INTERSECTED.position).to({ x: yoyo.position.x, y: yoyo.position.y }, 2000 ).easing(TWEEN.Easing.Quartic.InOut).start()
    }     
    }
    // playAnim=2;
    }else if(playAnim == 2){
        // video(letter);
        
    } else if (!playAnim && $(window).width() >= 769){
        // console.log("playAnim", playAnim)
        raycaster.setFromCamera( mouse, camera );
        // console.log(clickCheck)
        var cluster = scene.getObjectByName( "cluster" , true)
            if (!cluster){} else {
            var int2 = raycaster.intersectObjects( cluster.children, true );
            // console.log(intersects2.length, INTERSECTED)
            // var INTERSECTED
                if ( int2.length > 0 ) {
                    var INTERSECTED1;
                    if ( INTERSECTED1 != int2[ 0 ].object ) {
                        INTERSECTED1 = int2[ 0 ].object;
                        xx = INTERSECTED1.scale.x;
                        yy = INTERSECTED1.scale.y;
                        new TWEEN.Tween( INTERSECTED1.scale).to({x: -xx, y: -yy},2000).easing(TWEEN.Easing.Quartic.Out).start();  
                }
                    // console.log(yoyo.position.x)
                    // new TWEEN.Tween( INTERSECTED.position).to({ x: yoyo.position.x, y: yoyo.position.y }, 2000 ).easing(TWEEN.Easing.Quartic.InOut).start()
                } 
            }
        if (clickCheck==0 && $(window).width() > 769){
            var clicked = scene.getObjectByName( "pivotBtn" , true)
            if (!clicked){}else{
            var intersects = raycaster.intersectObjects( clicked.children, true );
            // console.log(intersects.length)
                if ( intersects.length > 0 ) {
                    clickCheck = 2;
                    // console.log(clickCheck)
                    var yoyo = INTERSECTED
                    timerSpace = 0;
                    
                    setTimeout(function(){
                        // console.log(yoyo.name)
                        clickCheck = 1;
                        $("#closeTxt").fadeIn(500);
                        
                    }, 2000);
                    var height = INTERSECTED.geometry.parameters.height;
                    var width = INTERSECTED.geometry.parameters.width;
                    var yy = INTERSECTED.position.y-height/350;
                    var xx = INTERSECTED.position.x-width/500;
                    // console.log("asdf")
                    new TWEEN.Tween( camera.position).to({ x: xx, y: yy, z: yoyo.position.z+dist }, 2000 ).easing(TWEEN.Easing.Quartic.InOut).start()
                } 
            }
            // var planeN = plane[];
            
        } else if (clickCheck==1 && $(window).width() > 769){
        // console.log(clickCheck, "yo1")
        // var closeClick = scene.getObjectByName( "pivotBtnClose" , true)
        // if (!closeClick){}else{  
            
            $("#closeTxt").fadeOut( "slow", function() {});
            $('html,body').css('cursor', 'default');
            new TWEEN.Tween( camera.position).to({ z: camera.position.z+15000 }, 2000 ).easing(TWEEN.Easing.Quartic.InOut).start().onComplete(function(){
                timerSpace = timerSpaceOrig;
                clickCheck = 0;
                closeClick = 0;  
            })
        }
    } else if (!playAnim && $(window).width() < 769){
        
    }
    }

    var idleInterval = setInterval(timerIncrement, 60000); // 1 minute

    //Zero the idle timer on mouse movement.
    $(this).mousemove(function (e) {
        idleTime = 0;
    });

}); // fine document.ready

function timerIncrement() {
    idleTime = idleTime + 1;
    if (idleTime > 5) { // 5 minutes
        window.location.reload();
    }
}

function onDocumentMouseMove(event) {
    event.preventDefault();
    if (num == 4){
if (event.clientY/hhh >=.1){
        // console.log("yes")
        mouseX = ( event.clientX - www/2 ) * 20;
        mouseY = ( event.clientY - hhh/2 ) * 20;
    }
    }else{
        if (event.clientY/hhh >=.1 && event.clientY/hhh <=.9 ){
        // console.log("yes")
        mouseX = ( event.clientX - www/2 ) * 20;
        mouseY = ( event.clientY - hhh/2 ) * 20;
        // console.log(mouseX)
    }
    }

    
   
    
    // $("#description").css({
    //    left:  event.clientX,
    //    top:   event.clientY
    // });

    // for hover/click
     if (clickCheck == 0){
        mouse.x = (( event.clientX / www ) * 2) / retinaCheck - 1;
        mouse.y = - (( event.clientY / hhh ) * 2) / retinaCheck + 1;

        // if (mouse.y >= .7){
        //     console.log("freese")
        // } else if (mouse.y <= -.7){
        //     console.log("freese")
        // }
    // console.log(mouse.y, mouseY, event.clientY, hhh)
    
    } else if (clickCheck==1){
        // console.log($("#closeTxt"))
    $("#closeTxt").css({
       left:  event.pageX,
       top:   event.pageY+4
    });
    $('html,body').css('cursor', 'pointer');
    }

    // if ($('#instructions')){
    //     if (intro==1){
    //         $('#instructions').css({
    //            left:  event.pageX+10,
    //            top:   event.pageY+4
    //         });
    //     } else{
    //         $('#instructions').css({
    //            left:  event.pageX+12,
    //            top:   event.pageY+34
    //         });
    //     }
    // }
    if(intro==1){
    $('html,body').css('cursor', 'pointer');
    }
}


function hoverBtn(){
    // console.log(num)
    // ramp=0;
    
    raycaster.setFromCamera( mouse, camera );

    if (playAnim == 1 || playAnim == 2){

    var cluster = scene.getObjectByName( "cluster" , true)
    // console.log(daidai)
    if (!cluster){}else{
    var int2 = raycaster.intersectObjects( cluster.children, true );
        if ( int2.length > 0 ) {
            // console.log("yes")
            var INTERSECTED2

            if ( INTERSECTED2 != int2[ 0 ].object ) {
                // console.log("yes")
                if ( INTERSECTED2 ) {
                }

                INTERSECTED2 = int2[ 0 ].object;
                scale1 = ['white', 'red', 'purple'];
                scale2 = ['red', 'yellow','purple', 'blue', 'white' ];
                scale3 = ['yellow', 'navy'];
                scale4 = 'RdYlBu';//.padding(-0.15);    
                scale1 = chroma.scale(scale3).mode('lch').domain([0, 1]);//.domain([0,1]);
                scale2 = chroma.scale('RdYlBu').padding(-0.15).domain([0, 1]);//.domain([0,1]);
                // console.log(INTERSECTED2)
                ramp +=.0008;
                    if (ramp>=1) ramp = 0;
                    // console.log(rand)
                var ss = eval("scale"+n)
                newCol = ss(ramp).hex() //chroma.random().hex();
                newColString = String(newCol)
                newColString = newColString.slice( 1 );
                newColString = "0x"+newColString
                // console.log(newColString)
                INTERSECTED2.material.color.setHex(newColString);

                if(INTERSECTED2.name == prevInt){
                    // console.log("sadf")
                } else{
                    // console.log(prevInt)
                    soundBtn();
                }
                prevInt = INTERSECTED2.name;
                // INTERSECTED2.material.opacity=1;
                // INTERSECTED2.material.color.setHex(Math.random() * 0xff0000);

                // INTERSECTED2.material.opacity=.9;
            }
        } else {
            // console.log("no")
            if ( INTERSECTED2 ) {

                console.log("out")
                // setTimeout( function() {
                INTERSECTED2.material.color.setHex(0xffffff);
                // INTERSECTED.material.opacity=.8;
            }
                INTERSECTED2 = null;
                // }, 1000 );
        }
    }

}  else if (playAnim == 0 && clickCheck == 0){

    var hover = scene.getObjectByName( "pivotBtn" , true)
    if (!hover){}else{
        
    var intersects = raycaster.intersectObjects( hover.children, true );
        if ( intersects.length > 0 ) {
            // console.log(infoText.name)
            if (once==0){ 
            soundBtn();
            once=1;
            }
            $('html,body').css('cursor', 'pointer');
            if ( INTERSECTED != intersects[ 0 ].object ) { 
                INTERSECTED = intersects[ 0 ].object;
                INTERSECTED.material.opacity=.1;

                var numText = INTERSECTED.numText;
                // console.log( numText )
                // var infoText = scene.getObjectByName( "infoText_"+numText , true)
                // infoText.visible = true
                var planeDot = scene.getObjectByName( "planeDot_"+numText , true)
                // ramp2 = Math.sin( time * 500 )/4;
                planeDot.material.opacity=0;
                var infoBoxImg = scene.getObjectByName( "infoBoxImg_"+numText , true);
                infoBoxImg.material.opacity=1;
                // var planeBig = scene.getObjectByName( "planeBig_"+numText , true)
                // planeBig.material.opacity=0;

                // var closeTxt = scene.getObjectByName( "closeTxt", true)
                // closeTxt.visible = true

                // var strip = scene.getObjectByName( "strip_"+numText, true)
                // strip.material.opacity=.2;
            }
        } else {
            $('html,body').css('cursor', 'default');
            // console.log("no")
            if ( INTERSECTED ) {
                // $('html,body').css('cursor', 'auto');
                INTERSECTED.material.opacity=0;

                var numText = INTERSECTED.numText;
                // var infoText = scene.getObjectByName( "infoText_"+numText , true)
                // infoText.visible = false;
                var planeDot = scene.getObjectByName( "planeDot_"+numText , true)
                planeDot.material.opacity=1;
                var infoBoxImg = scene.getObjectByName( "infoBoxImg_"+numText , true);
                infoBoxImg.material.opacity=0;
        
                once=0;
                // var closeTxt = scene.getObjectByName( "closeTxt" , true)
                // closeTxt.visible = false

                // var strip = scene.getObjectByName( "strip_"+numText , true)
                // strip.material.opacity=0;
            }

            INTERSECTED = null;
        }




 var cluster = scene.getObjectByName( "cluster" , true)
    // console.log(daidai)
    if (!cluster){}else{
    var int2 = raycaster.intersectObjects( cluster.children, true );
        if ( int2.length > 0 ) {
            // console.log("yes")
            var INTERSECTED2
            if ( INTERSECTED2 != int2[ 0 ].object ) {
                // console.log("yes")
                if ( INTERSECTED2 ) {
                // setTimeout( function() {
                // INTERSECTED2.material.color.setHex(0xffffff);
                // INTERSECTED2.material.opacity=.8;
                // INTERSECTED2 = null;
                // }, 1000 );
                    // INTERSECTED.material.opacity=.8;
                    // INTERSECTED.material.color.setHex(0xffffff);
                }

                INTERSECTED2 = int2[ 0 ].object;
                // console.log(INTERSECTED2.name);
                var pluf = INTERSECTED2.name;
                // INTERSECTED2.currentHex = INTERSECTED2.material.color.getHex();
                // var scale = chroma.scale('Spectral').colors(50);
                scale = chroma.scale(['white','fcff8f', '#c6c888', 'd1d2ad']).domain([0,1]); // sepia per LOW/HIGH
                // scale(0.5).hex(); // #FF7F7F
                // console.log(scale(0.5).hex())
                var rand = (Math.random() * 1);
                    rand = rand.toFixed(1)
                    // console.log(rand)
                // ramp = Math.sin( time * 5 );
                ramp = (Math.sin(time*5) + 1) / 2.0;
                    // if (ramp>=1) ramp = 0;
                    // console.log(ramp)
                newCol = scale(ramp).hex() //chroma.random().hex();
                newColString = String(newCol)
                newColString = newColString.slice( 1 );
                newColString = "0x"+newColString
                // console.log(newColString)
                INTERSECTED2.material.color.setHex(newColString);
                // INTERSECTED2.material.color.setHex(Math.random() * 0xff0000);

                INTERSECTED2.material.opacity=.5;
                // console.log(mouseX)
                if (pluf != plufPrev){
                    var xx = INTERSECTED2.position.x;
                    var yy = INTERSECTED2.position.y;
                    ramp2 = Math.sin( time * 5 )*2000;
                    // console.log(ramp2)
                    // var angle = Math.rand()*300;
                    new TWEEN.Tween( INTERSECTED2.position).to({ x: xx+ramp2}, 7000 ).easing(TWEEN.Easing.Quartic.Out).start();
                }
                plufPrev = pluf;
                // INTERSECTED2.position.x+=200;
                // INTERSECTED2.position.x+=200;
            }
        } else {
            // console.log(INTERSECTED2)
            if ( INTERSECTED2 ) {
                // setTimeout( function() {
                INTERSECTED2.material.color.setHex(0xffffff);
                // INTERSECTED.material.opacity=.8;
            }
                INTERSECTED2 = null;
                // }, 1000 );
     
        
        }
    }


} 

    }
}




function init(quality) {



    if( $(window).width() < 769 ) {
      sound = 1;
    }    
    
    

    // container = document.createElement( 'div' );
    // container.setAttribute("id", "cont");
    container = document.querySelector('#cont');
    document.body.appendChild( container );
    // container.setAttribute("id", "cunt");
    camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 100000 );
    camera.position.z=6000;
    if ($(window).width() < 769){
        camera.position.z=-8000;
    }
    scene = new THREE.Scene();

    scene.background = new THREE.Color( 0x010101);
    scene.name="scene";


    renderer = new THREE.WebGLRenderer( { antialias: quality } );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( www, hhh );
    container.appendChild( renderer.domElement );
    renderer.domElement.setAttribute("class", "canvas");
    

    // sceneTitle = eval('sceneTitle'+letter);
    // sceneTxt = eval('sceneTxt'+letter);
    // // console.log(sceneTitle)
    // $('#description p').text(sceneTitle);
    // $('#description span').html(sceneTxt);

    $('.ssA').css({'visibility':'visible'});

    

}





function create(letter, range, size, depth, dope, fps, num, zzz) {
    // clearTimeout(interval);
    raycaster = new THREE.Raycaster();
    this.letter=letter;
    this.range=range;
    this.depth=depth;
    this.dope=dope;
    this.fps=fps;
    this.num=num;
    // console.log(dope);
    if(dope==2){   
        if (fps>1){camera.position.z=50000;maxCam=70000; }
        else {camera.position.z=30000;maxCam=50000; }
    }else if(dope==1){
        // console.log("asdf")
        maxCam=20000;
        if (camera.position.z>=20000){
            camera.position.z=6000;
        }
        if ($(window).width() < 769){
        camera.position.z=20000;
    }
    }
    addStars();

    cluster = new THREE.Object3D();
    cluster.name="cluster"

    scene.add(cluster);

    for ( var i = 1; i < range+1; i ++ ) {
        // console.log(i);
    var rand = Math.floor(Math.random() * 250) + 1  ;
    var texture = (new THREE.TextureLoader).load('raw/'+letter+'/Cassini_'+letter+'_'+rand+'.jpg');
    var img = new THREE.MeshBasicMaterial({
    map:texture,
    transparent: true,
    opacity: 0.7});

    // console.log(i*rX);
    var plane = new THREE.Mesh(new THREE.PlaneGeometry(size, size),img);
    plane.overdraw = true;
    plane.position.x = Math.random() * 40000*dope- (20000*dope);
    plane.position.y = Math.random() * 24000*dope - (12000*dope);
    plane.position.z = Math.random() * depth*dope*dope/100 - depth-1000;
    plane.scale.x = plane.scale.y = plane.scale.z = Math.random() * 4 + 2;
    plane.name="plane_"+i

    cluster.add(plane);
    // plane.push();

    }    
    cluster.position.z=15000;
    scene.matrixAutoUpdate = false;

    // $('.btn').css({'pointer-events': 'all'}); 

    
    if (fps>1){
    // $("#animation").show();
    // myTimerVideo = setTimeout( function() { video(letter); }, 2500 );
    }else{
        if ($(window).width() > 769){
        addText(letter, num, zzz);
    }
    }

    
}




function addText(letter, num, zzz){
    this.num=num;
    this.cluster=cluster;
    // this.range = num;
    pivotText = new THREE.Object3D();
    pivotText.name="pivotText";
    scene.add( pivotText );


    pivotBtn = new THREE.Object3D();
    pivotBtn.name="pivotBtn";
    pivotText.add( pivotBtn );

    pivotBtnClose = new THREE.Object3D();
    pivotBtnClose.name="pivotBtnClose";
    pivotText.add( pivotBtnClose );


    // var loader = new THREE.FontLoader();
    // loader.load( 'font/Rajdhani_SemiBold.json', function ( font ) {

        var mat = new THREE.MeshBasicMaterial( {
            color: 0x000000,
            transparent: true,
            opacity: 0.8
            // visible: false
        } );

        kk=0
        for ( var k= 1; k < 11; k+=1 ) {
        kk+=1

        var infoText = new THREE.Object3D();   
        // var textShape = new THREE.BufferGeometry();        
        // var message = eval("A"+kk);
        // var shapes= font.generateShapes( message, 50);
        // var geometry = new THREE.ShapeGeometry( shapes );
        
        // geometry.computeBoundingBox();
        // xMid = - 0.5 * ( geometry.boundingBox.max.x - geometry.boundingBox.min.x );
        // geometry.translate( xMid, 0, 0 );
        // // THREE.GeometryUtils.center( geometry );
        // geometry.center();

        // // make shape ( N.B. edge view not visible )
        // textShape.fromGeometry( geometry);
        // infoText = new THREE.Mesh( textShape, mat );
        if (dope==1){
            var z = Math.floor(Math.random() * 6000) - (14000/num);
        } else{
            var z = Math.floor(Math.random() * 6000) - 5000;
        }
        // // console.log(infoText)
        infoText.position.z = z;
        infoText.position.x = Math.random() * 40000*dope- (20000*dope);
        infoText.position.y = Math.random() * 20000*dope- (10000*dope);
        // // text.position.z = z*(dope*2)-25000+(dope*20000)+(fps*1000);
        // // text.position.x = k*30;
        
        // infoText.name="infoText_"+k;
        // // infoText.opacity=0.2;
        // // $( infoText ).fadeIn( "slow", function() {});
        // pivotText.add( infoText );
        // infoText.visible=false;




        geometry = new THREE.PlaneGeometry(100,40, 1,1)
        material = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.8
        });
        planeDot = new THREE.Mesh(geometry, material);
        planeDot.position.x = infoText.position.x-0;
        planeDot.position.y = infoText.position.y-55;
        planeDot.position.z = z+10;
        planeDot.name="planeDot_"+k;
        pivotBtnClose.add(planeDot);


        // geometry2 = new THREE.PlaneGeometry(1000,10, 1,1)
        // material2 = new THREE.MeshBasicMaterial({
        // color: 0xff0000,
        // transparent: true, 
        // opacity: 1
        // });
        // strip = new THREE.Mesh(geometry2, material2);
        // strip.position.x = infoText.position.x+5;
        // strip.position.y = infoText.position.y+50;
        // strip.position.z = z-8;
        
        // strip.numText = k;
        // strip.name="strip_"+k;
        // // planeBG.scale.set(5,5,5)
        // // pivotText.add(strip);
        // // planeBG.visible = false;

        
        
        geometry3 = new THREE.PlaneGeometry(1000,700, 1,1)
        material3 = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0
        });
        // var SubdivisionModifier = require('three-subdivision-modifier');
        // var modifier = new SubdivisionModifier( 222 ); // Number of subdivisions
        // modifier.modify( geometry3 ); // Modifies geometry in place
        planeBG = new THREE.Mesh(geometry3, material3);
        planeBG.position.x = infoText.position.x+5;
        planeBG.position.y = infoText.position.y-20;
        planeBG.position.z = z-44;
        planeBG.name="planeBG_"+k;
        planeBG.numText = k;
        planeBG.visible = false;
        // planeBG.scale.set(5,5,5)
        pivotBtn.add(planeBG);

        // geometry4 = new THREE.PlaneGeometry(2000,1400, 1,1)
        // material4 = new THREE.MeshBasicMaterial({
        // color: 0xffffff,
        // transparent: true,
        // opacity: 0.1
        // });
        // planeBig = new THREE.Mesh(geometry4, material4);
        // planeBig.position.x = infoText.position.x-500;
        // planeBig.position.y = infoText.position.y-350;
        // planeBig.position.z = z-42;
        // planeBig.name="planeBig_"+k;
        // planeBig.numText = k;
        // planeBig.visible = false;
        // // planeBG.scale.set(5,5,5)
        // pivotBtn.add(planeBig);

        

        // console.log(infoText, geometry)
        // $( "infoText_"+k ).hover(
        //     function() {
        //     console.log(message)
        // })

        // infoText.onclick=function(){
        //     console.log(message)
        // }
        // console.log(letter)
        var rrr = kk;
        // console.log(rrr, kk)
        var texture = (new THREE.TextureLoader).load('infobox/Infobox_'+letter+'_'+rrr+'.png');
        var img = new THREE.MeshBasicMaterial({
        map:texture,
        transparent: true,
        opacity: 0,
        alphaTest: 0.1
        });

        // console.log(i*rX);
        var rX = 2048;
        var rY = 1024;
        var infoBoxImg = new THREE.Mesh(new THREE.PlaneGeometry(rX, rY),img);
        infoBoxImg.overdraw = true;
        infoBoxImg.position.x = infoText.position.x+5;
        infoBoxImg.position.y = infoText.position.y-20;
        infoBoxImg.position.z = z+22;
        // infoBoxImg.scale.x = plane.scale.y = plane.scale.z = Math.random() * 4 + 2;
        infoBoxImg.name="infoBoxImg_"+k;
        infoBoxImg.numText = k;
        // infoBoxImg.visible = false;

        pivotBtn.add(infoBoxImg);



        if(kk==10){
            kk=0;
        }
        }



//         setTimeout( function() {
//     // console.log($( "#instructions" ))
// $( "#instructions" ).fadeOut( "slow", function() {});
//     }, 2000 );


      // });
   

// console.log(zzz)
        pivotText.position.z=30000;
        if(intro!=1){
            // console.log(cluster)
        // cluster=this.cluster;
        // new TWEEN.Tween( pivotText.position).to({ x: 0, y: 0, z: zzz }, 7000 ).easing(TWEEN.Easing.Quartic.InOut).start();

        new TWEEN.Tween( cluster.position).to({ x: 0, y: 0, z: 0 }, 4000 ).easing(TWEEN.Easing.Quartic.InOut).start().onComplete(function() {
              new TWEEN.Tween( pivotText.position).to({ x: 0, y: 0, z: zzz }, 4000 ).easing(TWEEN.Easing.Quartic.InOut).start();
          });
               
        }
        // loadBar()
        // return(num)
}






function addStars(){
    pivot = new THREE.Object3D();
    pivot.name="pivot";
    scene.add( pivot );

    if (dope==1){
    var size = 10;
    }else{
     var size =  25;  
    }

    for ( var z= -10000; z < 5000; z+=100 ) {
      var geometry = new THREE.SphereGeometry( size,0 );
      var material = new THREE.MeshBasicMaterial( { color: 0xaaa98c, transparent:true, opacity:.8 } );
      // var starGroup;
      var star = new THREE.Mesh(geometry, material)
      star.position.x = Math.random() * 70000*dope- (35000*dope);
      star.position.y = Math.random() * 40000*dope- (20000*dope);
      star.position.z = z*(dope*2)-25000+(dope*20000)+(fps*1000);
    // star.scale.x = star.scale.y = 2;

    star.name="star";
    pivot.add( star );
    // stars.push(star);

    }
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
    
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    if (retinaCheck == 1){
            windowHalfX = window.innerWidth / 2;
            windowHalfY = window.innerHeight / 2;
            www = windowHalfX*2;
            hhh = windowHalfY*2;
        renderer.setSize( window.innerWidth, window.innerHeight );
        } else {
            windowHalfX = window.innerWidth / 4;
            windowHalfY = window.innerHeight / 4;
            www = windowHalfX*2;
            hhh = windowHalfY*2;
        renderer.setSize( window.innerWidth/2, window.innerHeight/2 );
        }
}








function onDocumentTouchMove(event) {
    $(".mobileText").css('opacity', 0.1);
    // camera.position.z=30000;
    var touch = event.touches[0];
    var x = touch.pageX;
    var y = touch.pageY;
    // console.log(x);
    mouseX = ( x - windowHalfX ) * 300;
    mouseY = ( y - windowHalfY ) * 300;


    // console.log(mouseX);
}
// function onDocumentKeyDown(event) {
//     // console.log(hideUI)
//     this.hideUI=hideUI;
//     var keyCode = event.which;
//     if (keyCode == 32) {
//         // $(".ui").hide();
//         if (hideUI==1){
//             $(".ui").hide();
//             hideUI=0;
//         } else if (hideUI==0){
//             $(".ui").show();
//             hideUI=1;
//         }
    
//     };

// }

//
function animate() {
     TWEEN.update();
     // console.log(camera.position.x)
     pivot.rotation.y+=.0001;
    requestAnimationFrame( animate );
    // composer.render(clock.getDelta());
    // controls.update();
    render();
    stats.update();
}
function render() {
 time = Date.now() * 0.0001;
    // console.log(mouseY, windowHalfY)
    // if (mouseY >= 8000 ){
    //     console.log("freeze")
    //     // mouseY = 8000
    // }else if (mouseY<=-8000){
    //     mouseY = -8000
    //     console.log("freeze")
    // }
    var distX = 16000;
    var distY = 10000;
    // console.log(camera.position.x)
    if (clickCheck == 0){
        if(camera.position.x>-distX && camera.position.x<distX ){
            camera.position.x += ( mouseX - camera.position.x ) * speed;
            // camera.rotation.x += ( - mouseY + camera.rotation.x ) * .000001;
        }else if (camera.position.x<-distX){
            camera.position.x = -distX+1

        }else if (camera.position.x>distX){
            camera.position.x = distX-1

        }
        if(camera.position.y>-distY && camera.position.y<distY ){
        camera.position.y += ( - mouseY - camera.position.y ) * speed;
        // camera.rotation.y += ( - mouseX + camera.rotation.y ) * .000001;
        }else if (camera.position.y<-distY){
            camera.position.y = -distY+1

        }else if (camera.position.y>distY){
            camera.position.y = distY-1

        }
    }
    
    if( $(window).width() > 769 ) {
      hoverBtn();
    } 
    // console.log(intro, playAnim)
    renderer.render( scene, camera );
}