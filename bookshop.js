// 1. Hiệu ứng gạch chân trên thanh điều hướng
const navInner = document.querySelector(".nav-inner");
const currentNavItem = navInner.querySelector(".nav-current");
let activeNavItem = currentNavItem;

const moveNavIndicator = (navItem) => {
    const navInnerLeft = navInner.getBoundingClientRect().left;
    const navItemLeft = navItem.getBoundingClientRect().left;

    activeNavItem = navItem;
    navInner.style.setProperty("--nav-indicator-left", `${navItemLeft - navInnerLeft}px`);
    navInner.style.setProperty("--nav-indicator-width", `${navItem.offsetWidth}px`);
};

navInner.addEventListener("mousemove", (event) => {
    const hoveredLink = event.target.closest(".nav-inner > a, .nav-category > a, .nav-submenu a");

    if (!hoveredLink) {
        moveNavIndicator(currentNavItem);
        return;
    }

    const category = hoveredLink.closest(".nav-category");
    moveNavIndicator(category ? category.querySelector(":scope > a") : hoveredLink);
});

navInner.addEventListener("mouseleave", () => {
    moveNavIndicator(currentNavItem);
});

window.addEventListener("resize", () => {
    moveNavIndicator(activeNavItem);
});

moveNavIndicator(currentNavItem);

// 2. Các thành phần của cửa sổ tài khoản khách hàng
const accountDialog = document.querySelector("#account-access");
const accountLoginForm = document.querySelector("#account-access-form");
const accountRegisterForm = document.querySelector("#account-register-form");
const accountLoginFeedback = document.querySelector("#account-access-feedback");
const accountRegisterFeedback = document.querySelector("#account-register-feedback");
const accountSocialFeedback = document.querySelector("#account-social-feedback");
const accountDialogTitle = document.querySelector("#account-dialog-title");
const accountDialogIntro = document.querySelector("#account-dialog-intro");

// 3. Mở và đóng cửa sổ đăng nhập/đăng ký
document.querySelector("[data-open-account-access]").addEventListener("click", (event) => {
    event.preventDefault();
    accountDialog.showModal();
});

document.querySelector("[data-close-account-access]").addEventListener("click", () => {
    accountDialog.close();
});

accountDialog.addEventListener("click", (event) => {
    if (event.target === accountDialog) {
        accountDialog.close();
    }
});

// 4. Chuyển đổi giữa form đăng nhập và form đăng ký
document.querySelectorAll("[data-account-mode]").forEach((button) => {
    button.addEventListener("click", () => {
        const isRegistering = button.dataset.accountMode === "register";

        accountLoginForm.hidden = isRegistering;
        accountRegisterForm.hidden = !isRegistering;
        accountLoginFeedback.textContent = "";
        accountRegisterFeedback.textContent = "";
        accountSocialFeedback.textContent = "";
        accountDialogTitle.textContent = isRegistering ? "Tạo tài khoản" : "Đăng nhập";
        accountDialogIntro.textContent = isRegistering
            ? "Tạo tài khoản để lưu lại góc đọc của riêng bạn."
            : "Đăng nhập để tiếp tục hành trình đọc sách của bạn.";

        document.querySelectorAll("[data-account-mode]").forEach((modeButton) => {
            modeButton.classList.toggle("is-active", modeButton === button);
        });
    });
});

// 5. Xử lý gửi form đăng nhập và đăng ký
accountLoginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    accountLoginFeedback.textContent = "Đây là giao diện minh họa; chức năng đăng nhập chưa được kết nối.";
});

const accountRegisterPassword = document.querySelector("#register-password");
const accountConfirmPassword = document.querySelector("#register-confirm-password");

const validateAccountPasswords = () => {
    const passwordsMatch = accountRegisterPassword.value === accountConfirmPassword.value;
    accountConfirmPassword.setCustomValidity(passwordsMatch ? "" : "Mật khẩu nhập lại chưa khớp.");
};

accountRegisterPassword.addEventListener("input", validateAccountPasswords);
accountConfirmPassword.addEventListener("input", validateAccountPasswords);

accountRegisterForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (accountRegisterPassword.value !== accountConfirmPassword.value) {
        accountConfirmPassword.setCustomValidity("Mật khẩu nhập lại chưa khớp.");
        accountConfirmPassword.reportValidity();
        return;
    }

    accountRegisterFeedback.textContent = "Đã nhận thông tin đăng ký minh họa; chức năng tạo tài khoản chưa được kết nối.";
});

// 6. Phản hồi cho quên mật khẩu và đăng nhập qua nền tảng khác
document.querySelector("[data-forgot-password]").addEventListener("click", () => {
    accountLoginFeedback.textContent = "Chức năng khôi phục mật khẩu chưa được kết nối.";
});

document.querySelectorAll("[data-account-provider]").forEach((button) => {
    button.addEventListener("click", () => {
        accountSocialFeedback.textContent = `Đăng nhập bằng ${button.dataset.accountProvider} chưa được kết nối.`;
    });
});

// 7. Các thành phần và bộ đếm sách theo thể loại
const genreButtons = document.querySelectorAll("[data-book-filter]");
const bookCards = document.querySelectorAll("[data-book-category]");
const bookCount = document.querySelector("[data-book-count]");
const emptyBookMessage = document.querySelector("[data-book-empty]");

const updateGenreCounts = () => {
    document.querySelectorAll("[data-genre-count]").forEach((countElement) => {
        const genre = countElement.dataset.genreCount;
        const count = genre === "all"
            ? bookCards.length
            : [...bookCards].filter((card) => card.dataset.bookCategory === genre).length;

        countElement.textContent = `${count} cuốn`;
    });
};

// 8. Lọc và hiển thị sách theo thể loại được chọn
genreButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const selectedGenre = button.dataset.bookFilter;
        let visibleBookCount = 0;

        genreButtons.forEach((genreButton) => {
            const isActive = genreButton.dataset.bookFilter === selectedGenre;
            genreButton.classList.toggle("is-active", isActive);
        });

        bookCards.forEach((card) => {
            const isVisible = selectedGenre === "all" || card.dataset.bookCategory === selectedGenre;
            card.hidden = !isVisible;

            if (isVisible) {
                visibleBookCount += 1;
            }
        });

        bookCount.innerHTML = `Hiện có <b>${visibleBookCount} cuốn sách</b>`;
        emptyBookMessage.hidden = visibleBookCount > 0;
    });
});

// 9. Khởi tạo số lượng sách cho từng thể loại khi tải trang
updateGenreCounts();

// 10. Các thành phần và dữ liệu của giỏ hàng
const cartDrawer = document.querySelector("#cart-drawer");
const cartItemsContainer = document.querySelector("[data-cart-items]");
const cartEmptyMessage = document.querySelector("[data-cart-empty]");
const cartCountBadge = document.querySelector("[data-cart-count]");
const drawerCartCount = document.querySelector("[data-drawer-cart-count]");
const cartTotalElements = document.querySelectorAll("[data-cart-total]");
const checkoutButton = document.querySelector("[data-checkout]");
const checkoutSuccessDialog = document.querySelector("#checkout-success-dialog");
const cart = new Map();

const formatCurrency = (amount) => {
    return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
        maximumFractionDigits: 0
    }).format(amount);
};

// 11. Hiển thị các mặt hàng, số lượng và tổng tiền trong giỏ hàng
const renderCart = () => {
    const cartEntries = [...cart.values()];
    const totalItems = cartEntries.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cartEntries.reduce((sum, item) => sum + item.price * item.quantity, 0);

    cartCountBadge.textContent = totalItems;
    drawerCartCount.textContent = `(${totalItems})`;
    cartTotalElements.forEach((element) => {
        element.textContent = formatCurrency(totalPrice);
    });
    cartEmptyMessage.hidden = cartEntries.length > 0;
    cartItemsContainer.hidden = cartEntries.length === 0;
    checkoutButton.disabled = cartEntries.length === 0;
    cartItemsContainer.replaceChildren();

    cartEntries.forEach((item) => {
        const cartItem = document.createElement("article");
        cartItem.className = "cart-item";

        const image = document.createElement("img");
        image.className = "cart-item-image";
        image.src = item.image;

        const info = document.createElement("div");
        info.className = "cart-item-info";

        const title = document.createElement("h3");
        title.textContent = item.name;

        const author = document.createElement("p");
        author.textContent = item.author;

        const quantityControl = document.createElement("div");
        quantityControl.className = "cart-quantity";

        const decreaseButton = document.createElement("button");
        decreaseButton.type = "button";
        decreaseButton.textContent = "−";
        decreaseButton.addEventListener("click", () => {
            updateCartQuantity(item.id, -1);
        });

        const quantity = document.createElement("span");
        quantity.textContent = item.quantity;

        const increaseButton = document.createElement("button");
        increaseButton.type = "button";
        increaseButton.textContent = "+";
        increaseButton.addEventListener("click", () => {
            updateCartQuantity(item.id, 1);
        });

        quantityControl.append(decreaseButton, quantity, increaseButton);
        info.append(title, author, quantityControl);

        const price = document.createElement("b");
        price.className = "cart-item-price";
        price.textContent = formatCurrency(item.price * item.quantity);

        cartItem.append(image, info, price);
        cartItemsContainer.append(cartItem);
    });
};

// 12. Thay đổi số lượng hoặc xóa mặt hàng khỏi giỏ
const updateCartQuantity = (bookId, change) => {
    const item = cart.get(bookId);

    if (!item) {
        return;
    }

    item.quantity += change;

    if (item.quantity <= 0) {
        cart.delete(bookId);
    }

    renderCart();
};

// 13. Thêm sách vào giỏ từ thẻ sách hoặc thẻ nổi bật
document.querySelectorAll(".add-to-cart[data-book-id]").forEach((button) => {
    button.addEventListener("click", () => {
        const bookId = button.dataset.bookId;
        const productCard = button.closest(".book-card, .featured-card");
        const item = cart.get(bookId);

        if (item) {
            item.quantity += 1;
        } else {
            cart.set(bookId, {
                id: bookId,
                name: button.dataset.bookName || productCard.querySelector("h3").textContent.trim(),
                author: productCard.querySelector(".book-author, .card-author")?.textContent.trim() || "",
                image: productCard.querySelector("img").getAttribute("src"),
                price: Number(button.dataset.price),
                quantity: 1
            });
        }

        renderCart();
    });
});

// 14. Mở và đóng thanh giỏ hàng
document.querySelector("[data-open-cart]").addEventListener("click", () => {
    cartDrawer.showModal();
});

document.querySelectorAll("[data-close-cart]").forEach((button) => {
    button.addEventListener("click", () => {
        cartDrawer.close();
    });
});

cartDrawer.addEventListener("click", (event) => {
    if (event.target === cartDrawer) {
        cartDrawer.close();
    }
});

// 15. Hiển thị xác nhận thanh toán minh họa và làm trống giỏ hàng

const checkoutSection = document.querySelector("#checkout-step-section");
const step1Form = document.querySelector("#step1-address-form");
const step1Content = document.querySelector("#checkout-step-1");
const step2Content = document.querySelector("#checkout-step-2");

const stepIndicator1 = document.querySelector("#step-indicator-1");
const stepIndicator2 = document.querySelector("#step-indicator-2");

const checkoutTotalAmount = document.querySelector("#checkout-total-amount");
const backToShopButton = document.querySelector("#back-to-shop-btn");
const backToStep1Button = document.querySelector("#btn-back-to-step1");
const confirmOrderButton = document.querySelector("#btn-confirm-final-order");

checkoutButton.addEventListener("click", () => {
    if (cart.size === 0) {
        return;
    }

    const cartTotal = document.querySelector("[data-cart-total]");
    if (cartTotal) {
        checkoutTotalAmount.textContent = cartTotal.textContent;
    }

    cartDrawer.close();

    checkoutSection.hidden = false;

    checkoutSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

    step1Content.hidden = false;
    step2Content.hidden = true;

    stepIndicator1.classList.add("is-active");
    stepIndicator2.classList.remove("is-active");
});

step1Form.addEventListener("submit", (event) => {
    event.preventDefault();

    step1Content.hidden = true;
    step2Content.hidden = false;

    stepIndicator1.classList.remove("is-active");
    stepIndicator2.classList.add("is-active");

    checkoutSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});

backToStep1Button.addEventListener("click", () => {
    step2Content.hidden = true;
    step1Content.hidden = false;

    stepIndicator2.classList.remove("is-active");
    stepIndicator1.classList.add("is-active");

    checkoutSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});

backToShopButton.addEventListener("click", () => {
    checkoutSection.hidden = true;

    document.querySelector("#sach-noi-bat").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});

confirmOrderButton.addEventListener("click", () => {
    if (cart.size === 0) {
        return;
    }

    const selectedPayment = document.querySelector(
        'input[name="payment-method"]:checked'
    );

    if (!selectedPayment) {
        alert("Vui lòng chọn phương thức thanh toán.");
        return;
    }

    cart.clear();
    renderCart();

    checkoutSection.hidden = true;

    checkoutSuccessDialog.showModal();
});

const closeCheckoutSuccessButtons = document.querySelectorAll(
    "[data-close-checkout-success]"
);

closeCheckoutSuccessButtons.forEach((button) => {
    button.addEventListener("click", () => {
        checkoutSuccessDialog.close();
    });
});

renderCart();
