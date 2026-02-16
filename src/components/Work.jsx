export default function Work() {

    const work = [
        {
            name: 'Assistente Virtual para Empresas',
            icon: './assets/work-1.png',
            description: 'Chatbot inteligente para atendimento automático 24/7.',
            link: '#',
        },
        {
            name: 'Automação de Suporte ao Cliente',
            icon: './assets/work-2.png',
            description: 'Sistema de respostas automáticas integrado ao WhatsApp e Web.',
            link: '#',
        },
        {
            name: 'Central de Atendimento com IA',
            icon: './assets/work-3.png',
            description: 'Gestão inteligente de tickets e atendimento multicanal.',
            link: '#',
        },
        {
            name: 'Análise Inteligente de Clientes',
            icon: './assets/work-4.png',
            description: 'IA para análise de comportamento e melhoria da experiência.',
            link: '#',
        }
    ];

    return (
        <div id="work" className="w-full px-[12%] py-16 scroll-mt-20">

            {/* TITULOS */}
            <h4 className="text-center mb-2 text-lg font-Ovo">
                Nossas Soluções
            </h4>

            <h2 className="text-center text-5xl font-Ovo">
                Projetos & Implementações
            </h2>

            <p className="text-center max-w-2xl mx-auto mt-5 mb-14 font-Ovo">
                Conheça algumas das soluções desenvolvidas pela LigCenter para
                automatizar o atendimento ao cliente e transformar a comunicação
                digital das empresas através da Inteligência Artificial.
            </p>

            {/* GRID */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

                {work.map((item) => (
                    <div
                        key={item.name}
                        className="relative rounded-xl overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition duration-500"
                    >

                        {/* BACKGROUND IMAGE */}
                        <div
                            className="h-72 bg-cover bg-center group-hover:scale-110 transition duration-500"
                            style={{ backgroundImage: `url(${item.icon})` }}
                        />

                        {/* OVERLAY */}
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-500"></div>

                        {/* CARD INFO */}
                        <div className="absolute bottom-0 w-full p-5 text-white">

                            <h3 className="font-semibold text-lg mb-1">
                                {item.name}
                            </h3>

                            <p className="text-sm text-white/90">
                                {item.description}
                            </p>

                            <div className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition duration-500">
                                <span className="text-sm">Ver solução</span>
                                <img
                                    src="./assets/right-arrow-white.png"
                                    alt=""
                                    className="w-4"
                                />
                            </div>

                        </div>
                    </div>
                ))}

            </div>

            {/* BOTÃO */}
            <a
                href="#contact"
                className="w-max flex items-center justify-center gap-2 border border-gray-300 dark:border-white/25 hover:bg-slate-100 dark:hover:bg-darkHover rounded-full py-3 px-10 mx-auto mt-16 duration-300"
            >
                Solicitar Demonstração
                <img src="./assets/right-arrow-bold.png" alt="" className="w-4 dark:hidden" />
                <img src="./assets/right-arrow-bold-dark.png" alt="" className="w-4 hidden dark:block" />
            </a>

        </div>
    );
}
