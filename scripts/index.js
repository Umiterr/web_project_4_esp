document.addEventListener('DOMContentLoaded', (event) => {

// Edit profile form 

// Open/Close 
let closeButton = document.querySelector('.form-profile__close');
let formProfile = document.querySelector('.form-profile');
let profileButton = document.querySelector('.profile__edit-button');
let profileOn = document.querySelector('.form-profile_on');
let showOpacity = document.querySelector(".form-profile_on.show");

function close () {

    

if (formProfile.classList.contains('form-profile_on')) {
    
    formProfile.classList.toggle('form-profile_on');
    formProfile.classList.toggle('form-profile_on.show');
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

let heartButtons = document.querySelectorAll('.feed__heart-button');
let heartImages = document.querySelectorAll('.feed__heart-image');

function heartButtonClick(event) {
    let clickedButton = event.target.closest('.feed__heart-button');
    if (clickedButton) {
        let index = Array.from(heartButtons).indexOf(clickedButton);
        heartImages[index].classList.toggle('feed__heart-button_on');
    }
}

heartButtons.forEach(function (button) {
    button.addEventListener('click', heartButtonClick);
});

// post form

// Open/Close 
let closeButtonPost = document.querySelector('.form-post__close');
let postButtonSave = document.querySelector('.form-post__save');
let postOn = document.querySelector('.form-post_on');
let showOpacityPost = document.querySelector(".form-post_on.show");
let formPost = document.querySelector(".form-post");
let postButtonAdd = document.querySelector(".profile__add-button");

function close () {

    

if (formPost.classList.contains('form-post_on')) {
    
    formPost.classList.toggle('form-post_on');
    formPost.classList.toggle('form-post_on.show');
} else if (formPost.classList.contains('form-post_on') === false) {
    
    formPost.classList.toggle('form-post_on');
    
}

}

closeButtonPost.addEventListener('click', close);
postButtonSave.addEventListener('click', close);
postButtonAdd.addEventListener('click', close);


// posts
    const feed = document.querySelector(".feed");
    
    

// Add Post
function savePost(formPostURL, formPostName) {
    const postTemplate = document.querySelector(".feed__post-template").content;
    const postElement = postTemplate.querySelector('.feed__post').cloneNode(true);

    postElement.querySelector(".feed__image").src = formPostURL;
    postElement.querySelector(".feed__title").textContent = formPostName;
    feed.prepend(postElement);
    
}

// Save post

postButtonSave.addEventListener("click", function () {
    const formPostName = document.querySelector(".form-post__name");
    const formPostURL = document.querySelector(".form-post__about");

    savePost(formPostURL.value, formPostName.value);

    formPostName.value = "";
    formPostURL.value = "";
    
});

// Delete Post
const deleteButton = document.querySelectorAll('.feed__trash-button');

deleteButton.forEach(function(button) {
    button.addEventListener('click', function() {
    const post = button.closest('.feed__post');
    post.remove();
  });
});

// Image popup

// Open/Close/show image & title 


let closeButtonPopup = document.querySelector('.image-popup__close');
let ButtonPopups = document.querySelectorAll(".feed__image-popup-buttom");
let imagePopup = document.querySelector('.image-popup');
let imagePopupOn = document.querySelector('.image-popup_on');
let showOpacityPopup = document.querySelector(".image-popup_on.show");

function closepopup () {

    

if (imagePopup.classList.contains('image-popup_on')) {
    
    imagePopup.classList.toggle('image-popup_on');
    imagePopup.classList.toggle('image-popup_on.show');
} else if (imagePopup.classList.contains('image-popup_on') === false) {
    
    imagePopup.classList.toggle('image-popup_on');
    
}

}

closeButtonPopup.addEventListener('click', closepopup);
ButtonPopups.forEach(function(ButtonPopups) {
ButtonPopups.addEventListener('click', closepopup);
});


//show image popup
    let popupImage = document.querySelector('.image-popup__image').src;
    
    ButtonPopups.forEach(function(button) {
        button.addEventListener('click', function() {
        let feedImage = button.querySelector('.feed__image');
           
        popupImage = feedImage.src;
      });

    });


}); 