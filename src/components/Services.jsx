export default function Services() {

    const services = [
        {
            name: 'Chatbots com Inteligência Artificial',
            icon: './assets/web-icon.png',
            description:
                'Desenvolvemos assistentes virtuais inteligentes capazes de responder clientes automaticamente via WhatsApp, Website e redes sociais 24/7.',
            link: '#',
        },
        {
            name: 'Automação de Atendimento',
            icon: './assets/mobile-icon.png',
            description:
                'Automatizamos processos de suporte ao cliente, reduzindo tempo de resposta, custos operacionais e aumentando a satisfação dos utilizadores.',
            link: '#',
        },
        {
            name: 'Integração com Sistemas Empresariais',
            icon: './assets/ui-icon.png',
            description:
                'Integramos a Inteligência Artificial com CRM, sistemas de vendas, farmácias e plataformas internas para respostas inteligentes em tempo real.',
            link: '#',
        },
        {
            name: 'Análise Inteligente de Conversas',
            icon: './assets/graphics-icon.png',
            description:
                'Utilizamos IA para analisar interações com clientes e gerar insights que ajudam empresas a melhorar decisões e estratégias.',
            link: '#',
        }
    ];

    return (
        <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">

            <h4 className="text-center mb-2 text-lg font-Ovo">
                O que oferecemos
            </h4>

            <h2 className="text-center text-5xl font-Ovo">
                Nossos Serviços
            </h2>

            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
                A LigCenter ajuda empresas a modernizar o atendimento ao cliente
                através da Inteligência Artificial, automatizando processos,
                melhorando a comunicação e proporcionando suporte rápido e eficiente.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10">
                {services.map((service) => (
                    <div
                        key={service.name}
                        className="border border-gray-300 dark:border-white/30 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white text-center"
                    >
                        <img src={service.icon} alt="" className="w-10 mx-auto" />

                        <h3 className="text-lg my-4 text-gray-700 dark:text-white">
                            {service.name}
                        </h3>

                        <p className="text-sm text-gray-600 leading-5 dark:text-white/80">
                            {service.description}
                        </p>

                        <a
                            href={service.link}
                            className="flex items-center justify-center gap-2 text-sm mt-5"
                        >
                            Saber mais
                            <img src="./assets/right-arrow.png" alt="" className="w-4" />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}
