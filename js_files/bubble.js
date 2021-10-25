function swap(el1, el2) {
	const transform1 = el1.style.height;
	const transform2 = el2.style.height;

	el1.style.height = transform2;
	el2.style.height = transform1;
}

function reset() {
	for (let k = 0; k < 100; k++) {
		let currentElement = document.querySelector(`[data-number = "${k}"]`);
		if (currentElement.style.background === "red") {
			currentElement.style.background = "yellow";
		}
	}
}

function inside_inner_setTimout(i, j) {
	reset();
	let el1 = document.querySelector(`[data-number = "${j}"]`);
	let el2 = document.querySelector(`[data-number = "${j + 1}"]`);
	el1.style.background = "red";
	el2.style.background = "red";
	let string1 = el1.style.height;
	let string2 = el2.style.height;

	let new_height_one = string1.substring(0, string1.length - 1);
	let new_height_two = string2.substring(0, string2.length - 1);
	if (Number(new_height_one) > Number(new_height_two)) {
		// swap arr[j] and arr[j+1]
		swap(el1, el2);
	}
}

function inside_setTimeout(i, n) {
	for (let j = 0; j < n - i - 1; j++) {
		setTimeout(() => {
			inside_inner_setTimout(i, j);
		}, j * (200 / (n - i - 1)));
	}
	let finalelement = document.querySelector(`[data-number = "${n - i - 1}"]`);
	finalelement.style.backgroundColor = "#9dfff9";
}

function bubbleSort(arr, n) {
	for (let i = 0; i < n - 1; i++) {
		setTimeout(() => {
			inside_setTimeout(i, n);
		}, 200 * i);
	}
}

export { bubbleSort };
