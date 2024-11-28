const notifications = document.querySelector(".notification-count");
const unreadMessages = document.querySelectorAll(".js-notification");
const markAll = document.querySelector(".mark-all");
const redDot = document.querySelectorAll(".red-dot-container");

markAll.addEventListener("click", () => {
    notifications.textContent = 0;

    redDot.forEach((singleDot) => {
        singleDot.style.visibility = "hidden";
    })
    
    
})


unreadMessages.forEach((message) => {
    message.addEventListener("click", () => {
        const dot = message.querySelector(".red-dot-container");
        dot.style.display = "none"
        countMessages()
        
    })
});

// Decrement notifications count

function countMessages(){
    let count = notifications.innerHTML
        if(count > 0){
            count = count -1
        }

        notifications.textContent = count
}