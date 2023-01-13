let colors = document.querySelectorAll(".myColor");
let body = document.querySelector("body");
let listItem = document.querySelectorAll(".myLi");

for (let i = 0; i < colors.length; i++) {
	let c = colors[i];
	let listIt = listItem[i];

	c.addEventListener("click", function (e) {
		e.preventDefault();
		let col = e.currentTarget;

		body.style.backgroundColor = col.dataset.bgcolor;
	});
}
