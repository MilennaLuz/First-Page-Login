
    // FUNÇÃO 1 PARA CONECTAR NA API E RETORNAR DADOS
 //   function carregar(){            
 //       const botao = document.getElementById('botao_login')
 //       const input_nome = document.getElementById('input_usuario')
    
 //       botao.onclick = () => {
 //           const usuario = input_nome.value
            const Requisicao = new Request('https://api.github.com/users/MilennaLuz')
    
            fetch(Requisicao)
                .then(response => response.json())
                .then(dados => {
                     const nome = dados.name
                    alert(nome)
                    // preencher(dados)
                })
 //       }
    
 //   }            // FIM FUNÇÃO 1
    
    const init = () => {
    const validadeUser = (event) => {
        const input = event.currentTarget;
        const regex = /^@[A-Za-z0-9._]+$/;
        const userTest = regex.test(input.value);

        if(!userTest) {
            submitButton.setAttribute('disabled', 'disabled');
            input.nextElementSibling.claddList.add('error');
        } else {
            submitButton.removeAttribute('disabled');
            input.nextElementSibling.claddList.remove('error');
        }
    }

    const inputLogin = document.querySelector('input[type="user"]');
    const inputPassword = document.querySelector('input[type="password"]');
    const submitButton = document.querySelector('.btn-login');


    const errorHandler = () => {
        submitButton.classList.remove('sucess');
        submitButton.classList.add('error');
        submitButton.textContent = "Login ou senha invalido(s)";
        
    }
    const sucessHandler = () => {
        submitButton.classList.remove('error');
        submitButton.classList.add('sucess');
        submitButton.textContent = "Sucesso! :)";
        
    }
    

    if(submitButton) {
        submitButton.addEventListener('click', (event) => {
            event.preventDefault();

            submitButton.textContent = "Conectando...";

            fetch('https://reqres.in/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: inputLogin.value,
                    password: inputPassword.value,
                })

            }).then((response) => {
                if(response.status !== 200) {   // Conferir o status da validação na nova API 
                    return errorHandler();
                }
                sucessHandler();
            }).catch(() => {
                errorHandler();
            })
        })
    }



}

window.onload = init;