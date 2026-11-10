/* ==========================================================================
   MEGA MOTORS - DADOS DO SITE
   Edite SOMENTE este arquivo para trocar textos, produtos, preços e fotos.
   Tudo que está entre [COLCHETES] é um marcador: troque pelo texto real.
   Cuidado: mantenha as aspas "..." e as vírgulas no fim de cada linha.
   As fotos ficam na pasta "imagens". Basta escrever aqui o nome do arquivo.
   Se a foto não existir, o site mostra um espaço reservado no lugar.
   ========================================================================== */

const DADOS = {

  /* ---------- DADOS DA LOJA ---------- */
  loja: {
    nome: "Mega Motors",
    segmento: "Mobilidade Elétrica",
    frase: "A forma inteligente de se locomover",
    endereco: "Av. São José dos Campos, 2410 - Parque São Martinho, Campinas - SP",
    // Horários de funcionamento (usados no botão "Horários" e em "Onde estamos").
    // "dias": 0=domingo, 1=segunda ... 6=sábado. "abre"/"fecha": hora cheia (9 = 9h; 9.5 = 9h30).
    // Para dia fechado use: { dia: "Domingo", dias: [0], fechado: true }
    horario: [
      { dia: "Segunda a sexta", dias: [1, 2, 3, 4, 5], abre: 9, fecha: 19 },
      { dia: "Sábado",          dias: [6],             abre: 9, fecha: 17 },
      { dia: "Domingo",         dias: [0],             fechado: true }
    ],
    whatsapp: "5519999499216",          // só números, com 55 + DDD
    whatsappExibicao: "(19) 99949-9216",
    email: "redemegamotors@gmail.com",   // e-mail que aparece no perfil do WhatsApp da loja
    instagram: "@megamotors.eletrica",
    instagramUrl: "https://www.instagram.com/megamotors.eletrica/",
    mapsUrl: "https://maps.app.goo.gl/PyJKYSdRAHc4Tt3g7",   // perfil da loja no Google Maps (botão "Como chegar")
    // Botão "Avalie no Google": abre direto a tela de avaliação da loja.
    googleAvaliacaoUrl: "https://search.google.com/local/writereview?placeid=ChIJ1Zq91evPyJQRTAlzcfRIwjw",
    selo: "selo.png",                    // selo redondo (mascote: mulher + cachorro). Pasta imagens.
    logo: "logo.png",                    // logo com fundo transparente (pasta imagens)
    fotoFachada: "fachada.jpg"
  },

  /* ---------- MENSAGENS PRONTAS DO WHATSAPP ---------- */
  mensagens: {
    geral: "Olá! Vim pelo site da Mega Motors e gostaria de mais informações.",
    agendarHorario: "Olá! Gostaria de agendar um horário na Mega Motors. Quais dias e horários estão disponíveis?",
    interesse: "Olá! Tenho interesse no modelo {NOME}. Como posso fazer?",   // {NOME} vira o nome do produto
    testDrive: "Olá! Gostaria de agendar um test drive. Quais modelos e horários estão disponíveis?",
    avaliacao: "Olá! Gostaria de agendar uma avaliação na assistência técnica. Como posso fazer?",
    servico: "Olá! Gostaria de agendar o serviço: {SERVICO} ({PRECO}). Como posso fazer?",   // {SERVICO} e {PRECO} são preenchidos sozinhos
    trabalhe: "Olá! Tenho interesse em trabalhar na Mega Motors. Como posso enviar meu currículo?"
  },

  /* ---------- CATEGORIAS DO CATÁLOGO ---------- */
  // "id" é usado nos produtos (campo "categoria"). Não repita ids.
  categorias: [
    { id: "scooters",  nome: "Scooters" },
    { id: "bikes",     nome: "Bikes elétricas" },
    { id: "patinetes", nome: "Patinetes" },
    { id: "triciclos", nome: "Triciclos" },
    { id: "infantis",  nome: "Infantis" },
    { id: "capacetes", nome: "Capacetes" }
  ],

  /* ---------- PRODUTOS NOVOS ---------- */
  // As fotos das scooters e dos triciclos são reais (Instagram da loja). Os PREÇOS são só exemplo:
  // "precoExemplo: true" mostra o selo "Preço de exemplo". Troque o preço e apague essa marca.
  // Os nomes marcados [MODELO] precisam ser confirmados. "exemplo: true" = item inteiro de exemplo.
  // Para adicionar um produto, copie uma linha { ... } e cole abaixo dela.
  // Campos vazios ("") não aparecem no card (ex.: capacete não tem autonomia).
  produtos: [
    { categoria: "scooters",  nome: "Bolin ONE",                    preco: "R$ 8.000", potencia: "[POTÊNCIA]", autonomia: "[AUTONOMIA]", foto: "scooter-1.jpg", precoExemplo: true },
    { categoria: "scooters",  nome: "Scooter pêssego [MODELO]",     preco: "R$ 6.000", potencia: "[POTÊNCIA]", autonomia: "[AUTONOMIA]", foto: "scooter-2.jpg", precoExemplo: true },
    { categoria: "scooters",  nome: "Bolin prata e verde [MODELO]", preco: "R$ 7.500", potencia: "[POTÊNCIA]", autonomia: "[AUTONOMIA]", foto: "scooter-3.jpg", precoExemplo: true },
    { categoria: "scooters",  nome: "Bolin preta e verde [MODELO]", preco: "R$ 7.800", potencia: "[POTÊNCIA]", autonomia: "[AUTONOMIA]", foto: "scooter-4.jpg", precoExemplo: true },
    { categoria: "scooters",  nome: "OEK vermelha [MODELO]",        preco: "R$ 9.000", potencia: "[POTÊNCIA]", autonomia: "[AUTONOMIA]", foto: "scooter-5.jpg", precoExemplo: true },
    { categoria: "scooters",  nome: "H.Way preta e verde [MODELO]", preco: "R$ 6.500", potencia: "[POTÊNCIA]", autonomia: "[AUTONOMIA]", foto: "scooter-6.jpg", precoExemplo: true },
    { categoria: "scooters",  nome: "Scooter branca [MODELO]",      preco: "R$ 6.800", potencia: "[POTÊNCIA]", autonomia: "[AUTONOMIA]", foto: "scooter-7.jpg", precoExemplo: true },
    { categoria: "triciclos", nome: "Triciclo Letto",               preco: "R$ 9.500", potencia: "[POTÊNCIA]", autonomia: "[AUTONOMIA]", foto: "triciclo-1.jpg", precoExemplo: true },
    { categoria: "triciclos", nome: "Triciclo Luck",                preco: "R$ 9.000", potencia: "[POTÊNCIA]", autonomia: "[AUTONOMIA]", foto: "triciclo-2.jpg", precoExemplo: true },
    { categoria: "bikes",     nome: "[MODELO BIKE]",      preco: "R$ 4.500", potencia: "[POTÊNCIA]", autonomia: "[AUTONOMIA]", foto: "bike-1.jpg", exemplo: true },
    { categoria: "patinetes", nome: "[MODELO PATINETE]",  preco: "R$ 2.800", potencia: "[POTÊNCIA]", autonomia: "[AUTONOMIA]", foto: "patinete-1.jpg", exemplo: true },
    { categoria: "infantis",  nome: "[MODELO INFANTIL]",  preco: "R$ 1.800", potencia: "[POTÊNCIA]", autonomia: "[AUTONOMIA]", foto: "infantil-1.jpg", exemplo: true },
    { categoria: "capacetes", nome: "[MODELO CAPACETE]",  preco: "R$ 250",   potencia: "", autonomia: "", foto: "capacete-1.jpg", exemplo: true }
  ],

  /* ---------- SEMINOVOS E CONSIGNADOS ---------- */
  // "condicao": escreva "Seminovo" ou "Consignado" (aparece como selo no card). Preços de exemplo.
  seminovos: [
    { condicao: "Seminovo",   nome: "[MODELO SEMINOVO 1]",   preco: "R$ 5.500", potencia: "[POTÊNCIA]", autonomia: "[AUTONOMIA]", foto: "seminovo-1.jpg", exemplo: true },
    { condicao: "Consignado", nome: "[MODELO CONSIGNADO 1]", preco: "R$ 4.200", potencia: "[POTÊNCIA]", autonomia: "[AUTONOMIA]", foto: "seminovo-2.jpg", exemplo: true },
    { condicao: "Seminovo",   nome: "[MODELO SEMINOVO 2]",   preco: "R$ 3.800", potencia: "[POTÊNCIA]", autonomia: "[AUTONOMIA]", foto: "seminovo-3.jpg", exemplo: true }
  ],

  /* ---------- ASSISTÊNCIA TÉCNICA ---------- */
  assistencia: {
    texto: "Atendemos também outras marcas.",
    titulo: "Serviços (exemplo)",      // aparece acima da tabela; tire o "(exemplo)" quando os preços forem reais
    // "nota" é opcional e aparece em letra pequena embaixo do serviço.
    servicos: [
      { servico: "Avaliação técnica",         preco: "R$ 80" },
      { servico: "Troca de acelerador",       preco: "R$ 150", nota: "dependendo da peça" },
      { servico: "Troca de pastilha de freio", preco: "R$ 120", nota: "dependendo da peça" },
      { servico: "Troca de disco de freio",   preco: "R$ 200", nota: "dependendo da peça" },
      { servico: "Troca de pneu ou câmara",   preco: "R$ 100", nota: "dependendo da peça" },
      { servico: "Revisão geral",             preco: "R$ 180" },
      { servico: "Reparo no carregador",      preco: "R$ 90",  nota: "dependendo da peça" }
    ],
    observacao: "Valores de exemplo, apenas para a prévia. O preço final depende do modelo e das peças."
  },

  /* ---------- VÍDEOS DE MANUTENÇÃO ---------- */
  // Enquanto a lista "videos" estiver vazia, a seção mostra "Em breve".
  // Para publicar vídeos, adicione linhas (use uma das duas formas por vídeo):
  //   { titulo: "Troca de pastilha", link: "https://www.instagram.com/reel/XXXXXXXX/" }   // post/reel do Instagram
  //   { titulo: "Troca de pastilha", arquivo: "pastilha.mp4" }                          // arquivo na pasta "videos"
  videosEmBreve: "Em breve: vídeos de manutenção e dicas para cuidar da sua moto elétrica.",
  videos: [],

  /* ---------- SOBRE NÓS ---------- */
  sobre: {
    texto: [
      "A Mega Motors é uma loja de mobilidade elétrica em Campinas - SP. Trabalhamos com scooters, bikes elétricas, patinetes, triciclos, modelos infantis e capacetes, e temos assistência técnica para várias marcas.",
      "[TEXTO SOBRE A LOJA: história, tempo de mercado, diferenciais]"
    ],
    fotos: [
      { arquivo: "loja-1.jpg",   legenda: "Nossa loja" },
      { arquivo: "loja-2.jpg",   legenda: "Nossa loja" },
      { arquivo: "loja-3.jpg",   legenda: "Nossa loja" },
      { arquivo: "equipe-1.jpg", legenda: "Nossa equipe" },
      { arquivo: "equipe-2.jpg", legenda: "Nossa equipe" },
      { arquivo: "equipe-3.jpg", legenda: "Nossa equipe" }
    ]
  },

  /* ---------- BENEFÍCIOS ---------- */
  beneficios: [
    { icone: "💰", titulo: "Economia",       texto: "Gaste menos para se locomover no dia a dia. [DETALHE]" },
    { icone: "⚡", titulo: "Praticidade",    texto: "Mais agilidade no trânsito e facilidade para estacionar. [DETALHE]" },
    { icone: "🔌", titulo: "Sem combustível", texto: "Recarregue na tomada, sem parar no posto. [DETALHE]" }
  ],

  /* ---------- FEEDBACKS DE CLIENTES ---------- */
  feedbacks: {
    titulo: "Avaliações de clientes",
    texto: "Prezamos pela sua felicidade e pela sua satisfação com o nosso produto. Veja alguns clientes que já rodam com a Mega Motors.",
    // Carrossel automático: vídeos e fotos de clientes passam sozinhos (pausa quando alguém toca ou dá play).
    // tipo "video": "arquivo" fica na pasta "videos"; "capa" é a imagem antes do play (opcional).
    // tipo "foto": "arquivo" fica na pasta "imagens". Para adicionar, copie uma linha.
    itens: [
      { tipo: "video", titulo: "Cliente 1",        arquivo: "cliente-1.mp4", capa: "cliente-1-capa.jpg" },
      { tipo: "foto",  titulo: "Mais uma família feliz", arquivo: "cliente-1.jpg" },
      { tipo: "video", titulo: "Cliente 2",        arquivo: "cliente-2.mp4", capa: "cliente-2-capa.jpg" },
      { tipo: "video", titulo: "Ficha aprovada!",  arquivo: "cliente-5.mp4", capa: "cliente-5-capa.jpg" },
      { tipo: "video", titulo: "Cliente 3",        arquivo: "cliente-3.mp4", capa: "cliente-3-capa.jpg" },
      { tipo: "video", titulo: "Cliente 4",        arquivo: "cliente-4.mp4", capa: "cliente-4-capa.jpg" }
    ]
  },

  /* ---------- PERGUNTAS FREQUENTES (botões de ajuda, sem IA) ---------- */
  // O visitante toca na pergunta e a resposta aparece. Para tirar uma pergunta, apague a linha.
  // As respostas marcadas com "PROVISÓRIA" são genéricas: troque pelas informações reais da loja.
  perguntas: [
    { pergunta: "Qual o horário de funcionamento?",
      resposta: "Atendemos de segunda a sexta, das 9h às 19h, e aos sábados, das 9h às 17h." },
    { pergunta: "Onde fica a loja?",
      resposta: "Av. São José dos Campos, 2410 - Parque São Martinho, Campinas - SP. Na seção “Onde estamos” você vê o mapa." },
    { pergunta: "Vocês consertam outras marcas?",
      resposta: "Sim! Nossa assistência técnica atende também outras marcas. Toque em “Agendar avaliação” na seção Assistência técnica." },
    { pergunta: "Vocês têm seminovos ou consignados?",
      resposta: "Sim, temos seminovos e consignados. Veja a seção “Seminovos e consignados” ou pergunte pelo WhatsApp." },
    { pergunta: "Como agendar um test drive?",
      resposta: "É só tocar em “Agendar test drive”. Abrirá o WhatsApp com a mensagem pronta e nossa equipe confirma o horário." },
    { pergunta: "Qual a autonomia?",
      resposta: "PROVISÓRIA: A autonomia varia conforme o modelo. Chame no WhatsApp e informe qual modelo você quer saber." },
    { pergunta: "Quanto tempo leva para carregar?",
      resposta: "PROVISÓRIA: O tempo de carga varia conforme o modelo e a bateria. Chame no WhatsApp e informe o modelo." },
    { pergunta: "Qual a garantia?",
      resposta: "PROVISÓRIA: A garantia depende do modelo. Chame no WhatsApp para saber as condições do veículo que você quer." },
    { pergunta: "Quais as formas de pagamento?",
      resposta: "Consulte as condições de pagamento pelo WhatsApp e encontre a melhor opção para você." },
    { pergunta: "Precisa de habilitação e emplacamento?",
      resposta: "PROVISÓRIA: Depende do tipo de veículo. Nossa equipe orienta você sobre o modelo que escolher. Chame no WhatsApp." },
    { pergunta: "Como falar com o responsável (negócios)?",
      resposta: "Para negócios e parcerias, fale com a gente pelo WhatsApp que encaminhamos para o responsável." }
  ]
};
