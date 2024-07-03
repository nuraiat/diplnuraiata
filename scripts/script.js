function updateTime() {
    const currentTimeElement = document.getElementById("currentTime");
    const now = new Date();
    currentTimeElement.innerHTML = now.toLocaleTimeString();
}


setInterval(updateTime, 1000);


updateTime();

window.onscroll = function() {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

document.getElementById("scrollToTopBtn").addEventListener("click", function() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
});
