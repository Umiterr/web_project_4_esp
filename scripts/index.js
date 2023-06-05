// Edit profile form

// Open/Close
const closeButton = document.querySelector(".form-profile__close");
const formProfile = document.querySelector(".form-profile");
const profileButton = document.querySelector(".profile__edit-button");
const profileOn = document.querySelector(".form-profile_on");

function toggleProfile(form) {
  if (form.classList.contains("form-profile_on")) {
    form.classList.toggle("form-profile_on");
  } else if (form.classList.contains("form-profile_on") === false) {
    form.classList.toggle("form-profile_on");
  }
}

closeButton.addEventListener("click", () => toggleProfile(formProfile));

profileButton.addEventListener("click", () => toggleProfile(formProfile));

// Name/About
const profileNameForm = document.querySelector(".form-profile__name");
const profileAboutForm = document.querySelector(".form-profile__about");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");
const profileSaveButton = document.querySelector(".form-profile__save");

function refreshProfile() {
  profileNameForm.value = profileName.textContent;
  profileAboutForm.value = profileAbout.textContent;
}

refreshProfile();

// Save profile
function edit(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    profileName.textContent = profileNameForm.value;
    profileAbout.textContent = profileAboutForm.value;
  } else if (event.type === "click") {
    profileName.textContent = profileNameForm.value;
    profileAbout.textContent = profileAboutForm.value;
  }
}

profileSaveButton.addEventListener("click", edit);
profileNameForm.addEventListener("keydown", edit);
profileAboutForm.addEventListener("keydown", edit);

// post form

// Open/Close
const closeButtonPost = document.querySelector(".form-post__close");
const postButtonSave = document.querySelector(".form-post__save");
const postOn = document.querySelector(".form-post_on");
const formPost = document.querySelector(".form-post");
const postButtonAdd = document.querySelector(".profile__add-button");

function togglePost(form) {
  form.classList.toggle("form-post_on");
}

closeButtonPost.addEventListener("click", () => togglePost(formPost));
postButtonSave.addEventListener("click", () => togglePost(formPost));
postButtonAdd.addEventListener("click", () => togglePost(formPost));

// posts
const feed = document.querySelector(".feed");

// heart button

const heartButtons = document.querySelectorAll(".feed__heart-button");

heartButtons.forEach(function (button) {
  setLikeEventListener(button);
});

function setLikeEventListener(button) {
  button.addEventListener("click", function () {
    const clickedButton = button.closest(".feed__heart-button");
    const heartImage = button.querySelector(".feed__heart-image");
    if (clickedButton) {
      heartImage.classList.toggle("feed__heart-button_on");
    }
  });
}

// Add Post
function savePost(formPostURL, formPostName) {
  const postTemplate = document.querySelector(".feed__post-template").content;
  const postElement = postTemplate.querySelector(".feed__post").cloneNode(true);

  postElement.querySelector(".feed__image").src = formPostURL;
  postElement.querySelector(".feed__title").textContent = formPostName;
  postElement.querySelector(".feed__image").alt = formPostName;

  feed.prepend(postElement);

  // Delete new posts
  const deleteButton = document.querySelectorAll(".feed__trash-button");

  deleteButton.forEach(function (button) {
    button.addEventListener("click", function () {
      const post = button.closest(".feed__post");
      post.remove();
    });
  });

  //Heart new button

  const imageButton = postElement.querySelector(".feed__image-popup-buttom");
  setImagePopupEventListener(imageButton);

  const likeButton = postElement.querySelector(".feed__heart-button");

  setLikeEventListener(likeButton);
}

// Save post

function addNewPost(event) {
  if (event.key === "Enter" || event.type === "click") {
    const formPostName = document.querySelector(".form-post__name");
    const formPostURL = document.querySelector(".form-post__about");

    savePost(formPostURL.value, formPostName.value);

    formPostName.value = "";
    formPostURL.value = "";
  }
}

postButtonSave.addEventListener("click", addNewPost);
formPost.addEventListener("keydown", addNewPost);

// Delete posts
const deleteButton = document.querySelectorAll(".feed__trash-button");

deleteButton.forEach(function (button) {
  button.addEventListener("click", function () {
    const post = button.closest(".feed__post");
    post.remove();
  });
});
// Image popup

// Close popup

const closeButtonPopup = document.querySelector(".image-popup__close");
const buttonPopups = document.querySelectorAll(".feed__image-popup-buttom");
const imagePopup = document.querySelector(".image-popup");
const imagePopupOn = document.querySelector(".image-popup_on");

function closePopup(popup) {
  if (popup.classList.contains("image-popup_on")) {
    popup.classList.toggle("image-popup_on");
  } else if (popup.classList.contains("image-popup_on") === false) {
    popup.classList.toggle("image-popup_on");
  }
}

closeButtonPopup.addEventListener("click", () => closePopup(imagePopup));

//show popup
const popupImage = document.querySelector(".image-popup__image");
const popupImageTitle = document.querySelector(".image-popup__title");

buttonPopups.forEach(function (button) {
  setImagePopupEventListener(button);
});

function setImagePopupEventListener(button) {
  const feedImage = button.querySelector(".feed__image");
  const feedTitle = button.closest(".feed__post").querySelector(".feed__title");

  button.addEventListener("click", function () {
    popupImage.src = feedImage.src;
    popupImageTitle.textContent = feedTitle.textContent;
    closePopup(imagePopup);
  });
}

// Default posts

savePost("images/Bliss.jpg", "Sodoma County");
savePost("images/El-Gran-Canon-2.jpg", "El Gran Cañón 2");
savePost("images/El-Gran-Canon.jpg", "El Gran Cañón");
savePost("images/Montanas-Calvas.jpg", "Montañas Calvas");
savePost("images/Lago-louise.jpg", "Lago-louise");
savePost("images/Yosemite.jpg", "Valle de Yosemite");
