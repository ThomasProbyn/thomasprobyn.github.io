window.addEventListener("load", (event) => {
    for (i = 0; i < indexObject.albums.length; i++) {
        //for all albums
        document.getElementById("home-page-promotion-section").innerHTML = document.getElementById("home-page-promotion-section").innerHTML + "<div class=\"album-card\"><img src=\"" + indexObject.albums[i].image + "\" class=\"album-card-image\"><div class=\"primary-album-card-text-elements\" onclick=\"window.location.href = './player.html?album=" + i + "'\"><h1 class=\"primary-text-colour primary-text-font\" id=\"album-main-title-text\">" + indexObject.albums[i].name + "</h1><p class=\"primary-text-colour primary-text-font\" id=\"album-main-release-date\">" + indexObject.albums[i].data.season + " " + indexObject.albums[i].data.year + "</p></div></div>"
    }
})

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
