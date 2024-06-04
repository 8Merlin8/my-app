window.addEventListener('DOMContentLoaded', () => {
	const videoSelectBtn = document.getElementById("videoSelectBtn");
	videoSelectBtn.onclick = async function () {
		const sourceId = await window.electron.getSources();

		const stream = await navigator.mediaDevices.getUserMedia({
			audio: false,
			video: {
				mandatory: {
					chromeMediaSource: 'desktop',
					chromeMediaSourceId: sourceId,
					minWidth: 1280,
					maxWidth: 1280,
					minHeight: 720,
					maxHeight: 720
				}
			}
		})

		const video = document.querySelector('video')
		video.srcObject = stream
		video.onloadedmetadata = () => video.play()
	};
})