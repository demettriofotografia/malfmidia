
import { VideoWork, FAQItem, GalleryImage } from './types';

export const VIDEO_WORKS: VideoWork[] = [
  {
    id: '1',
    title: 'Comercial Tech 2024',
    category: 'Publicidade',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    thumbnail: 'https://picsum.photos/seed/v1/800/450',
  },
  {
    id: '2',
    title: 'Lançamento Fashion',
    category: 'Moda',
    videoUrl: 'https://www.w3schools.com/html/movie.mp4',
    thumbnail: 'https://picsum.photos/seed/v2/800/450',
  },
  {
    id: '3',
    title: 'Documentário Urbano',
    category: 'Documentário',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    thumbnail: 'https://picsum.photos/seed/v3/800/450',
  },
  {
    id: '4',
    title: 'Evento Automobilístico',
    category: 'Eventos',
    videoUrl: 'https://www.w3schools.com/html/movie.mp4',
    thumbnail: 'https://picsum.photos/seed/v4/800/450',
  }
];

export interface GalleryItem extends GalleryImage {
  videoUrl?: string;
}

export const BEHIND_THE_SCENES: GalleryItem[] = [
  { 
    id: 'b1', 
    url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=600', 
    alt: 'Produção Premium MALF MIDIA',
    // Referência ao vídeo carregado pelo usuário no ambiente
    videoUrl: 'video.mp4'
  },
  { 
    id: 'b2', 
    url: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=600', 
    alt: 'Ajustando iluminação',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-professional-photographer-taking-pictures-of-a-model-34537-large.mp4'
  },
  { 
    id: 'b3', 
    url: 'https://images.unsplash.com/photo-1551503766-ac63dfa6401c?auto=format&fit=crop&q=80&w=600', 
    alt: 'Câmera RED em setup',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-videographer-filming-a-woman-in-a-studio-34542-large.mp4'
  },
  { 
    id: 'b4', 
    url: 'https://images.unsplash.com/photo-1512314889357-e157c22f938d?auto=format&fit=crop&q=80&w=600', 
    alt: 'Drone decolando',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-filmmaker-with-a-camera-on-a-tripod-34548-large.mp4'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'Qual o tempo médio de entrega de um projeto?',
    answer: 'Depende da complexidade, mas geralmente entre 7 a 20 dias úteis para vídeos comerciais.'
  },
  {
    question: 'Vocês atendem em todo o Brasil?',
    answer: 'Sim! Nossa sede é fixa, mas nossa equipe é móvel e preparada para produções em qualquer localidade.'
  },
  {
    question: 'Quais equipamentos vocês utilizam?',
    answer: 'Trabalhamos com o que há de mais moderno no cinema digital, incluindo câmeras 4K/6K, drones homologados e sistemas de iluminação profissional.'
  },
  {
    question: 'Oferecem serviços de edição para materiais já gravados?',
    answer: 'Com certeza. Temos uma ilha de pós-produção dedicada para color grading, sound design e montagem.'
  }
];
