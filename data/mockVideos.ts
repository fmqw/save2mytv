export type VideoStatus = 'nuevo' | 'empezado' | 'visto' | 'enviado_al_tv'

export interface SavedVideo {
  id: string
  title: string
  source: string
  duration: string
  status: VideoStatus
  createdAt: string
  thumbnailLabel: string
  videoUrl: string
  reminded: boolean
}

export const mockVideos: SavedVideo[] = [
  {
    id: '1',
    title: 'Cómo organizar tu semana en 20 minutos (método simple y realista)',
    source: 'Productividad TV',
    duration: '20:18',
    status: 'nuevo',
    createdAt: '2026-01-13T09:12:00.000Z',
    thumbnailLabel: 'Plan semanal',
    videoUrl: 'https://example.com/video/1',
    reminded: false
  },
  {
    id: '2',
    title: 'Tour completo: setup minimalista para home office',
    source: 'Design Channel',
    duration: '12:04',
    status: 'empezado',
    createdAt: '2026-01-11T17:20:00.000Z',
    thumbnailLabel: 'Home office',
    videoUrl: 'https://example.com/video/2',
    reminded: true
  },
  {
    id: '3',
    title: 'Aprende Tailwind CSS desde cero en menos de una hora',
    source: 'Frontend Labs',
    duration: '58:49',
    status: 'visto',
    createdAt: '2026-01-09T12:00:00.000Z',
    thumbnailLabel: 'Tailwind',
    videoUrl: 'https://example.com/video/3',
    reminded: false
  },
  {
    id: '4',
    title: 'Documental corto: ciudades inteligentes y movilidad urbana',
    source: 'Mundo Tech',
    duration: '26:33',
    status: 'enviado_al_tv',
    createdAt: '2026-01-12T20:02:00.000Z',
    thumbnailLabel: 'Smart cities',
    videoUrl: 'https://example.com/video/4',
    reminded: false
  },
  {
    id: '5',
    title: 'Receta rápida: cena saludable en 15 minutos',
    source: 'Cocina Simple',
    duration: '15:00',
    status: 'nuevo',
    createdAt: '2026-01-10T07:58:00.000Z',
    thumbnailLabel: 'Cena fit',
    videoUrl: 'https://example.com/video/5',
    reminded: true
  },
  {
    id: '6',
    title: 'Guía para mejorar audio en videollamadas sin gastar de más',
    source: 'Tech para todos',
    duration: '18:45',
    status: 'empezado',
    createdAt: '2026-01-08T14:30:00.000Z',
    thumbnailLabel: 'Audio pro',
    videoUrl: 'https://example.com/video/6',
    reminded: false
  }
]
