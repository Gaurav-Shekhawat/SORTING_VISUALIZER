import { bubbleSort } from "./bubble.js";
import { selectionSort } from "./selection.js";
import { insertionSort } from "./insertion.js";

let arr = [];

function createBarsInitial() {
	arr = [];
	for (let i = 0; i < 100; i++) {
		arr.push(Math.floor(Math.random() * 100) + 1);
	}
	const barContainer = document.getElementsByClassName("bars");

	for (let i = 0; i < 100; i++) {
		var btn = document.createElement("button");
		barContainer[0].appendChild(btn);
		btn.classList.add("bar");
		btn.style.height = arr[i] + "%";
		btn.dataset.number = `${i}`;
	}
}
function createBars() {
	arr = [];
	for (let i = 0; i < 100; i++) {
		arr.push(Math.floor(Math.random() * 100) + 1);
	}
	for (let i = 0; i < 100; i++) {
		var btn = document.querySelector(`[data-number = "${i}"]`);
		btn.style.height = arr[i] + "%";
	}
}

createBarsInitial();

let newArrayButton = document.getElementsByClassName("random");
newArrayButton[0].addEventListener("click", createBars);

let bubbleSortButton = document.getElementsByClassName("bubble");
bubbleSortButton[0].addEventListener("click", () => {
	bubbleSort(arr, 100);
});

let selectionSortButton = document.getElementsByClassName("selection");
selectionSortButton[0].addEventListener("click", () => {
	selectionSort(arr, 100);
});

let insertionSortButton = document.getElementsByClassName("insertion");
insertionSortButton[0].addEventListener("click", () => {
	insertionSort(arr, 100);
});
