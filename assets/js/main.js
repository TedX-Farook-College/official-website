// Navigation Menu



// tab section


function setupTab(){
    document.querySelectorAll(".tab__button").forEach(button =>{
        button.addEventListener("click",()=>{
            const sideBar = button.parentElement;
            const tabContainer = sideBar.parentElement;
            const tabNumber = button.dataset.forTab;
            const tabToActivate = tabContainer.querySelector(`.tab__content[data-tab="${tabNumber}"]`);
        
            sideBar.querySelectorAll(".tab__button").forEach(button =>{
                button.classList.remove("tab__button--active")
            });
            tabContainer.querySelectorAll(".tab__content").forEach(tab =>{
                tab.classList.remove("tab__content--active")
            });

            button.classList.add("tab__button--active");
            tabToActivate.classList.add("tab__content--active");
        
        });
    });
}
document.addEventListener("DOMContentLoaded",()=>{
    setupTab();

    //document.querySelectorAll(".tabs").forEach(tabContainer=>{
    //    tabContainer.querySelector(".tab__sidebar .tab__button"),click();
    //});

});