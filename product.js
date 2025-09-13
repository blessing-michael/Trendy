document.addEventListener("DOMContentLoaded", () => {
    const cart = [];

    // DOM elements
    const productNameEl = document.getElementById("productName");
    const productImageEl = document.getElementById("productImage");
    const addBtn = document.getElementById("addToCartBtn");
    const sizeSelect = document.getElementById("size");
    const colorSelect = document.getElementById("color");
    const qtyInput = document.getElementById("quantity");
    const qtyMinus = document.querySelector(".qty-minus");
    const qtyPlus = document.querySelector(".qty-plus");
    const cartList = document.getElementById("cartItems");
    const cartEmpty = document.getElementById("cartEmpty");

    // Render cart
    function renderCart() {
        cartList.innerHTML = "";
        if (cart.length === 0) {
            cartEmpty.style.display = "block";
            return;
        }
        cartEmpty.style.display = "none";

        cart.forEach((item, i) => {
            const li = document.createElement("li");
            li.className =
                "list-group-item d-flex justify-content-between align-items-start";
            li.innerHTML = `
                <div class="d-flex align-items-center">
                  <img src="${item.image}" alt="${item.name}" 
                       style="width:50px; height:50px; object-fit:cover; margin-right:10px; border-radius:5px;">
                  <div>
                    <strong>${item.name}</strong>
                    <div class="small">Size: ${item.size} • Color: ${item.color} • Qty: ${item.qty}</div>
                  </div>
                </div>
                <div>
                  <button class="btn btn-sm btn-outline-danger remove-btn" data-index="${i}">Remove</button>
                </div>
            `;
            cartList.appendChild(li);
        });

        // remove button logic
        document.querySelectorAll(".remove-btn").forEach((btn) => {
            btn.addEventListener("click", (e) => {
                const idx = parseInt(e.currentTarget.dataset.index, 10);
                cart.splice(idx, 1);
                renderCart();
            });
        });
    }

    // Quantity controls
    qtyMinus.addEventListener("click", () => {
        let val = parseInt(qtyInput.value, 10);
        if (val > 1) qtyInput.value = val - 1;
    });

    qtyPlus.addEventListener("click", () => {
        let val = parseInt(qtyInput.value, 10);
        qtyInput.value = val + 1;
    });

    // Handle color change
    colorSelect.addEventListener("change", () => {
        const selectedOption = colorSelect.options[colorSelect.selectedIndex];
        const imgPath = selectedOption.getAttribute("data-image");

        if (imgPath) {
            productImageEl.src = imgPath;
        } else {
            productImageEl.src = "images/B107.jpg"; // fallback
        }
    });

    // Add to cart
    addBtn.addEventListener("click", () => {
        const productName = productNameEl.textContent.trim();
        const productImage = productImageEl.getAttribute("src");
        const size = sizeSelect.value;
        const color = colorSelect.value;
        let qty = parseInt(qtyInput.value, 10);

        if (!size) {
            alert("Please select a size.");
            return;
        }
        if (!color) {
            alert("Please select a color.");
            return;
        }
        if (!qty || qty < 1) qty = 1;

        // check if same product/size/color exists already
        const found = cart.find(
            (it) => it.name === productName && it.size === size && it.color === color
        );
        if (found) {
            found.qty += qty;
        } else {
            cart.push({ name: productName, size, color, qty, image: productImage });
        }

        renderCart();
        qtyInput.value = 1;
    });

    renderCart();
});
