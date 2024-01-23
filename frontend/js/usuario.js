

let usuarioLogado = localStorage.getItem('usuarioLogado') 

if (usuarioLogado) {
    
    let logado = document.querySelector('#logado');
    logado.innerHTML = `Olá ${usuarioLogado[0].nome}`;

    let tokenArray = new Uint8Array(16);
    crypto.getRandomValues(tokenArray);
    let token = Array.from(tokenArray, byte => byte.toString(16).padStart(2, '0')).join('');
    localStorage.setItem('token', token);

} else {
    console.error("Usuário não está logado.");
}
    let quardar = [];
    quardar.push(usuarioLogado)


function sair() {
    localStorage.removeItem('usuarioLogado');
    localStorage.removeItem('token');
    window.location.href = "login.html";
}
       