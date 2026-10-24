const databaseUser= [
{id:"#01",name:"Nguyễn A",password:"nguyena123",email:"nguyena@gmail.com",role:"admin",status:"active",createdate:"11:30:02 24/10/2026"},
{id:"#02",name:"Nguyễn B",password:"nguyenb123",email:"nguyenb@gmail.com",role:"user",status:"active",createdate:"01:22:00 22/10/2026"},
{id:"#03",name:"Nguyễn C",password:"nguyenc123",email:"nguyenc@gmail.com",role:"user",status:"locked",createdate:"23:52:26 01/6/2026"},
];

function getUser(){
    const data = JSON.parse(localStorage.getItem("userdata"));
    if(!data){
        localStorage.setItem("userdata",JSON.stringify(databaseUser))
        return databaseUser;
    }
    return data;
}

function updateUser(users){
    localStorage.setItem("userdata",JSON.stringify(users));
}

function renderUsers(){
    const user = getUser();
    const tbody = document.getElementById("user-tablebody");
    // khong co tbody thi kh render
    if(!tbody){
        return;
    }
    //reset truoc khi render
    tbody.innerHTML=``;


    // vong lap in ra tung hang
    user.forEach(user => {
        const lockuser = (user.status ==="active" ?  `<span style="color:green">${user.status}</span>` : `<span style="color:red">${user.status}</span>`);
        const lockiconstatus = (user.status ==="active" ?  `<button class="btn-action btn-lock" onclick="togglelock('${user.id}')" title="Khóa tài khoản" ><i class="fa-solid fa-lock"></i></button>` : `<button class="btn-action btn-unlock" onclick="togglelock('${user.id}')" title="Mở khóa tài khoản" ><i class="fa-solid fa-lock-open"></i></button>`);


        const tr = document.createElement("tr");
        tr.innerHTML=`
                                <td>${user.id}</td>
                                <td><strong>${user.name}</strong></td>
                                <td>${user.email}</td>
                                <td>${user.role}</td>
                                <td>${lockuser}</td>
                                <td class="time">${user.createdate}</td>
                                <td>
                                    <button class="btn-action btn-resetpass" onclick="openChangePassModal('${user.id}')" title="Thay đổi mật khẩu" ><i class="fa-solid fa-key"></i></button>
                                    ${lockiconstatus}
                                    <button class="btn-action btn-delete" onclick="deleteUser('${user.id}')" title="Xóa tài khoản"><i class="fa-solid fa-trash"></i></button>
                                </td>
        `;
        tbody.appendChild(tr)
    });
}
// ham button lock
function togglelock(userID){
    const userdatabase = getUser();
    const user = userdatabase.find(function(u){return u.id === userID;});
    if(!user){
        return;
    }

    if(user.role === "admin"){
        alert("khong the khoa admin");
        return;
    }
    // doi gia tri status cua user
    if (user.status === "active") {
        user.status = "locked";
    } else {
        user.status = "active";
    }
    // cap nhat vao database
    updateUser(userdatabase);
    // lam moi lai trang
    renderUsers();
}
// new password
function saveNewPass(){
    const userID = document.getElementById("modal-userid").value;
    const newPassword = document.getElementById("input-newpassword").value;

    const userdatabase = getUser();
    const user = userdatabase.find(function(u){return u.id === userID;});
    if(!user){
        return;
    }
    // cat khoang dau va cuoi neu la space
    if(newPassword.trim() === ""){
        alert("Nhập mật khẩu mới");
        return;
    }
        user.password = newPassword.trim();
    alert("Đổi mật khẩu thành công")
    closeChangePassModal();

    // cap nhat vao database
    updateUser(userdatabase);
    renderUsers();
}

function openChangePassModal(userID){
    const userdatabase = getUser();
    const user = userdatabase.find(function(u){return u.id === userID;});
    if(!user){
        return;
    }

    document.getElementById("modal-username").innerHTML= `Username: ${user.name}`
    // luu id user de khi luu biet luu ai
    document.getElementById("modal-userid").value = user.id;
    // lam sach o input truoc do
    document.getElementById("input-newpassword").value="";
    document.getElementById("password-modal").style.display="flex";
}
function closeChangePassModal() {
    document.getElementById("password-modal").style.display = "none";
}
//
//delete user
function deleteUser(userID){
    const userdatabase = getUser();
    const user = userdatabase.find(function(u){return u.id === userID;});
    if(!user){
        return;
    }
    if (user.role === "admin") {
        alert("Không thể xóa Admin");
        return;
    }

    const isConfirm = confirm(`Có chắc muốn xóa tài khoản "${user.name}" không?`);
    if (!isConfirm) return; 

    const newdatauser= userdatabase.filter(u=> u.id!==userID);
    alert(`Đã xóa tài khoản`)
    updateUser(newdatauser);
    renderUsers();
}

document.addEventListener("DOMContentLoaded",renderUsers);


