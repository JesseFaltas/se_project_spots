const editProfileButton = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");

editProfileButton.addEventListener("click", () => {
  editProfileModal.style.visibility = "visible";
});

editProfileCloseBtn.addEventListener("click", () => {
  editProfileModal.style.visibility = "hidden";
});

editProfileModal.addEventListener("click", (e) => {
  if (e.target === editProfileModal) {
    editProfileModal.style.visibility = "hidden";
  }
});

const newPostButton = document.querySelector(".profile__add-btn");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");

newPostButton.addEventListener("click", function () {
  newPostModal.classList.add("modal__is-opened");
});

newPostCloseBtn.addEventListener("click", function () {
  newPostModal.classList.remove("modal__is-opened");
});
