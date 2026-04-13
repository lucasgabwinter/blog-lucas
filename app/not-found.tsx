import Link from "next/link";

export default function NotFound() {
  return (
    <main className="page-shell not-found">
      <div className="not-found-card">
        <p className="eyebrow">404</p>
        <h1>Artigo nao encontrado</h1>
        <p>O conteudo que voce tentou acessar nao existe ou ainda nao foi publicado.</p>
        <Link href="/" className="button-primary">
          Voltar ao inicio
        </Link>
      </div>
    </main>
  );
}
