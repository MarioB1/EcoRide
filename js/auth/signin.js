const mailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");
const btnSingin = document.getElementById("btnSignin");
const signinForm = document.getElementById("signinForm");

btnSingin.addEventListener("click", checkCredentials);

//dans  checkCredentials() remplacer l’injection directe par showSafeError(dataForm.get("email"));

function checkCredentials(){
    function checkCredentials(){
        let dataForm = new FormData(signinForm);
        
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
    
        let raw = JSON.stringify({
            "username": dataForm.get("email"),
            "password": dataForm.get("mdp")
        });
    
        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
    
        fetch(apiUrl+"login",  requestOptions)        
        .then(response => {
            if(response.ok){
                return response.json();
            }
            else{
                mailInput.classList.add("is-invalid");
                passwordInput.classList.add("is-invalid");
            }
        })
        .then(result => {
            const token = result.apiToken;
            setToken(token);
            //placer ce token en cookie
    
            setCookie(RoleCookieName, result.roles[0], 7);
            window.location.replace("/");
        })
        .catch(error => console.log('error', error));
    } }

    // Fonction de protection contre la XSS
function showSafeError(email) {
    
    const sanitizedEmail = sanitizeHtml(email);

    // Affiche un message d'erreur sans risque d'injection
    const errorMessage = document.createElement("div");
    errorMessage.style.color = "red";
    errorMessage.innerHTML = `Erreur de connexion pour : ${sanitizedEmail}`;
    document.body.appendChild(errorMessage);
}
