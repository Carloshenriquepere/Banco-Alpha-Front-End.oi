const url2 = "http://localhost:8080/usuario"

document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form'); 

    function formDataJSON(nome1, sobrenome1, email1, senha1, cnpj1, endereco1, complemento1, cidade1, estado1, cep1){

        let formatedData = {
            nome: nome1,
            sobrenome: sobrenome1,
            email: email1,
            senha: senha1,
            cnpj: cnpj1,
            endereco: endereco1,
            complemento: complemento1,
            cidade: cidade1,
            estado: estado1,
            cep: cep1

        }
        return JSON.stringify(formatedData);
    }

    form.addEventListener('submit', async function(e) {
        e.preventDefault();

            const nome1= form.elements.nome1.value
            const sobrenome1= form.elements.sobrenome1.value
            const email1= form.elements.email1.value
            const senha1= form.elements.senha1.value
            const cnpj1= form.elements.cnpj1.value
            const endereco1= form.elements.endereco1.value
            const complemento1= form.elements.complemento1.value
            const cidade1= form.elements.cidade1.value
            const estado1= form.elements.estado1.value
            const cep1= form.elements.cep1.value

            
            const JsonData = formDataJSON(nome1, sobrenome1, email1, senha1, cnpj1, endereco1, complemento1, cidade1, estado1, cep1);

            const axiosConfig = {headers: {'Content-Type': 'application/json'}};

            

            try {
                const resp = await axios.post(url2 + "/cadastrar", JsonData, axiosConfig);

                
            
                if(resp.data && resp.data !== ""){

                   

                    const emailData = {

                        to: email1,
                        subject: "Olá "+ nome1,
                        body: "Bem vindo(a) "+ nome1 +" ao Banco Alpha É um pazer ter você aqui conosco!"
                    }
                    

                    await axios.post('http://localhost:8080/email/recebido', emailData)
                    .then(function (response) {
                        console.log(response.data);
                    })
                    .catch(function (error) {
                        console.error(error);
                    })

                    localStorage.setItem('usuarioLogado', JsonData)

                    let quardarUsuarios = []
                    quardarUsuarios.push(quardarUsuarios)
                    console.log(quardarUsuarios)


                    alert("Bem Vindo ao Banco Alpha, "+ nome1)
                    window.location.href = "login.html";

                    

                    
                }else {
                    alert("Erro ao cadastrar!");
                }

                // localStorage.setItem('usuarioLogado', JsonData)
                

            } catch (error) {
                console.error("Erro ao cadastrar:", error);
                alert("Erro ao cadastrar")
                
            }
       
    });
    
    
});






