export const EVENT_NAME    = 'Wound Fest'
export const EVENT_SUBTITLE = 'El Reto'
export const EVENT_FULL_NAME = '2do Congreso Suramericano de Heridas, Ostomía e Incontinencia'
export const EVENT_DATE    = '15 y 16 de Octubre de 2026'
export const EVENT_LOCATION = 'Hotel Cuéllar\'s — San Juan de Pasto, Nariño'
export const EVENT_EMAIL   = 'alucia2374@gmail.com'

export const STATS = [
  { value: '2da',  label: 'Edición' },
  { value: '2',    label: 'Días' },
  { value: '4',    label: 'Modalidades' },
  { value: '✓',    label: 'Certificado' },
]

export const FEATURES = [
  {
    key: 'talleres',
    title: 'TALLERES',
    description: 'Prácticas clínicas dirigidas por expertos en manejo de heridas complejas, ostomía e incontinencia.',
  },
  {
    key: 'ponencias',
    title: 'PONENCIAS',
    description: 'Presentaciones académicas de alto nivel con los últimos avances científicos del área.',
  },
  {
    key: 'muestra',
    title: 'MUESTRA COMERCIAL',
    description: 'Exposición de productos, tecnologías e insumos especializados del sector.',
  },
]

export const SCHEDULE = [
  {
    day: 'Día 1',
    date: '15 de Octubre',
    blocks: [
      {
        period: 'Jornada Mañana — Talleres',
        type: 'talleres',
        rooms: ['Salón 1 - Convatec', 'Salón - Essity'],
        items: [
          {
            time: '8:00 - 9:00',
            label: 'Taller 1',
            talks: [
              'Pasos para una Valoración Integral de la Herida',
              'Importancia de una adecuada Gestión del Exudado',
            ],
          },
          {
            time: '9:00 - 10:00',
            label: 'Taller 2',
            talks: [
              'Papel de las Espumas en la Prevención de Lesiones de Piel',
              'Efectos antimicrobianos del DACC en Heridas Complejas',
            ],
          },
          { time: '10:00 - 10:30', label: 'Refrigerio', shared: 'Refrigerio' },
          {
            time: '10:30 - 11:30',
            label: 'Taller 3',
            talks: [
              'Manejo de Estomas Complicados',
              'Cuando la malnutrición frena la Cicatrización: ¿Estamos llegando a tiempo?',
            ],
          },
          {
            time: '11:30 - 12:00',
            label: 'Concurso "El Reto"',
            talks: ['Primer Finalista', 'Segundo Finalista'],
            highlight: true,
          },
        ],
      },
      {
        period: 'Jornada Tarde',
        type: 'ponencias',
        talks: [
          { time: '2:00 - 2:30', title: 'Apertura Evento Wound Fest', speaker: 'Alba Lucía Torres Hinestroza. Organizadora', highlight: true },
          { time: '2:30 - 3:00', title: 'High Value Care, aplicado a Heridas', speaker: 'Marco Antonio Solarte. Md. Esp. Medicina Interna' },
          { time: '3:00 - 3:30', title: 'Cuando el arte deja huella: riesgo biotóxico, heridas y cicatrices de los tatuajes', speaker: 'Dra. Yalila Ordoñez. Md. Toxicóloga Clínica' },
          { time: '3:30 - 4:00', title: 'Estrategia proactiva de Cicatrización de Heridas', speaker: 'Teresita Perdomo. Enf. TEO' },
          { time: '4:00 - 4:30', title: 'Refrigerio y Muestras Comerciales', speaker: null },
          { time: '4:30 - 5:00', title: 'Lesiones por Adhesivo en Población Pediátrica: más allá de la simple fijación', speaker: 'Sandra Guerrero Gamboa. Dra. Enfermería' },
          { time: '5:00 - 5:30', title: 'Preparar es Sanar: abordaje integral del lecho de la herida desde la primera limpieza', speaker: 'Cesar Cruz Tavera. Enf. Esp. Marketing Farmacéutico' },
          { time: '5:30 - 6:00', title: 'M.O.I.S.T: una herramienta para toma de decisiones en el tratamiento de heridas de difícil cicatrización', speaker: 'Diego Alejandro Pachón. Enf. Esp. Heridas' },
          { time: '6:00 - 6:30', title: 'Acto Cultural', speaker: null, highlight: true },
        ],
      },
    ],
  },
  {
    day: 'Día 2',
    date: '16 de Octubre',
    blocks: [
      {
        period: 'Jornada Mañana',
        type: 'ponencias',
        talks: [
          { time: '8:00 - 8:30', title: 'Ruta del Pie Diabético', speaker: 'William Gonzales. Enf. Esp. Heridas' },
          { time: '8:30 - 9:00', title: 'Avances Tecnológicos en la Evaluación del Pie Diabético', speaker: 'Oswaldo Cantillo. Md. Cirugía General y Heridas' },
          { time: '9:00 - 9:30', title: 'Hablemos de prevención: establecimiento de un programa de prevención de lesiones de piel basado en evidencia científica', speaker: 'David Matiz Vera. Enf. Mag. en Enfermería' },
          { time: '9:30 - 10:00', title: 'De la hipoxia a la reparación: el papel de la oxigenación hiperbárica en heridas de difícil cicatrización', speaker: 'Maribel Patiño Jiménez. Enf. Esp. Mag. Dra. Heridas, Estomas y Quemaduras' },
          { time: '10:00 - 10:30', title: 'Refrigerio y Muestras Comerciales', speaker: null },
          { time: '10:30 - 11:00', title: 'Uso de Termografía y Luminiscencia en Heridas', speaker: 'Irving Darío Meza. Enf. Esp. Heridas y Ostomías' },
          { time: '11:00 - 11:30', title: 'Toma de decisiones clínicas en heridas: buen uso de AMB tópicos', speaker: 'Carol Viviana Serna. Dra. Enfermería' },
          { time: '11:30 - 12:00', title: 'No usar más: la guía AMS frente al desafío de la resistencia antimicrobiana', speaker: 'Vivian Sandoval. Enf. Esp. Heridas y Ostomías' },
        ],
      },
      {
        period: 'Jornada Tarde',
        type: 'ponencias',
        talks: [
          { time: '2:00 - 2:30', title: 'Devolver la dignidad, tejido a tejido: estrategia de éxito en lesiones vulvovaginales complejas con Triticum Vulgare', speaker: 'Berneides Mármol Maestre. Enf. Mag. Educación' },
          { time: '2:30 - 3:00', title: 'La Importancia de cuidar y valorar la piel periostomal', speaker: 'Sandra Patricia Cortéz. Enf. Esp. Heridas y Ostomías' },
          { time: '3:00 - 3:30', title: 'Actualidad de uso de sistema de presión negativa en heridas complejas', speaker: 'Dr. Alejandro Mutis y Dr. Juan Pablo Villota. Mds. Residentes de Cirugía Plástica HUDN' },
          { time: '3:30 - 4:00', title: 'Elegir en el momento adecuado: una opción en la preparación del lecho de la herida', speaker: 'Alba Lucía Torres Hinestroza. Enf. Esp. Heridas y Ostomías' },
          { time: null, title: 'Cierre del Evento', speaker: null, highlight: true },
        ],
      },
    ],
  },
]
