export interface Era {
  id: string;
  year: string;
  title: string;
  subtitle: string;
  theme: string;
  description: string;
  tracks: string[];
  artwork: string;
}

export const eras: Era[] = [
  {
    id: 'school-trilogy',
    year: '2013–2014',
    title: 'School / Rookie Era',
    subtitle: '2 Cool 4 Skool · O!RUL8,2? · Skool Luv Affair · Dark & Wild',
    theme: 'Teenage Rebellion · Societal Pressure · Early Hip-Hop',
    description:
      'BTS emerged with a raw, youthful voice confronting teenage pressure, rebellion, ambition, and the expectations placed on a generation growing up in a competitive society.',
    tracks: ['No More Dream', 'Boy In Luv', 'Danger','N.O'],
    artwork: '/images/eras/school-trilogy.jpg',
  },
  {
  id: 'youth-trilogy',
  year: '2015–2016',
  title: 'Youth (HYYH) Era',
  subtitle: 'The Most Beautiful Moment in Life · Pt. 1 · Pt. 2 · Young Forever',
  theme: 'Beauty · Pain · Growing Up · Vulnerability',
  description:
    'BTS turned toward the bittersweet reality of youth, capturing the beauty of fleeting moments alongside uncertainty, vulnerability, friendship, and the growing pains of finding your way.',
  tracks: ['I NEED U', 'Run', 'Burning Up(Fire'],
  artwork: '/images/eras/youth-trilogy.jpg',
},
{
  id: 'wings',
  year: '2016–2017',
  title: 'Wings Era',
  subtitle: 'WINGS · You Never Walk Alone',
  theme: 'Temptation · Loss of Innocence · Internal Struggles',
  description:
    'BTS explored the conflict between youth and adulthood through temptation, guilt, loss, and the struggle to understand oneself, ultimately turning individual journeys toward a message of solidarity.',
  tracks: ['Blood Sweat & Tears', 'Spring Day', 'Not Today'],
  artwork: '/images/eras/wings.jpg',
},
{
  id: 'love-yourself',
  year: '2017–2019',
  title: 'Love Yourself Era',
  subtitle: 'Love Yourself: Her · Tear · Answer',
  theme: 'Self-Love · Identity · Masks · Relationships',
  description:
    'BTS explored the complicated journey of love and identity, revealing the masks worn in relationships and ultimately turning inward toward the message that true love begins with learning to love yourself.',
  tracks: ['DNA', 'Fake Love', 'Idol'],
  artwork: '/images/eras/love-yourself.jpg',
},
  {
  id: 'map-of-the-soul',
  year: '2019–2020',
  title: 'Map of the Soul Era',
  subtitle: 'Map of the Soul: Persona · 7',
  theme: 'Persona · Shadow · Identity · Reflection',
  description:
    'Drawing from Jungian psychology, BTS explored the different faces they present to the world, the shadows they carry within, and the process of confronting and understanding every part of the self.',
  tracks: ['Boy With Luv', 'ON', 'Black Swan'],
  artwork: '/images/eras/map-of-the-soul.jpg',
},
{
  id: 'be',
  year: '2020–2021',
  title: 'BE Era',
  subtitle: 'BE',
  theme: 'Isolation · Comfort · Healing · Connection',
  description:
    'Created during a world brought to a standstill, BTS captured the uncertainty and isolation of the pandemic while offering comfort, healing, hope, and a reminder that connection could survive even through distance.',
  tracks: ['Dynamite', 'Life Goes On', 'Butter'],
  artwork: '/images/eras/be.jpg',
},
{
  id: 'proof',
  year: '2022',
  title: 'PROOF',
  subtitle: 'PROOF · Anthology',
  theme: 'Memory · Legacy · Reflection',
  description:
    'PROOF brought together BTS’s past, present, and future, reflecting on the journey they had taken so far while preserving the memories, music, and moments that shaped their story.',
  tracks: ['Yet To Come', 'Run BTS', 'For Youth'],
  artwork: '/images/eras/proof.jpg',
},
{
  id: 'arirang',
  year: '2026–NOW',
  title: 'Arirang Era',
  subtitle: 'ARIRANG · A New Chapter',
  theme: 'Cultural Pride · Resilience · Maturity · Reunion',
  description:
    'A new chapter following BTS’s return as a complete group, bringing together cultural identity, resilience, maturity, and a renewed sense of togetherness as they begin the next chapter of their journey.',
  tracks: ['NORMAL', 'SWIM', 'NO.29'],
  artwork: '/images/eras/arirang.jpg',
},
];