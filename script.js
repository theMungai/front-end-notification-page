const notifications = document.querySelector(".notification-count");
const unreadMessages = document.querySelectorAll(".js-notification");
const markAll = document.querySelector(".mark-all");
const redDot = document.querySelectorAll(".red-dot-container");

markAll.addEventListener("click", () => {
    notifications.textContent = 0;
    redDot.forEach((dot) => {
        dot.style.visibility = "hidden"
    })
})


unreadMessages.forEach((message) => {
    message.addEventListener("click", () => {
        eachDot()
    })
})

let count = 3
function eachDot(){
    redDot.forEach((dot) => {
       
        dot.style.visibility = "hidden";
    })

    if(count > 0){
        count --
    }
    
    notifications.textContent = count
}