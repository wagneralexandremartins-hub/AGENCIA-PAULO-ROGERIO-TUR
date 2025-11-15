export default function App() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-800">
      {/* HERO */}
      <section className="w-full px-6 py-20 text-center bg-gradient-to-b from-blue-900 to-blue-700 text-white">
        <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg">
          Agência Paulo Rogério Tur
        </h1>

        <p className="mt-4 max-w-2xl mx-auto text-lg opacity-90">
          Excursões, passeios guiados e city tour em Poços de Caldas.
          Transporte seguro, guia local e atendimento personalizado.
        </p>

        <a
          href="https://wa.me/5535988951441?text=Olá!%20Quero%20informações%20sobre%20os%20passeios.%20"
          target="_blank"
          className="mt-6 inline-block bg-green-500 hover:bg-green-600 transition px-6 py-3 rounded-lg font-medium shadow-lg"
        >
          📲 Falar com o guia agora
        </a>
      </section>

      {/* BLOCO DE SERVIÇOS */}
      <section className="max-w-4xl mx-auto px-6 py-16 space-y-12">
        <h2 className="text-3xl font-bold text-center text-blue-900">
          Passeios mais procurados
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="p-6 bg-white rounded-xl shadow-md">
            <h3 className="text-xl font-semibold">🚡 Teleférico & Cristo</h3>
            <p className="opacity-80 mt-2">
              Subida ao Cristo Redentor, vista panorâmica da cidade e parada
              para fotos no mirante oficial.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-md">
            <h3 className="text-xl font-semibold">🌄 Mirantes de Poços</h3>
            <p className="opacity-80 mt-2">
              Tour completo pelo Mirante de Santa Rita, Serra de São Domingos e
              principais vistas da Mantiqueira.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-md">
            <h3 className="text-xl font-semibold">🏞️ Parque do Cristo</h3>
            <p className="opacity-80 mt-2">
              Um dos pontos mais visitados da cidade, ideal para famílias e
              grupos turísticos.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-md">
            <h3 className="text-xl font-semibold">🚌 Excursões para grupos</h3>
            <p className="opacity-80 mt-2">
              Transporte confortável, guia certificado e roteiros montados para
              escolas, igrejas e famílias.
            </p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="w-full text-center py-16 bg-blue-900 text-white">
        <h2 className="text-3xl font-bold mb-4">Planeje seu passeio hoje mesmo!</h2>
        <p className="opacity-90 mb-6">
          Atendimento rápido e direto com o guia Paulo Rogério.
        </p>

        <a
          href="https://wa.me/5535988951441?text=Olá!%20Quero%20fazer%20uma%20reserva.%20"
          target="_blank"
          className="inline-block bg-green-500 hover:bg-green-600 transition px-6 py-3 rounded-lg font-medium shadow-lg"
        >
          📞 Reservar agora
        </a>
      </section>
    </main>
  );
}

