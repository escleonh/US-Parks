const modal = document.querySelector('.modal');
const closeIcon = document.querySelector('.closeIcon');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const modalTitle = document.querySelector('.modalTitle');
const parksWrapper = document.getElementById('parksWrapper');
const parkFullName = document.getElementById('parkFullName');
const description = document.getElementById('description');
const parkLocation = document.getElementById('location');
const modalContent = document.querySelector('.modalContent');
const loadingImg = document.querySelector('.loadingGIF');
//When a user click on a state, this functions triggers
function onClick(){
    
   
    let stateCode = event.target.id;
    let stateName = event.target.getAttribute('title');
       
    loadingImg.style.display="flex";
    modal.style.display = "block";


    modalTitle.innerHTML= "<h3>Parks in "+stateName+"</h3>";

    fetch('https://developer.nps.gov/api/v1/parks?statecode='+stateCode+'&api_key=ymoGeFH1NkQWm8tw6p1bSgpIETUX31jXzJNDMwIo')
    .then(res => res.json() )
    .then(data => data.data.forEach(element => {
        loadingImg.style.display="none";
        modalCloseBtn.style.display= "block";
        parksContainer.insertAdjacentHTML("beforeend", 
        "<div class='parkWrapper'>"+ 
            "<img src='"+element.images[0].url+"' width='300' height='200'>"+
            "<p><strong>"+ element.fullName+"</strong></p>"+
            "<p><em>"+ element.addresses[0].city+", "+element.addresses[0].stateCode+"</em></p>"+
            "<p>"+ element.description +"</p>"+
            "<a href='"+element.url+"' id='learnMoreBtn'>Learn More</a>"+
            
        "</div>");

    }));

    closeIcon.addEventListener("click", function(){
        if(parksContainer.innerHTML != ""){
        modal.style.display = "none";
        parksContainer.innerHTML = "";
        modalCloseBtn.style.display= "none";

        }

    });
    modalCloseBtn.addEventListener("click", function(){
        if(parksContainer.innerHTML != ""){
        modal.style.display = "none";
        parksContainer.innerHTML = "";
        modalCloseBtn.style.display= "none";

        }

    });
}

function closeModal(){
  if(event.target.getAttribute("class")=='modal'){
    if(parksContainer.innerHTML != ""){
    modal.style.display = "none";
    parksContainer.innerHTML = "";
    }
  }
  
}
