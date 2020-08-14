function openDropdownForPhone() {
    navSlider = document.getElementById("small-nav");
    if (navSlider.style.width === "0px"){
        navSlider.style.width = "80%";
    }else {
        navSlider.style.width = "0px";
    }
    

}
   
function closeDropdownForPhone() {
    document.getElementById("dropdown-js").style.width = "0";
}

(() => {
    requestAnimationFrame(() => {       
        let navContainer = document.getElementById("nav-container");
        let dropDownElement = document.createElement("div");
            dropDownElement.style.height = "54%";
            dropDownElement.style.display = "block"
            dropDownElement.style.position = "absolute";
            dropDownElement.style.zIndex = 1;
            dropDownElement.style.right = "20px";
            dropDownElement.style.bottom = "auto";
            dropDownElement.style.backgroundColor = "#945f30";
            dropDownElement.style.top = "0";
            dropDownElement.style.transition = ".5s";
            dropDownElement.style.width = "0px";
            dropDownElement.style.marginTop = "6.81em";
            dropDownElement.style.borderRadius = "3%";
            dropDownElement.style.overflow ="hidden";
            dropDownElement.id = "small-nav";
            navContainer.appendChild(dropDownElement);
            let homeAnchor = dropDownElement.appendChild(document.createElement('a'));
                homeAnchor.innerHTML = "Home";
                homeAnchor.href = "index.html";
                homeAnchor.style.display = "block";
                homeAnchor.style.color = "Black";
                homeAnchor.style.borderBottom = "1px solid black";
                homeAnchor.style.padding = "8%";
                homeAnchor.style.fontSize = "20px";
                homeAnchor.style.textDecoration = "none";
            let huntingAnchor = dropDownElement.appendChild(document.createElement('a'));
                huntingAnchor.innerHTML = "Hunting";
                huntingAnchor.href = "pages/hunting.html";
                huntingAnchor.style.display = "block";
                huntingAnchor.style.color = "Black";
                huntingAnchor.style.borderBottom = "1px solid black";
                huntingAnchor.style.padding = "8%"
                huntingAnchor.style.fontSize = "20px";
                huntingAnchor.style.textDecoration = "none";
            let theLodgeAnchor = dropDownElement.appendChild(document.createElement('a'));
                theLodgeAnchor.innerHTML = "The Lodge";
                theLodgeAnchor.href = "pages/theLodge.html";
                theLodgeAnchor.style.display = "block";
                theLodgeAnchor.style.color = "Black";
                theLodgeAnchor.style.borderBottom = "1px solid black";
                theLodgeAnchor.style.padding = "8%";
                theLodgeAnchor.style.fontSize = "20px";
                theLodgeAnchor.style.textDecoration = "none";
            let contactAnchor = dropDownElement.appendChild(document.createElement('a'));
                contactAnchor.innerHTML = "Contact";
                contactAnchor.href = "pages/contact.html";
                contactAnchor.style.display = "block";
                contactAnchor.style.color = "Black";
                contactAnchor.style.borderBottom = "1px solid black";
                contactAnchor.style.padding = "8% 8% 12% 8%";
                contactAnchor.style.fontSize = "20px";
                contactAnchor.style.textDecoration = "none";
        });
})();

