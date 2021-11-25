const productContainer = document.querySelector('.main__container--products-box')
const productPremium = document.querySelector('.salient-products')
console.log(productPremium);


function showProducts(array){
  array.forEach((item) => {
    let div = document.createElement('div')
    div.classList.add('--product-container')
    div.innerHTML +=`<div class="card-container">
                      <div class="card-img">
                        <img class="card-img-top" src="${item.img}" alt="Card image cap">

                        <div class="card-info">
                          <h5 class="card-title">${item.Nombre}</h5>
                          <p class="card-id">${item.ID}</p>
                          <p class="card-description">${item.Descripcion}</p>
                          <hr>
                          <p class="card-price"><small class="text-muted">$ ${item.Precio}</p>
                        </div>
                      </div>`
      productContainer.appendChild(div)
  });
}

function showPremium(array){
  array.forEach((item)=>{
    console.log(item.Categoría);
    if (item.Categoría == 'Premium') {
      let div_premium = document.createElement('div')
      div_premium.classList.add('--product-container-premium')
      div_premium.innerHTML +=`<div class="card-container-premium">
                                <div class="card-img">
                                <img class="card-img-top" src="${item.img}" alt="Card image cap">
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
  })
}
function addOption(array){
  let arr =[]
  array.forEach((item) =>{
    return arr.push(item.Categoría)
  })
  let listado = new Set(arr)
  listado.forEach((elem) => {
     let option = document.querySelector('.product-options')
     option.innerHTML += `<option>${elem}</option>`
  });

}

showProducts(productos)
addOption(productos)
showPremium(productos)
