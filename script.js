let cartCount = 0;

const cart = document.getElementById("cart-count");

function addToCart() {
    cartCount++;
    if (cart) {
        cart.innerText = cartCount;
    }
    alert("🎁 Gift added to cart successfully!");
}

function checkout() {
    if (cartCount === 0) {
        alert("Your cart is empty!");
    } else {
        alert("🎉 Thank you for shopping with GiftNest!");
        cartCount = 0;
        if (cart) {
            cart.innerText = cartCount;
        }
    }
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});