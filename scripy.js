const myForm = document.querySelector('#my-form');
const first_name = document.querySelector('#first_name');
const last_name = document.querySelector('#last_name');
const msg = document.querySelector('.msg');
const usersList = document.querySelector('#users');

myForm.addEventListener('submit',onsubmit);

function onsubmit(e) {
    e.preventDefault();

    if(first_name.value === '' || last_name.value === ''){
        // alert('Please enter Fields');
        msg.classList.add('error');
        msg.innerHTML = 'Please Enter a Fields';

        setTimeout(() => msg.remove(),3000);
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode("Welcome to my Website "+first_name.value+ " "+last_name.value));

        usersList.appendChild(li);

        nameInput.value ='';
        emailInput.value='';
    }
}