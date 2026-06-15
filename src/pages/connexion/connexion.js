

function connexion() {

    setTimeout(() => {
        const formulaireConnexion = document.querySelector('#formulaire-connexion');
        const lienversinscription = document.querySelector('#sinscrire');

        // formulaireConnexion.addEventListener('submit', (rechargement) => {
        //     rechargement.preventDefault();
        //     window.location.hash = "#/admin";
        // });

        formulaireConnexion.addEventListener('submit', (rechargement) => {
            rechargement.preventDefault();
            const email = document.querySelector('#con-email').value;
            const mdp = document.querySelector('#con-mdp').value;
            const newConnexion = {
                email: email,
                mdp: mdp
            }
            console.log(newConnexion);

            async function usersconnecter(infosSaisies) {
                try {
                    const nouvelConnexion = await fetch('http://localhost:3000/Users');
                    const userTrouver = await nouvelConnexion.json();
                    const compteValide = userTrouver.find(user =>
                        user.email === infosSaisies.email && user.mdp === infosSaisies.mdp
                    );

                    if (compteValide) {
                        alert('Connexion réussie !');
                        window.location.hash = "#/admin";
                    } else {
                        alert('Email ou mot de passe incorrect.');
                    }

                } catch (error) {
                    console.log('Erreur de connexion');
                }

            }
            usersconnecter(newConnexion);
        });

        lienversinscription.addEventListener('click', (rechargement) => {
            rechargement.preventDefault();
            window.location.hash = "#/inscription";
        });
    }, 0);


    return `
    <section id="page-connexion" class=" w-full flex flex-wrap  justify-center">
        <div class="w-[80%] min-h-[50rem] flex-wrap flex bg-[#FAFAFA]  rounded-2xl overflow-hidden">
            <div class="w-2/5 bg-[#00B4D8] flex items-center justify-center">
                <img class="w-[25rem]" src="public/images/connexion.svg" alt="Image Connexion">
            </div>
            <div class="w-3/5 flex flex-col p-10">
                <img class="w-40 self-center mb-8" src="public/images/logo.svg" alt="Logo">
                <h2 class="text-center text-5xl mb-10" style="font-family: 'Kaushan Script'">Connexion</h2>
                <form id="formulaire-connexion" class="w-[500px] self-center flex flex-col gap-5">
                    <div>
                        <label class="block mb-2">Email</label>
                        <div
                            class="flex items-center bg-[#E7F2F4] rounded-lg p-4 focus-within:ring-2 focus-within:ring-[#00B4D8]">
                            <i class="fa-regular fa-envelope text-gray-500 mr-3"></i>
                            <input id="con-email" type="email" placeholder="Votre email" class="bg-transparent outline-none w-full">
                        </div>
                    </div>
                    <div>
                        <label class="block mb-2">Mot de passe</label>
                        <div
                            class="flex items-center bg-[#E7F2F4] rounded-lg p-4 focus-within:ring-2 focus-within:ring-[#00B4D8]">
                            <i class="fa-solid fa-lock text-gray-500 mr-3"></i>
                            <input id="con-mdp" type="password" placeholder="Votre mot de passe"
                                class="bg-transparent outline-none w-full">
                        </div>
                    </div>
                    <button id="seconnecter" type="submit" class="mt-6 bg-[#03045E] text-white py-4 rounded-lg hover:bg-[#023E8A] transition">
                        Se connecter
                    </button>
                </form>
                <p class="text-center mt-8 text-gray-500">
                    Vous n'avez pas de compte ?
                    <a id="sinscrire" href="" class="text-[#03045E] font-semibold hover:underline"> S'inscrire </a>
                </p>
            </div>
        </div>
    </section>`;
}

export { connexion };