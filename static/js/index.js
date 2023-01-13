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
			case '#FE0202':
				mainTitle.style.color = 'white'
				subTitle.style.color = 'white'
				break;
			case '#59BC98':
				mainTitle.style.color = 'black'
				subTitle.style.color = 'black'
				break;
			case '#2594D2':
				mainTitle.style.color = '#832A0D'
				subTitle.style.color = '#832A0D'
				break;
			case '#72BC59':
				mainTitle.style.color = 'red'
				subTitle.style.color = 'red'
				break;
			case '#BC59A0':
				mainTitle.style.color = 'yellow'
				subTitle.style.color = 'yellow'
				break;
			case '#DCF63C':
				mainTitle.style.color = 'purple'
				subTitle.style.color = 'purple'
				break;
			default:
				break;
		}
	});
}
