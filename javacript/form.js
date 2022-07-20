/*====== SOUMISSION DU FORMULAIRE DE CONTACT AVEC L'AIDE DE NETLIFY FORM.
CETTE SOUMISSION NE PREND PAS EN COMPTE LES FUNCTIONS DE VERIFICATION EN JS, ELLES FONT BUGGER L'ENVOI.
AIDER PAR THOMAS BUREAU DU COLOMBIER, J'AI DU INSTALLER EN LOCAL APP - NETLIFY CLI - ET DESACTIVER MON LIEN JS => form.js
MAINTENANT LA SOUMISSION FONCTIONNE.
J'AI LAISSÉ MON CODE JS DE VERIFICATION 
SI JAMAIS VOUS SAVEZ POURQUOI JE VEUX BIEN ÊTRE TENUE INFORMÉ  ====== */



//=============== START - DECLARATION DU FORMULAIRE ===============//   

        
(function () {
        'use strict'

        let form = document.getElementById('formContact');
console.log(form)
        form.addEventListener('submit', function(event) {
            
            Array.from(form.elements).forEach((input) => {
                if (input.type !== "submit") {
                    if (!validateFields(input)) {
                        
                        event.preventDefault();
                        event.stopPropagation();
                        
                        input.classList.remove("is-valid");
                        input.classList.add("is-invalid");
                        input.nextElementSibling.style.display = 'block';
                    } 
                    else {
                        input.nextElementSibling.style.display = 'none';
                        input.classList.remove("is-invalid");
                        input.classList.add("is-valid");
                    }
                }
            });
        },false);
})()
    //=============== END - DECLARATION DU FORMULAIRE ===============//


 //=============== START - FUNCTION VALIDATION  ===============//
    // Validation d'un champ REQUIRED
function validateRequired(input) {
        return !(input.value == null || input.value == "");
}
    // Validation du nombre de caractéres : MIN & MAX
function validateLength(input, minLength, maxLength) {
        return !(input.value.length < minLength || input.value.length > maxLength);
}
// Validation d'un e-mail
function validateEmail(input) {
    return input.value.match('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g');
}

 //=============== END - FUNCTION VALIDATION  ===============//


 //=============== START - VALIDATION DES CHAMPS DU FORMULAIRE ===============//

function validateFields(input) {
    let fieldName = input.name;
    // Validaton de l'input Name
    if (fieldName == "name") {
        if (!validateRequired(input)) {
            return false;
        }
        if (!validateLength(input, 2, 20)) {
            return false;
        }
        return (true);
    }
    // Validaton de l'input EMAIL
    if (fieldName == "email") {

        if (!validateRequired(input)) {
            return false;
        }

        if (!validateEmail(input)) {
            return false;
        }
        return (true);
    }
    if (fieldName == "sujet") {

        if (!validateRequired(input)) {
            return false;
        }
        return (true);
    }
    if (fieldName == "message") {

        if (!validateRequired(input)) {
            return false;
        }
        return (true);
    }
    
}
 //=============== END - VALIDATION DES CHAMPS DU FORMULAIRE ===============//