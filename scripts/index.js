//store the products array in localstorage as "products"

function Data(t, d, p, i) {
    this.type = t;
    this.desc = d;
    this.price = p;
    this.image = i;
}

function submitData(e) {
    e.preventDefault();
    //products.innerText = null;
    let arr = JSON.parse(localStorage.getItem("products")) || [];

   
    let form = document.getElementById("products");
    let type = document.getElementById("type").value;
    let desc = document.getElementById("desc").value;
    let price = document.getElementById("price").value;
    let image = document.getElementById("image").value;

    let a1 = new Data(type, desc, price, image)

    arr.push(a1)

   //console.log(a1);

   localStorage.setItem("products", JSON.stringify(arr))
   window.location.reload();

}

function show(){
    window.location.href = "inventory.html"
}

