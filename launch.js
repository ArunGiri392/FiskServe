const realContainer = document.querySelector("#resultant");
// console.log(realContainer);
fetch("https://raw.githubusercontent.com/subratppandey/JSON-data-file/master/data.json")
.then(response => response.json())
.then((data) => {
    updatedata(data);
    // foodfinder(data);
});



function updatedata(data) {
    
    let allCardsDom = '';
    data.forEach((value)=>{
        // console.log(value.Type);
    //     if (evalue.titl === "fries"){
    //         const cardTemplate = 
    //         `<div class="col">
    //             <div class="card">
    //                 <a href=""><img src="${value.image}"
    //                     class="card-img-top" alt="..."></a>
    //                 <div class="card-body">
    //                     <h5 class="card-title">${value.title}</h5>
    //                     <p class="card-text">${value.description}</p>
    //                 </div>
    //             </div>
    //         </div>`;
    //      allCardsDom +=cardTemplate;
    //     }
    // realContainer.innerHTML = allCardsDom;

    //     });
        const cardTemplate = 
        // console.log(value.Type);
            `<div class="col">
                <div class="card">
                    <a href=""><img src="${value.image} "
                        class="card-img-top" alt="..."></a>
                    <div class="card-body">
                        <h5 class="card-title">${value.foodName}</h5>
                        <p class="card-text">${value.description}</p>
                    </div>
                </div>
            </div>`;
         allCardsDom +=cardTemplate;
    });
    realContainer.innerHTML = allCardsDom;
}

function foodfinder(data){
    console.log(55);
}