const root = document.getElementById("root");
const basket = document.getElementById("basket");

function render(list){
    let template = `<section class="products">`
    template += list.map(item => {
        return `
            <div class="product">
                <img src="${item.imgSrc}" />
                <h3>${item.title}</h3>
                <h5>${item.author}</h5>
                <span>${item.genre}</span>
                ${
                    !BASKET.find(basketItem => basketItem.id === item.id)
                    ?
                    `<button onclick="handleAddToBasket('${item.id}')">افزودن به کتابخانه</button>`
                    :
                    `<h4>به کتابخانه اضافه شد</h4>`
                }
            </div>`
    }).join("");

    template += `</section>`;
    root.innerHTML = template;
    basket.textContent = BASKET.length
}

function renderBasket() {
    let template = `<section class="baskets">`
    template += BASKET.map(item => {
        return`
            <div class="product basket">
                <img src="${item.imgSrc}"/>
                <h3>${item.title}</h3>
                <h5>${item.author}</h5>
                <span>${item.genre}</span>
                <button onclick="" class='delete'>حذف از کتابخانه </button>
            </div>`
    }).join("");

    template += `</section>`;
    root.innerHTML = template;
    basket.textContent = BASKET.length
}

function handleSearch(event) {
    const value = event.target.value;
    const searchResult = PRODUCTS.filter(product => product.title.search(value) > -1);
    render(searchResult);
}

function handleAddToBasket(productId) {
    const finded = PRODUCTS.find(product => product.id === +productId);
    BASKET.push(finded);
    render(PRODUCTS);
}

window.addEventListener("load", () => {
    render(PRODUCTS)
})