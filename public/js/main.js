document.getElementById('searchButton').addEventListener('click', searchItem)

async function searchItem(){
    try {
        let inputVal = document.getElementById('searchInput').value
        const response = await fetch(`/afterLogin/searchItem/${inputVal}`, {
            method: 'get',
            headers: {'Content-Type': 'application/json'}
        })
         const data = await response.json()
         document.getElementById('itemNumDisplay').innerText = data.itemNum
         document.getElementById('descriptionDisplay').innerText = data.description
         document.getElementById('quantityDisplay').innerText = data.quantity
         document.getElementById('priceDisplay').innerText = data.price
    }
    catch(err) {
        console.log(err)
    }
}
document.getElementById('cartButton').addEventListener('click', addToCart)

function addToCart(){   

}