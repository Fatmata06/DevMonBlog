function inscription() {

    setTimeout(() => {
        const formulaireInscription = document.querySelector('#formulaire-inscription');
        const lienversconnexion = document.querySelector('#secondconnexion');

        formulaireInscription.addEventListener('submit', (rechargement) => {
            rechargement.preventDefault();
            const nom = document.querySelector('#ins-nom').value;
            const email = document.querySelector('#ins-email').value;
            const mdp = document.querySelector('#ins-mdp').value;
            const newUsers = {
                nom: nom,
                email: email,
                mdp: mdp
            }
            console.log(newUsers);
              async function newuser(nouveauUtilisateur) {
                try {
                    const listeUsers = await fetch('http://localhost:3000/Users', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(nouveauUtilisateur)
                    });                        
                    if(listeUsers.ok){
                        alert('enregistrement reussi');
                        window.location.hash = "#/connexion";  
                    }
                } catch (error) {
                    alert('errore lors de lenregistrement');
                }
            }
            newuser(newUsers);
        });

        lienversconnexion.addEventListener('click', (rechargement) => {
            rechargement.preventDefault();
            window.location.hash = "#/connexion";
        });
    }, 0);

    return `
    <section id="page-inscription" class=" w-full flex justify-center">
        <div class="w-[80%] min-h-[800px] flex bg-[#FAFAFA]  rounded-2xl overflow-hidden">
            <div class="w-3/5 flex flex-col p-10">
                <img class="w-40 self-center mb-8" src="public/images/logo.svg" alt="Logo">
                <h2 class="text-center text-5xl mb-10" style="font-family: 'Kaushan Script'"> Inscription </h2>
                <form id="formulaire-inscription" class="w-[500px] self-center flex flex-col gap-5">
                    <div>
                        <label class="block mb-2">Nom</label>
                        <div
                            class="flex items-center bg-[#E7F2F4] rounded-lg p-4 focus-within:ring-2 focus-within:ring-[#00B4D8]">
                            <i class="fa-regular fa-user text-gray-500 mr-3"></i>
                            <input id="ins-nom" type="text" placeholder="Votre nom" class="bg-transparent outline-none w-full">
                        </div>
                    </div>
                    <div>
                        <label class="block mb-2">Email</label>
                        <div
                            class="flex items-center bg-[#E7F2F4] rounded-lg p-4 focus-within:ring-2 focus-within:ring-[#00B4D8]">
                            <i class="fa-regular fa-envelope text-gray-500 mr-3"></i>
                            <input id="ins-email" type="email" placeholder="Votre email" class="bg-transparent outline-none w-full">
                        </div>
                    </div>
                    <div>
                        <label class="block mb-2">Mot de passe</label>
                        <div
                            class="flex items-center bg-[#E7F2F4] rounded-lg p-4 focus-within:ring-2 focus-within:ring-[#00B4D8]">
                            <i class="fa-solid fa-lock text-gray-500 mr-3"></i>
                            <input id="ins-mdp" type="password" placeholder="Votre mot de passe"
                                class="bg-transparent outline-none w-full">
                        </div>
                    </div>
                    <button type="submit" class="mt-6 bg-[#03045E] text-white py-4 rounded-lg ">S'inscrire</button>
                </form>

                <p class="text-center mt-8 text-gray-500">Vous avez déjà un compte ?
                    <a id="secondconnexion" href="#" class="text-[#03045E] font-semibold ">Se connecter</a>
                </p>
            </div>
            <div class="w-2/5 bg-[#00B4D8] flex items-center justify-center">
                <img class="w-[400px]" src="public/images/inscription.svg" alt=" Image Inscription">
            </div>
        </div>
    </section>
    `;

}
export { inscription };