

let usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado')) 

if (usuarioLogado) {
    console.log(usuarioLogado);

    let logado = document.querySelector('#logado');
    logado.innerHTML = `Olá ${usuarioLogado.nome}`;

    let tokenArray = new Uint8Array(16);
    crypto.getRandomValues(tokenArray);
    let token = Array.from(tokenArray, byte => byte.toString(16).padStart(2, '0')).join('');
    localStorage.setItem('token', token);

} else {
    console.error("Usuário não está logado.");
}

let quardarUsuarios = []



function sair() {
    if (localStorage.getItem('token')) {
        quardarUsuarios.push(usuarioLogado)
        console.log("Guardardando Usuarios: ",quardarUsuarios)
        localStorage.removeItem('token');
        localStorage.removeItem('ususarioLogado');
        window.location.href = "login.html";
    } else {
        console.error("Usuário não autenticado.");
    }
}
       