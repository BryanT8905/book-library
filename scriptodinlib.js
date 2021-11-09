


let myLibrary = [];


class Book {


	constructor(title, author, pages, isbn){
		this.title = title;
		this.author = author;
		this.pages = pages;
		this.isbn = isbn;
	}
	
}

class Actions {

	//static methods are defined on the class itself. Cannot call on an object instance, only on an object class
	static togglebtn(elem) {
		let newDiv = document.createElement("div");
		newDiv.className="form-check";

		let toggle = document.createElement("INPUT");
		toggle.type = "checkbox";
		toggle.className = "form-check-input";
		toggle.setAttribute("id", "flexCheckDefault")
		newDiv.appendChild(toggle);

		let inputLabel = document.createElement("LABEL");
		inputLabel.className = "form-check-label";
		inputLabel.setAttribute("for", "flexCheckDefault")
		inputLabel.innerHTML = "Mark as complete";
		newDiv.appendChild(inputLabel);
		elem.appendChild(newDiv);

	}
	

	static delButton(elem){
		let del = document.createElement("BUTTON");
		var delText = document.createTextNode('Remove');
		del.className = "btn btn-danger btn-sm delete";
		del.appendChild(delText);
		elem.appendChild(del)

	}

	static removeItem(e) {
		if(e.target.classList.contains('btn-danger')){
			let row = e.target.parentNode.parentNode;
			document.getElementById('bookList').removeChild(row);

		}


	}

	static clearForm(){
		document.getElementById('addform').reset()

	}

	static createRow(book) {
		 let booksBooks = document.getElementById("bookList");
		 let row = document.createElement("tr");

		 row.innerHTML = `<td>${book.title}</td>
		 				 <td>${book.author}</td>
		 				 <td>${book.pages}</td>
		 				 <td>${book.isbn}</td>
		 				 `
		 
		 let td2 = document.createElement("td")
		 row.appendChild(td2)
		 Actions.togglebtn(td2)

		 let td1 = document.createElement("td")	
		 row.appendChild(td1);
		 Actions.delButton(td1);

		 booksBooks.appendChild(row);

	}	


		
}

     

     document.getElementById('addform').addEventListener('submit', (e) => {

		e.preventDefault();

		let title = document.getElementById('title1').value;
		let author = document.getElementById('author1').value;
		let pages = document.getElementById('pages1').value;
		let ISBN = document.getElementById('isbn1').value;
		
		let mybook = new Book(title,author,pages,ISBN);
		myLibrary.push(mybook);
		console.log(myLibrary)

		//for in to iterate over object properties, not for of.  for in gives index

		for(let i in myLibrary){
			Actions.createRow(myLibrary[i])
		}
		

		
		Actions.clearForm();
		
})


document.getElementById('bookList').addEventListener('click', Actions.removeItem);





