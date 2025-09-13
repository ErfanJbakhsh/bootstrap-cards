async function loadcards() {
    const result = document.getElementById('json-source').textContent
    const ready = JSON.parse(result)
    let container = document.getElementById('cards-container')
    ready.forEach(cards => {
        let card_product = document.createElement('div')
        card_product.className = 'card-product'
        card_product.innerHTML = `
            <img class="product-img" src="${cards.img}" alt="">
            <p class="product-p">${cards.title}</p>
            <div class="badge-style badge d-flex gap-2">
                <img class="mb-5 badge-img" src="icons/location-pin.png" alt="">
                <p class="badge-p">شیراز</p>
            </div>
            <button class="btn btn-primary ms-3 mt-2">${cards.price} تومان</button>
            <div class="sell d-flex justify-content-between mt-2 ms-3">
                <div>
                    <p class="sell-p">در 186 فروشگاه</p>
                </div>
                <div class="d-flex col-3 gap-2 me-2">
                    <img class="sell-img" src="icons/icons8-like-48.png" alt="">
                    <img class="sell-img" src="icons/icons8-shopping-cart-24.png" alt="">
                </div>
            </div>
        `
        container.appendChild(card_product)
    });
}
loadcards();