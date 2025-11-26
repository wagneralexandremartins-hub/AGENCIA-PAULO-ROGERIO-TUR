import React, { useEffect, useState } from "react";

type CurrentWeather = {
  temperature: number;
  windspeed: number;
};

const App: React.FC = () => {
  return (
    <div className="prt-page">
      <CookieBanner />
      <Header />
      <main>
        <Hero />
        <SectionWrapper id="roteiros" title="Roteiros em Poços de Caldas">
          <ToursGrid />
        </SectionWrapper>
        <SectionWrapper id="destaques" title="Destaques para sua excursão">
          <Highlights />
        </SectionWrapper>
        <SectionWrapper id="contato" title="Reserve seu passeio">
          <ContactSection />
        </SectionWrapper>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

/** HEADER */
const Header: React.FC = () => {
  return (
    <header className="prt-header">
      <div className="prt-container prt-header-inner">
        <div className="prt-logo">
          <img
            src="/imagens/guia-paulo-rogerio-pocos-de-caldas-turistas.jpg"
            alt="Guia Paulo Rogério com turistas no portal de Poços de Caldas"
          />
          <div className="prt-logo-text">
            <span className="prt-logo-title">Paulo Rogério Tur</span>
            <span className="prt-logo-subtitle">Excursões &amp; Turismo</span>
          </div>
        </div>
        <nav className="prt-nav">
          <a href="#roteiros">Roteiros</a>
          <a href="#destaques">Destaques</a>
          <a href="#contato">Contato</a>
        </nav>
      </div>
    </header>
  );
};

/** HERO + CLIMA */
const Hero: React.FC = () => {
  return (
    <section className="prt-hero">
      <div className="prt-container prt-hero-grid">
        <div className="prt-hero-text">
          <h1>
            Excursões e passeios em Poços de Caldas
            <span> com guia credenciado</span>
          </h1>
          <p>
            City tour, grupos de terceira idade, famílias e excursões
            personalizadas. Segurança, conforto e roteiros montados com carinho
            por quem conhece cada canto da cidade.
          </p>
          <ul className="prt-hero-list">
            <li>🚌 City tour completo pela cidade</li>
            <li>🏞️ Teleférico, Cristo Redentor, mirantes e parques</li>
            <li>👵 Grupos de terceira idade com atenção especial</li>
          </ul>
          <a
            href="https://wa.me/5535988951441?text=Olá%20Paulo%20Rogério,%20quero%20informações%20sobre%20passeios%20em%20Poços%20de%20Caldas."
            className="prt-btn prt-btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            Reservar passeio pelo WhatsApp
          </a>
          <p className="prt-hero-note">
            Informe a data da viagem, número de pessoas e tipo de passeio que
            deseja.
          </p>
        </div>

        <div className="prt-hero-side">
          <div className="prt-hero-card">
            <img
              src="/imagens/capa-vista-area.jpg"
              alt="Vista aérea de Poços de Caldas"
              className="prt-hero-image"
            />
            <p className="prt-hero-caption">
              Vista aérea de Poços de Caldas, ideal para planejar seu roteiro.
            </p>
          </div>

          <WeatherWidget />
        </div>
      </div>
    </section>
  );
};

/** WIDGET DE CLIMA EM TEMPO REAL (Open-Meteo) */
const WeatherWidget: React.FC = () => {
  const [weather, setWeather] = useState<CurrentWeather | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const url =
      "https://api.open-meteo.com/v1/forecast?latitude=-21.78&longitude=-46.56&current_weather=true&timezone=America%2FSao_Paulo";

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Erro ao buscar clima");
        }
        return res.json();
      })
      .then((data) => {
        if (data.current_weather) {
          setWeather({
            temperature: data.current_weather.temperature,
            windspeed: data.current_weather.windspeed,
          });
        }
      })
      .catch(() => {
        setError("Não foi possível carregar o clima agora.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="prt-weather-card">
      <h3>Clima em Poços de Caldas</h3>
      {loading && <p>Carregando clima do dia...</p>}
      {error && !loading && <p>{error}</p>}
      {weather && !loading && !error && (
        <div className="prt-weather-info">
          <p className="prt-weather-temp">{weather.temperature.toFixed(0)}°C</p>
          <p>Vento: {weather.windspeed.toFixed(0)} km/h</p>
          <p>Condições ideais para aproveitar os passeios!</p>
        </div>
      )}
      <small>Atualizado em tempo real via Open-Meteo.</small>
    </div>
  );
};

/** WRAPPER DE SEÇÃO */
type SectionWrapperProps = {
  id: string;
  title: string;
  children: React.ReactNode;
};

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  id,
  title,
  children,
}) => (
  <section id={id} className="prt-section">
    <div className="prt-container">
      <h2 className="prt-section-title">{title}</h2>
      {children}
    </div>
  </section>
);

/** GRADE DE ROTEIROS */
const ToursGrid: React.FC = () => {
  const tours = [
    {
      title: "City Tour Clássico",
      description:
        "Roteiro completo pelos principais pontos turísticos: teleférico, Cristo, Centro, Recanto Japonês e muito mais.",
      // Paulo Rogério com a família no relógio floral
      image:
        "/imagens/familia-com-guia-paulo-rogerio-no-relogio-floral.jpg",
      duration: "Duração média: 4 a 5 horas",
    },
    {
      title: "Passeio Serra & Mirantes",
      description:
        "Vista panorâmica da cidade em diferentes mirantes, com paradas para fotos e contemplação.",
      // Cristo com vista aérea
      image:
        "/imagens/cristo-redentor-pocos-de-caldas-vista-aerea.jpg",
      duration: "Duração média: 3 horas",
    },
    {
      title: "Grupos de Terceira Idade",
      description:
        "Roteiros adaptados, com paradas estratégicas, conforto e acompanhamento especial.",
      // Fonte dos Amores
      image: "/imagens/fonte-dos-amores-pocos-de-caldas-1.jpg",
      duration: "Roteiro personalizado conforme o grupo",
    },
  ];

  return (
    <div className="prt-grid">
      {tours.map((tour) => (
        <article key={tour.title} className="prt-card">
          <img src={tour.image} alt={tour.title} className="prt-card-image" />
          <div className="prt-card-body">
            <h3>{tour.title}</h3>
            <p>{tour.description}</p>
            <p className="prt-card-duration">{tour.duration}</p>
          </div>
        </article>
      ))}
    </div>
  );
};

/** DESTAQUES */
const Highlights: React.FC = () => (
  <div className="prt-highlights">
    <div className="prt-highlight-item">
      <h3>Guia credenciado</h3>
      <p>
        Atendimento feito pelo guia Paulo Rogério, com experiência em receber
        grupos de diversas cidades do Brasil.
      </p>
    </div>
    <div className="prt-highlight-item">
      <h3>Roteiros flexíveis</h3>
      <p>
        Ajustamos o passeio conforme o tempo de estadia, faixa etária e interesse
        do grupo.
      </p>
    </div>
    <div className="prt-highlight-item">
      <h3>Transporte confortável</h3>
      <p>
        Parcerias com empresas de transporte regularizadas, ônibus e vans com
        segurança e conforto.
      </p>
    </div>
  </div>
);

/** CONTATO / RESERVA */
const ContactSection: React.FC = () => (
  <div className="prt-contact">
    <div className="prt-contact-info">
      <p>
        Envie uma mensagem com as informações da sua excursão e retornaremos com
        valores e opções de roteiro:
      </p>
      <ul>
        <li>📅 Data da viagem</li>
        <li>👥 Número de pessoas</li>
        <li>🚍 Tipo de grupo (família, amigos, igreja, terceira idade, etc.)</li>
        <li>🏨 Se já possui hospedagem ou precisa de indicação</li>
      </ul>

      <a
        href="https://wa.me/5535988951441?text=Olá%20Paulo%20Rogério,%20quero%20informações%20sobre%20um%20passeio%20em%20Poços%20de%20Caldas."
        className="prt-btn prt-btn-outline"
        target="_blank"
        rel="noreferrer"
      >
        Falar com Paulo Rogério no WhatsApp
      </a>

      <p className="prt-contact-extra">
        Atendimento: <strong>(35) 98895-1441</strong> <br />
        CNPJ: <strong>56.689.000/0001-03</strong> <br />
        Cadastro Ministério do Turismo:{" "}
        <strong>13.566.523.51-0</strong>
      </p>

      <p className="prt-contact-extra">
        Siga nas redes sociais: <br />
        <a
          href="https://www.instagram.com/paulorogeriotilapia"
          target="_blank"
          rel="noreferrer"
        >
          Instagram @paulorogeriotilapia
        </a>{" "}
        •{" "}
        <a
          href="https://www.facebook.com/paulorogeriotur"
          target="_blank"
          rel="noreferrer"
        >
          Facebook /paulorogeriotur
        </a>
      </p>
    </div>

    <div className="prt-contact-card">
      <h3>Endereço de referência</h3>
      <p>
        Rua Guiseppe Maiochi, 217
        <br />
        Poços de Caldas – MG
        <br />
        CEP 37704-316
      </p>
      <p className="prt-contact-note">
        Atendemos com horário agendado. Consulte disponibilidade para o período
        da sua viagem.
      </p>
    </div>
  </div>
);

/** FOOTER */
const Footer: React.FC = () => (
  <footer className="prt-footer">
    <div className="prt-container prt-footer-inner">
      <p>© {new Date().getFullYear()} Agência Paulo Rogério Tur.</p>
      <p>
        CNPJ: 56.689.000/0001-03 • Cadastro MT: 13.566.523.51-0
      </p>
      <p>Poços de Caldas – MG • Brasil</p>
    </div>
  </footer>
);

/** WHATSAPP FLUTUANTE */
const WhatsAppButton: React.FC = () => (
  <a
    href="https://wa.me/5535988951441?text=Olá%20Paulo%20Rogério,%20quero%20fazer%20um%20roteiro%20em%20Poços%20de%20Caldas."
    className="prt-whatsapp-float"
    target="_blank"
    rel="noreferrer"
  >
    💬
  </a>
);

/** COOKIE BANNER COM TILÁPIA 🐟 */
const CookieBanner: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("prt_cookie_accept");
    if (!accepted) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("prt_cookie_accept", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="prt-cookie-banner">
      <div className="prt-cookie-content">
        <span className="prt-cookie-icon" aria-hidden="true">
          🐟
        </span>
        <div className="prt-cookie-text">
          <strong>Política de Cookies</strong>
          <p>
            Usamos cookies para melhorar sua experiência nos roteiros, medir
            acessos e deixar tudo mais organizado. Ao continuar, você concorda
            com o uso de cookies.
          </p>
        </div>
      </div>
      <button className="prt-btn prt-btn-cookie" onClick={handleAccept}>
        Aceitar
      </button>
    </div>
  );
};

export default App;
