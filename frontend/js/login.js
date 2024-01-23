document.addEventListener('DOMContentLoaded', function() {

    function formDataLoginJSON(emailLogin, senhaLogin){

        let formatedLoginData = {
            
            email: emailLogin,
            senha: senhaLogin
            
        }
        return formatedLoginData;
    }
   
    formLogin.addEventListener('submit', async function(e) {
        e.preventDefault();

           const emailLogin = formLogin.elements.emailLogin.value;

           const senhaLogin = formLogin.elements.senhaLogin.value;

        
           const url1 = `http://localhost:8080/usuario/login?email=${emailLogin}&senha=${senhaLogin}`

           const url3 = `http://localhost:8080/usuario/buscarEmail/${emailLogin}`;

           const axiosConfigLogin = {headers: {'Content-Type': 'application/json'}};



           try {
            const response = await axios.get(url1, axiosConfigLogin);

            console.log(response.data)
            console.log(response.data)
            
            if (response.data && response.data !== "") {

                axios.get(url3)
                .then(resp => {
                    localStorage
                    .setItem('usuarioLogado',JSON.stringify(resp.data))
                    console.log(resp.data)
                })
                

                window.location.href = "usuario.html"

            } else {
                



                alert("Erro nas credenciais ou Campo vazio!");
            }
            
           } catch (error) {
            console.log('Erro na requisição: ', error)
            
           }
    });
});

function entrar(){
}
