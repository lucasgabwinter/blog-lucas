import Link from "next/link";
import { SiteHeader } from "@/components/site-header";

const pillars = [
  {
    title: "Clareza acima de jargao",
    description:
      "Traduzir conceitos tecnicos em ideias acionaveis para produto, negocio e lideranca."
  },
  {
    title: "Dados com contexto",
    description:
      "Unir analise, experimentacao e entendimento do problema antes de pensar em modelo."
  },
  {
    title: "Construir com intencao",
    description:
      "Criar sistemas, narrativas e metricas que ajudem times a tomar decisoes melhores."
  }
];

export default function AboutPage() {
  return (
    <main className="page-shell">
      <SiteHeader />

      <section className="about-hero">
        <div>
          <p className="eyebrow">About</p>
          <h1>Lucas Winter escreve sobre ciencia de dados com foco em impacto real.</h1>
          <p className="about-lead">
            Este blog nasceu para reunir ideias sobre analytics, machine learning, visualizacao de
            dados e carreira, sempre com uma abordagem pratica, editorial e conectada a decisoes do
            mundo real.
          </p>
        </div>

        <div className="about-note">
          <span className="pill">Missao</span>
          <p>
            Tornar temas tecnicos mais claros, uteis e interessantes para quem trabalha com dados
            ou quer entrar nessa area.
          </p>
        </div>
      </section>

      <section className="about-grid">
        <article className="about-story">
          <p className="eyebrow">Trajetoria</p>
          <h2>Um espaco para pensamento analitico, produto e comunicacao.</h2>
          <p>
            A proposta deste projeto e ir alem de tutoriais isolados. A ideia e publicar conteudos
            que mostrem como dados ajudam a estruturar perguntas, priorizar oportunidades e contar
            historias melhores com evidencias.
          </p>
          <p>
            Em vez de tratar ciencia de dados como uma area distante, o blog aproxima o tema de
            cenarios concretos: dashboards, metricas, experimentos, modelos e decisoes que afetam
            produtos e negocios todos os dias.
          </p>
        </article>

        <aside className="about-sidebar">
          <p className="eyebrow">Foco</p>
          <ul>
            <li>Analytics e metricas de produto</li>
            <li>Machine learning aplicado</li>
            <li>Visualizacao e storytelling</li>
            <li>Carreira em dados</li>
          </ul>
        </aside>
      </section>

      <section className="about-pillars">
        <div className="section-heading">
          <p className="eyebrow">Principios</p>
          <h2>Como este blog pensa ciencia de dados</h2>
        </div>

        <div className="topics-grid">
          {pillars.map((pillar, index) => (
            <article key={pillar.title} className="topic-card">
              <strong>0{index + 1}</strong>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="newsletter-section">
        <div>
          <p className="eyebrow">Continuar lendo</p>
          <h2>Quer explorar os artigos do blog?</h2>
          <p>
            A home ja tem posts iniciais e uma base pronta para crescer com novos textos, estudos e
            experimentos.
          </p>
        </div>

        <div className="about-actions">
          <Link href="/" className="button-primary">
            Voltar para a home
          </Link>
          <Link href="/#artigos" className="button-secondary">
            Ver artigos
          </Link>
        </div>
      </section>
    </main>
  );
}
