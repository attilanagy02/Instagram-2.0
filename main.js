function init() {
    let img_holder = document.getElementById("img_holder");
    for (let i = 0; i < data.length; i++) {
        img_holder.innerHTML += 
        '<div class="col-sm-12 col-md-6 col-lg-4">' +
            '<div class="image" id="kep'+i+'"></div>' +
            '</div>';
    }
}

function getData(){
    $.getJSON("http://cyrio.hu/mechwartgram/mechwartgram_data.json",function (json){
        let data = json.data;
    })
}
init();
getData();