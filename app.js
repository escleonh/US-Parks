const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close');
const modalTitle = document.querySelector('.modalTitle');
const parks = document.getElementById('parks');
const parkFullName = document.getElementById('parkFullName');
const description = document.getElementById('description');
const parkLocation = document.getElementById('location');
const modalContent = document.querySelector('.modalContent');
const loadingImg = document.getElementById('loadingGIF');
//When a user click on a state, this functions triggers
function onClick(){
    
   
    let stateCode = event.target.id;
    let stateName = event.target.getAttribute('title');
   

    modal.style.display = "block";
    
        // modal.classList.add('show');
        // modal.classList.remove('hide');

        modalTitle.innerHTML= "<h2>Parks in "+stateName+"</h2>";

    fetch('https://developer.nps.gov/api/v1/parks?statecode='+stateCode+'&api_key=ymoGeFH1NkQWm8tw6p1bSgpIETUX31jXzJNDMwIo')
    .then(res => res.json() )
    .then(data => data.data.forEach(element => {
        loadingImg.style.display="none";
        parks.insertAdjacentHTML("beforeend", 
        "<div class='park'>"+ 
            "<img src='"+element.images[0].url+"' width='300' height='200'>"+
            "<p>"+ element.fullName+"</p>"+
            "<p>"+ element.addresses[0].city+", "+element.addresses[0].stateCode+"</p>"+
            "<p>"+ element.description +"</p>"+
            "<a href='"+element.url+"' id='learnMoreBtn'>Learn More</a>"+
        "</div>");

    }));

    closeBtn.addEventListener("click", function(){
        // modal.classList.remove('show');
        // modal.classList.add('hide');
        modal.style.display = "none";
        parks.innerHTML = "";
        });
}

