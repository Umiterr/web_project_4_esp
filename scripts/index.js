document.addEventListener('DOMContentLoaded', (event) => {

// Edit profile form 

// Open/Close 
let closeButton = document.querySelector('.form-profile__close');
let formProfile = document.querySelector('.form-profile');
let profileButton = document.querySelector('.profile__edit-button');
let profileOn = document.querySelector('.form-profile_on');


function close () {

    

if (formProfile.classList.contains('form-profile_on')) {
    
    formProfile.classList.toggle('form-profile_on');
} else if (formProfile.classList.contains('form-profile_on') === false) {
    
    formProfile.classList.toggle('form-profile_on');
}

}

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



// Save profile
function edit (event) { 
    if (event.type === 'keydown') {
        
        if (event.key === 'Enter') {
            
            event.preventDefault();
        } else {
            
            return;
        }
    }

    profileName.textContent = profileNameForm.value;
    profileAbout.textContent = profileAboutForm.value;
}





profileSaveButton.addEventListener('click',edit);
profileNameForm.addEventListener('keydown', edit);
profileAboutForm.addEventListener('keydown', edit);


// heart button 



let heartButton = document.querySelector('.feed__heart-button');
let heartImage = document.querySelector('.feed__heart-image');

function heartButtonClick () {

    heartImage.classList.toggle('feed__heart-button_on');

}

heartButton.addEventListener('click', heartButtonClick);


}); 