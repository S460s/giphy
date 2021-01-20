const UI = (function () {
	const img = document.getElementById('giphy');
	const newGiphyBtn = document.getElementById('newGiphyBtn');
	const errMsgP = document.getElementById('errMsg');
	const topicInput = document.getElementById('giphyForm');

	const handleNewGiphy = function () {
		if (!topicInput.value) {
			showGiphy('cats');
		} else {
			showGiphy(topicInput.value);
		}
	};
	const newGiphyEvent = function () {
		newGiphyBtn.addEventListener('click', handleNewGiphy);
	};

	const showGiphyTitle = function (txt) {
		errMsgP.textContent = `The title of the giphy is  ->  ${txt}`;
	};

	const showErrMsg = function () {
		errMsgP.textContent = `Cannot find a giphy with the suggested name -> ${topicInput.value}! Try again.`;
	};
	const showImg = function (url) {
		img.src = url;
		errMsgP.textContent = '';
	};

	return { newGiphyEvent, showErrMsg, showImg, showGiphyTitle };
})();

async function showGiphy(topic) {
	const response = await fetch(
		`https://api.giphy.com/v1/gifs/translate?api_key=${process.env.API_KEY}&s=${topic}`,
		{ mode: 'cors' }
	);
	try {
		const giphyData = await response.json();
		let imgUrl = giphyData.data.images.original.url;
		UI.showImg(imgUrl);
		UI.showGiphyTitle(giphyData.data.title);
	} catch (err) {
		console.log(err.message);
		UI.showErrMsg();
	}
}
showGiphy('cats');
UI.newGiphyEvent();

/*	With promises


fetch(
		`https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=${topic}`,
		{ mode: 'cors' }
	)
		.then((response) => {
			console.log(response);
			return response.json();
		})
		.then((response) => {
			let imgUrl = response.data.images.original.url;
			UI.showImg(imgUrl);
			UI.showGiphyTitle(response.data.title);
		})
		.catch((err) => {
			let error = new Error(err);
			UI.showErrMsg(error);
		});*/
