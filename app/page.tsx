import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { posts } from "@/lib/posts";

const themes = [
  "Machine Learning aplicado a negócios",
  "Análise exploratória de dados",
  "Visualização e storytelling",
  "Métricas de produto e experimentação"
];

export default function HomePage() {
  const [featuredPost, ...latestPosts] = posts;

  return (
    <main className="page-shell">
      <SiteHeader />

      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Blog em Next.js</p>
          <h1>Ciência de dados para decisões melhores, produtos melhores e perguntas melhores.</h1>
          <p className="hero-text">
            Um espaço para publicar análises, tutoriais, reflexões de carreira e estudos sobre
            dados com linguagem clara e foco em impacto real.
          </p>

          <div className="hero-actions">
            <Link href="#artigos" className="button-primary">
              Explorar artigos
            </Link>
            <Link href="#newsletter" className="button-secondary">
              Entrar na newsletter
            </Link>
          </div>
        </div>

        <div className="hero-panel">
          <div className="metric-card">
            <span>Posts base</span>
            <strong>03</strong>
            <small>conteudos iniciais para o blog</small>
          </div>
          <div className="metric-card">
            <span>Temas editoriais</span>
            <strong>04</strong>
            <small>analytics, ML, data viz e carreira</small>
          </div>
          <div className="signal-card">
            <p>Foco editorial</p>
            <ul>
              <li>Explicações acessíveis</li>
              <li>Visão de produto e negócio</li>
              <li>Base pronta para escalar com CMS depois</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="featured-section" id="artigos">
        <div className="section-heading">
          <p className="eyebrow">Destaque</p>
          <h2>Comece pelo artigo principal</h2>
        </div>

        <article className="featured-post">
          <div>
            <span className="pill">{featuredPost.category}</span>
            <h3>{featuredPost.title}</h3>
            <p>{featuredPost.description}</p>
          </div>

          <div className="featured-meta">
            <span>{featuredPost.date}</span>
            <span>{featuredPost.readTime}</span>
            <Link href={`/posts/${featuredPost.slug}`}>Ler artigo</Link>
          </div>
        </article>
      </section>

      <section className="latest-section">
        <div className="section-heading">
          <p className="eyebrow">Recentes</p>
          <h2>Novos artigos para publicar</h2>
        </div>

        <div className="post-grid">
          {latestPosts.map((post) => (
            <article key={post.slug} className="post-card">
              <span className="pill">{post.category}</span>
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <div className="post-card-footer">
                <span>
                  {post.date} · {post.readTime}
                </span>
                <Link href={`/posts/${post.slug}`}>Abrir</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="topics-section" id="temas">
        <div className="section-heading">
          <p className="eyebrow">Temas</p>
          <h2>Pilares editoriais do blog</h2>
        </div>

        <div className="topics-grid">
          {themes.map((theme, index) => (
            <div key={theme} className="topic-card">
              <strong>0{index + 1}</strong>
              <p>{theme}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="newsletter-section" id="newsletter">
        <div>
          <p className="eyebrow">Newsletter</p>
          <h2>Uma base pronta para crescer</h2>
          <p>
            O projeto ja nasce com identidade, estrutura de posts e rotas dinamicas. O proximo
            passo pode ser integrar MDX, CMS ou analytics.
          </p>
        </div>

        <form className="newsletter-form">
          <label htmlFor="email">Receba novidades quando publicar novos textos</label>
          <input id="email" type="email" placeholder="seuemail@exemplo.com" />
          <button type="submit">Quero acompanhar</button>
        </form>
      </section>
    </main>
  );
}
