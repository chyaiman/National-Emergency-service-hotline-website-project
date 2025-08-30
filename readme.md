What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer: getElementById---is used to get ids and usually only the first id gets returned. GetElementbyclass---return all the same class not only the first one
querySelector--returns only the first element that matches the css-selector
querySelectorAll---returns all the matching css-selectors.

How do you create and insert a new element into the DOM?

Answer:
To create element we use document.createElement("tagName"), to add inner text or inner html we use .innerText and .innerHTML
What is Event Bubbling and how does it work?
Answer: If I have a <ul> with many buttons, instead of adding a click listener to each button, I can just add one listener to the <ul> Because of event bubbling, the click will reach the <ul>

What is Event Delegation in JavaScript? Why is it useful?

Answer: Following the previous question, Because of event bubbling, the click will reach the <ul>, and using event.target I can check which button was clicked. This is called event delegation.
What is the difference between preventDefault() and stopPropagation() methods?

Answer:

If I have a button inside a form, clicking it might try to submit the form. If I use preventDefault(), it stops the browser from automatically submitting the form .

If I have a button inside a <div> with a click listener, and I click the button, the event also goes up to the <div> because of bubbling. If I use stopPropagation(), it stops the event from going up to the parent element.
