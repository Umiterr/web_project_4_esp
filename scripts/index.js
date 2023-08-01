// Edit profile form

// Open/Close
const closeButton = document.querySelector(".form-profile__close");
const formProfile = document.querySelector(".form-profile");
const profileButton = document.querySelector(".profile__edit-button");
const profileOn = document.querySelector(".form-profile_on");
const profileBG = document.querySelector(".form-profile__BG");

function toggleProfile(form) {
  form.classList.toggle("form-profile_on");
}

profileBG.addEventListener("click", () => toggleProfile(formProfile));

closeButton.addEventListener("click", () => toggleProfile(formProfile));

profileButton.addEventListener("click", () => toggleProfile(formProfile));

document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    formProfile.classList.contains("form-profile_on")
  ) {
    toggleProfile(formProfile);
  }
});

// Name/About
const profileNameForm = document.querySelector(".form-profile__name");
const profileAboutForm = document.querySelector(".form-profile__about");
const profileName = document.querySelector(".profile__info-name");
const profileAbout = document.querySelector(".profile__about");
const profileSaveButton = document.querySelector(".form-profile__save");
const profileInput = document.querySelector(".form-profile__inputs");

function refreshProfile() {
  profileNameForm.value = profileName.textContent;
  profileAboutForm.value = profileAbout.textContent;
}

refreshProfile();

// Save profile
function edit(event) {
  event.preventDefault();
  profileName.textContent = profileNameForm.value;
  profileAbout.textContent = profileAboutForm.value;

  toggleProfile(formProfile);
}

profileSaveButton.addEventListener("click", edit);
profileInput.addEventListener("submit", edit);

// post form

// Open/Close
const closeButtonPost = document.querySelector(".form-post__close");
const postButtonSave = document.querySelector(".form-post__save");
const postOn = document.querySelector(".form-post_on");
const formPost = document.querySelector(".form-post");
const postButtonAdd = document.querySelector(".profile__add-button");
const postInput = document.querySelector(".form-post__inputs");
const postBG = document.querySelector(".form-post__BG");

function togglePost(form) {
  form.classList.toggle("form-post_on");
}

postBG.addEventListener("click", () => togglePost(formPost));
closeButtonPost.addEventListener("click", () => togglePost(formPost));
postButtonSave.addEventListener("click", () => togglePost(formPost));
postButtonAdd.addEventListener("click", () => togglePost(formPost));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && formPost.classList.contains("form-post_on")) {
    togglePost(formPost);
  }
});

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
  const deleteButton = postElement.querySelector(".feed__trash-button");
  deleteButton.addEventListener("click", function () {
    postElement.remove();
  });

  //Heart new button

  const imageButton = postElement.querySelector(".feed__image-popup-buttom");
  setImagePopupEventListener(imageButton);

  const likeButton = postElement.querySelector(".feed__heart-button");

  setLikeEventListener(likeButton);
}

// Save post

function addNewPost(event) {
  event.preventDefault();
  const formPostName = document.querySelector(".form-post__name");
  const formPostURL = document.querySelector(".form-post__about");

  savePost(formPostURL.value, formPostName.value);

  formPostName.value = "";
  formPostURL.value = "";
}

postButtonSave.addEventListener("click", addNewPost);
postInput.addEventListener("submit", addNewPost);

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
const imagePopupBG = document.querySelector(".image-popup__BG");

function closePopup(popup) {
  popup.classList.toggle("image-popup_on");
}

closeButtonPopup.addEventListener("click", () => closePopup(imagePopup));
imagePopupBG.addEventListener("click", () => closePopup(imagePopup));

document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    imagePopup.classList.contains("image-popup_on")
  ) {
    closePopup(imagePopup);
  }
});

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
const initialCards = [
  { name: "Sodoma County", link: "images/Bliss.jpg" },
  { name: "El Gran Cañón 2", link: "images/El-Gran-Canon-2.jpg" },
  { name: "El Gran Cañón", link: "images/El-Gran-Canon.jpg" },
  { name: "Montañas Calvas", link: "images/Montanas-Calvas.jpg" },
  { name: "Lago-louise", link: "images/Lago-louise.jpg" },
  { name: "Valle de Yosemite", link: "images/Yosemite.jpg" },
];

initialCards.forEach(function (item, i) {
  savePost(item.link, item.name);
});

// Form validator

const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add("form__input_type_error");
  errorElement.textContent = errorMessage;
  errorElement.classList.add("form__input-error_active");
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove("form__input_type_error");
  errorElement.classList.remove("form__input-error_active");
  errorElement.textContent = "";
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(".form__input"));
  const buttonElement = formElement.querySelector(".form__submit");
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(".form"));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });

    setEventListeners(formElement);
  });
};

enableValidation();

// Button State

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add("form__submit_inactive");
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove("form__submit_inactive");
    buttonElement.disabled = false;
  }
};
