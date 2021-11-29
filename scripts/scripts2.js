function addOption(array){
  let arr =[]
  array.forEach((item) =>{
    (item.categoria =="Premium")? arr.push(item.Nombre) : arr;
  })
  let listado = new Set(arr)
  listado.forEach((elem) => {
     let option = document.querySelector('.product-options2')
     option.innerHTML += `<option>${elem}</option>`
  });
}

addOption(productos)

let productPremium = document.querySelector('.salient-products-premium')

function showPremium(array){
  productPremium.innerHTML = "";

  array.forEach((item)=>{
    if (item.categoria == 'Premium') {
      let div_premium = document.createElement('div')
      div_premium.classList.add('--product-container-premium-page', `${item.clase}`)
      div_premium.innerHTML +=`<div class="card-container-premium-page">
                                <div class="card-img">
                                <img class="card-img-top" src="${item.img}" alt="Card image cap">
                                <h5 class="card-id">${item.ID}</h5>
                                </div>
                                <div class="card-info">
                                <h5 class="card-title">${item.Nombre}</h5>
                                <p class="card-description">${item.Descripcion}</p>
                                <hr>
                                <p class="card-price"><small class="text-muted">$ ${item.Precio}</p>
                                </div>
                              </div>`

      productPremium.appendChild(div_premium)

    }
    primerProducto(productos)
  })
}

function filterCategory(){

  let option = document.querySelector('.product-options2')
  option.addEventListener('change', ()=>{
    let arrNew = []
    productos.forEach((item) => {
      (item.Nombre === option.value) ? item.clase= "show" : item.clase="hide";
      (item.clase=="show") ? arrNew.push(item) : arrNew;
      (item.clase=="show") ? showPremium(arrNew) : undefined;
    });
  })
}
function primerProducto(array){
  let firstProduct = []
  array.forEach((item)=>{
    if (item.categoria == 'Premium') {
      firstProduct.push(item)
    }
  })
  firstProduct[0].clase="show"
}


showPremium(productos)
filterCategory()
