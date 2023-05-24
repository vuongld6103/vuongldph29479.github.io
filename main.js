const products = ['mercedes', 'audi', 'ford', 'lamborghini'];
console.log(products)
const showProduct = () => {
    if (products.length === 0) {
        console.log("Không có sản phẩm hiển thị")
    } else {
        console.log(products)
    }
    for (let item of products) {
        console.log(item)
    }
}
showProduct();
const addProduct = () => {
    let myInput = document.getElementById("prdName");
    let prdName = myInput.value;
    if (prdName.length < 5) {
        console.log("Xin mời nhập sản phẩm trên 5 kí tự")
    } else {
        console.log(prdName); // hiển thị tên của người dùng
    }
}
addProduct();
const removeProduct = () => {
    let productToRemove = document.getElementById("removeProduct");
    let removeProduct = productToRemove.value;
    let indexToRemove = products.indexOf(removeProduct);
    if (indexToRemove !== -1) {
        products.splice(indexToRemove, 1);
        console.log(`Đã xóa sản phẩm ${removeProduct} khỏi mảng`);
        showProduct();
    } else {
        console.log("Không tìm thấy sản phẩm cần xóa");
    }
}
removeProduct();
function updateProduct() {
    let productToUpdate = document.getElementById("updateProduct");
    let updateProduct = productToUpdate.value;
    let indexToUpdate = products.indexOf(updateProduct);
    if (indexToUpdate !== -1) {
        let newProductName;
        do {
            newProductName = prompt("Nhập tên mới của sản phẩm (ít nhất 5 ký tự):");
        } while (newProductName.length < 5);
        products[indexToUpdate] = newProductName;
        console.log(`Đã cập nhật sản phẩm ${productToUpdate} thành ${newProductName}`);
        showProduct();
    } else {
        console.log("Không tìm thấy sản phẩm cần cập nhật");
    }
}
updateProduct();
//
