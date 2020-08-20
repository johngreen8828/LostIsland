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

function openModal(imgForModal, index){
    index = index-1;
    let modal = document.getElementById('lodge-modal');
    let slides = document.getElementsByClassName("photo-link")
    let img = document.getElementById('img');
    let close = document.getElementsByClassName("close")[0];
    let prev = document.getElementsByClassName("prev")[0];
    let next = document.getElementsByClassName("next")[0];
    modal.style.display = "block";
    prev.style.display = "block";
    next.style.display = "block";
    img.src = imgForModal;
    
    close.onclick = function(){
        modal.style.display = "none";
        prev.style.display = "none";
        next.style.display = "none";
    }

    next.onclick = function(){
        currentSlide = slides[index];
        nextSlide = slides[index + 1];
        if(nextSlide === undefined){
            nextSlide = slides[0];
            index = 0;
        }
        img.src = "";
        let imgSrc = nextSlide.childNodes[1].childNodes[0].nextSibling.src;
        img.src = imgSrc;
        console.log(img.src);
        if(index < slides.length){
            index++;
            console.log("after  " + index + "  Length: "+ slides.length);
        }              
    }

    prev.onclick = function(){
        currentSlide = slides[index];
        nextSlide = slides[index - 1];
        if(nextSlide === undefined){
            nextSlide = slides[slides.length - 1];
            index = slides.length - 1;
        }
        img.src = "";
        let imgSrc = nextSlide.childNodes[1].childNodes[0].nextSibling.src;
        img.src = imgSrc;
        console.log(img.src);
        if(index < slides.length){
            index--;
        }          
    }
}



(() => {
    requestAnimationFrame(() => {       
        let navContainer = document.getElementById("nav-container");
        let dropDownElement = document.createElement("div");
            dropDownElement.style.height = "75%";
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
                homeAnchor.href = "../index.html";
                homeAnchor.style.display = "block";
                homeAnchor.style.color = "Black";
                homeAnchor.style.borderBottom = "1px solid black";
                homeAnchor.style.padding = "8%"; 
                homeAnchor.style.fontSize = "20px";
                homeAnchor.style.textDecoration = "none";
            let huntingAnchor = dropDownElement.appendChild(document.createElement('a'));
                huntingAnchor.innerHTML = "Waterfowl Hunting";
                huntingAnchor.href = "../pages/WaterfowlHunting.html";
                huntingAnchor.style.display = "block";
                huntingAnchor.style.color = "Black";
                huntingAnchor.style.borderBottom = "1px solid black";
                huntingAnchor.style.padding = "8%"
                huntingAnchor.style.fontSize = "20px";
                huntingAnchor.style.textDecoration = "none";
            let groupHuntAnchor = dropDownElement.appendChild(document.createElement('a'));
                groupHuntAnchor.innerHTML = "Corporate and Group Hunts";
                groupHuntAnchor.href = "../pages/GroupHunt.html";
                groupHuntAnchor.style.display = "block";
                groupHuntAnchor.style.color = "Black";
                groupHuntAnchor.style.borderBottom = "1px solid black";
                groupHuntAnchor.style.padding = "8%";
                groupHuntAnchor.style.fontSize = "20px";
                groupHuntAnchor.style.textDecoration = "none";
            let deerHuntingAnchor = dropDownElement.appendChild(document.createElement('a'));
                deerHuntingAnchor.innerHTML = "White-tailed Deer Hunting";
                deerHuntingAnchor.href = "../pages/WhitetailDeer.html";
                deerHuntingAnchor.style.display = "block";
                deerHuntingAnchor.style.color = "Black";
                deerHuntingAnchor.style.borderBottom = "1px solid black";
                deerHuntingAnchor.style.padding = "8%";
                deerHuntingAnchor.style.fontSize = "20px";
                deerHuntingAnchor.style.textDecoration = "none";
            let theLodgeAnchor = dropDownElement.appendChild(document.createElement('a'));
                theLodgeAnchor.innerHTML = "Off-Season Lodge Rental";
                theLodgeAnchor.href = "../pages/OffSeasonLodge.html";
                theLodgeAnchor.style.display = "block";
                theLodgeAnchor.style.color = "Black";
                theLodgeAnchor.style.borderBottom = "1px solid black";
                theLodgeAnchor.style.padding = "8%";
                theLodgeAnchor.style.fontSize = "20px";
                theLodgeAnchor.style.textDecoration = "none";
            let contactAnchor = dropDownElement.appendChild(document.createElement('a'));
                contactAnchor.innerHTML = "Contact";
                contactAnchor.href = "../pages/contact.html";
                contactAnchor.style.display = "block";
                contactAnchor.style.color = "Black";
                contactAnchor.style.borderBottom = "1px solid black";
                contactAnchor.style.padding = "8% 8% 12% 8%";
                contactAnchor.style.fontSize = "20px";
                contactAnchor.style.textDecoration = "none";
        });
})();

