const productContainer = document.querySelector('.main__container--products-box')

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
showProducts(productos)
