queue = []

function startPlayer() {
    console.log(JSON.stringify(queue))
        if (queue.length != 0) {
            document.getElementById("audio-player").src = indexObject.albums[queue[0].releaseID].tracks[queue[0].trackID].url
            document.getElementById("audio-player").play()
            document.getElementById("media-player-title").innerHTML = indexObject.albums[queue[0].releaseID].tracks[queue[0].trackID].name
            document.getElementById("media-player-subtext").innerHTML = indexObject.albums[queue[0].releaseID].name
            document.getElementById("media-player-image").src = indexObject.albums[queue[0].releaseID].image
            queue.shift()
        } else {
            document.getElementById("media-player-title").innerHTML = "Nothing Playing"
            document.getElementById("media-player-subtext").innerHTML = "Select a song or album to start playing"
            document.getElementById("media-player-image").src = ""
        }
}

document.getElementById("audio-player").onended = function() {
    startPlayer()
}

document.body.onkeyup = function(e) {
    if (e.key == " " ||
        e.code == "Space" ||      
        e.keyCode == 32      
    ) {
        if (document.getElementById("audio-player").paused == true) {
            document.getElementById("audio-player").play()
        } else {
            document.getElementById("audio-player").pause()
        }
      
    }
  }

width = window.innerWidth
console.log(width)
if (width < 1100) {
    document.getElementById("primary-promotional-section-right").hidden = true
    document.getElementById("primary-promotional-section-left").style.paddingLeft = "10px"
} else {
    document.getElementById("primary-promotional-section-right").hidden = false
    document.getElementById("primary-promotional-section-left").style.paddingLeft = "80px"
}

window.onresize = function () {
    width = window.innerWidth
    console.log(width)
    if (width < 1100) {
        document.getElementById("primary-promotional-section-right").hidden = true
        document.getElementById("primary-promotional-section-left").style.paddingLeft = "10px"
        document.getElementById("media-player-title").style.fontSize = "20px"
    } else {
        document.getElementById("primary-promotional-section-right").hidden = false
        document.getElementById("primary-promotional-section-left").style.paddingLeft = "80px"
        document.getElementById("media-player-title").style.fontSize = "33px"
    }
}

function downloadSongs(albumIndex) {
    window.location.href = indexObject.albums[albumIndex].downloadURL
}