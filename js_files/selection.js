let min_idx;

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

function inside_inner_setTimout(i, j, n) {
	if (j > i + 1) {
		let prev_blue = document.querySelector(`[data-number = "${j - 1}"]`);
		if (prev_blue.style.background === "blue") {
			prev_blue.style.background = "yellow";
		}
	}
	let last_element = document.querySelector(`[data-number = "${n - 1}"]`);
	last_element.style.background = "yellow";
	let el1 = document.querySelector(`[data-number = "${j}"]`);
	el1.style.background = "blue";
	let el2 = document.querySelector(`[data-number = "${min_idx}"]`);
	let string1 = el1.style.height;
	let string2 = el2.style.height;
	let new_height_one = string1.substring(0, string1.length - 1);
	let new_height_two = string2.substring(0, string2.length - 1);

	if (Number(new_height_one) < Number(new_height_two)) {
		let previous = min_idx;
		let previous_element = document.querySelector(
			`[data-number = "${previous}"]`
		);
		if (previous !== i) {
			previous_element.style.background = "yellow";
			console.log("inside previous is not equal to i");
		}
		min_idx = j;
		let min_current = document.querySelector(`[data-number="${min_idx}"]`);
		min_current.style.background = "red";
	}
	if (j === n - 1) {
		let el1 = document.querySelector(`[data-number="${i}"]`);
		let el2 = document.querySelector(`[data-number="${min_idx}"]`);
		console.log(i, min_idx);
		swap(el1, el2);
	}
}

function inside_settimeout(i, n) {
	reset();
	let current_element = document.querySelector(`[data-number="${i}"]`);
	current_element.style.background = "red";
	// Find the minimum element in unsorted array
	min_idx = i;
	for (let j = i + 1; j < n; j++) {
		setTimeout(() => {
			inside_inner_setTimout(i, j, n);
		}, ((j - i - 1) * 1000) / (n - 1 - i));
	}
}

function selectionSort(arr, n) {
	// One by one move boundary of unsorted subarray
	for (let i = 0; i < n - 1; i++) {
		setTimeout(() => {
			inside_settimeout(i, n);
		}, 1000 * i);
	}
}

export { selectionSort };
