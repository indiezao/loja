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


// criar cards de produtos
function createProductCard(product){
    return `
    <div class="product-card-back">
        <div class="product-card">
            <img src="${product.image}" alt="${product.title}" class="prodcut-image">
            <h3 class="product-title">${product.title.toLowerCase()}</h3>
            <div class="product-price">${formatPrice(product.price)}</div>
            <div class="product-discount">${product.discount}% OFF</div>
        </div>
    </div>
    `
}


// mostrar cards dos produtos
function renderProductCard(product_list){
    const grid = document.getElementById("productsGrid");
    grid.innerHTML = product_list.map(createProductCard).join("")
}


// pesquisa de produtos
function searchProducts(){
    const searchInputText = document.getElementById("searchInput").value.toLowerCase()
    const filteredProducts = product_list.filter(product => product.title.toLowerCase().includes(searchInputText))

    renderProductCard(filteredProducts)
}


// pega uma palavra aleatoria da lista
function getRandomWord(){
    const randomWord = randomWordList[Math.floor(Math.random() * randomWordList.length)]
    if (randomWord == currentRandom){
        getRandomWord()

    } else {
        currentRandom = randomWord
        return currentRandom
    }
}


// muda o texto no timer e adiciona as classes para fazer a animação
function changeText(){
    const dynamicText = document.getElementById("dynamic-text")

    dynamicText.classList.add("fade-out")

    setTimeout(() => {
        dynamicText.textContent = getRandomWord(currentRandom)
        dynamicText.classList.remove("fade-out")
        dynamicText.classList.add("fade-in")

        setTimeout(() => {
            dynamicText.classList.remove("fade-in")
            dynamicText.classList.add("fade-out")

            changeText()
        }, 2000)
    }, 500)
    
    

}


// on ready
document.addEventListener("DOMContentLoaded", () => {
    renderProductCard(product_list)

    document.getElementById("searchBtn").addEventListener("click", searchProducts)

    changeText()
})

