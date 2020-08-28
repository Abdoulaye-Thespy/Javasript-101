// //factory function
// function createCircle(radius) {
//     return { radius,
//     draw: function(){
//         console.log("draw");
//     },
//     };
// }

// const circle = createCircle(1);

// //constructor function

// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log("draw");
//       }
//     }

// const another = new Circle(1);
//  another.draw()
 
//  //console.dir(document);
//  //console.log(document.domain);
//  //document.all[10].textContent= 'Hello';
 
//  //console.log(document.forms);
//                                         // GEt element by ID
// //  let title = document.getElementById('header-title');
// //  console.log(title.innerText);
// //  let header= document.getElementById('main-header');
// //  header.style.borderBottom = 'solid 3px #000';

//                                       // GEt element by ID
                                      
//                                       // query select
// let head = document.querySelector('#main-header');
// head.style.borderBottom = '4px solid #ccc'
let form = document.getElementById('addForm');
let ul =document.getElementById('items');
form.addEventListener('submit', addItem);

function addItem(e) {
    e.preventDefault();
    console.log(1);
    let newItem = document.getElementById('item').value;
    let li = document.createElement('li');
    li.className = 'list-group-item';
    console.log(li);
    li.appendChild(document.createTextNode(newItem));
    ul.appendChild(li);
}