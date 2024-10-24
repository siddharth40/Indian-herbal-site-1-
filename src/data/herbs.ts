export interface Herb {
  name: string;
  description: string;
  image: string;
  benefits: string;
  scientificName: string;
  traditionalUses: string[];
  preparation: string[];
  precautions: string[];
}

export const herbs: Herb[] = [
  {
    name: 'Aloe Vera',
    description: 'Known as "Ghritkumari" in Ayurveda, this miracle plant has been used for centuries.',
    image: 'https://images.unsplash.com/photo-1596046591350-b8ea4ca4a994?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    benefits: 'Skin care, digestive health, and immune system support',
    scientificName: 'Aloe barbadensis miller',
    traditionalUses: [
      'Treatment of skin conditions',
      'Natural moisturizer',
      'Digestive aid',
      'Wound healing'
    ],
    preparation: [
      'Fresh gel can be applied directly to skin',
      'Juice can be consumed on empty stomach',
      'Can be mixed with other herbs for enhanced benefits'
    ],
    precautions: [
      'Avoid during pregnancy',
      'May cause allergic reactions in some people',
      'Start with small doses when consuming internally'
    ]
  },
  {
    name: 'Amla',
    description: 'Indian Gooseberry, a powerful antioxidant and immunity booster.',
    image: 'https://images.unsplash.com/photo-1601493700750-58796941d9da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    benefits: 'Rich in Vitamin C, boosts immunity, improves digestion',
    scientificName: 'Emblica officinalis',
    traditionalUses: [
      'Hair care and growth',
      'Eye health',
      'Diabetes management',
      'Digestive health'
    ],
    preparation: [
      'Can be consumed raw',
      'Available as powder or juice',
      'Used in hair oils and masks'
    ],
    precautions: [
      'May interact with diabetes medications',
      'Avoid if you have bleeding disorders',
      'Consult doctor if pregnant or nursing'
    ]
  },
  {
    name: 'Bamboo',
    description: 'A versatile plant known for its medicinal properties and sustainability.',
    image: 'https://images.unsplash.com/photo-1588228743481-dcd522d0c8d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    benefits: 'Joint health, skin care, and natural silica source',
    scientificName: 'Bambusa vulgaris',
    traditionalUses: [
      'Joint pain relief',
      'Hair strengthening',
      'Wound healing',
      'Natural detoxifier'
    ],
    preparation: [
      'Bamboo leaf tea',
      'Powder form supplements',
      'External application for skin'
    ],
    precautions: [
      'Check source authenticity',
      'Start with small doses',
      'Not recommended for pregnant women'
    ]
  },
  {
    name: 'Insulin Plant',
    description: 'Natural blood sugar management plant, known as Costus igneus.',
    image: 'https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    benefits: 'Blood sugar control, diabetes management',
    scientificName: 'Costus igneus',
    traditionalUses: [
      'Diabetes management',
      'Blood sugar control',
      'Kidney health'
    ],
    preparation: [
      'Chew 1-2 leaves daily',
      'Can be made into tea',
      'Dried leaf powder'
    ],
    precautions: [
      'Monitor blood sugar levels closely',
      'Consult healthcare provider if on diabetes medication',
      'Not a replacement for prescribed medication'
    ]
  },
  {
    name: 'Mint',
    description: 'Refreshing herb with cooling properties and digestive benefits.',
    image: 'https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    benefits: 'Digestive aid, breath freshener, cooling effect',
    scientificName: 'Mentha',
    traditionalUses: [
      'Digestive problems',
      'Headache relief',
      'Fresh breath',
      'Cooling effect'
    ],
    preparation: [
      'Fresh leaves in tea',
      'Chutney preparation',
      'Added to foods'
    ],
    precautions: [
      'Avoid excessive consumption',
      'May interact with certain medications',
      'Can affect acid reflux in some people'
    ]
  },
  {
    name: 'Neem',
    description: 'The village pharmacy, known for its multiple medicinal properties.',
    image: 'https://images.unsplash.com/photo-1590171300604-59b19b10d0e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    benefits: 'Antibacterial, antifungal, blood purifier',
    scientificName: 'Azadirachta indica',
    traditionalUses: [
      'Skin conditions',
      'Dental care',
      'Blood purification',
      'Pest control'
    ],
    preparation: [
      'Neem oil application',
      'Leaf paste for skin',
      'Twigs for dental care'
    ],
    precautions: [
      'Not for internal use without guidance',
      'Avoid during pregnancy',
      'Can affect fertility'
    ]
  },
  {
    name: 'Spinach',
    description: 'Nutrient-rich leafy green vegetable with multiple health benefits.',
    image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    benefits: 'Iron-rich, improves hemoglobin, boosts immunity',
    scientificName: 'Spinacia oleracea',
    traditionalUses: [
      'Anemia treatment',
      'Eye health',
      'Bone strength',
      'Digestive health'
    ],
    preparation: [
      'Cooked in meals',
      'Raw in salads',
      'Smoothies'
    ],
    precautions: [
      'Wash thoroughly before use',
      'High in oxalates',
      'May interact with blood thinners'
    ]
  },
  {
    name: 'Rose',
    description: 'Beyond its beauty, rose has significant medicinal properties.',
    image: 'https://images.unsplash.com/photo-1496062031456-07b8f162a322?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    benefits: 'Skin care, emotional well-being, digestive health',
    scientificName: 'Rosa damascena',
    traditionalUses: [
      'Skin care',
      'Mood enhancement',
      'Digestive aid',
      'Natural perfume'
    ],
    preparation: [
      'Rose water',
      'Rose tea',
      'Essential oil'
    ],
    precautions: [
      'Use only food-grade products internally',
      'Test for allergies',
      'Avoid excessive consumption'
    ]
  },
  {
    name: 'Tulsi',
    description: 'Holy Basil, the Queen of Herbs in Ayurveda.',
    image: 'https://images.unsplash.com/photo-1593228721121-2c8aa8d1648d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    benefits: 'Adaptogenic herb, stress relief, immunity booster',
    scientificName: 'Ocimum sanctum',
    traditionalUses: [
      'Respiratory health',
      'Stress management',
      'Fever reduction',
      'Immunity boost'
    ],
    preparation: [
      'Fresh leaves consumption',
      'Tulsi tea',
      'Dried powder'
    ],
    precautions: [
      'May affect fertility',
      'Avoid during pregnancy',
      'Can interact with blood thinners'
    ]
  },
  {
    name: 'Turmeric',
    description: 'Golden spice of life with powerful anti-inflammatory properties.',
    image: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    benefits: 'Anti-inflammatory, antioxidant, healing properties',
    scientificName: 'Curcuma longa',
    traditionalUses: [
      'Joint pain relief',
      'Wound healing',
      'Skin care',
      'Immunity boost'
    ],
    preparation: [
      'Golden milk',
      'Added to foods',
      'Topical paste'
    ],
    precautions: [
      'Can stain clothes and skin',
      'May interact with blood thinners',
      'Avoid excessive consumption'
    ]
  }
];

export const getHerbByName = (name: string): Herb | undefined => {
  return herbs.find(herb => herb.name.toLowerCase() === name.toLowerCase());
};