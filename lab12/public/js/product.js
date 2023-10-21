function createTD(content) {
    let td = document.createElement("td");
    td.innerHTML = content;
    return td;
}
function refreshTable() {
    getApi("/products").then((products) => {
        let tbody = document.getElementById("productsBody");
        tbody.innerHTML = '';
        products.forEach(p => {
            let tr = document.createElement("tr");
            tr.appendChild(createTD(p.productId))
            tr.appendChild(createTD(p.productName))
            tr.appendChild(createTD(p.unitPrice))
            tr.appendChild(createTD(p.quantity))
            tbody.appendChild(tr)
        });

    })
}
window.onload = function () {
    refreshTable();
    document.getElementById("btnAddProduct").onclick = (e) => {
        e.preventDefault();
        let product = {
            productId: document.getElementById("productId").value,
            productName: document.getElementById("productName").value,
            unitPrice: document.getElementById("unitPrice").value,
            quantity: document.getElementById("quantity").value,
        }

        postApi("/products", product).then(() => {
            refreshTable();
        });
    }
}