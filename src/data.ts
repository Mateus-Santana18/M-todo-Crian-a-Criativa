import { Activity, BonusItem, FaqItem, Testimonial } from './types';
import bonus1Img from './assets/bonus1.png';
import bonus2Img from './assets/bonus2.png';
import bonus3Img from './assets/bonus3.png';
import heroMockupImg from './assets/hero_mockup.png';

export const CHECKOUT_URL = "https://pay.cakto.com.br/t9roohk_959253";

export const HERO_MOCKUP_IMAGE = heroMockupImg;

export const WHY_IT_WORKS_IMAGE = "https://i.imgur.com/xa4vd3g.png";

export const ACTIVITIES_DATA: Activity[] = [
  {
    id: "act-1",
    title: "Labirinto de Barbante",
    category: "🎯 Coordenação Motora",
    ageGroup: "5 a 10 anos",
    image: "https://i.imgur.com/Uy9Bw5o.jpeg",
    description: "Transforme sua casa em uma missão de agente secreto.",
    materials: ["Barbante ou lã colorida", "Fita crepe", "Corredor ou cadeiras"],
    steps: [
      "Cole pedaços de barbante de uma parede à outra no corredor em alturas variadas.",
      "Desafie a criança a atravessar de um lado ao outro sem encostar no barbante.",
      "Cronometre as tentativas para criar um recorde divertido em família."
    ],
    benefit: "Desenvolve agilidade, percepção espacial e foco total sem tela."
  },
  {
    id: "act-2",
    title: "Caça ao Tesouro das Cores",
    category: "🌈 Exploração Sensorial",
    ageGroup: "2 a 6 anos",
    image: "https://i.imgur.com/1ob66UX.jpeg",
    description: "Encontre objetos enquanto aprende brincando.",
    materials: ["Folha de atividades impressa do Kit", "Cestinha ou caixa", "Objetos variados da casa"],
    steps: [
      "Entregue a cartela de cores do Kit Vida Sem Telas para a criança.",
      "Dê 5 minutos para ela encontrar 1 objeto vermelho, 1 amarelo e 1 azul pelo quarto.",
      "Reúna tudo no tapete e conversem sobre as texturas e formatos."
    ],
    benefit: "Estimula raciocínio rápido, reconhecimento de cores e vocabulário."
  },
  {
    id: "act-3",
    title: "Bolhas Gigantes",
    category: "🧪 Ciência & Ar Livre",
    ageGroup: "3 a 12 anos",
    image: "https://i.imgur.com/aDXlUaQ.jpeg",
    description: "Crie bolhas enormes com uma receita simples e divertida.",
    materials: ["Água", "Detergente", "2 colheres de açúcar ou amido", "Dois palitos e barbante"],
    steps: [
      "Misture a água, o detergente e o açúcar em uma bacia grande.",
      "Amarre o barbante nos dois palitos formando um triângulo afrouxado.",
      "Mergulhe na bacia e corra devalar contra o vento para ver bolhas enormes!"
    ],
    benefit: "Desperta a curiosidade científica e coordenação motora grossa."
  },
  {
    id: "act-4",
    title: "Teatro de Sombras",
    category: "🎭 Criatividade",
    ageGroup: "4 a 9 anos",
    image: "https://i.imgur.com/l5mrcKG.jpeg",
    description: "Conte histórias mágicas usando apenas uma lanterna.",
    materials: ["Moldes recortados do Kit", "Palitos de churrasco sem ponta", "Lanterna"],
    steps: [
      "Recorte as silhuetas de dragões, princesas e dinossauros do anexo.",
      "Cole os palitos no verso com fita adesiva.",
      "Apague a luz do quarto, aponte a lanterna para a parede e comece o espetáculo."
    ],
    benefit: "Ótima transição relaxante para a hora de dormir, reduzindo a ansiedade."
  },
  {
    id: "act-5",
    title: "Torre Geométrica",
    category: "🏗️ Lógica & Engenharia",
    ageGroup: "6 a 12 anos",
    image: "https://i.imgur.com/Cmy3gIQ.jpeg",
    description: "Construa a torre mais alta sem deixá-la cair.",
    materials: ["Massinha de modelar ou jujubas", "Palitos de dente ou espaguete cru"],
    steps: [
      "Faça pequenas bolinhas de massinha para servirem de conectores.",
      "Una os palitos formando triângulos e quadrados como base.",
      "Construa andares cada vez mais altos desafiando a gravidade."
    ],
    benefit: "Noções práticas de física, resiliência e pensamento estruturado."
  },
  {
    id: "act-6",
    title: "Pintura com Gelo",
    category: "🎨 Arte Sensorial",
    ageGroup: "2 a 7 anos",
    image: "https://i.imgur.com/5naU3tT.jpeg",
    description: "Pinte com cubos de gelo coloridos e crie lindas aquarelas.",
    materials: ["Forminha de gelo", "Corante alimentício ou guache", "Palitos de picolé", "Papel grosso"],
    steps: [
      "Coloque água com gotinhas de corante nas formas de gelo e espete os palitos.",
      "Leve ao congelador por 4 horas.",
      "Desenforme no papel canson e deixe a criança desenhar deslizando o gelo."
    ],
    benefit: "Experiência tátil térmica relaxante que estimula a expressão artística."
  },
  {
    id: "act-7",
    title: "Matemática Divertida",
    category: "🧠 Raciocínio Lógico",
    ageGroup: "5 a 11 anos",
    image: "https://i.imgur.com/6UMd4Kj.jpeg",
    description: "Aprenda contas brincando de mercadinho.",
    materials: ["Fichas impressas do Bônus", "Dados de tabuleiro", "Grãos de feijão"],
    steps: [
      "Jogue os dois dados e junte a quantidade equivalente de feijões.",
      "Troque cada 10 feijões por 1 ficha de 'Dezena' dourada.",
      "Veja quem consegue chegar na marca de 100 pontos primeiro."
    ],
    benefit: "Transforma números abstratos em brincadeira concreta e prazerosa."
  },
  {
    id: "act-8",
    title: "Resgate dos Dinossauros",
    category: "🦖 Coordenação Fina",
    ageGroup: "2 a 6 anos",
    image: "https://i.imgur.com/8h482K9.jpeg",
    description: "Liberte os dinossauros presos no gelo e complete a missão.",
    materials: ["Pequenos brinquedos plásticos", "Pote plástco grande", "Água morna em conta-gotas"],
    steps: [
      "Coloque os brinquedos no pote com água e congele durante a noite.",
      "Coloque o bloco em uma assadeira no quintal.",
      "Dê colheres, borrifador e sal para a criança derreter o gelo e resgatar os bichos."
    ],
    benefit: "Foco prolongado, persistência e observação de mudanças de estado da matéria."
  }
];

export const BONUSES_DATA: BonusItem[] = [
  {
    id: "bonus-1",
    badge: "BRINDE",
    title: "CALIGRAFIA DIVERTIDA",
    description: "Transforme a escrita em uma brincadeira! Atividades envolventes que ajudam seu filho a melhorar a letra de forma leve, divertida e natural.",
    image: bonus1Img
  },
  {
    id: "bonus-2",
    badge: "BRINDE",
    title: "MÃE DE SUCESSO",
    description: "Mesmo com a rotina corrida, descubra como criar momentos inesquecíveis e fortalecer a conexão com seu filho todos os dias",
    image: bonus2Img
  },
  {
    id: "bonus-3",
    badge: "BRINDE",
    title: "MATEMÁTICA LÚDICA",
    description: "Seu filho aprende números e continhas brincando, com atividades práticas usando materiais que você já tem em casa",
    image: bonus3Img
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "test-1",
    name: "Juliana Mendes",
    role: "Mãe do Pedro (6 anos) - São Paulo, SP",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80",
    content: "Gente, eu estava desesperada porque o Pedro só queria saber de tablet assim que chegava da escola. Imprimi as atividades do Kit no domingo à noite. Hoje ele passou 1 hora e meia montando o teatro de sombras! Até chorou quando eu disse que era hora de tomar banho kkkk amei demais!",
    likes: "34",
    time: "Hoje às 14:22"
  },
  {
    id: "test-2",
    name: "Carlos Eduardo",
    role: "Pai da Marina e Lucca - Curitiba, PR",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
    content: "O bônus de Matemática Lúdica vale 100x mais que o valor de 7 reais do kit todo. A didática é absurda de simples. Fazemos o 'mercadinho dos grãos' quase todo dia. Parabéns aos criadores!",
    likes: "48",
    time: "Ontem às 19:10"
  },
  {
    id: "test-3",
    name: "Patrícia Albuquerque",
    role: "Pedagoga e Mãe - Belo Horizonte, MG",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80",
    content: "Como pedagoga eu analisei cada folha antes de aplicar com minha filha de 4 anos. O estímulo sensorial e a progressão motora são perfeitos. Recomendei no grupo de pais da escola toda!",
    likes: "89",
    time: "Ontem às 11:45"
  },
  {
    id: "test-4",
    name: "Fernanda Costa",
    role: "Mãe do Gabriel (8 anos) - Salvador, BA",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&q=80",
    content: "Confesso que comprei desconfiada por ser tão barato (7 reais parece piada hoje em dia). Recebi o e-mail em 2 minutos. Já imprimi o bloco de lógica e meu filho ficou fascinado. Recomendo de olhos fechados!",
    likes: "61",
    time: "2 dias atrás"
  },
  {
    id: "test-5",
    name: "Marcos Vinícius",
    role: "Pai do Davi (5 anos) - Goiânia, GO",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
    content: "O guia 'Mãe de Sucesso' ajudou muito minha esposa e eu na rotina corrida. Atividades de 15 minutinhos que mudaram o humor do nosso filho antes de dormir. Zero brigas por causa do Youtube agora.",
    likes: "42",
    time: "3 dias atrás"
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    question: "Serve pra idade do meu filho?",
    answer: "Sim! O material é dividido por faixa etária para funcionar de verdade em cada fase. Temos atividades específicas para 0 a 1 ano (brincadeiras sensoriais), 2 a 4 anos (coordenação motora e cores), 5 a 7 anos (leitura, escrita e raciocínio) e 8 a 12 anos (criatividade, lógica e independência). Você recebe tudo no acesso — e usa o que faz sentido pro seu filho agora."
  },
  {
    question: "Posso usar em todos os dispositivos?",
    answer: "Com certeza. O material é compatível com celular, tablet e computador. Você acessa onde for mais prático e nunca fica sem opções de brincadeira."
  },
  {
    question: "Preciso imprimir?",
    answer: "Só se quiser. Você tem opções digitais que funcionam sem impressão e também materiais pra imprimir. Isso dá liberdade: brincar em qualquer lugar, seja em casa, na escola ou até numa viagem."
  },
  {
    question: "Preciso estar junto em todas as atividades?",
    answer: "Não! O kit foi feito pra equilibrar tudo. Algumas atividades são pra você viver momentos em família, mas muitas outras seu filho faz sozinho, sem pedir celular e sem você virar recreador o dia todo."
  },
  {
    question: "Serve pra crianças com autismo ou TDAH?",
    answer: "Sim. O conteúdo é inclusivo, pode ser adaptado, e já está sendo usado por famílias com crianças neurodivergentes, que estão vendo ótimos resultados de atenção, foco e alegria sem telas."
  },
  {
    question: "Posso compartilhar com outro responsável ou imprimir para escola?",
    answer: "Sim! O acesso é vitalício e você pode imprimir ou compartilhar com quem quiser. É um investimento único que pode beneficiar não só seus filhos, mas também outras crianças próximas."
  }
];
