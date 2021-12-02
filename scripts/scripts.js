
const list_element = document.querySelector('.--products-list')
const page_numbers = document.querySelector('.pagenumbers')

let current_page = 1;
let rows = 6;

function displayProducts(items, wrapper, rows_per_page, page){
  let totalPages = Math.ceil(productos.length / rows)
  wrapper.innerHTML = "";
  page--;

  let start =rows_per_page * page;
  let end = start + rows_per_page;
  let paginatedItems = items.slice(start,end)


  for (let i = 0; i < paginatedItems.length; i++) {
    let item = paginatedItems[i]
    item.clase="show"
    let div = document.createElement('div')
        div.classList.add("--product-container",`${item.clase}`)
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
          list_element.appendChild(div)
  }
  pagesChange(current_page, totalPages)
}

let arrNew = [];






function filterCategory(){
  let option = document.querySelector('.product-options')
  let nextPageBtn = document.querySelector('.next')

  option.addEventListener('change', ()=>{
    arrNew = []
    let current_page = 1;

    productos.forEach((item) => {
      (item.categoria === option.value) ? item.clase= "show" : item.clase="hide";
      (option.value=="Todas") ? item.clase= "show" : undefined;
      (item.clase=="show") ? arrNew.push(item) : arrNew;
      (item.clase=="show") ? displayProducts(arrNew, list_element, rows, current_page) : undefined;

    });
    totalPages2 = Math.ceil(arrNew.length / rows)
    pagesChange(current_page, totalPages2)

  })
}

function filterCategoryClick(){
  let options = document.querySelectorAll('.option')
  let current_page = 1;

  options.forEach((items) => {
    items.addEventListener('click', ()=>{
      arrNew = []
      productos.forEach((item) => {
        (item.categoria === items.innerText) ? item.clase= "show" : item.clase="hide";
        (items.innerText=="Todas") ? item.clase= "show" : undefined;
        (item.clase=="show") ? arrNew.push(item) : arrNew;
        (item.clase=="show") ? displayProducts(arrNew, list_element, rows, current_page) : undefined;

      });
      totalPages2 = Math.ceil(arrNew.length / rows)
      pagesChange(current_page, totalPages2)
  });

})
}
filterCategoryClick()

const productPremium = document.querySelector('.salient-products')

function showPremium(array){
  array.forEach((item)=>{
    if (item.categoria == 'Premium') {
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

function nextPage(){
    let nextPageBtn = document.querySelector('.next')
    let totalPages = Math.ceil(productos.length / rows)
    nextPageBtn.addEventListener('click', ()=>{
      (current_page === totalPages) ? nextPageBtn.disabled : ++current_page
      displayProducts(productos, list_element, rows, current_page)
    })

}


function backPage(){
  let backPage = document.querySelector('.back')
  backPage.addEventListener('click', ()=>{
    (current_page === 1) ? backPage.disabled : --current_page
    displayProducts(productos, list_element, rows, current_page);
  })
}

function addOption(array){
  let arr =["Todas"]
  array.forEach((item) =>{
    return arr.push(item.categoria)
  })
  let listado = new Set(arr)
  listado.forEach((elem) => {
     let option = document.querySelector('.product-options')
     option.innerHTML += `<option>${elem}</option>`
  });
}


function pagesChange(current_page, totalPages){
  let currentPage = document.querySelector('.current-page')
  let total_Pages = document.querySelector('.total-pages')
  currentPage.innerHTML = `${current_page} - ` ;
  total_Pages.innerHTML = totalPages;
}



displayProducts(productos, list_element, rows, current_page)
filterCategory()
addOption(productos)
showPremium(productos)
nextPage()
backPage()
