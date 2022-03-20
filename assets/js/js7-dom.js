
/* 1 DOM Selectors
--------------------
getElementsByTagName
getElementsByClassName
getElementById

querySelector
querySelectorAll

more prefered querySelector()
*/

// ##It is important to CACHE selectors in variables

const body = document.body
const text = 'This is some text'
const grandparent = document.querySelector('#grandparent')


/* 2. Adding Elements
   append()
   appendChild()             // added to a node eg divs, spans, a
*/

body.append('Page Heading')


/* 3. Creating Elements
	createElement()
*/

const div = document.createElement('div')
div.textContent = `${text} inside the div`
body.append(div)


/* 4. Modifying Element Text
	.textContent = 'some text'
*/

const child1 = document.querySelector('#child1')
child1.textContent = 'This is a child'

/* 5. Modifying Element HTML
*/

const h1 = document.createElement('h1')
h1.append(text)
div.append(h1)


/* 6. Removing Elements
.remove()
*/
const span4 = document.querySelector('#span4')
span4.remove()


/* 7. Modifying Element Attributes
	  getAttribute 				//not so much of use
      setAttribute('attri', 'value')
	  removeAttribute('attri')
*/
const span2 = document.querySelector('#span2')
span2.setAttribute('title', 'This is a title')
span2.removeAttribute('title')



/* Modifying Data Attributes

*/
span2.dataset.newName='hie'



/* 8. Modifying Element Classes

	 className                       //best
	 classList                       //best

	classList.add
	classList.remove
	classList.toggle
*/

const child3 = document.querySelector('#child3')
child3.classList.add('childcolor')


/* Modifying Element Style
	for seperation of functinality , add the css in the css file then add the class using class list
*/


// ##Bonus
// innerHTML //DANGEROUS

// parentElement
// children


