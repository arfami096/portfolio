// ВНИМАНИЕ: это заглушка. Замените массив на набор данных из задания
// (поля img и category должны остаться теми же).
const img = (seed, h) => `https://picsum.photos/seed/${seed}/400/${h}`;

export default [
  { id: 1, img: img('p1', 300), category: 'Business Cards' },
  { id: 2, img: img('p2', 220), category: 'Websites' },
  { id: 3, img: img('p3', 380), category: 'Flayers' },
  { id: 4, img: img('p4', 260), category: 'Business Cards' },
  { id: 5, img: img('p5', 320), category: 'Websites' },
  { id: 6, img: img('p6', 240), category: 'Flayers' },
  { id: 7, img: img('p7', 360), category: 'Business Cards' },
  { id: 8, img: img('p8', 280), category: 'Websites' },
  { id: 9, img: img('p9', 340), category: 'Flayers' },
  { id: 10, img: img('p10', 250), category: 'Business Cards' },
  { id: 11, img: img('p11', 300), category: 'Websites' },
  { id: 12, img: img('p12', 220), category: 'Flayers' },
];
