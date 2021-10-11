(async function () {
    let stream = await navigator.mediaDevices.getUserMedia({video: false, audio: true})

    let videos = await navigator.mediaDevices.getDisplayMedia({video: true, audio: false})
    document.querySelector("video").srcObject = videos;
    document.querySelector("audio").srcObject = stream;
})();