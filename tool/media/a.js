(async function () {
    let stream = await navigator.mediaDevices.getUserMedia({video: false, audio: true})

    let videos = await navigator.mediaDevices.getDisplayMedia({video: true, audio: false})
    document.getElementById("video").srcObject = videos;
    document.querySelector("audio").srcObject = stream;
})();