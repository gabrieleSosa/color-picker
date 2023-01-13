let colors = document.querySelectorAll(".myColor");

for (let i = 0; i < colors.length; i++) {
	let c = colors[i];

	c.addEventListener("click", function (e) {
		e.preventDefault();
		let col = e.currentTarget;
		let body = document.querySelector('body');
		body.style.backgroundColor = col.dataset.bgcolor;

		
	});
}
