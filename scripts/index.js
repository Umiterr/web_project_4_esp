document.addEventListener('DOMContentLoaded', (event) => {

// Edit profile form 

// Open/Close 
let closeButton = document.querySelector('.form-profile__close');
let formProfile = document.querySelector('.form-profile');
let profileButton = document.querySelector('.profile__edit-button');


function close () {

    

if (formProfile.style.display === 'none') {
    
    formProfile.style.display = 'flex';
} else {
    
    formProfile.style.display = 'none';
}

}
close ()
closeButton.addEventListener('click', close);
profileButton.addEventListener('click', close);

// Name/About 
let profileNameForm = document.querySelector('.form-profile__name');
let profileAboutForm = document.querySelector('.form-profile__about');
let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');
let profileSaveButton = document.querySelector('.form-profile__save');

function refreshProfile() {
    profileNameForm.value = profileName.textContent;
    profileAboutForm.value = profileAbout.textContent;
}

refreshProfile()


function edit () { 

    profileName.textContent = profileNameForm.value;
    profileAbout.textContent = profileAboutForm.value;

}

edit();

profileSaveButton.addEventListener('click',edit);


// heart button 



let heartButton = document.querySelector('.feed__heart-button');
let heartImage = document.querySelector('.feed__heart-image');

function heartButtonClick () {

    heartImage.classList.toggle('feed__heart-button_on');

}

heartButton.addEventListener('click', heartButtonClick);


}); 