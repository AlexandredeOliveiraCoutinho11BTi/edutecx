
const button = document.querySelector("button")

const playButton = document.querySelector(".play-btn");

button.onclick = (event) => {
    event.preventDefault()
    sendUser()

}

async function sendUser(){
    const name = document.querySelector("#nome").value
    const email =  document.querySelector("#email").value
    const password = document.querySelector("#senha").value

    const user = {
        name, 
        email,
        password
    }

    const response = await fetch("https://backend02mb-b236.vercel.app/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ user })
    }).then(response => response.json())

    alert(response.message)


    window.location.href = "../../index.html"
}



playButton.onclick = (event) => {
       event.preventDefault();

        const email = document.querySelector("#email").value.trim();
    const senha = document.querySelector("#senha").value.trim();

    if (email === "" || senha === "") {
        alert("Preencha o e-mail e a senha para jogar.");
        return;
    }
    window.location.href = "../Jogo.2/index.html";
};