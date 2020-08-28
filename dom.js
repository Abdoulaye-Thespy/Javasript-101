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
let ul = document.getElementById('items');
let btn  = document.getElementsByClassName('btn btn-danger btn-sm float-right delete');
form.addEventListener('submit', addItem);
ul.addEventListener('click', removeItem);
function addItem(e) {
    e.preventDefault();
    console.log(1);
    let newItem = document.getElementById('item').value;
    let li = document.createElement('li');
    li.className = 'list-group-item';
    console.log(li);
    let bton = document.createElement('button');
    bton .className ='btn btn-danger btn-sm float-right delete';
    bton.appendChild(document.createTextNode('X'));
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(bton);
    ul.appendChild(li);
}

function removeItem(e) {
    if(e.target.classList.contains('delete')){
        if(confirm('Delete??')) {
         let li = e.target.parentElement;
         ul.removeChild(li);
        }
    }
}