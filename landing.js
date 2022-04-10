const realContainer = document.querySelector("#resultant");
const button = document.querySelector(".button");
const landingPageContainer = document.querySelector(".main")

var myData = [];
fetch("https://raw.githubusercontent.com/subratppandey/JSON-data-file/master/data.json")
.then(response => response.json())
.then((data) => {
    myData = data;
    updatedata(data);
   
});



//function for random pictures in the landing page.
function updatedata(data) {
    var newData = []
    randomIndex = []
    var i = 0;
    var count = 0;
    while(i < 6 ){
    count ++;
    randomNumber = Math.floor(Math.random() * data.length);
    if (randomIndex.includes(randomNumber)){

    }
    else{
        newData.push(data[randomNumber]);
        randomIndex.push(randomNumber);
        i++;
    }
    
    }
    
    
    let allCardsDom = '';
    newData.forEach((value)=>{
       const cardTemplate = 
       
            `<div class="col">
                <div class="card"  data-foodname="${value}" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <a href="fooddetail.html?type=${value.foodName}"><img src="${value.image} "
                        class="card-img-top" alt="..."></a>
                   
                   
                </div>
            </div>`;
         allCardsDom +=cardTemplate;
        
    });
    realContainer.innerHTML = allCardsDom;

}





//adding event clicker for the Search option.
button.addEventListener("click",myfunction);

//function for the event clicker.
function myfunction(){
    const searchVariable = ((document.querySelector("#fname").value).toLowerCase()).split(' ').join('');
    console.log(searchVariable);
    var count = 0;
    
  

    let allCardsDom = `<div class="container mt-4">
       
    <div  id="resultant" class="row row-cols-1 row-cols-md-4 g-4 mt-4">`;
    myData.forEach((value)=>{
       lowerCasedValue = value.foodName.toLowerCase().split(' ').join('');
       if(lowerCasedValue.includes(searchVariable)){
            count ++;
            const cardTemplate = 
        
        `<div class="col">
        <div class="card"  data-foodname="${value}" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <a href="fooddetail.html?type=${value.foodName}"><img src="${value.image} "
                class="card-img-top" alt="..."></a>
            <div class="card-body">
                <h5 class="card-title">${value.foodName}</h5>
                <p class="card-text">${value.description}</p>
            </div>
            
        </div>
    </div>`;
         allCardsDom +=cardTemplate;

        }

        
    });
    
    allCardsDom += '</div></div>'
    //handling the different cases.Example: not a right keyword vs right keyword.
    
    if (count === 0){
        allCardsDom = `
        <h3>The food you entered is not available right now.Please make sure, You enter the right name.</h3>
        <h1>Thankyou!!</h1>
        `
        landingPageContainer.innerHTML = allCardsDom;
    }
    else{
        landingPageContainer.innerHTML = allCardsDom;
    }
    
   
}

 
