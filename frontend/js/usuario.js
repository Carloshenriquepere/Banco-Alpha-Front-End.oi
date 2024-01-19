document.addEventListener('DOMContentLoaded', function() {
    

    function formDataJSON(iduser,nome1, sobrenome1, email1, senha1, cnpj1, endereco1, complemento1, cidade1, estado1, cep1){

        let formatedData = {

            id : iduser,
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

    user.addEventListener('submit', async function(e) {
        e.preventDefault();

            const iduser= user.elements.iduser.value
            const nome1= user.elements.nome1.value
            const sobrenome1= user.elements.sobrenome1.value
            const email1= user.elements.email1.value
            const senha1= user.elements.senha1.value
            const cnpj1= user.elements.cnpj1.value
            const endereco1= user.elements.endereco1.value
            const complemento1= user.elements.complemento1.value
            const cidade1= user.elements.cidade1.value
            const estado1= user.elements.estado1.value
            const cep1= user.elements.cep1.value
        
            
            const JsonData = formDataJSON(iduser,nome1, sobrenome1, email1, senha1, cnpj1, endereco1, complemento1, cidade1, estado1, cep1);

            const url4 = `http://localhost:8080/usuario/buscar/${id}` 

            const axiosConfig = {headers: {'Content-Type': 'application/json'}};

            try {
                const resp = await axios.get(url4, JsonData, axiosConfig);

                
            
            } catch (error) {
                alert("Erro ao cadastrar")
                
            }
       
    });
});