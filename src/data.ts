import { Activity, BonusItem, FaqItem, Testimonial } from './types';

export const CHECKOUT_URL = "https://pay.vidasemtela.com/e82bh0vj?utm_source=site&utm_medium=organico&utm_campaign=vidasemtela";

export const HERO_MOCKUP_IMAGE = "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80"; // Kids learning & crafting happily

export const WHY_IT_WORKS_IMAGE = "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1024&q=80"; // Happy family/kids playing

export const ACTIVITIES_DATA: Activity[] = [
  {
    id: "act-1",
    title: "Labirinto de Barbante e Laser",
    category: "Coordenação Motora",
    ageGroup: "5 a 10 anos",
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=600&q=80",
    description: "Transforme o corredor de casa em uma missão de agente secreto usando apenas fita crepe e barbante colorido.",
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
    category: "Exploração Sensorial",
    ageGroup: "2 a 6 anos",
    image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=600&q=80",
    description: "Uma divertida busca pela sala ou quintal para encontrar objetos correspondentes ao gabarito impresso.",
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
    title: "Laboratório de Bolhas Gigantes",
    category: "Ciência & Ar Livre",
    ageGroup: "3 a 12 anos",
    image: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&w=600&q=80",
    description: "A receita mágica perfeita do manual para fazer bolhas gigantescas no quintal ou na varanda.",
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
    title: "Teatro de Sombras Fantásticas",
    category: "Criatividade & Narração",
    ageGroup: "4 a 9 anos",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80",
    description: "Recorte os moldes de animais do kit, cole em palitos e crie historinhas mágicas com a lanterna do celular antes de dormir.",
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
    title: "Desafio da Torre Geométrica",
    category: "Lógica e Engenharia",
    ageGroup: "6 a 12 anos",
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=600&q=80",
    description: "Quem consegue construir a torre mais alta e firme usando apenas massinha e palitos de dente?",
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
    title: "Pintura Mágica com Gelo Colorido",
    category: "Arte Sensorial",
    ageGroup: "2 a 7 anos",
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=600&q=80",
    description: "Picolés de tinta e água que derretem no papel grosso criando aquarelas surpreendentes.",
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
    title: "Matemática Lúdica dos Tabuleiros",
    category: "Raciocínio Lógico",
    ageGroup: "5 a 11 anos",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=600&q=80",
    description: "Aprenda somas e multiplicações brincando de mercadinho com as cédulas e fichas exclusivas do material.",
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
    title: "Resgate dos Dinossauros Congelados",
    category: "Coordenação Fina",
    ageGroup: "2 a 6 anos",
    image: "https://images.unsplash.com/photo-1566140967404-b8b3932483f5?auto=format&fit=crop&w=600&q=80",
    description: "Congele pequenos bonequinhos dentro de um bloco de gelo e dê ferramentas seguras para o pequeno paleontólogo escavar.",
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
    description: "Exercícios de escrita legais que vão fazer seu filho ficar entusiasmado. E de forma leve você vai ver a letrinha dele melhorando de forma natural.",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=500&q=80" // writing pencils/notebook
  },
  {
    id: "bonus-2",
    badge: "BRINDE",
    title: "MÃE DE SUCESSO",
    description: "Chegou do trabalho cansada e não consegue brincar com seu filho? Vamos te mostrar como você consegue fazer a criação do seu pequeno ser especial, mesmo nos dias mais corridos.",
    image: "https://images.unsplash.com/photo-1543807535-eceef0bc6599?auto=format&fit=crop&w=500&q=80" // loving mother and child
  },
  {
    id: "bonus-3",
    badge: "BRINDE",
    title: "MATEMÁTICA LÚDICA",
    description: "Exercício muito legal pro seu filho aprender sobre os números e fazer contas de forma fácil com materiais que você tem em casa.",
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=500&q=80" // abacus/numbers/fun math
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
