document.addEventListener('keydown',function(e){
    var key = e.key;
    if(key === 'a'){
        document.getElementById('audio-1').play();
        document.getElementById('key-a').classList.add('shadow');
    }
    else if(key === 's'){
        document.getElementById('audio-2').play();
        document.getElementById('key-s').classList.add('shadow');
    }
    else if(key === 'd'){
        document.getElementById('audio-3').play();
        document.getElementById('key-d').classList.add('shadow');
    }
    else if(key === 'f'){
        document.getElementById('audio-4').play();
        document.getElementById('key-f').classList.add('shadow');
    }
    else if(key === 'g'){
        document.getElementById('audio-5').play();
        document.getElementById('key-g').classList.add('shadow');
    }
    else if(key === 'h'){
        document.getElementById('audio-6').play();
        document.getElementById('key-h').classList.add('shadow');
    }
    else if(key === 'j'){
        document.getElementById('audio-7').play();
        document.getElementById('key-j').classList.add('shadow');
    }
    else if(key === 'k'){
        document.getElementById('audio-8').play();
        document.getElementById('key-k').classList.add('shadow');
    }
    else if(key === 'l'){
        document.getElementById('audio-9').play();
        document.getElementById('key-l').classList.add('shadow');
    }
})
document.addEventListener('keyup', function(e){
    document.getElementById('key-a').classList.remove('shadow');
    document.getElementById('key-s').classList.remove('shadow');
    document.getElementById('key-d').classList.remove('shadow');
    document.getElementById('key-f').classList.remove('shadow');
    document.getElementById('key-g').classList.remove('shadow');
    document.getElementById('key-h').classList.remove('shadow');
    document.getElementById('key-j').classList.remove('shadow');
    document.getElementById('key-k').classList.remove('shadow');
    document.getElementById('key-l').classList.remove('shadow');
})