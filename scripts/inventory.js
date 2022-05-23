
let arr = JSON.parse(localStorage.getItem("products")) || [];

//console.log(arr);
let all_products = document.getElementById("all_products");

arr.forEach(function (el,index) {

    let div = document.createElement("div")

    let image = document.createElement("img");
    image.src = el.image;
    image.setAttribute("class", "img")

    let div1 = document.createElement("div");
    div1.setAttribute("class","div1")

    let price = document.createElement("h3");
    price.innerText = el.price;

    let type = document.createElement("h2");
    type.innerText = el.type;

    let desc = document.createElement("h4");
    desc.innerText = el.desc;

    let btn = document.createElement("button");
    btn.innerText = "Remove Product"
    btn.setAttribute("id", "remove_product")
    btn.addEventListener("click", function(el,index){
        removeProduct(el,index)
    })

    div1.append(type, desc, price, btn)

    div.append(image, div1);

    div.setAttribute("id", "div")

    all_products.append(div);
});

function removeProduct(el,index){
    arr.splice(el, 1);
    //console.log(arr)
    localStorage.setItem("products",JSON.stringify(arr));
    window.location.reload();    
}


function addMore() {
    window.location.href = "index.html"
}