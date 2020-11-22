const bubble = document.querySelector(".bubble");
const tabs = document.querySelector(".tabs");

tabs.addEventListener("mouseenter", e => {
	setTimeout(() => bubble.style.transition = "transform 200ms ease-out, left 300ms ease-out", 5);
	bubble.style.transform = "scale(1,1) translateX(-25%)";
})

tabs.addEventListener("mouseleave", e => {
	bubble.style.transition = "transform 200ms ease-out";
	bubble.style.transform = "scale(1,0) translateX(-25%)";
})

tabs.addEventListener("mouseover", e => {
	e.target.classList.add("hover");
	bubble.style.left = e.target.offsetLeft+"px";
})

tabs.addEventListener("mouseout", e => {
	e.target.classList.remove("hover");
})

