import { useEffect, useState } from 'react'

export default function Contact() {

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();

        setResult("Enviando mensagem...");

        const formData = new FormData(event.target);

        // 🔑 coloque sua access key do Web3Forms
        formData.append("access_key", "SUA_ACCESS_KEY_AQUI");

        const res = {
            success: true,
            message: "Mensagem enviada com sucesso ✅"
        };

        if (res.success) {
            setResult(res.message);
            event.target.reset();
        } else {
            setResult("Erro ao enviar mensagem.");
        }
    };

    function CaptchaLoader() {
        const captchadiv = document.querySelectorAll('[data-captcha="true"]');
        if (captchadiv.length) {
            const script = document.createElement("script");
            script.src = "https://js.hcaptcha.com/1/api.js";
            script.async = true;
            document.body.appendChild(script);
        }
    }

    useEffect(() => {
        CaptchaLoader();
    }, []);

    return (
        <div
            id="contact"
            className="w-full px-[12%] py-16 scroll-mt-20 bg-gray-50 dark:bg-darkTheme"
        >

            {/* TITULO */}
            <h4 className="text-center mb-2 text-lg font-Ovo">
                Fale Connosco
            </h4>

            <h2 className="text-center text-5xl font-Ovo">
                Entre em Contacto
            </h2>

            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
                Precisa automatizar o atendimento da sua empresa com Inteligência Artificial?
                A nossa equipa está pronta para ajudar.
            </p>

            {/* GRID PRINCIPAL */}
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

                {/* ================= INFO CONTACTO ================= */}
                <div className="space-y-6">

                    <div className="bg-white dark:bg-darkHover/30 p-6 rounded-xl shadow-md">
                        <h3 className="text-xl font-semibold mb-4">
                            Informações de Contacto
                        </h3>

                        <p className="mb-2">
                            <strong>Endereço:</strong><br />
                            Maputo, Moçambique
                        </p>

                        <p className="mb-2">
                            <strong>Telefone:</strong><br />
                            +258 84 000 0000
                        </p>

                        <p className="mb-2">
                            <strong>Email:</strong><br />
                            contacto@ligcenter.ai
                        </p>

                        <p>
                            <strong>Horário:</strong><br />
                            Segunda – Sexta | 08:00 - 17:00
                        </p>
                    </div>

                    {/* GOOGLE MAP */}
                    <div className="rounded-xl overflow-hidden shadow-md">
                        <iframe
                            title="localizacao"
                            src="https://www.google.com/maps?q=Maputo,Mozambique&output=embed"
                            width="100%"
                            height="300"
                            loading="lazy"
                            className="border-0"
                        ></iframe>
                    </div>

                </div>

                {/* ================= FORM ================= */}
                <form onSubmit={onSubmit} className="bg-white dark:bg-darkHover/30 p-8 rounded-xl shadow-md">

                    <input type="hidden" name="subject" value="LigCenter - Novo Contacto" />

                    <input
                        type="text"
                        placeholder="Seu nome"
                        required
                        name="name"
                        className="w-full mb-4 px-4 py-2 border rounded-md outline-none"
                    />

                    <input
                        type="email"
                        placeholder="Seu email"
                        required
                        name="email"
                        className="w-full mb-4 px-4 py-2 border rounded-md outline-none"
                    />

                    <textarea
                        rows="6"
                        placeholder="Escreva sua mensagem..."
                        required
                        name="message"
                        className="w-full mb-6 px-4 py-2 border rounded-md outline-none"
                    ></textarea>

                    <div className="h-captcha mb-6" data-captcha="true"></div>

                    <button
                        type="submit"
                        className="py-3 px-8 bg-black text-white rounded-full hover:bg-gray-800 duration-300 w-full"
                    >
                        Enviar Mensagem
                    </button>

                    <p className="mt-2 text-center">{result}</p>
                </form>

            </div>
        </div>
    );
}
