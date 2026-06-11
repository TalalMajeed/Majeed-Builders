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
    id: 'house-01-bahria-enclave-sector-c',
    name: 'House 01, Street 16E, Sector C',
    category: 'Residential',
    status: 'Completed',
    location: 'Bahria Enclave, Islamabad',
    year: 2021,
    area: '1 Kanal',
    units: '2 Floors',
    client: 'Private Client',
    description:
      'A spacious 1 Kanal, 2-floor residential home built in the heart of Bahria Enclave Sector C. Delivered with premium finishes and structural integrity, this project set the foundation for Majeed Builders\' reputation in Bahria Enclave.',
    highlights: [
      '1 Kanal plot',
      '2-floor construction',
      'Premium interior finishing',
      'Structural steel framework',
      'On-time delivery',
    ],
  },
  {
    id: 'house-9b-bahria-enclave-sector-g',
    name: 'House 9B (Park Facing), Sector G',
    category: 'Residential',
    status: 'Completed',
    location: 'Bahria Enclave, Islamabad',
    year: 2022,
    area: '8 Marla',
    units: '2 Floors',
    client: 'Private Client',
    description:
      'An 8 Marla, 2-floor park-facing home in Bahria Enclave Sector G. The prime park-facing location called for thoughtful design to maximise natural light and views, delivered to the client\'s full satisfaction.',
    highlights: [
      '8 Marla plot',
      '2-floor construction',
      'Park-facing orientation',
      'Natural light optimisation',
      'Quality brickwork and plastering',
    ],
  },
  {
    id: 'house-13-bahria-enclave-sector-m',
    name: 'House 13, Road 1B, Sector M',
    category: 'Residential',
    status: 'Completed',
    location: 'Bahria Enclave, Islamabad',
    year: 2022,
    area: '10 Marla',
    units: '2 Floors',
    client: 'Private Client',
    description:
      'A well-appointed 10 Marla, 2-floor family home in Bahria Enclave Sector M. Built with certified grade-A materials and delivered on schedule, this project reflects Majeed Builders\' commitment to quality at every scale.',
    highlights: [
      '10 Marla plot',
      '2-floor construction',
      'Grade-A certified materials',
      'Full interior and exterior finishing',
      'Completed on schedule',
    ],
  },
  {
    id: 'house-19-bahria-enclave-sector-m',
    name: 'House 19, Street 23, Sector M',
    category: 'Residential',
    status: 'Completed',
    location: 'Bahria Enclave, Islamabad',
    year: 2023,
    area: '5 Marla',
    units: '2 Floors',
    client: 'Private Client',
    description:
      'A compact yet fully-featured 5 Marla, 2-floor home in Bahria Enclave Sector M. Designed to make the most of the available space, this project demonstrates that quality construction has no minimum size.',
    highlights: [
      '5 Marla plot',
      '2-floor construction',
      'Space-efficient layout',
      'Modern kitchen and bathrooms',
      'Full boundary and gate works',
    ],
  },
  {
    id: 'house-425c-park-view-overseas',
    name: 'House 425C, Overseas Block, Park View',
    category: 'Residential',
    status: 'In Progress',
    location: 'Park View City, Islamabad',
    year: 2024,
    area: '1 Kanal',
    units: '2 Floors',
    client: 'Private Client',
    description:
      'An ongoing 1 Kanal, 2-floor residential project in the prestigious Overseas Block of Park View City. This build features high-end specifications befitting the upscale neighbourhood and is currently under active construction.',
    highlights: [
      '1 Kanal plot',
      '2-floor construction',
      'Premium Overseas Block location',
      'High-end material specifications',
      'Currently under construction',
    ],
  },
  {
    id: 'house-5-saif-garden',
    name: 'House 5, Saif Garden',
    category: 'Residential',
    status: 'In Progress',
    location: 'Saif Garden, Islamabad',
    year: 2024,
    area: '5 Marla',
    units: '2 Floors',
    client: 'Private Client',
    description:
      'An ongoing 5 Marla, 2-floor residential home in Saif Garden, Islamabad. Currently under construction, this project continues Majeed Builders\' track record of delivering quality homes on time and within budget.',
    highlights: [
      '5 Marla plot',
      '2-floor construction',
      'Saif Garden community',
      'Efficient project scheduling',
      'Currently under construction',
    ],
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}
