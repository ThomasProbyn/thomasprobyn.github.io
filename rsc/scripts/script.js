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
    }
}

document.getElementById("audio-player").onended = function() {
    startPlayer()
}