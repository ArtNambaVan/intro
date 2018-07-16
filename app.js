document.addEventListener('DOMContentLoaded', function() {

	
const list = document.querySelector('#book-list ul');

list.addEventListener('click', function(e) {
	console.log(e.target)
	if (e.target.className === 'delete') {
		const li = e.target.parentElement;
		list.removeChild(li);
	}
})


// Add boock-list;


const addForm = document.forms['add-book'];

addForm.addEventListener('submit', function(e) {
	e.preventDefault();
	var value = addForm.querySelector('input[type="text"]').value;
	
	if (value) {
	const li = document.createElement('li');
	const bookName = document.createElement('span');
	const deleteBtn = document.createElement('span');

	// add content
	deleteBtn.textContent = 'delete';
	bookName.textContent = value;

	// add class
	deleteBtn.classList.add('delete');
	bookName.classList.add('name');

	// append to DOM

	li.appendChild(bookName);
	li.appendChild(deleteBtn);

	list.appendChild(li);
	
	addForm.querySelector('input[type="text"]').value = ""
	}
});

// hide books

const hideBox = document.querySelector('#hide');

hideBox.addEventListener('change', function(e) {
	if (hideBox.checked) {
		list.style.display = "none"
	} else {
		list.style.display = "block"
	}
})

// filter books

const searchBar = document.forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup', function(e) {
	console.log(e.target)
	const term = e.target.value.toLowerCase();
	const books = list.getElementsByTagName('li');
	Array.from(books).forEach(function(book) {

		const title = book.firstElementChild.textContent;
		console.log( book.firstElementChild.textContent)
		if (title.toLowerCase().indexOf(term) != -1) {
			book.style.display = 'block';
		} else {
			book.style.display = 'none'
		}

	})
})


// tabbed content

const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');



// МОЁ РЕШЕНИЕ

/*tabs.addEventListener('click', function(e) {
	console.log(e.target.tagName);
	if (e.target.tagName === 'LI') {
		panels.forEach(function(element) {
			console.log(e.target.getAttribute('data-target'))
			console.log('#' + element.getAttribute('id'))
			if ( e.target.getAttribute('data-target') == ('#' + element.getAttribute('id')) ) {
				element.classList.add('active');
				console.log('Yea')
			} else {
				element.classList.remove('active');
			}
			//e.classList.toggle('active');
		})
	}	
})
*/

// NET NINJA

tabs.addEventListener('click', function(e) {
	if (e.target.tagName === 'LI') {

		const targetPanel = document.querySelector(e.target.dataset.target)
/*		console.log(e.target)
		console.log(e.target.dataset.target)
		console.log(targetPanel);*/
		panels.forEach(function(panel) {
			if (panel == targetPanel) {
				panel.classList.add('active');
			} else {
				panel.classList.remove('active');
			}
		})
	}

})
















})