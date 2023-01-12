let colors = document.querySelectorAll(".myColor");
let body = document.querySelector("body");
let listItem = document.querySelectorAll("li");

for (let i = 0; i < colors.length; i++) {
	let c = colors[i];
	let listIt = listItem[i];

	c.addEventListener("click", function (e) {
		e.preventDefault();

		let col = e.currentTarget;
		console.log(col.dataset.bgcolor);

		body.style.backgroundColor = col.dataset.bgcolor;
		listIt.style.border = "3px solid black";
	});
}