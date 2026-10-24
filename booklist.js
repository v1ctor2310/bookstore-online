const books = [
    {
        id_: "the-law-of-human-nature",
        title_: "Những quy luật của bản chất con người",
        author_: "Robert Greene",
        category_: "life",
        categoryName_: "Kỹ năng sống",
        price_: 86000,
        oldPrice_: 120000,
        image_: "img/the-law-of-human-nature.webp",
        description_: "Cuốn sách phân tích tâm lý, hành vi và động lực của con người."
    },
    {
        id_: "truong_ca_achilles",
        title_: "Trường Ca Achilles",
        author_: "Madeline Miller",
        category_: "literature",
        categoryName_: "Văn học",
        price_: 109000,
        oldPrice_: 156000,
        image_: "img/truong_ca_achilles.webp",
        description_: "Tiểu thuyết tái hiện câu chuyện Achilles và Patroclus qua góc nhìn giàu cảm xúc."
    },
    {
        id_: "cay-cam-ngot",
        title_: "Cây cam ngọt của tôi",
        author_: "José Mauro de Vasconcelos",
        category_: "literature",
        categoryName_: "Văn học",
        price_: 90000,
        oldPrice_: 108000,
        image_: "img/cay-cam-ngot-cua-toi.webp",
        description_: "Câu chuyện cảm động về tuổi thơ và tình yêu thương."
    },
    {
        id_: "tuoi-tho-du-doi",
        title_: "Tuổi thơ dữ dội",
        author_: "Phùng Quán",
        category_: "children",
        categoryName_: "Thiếu nhi",
        price_: 156000,
        oldPrice_: 195000,
        image_: "img/tuoi-tho-du-doi.jpg",
        description_: "Tác phẩm kể về những thiếu niên tham gia kháng chiến."
    },
    {
        id_: "mat-biec",
        title_: "Mắt biếc",
        author_: "Nguyễn Nhật Ánh",
        category_: "literature",
        categoryName_: "Văn học",
        price_: 110000,
        oldPrice_: 135000,
        image_: "img/mac-biec.webp",
        description_: "Câu chuyện về tình yêu đơn phương và tuổi trẻ."
    },
    {
        id_: "so-do",
        title_: "Số đỏ",
        author_: "Vũ Trọng Phụng",
        category_: "literature",
        categoryName_: "Văn học",
        price_: 75000,
        oldPrice_: 95000,
        image_: "img/so-do.webp",
        description_: "Tiểu thuyết trào phúng phản ánh những thói hư tật xấu trong xã hội."
    },
    {
        id_: "atomic-habits",
        title_: "Atomic Habits",
        author_: "James Clear",
        category_: "life",
        categoryName_: "Kỹ năng sống",
        price_: 125000,
        oldPrice_: 169000,
        image_: "img/atomic-habits.webp",
        description_: "Sách hướng dẫn xây dựng thói quen tốt mỗi ngày."
    },
    {
        id_: "de-men-phieu-luu-ky",
        title_: "Dế Mèn phiêu lưu ký",
        author_: "Tô Hoài",
        category_: "children",
        categoryName_: "Thiếu nhi",
        price_: 55000,
        oldPrice_: 68000,
        image_: "img/de_men_phieu_luu_ky.webp",
        description_: "Những chuyến phiêu lưu và bài học của Dế Mèn."
    },
    {
        id_: "tu-tot-den-vi-dai",
        title_: "Từ tốt đến vĩ đại",
        author_: "Jim Collins",
        category_: "business",
        categoryName_: "Kinh doanh",
        price_: 139000,
        oldPrice_: 185000,
        image_: "img/tu-tot-den-vi-dai.webp",
        description_: "Sách phân tích những yếu tố giúp doanh nghiệp thành công."
    },
    {
        id_: "khoi-nghiep-tinh-gon",
        title_: "Khởi nghiệp tinh gọn",
        author_: "Eric Ries",
        category_: "business",
        categoryName_: "Kinh doanh",
        price_: 149000,
        oldPrice_: 189000,
        image_: "img/khoi-nghiep-tinh-gon.webp",
        description_: "Sách giới thiệu phương pháp thử nghiệm ý tưởng khởi nghiệp."
    },
    {
        id_: "dac-nhan-tam",
        title_: "Đắc Nhân Tâm",
        author_: "Dale Carnegie",
        category_: "life",
        categoryName_: "Kỹ năng sống",
        price_: 79000,
        oldPrice_: 99000,
        image_: "img/dac-nhan-tam.webp",
        description_: "Cuốn sách chia sẻ những nguyên tắc giao tiếp, ứng xử và xây dựng mối quan hệ tốt đẹp."
    },
    {
        id_: "nha-gia-kim",
        title_: "Nhà Giả Kim",
        author_: "Paulo Coelho",
        category_: "literature",
        categoryName_: "Văn học",
        price_: 68000,
        oldPrice_: 85000,
        image_: "img/nha-gia-kim.webp",
        description_: "Câu chuyện về hành trình theo đuổi ước mơ và khám phá ý nghĩa cuộc sống."
    },
    {
        id_: "khong-gia-dinh",
        title_: "Không Gia Đình",
        author_: "Hector Malot",
        category_: "literature",
        categoryName_: "Văn học",
        price_: 95000,
        oldPrice_: 120000,
        image_: "img/khong-gia-dinh.webp",
        description_: "Cuốn tiểu thuyết kể về hành trình trưởng thành đầy thử thách của cậu bé Rémi."
    },
    {
        id_: "cha-giau-cha-ngheo",
        title_: "Cha Giàu Cha Nghèo",
        author_: "Robert T. Kiyosaki",
        category_: "business",
        categoryName_: "Kinh doanh",
        price_: 99000,
        oldPrice_: 129000,
        image_: "img/cha-giau-cha-ngheo.webp",
        description_: "Cuốn sách chia sẻ tư duy về tiền bạc, tài sản và giáo dục tài chính cá nhân."
    },
    {
        id_: "tu-duy-nhanh-va-cham",
        title_: "Tư Duy Nhanh Và Chậm",
        author_: "Daniel Kahneman",
        category_: "life",
        categoryName_: "Kỹ năng sống",
        price_: 145000,
        oldPrice_: 189000,
        image_: "img/tu-duy-nhanh-va-cham.webp",
        description_: "Giải thích hai hệ thống tư duy và cách chúng ảnh hưởng đến quyết định của con người."
    },
    {
        id_: "dac-nhan-tam-tuoi-tre",
        title_: "Tuổi Trẻ Đáng Giá Bao Nhiêu",
        author_: "Rosie Nguyễn",
        category_: "life",
        categoryName_: "Kỹ năng sống",
        price_: 72000,
        oldPrice_: 95000,
        image_: "img/tuoi-tre-dang-gia-bao-nhieu.webp",
        description_: "Cuốn sách khuyến khích người trẻ học hỏi, trải nghiệm và phát triển bản thân."
    },
    {
        id_: "cho-toi-xin-mot-ve-di-tuoi-tho",
        title_: "Cho Tôi Xin Một Vé Đi Tuổi Thơ",
        author_: "Nguyễn Nhật Ánh",
        category_: "children",
        categoryName_: "Thiếu nhi",
        price_: 65000,
        oldPrice_: 85000,
        image_: "img/cho-toi-xin-mot-ve-di-tuoi-tho.webp",
        description_: "Câu chuyện gợi nhớ tuổi thơ qua góc nhìn hồn nhiên và dí dỏm."
    },
    {
        id_: "hoang-tu-be",
        title_: "Hoàng Tử Bé",
        author_: "Antoine de Saint-Exupéry",
        category_: "children",
        categoryName_: "Thiếu nhi",
        price_: 49000,
        oldPrice_: 65000,
        image_: "img/hoang-tu-be.webp",
        description_: "Tác phẩm giàu ý nghĩa về tình bạn, tình yêu và cách nhìn thế giới."
    },
    {
        id_: "chien-thang-con-quy-trong-ban",
        title_: "Chiến Thắng Con Quỷ Trong Bạn",
        author_: "Napoleon Hill",
        category_: "life",
        categoryName_: "Kỹ năng sống",
        price_: 115000,
        oldPrice_: 149000,
        image_: "img/chien-thang-con-quy-trong-ban.webp",
        description_: "Cuốn sách bàn về nỗi sợ, thói quen trì hoãn và cách chủ động với cuộc sống."
    },
    {
        id_: "tu-duy-lam-giau",
        title_: "Nghĩ Giàu Và Làm Giàu",
        author_: "Napoleon Hill",
        category_: "business",
        categoryName_: "Kinh doanh",
        price_: 89000,
        oldPrice_: 115000,
        image_: "img/nghi-giau-va-lam-giau.webp",
        description_: "Trình bày những nguyên tắc về mục tiêu, tư duy và sự kiên trì trong kinh doanh."
    }
];

const bookList = document.querySelector(".book-grid_");
const pagination = document.querySelector(".pagination_");

const productsPerPage = 8;
let currentPage = 1;

// Hiển thị danh sách sách
function displayBooks(page) {
    const start = (page - 1) * productsPerPage;
    const end = start + productsPerPage;

    const currentBooks = books.slice(start, end);

    bookList.innerHTML = currentBooks.map(book => `
        <div class="book-card_">
            <img src="${book.image_}" alt="${book.title_}">
            <h3 title="${book.title_}">${book.title_}</h3>
            <p>${book.author_}</p>
            <p>${book.price_.toLocaleString("vi-VN")}đ</p>

            <div class="addtocart_">
                <button>Thêm vào giỏ +</button>
                <button onclick="showBookDetail('${book.id_}')">
                    Xem chi tiết
                </button>
            </div>
        </div>
    `).join("");
}

// Hiển thị nút phân trang
function displayPagination() {
    const totalPages = Math.ceil(books.length / productsPerPage);

    pagination.innerHTML = "";

    pagination.innerHTML += `
        <button ${currentPage === 1 ? "disabled" : ""}
            onclick="changePage(${currentPage - 1})">
            &laquo;
        </button>
    `;

    for (let i = 1; i <= totalPages; i++) {
        pagination.innerHTML += `
            <button class="${i === currentPage ? "active" : ""}"
                onclick="changePage(${i})">
                ${i}
            </button>
        `;
    }

    pagination.innerHTML += `
        <button ${currentPage === totalPages ? "disabled" : ""}
            onclick="changePage(${currentPage + 1})">
            &raquo;
        </button>
    `;
}

// Chuyển trang
function changePage(page) {
    const totalPages = Math.ceil(books.length / productsPerPage);

    if (page < 1 || page > totalPages) return;

    currentPage = page;
    displayBooks(currentPage);
    displayPagination();
}

// Khởi chạy
displayBooks(currentPage);
displayPagination();


// Lấy các phần tử Modal
const bookModal = document.getElementById("book-modal");
const modalBody = document.getElementById("modal-body");
const closeModal = document.getElementById("close-modal");

// Hiển thị chi tiết sách
function showBookDetail(bookId) {
    // Tìm sách theo id
    const book = books.find(item => item.id_ === bookId);

    // Nếu không tìm thấy sách thì dừng
    if (!book) return;

    // Hiển thị thông tin sách trong Modal
    modalBody.innerHTML = `
        <img src="${book.image_}" alt="${book.title_}">

        <div class="modal-info_">
            <h2>${book.title_}</h2>

            <p><strong>Tác giả:</strong> ${book.author_}</p>

            <p><strong>Thể loại:</strong> ${book.categoryName_}</p>

            <p class="modal-price_">
                ${book.price_.toLocaleString("vi-VN")}đ
            </p>

            <p><strong>Mô tả:</strong></p>
            <p>${book.description_}</p>
        </div>
    `;

    // Hiển thị Modal
    bookModal.style.display = "flex";
}

// Đóng Modal khi nhấn nút X
closeModal.addEventListener("click", function () {
    bookModal.style.display = "none";
});

// Đóng Modal khi nhấn ra ngoài khung nội dung
bookModal.addEventListener("click", function (event) {
    if (event.target === bookModal) {
        bookModal.style.display = "none";
    }
});

// Đóng Modal khi nhấn phím Escape
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        bookModal.style.display = "none";
    }
});