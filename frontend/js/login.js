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

           const axiosConfigLogin = {headers: {'Content-Type': 'application/json'}};



           try {
            const response = await axios.get(url1, axiosConfigLogin);
            
            if (response.data && response.data !== "") {

            
                window.location.href = "usuario.html"

            } else {
                alert("Erro nas credenciais ou Campo vazio!");
            }
            
           } catch (error) {
            console.log('Erro na requisição: ', error)
            
           }
    });
});
