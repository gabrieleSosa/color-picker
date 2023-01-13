let colors = document.querySelectorAll(".myColor");

for (let i = 0; i < colors.length; i++) {
	let c = colors[i];

	c.addEventListener("click", function (e) {
		e.preventDefault();
		let col = e.currentTarget;
		let body = document.querySelector('body');
		body.style.backgroundColor = col.dataset.bgcolor;

		let mainTitle = document.querySelector('.mainTitle')
		let subTitle = document.querySelector('.description')

		switch(col.dataset.bgcolor) {
			case '#f00':
				mainTitle.style.color = 'white'
				subTitle.style.color = 'white'
				break;
			case '#808080':
				mainTitle.style.color = 'black'
				subTitle.style.color = 'black'
				break;
			case '#000fe8':
				mainTitle.style.color = '#832A0D'
				subTitle.style.color = '#832A0D'
				break;
			case '#00a003':
				mainTitle.style.color = 'red'
				subTitle.style.color = 'red'
				break;
			case '#ff00bf':
				mainTitle.style.color = 'yellow'
				subTitle.style.color = 'yellow'
				break;
			case '#fffb00':
				mainTitle.style.color = 'purple'
				subTitle.style.color = 'purple'
				break;
			default:
				break;
		}
	});
}
