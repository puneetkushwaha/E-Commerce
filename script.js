document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        alert('Item added to cart!');
        // Logic for adding to cart can be added here (e.g., localStorage, cart array)
    });
});

document.querySelectorAll('.remove-item').forEach(button => {
    button.addEventListener('click', () => {
        alert('Item removed from cart!');
        // Logic for removing from cart can be added here (e.g., localStorage, cart array)
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const brands = document.querySelector(".brands");
    const brandsWrapper = document.querySelector(".brands-wrapper");

    // Duplicate the brands for a seamless loop
    brands.innerHTML += brands.innerHTML;

    // Variables to control scroll
    let scrollSpeed = 2; // Adjust for desired speed
    let scrollPosition = 0;

    function loopScroll() {
        scrollPosition -= scrollSpeed;

        // Reset position when scrolling past the original width
        if (Math.abs(scrollPosition) >= brands.scrollWidth / 2) {
            scrollPosition = 0;
        }

        brands.style.transform = `translateX(${scrollPosition}px)`;
        requestAnimationFrame(loopScroll);
    }

    // Start the loop
    loopScroll();
});
document.addEventListener("DOMContentLoaded", () => {
    const banner = document.querySelector(".discount-banner");

    // Duplicate the content for seamless scrolling
    banner.innerHTML += banner.innerHTML;

    let scrollSpeed = 2; // Adjust speed of scrolling
    let scrollPosition = 0;

    function loopScroll() {
        scrollPosition -= scrollSpeed;

        // Reset when scrolled past half the width
        if (Math.abs(scrollPosition) >= banner.scrollWidth / 2) {
            scrollPosition = 0;
        }

        banner.style.transform = `translateX(${scrollPosition}px)`;
        requestAnimationFrame(loopScroll);
    }

    // Start scrolling
    loopScroll();
});
// Select all products
const products = document.querySelectorAll('.product');

// Loop through products and attach hover event
products.forEach(product => {
    product.addEventListener('mouseenter', () => {
        const name = product.dataset.name; // Fetch product name
        product.querySelector('h3').textContent = name; // Update product title
    });

    product.addEventListener('mouseleave', () => {
        const name = product.dataset.name; // Fetch product name
        product.querySelector('h3').textContent = name; // Clear the product name
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const productRow = document.querySelector('.product-row');
    const arrowRight = document.querySelector('.arrow-right');

    // Detect if the product row is scrollable
    if (productRow.scrollWidth > productRow.clientWidth) {
        productRow.classList.add('show-arrow');
    }

    // When arrow is clicked, slide the products
    arrowRight.addEventListener('click', () => {
        // Toggle sliding
        productRow.classList.toggle('slide');
    });
});
