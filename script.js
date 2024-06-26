const logincard = document.querySelector("#Logincard");
const login = document.querySelector("#login");
const close = document.querySelector('#close');
const overlape = document.querySelector('#overlape')
const SignUpCard = document.querySelector("#SignUpCard");
const close1 = document.querySelector('#close1');
const join = document.querySelector('#Join');


function addOverlay(){
    overlape.classList.remove('opacity-0','z-[-1]');
    overlape.classList.add('opacity-50','z-[1]');
    SignUpCard.classList.remove('hidden');
    SignUpCard.classList.add('flex');
       
}

function hideOverlay(){
    overlape.classList.remove('opacity-50','z-[1]');
    overlape.classList.add('opacity-0','z-[-1]');
    SignUpCard.classList.remove('flex');
    SignUpCard.classList.add('hidden');
}

login.addEventListener('click',addOverlay);

close.addEventListener('click',hideOverlay);

overlape.addEventListener('click', hideOverlay);
close1.addEventListener('click',hideOverlay);

join.addEventListener('click',()=>{
    overlape.classList.remove('opacity-0','z-[-1]');
    overlape.classList.add('opacity-50','z-[1]');
    logincard.classList.remove('hidden');
    logincard.classList.add('flex');
})

close.addEventListener('click',()=>{
    overlape.classList.remove('opacity-50','z-[1]');
    overlape.classList.add('opacity-0','z-[-1]');
    logincard.classList.remove('flex');
    logincard.classList.add('hidden');
})

overlape.addEventListener('click',()=>{
    overlape.classList.remove('opacity-50','z-[1]');
    overlape.classList.add('opacity-0','z-[-1]');
    logincard.classList.remove('flex');
    logincard.classList.add('hidden');
});

// HANDLING USERSTATE

const User = document.querySelector("#User");
const SignUpForm =document.querySelector("#SignUpForm");

SignUpForm.addEventListener('submit',(e)=>{
   e.preventDefault();
    const FirstNameInput = document.getElementById("FirstName");
    const SecondNameInput = document.getElementById("SecondName");
    const FirstName = FirstNameInput.value.trim();
    const SecondName = SecondNameInput.value.trim();

    if(FirstName){
        User.innerHTML = `${FirstName} ${SecondName}`;
    
       login.classList.add('hidden');
       User.classList.remove('hidden');
       SignUpCard.remove();
       overlape.remove();
        
    }

})

