// single element selector
// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('h1'));

// Multiple element selector
// console.log(document.querySelectorAll('.item'))

// const ul = document.querySelector('.items');

// ul.remove();
// ul.lastElementChild.remove()
// ul.firstElementChild.textContent = 'Hello'
// ul.children[1].innerText = 'soutam';
// ul.lastElementChild.innerHTML = '<h1> Hello</h1>'

// const btn = document.querySelector('.btn');

// btn.style.background = 'red';

// btn.addEventListener('click',function(e){
//     e.preventDefault();  
//     document.querySelector('#my-form').style.background = '#ccc';
    // document.querySelector('body').classList.add('bg-dark');
    // document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
// });

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const usersList = document.querySelector('#users');

myForm.addEventListener('submit',onsubmit);

function onsubmit(e) {
    e.preventDefault();
    // console.log(nameInput.value)
    if(nameInput.value === '' || emailInput.value === ''){
        // alert('Please enter Fields');
        msg.classList.add('error');
        msg.innerHTML = 'Please Enter a Fields';

        setTimeout(() => msg.remove(),3000);
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(nameInput.value+ " : "+emailInput.value));

        usersList.appendChild(li);

        nameInput.value ='';
        emailInput.value='';
    }
}