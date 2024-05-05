const container = document.querySelector(".container");
const horizontalPosition = document.querySelector("#horizontal-position");
const verticalPosition = document.querySelector("#vertical-position");
const toastType = document.querySelector("#toast-type");
const toastMessage = document.querySelector("#toast-message");
const duration = document.querySelector("#duration");
const showToastBtn = document.querySelector("#show-toast-btn");

const toastMsgContainer = document.querySelector(".toast-msg-container");

showToastBtn.addEventListener("click", () => {
  const newToast = document.createElement("div");
  newToast.innerText = `${toastMessage.value} `;
  newToast.classList.add("toast-msg");
  newToast.classList.add(toastType.value);

  const closeIcon = document.createElement("span");
  closeIcon.innerText = " ✕";
  newToast.append(closeIcon);

  const removeToast = () => {
    // if (toastsContainer.classList.contains("right")) {
    //   newToast.classList.add("go-right");
    // } else {
    //   newToast.classList.add("go-left");
    // }

    setTimeout(() => {
      newToast.remove();
    }, 100);
  };

  closeIcon.addEventListener("click", () => {
    removeToast();
  });

  setTimeout(() => {
    newToast.remove();
  }, parseInt(duration.value) * 1000);

  if (horizontalPosition.value === "right") {
    toastMsgContainer.classList.add("right");
  } else {
    toastMsgContainer.classList.remove("right");
  }

  if (verticalPosition.value === "bottom") {
    toastMsgContainer.classList.add("bottom");
  } else {
    toastMsgContainer.classList.remove("bottom");
  }

  toastMsgContainer.append(newToast);
});
