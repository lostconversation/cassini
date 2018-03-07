function qualityCheck(num,range,letterN, size, depth, dope, fps) {
    $('.btn').css({'pointer-events': 'none'}); 
    // console.log(this.myTimer);
    // clearInterval(hoverBtn);
    clearInterval(myTimer);
    clearInterval(myTimerVideo);
    clearTimeout(loadingDots);
    clearInterval(loadBarId);
    loadBarId=0;
    loadBarWidth = 0;
    // console.log(id)
    // console.log($( "#back" ))
    
    // .fadeIn( "slow", function() {});
    
    window.num = num;
    $( "#closeTxt" ).fadeOut( "slow", function() {});
    clickCheck = 0;
    closeClick = 0; 
    // console.log(num)
    loading();
    $(".bottom").show();
    var pos = $(".s"+letter).position();
    var width = $("#description").outerWidth();
    $("#description").css({
        position: "absolute",   
        left: (pos.left - width/2+57) + "px"
    });
    this.letter=letter;
    var sX ='.s'+prevLetter;
    var sN ='.s'+letter;
    // console.log(prevLetter);
    // console.log(sX);
    $(sX).removeAttr('id', 'focusS');
    $(sN).attr('id', 'focusS');
    prevLetter=letter;

    // console.log(letter)
    sceneTitle = eval('sceneTitle'+letter);
    sceneTxt = eval('sceneTxt'+letter);
    // console.log(sceneTitle)
    // $('#description p').text(sceneTitle);
    // $('#description span').html(sceneTxt);

    // $('.ss'+prevLetter).css({visibility:"hidden"});
    $('.ss'+letter).css({visibility:"visible"});

    // var pos = $(".s"+letter).position();
    // var width = $("#description").outerWidth();
    // $("#description").css({
    //     position: "absolute",   
    //     left: (pos.left - width/2+57) + "px"
    // });
     var zzz=0;
        // $("#statsDiv").remove();
        playAnim=0;
        if(intro==2){
        $( "#intro" ).hide();
        intro=0;}else{
            $( "#intro" ).show();
        }
        // $("#statsDiv").remove();
        $(".canvas").remove();
        if(num==1){
        init(false);
        $('.q2').removeAttr('id', 'focusQ');
        $('.q3').removeAttr('id', 'focusQ');
        $('.q4').removeAttr('id', 'focusQ');
        $('.q1').attr('id', 'focusQ'); 
        // $( "#back" ).text("LOW RES")
        $('.q1').text('LOW RES').css({visibility:"visible"}); 
        $('.q3').text('HIGH RES').css({visibility:"visible"});  
        lowRes=1;
        $(".bottom").show();
        // $( "#back" ).css({position: "absolute", left: "22px" });
        zzz = -500;
        }else if(num==3){
            init(true);
        $('.q1').removeAttr('id', 'focusQ');
        $('.q4').removeAttr('id', 'focusQ');
        $('.q3').attr('id', 'focusQ');
        $(".bottom").show();
        $('.q1').text('LOW RES').css({visibility:"visible"}); 
        $('.q3').text('HIGH RES').css({'visibility': 'visible', 'margin-left':'160px'}); 
        lowRes=0;
        // $( "#back" ).text("HIGH RES")
        // $( "#back" ).css({position: "absolute", left: "172px" });
        zzz = 0;
        }else if(num==4){
            init(true);
        $('.q1').removeAttr('id', 'focusQ');
        $('.q2').removeAttr('id', 'focusQ');
        $('.q3').removeAttr('id', 'focusQ');
        $('.q4').attr('id', 'focusQ');
        // $('#animation').css({'background: linear-gradient(red, yellow)'}); 
        $(".bottom").hide();
        $("#animation").show();
        $( "#back" ).show();
        this.lowRes = lowRes
        if (lowRes == 1){
            $(".q1").text("BACK");$(".q3").css({visibility:"hidden"})
        } else {$(".q1").css({visibility:"hidden"});$(".q3").text("BACK").css({'margin-left':'10px'});}

        // myTimerVideo = setTimeout( function() { video(letter); }, 5500 );
        }
        // console.log(this.myTimer);
        // setTimeout( function() { video(letter); }, 1000 );

        

        setTimeout( function() {
        $( "#instructions" ).fadeOut( "slow", function() {});
        $( "#storyBG").css("background", "rgba(0, 0, 0, 1)"); 
        $( "#storyBG" ).fadeIn( "slow", function() {});
        $( "#intro" ).hide();
        $( "#loading").css({'padding-top':'', 'bottom':'50%'}); 
        $( "#loading" ).fadeIn( "slow", function() {});
    }, 200 );

        setTimeout( function() {
        removeEntity();    
        // console.log(zzz)
        create(letterN, range, size, depth, dope, fps, num, zzz); 

        if (fps==1){
        var pT = scene.getObjectByName("pivotText");
        pT.position.z=0;
        }

        setTimeout( function() {
            if (fps>1){
                setTimeout( function() {$( "#storyBG" ).fadeOut( "slow", function() {video(letter)});}, 1000 );
            }else{
               $( "#storyBG" ).fadeOut( "slow", function() {}); 
            }
        // $( "#storyBG" ).fadeOut( "slow", function() {});
        $( "#loading" ).fadeOut( "slow", function() {});

        if(num==4){
            // $("#loadBar").hide()
            document.getElementById("myBar").style.width="100%";
        }else{
            clearInterval(loadBarId);
            loadBarId=0;
            loadBarWidth = 0;
            // $("#loadBar").show()
            document.getElementById("myBar").style.width="0%";

        loadBar(window.timerSpace);}
        $('.btn').css({'pointer-events': 'all'}); 
        }, 500 );

    }, 500 );



}




function changeScene(letter){

    // console.log($("#story"));
    // console.log($(".s"+letter).position());
    // this.letter = letter;
    sceneTitle = eval('sceneTitle'+letter);
    sceneTxt = eval('sceneTxt'+letter);
    // console.log(sceneTitle)
    $('.ss'+prevLetter).css({visibility:"hidden"});
    $('.ss'+letter).css({visibility:"visible"});
    // $('.ss'+letter+':focus').css({outline:"none"});
    
    // $('#description p').text(sceneTitle);
    // $('#description span').html(sceneTxt);

    // var pos = $(".s"+letter).position();
    // var width = $("#description").outerWidth();
    // console.log(pos.left)
    // $("#description").css({
    //     position: "absolute",   
    //     left: (pos.left - width/2+40) + "px"
    // });


    this.letter=letter;
    var sX ='.s'+prevLetter;
    var sN ='.s'+letter;
    // console.log(prevLetter);
    // console.log(sX);
    $(sX).removeAttr('id', 'focusS');
    $(sN).attr('id', 'focusS');
    prevLetter=letter;
    // console.log(prevLetter)
    // console.log(prevLetter);
    for ( var i = 1; i < range+1; i ++ ) {
        var rand = Math.floor(Math.random() * 250) + 1  ;
        // var img = new THREE.MeshBasicMaterial({
        var object = scene.getObjectByName( "plane_"+i );

        var material;

        object.material.map = (new THREE.TextureLoader).load('raw/'+letter+'/Cassini_'+letter+'_'+i+'.jpg');
        object.material.needsUpdate = true;

        // var texture = (new THREE.TextureLoader).load('infobox/infobox_'+letter+'_1.png');
    }
    for ( var j = 1; j < 11; j ++ ) {
        // var img = new THREE.MeshBasicMaterial({
        var object = scene.getObjectByName( "infoBoxImg_"+j );
        var rrr = j;
        
        var material;
        object.material.map = (new THREE.TextureLoader).load('infobox/Infobox_'+letter+'_'+rrr+'.png');
        // console.log(rrr)
        object.material.needsUpdate = true;



        
    }
    // prevLetter=letter;
    // return(letter);

    clearInterval(loadBarId);
    loadBarId=0;
    loadBarWidth = 0;
    $("#myBar").css("width:0%")
    loadBar(window.timerSpace)
    
}

function video(letter){
    $( "#animation" ).fadeOut( "slow", function() {});  
    // console.log(letter);
    // clearInterval(myTimerVideo);
    // console.log(letter)
    this.letter=letter;
    
    // console.log(letter)
    // // console.log(letter);
    var i = 1;
    var z = i;
    var ten = 0;
    var remainder=0;
    // for (i = 1; i < 10; i++) { 
    // console.log(letter);
        
         myTimer = setInterval( function() {
            
            playAnim=1;
            // console.log(rand);
            // var rand = Math.floor(Math.random() * 250) + 1  ;
            // console.log(i);
            
            remainder = i % range;
            
            if (remainder == 0){
                ten+=1;
                z = 15;
                // console.log(ten, z)
            } else {
                z=remainder;
            }
            // console.log(z,i,remainder)
            var object = scene.getObjectByName( "plane_"+z);
            var material;
            object.material.map = (new THREE.TextureLoader).load('raw/'+letter+'/Cassini_'+letter+'_'+i+'.jpg');
            object.material.needsUpdate = true;
            i+=1;
            // console.log(letter)
            if (i>=251){
                if (letter =='A'){
                    letter = 'B';
                } else if (letter =='B'){
                    letter = 'C';
                } else if (letter =='C'){
                    letter = 'D';
                } else if (letter =='D'){
                    letter = 'E';
                } else if (letter =='E'){
                    letter = 'A';
                } 
                clearInterval(myTimer);
                video(letter);
                i=1;
            }

    }, 150/fps );
        this.myTimer=myTimer;
        // this.myTimer = myTimer;
        // return(myTimer)
}

function removeEntity() {

    // var selectedObject1 = scene.getObjectByName(scene.name);
    // scene.remove(selectedObject1);
    
while(scene.children.length > 0){ 
    scene.remove(scene.children[0]); 
}



}




function soundBtn(){
    this.sfxToggle = sfxToggle;
    // console.log(sfxToggle)
    var rand = Math.floor(Math.random() * 7+1);
    var audioSfxReal = eval("audioSfx"+sfxToggle)
    // console.log(audioSfxReal)
    // audioSfxReal.src = audioSfxArray[rand];
    // console.log(audioSfxReal.src)
    audioSfxReal.volume=1;
    audioSfxReal.play(); 
    sfxToggle++;
    if(sfxToggle==8){sfxToggle=1;}
    // console.log(sfxToggle, rand) 

}


function Sound() {
    // this.name = name;
    // audio = scene.getObjectById( 'audio');
    audio = document.createElement('audio');

    var rand = Math.floor(Math.random() * 2)+1;
    audio.src = 'audio_1/Cassini_'+rand+'.mp3';
    audio.volume=.8;
    audio.loop=false;
    audio.onended = function() {
    rand+=1;
    if (rand == 3){ rand=1;}
    audio.src = 'audio_1/Cassini_'+rand+'.mp3';
    audio.volume = .3;
    audio.play();
    };
    container = document.querySelector('#cont');
    stats = new Stats();
    container.appendChild( stats.dom );
    $("#statsDiv").hide();


    // audioSfx = document.createElement('audio');
    // audioSfxArray = new Array;
    // for ( var i = 1; i < 8; i ++ ) {
    // audioSfxArray.push('audio_1/SFX/sfx-'+i+'.mp3');
    // }

  }

function playSound(sound){

    this.sound=sound;
    // console.log(sound)
    if (sound==1){
        this.audio.pause();
        this.sound=0;
        $('.s0').fadeIn();
        // $('.soundIco').attr('xlink:href', 'img/sound_no.svg');
        $('.soundIco').removeAttr('id', 'focusP');
        // $('.s1').removeAttr('id', 'focusP');
    }else if (sound==0){
        this.audio.play();  
        this.sound=1;
        $('.s0').fadeOut();
        $('.soundIco').attr('id', 'focusP');
    }
}   


