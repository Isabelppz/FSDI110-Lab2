function retrieveCatalog(){
    //url: /catalog/GetCatalog

    $.ajax({
        url: "/catalog/getCatalog",
        type: "GET",
        success: res => {
            console.log("From server", res);
            //display cars on the HTML :
            for(let i=0; i< res.length;i++){
                displayCar(res[i]);
            }
        },
        error: function (detail){
            console.error(detail);
        }
    });
}

function displayCar(car){
    // get container
        var container = $("#catalog");

    // create template/sintax
        var sntx =
    `<div class='item'>
        <img src='${car.image}'>  
        <h3> ${car.year} ${car.make} ${car.model}</h3>
        <h4>${car.price} ${car.color} ${car.condition}</h4>
        <h5>Seats: ${car.seats} Mileage: ${car.mileage} MPG: ${car.mpg}</h5>
    </div>`;

    // add template to container
        container.append(sntx);
}

function init(){
    console.log("Catalog page!");
    //get data
    retrieveCatalog();
    //hook events
}
window.onload = init;

