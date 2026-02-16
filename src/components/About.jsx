export default function About() {
    const tools = [
        { name: 'vscode', icon: './assets/vscode.png' },
        { name: 'firebase', icon: './assets/firebase.png' },
        { name: 'mongodb', icon: './assets/mongodb.png' },
        { name: 'figma', icon: './assets/figma.png' },
        { name: 'git', icon: './assets/git.png' },
    ];

    const data = [
        {
            name: 'Missão',
            icon1: './assets/code-icon.png',
            icon2: './assets/code-icon-dark.png',
            description:
                'Oferecer soluções inteligentes de atendimento ao cliente utilizando Inteligência Artificial para melhorar a experiência, rapidez e eficiência das empresas.',
        },
        {
            name: 'Visão',
            icon1: './assets/edu-icon.png',
            icon2: './assets/edu-icon-dark.png',
            description:
                'Tornar-se referência em África no desenvolvimento de plataformas de atendimento automatizado e suporte digital baseado em IA.',
        },
        {
            name: 'Valores',
            icon1: './assets/project-icon.png',
            icon2: './assets/project-icon-dark.png',
            description:
                'Inovação, confiança, transparência, foco no cliente e melhoria contínua através da tecnologia.',
        },
    ];

    return (
        <div id="about" className="w-full px-[12%] py-16 scroll-mt-20">

            {/* Título */}
            <h2 className="text-center text-5xl font-Ovo mb-12">
                Sobre nós
            </h2>

            {/* Container central */}
            <div className="flex justify-center">

                <div className="flex-1 max-w-4xl text-center">

                    {/* Texto */}
                    <p className="mb-12 mx-auto max-w-2xl font-Ovo text-gray-700 dark:text-white/80">
                        A <strong>LigCenter</strong> é uma agência especializada em soluções de
                        atendimento ao cliente com Inteligência Artificial. Desenvolvemos
                        assistentes virtuais inteligentes capazes de automatizar interações,
                        reduzir custos operacionais e melhorar a comunicação entre empresas
                        e clientes em múltiplos canais digitais.
                        <br /><br />
                        Nosso objetivo é ajudar empresas a oferecer suporte rápido,
                        disponível 24 horas por dia, garantindo eficiência,
                        escalabilidade e uma experiência moderna para o consumidor.
                    </p>

                    {/* Cards */}
                    <ul
                        className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-6
        max-w-6xl
        mx-auto
    "
                    >
                        {data.map((item) => (
                            <li
                                key={item.name}
                                className="border border-gray-300 dark:border-white/30 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:hover:shadow-white/80 dark:hover:bg-darkHover/50 text-center"
                            >
                                <img src={item.icon1} alt="" className="w-7 mx-auto mt-3 dark:hidden" />
                                <img src={item.icon2} alt="" className="w-7 mx-auto mt-3 hidden dark:block" />

                                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                                    {item.name}
                                </h3>

                                <p className="text-gray-600 text-sm dark:text-white/80">
                                    {item.description}
                                </p>
                            </li>
                        ))}
                    </ul>


                </div>
            </div>
        </div>
    );
}
