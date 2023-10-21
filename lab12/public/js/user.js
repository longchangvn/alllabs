function createliNode(content){
    let li = document.createElement("li");
    li.innerHTML = content;
    return li;
}
function listUser() {
    let ul = document.getElementById("user-list");
    ul.innerHTML = '';
    getApi("/users").then((users) => {
        users.forEach(u => {
            ul.appendChild(createliNode(u.email ))
        })
    })
}
window.onload = function () {

    listUser();
    document.getElementById("btnRegister").onclick = function (e) {
        e.preventDefault();
        let user = {
            email: document.getElementById("email").value,
            password: document.getElementById("password").value
        };
        postApi("/users", user).then(() => {
            listUser();
        })
    }

}