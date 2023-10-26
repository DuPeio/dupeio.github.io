function main(){

    const btnInfo = document.querySelector(".info");
    const listInfo = document.querySelector(".listInfo");
    const mouseFollow = document.querySelector('.mouseFollow')
    const mouseFollow2 = document.querySelector('.mouseFollow2')
    const mouseFollow3 = document.querySelector('.mouseFollow3')
    
    btnInfo.addEventListener("click", () => {
        listInfo.classList.toggle("listInfoShow");
        console.log(listInfo);
    });
    
    window.addEventListener('mousemove', (e) => {
        mouseFollow.style.left = e.pageX + "px";
        mouseFollow.style.top = e.pageY + "px";
        mouseFollow2.style.left = e.pageX + "px";
        mouseFollow2.style.top = e.pageY + "px";
        mouseFollow3.style.left = e.pageX + "px";
        mouseFollow3.style.top = e.pageY + "px";
    });
}

window.onload(main);
