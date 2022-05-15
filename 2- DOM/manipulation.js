// get Element by id

const childOne = document.getElementById("childOne")
//console.log(childOne)

// get element by class
const parents = document.getElementsByClassName("parent")
//console.log(parents)

//get element with queryselector
const grandParent= document.querySelector(".grandParent")
//console.log(grandParent)

const children = document.querySelectorAll("div")
//console.log(children)

//get children
const childrenParent1 = document.getElementById("parent1").children
//console.log("children of parent 1",childrenParent1)

// get parent
//console.log("Parent of child one",.parentElement)

// get the next and the previous element
const childTwo = childOne.nextElementSibling
//console.log(childTwo.previousElementSibling)

// get the body and append elements to it
const body = document.body
//console.log(body)

//innerText and textContent
// console.log(grandParent.innerText)
// console.log(grandParent.textContent)

//innerText vs innerHtml
const div = "<strong> My name is Abir</strong>"
childOne.innerHTML = div

const div2 = document.createElement("div")
div2.innerText = "Testing"
childTwo.appendChild(div2)

//remove an element
//childTwo.remove()

//get an attribute
//console.log(grandParent.getAttribute("id"))

//set an attribute
grandParent.setAttribute("id", "testId2")

//remove an attribute
//grandParent.removeAttribute("id")

// add / remove a class
const childThree = document.getElementById("c3")
//console.log(childThree.classList)
childThree.classList.add("testClass")
childThree.classList.remove("child3")

//modify style
//childOne.style.background="red"

const fun = ()=>{

}
// add event listner
// childOne.addEventListener("click",(e)=>{
//     console.log("this is child one capturing")
    
// } , {capture:true})

//bubbling | capturing | stop propagation | run once example
// grandParent.addEventListener("click",(e)=>{
//     console.log("this is grandParent capturing")
// }, {capture:true} )

// parents[0].addEventListener("click",(e)=>{
    
//     console.log("this is parent capturing")
    
// }, {capture:true} )

// childOne.addEventListener("click",(e)=>{
//     e.stopPropagation()
//     console.log("this is child one bubbling")
// } )

// //bubbling | capturing | stop propagation | run once example
// grandParent.addEventListener("click",(e)=>{
//     console.log("this is grandParent bubbling")
// } )

// parents[0].addEventListener("click",(e)=>{
//     console.log("this is parent bubbling")
// } )

const grandParentEvent = (e)=>{
    console.log("this is grandParent")
}

grandParent.addEventListener("click",grandParentEvent)

console.log(grandParent.getAttributeNames())
grandParent.removeAttribute("")



//remove event listner

setTimeout(()=>{
    grandParent.removeEventListener("click",grandParentEvent)
},5000)




