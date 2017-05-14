const elements = [
  {
    no: 89,
    symbol: 'Ac',
    name: 'Actinium',
  },
  {
    no: 13,
    symbol: 'Al',
    name: 'Aluminium',
  },
  {
    no: 95,
    symbol: 'Am',
    name: 'Americium',
  },
  {
    no: 51,
    symbol: 'Sb',
    name: 'Antimon',
  },
  {
    no: 18,
    symbol: 'Ar',
    name: 'Argon',
  },
  {
    no: 33,
    symbol: 'As',
    name: 'Arsen',
  },
  {
    no: 85,
    symbol: 'At',
    name: 'Astat',
  },
  {
    no: 56,
    symbol: 'Ba',
    name: 'Barium',
  },
  {
    no: 97,
    symbol: 'Bk',
    name: 'Berkelium',
  },
  {
    no: 4,
    symbol: 'Be',
    name: 'Beryllium',
  },
  {
    no: 83,
    symbol: 'Bi',
    name: 'Bismut',
  },
  {
    no: 82,
    symbol: 'Pb',
    name: 'Blei',
  },
  {
    no: 107,
    symbol: 'Bh',
    name: 'Bohrium',
  },
  {
    no: 5,
    symbol: 'B',
    name: 'Bor',
  },
  {
    no: 35,
    symbol: 'Br',
    name: 'Brom',
  },
  {
    no: 48,
    symbol: 'Cd',
    name: 'Cadmium',
  },
  {
    no: 20,
    symbol: 'Ca',
    name: 'Calcium',
  },
  {
    no: 98,
    symbol: 'Cf',
    name: 'Californium',
  },
  {
    no: 55,
    symbol: 'Cs',
    name: 'Caesium',
  },
  {
    no: 58,
    symbol: 'Ce',
    name: 'Cer',
  },
  {
    no: 17,
    symbol: 'Cl',
    name: 'Chlor',
  },
  {
    no: 24,
    symbol: 'Cr',
    name: 'Chrom',
  },
  {
    no: 27,
    symbol: 'Co',
    name: 'Cobalt',
  },
  {
    no: 112,
    symbol: 'Cn',
    name: 'Copernicium',
  },
  {
    no: 96,
    symbol: 'Cm',
    name: 'Curium',
  },
  {
    no: 110,
    symbol: 'Ds',
    name: 'Darmstadtium',
  },
  {
    no: 105,
    symbol: 'Db',
    name: 'Dubnium',
  },
  {
    no: 66,
    symbol: 'Dy',
    name: 'Dysprosium',
  },
  {
    no: 99,
    symbol: 'Es',
    name: 'Einsteinium',
  },
  {
    no: 26,
    symbol: 'Fe',
    name: 'Eisen',
  },
  {
    no: 68,
    symbol: 'Er',
    name: 'Erbium',
  },
  {
    no: 63,
    symbol: 'Eu',
    name: 'Europium',
  },
  {
    no: 100,
    symbol: 'Fm',
    name: 'Fermium',
  },
  {
    no: 114,
    symbol: 'Fl',
    name: 'Flerovium',
  },
  {
    no: 9,
    symbol: 'F',
    name: 'Fluor',
  },
  {
    no: 87,
    symbol: 'Fr',
    name: 'Francium',
  },
  {
    no: 64,
    symbol: 'Gd',
    name: 'Gadolinium',
  },
  {
    no: 31,
    symbol: 'Ga',
    name: 'Gallium',
  },
  {
    no: 32,
    symbol: 'Ge',
    name: 'Germanium',
  },
  {
    no: 79,
    symbol: 'Au',
    name: 'Gold',
  },
  {
    no: 72,
    symbol: 'Hf',
    name: 'Hafnium',
  },
  {
    no: 108,
    symbol: 'Hs',
    name: 'Hassium',
  },
  {
    no: 2,
    symbol: 'He',
    name: 'Helium',
  },
  {
    no: 67,
    symbol: 'Ho',
    name: 'Holmium',
  },
  {
    no: 49,
    symbol: 'In',
    name: 'Indium',
  },
  {
    no: 53,
    symbol: 'I',
    name: 'Iod',
  },
  {
    no: 77,
    symbol: 'Ir',
    name: 'Iridium',
  },
  {
    no: 19,
    symbol: 'K',
    name: 'Kalium',
  },
  {
    no: 6,
    symbol: 'C',
    name: 'Kohlenstoff',
  },
  {
    no: 36,
    symbol: 'Kr',
    name: 'Krypton',
  },
  {
    no: 29,
    symbol: 'Cu',
    name: 'Kupfer',
  },
  {
    no: 57,
    symbol: 'La',
    name: 'Lanthan',
  },
  {
    no: 103,
    symbol: 'Lr',
    name: 'Lawrencium',
  },
  {
    no: 3,
    symbol: 'Li',
    name: 'Lithium',
  },
  {
    no: 116,
    symbol: 'Lv',
    name: 'Livermorium',
  },
  {
    no: 71,
    symbol: 'Lu',
    name: 'Lutetium',
  },
  {
    no: 12,
    symbol: 'Mg',
    name: 'Magnesium',
  },
  {
    no: 25,
    symbol: 'Mn',
    name: 'Mangan',
  },
  {
    no: 109,
    symbol: 'Mt',
    name: 'Meitnerium',
  },
  {
    no: 101,
    symbol: 'Md',
    name: 'Mendelevium',
  },
  {
    no: 42,
    symbol: 'Mo',
    name: 'Molybdän',
  },
  {
    no: 115,
    symbol: 'Mc',
    name: 'Moscovium',
  },
  {
    no: 11,
    symbol: 'Na',
    name: 'Natrium',
  },
  {
    no: 60,
    symbol: 'Nd',
    name: 'Neodym',
  },
  {
    no: 10,
    symbol: 'Ne',
    name: 'Neon',
  },
  {
    no: 93,
    symbol: 'Np',
    name: 'Neptunium',
  },
  {
    no: 28,
    symbol: 'Ni',
    name: 'Nickel',
  },
  {
    no: 113,
    symbol: 'Nh',
    name: 'Nihonium',
  },
  {
    no: 41,
    symbol: 'Nb',
    name: 'Niob',
  },
  {
    no: 102,
    symbol: 'No',
    name: 'Nobelium',
  },
  {
    no: 118,
    symbol: 'Og',
    name: 'Oganesson',
  },
  {
    no: 76,
    symbol: 'Os',
    name: 'Osmium',
  },
  {
    no: 46,
    symbol: 'Pd',
    name: 'Palladium',
  },
  {
    no: 15,
    symbol: 'P',
    name: 'Phosphor',
  },
  {
    no: 78,
    symbol: 'Pt',
    name: 'Platin',
  },
  {
    no: 94,
    symbol: 'Pu',
    name: 'Plutonium',
  },
  {
    no: 84,
    symbol: 'Po',
    name: 'Polonium',
  },
  {
    no: 59,
    symbol: 'Pr',
    name: 'Praseodym',
  },
  {
    no: 61,
    symbol: 'Pm',
    name: 'Promethium',
  },
  {
    no: 91,
    symbol: 'Pa',
    name: 'Protactinium',
  },
  {
    no: 80,
    symbol: 'Hg',
    name: 'Quecksilber',
  },
  {
    no: 88,
    symbol: 'Ra',
    name: 'Radium',
  },
  {
    no: 86,
    symbol: 'Rn',
    name: 'Radon',
  },
  {
    no: 75,
    symbol: 'Re',
    name: 'Rhenium',
  },
  {
    no: 45,
    symbol: 'Rh',
    name: 'Rhodium',
  },
  {
    no: 111,
    symbol: 'Rg',
    name: 'Roentgenium',
  },
  {
    no: 37,
    symbol: 'Rb',
    name: 'Rubidium',
  },
  {
    no: 44,
    symbol: 'Ru',
    name: 'Ruthenium',
  },
  {
    no: 104,
    symbol: 'Rf',
    name: 'Rutherfordium',
  },
  {
    no: 62,
    symbol: 'Sm',
    name: 'Samarium',
  },
  {
    no: 8,
    symbol: 'O',
    name: 'Sauerstoff',
  },
  {
    no: 21,
    symbol: 'Sc',
    name: 'Scandium',
  },
  {
    no: 16,
    symbol: 'S',
    name: 'Schwefel',
  },
  {
    no: 106,
    symbol: 'Sg',
    name: 'Seaborgium',
  },
  {
    no: 34,
    symbol: 'Se',
    name: 'Selen',
  },
  {
    no: 47,
    symbol: 'Ag',
    name: 'Silber',
  },
  {
    no: 14,
    symbol: 'Si',
    name: 'Silicium',
  },
  {
    no: 7,
    symbol: 'N',
    name: 'Stickstoff',
  },
  {
    no: 38,
    symbol: 'Sr',
    name: 'Strontium',
  },
  {
    no: 73,
    symbol: 'Ta',
    name: 'Tantal',
  },
  {
    no: 43,
    symbol: 'Tc',
    name: 'Technetium',
  },
  {
    no: 52,
    symbol: 'Te',
    name: 'Tellur',
  },
  {
    no: 117,
    symbol: 'Ts',
    name: 'Tennessine',
  },
  {
    no: 65,
    symbol: 'Tb',
    name: 'Terbium',
  },
  {
    no: 81,
    symbol: 'Tl',
    name: 'Thallium',
  },
  {
    no: 90,
    symbol: 'Th',
    name: 'Thorium',
  },
  {
    no: 69,
    symbol: 'Tm',
    name: 'Thulium',
  },
  {
    no: 22,
    symbol: 'Ti',
    name: 'Titan',
  },
  {
    no: 92,
    symbol: 'U',
    name: 'Uran',
  },
  {
    no: 23,
    symbol: 'V',
    name: 'Vanadium',
  },
  {
    no: 1,
    symbol: 'H',
    name: 'Wasserstoff',
  },
  {
    no: 74,
    symbol: 'W',
    name: 'Wolfram',
  },
  {
    no: 54,
    symbol: 'Xe',
    name: 'Xenon',
  },
  {
    no: 70,
    symbol: 'Yb',
    name: 'Ytterbium',
  },
  {
    no: 39,
    symbol: 'Y',
    name: 'Yttrium',
  },
  {
    no: 30,
    symbol: 'Zn',
    name: 'Zink',
  },
  {
    no: 50,
    symbol: 'Sn',
    name: 'Zinn',
  },
  {
    no: 40,
    symbol: 'Zr',
    name: 'Zirconium',
  },
];

export default elements;
