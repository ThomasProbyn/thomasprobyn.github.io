queue = []

albumIndex = 0

window.addEventListener("load", (event) => {
    document.getElementById("album-main-title-text").innerHTML = indexObject.albums[albumIndex].name
    document.getElementById("album-main-release-date").innerHTML = indexObject.albums[albumIndex].data.season + " " + indexObject.albums[albumIndex].data.year
    albumQueueObjectArray = []
    // dynamically place all contents on page
    for (i = 0; i < indexObject.albums[albumIndex].tracks.length; i++) {
        //For every track in the album
        if (i == 0) {
            styleData = "style=\"margin-top: 70px;\""
        } else {
            if (i == indexObject.albums[albumIndex].tracks.length-1) {
                styleData = "style=\"margin-bottom: 100px;\""
            } else {
                styleData = ""
            }
        }
        if (i != indexObject.albums[albumIndex].tracks.length-1) {
            divider = "<hr class=\"song-list-divider\"></hr>"
        } else {
            divider = ""
        }

        
        document.getElementById("primary-promotional-section-left").innerHTML =  document.getElementById("primary-promotional-section-left").innerHTML + '<h2 class="primary-text-colour primary-text-font song-list-title" ' + styleData + ' onclick="queue=[];queue.push({\'releaseID\':' + albumIndex + ',\'trackID\':' + i + '});startPlayer()">' + (i+1) + '. ' + indexObject.albums[albumIndex].tracks[i].name + '</h2>'+ divider +''
        albumQueueObjectArray.push({'releaseID':albumIndex, 'trackID':i})
    }
    document.getElementById("main-album-controls").innerHTML =  document.getElementById("main-album-controls").innerHTML + ' <img class="icon-play" src="./rsc/icon/icon-play-rounded-filled.png" onclick=\'queue=[];queue.push(' + JSON.stringify(albumQueueObjectArray).substring(1, JSON.stringify(albumQueueObjectArray).length-1) + ');startPlayer()\'><img class="icon-download" src="./rsc/icon/icon-download-rounded-filled.png" onclick="downloadSongs(' + albumIndex + ')">'
})


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