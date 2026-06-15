function admin() {
     setTimeout(() => {
        const lienversajoutarticle = document.querySelector('#ajoutarticle');

        lienversajoutarticle.addEventListener('click', (rechargement) => {
            rechargement.preventDefault();
            window.location.hash = "#/ajoutarticle";
        });
       
    }, 0);
    return `
    <section id="page-accueil" class="  w-full h-screen flex justify-center">
        <div class="w-[100%] h-screen flex flex-col bg-[#FAFAFA]  overflow-hidden">
            <nav class="bg-[#FFFFFF] h-[10%] w-[100%] items-center justify-between flex">
                <img class="w-60" src="image/logo.svg" alt="">
                <div class="  w-[345px] flex justify-between  text-xl ">
                    <a href="">Frontend</a>
                    <a href="">Backend</a>
                    <a href="">Full-Stack</a>
                </div>
                <div class="flex gap-4 items-center">
                    <div class="flex items-center bg-[#E7F2F4] rounded-lg p-4  ">
                        <i class="fa-solid fa-magnifying-glass text-gray-500 mr-3"></i>
                        <input type="text" placeholder="Rechercher..." class="bg-transparent outline-none w-full">
                    </div>
                    <div><i class=" text-3xl fa-regular fa-circle-user text-gray-500 mr-3"></i></div>
                </div>
            </nav>
            <div class="flex h-[100%] w-[100%]">
                <div class="bg-[#FFFFFF] h-[100%] w-[10%] ">
                    <nav class="h-[100%] w-[100%]">
                        <div class=" h-[345px] flex flex-col gap-6 pt-6 p-2">
                            <div class="p-2"><i class="fa-solid fa-house text-gray-500 mr-3 "></i>Tableau de
                                bord</div>
                            <div class="p-2 bg-[#00B4D8]/[22%] text-[#03045E]"><i
                                    class="fa-solid fa-bars-progress text-gray-500 mr-3 text-[03045E] "></i>Gestion
                                produit</div>
                            <div><i class="p-2 fa-solid fa-table-list text-gray-500 mr-3"></i>Catégories</div>
                        </div>
                    </nav>
                </div>
                <div class="h-[100%] w-[90%] p-10">
                    <div class="flex justify-between m-4">
                        <h2 class="text-3xl">Article</h2>
                        <button id="ajoutarticle" class=" bg-[#03045E] text-white p-4 rounded-lg hover:bg-[#023E8A] transition">
                            Ajouter un article
                        </button>
                    </div>
                    <table class="w-full">
                        <thead class="bg-[#00B4D8] text-white ">
                            <tr>
                                <th class="p-4"> <input type="checkbox" name="" id=""> Tout</th>
                                <th class="p-4">ARTICLE</th>
                                <th class="p-4">BRANCHE</th>
                                <th class="p-4">STATUT</th>
                                <th class="p-4">DATE</th>
                                <th class="p-4">ACTION</th>
                            </tr>
                        </thead>

                        <tbody class="divide-y divide-gray-200 ">
                            <tr class="">
                                <td class="p-4"><input type="checkbox" name="" id=""></td>
                                <td class="p-4">Comprendre le rôle du HTML</td>
                                <td class="p-4">Frontend</td>
                                <td class="p-4">Publié</td>
                                <td class="p-4">08/06/2026</td>
                                <td class="p-4">Action</td>
                            </tr>

                            <tr class="hover:bg-gray-50">
                                <td class="p-4"><input type="checkbox" name="" id=""></td>
                                <td class="p-4">Découvrir Tailwind CSS</td>
                                <td class="p-4">Frontend</td>
                                <td class="p-4">Publié</td>
                                <td class="p-4">08/06/2026</td>
                                <td class="p-4">Action</td>
                            </tr>
                            <tr class="hover:bg-gray-50">
                                <td class="p-4"><input type="checkbox" name="" id=""></td>
                                <td class="p-4">Découvrir Tailwind CSS</td>
                                <td class="p-4">Frontend</td>
                                <td class="p-4">Publié</td>
                                <td class="p-4">08/06/2026</td>
                                <td class="p-4">Action</td>
                            </tr>
                            <tr class="hover:bg-gray-50">
                                <td class="p-4"><input type="checkbox" name="" id=""></td>
                                <td class="p-4">Découvrir Tailwind CSS</td>
                                <td class="p-4">Frontend</td>
                                <td class="p-4">Publié</td>
                                <td class="p-4">08/06/2026</td>
                                <td class="p-4">Action</td>
                            </tr>
                            <tr class="hover:bg-gray-50">
                                <td class="p-4"><input type="checkbox" name="" id=""></td>
                                <td class="p-4">Découvrir Tailwind CSS</td>
                                <td class="p-4">Frontend</td>
                                <td class="p-4">Publié</td>
                                <td class="p-4">08/06/2026</td>
                                <td class="p-4">Action</td>
                            </tr>
                            <tr class="hover:bg-gray-50">
                                <td class="p-4"><input type="checkbox" name="" id=""></td>
                                <td class="p-4">Découvrir Tailwind CSS</td>
                                <td class="p-4">Frontend</td>
                                <td class="p-4">Publié</td>
                                <td class="p-4">08/06/2026</td>
                                <td class="p-4">Action</td>
                            </tr>
                            <tr class="hover:bg-gray-50">
                                <td class="p-4"><input type="checkbox" name="" id=""></td>
                                <td class="p-4">Découvrir Tailwind CSS</td>
                                <td class="p-4">Frontend</td>
                                <td class="p-4">Publié</td>
                                <td class="p-4">08/06/2026</td>
                                <td class="p-4">Action</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>
    `;
}
export { admin };