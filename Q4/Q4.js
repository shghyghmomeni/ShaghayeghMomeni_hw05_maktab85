let setting = {
  top: 50,
  right: 10,
  html: "Hello!",
};
function showNotification() {
  let msgbox = document.getElementById("notifBox");
  msgbox.style.top = setting.top;
  msgbox.style.left = setting.left;
  msgbox.style.right = setting.right;
  msgbox.innerHTML += `<h3>${setting.html}</h3>`;
}
showNotification();
