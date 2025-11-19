const product_list = [
    {
        id: 1,
        title: "Poltrona verde musgo",
        price: 956.99,
        discount: 15,
        image: "https://images.unsplash.com/photo-1626788570274-9cfa21b90e73?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 2,
        title: "Lampada incandescente",
        price: 56.99,
        discount: 75,
        image: "https://images.unsplash.com/photo-1757262441636-4ab072d8146a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFtcGFkYSUyMGluY2FuZGVzY2VudGV8ZW58MHx8MHx8fDA%3D"
    },
    {
        id: 3,
        title: "Tocador de vinil",
        price: 597.99,
        discount: 33,
        image: "https://images.unsplash.com/photo-1700382316747-e7023a94a393?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 4,
        title: "Tocador de vinil",
        price: 597.99,
        discount: 33,
        image: "https://images.unsplash.com/photo-1700382316747-e7023a94a393?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 5,
        title: "Tocador de vinil",
        price: 597.99,
        discount: 33,
        image: "https://images.unsplash.com/photo-1700382316747-e7023a94a393?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 6,
        title: "Tocador de vinil",
        price: 597.99,
        discount: 33,
        image: "https://images.unsplash.com/photo-1700382316747-e7023a94a393?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
]



// lista de palavras para o carrossel da telad e inicio
const randomWordList = [
    "lâmpadas",
    "sofás",
    "câmeras",
    "video-games",
    "consoles",
    "celulares",
    "roupas"
];

let currentRandom = ""



// formata o preço para o real
function formatPrice(price){
    return price.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})
}


// criar cards de produtos pequenos (para a pagina de pesquisa)
function createProductCardSmall(product){
    return `
    <div class="product-card-back small">
        <div class="product-card small">
            <img src="${product.image}" alt="${product.title}" class="product-image small">
            <h3 class="product-title small">${product.title.toLowerCase()}</h3>
            <div class="product-price small">${formatPrice(product.price)}</div>
            <div class="product-discount small">${product.discount}% OFF</div>
        </div>
    </div>
    `
}


// mostrar cards dos produtos
function renderProductCard(product_list){
    const gridSmall = document.getElementById("productsGridSmall");
    gridSmall.innerHTML = product_list.map(createProductCardSmall).join("")
}


// pesquisa de produtos
function searchProducts(){
    const searchInputText = document.getElementById("searchInput").value.toLowerCase()
    const filteredProducts = product_list.filter(product => product.title.toLowerCase().includes(searchInputText))

    renderProductCard(filteredProducts)
}




// on ready
document.addEventListener("DOMContentLoaded", () => {
    renderProductCard(product_list)

    document.getElementById("searchBtn").addEventListener("click", searchProducts)
})

const searchInput = document.getElementById("searchInput")
const searchBtn = document.getElementById("searchBtn")
searchInput.addEventListener("input", function(){
    searchInput.classList.add("inputTyped")
    searchBtn.classList.add("inputTypedBtn")
    setTimeout(() => {
            searchInput.classList.remove("inputTyped")
            searchBtn.classList.remove("inputTypedBtn")
        }, 100)
})
