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
        <p className="eyebrow">Edicao inicial</p>
        <h1>Ciencia de dados com clareza, contexto e foco em boas decisoes.</h1>
        <p className="hero-text">
          Este espaco reune artigos sobre analytics, machine learning, visualizacao e carreira em
          dados, com uma abordagem mais calma, legivel e editorial.
        </p>
        <div className="hero-actions">
          <Link href="#artigos" className="button-primary">
            Ler artigos
          </Link>
          <Link href="/about" className="button-secondary">
            Sobre o blog
          </Link>
        </div>
      </section>

      <section className="featured-section" id="artigos">
        <div className="section-heading">
          <p className="eyebrow">Post em destaque</p>
          <h2>Uma leitura para começar</h2>
        </div>

        <article className="featured-post">
          <div className="featured-copy">
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
          <p className="eyebrow">Arquivo</p>
          <h2>Outras leituras recentes</h2>
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
          <h2>Assuntos que orientam o blog</h2>
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
          <h2>Receba novas publicacoes</h2>
          <p>
            Uma selecao de textos, reflexoes e experimentos sobre ciencia de dados, sempre em um
            formato direto e legivel.
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
