//DOM - Document object model created by the browser when a web page is loaded. 
//in graphical form it looks like a tree of elements/nodes
//we can use js to read or change the DOM

// const title = document.querySelectorAll(".title")

// title.forEach(element => {
//     console.log(element)
// });

// const wmf = document.querySelector("#, book-list li:nth-child(2)")
// console.log(wmf)

// const wmf2 = document.querySelector("#book-list li:nth-child(2) .name")
// console.log(wmf2)

// const books = document.querySelectorAll("#book-list li .name")
// books.forEach(book => {
//     console.log(book.textContent)
// });
// books.forEach(book => {
//     console.log(book.innerHTML)
// });



// *****************


// TRAVERSING THE DOM 
// parent and children
// const bookList = document.querySelector("#book-list")
// console.log(bookList.innerHTML)

// console.log(`The parent node is:`, bookList.parentElement)
// console.log(`The children are: `, bookList.childNodes)
// console.log(`The children are: `, bookList.children)

// //siblings
// console.log('The next sibling is: ', bookList.nextSibling)
// console.log('The next sibling is: ', bookList.nextElementSibling)

// //previous sibling
// console.log('The previous sibling is: ', bookList.previousElementSibling)


//*************** */

//Event listeners

// const h2 = document.querySelector('h2')
// h2.addEventListener('click', (e) => {
//     console.log(e.target) //target tells us what was clicked, which element was clicked
//     console.log(e)
// })

// const btns = document.querySelectorAll("#book-list .delete")

// btns.forEach(btn => {
//     btn.addEventListener('click', (b) => {
//         const li = b.target.parentElement
//         //to remove an element you need to do parentElement.removeChild
//         li.parentElement.removeChild(li)
//     })
// });

//bubbling events more efficient


//delete book
const list = document.querySelector("ul")
list.addEventListener('click', (e) => {
    if (e.target.className === 'delete'){
        const li = e.target.parentElement;
        // li.parentElement.removeChild(li)
        // list.removeChild(li)
        li.style.display = 'none'
    }
})

//add book
const addForm = document.forms['add-book']
//we attach eventlistener to the form and not the button
addForm.addEventListener('submit', (e) => {
    //prevent page from refreshing when form is submitted or button is clicked
    e.preventDefault();
    // const value = document.querySelector('#add-book input[type="text"]').value;
    const value = addForm.querySelector('input[type="text"]').value;
    console.log(value);
    //create elements in the DOM
    const li = document.createElement('li')
    const bookName = document.createElement('span')
    const deleteBtn = document.createElement('span')

    bookName.textContent = value;
    deleteBtn.textContent = 'delete'

    // bookName.className = 'name';
    // deleteBtn.className = 'delete';
    bookName.classList.add('name')
    deleteBtn.classList.add('delete')


    li.appendChild(bookName)
    li.appendChild(deleteBtn)
    list.appendChild(li)

})

//hide books
const hideBooks = document.querySelector("#hide")
hideBooks.addEventListener('change', (e) => {
    if (hideBooks.checked){
        list.style.display = 'none';
    }
    else{
        list.style.display = 'initial'
    }
})

//radio button change event example

//html part
/* <label for="option1">Option 1</label>
<input type="radio" name="options" id="option1" value="option1" checked>
<label for="option2">Option 2</label>
<input type="radio" name="options" id="option2" value="option2">
<div id="content">This is some content that will be hidden or shown based on the selected option.</div>

// const radios = document.querySelectorAll('input[name="options"]');
// const content = document.querySelector('#content'); */

// radios.forEach(radio => {
//   radio.addEventListener('change', (e) => {
//     if (e.target.value === 'option1') {
//       content.style.display = 'block'; // or 'initial', or another suitable value
//     } else {
//       content.style.display = 'none';
//     }
//   });
// });



//search books and filter the result

const searchBar = document.querySelector('#search')
searchBar.addEventListener('keyup', (e) => {
    const searchValue = e.target.value.toLowerCase();
    const books = list.querySelectorAll("li")
    books.forEach(book => {
        const title = book.textContent;
        if (title.toLowerCase().indexOf(searchValue) === -1){
            book.style.display = 'none'
        }
        else{
            book.style.display = 'block'
        }
    });

})





