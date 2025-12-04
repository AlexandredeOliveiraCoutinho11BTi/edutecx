document.addEventListener("DOMContentLoaded", () => {
    const includes = document.querySelectorAll('[data-include]');

    includes.forEach(el => {
        const file = el.getAttribute("data-include");

        fetch(file)
            .then(response => {
                if (!response.ok) throw new Error("Erro ao carregar " + file);
                return response.text();
            })
            .then(data => el.innerHTML = data)
            .catch(error => console.error("Erro:", error));
    });
});

const MIN_TIME = 1350;
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    const startTime = performance.timing.navigationStart;
    const elapsed = Date.now() - startTime;
    const remaining = MIN_TIME - elapsed;

    setTimeout(() => {
        document.body.classList.add("loaded");

        setTimeout(() => {
            loader.style.display = "none";
        }, 800);
    }, remaining > 0 ? remaining : 0);
});

const botao = document.querySelector(".botao");
const popup = document.getElementById("popup");
const fechar = document.querySelector(".close");

botao.addEventListener("click", () => {
    popup.style.display = "block";
});

fechar.addEventListener("click", () => {
    popup.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === popup) {
        popup.style.display = "none";
    }
});

function init(){
    const navUl = document.querySelector("nav ul")

    const user = JSON.parse(sessionStorage.getItem("user"))

    if(user){
        navUl.innerHTML += `
        <li>
         <a href="./HeaderPages/Jogo.2/index.html">Jogar</a>
        </li>
        <li><h2>Usuário: ${user.name}</h2></li>
        <li><button id = "logout">Sair</button></li>
        
        `

        const logoutButton = document.querySelector("#logout")
        logoutButton.addEventListener("click", logout)
        return
    }

    navUl.innerHTML += `
    <li>
        <a href="./HeaderPages/Login/login.html">Login</a>
    </li>
    `
}

function logout(){
    sessionStorage.removeItem("user")
    window.location.reload()
}

init()
