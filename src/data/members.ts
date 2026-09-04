export interface Member {
  id: string;
  image: string;
  stageName: string;
  birthName: string;
  role: string;
  order: number;
  tagline: string;
  intro: string;
  color: string;
  worldName: string;
  worldElements: string[];
  worldAction: string;
  easterEgg: string;
}

export const members: Member[] = [
  {
    id: 'rm',
    stageName: 'RM',
    image: '/images/members/rm.jpg',
    birthName: 'Kim Nam-joon',
    role: 'Leader · Main Rapper',
    order: 1,
    tagline: 'The Architect of Words',
    intro:
      'The thinker-leader who translated BTS to the world. RM writes with philosophical weight, anchoring the group\'s vision in honesty and curiosity.',
    color: '#A77BFF',
    worldName: 'THE NAMJOONING SPACE',
    worldElements: ['Museum', 'Library', 'Nature'],
    worldAction: 'EXPLORE',
    easterEgg: 'A tiny crab hides among the shelves — a nod to RM\'s beloved "crab" moment.',
  },
  {
    id: 'jin',
    stageName: 'Jin',
    image: '/images/members/jin.jpg',
    birthName: 'Kim Seok-jin',
    role: 'Vocalist · Visual',
    order: 2,
    tagline: 'The Steady Heart',
    intro:
      'The eldest, whose warmth and humor hold the group together. Jin\'s voice carries a gentle, soaring clarity that grounds every stage.',
    color: '#C9A6E8',
    worldName: 'WORLDWIDE HANDSOME\'S SPACE',
    worldElements: ['Kitchen', 'Mirror'],
    worldAction: 'INDULGE',
    easterEgg: 'A mirror reflects "Worldwide Handsome" — Jin\'s iconic self-confidence.',
  },
  {
    id: 'suga',
    stageName: 'SUGA',
    image: '/images/members/suga.jpg',
    birthName: 'Min Yoon-gi',
    role: 'Lead Rapper · Producer',
    order: 3,
    tagline: 'The Midnight Maker',
    intro:
      'Relentless and raw, SUGA turns insomnia into melody. As producer and rapper, he builds the sonic backbone of the universe.',
    color: '#8A6BD4',
    worldName: 'THE STUDIO',
    worldElements: ['Music Production', 'Studio'],
    worldAction: 'COMPOSE',
    easterEgg: 'A hidden cat naps on the studio couch — Yoongi\'s love for cats made visible.',
  },
  {
    id: 'j-hope',
    stageName: 'j-hope',
    image: '/images/members/jhope.jpg',
    birthName: 'Jung Ho-seok',
    role: 'Main Dancer · Rapper',
    order: 4,
    tagline: 'The Sunlight Engine',
    intro:
      'The group\'s radiant engine of energy. j-hope\'s precision as a dancer and brightness as a presence light the path forward.',
    color: '#B98CFF',
    worldName: 'SUNSHINE DANCE STUDIO',
    worldElements: ['Sunlight', 'Mirrors', 'Dance Floor'],
    worldAction: 'SHINE',
    easterEgg: 'Sunlight through the window forms the letters H-O-P-E on the dance floor.',
  },
  {
    id: 'jimin',
    stageName: 'Jimin',
    image: '/images/members/jimin.jpg',
    birthName: 'Park Ji-min',
    role: 'Main Vocalist · Dancer',
    order: 5,
    tagline: 'The Tender Spark',
    intro:
      'A voice of delicate, breathtaking fragility. Jimin moves between vulnerability and power, leaving a mark that lingers.',
    color: '#9E7AE0',
    worldName: 'THE PERFORMANCE ROOM',
    worldElements: ['Performance Space', 'Mirrors', 'Flowing Fabric', 'Chairs'],
    worldAction: 'FEEL',
    easterEgg: 'A lone chair stands center stage — "CHAIR DETECTED" — a nod to Jimin\'s iconic chair choreography.',
  },
  {
    id: 'v',
    stageName: 'V',
    image: '/images/members/v.jpg',
    birthName: 'Kim Tae-hyung',
    role: 'Vocalist · Visual',
    order: 6,
    tagline: 'The Velvet Tone',
    intro:
      'A deep, resonant voice that feels like a different era. V brings cinematic mood and quiet magnetism to every frame.',
    color: '#A77BFF',
    worldName: 'PURPLE FILM STUDIO',
    worldElements: ['Vintage Photography', 'Cinema'],
    worldAction: 'SEE + CONNECT',
    easterEgg: 'A photograph on the wall reveals the hidden message "I PURPLE YOU" when viewed closely.',
  },
  {
    id: 'jungkook',
    stageName: 'Jung Kook',
    image: '/images/members/jungkook.jpg',
    birthName: 'Jeon Jung-kook',
    role: 'Main Vocalist · Center',
    order: 7,
    tagline: 'The All-Rounder',
    intro:
      'The youngest, yet seemingly capable of anything. Jung Kook\'s voice, movement, and drive make him the group\'s golden constant.',
    color: '#C9A6E8',
    worldName: 'KOOKIE\'S HANGOUT',
    worldElements: ['Gaming', 'Food', 'Gym / Boxing', 'Karaoke'],
    worldAction: 'PLAY',
    easterEgg: 'A dog bowl labeled "Bam" sits by the gaming setup — a nod to Jungkook\'s Doberman, Bam.',
  },
];
