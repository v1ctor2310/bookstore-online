const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector("#primary-nav");

menuToggle?.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Mở danh mục" : "Đóng danh mục");
  primaryNav?.classList.toggle("is-open", !isOpen);
});

primaryNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    primaryNav.classList.remove("is-open");
    menuToggle?.setAttribute("aria-expanded", "false");
    menuToggle?.setAttribute("aria-label", "Mở danh mục");
  });
});

const adminLoginForm = document.querySelector("#admin-login-form");
const loginFeedback = document.querySelector("#login-feedback");

adminLoginForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (loginFeedback) {
    loginFeedback.textContent = "Đây là giao diện minh họa; chức năng xác thực chưa được kết nối.";
  }
});

const customerLoginForm = document.querySelector("#customer-login-form");
const customerLoginFeedback = document.querySelector("#customer-login-feedback");

customerLoginForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (customerLoginFeedback) {
    customerLoginFeedback.textContent = "Đây là giao diện minh họa; chức năng xác thực chưa được kết nối.";
  }
});

const accountDialog = document.querySelector("#account-access");
const accountAccessForm = document.querySelector("#account-access-form");
const accountAccessFeedback = document.querySelector("#account-access-feedback");
const accountDialogTitle = document.querySelector("#account-dialog-title");
const accountIdentityLabel = document.querySelector('label[for="account-identity"]');
const accountPassword = document.querySelector("#account-password");
const accountName = document.querySelector("#account-name");
const accountShop = document.querySelector("#account-shop");
const accountConfirm = document.querySelector("#account-confirm");
const accountForgot = document.querySelector("[data-forgot-password]");
const accountSubmit = accountAccessForm?.querySelector('[type="submit"]');
let activeAccountRole = "customer";
let activeAccountMode = "login";

function updateAccountAccessForm() {
  if (!accountAccessForm) return;

  const isRegistering = activeAccountMode === "register";
  const isSeller = activeAccountRole === "seller";
  const modeLabel = isRegistering ? "Đăng ký" : "Đăng nhập";
  if (accountDialogTitle) accountDialogTitle.textContent = `${modeLabel} ${isSeller ? "người bán" : ""}`.trim();
  if (accountIdentityLabel) accountIdentityLabel.textContent = isSeller ? "Email người bán" : "Email hoặc số điện thoại";
  if (accountIdentityLabel) accountIdentityLabel.htmlFor = "account-identity";
  if (accountName) {
    accountName.hidden = !isRegistering;
    accountName.required = isRegistering;
    accountName.previousElementSibling.hidden = !isRegistering;
    accountName.autocomplete = isSeller ? "name" : "name";
  }
  if (accountShop) {
    accountShop.hidden = !isRegistering || !isSeller;
    accountShop.required = isRegistering && isSeller;
    accountShop.previousElementSibling.hidden = !isRegistering || !isSeller;
  }
  if (accountConfirm) {
    accountConfirm.hidden = !isRegistering;
    accountConfirm.required = isRegistering;
    accountConfirm.previousElementSibling.hidden = !isRegistering;
  }
  if (accountPassword) {
    accountPassword.autocomplete = isRegistering ? "new-password" : "current-password";
  }
  if (accountForgot) accountForgot.hidden = isRegistering;
  if (accountSubmit) {
    accountSubmit.innerHTML = `${modeLabel} <span aria-hidden="true">→</span>`;
  }
  if (accountAccessFeedback) accountAccessFeedback.textContent = "";
}

document.querySelectorAll("[data-open-account-access]").forEach((trigger) => {
  trigger.addEventListener("click", (event) => {
    event.preventDefault();
    if (!accountDialog) return;
    accountDialog.showModal();
    updateAccountAccessForm();
    document.querySelector("#account-identity")?.focus();
  });
});

document.querySelectorAll("[data-close-account-access]").forEach((button) => {
  button.addEventListener("click", () => accountDialog?.close());
});

accountDialog?.addEventListener("click", (event) => {
  if (event.target === accountDialog) accountDialog.close();
});

document.querySelectorAll("[data-account-role]").forEach((button) => {
  button.addEventListener("click", () => {
    activeAccountRole = button.dataset.accountRole === "seller" ? "seller" : "customer";
    document.querySelectorAll("[data-account-role]").forEach((roleButton) => {
      const isActive = roleButton === button;
      roleButton.classList.toggle("is-active", isActive);
      roleButton.setAttribute("aria-pressed", String(isActive));
    });
    updateAccountAccessForm();
  });
});

document.querySelectorAll("[data-account-mode]").forEach((button) => {
  button.addEventListener("click", () => {
    activeAccountMode = button.dataset.accountMode === "register" ? "register" : "login";
    document.querySelectorAll("[data-account-mode]").forEach((modeButton) => {
      const isActive = modeButton === button;
      modeButton.classList.toggle("is-active", isActive);
      modeButton.setAttribute("aria-pressed", String(isActive));
    });
    updateAccountAccessForm();
  });
});

accountAccessForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (accountConfirm && activeAccountMode === "register" && accountPassword?.value !== accountConfirm.value) {
    accountConfirm.setCustomValidity("Mật khẩu nhập lại chưa khớp.");
    accountConfirm.reportValidity();
    accountConfirm.addEventListener("input", () => accountConfirm.setCustomValidity(""), { once: true });
    return;
  }
  if (accountAccessFeedback) {
    accountAccessFeedback.textContent = "Đây là giao diện minh họa; chức năng tài khoản chưa được kết nối.";
  }
});

if (window.location.hash === "#account-access") {
  accountDialog?.showModal();
}
