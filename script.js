console.log('Welcome to spotify')
// Initialize the variables
let songs = [
    { songname: 'Mario - Mortals', coverpath: 'covers/1.jpg', songpath: 'songs/1.mp3' },
    { songname: 'Cielo - Huma-Huma', coverpath: 'covers/2.jpg', songpath: 'songs/2.mp3' },
    { songname: 'DEAF KEV - Invincible', coverpath: 'covers/3.jpg', songpath: 'songs/3.mp3' },
    { songname: 'Different Heaven - My Heart', coverpath: 'covers/4.jpg', songpath: 'songs/4.mp3' },
    { songname: 'Janji-Heros-Tonight', coverpath: 'covers/5.jpg', songpath: 'songs/5.mp3' },
    { songname: 'Mastoon-ka-jhund', coverpath: 'covers/6.jpg', songpath: 'songs/6.mp3' },
    { songname: 'Wow-Post Malone', coverpath: 'covers/7.jpg', songpath: 'songs/7.mp3' },
    { songname: 'Stargazing-Travis Scott', coverpath: 'covers/8.jpg', songpath: 'songs/8.mp3' },
    { songname: 'Shiv Tandav Strotam', coverpath: 'covers/9.jpg', songpath: 'songs/9.mp3' },
    { songname: 'Kohinoor - Divine', coverpath: 'covers/10.jpg', songpath: 'songs/10.mp3' },
]

let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let myProgressBar = document.getElementById('myProgressBar');
let masterPlay = document.getElementById('masterPlay');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItems'));
// Array.from has to be used because it says that songItems.forEach is not a function
// which means that html element ko forEach loop mei dalne ke liye Array.from use karna padega 


// Listen to the events
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
});
// timeupdate is a built in event listner
audioElement.addEventListener('timeupdate', () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    // .currenttime will show the current time at which the audio is being played
    // .duratiion will show the length of the audio
    // we need the percentage of the song played 
    // console.log(progress);
    myProgressBar.value = progress;
    // document.getElementById('timestamp').innerHTML = audioElement[songIndex].duration

});

// When we change the progressbar 
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = (myProgressBar.value * audioElement.duration / 100)
});


// appending all the songs in the song list 
songItems.forEach((element, i) => {
    console.log(element, i);
    element.getElementsByTagName('img')[0].src = songs[i].coverpath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songname;
});




makeAllPlay = () => {
    playbutton.forEach((element) => {
        element.classList.remove('fa-circle-pause')
        element.classList.add('fa-circle-play')
        
    });
}

let playbutton = Array.from(document.getElementsByClassName('playbutton'));
playbutton.forEach((element) => {
    element.addEventListener('click', (e) => {
        // console.log(e.target.id)
        songIndex = parseInt(e.target.id)
        makeAllPlay()
        e.target.classList.remove('fa-circle-play')
        e.target.classList.add('fa-circle-pause')
        audioElement.src = `songs/${songIndex + 1}.mp3`
        audioElement.currentTime = 0;
        audioElement.play()
        document.getElementById('masterSongPlay').innerHTML = songs[songIndex].songname
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
});


document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`
    audioElement.currentTime = 0;
    audioElement.play()
    document.getElementById('masterSongPlay').innerHTML = songs[songIndex].songname
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})


document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 9;
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`
    audioElement.currentTime = 0;
    audioElement.play()
    document.getElementById('masterSongPlay').innerHTML = songs[songIndex].songname
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

})

