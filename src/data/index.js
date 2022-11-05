import IMAGES from '../assets/Icons';

const DATA = [
  // storess
  { id: 1, layer: 'stores', name: 'bank', src: IMAGES.bank, size: 36, coordinates: { x: 392, y: 179 }, visible: true },
  { id: 2, layer: 'stores', name: 'church', src: IMAGES.church, size: 36, coordinates: { x: 692, y: 825 }, visible: true },
  { id: 3, layer: 'stores', name: 'hardware', src: IMAGES.hardware, size: 36, coordinates: { x: 93, y: 702 }, visible: true },
  { id: 4, layer: 'stores', name: 'carpentry', src: IMAGES.carpentry, size: 36, coordinates: { x: 312, y: 312 }, visible: true },
  { id: 5, layer: 'stores', name: 'small calibre', src: IMAGES.smallCalibre, size: 36, coordinates: { x: 587, y: 711 }, visible: true },
  { id: 6, layer: 'stores', name: 'large calibre', src: IMAGES.largeCalibre, size: 36, coordinates: { x: 572, y: 345 }, visible: true },
  { id: 7, layer: 'stores', name: 'furniture', src: IMAGES.furniture, size: 36, coordinates: { x: 626, y: 884 }, visible: true },
  { id: 8, layer: 'stores', name: 'painting', src: IMAGES.art, size: 36, coordinates: { x: 608, y: 445 }, visible: true },
  { id: 9, layer: 'stores', name: 'guideshop', src: IMAGES.guideshop, size: 36, coordinates: { x: 111, y: 389 }, visible: true },
  { id: 10, layer: 'stores', name: 'pottery', src: IMAGES.pottery, size: 36, coordinates: { x: 315, y: 89 }, visible: true },
  { id: 11, layer: 'stores', name: 'fertilizer', src: IMAGES.fertilizer, size: 36, coordinates: { x: 387, y: 127 }, visible: true },
  { id: 12, layer: 'stores', name: 'infirmary', src: IMAGES.infirmary, size: 36, coordinates: { x: 255, y: 626 }, visible: true },
  { id: 13, layer: 'stores', name: 'pharmacy', src: IMAGES.pharmacy, size: 36, coordinates: { x: 271, y: 452 }, visible: true },
  { id: 14, layer: 'stores', name: 'bar', src: IMAGES.bar, size: 36, coordinates: { x: 181, y: 327 }, visible: true },
  { id: 15, layer: 'stores', name: 'fast food', src: IMAGES.fastFood, size: 36, coordinates: { x: 269, y: 142 }, visible: true },
  { id: 16, layer: 'stores', name: 'bakery', src: IMAGES.bakery, size: 36, coordinates: { x: 399, y: 843 }, visible: true },
  { id: 17, layer: 'stores', name: 'supermarket', src: IMAGES.supermarket, size: 36, coordinates: { x: 736, y: 441 }, visible: true },
  // Services
  // Atms
  { id: 18, layer: 'services', name: 'atm', src: IMAGES.atm, size: 36, coordinates: { x: 398, y: 334 }, visible: true },
  { id: 19, layer: 'services', name: 'atm', src: IMAGES.atm, size: 36, coordinates: { x: 404, y: 92 }, visible: true },
  { id: 20, layer: 'services', name: 'atm', src: IMAGES.atm, size: 36, coordinates: { x: 377, y: 855 }, visible: true },
  { id: 21, layer: 'services', name: 'atm', src: IMAGES.atm, size: 36, coordinates: { x: 575, y: 715 }, visible: true },
  { id: 22, layer: 'services', name: 'atm', src: IMAGES.atm, size: 36, coordinates: { x: 81, y: 549 }, visible: true },
  { id: 23, layer: 'services', name: 'atm', src: IMAGES.atm, size: 36, coordinates: { x: 81, y: 718 }, visible: true },
  { id: 24, layer: 'services', name: 'atm', src: IMAGES.atm, size: 36, coordinates: { x: 270, y: 621 }, visible: true },
  { id: 25, layer: 'services', name: 'atm', src: IMAGES.atm, size: 36, coordinates: { x: 587, y: 357 }, visible: true },
  { id: 26, layer: 'services', name: 'atm', src: IMAGES.atm, size: 36, coordinates: { x: 269, y: 151 }, visible: true },
  { id: 27, layer: 'services', name: 'atm', src: IMAGES.atm, size: 36, coordinates: { x: 105, y: 326 }, visible: true },
  { id: 28, layer: 'services', name: 'atm', src: IMAGES.atm, size: 36, coordinates: { x: 748, y: 312 }, visible: true },
  { id: 29, layer: 'services', name: 'atm', src: IMAGES.atm, size: 36, coordinates: { x: 819, y: 552 }, visible: true },
  { id: 30, layer: 'services', name: 'atm', src: IMAGES.atm, size: 36, coordinates: { x: 612, y: 892 }, visible: true },
  // Elevators
  { id: 31, layer: 'services', name: 'elevator', src: IMAGES.elevator, size: 36, coordinates: { x: 373, y: 42 }, visible: true },
  { id: 32, layer: 'services', name: 'elevator', src: IMAGES.elevator, size: 36, coordinates: { x: 335, y: 181 }, visible: true },
  { id: 33, layer: 'services', name: 'elevator', src: IMAGES.elevator, size: 36, coordinates: { x: 173, y: 157 }, visible: true },
  { id: 34, layer: 'services', name: 'elevator', src: IMAGES.elevator, size: 36, coordinates: { x: 104, y: 298 }, visible: true },
  { id: 35, layer: 'services', name: 'elevator', src: IMAGES.elevator, size: 36, coordinates: { x: 274, y: 347 }, visible: true },
  { id: 36, layer: 'services', name: 'elevator', src: IMAGES.elevator, size: 36, coordinates: { x: 293, y: 422 }, visible: true },
  { id: 37, layer: 'services', name: 'elevator', src: IMAGES.elevator, size: 36, coordinates: { x: 382, y: 335 }, visible: true },
  { id: 38, layer: 'services', name: 'elevator', src: IMAGES.elevator, size: 36, coordinates: { x: 522, y: 339 }, visible: true },
  { id: 39, layer: 'services', name: 'elevator', src: IMAGES.elevator, size: 36, coordinates: { x: 607, y: 356 }, visible: true },
  { id: 40, layer: 'services', name: 'elevator', src: IMAGES.elevator, size: 36, coordinates: { x: 570, y: 424 }, visible: true },
  { id: 41, layer: 'services', name: 'elevator', src: IMAGES.elevator, size: 36, coordinates: { x: 732, y: 713 }, visible: true },
  { id: 42, layer: 'services', name: 'elevator', src: IMAGES.elevator, size: 36, coordinates: { x: 157, y: 594 }, visible: true },
  { id: 43, layer: 'services', name: 'elevator', src: IMAGES.elevator, size: 36, coordinates: { x: 168, y: 682 }, visible: true },
  { id: 44, layer: 'services', name: 'elevator', src: IMAGES.elevator, size: 36, coordinates: { x: 294, y: 670 }, visible: true },
  // Bullets

  // NPCS
  { id: 100, layer: 'npc', name: 'maggie', src: IMAGES.person, size: 36, coordinates: { x: 604, y: 664 }, visible: true },
  { id: 101, layer: 'npc', name: 'maggie', src: IMAGES.person, size: 36, coordinates: { x: 604, y: 569 }, visible: true },
  { id: 102, layer: 'npc', name: 'stellan', src: IMAGES.person, size: 36, coordinates: { x: 264, y: 692 }, visible: true },
  { id: 103, layer: 'npc', name: 'lizzie', src: IMAGES.person, size: 36, coordinates: { x: 104, y: 811 }, visible: true },
  { id: 104, layer: 'npc', name: 'jacob', src: IMAGES.person, size: 36, coordinates: { x: 563, y: 406 }, visible: true },
  { id: 105, layer: 'npc', name: 'deacon', src: IMAGES.person, size: 72, coordinates: { x: 431, y: 324 }, visible: true },
  { id: 106, layer: 'npc', name: 'conroy', src: IMAGES.person, size: 36, coordinates: { x: 513, y: 86 }, visible: true },
  { id: 106, layer: 'npc', name: 'more soon...', src: IMAGES.person, size: 0, coordinates: { x: 9000, y: 9000 }, visible: true },
];

export default DATA;
