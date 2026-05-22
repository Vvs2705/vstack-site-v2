export interface FiscWise3DSpec {
  title: string
  description: string
  scenes: Scene[]
  interactions: Interaction[]
  animations: Animation[]
}

export interface Scene {
  id: string
  name: string
  description: string
  viewpoint: {
    cameraPosition: [number, number, number]
    lookAt: [number, number, number]
    fov: number
  }
  elements: Element[]
}

export interface Element {
  id: string
  type: 'card' | 'chart' | 'indicator' | 'button' | 'panel' | 'text'
  label: string
  position: [number, number, number]
  rotation: [number, number, number]
  scale: [number, number, number]
  material?: {
    color: string
    metalness?: number
    roughness?: number
    opacity?: number
  }
  content?: string
}

export interface Interaction {
  id: string
  trigger: 'hover' | 'click' | 'scroll'
  target: string
  action: 'rotate' | 'scale' | 'translate' | 'highlight' | 'animate'
  duration: number
  easing: string
}

export interface Animation {
  id: string
  name: string
  target: string
  duration: number
  loop: boolean
  keyframes: Keyframe[]
}

export interface Keyframe {
  time: number
  position?: [number, number, number]
  rotation?: [number, number, number]
  scale?: [number, number, number]
  opacity?: number
}

export const fiscwise3DSpec: FiscWise3DSpec = {
  title: 'FiscWise 3D Dashboard',
  description: 'Interactive 3D visualization of FiscWise financial dashboard in real-time operation',

  scenes: [
    {
      id: 'scene_main_dashboard',
      name: 'Main Dashboard View',
      description: 'Overview of FiscWise dashboard with live metrics and reconciliation status',
      viewpoint: {
        cameraPosition: [8, 5, 8],
        lookAt: [0, 0, 0],
        fov: 45,
      },
      elements: [
        {
          id: 'panel_main',
          type: 'panel',
          label: 'Main Dashboard Panel',
          position: [0, 0, 0],
          rotation: [0, 0, 0],
          scale: [1, 1, 1],
          material: {
            color: '#121b2c',
            metalness: 0.1,
            roughness: 0.8,
            opacity: 1,
          },
        },
        {
          id: 'card_entradas',
          type: 'card',
          label: 'Inflows Card (R$ 84,2k)',
          position: [-2.5, 2, 0],
          rotation: [0, 0.2, 0],
          scale: [1.8, 0.8, 0.1],
          material: {
            color: '#22c55e',
            metalness: 0.3,
            roughness: 0.6,
          },
          content: 'Entradas\nR$ 84,2k',
        },
        {
          id: 'card_saidas',
          type: 'card',
          label: 'Outflows Card (R$ 31,4k)',
          position: [2.5, 2, 0],
          rotation: [0, -0.2, 0],
          scale: [1.8, 0.8, 0.1],
          material: {
            color: '#00b4d8',
            metalness: 0.3,
            roughness: 0.6,
          },
          content: 'Saídas\nR$ 31,4k',
        },
        {
          id: 'card_reconciliacao',
          type: 'card',
          label: 'Reconciliation Progress',
          position: [0, 0.5, 0],
          rotation: [0, 0, 0],
          scale: [4, 0.6, 0.1],
          material: {
            color: '#080e1a',
            metalness: 0.1,
            roughness: 0.8,
            opacity: 0.9,
          },
          content: 'Conciliação automática: 247 / 250',
        },
        {
          id: 'chart_weekly_revenue',
          type: 'chart',
          label: 'Weekly Revenue Bar Chart',
          position: [0, -1.5, 0],
          rotation: [0, 0, 0],
          scale: [3.5, 2, 0.2],
          material: {
            color: '#00b4d8',
            metalness: 0.2,
            roughness: 0.7,
            opacity: 0.85,
          },
          content: 'Receita semanal - últimos 7 ciclos',
        },
        {
          id: 'indicator_open_banking',
          type: 'indicator',
          label: 'Open Banking Connected',
          position: [-1.5, -3, 0],
          rotation: [0, 0, 0],
          scale: [0.3, 0.3, 0.3],
          material: {
            color: '#00d4ff',
            metalness: 0.4,
            roughness: 0.5,
          },
          content: '✓',
        },
        {
          id: 'indicator_alerts',
          type: 'indicator',
          label: 'Alerts Active',
          position: [0, -3, 0],
          rotation: [0, 0, 0],
          scale: [0.3, 0.3, 0.3],
          material: {
            color: '#00d4ff',
            metalness: 0.4,
            roughness: 0.5,
          },
          content: '✓',
        },
        {
          id: 'indicator_reports',
          type: 'indicator',
          label: 'Reports Ready',
          position: [1.5, -3, 0],
          rotation: [0, 0, 0],
          scale: [0.3, 0.3, 0.3],
          material: {
            color: '#00d4ff',
            metalness: 0.4,
            roughness: 0.5,
          },
          content: '✓',
        },
      ],
    },
    {
      id: 'scene_reconciliation_detail',
      name: 'Reconciliation Detail',
      description: 'Close-up view of reconciliation process with transaction flow',
      viewpoint: {
        cameraPosition: [5, 3, 5],
        lookAt: [0, 0, 0],
        fov: 50,
      },
      elements: [
        {
          id: 'panel_reconciliation_detail',
          type: 'panel',
          label: 'Reconciliation Detail Panel',
          position: [0, 0, 0],
          rotation: [0, 0, 0],
          scale: [1, 1, 1],
          material: {
            color: '#121b2c',
            metalness: 0.1,
            roughness: 0.8,
          },
        },
        {
          id: 'progress_bar_animation',
          type: 'indicator',
          label: 'Progress Bar (98%)',
          position: [0, 1, 0],
          rotation: [0, 0, 0],
          scale: [3, 0.3, 0.1],
          material: {
            color: '#00b4d8',
            metalness: 0.3,
            roughness: 0.6,
          },
          content: '247/250 transações',
        },
        {
          id: 'transaction_flow',
          type: 'chart',
          label: 'Transaction Flow Visualization',
          position: [0, -1, 0],
          rotation: [0, 0, 0],
          scale: [3, 2, 0.2],
          material: {
            color: '#00d4ff',
            metalness: 0.2,
            roughness: 0.7,
            opacity: 0.8,
          },
          content: 'Fluxo de transações em tempo real',
        },
      ],
    },
  ],

  interactions: [
    {
      id: 'hover_entradas_card',
      trigger: 'hover',
      target: 'card_entradas',
      action: 'scale',
      duration: 300,
      easing: 'easeInOutQuad',
    },
    {
      id: 'hover_saidas_card',
      trigger: 'hover',
      target: 'card_saidas',
      action: 'scale',
      duration: 300,
      easing: 'easeInOutQuad',
    },
    {
      id: 'click_reconciliation',
      trigger: 'click',
      target: 'card_reconciliacao',
      action: 'rotate',
      duration: 600,
      easing: 'easeInOutCubic',
    },
    {
      id: 'scroll_chart_reveal',
      trigger: 'scroll',
      target: 'chart_weekly_revenue',
      action: 'animate',
      duration: 800,
      easing: 'easeOutElastic',
    },
  ],

  animations: [
    {
      id: 'anim_dashboard_rotate',
      name: 'Dashboard Idle Rotation',
      target: 'scene_main_dashboard',
      duration: 12000,
      loop: true,
      keyframes: [
        {
          time: 0,
          rotation: [0, 0, 0],
        },
        {
          time: 6000,
          rotation: [0, Math.PI, 0],
        },
        {
          time: 12000,
          rotation: [0, Math.PI * 2, 0],
        },
      ],
    },
    {
      id: 'anim_reconciliation_pulse',
      name: 'Reconciliation Progress Pulse',
      target: 'card_reconciliacao',
      duration: 2000,
      loop: true,
      keyframes: [
        {
          time: 0,
          opacity: 1,
          scale: [4, 0.6, 0.1],
        },
        {
          time: 1000,
          opacity: 0.7,
          scale: [4.1, 0.65, 0.1],
        },
        {
          time: 2000,
          opacity: 1,
          scale: [4, 0.6, 0.1],
        },
      ],
    },
    {
      id: 'anim_chart_bars_growth',
      name: 'Chart Bars Growth',
      target: 'chart_weekly_revenue',
      duration: 3000,
      loop: false,
      keyframes: [
        {
          time: 0,
          scale: [3.5, 0, 0.2],
        },
        {
          time: 1500,
          scale: [3.5, 1.5, 0.2],
        },
        {
          time: 3000,
          scale: [3.5, 2, 0.2],
        },
      ],
    },
    {
      id: 'anim_indicators_fade_in',
      name: 'Indicators Cascade Fade In',
      target: 'indicator_open_banking',
      duration: 1500,
      loop: false,
      keyframes: [
        {
          time: 0,
          opacity: 0,
          scale: [0, 0, 0],
        },
        {
          time: 750,
          opacity: 0.5,
          scale: [0.15, 0.15, 0.15],
        },
        {
          time: 1500,
          opacity: 1,
          scale: [0.3, 0.3, 0.3],
        },
      ],
    },
  ],
}

export const fiscwise3DSceneDescriptions = {
  intro: 'FiscWise transforma operações financeiras em uma série de fluxos de dados visualizados em 3D. Cada card, cada gráfico, cada indicador representa uma métrica em tempo real.',
  metrics:
    'Os dois cards de entrada e saída flutuam com dados vivos: R$ 84,2k em receitas, R$ 31,4k em despesas. A barra de reconciliação mostra 247 transações automaticamente conciliadas de 250.',
  animation:
    'O painel gira suavemente enquanto você navega. Os gráficos crescem com uma animação elástica. Os indicadores pulsam, sinalizando que Open Banking está conectado, alertas estão ativos e relatórios estão prontos.',
  interaction:
    'Passe o mouse sobre qualquer card e ele cresce 10% com uma transição suave. Clique na barra de conciliação e ela gira em torno de seu eixo, revelando mais detalhes. Scroll do mouse anima os gráficos semanais com efeito bounce.',
  implementation:
    'Construído em Spline com WebGL para máxima performance. Integra-se ao Next.js via iframe ou embedded viewer. Responsivo em mobile com fallback para imagem estática.',
}
