export type Project = {
  id: string;
  name: string;
  category: 'Residential' | 'Commercial';
  status: 'Completed' | 'In Progress';
  location: string;
  year: number;
  area: string;
  units: string;
  client: string;
  description: string;
  highlights: string[];
};

export const projects: Project[] = [
  {
    id: 'gulberg-heights',
    name: 'Gulberg Heights',
    category: 'Residential',
    status: 'Completed',
    location: 'Gulberg III, Islamabad',
    year: 2023,
    area: '45,000 sq ft',
    units: '48 Apartments',
    client: 'Private Developer',
    description:
      'A landmark residential apartment complex featuring 48 premium units across 8 floors. The project incorporates modern architectural elements with traditional Pakistani aesthetics, offering residents a seamless blend of comfort and elegance in the heart of Islamabad.',
    highlights: [
      '8-story residential tower',
      '48 luxury apartments',
      'Rooftop garden and community spaces',
      'Underground parking for 60 vehicles',
      'Seismic-resistant construction',
    ],
  },
  {
    id: 'blue-area-commercial-tower',
    name: 'Blue Area Commercial Tower',
    category: 'Commercial',
    status: 'Completed',
    location: 'Blue Area, Islamabad',
    year: 2022,
    area: '120,000 sq ft',
    units: '24 Office Floors',
    client: 'Capital Investment Group',
    description:
      "A prestigious 24-story commercial tower in the heart of Islamabad's central business district. This Grade-A office building sets new standards for corporate infrastructure in the capital with world-class amenities and sustainable design.",
    highlights: [
      '24-floor commercial tower',
      'Grade-A office specifications',
      'LEED-certified green building',
      'High-speed elevators (8 units)',
      'Central HVAC and BMS system',
    ],
  },
  {
    id: 'dha-phase6-villas',
    name: 'DHA Phase 6 Villas',
    category: 'Residential',
    status: 'Completed',
    location: 'DHA Phase 6, Islamabad',
    year: 2023,
    area: '85,000 sq ft',
    units: '12 Luxury Villas',
    client: 'DHA Islamabad',
    description:
      'An exclusive collection of 12 luxury villas designed for discerning homeowners. Each villa spans a 1-kanal plot and features premium finishes, smart home technology, and beautifully landscaped private gardens.',
    highlights: [
      '12 luxury standalone villas',
      '1-kanal plots per villa',
      'Smart home automation system',
      'Private swimming pools',
      'Landscaped private gardens',
    ],
  },
  {
    id: 'g13-housing-society',
    name: 'G-13 Housing Society',
    category: 'Residential',
    status: 'In Progress',
    location: 'G-13, Islamabad',
    year: 2024,
    area: '350,000 sq ft',
    units: '180 Houses',
    client: 'Federal Government Housing Scheme',
    description:
      'A large-scale government housing project providing affordable quality homes to 180 families. The society features all essential amenities including parks, mosques, a community center, and a modern underground utility network.',
    highlights: [
      '180 residential units',
      'Mosque and community center',
      '4 parks and green spaces',
      'Underground utility network',
      'Boundary wall and security system',
    ],
  },
  {
    id: 'bahria-enclave-grand-mall',
    name: 'Bahria Enclave Grand Mall',
    category: 'Commercial',
    status: 'In Progress',
    location: 'Bahria Enclave, Islamabad',
    year: 2024,
    area: '280,000 sq ft',
    units: '3 Floors + Food Court',
    client: 'Bahria Town',
    description:
      'A state-of-the-art shopping mall bringing international retail brands to Bahria Enclave. The 3-floor mall features 120+ retail outlets, a vibrant food court, a multiplex cinema, and ample modern parking facilities.',
    highlights: [
      '120+ retail outlets',
      'Multiplex cinema (4 screens)',
      'International food court',
      '500-car parking facility',
      'Solar-powered common areas',
    ],
  },
  {
    id: 'f7-corporate-hub',
    name: 'F-7 Corporate Hub',
    category: 'Commercial',
    status: 'Completed',
    location: 'F-7 Markaz, Islamabad',
    year: 2021,
    area: '60,000 sq ft',
    units: '12 Commercial Floors',
    client: 'F-7 Business Associates',
    description:
      'A modern 12-story corporate hub strategically located in F-7 Markaz. The building offers flexible office spaces ranging from 500 to 5,000 sq ft and serves as home to numerous multinationals and local enterprises.',
    highlights: [
      '12-story corporate building',
      'Flexible office configurations',
      'Conference and training rooms',
      '24/7 security and surveillance',
      'Backup power generation',
    ],
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}
