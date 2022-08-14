let msg = document.getElementById("msg");

let msgonline = () => {
    msg.textContent = "Internet Connection Available";
    msg.style.cssText = "background-color: #e7f6d5; color: #689f38;";
}

let msgoffline = () => {
    msg.textContent = "No Internet Connection";
    msg.style.cssText = "background-color: #ffdde0; color: #d32f2f;";
}

if (window.navigator.onLine) {
    msgonline();
}else {
    msgoffline();
}

window.addEventListener("online", msgonline);
window.addEventListener("offline", msgoffline);