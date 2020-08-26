function retrieveCatalog(){
    //url: /catalog/GetCatalog

    $.ajax({
        url: "/catalog/getCatalog",
        type: "GET",
        success: res => {
            console.warn("From server", res);
            // display cars on the HTML
            //for(let i=0; i< list.length)
        },
        error: function (detail){
            console.error(detail);
        }
    });
}

function init(){
    console.log("Catalog page!");
    //get data
    retrieveCatalog();
    //hook events
}
window.onload = init;