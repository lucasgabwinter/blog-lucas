export type Post = {
  slug: string;
  title: string;
  category: string;
  description: string;
  date: string;
  readTime: string;
  tags: string[];
  content: string[];
};

export const posts: Post[] = [
  {
    slug: "como-pensar-como-cientista-de-dados",
    title: "Como pensar como cientista de dados",
    category: "Carreira",
    description:
      "Um guia prático para sair da análise superficial e estruturar perguntas, hipóteses e decisões com clareza.",
    date: "13 Abr 2026",
    readTime: "6 min",
    tags: ["carreira", "pensamento analítico", "framework"],
    content: [
      "Ciência de dados não começa no modelo. Ela começa na pergunta. Antes de abrir um notebook, vale definir qual decisão será tomada com a análise, quais sinais realmente importam e quais variáveis estão apenas distraindo a discussão.",
      "Uma forma simples de elevar a qualidade do trabalho é transformar pedidos vagos em hipóteses testáveis. Em vez de perguntar se uma campanha foi boa, pergunte qual comportamento deveria ter mudado, em qual segmento e em quanto tempo esse efeito deveria aparecer.",
      "Outro ponto importante é distinguir correlação, causalidade e contexto operacional. Um gráfico bonito pode apontar um padrão, mas o valor real surge quando a equipe entende se esse padrão muda alguma decisão de produto, marketing ou operação.",
      "No dia a dia, o cientista de dados forte é aquele que combina estatística, visão de negócio e comunicação. O diferencial não está apenas em prever melhor, mas em explicar o que importa, o que é ruído e qual próximo experimento vale executar."
    ]
  },
  {
    slug: "metricas-que-importam-em-produtos-digitais",
    title: "Métricas que importam em produtos digitais",
    category: "Analytics",
    description:
      "Nem toda métrica merece virar KPI. Veja como separar números vaidosos de indicadores de impacto real.",
    date: "09 Abr 2026",
    readTime: "5 min",
    tags: ["kpi", "produto", "analytics"],
    content: [
      "Quando tudo é importante, nada é importante. Times de produto costumam acumular dashboards enormes, mas poucos indicadores realmente ajudam a decidir prioridade, investimento e ritmo de experimentação.",
      "Uma métrica útil precisa conectar comportamento do usuário a resultado de negócio. Retenção, ativação, tempo até valor e conversão por etapa costumam ser mais úteis do que volume bruto de acessos ou downloads isolados.",
      "Também vale desenhar métricas em camadas. As métricas de saúde mostram estabilidade do sistema, as métricas de comportamento revelam uso e as métricas de resultado mostram geração de valor. Misturar tudo em uma única visão normalmente só gera confusão.",
      "O melhor dashboard não é o mais completo. É o que permite que alguém olhe por dois minutos e entenda o que está melhorando, o que está piorando e onde agir agora."
    ]
  },
  {
    slug: "visualizacao-de-dados-sem-poluicao",
    title: "Visualização de dados sem poluição visual",
    category: "Data Viz",
    description:
      "Princípios simples para construir gráficos mais legíveis, comparáveis e persuasivos.",
    date: "02 Abr 2026",
    readTime: "4 min",
    tags: ["visualizacao", "dashboard", "storytelling"],
    content: [
      "Visualização de dados é edição. Cada cor, linha e legenda deve competir por atenção com parcimônia. Quanto mais elementos decorativos sem função, menor a chance de a mensagem principal ser entendida rapidamente.",
      "Uma boa prática é começar pela comparação que o gráfico precisa tornar óbvia. Se a meta é comparar tendências ao longo do tempo, linhas funcionam bem. Se a meta é comparar composição, barras empilhadas ou áreas proporcionais podem funcionar melhor.",
      "Hierarquia visual também importa. Título, destaque de série principal, anotações e uso de cor devem conduzir a leitura. Um gráfico forte reduz o esforço cognitivo do leitor sem infantilizar a análise.",
      "Em blogs e relatórios, bons gráficos fazem metade do trabalho narrativo. Eles não substituem contexto, mas aceleram o entendimento e tornam a mensagem memorável."
    ]
  }
];

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}
