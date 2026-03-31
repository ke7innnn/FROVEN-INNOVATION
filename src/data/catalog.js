export const catalog = [
  {
    name: 'Commercial Refrigeration',
    slug: 'commercial-refrigeration',
    description: 'Explore our comprehensive range of commercial cooling solutions designed for high performance and durability.',
    products: [
      {
        name: 'Hard Top Chest Freezer',
        slug: 'hard-top-chest-freezer',
        pageData: {
          description: "Introducing the MarkEn Hard Top Chest Freezer — a durable, high-capacity deep-freezing solution built for powerful cooling and long-term reliability. Designed for commercial and home use, it offers fast cooling, superior insulation, and energy-efficient performance, ensuring your stored items stay fresh and protected. Built with a robust hard-top lid, it guarantees excellent temperature retention. A perfect choice for businesses and households that demand dependable freezing every day.",
          features: [
            { icon: 'fas fa-leaf', text: 'Eco-Friendly Refrigerant' },
            { icon: 'fas fa-bolt', text: 'Low Power Consumption' },
            { icon: 'fas fa-door-open', text: 'Hinge Door' },
            { icon: 'fas fa-lock', text: 'Door Lock' },
            { icon: 'fas fa-truck-monster', text: 'Durable Castors (Wheels)' },
            { icon: 'fas fa-temperature-high', text: 'Tropicalized @ 50°C' }
          ],
          table: {
            headers: ['Model Number', 'FHF120SD', 'FHF240SD', 'FHF330SD', 'FHF420DD', 'FHF540DD', 'FCHT330G', 'FCHT420G'],
            rows: [
              ['Capacity (Litres)', '100', '200', '300', '400', '500', '166C + 130F', '218C + 183F'],
              ['Refrigerant Used', 'R134a', '-', '-', '-', '-', '-', '-'],
              ['External Dimension in mm (WxDxH)', '554 x 576 x 832', '815 x 720 x 825', '1105 x 720 x 845', '1395 x 720 x 845', '1685 x 720 x 845', '1115 x 720 x 845', '1395 x 720 x 845'],
              ['Packaging Dimension in mm (WxDxH)', '-', '885 x 760 x 900', '1175 x 760 x 900', '1465 x 760 x 900', '1755 x 760 x 900', '1180 x 770 x 885', '1475 x 770 x 885'],
              ['Baskets', '1', '1', '1', '1', '2', '2', '2'],
              ['No Of Doors', '1', '1', '1', '2', '2', '2', '2'],
              ['Temperature Range - °C', '8 ~ -25', '+5°C to -27°C', '+5°C to -27°C', '+5°C to -27°C', '+5°C to -27°C', '+2°C to +8°C / -16°C to -24°C', '+2°C to +8°C / -16°C to -24°C'],
              ['Door Type', 'Solid', '-', '-', '-', '-', '-', '-'],
              ['Compressor Type', 'ZEL', '-', '-', '-', '-', '-', '-'],
              ['Ambient Temperature', '32 Deg C', '-', '-', '-', '-', '-', '-'],
              ['Castors (Wheels)', 'Yes', 'Yes', 'Yes', 'Yes', 'Yes', 'Yes', 'Yes'],
              ['Lock & Key / Door Lock', 'Yes', 'Yes', 'Yes', 'Yes', 'Yes', 'Yes', 'Yes']
            ]
          }
        },
        models: [
          { name: 'Hardtop Freezer - 100 ltrs Single Door', id: 'FHF120SD' },
          { name: 'Hardtop Freezer - 200 ltrs Single Door', id: 'FHF240SD' },
          { name: 'Hardtop Freezer - 300 ltrs Single Door', id: 'FHF330SD' },
          { name: 'Hardtop Freezer - 300 ltrs Double Door', id: 'FHTF330DD' },
          { name: 'Hardtop Freezer - 400 ltrs Double Door', id: 'FHF420DD' },
          { name: 'Hardtop Freezer - 500 ltrs Double Door', id: 'FHF540DD' }
        ]
      },
      {
        name: 'Glass Top Chest Freezer',
        slug: 'glass-top-chest-freezer',
        pageData: {
          description: "The Deep Freezer is expertly engineered to cater to the cold storage requirements of businesses engaged in the distribution and retail of food items, including ice cream, milk products, and other dairy-based goods. Combining high-performance cooling with energy efficiency, this freezer ensures reliable temperature control and extended holdover time. Its robust design, user-friendly features, and compliance with industry standards make it an ideal solution for commercial food storage environments where product preservation and operational reliability are paramount.",
          features: [
            { icon: 'fas fa-leaf', text: 'Eco-Friendly Refrigerant' },
            { icon: 'fas fa-bolt', text: 'Low Power Consumption' },
            { icon: 'fas fa-door-open', text: 'Hinge Door' },
            { icon: 'fas fa-lock', text: 'Door Lock' },
            { icon: 'fas fa-truck-monster', text: 'Durable Castors (Wheels)' },
            { icon: 'fas fa-temperature-high', text: 'Tropicalized @ 50°C' }
          ],
          table: {
            headers: ['Model Number', 'FGF120F', 'FGF230F', 'FGF330F', 'FGF430F', 'FGF540F'],
            rows: [
              ['Capacity (Litres)', '100', '200', '320', '430', '540'],
              ['External Dimension (WxDxH) (MM)', '940 X 630 X 835', '940 X 630 X 835', '1100 X 740 X 800', '1390 X 740 X 800', '1680 X 740 X 800'],
              ['Internal Dimension (WxDxH) (MM)', '790 X 440 X 632', '790 X 440 X 632', '960 X 550 X 632', '1250 X 550 X 632', '1540 X 550 X 632'],
              ['Baskets', '2', '2', '3', '4', '5'],
              ['No Of Doors (Sliding)', '2', '2', '2', '2', '2'],
              ['Temperature Range - °C', '-17°C ~ -31°C', '-17°C ~ -31°C', '-17°C ~ -31°C', '-17°C ~ -31°C', '-17°C ~ -31°C'],
              ['Castors', 'Yes', 'Yes', 'Yes', 'Yes', 'Yes'],
              ['Inbuilt Lock', 'Yes', 'Yes', 'Yes', 'Yes', 'Yes']
            ]
          }
        },
        models: [
          { name: 'Glasstop Freezer - 100 ltrs Flat Glass', id: 'FGF120F' },
          { name: 'Glasstop Freezer - 225 ltrs Sliding Door', id: 'FGF230F' },
          { name: 'Glasstop Freezer - 325 ltrs Sliding Door', id: 'FGF330F' },
          { name: 'Glasstop Freezer - 425 ltrs Sliding Door', id: 'FGF420F' },
          { name: 'Glasstop Freezer - 525 ltrs Sliding Door', id: 'FGF540F' }
        ]
      },
      {
        name: 'Visi Cooler',
        slug: 'visi-cooler',
        models: [
          { name: 'Visi Cooler without canopy - 200 ltrs Single Door', id: 'FVC240SD' },
          { name: 'Visi Cooler with canopy - 200 ltrs Single Door', id: 'FVC240SDC' },
          { name: 'Visi Cooler without canopy - 300 ltrs Single Door', id: 'FVC330SD' },
          { name: 'Visi Cooler with canopy - 300 ltrs Single Door', id: 'FVC330SDC' },
          { name: 'Visi Cooler without canopy - 400 ltrs Single Door', id: 'FVC420SD' },
          { name: 'Visi Cooler with canopy - 400 ltrs Single Door', id: 'FVC420SDC' },
          { name: 'Visi Cooler without canopy - 500 ltrs Single Door', id: 'FVC540SD' },
          { name: 'Visi Cooler with canopy - 500 ltrs Single Door', id: 'FVC540SDC' },
          { name: 'Visi Cooler without canopy - 700 ltrs Double Door', id: 'FVC730DD' },
          { name: 'Visi Cooler with canopy - 700 ltrs Double Door', id: 'FVC730DDC' },
          { name: 'Visi Cooler without canopy - 1000 ltrs Double Door', id: 'FVC1050DD' },
          { name: 'Visi Cooler with canopy - 1000 ltrs Double Door', id: 'FVC1050DDC' }
        ]
      },
      {
        name: 'Vertical Freezer',
        slug: 'vertical-freezer',
        models: [
          { name: 'Vertical Freezer without canopy - 342 ltrs Single Door', id: 'FVF360SD' },
          { name: 'Vertical Freezer with canopy - 342 ltrs Single Door', id: 'FVF360SDC' },
          { name: 'Vertical Freezer without canopy - 460 ltrs Single Door', id: 'FVF550SD' },
          { name: 'Visi Freezer with canopy - 460 ltrs Single Door', id: 'FVF550SDC' }
        ]
      }
    ]
  },
  {
    name: 'Horeca',
    slug: 'horeca',
    description: 'Professional-grade equipment designed for the demanding requirements of hotels, restaurants, and catering services.',
    products: [
      {
        name: 'Minibar',
        slug: 'minibar',
        models: [
          { name: 'Minibar 46 L Glass Door', id: 'FMB50G' },
          { name: 'Minibar 46 L Hard Door', id: 'FMB50H' },
          { name: 'Minibar 96 L Hard Door', id: 'FMB100H' }
        ]
      },
      {
        name: 'Water Dispenser',
        slug: 'water-dispenser',
        models: [
          { name: 'Water Dispenser (Floor Standing with Cooling cabinet)', id: 'FWDCC' },
          { name: 'Water Dispenser (Floor Standing with Storage cabinet)', id: 'FWDSC' },
          { name: 'Water Dispenser (Table Top)', id: 'FWDTT' }
        ]
      },
      {
        name: 'Blast Chillers / Freezers',
        slug: 'blast-chillers-freezers',
        models: [
          { name: 'Blast Chillers / Freezers', id: 'FBCF5T' },
          { name: 'Blast Chillers / Freezers', id: 'FBCF15T' },
          { name: 'Blast Chillers / Freezers', id: 'FBCF10T' }
        ]
      },
      {
        name: 'Upright Chiller',
        slug: 'upright-chiller',
        models: [
          { name: '2 Door Chiller -2~8°C (600 ltrs. Capacity)', id: 'FSVC6502' },
          { name: '4 Door Chiller -2~8°C (1000 ltrs. Capacity)', id: 'FSVC12002' }
        ]
      },
      {
        name: 'Upright Freezer',
        slug: 'upright-freezer',
        models: [
          { name: '2 Door Freezer -18°C~-22°C (600 ltrs. Capacity)', id: 'FSVF6502' },
          { name: '4 Door Freezer -18°C~-22°C (1000 ltrs. Capacity)', id: 'FSVF12002' }
        ]
      },
      {
        name: 'Under Counter Chiller',
        slug: 'under-counter-chiller',
        models: [
          { name: '2 Door Under Counter Chiller -2~8°C', id: 'FSUCTC200' }
        ]
      },
      {
        name: 'Under Counter Freezer',
        slug: 'under-counter-freezer',
        models: [
          { name: '2 Door Under Counter Freezer -18°C~-22°C', id: 'FSUCTF200' }
        ]
      },
      {
        name: 'Bakery Counter',
        slug: 'bakery-counter',
        models: [
          { name: '2 Door Pizza Preparation Table', id: 'FSPPT200' },
          { name: '3 Door Pizza Preparation Table', id: 'FSPPT300' }
        ]
      },
      {
        name: 'Back Bar',
        slug: 'back-bar',
        models: [
          { name: 'Back Bar with 2 Glass Doors', id: 'FBB2D' },
          { name: 'Back Bar with 3 Glass Doors', id: 'FBB3D' }
        ]
      },
      {
        name: 'Wine cooler',
        slug: 'wine-cooler',
        models: [
          { name: 'Black with SS Door/ 12 Std Bottles', id: 'FWC12B' },
          { name: 'Black with SS Door/ 40 Std Bottles', id: 'FWC40B' },
          { name: 'Black with SS Door/ 126 Std Bottles', id: 'FWC126B' }
        ]
      },
      {
        name: 'Water Cooler',
        slug: 'water-cooler',
        models: [
          { name: 'Stainlesssteel Water Cooler - 20 Ltrs', id: 'FSWC20' },
          { name: 'Stainlesssteel Water Cooler - 40 Ltrs', id: 'FSWC40' },
          { name: 'Stainlesssteel Water Cooler - 60 Ltrs', id: 'FSWC60' }
        ]
      },
      {
        name: 'Ice Machine',
        slug: 'ice-machine',
        models: [
          { name: 'ICE FLAKERS MACHINE 36 KG/24HRS CAPACITY', id: 'FIM36KG' },
          { name: 'ICE FLAKERS MACHINE 909 KG/24HRS CAPACITY', id: 'FIM909KG' },
          { name: 'ICE FLAKERS MACHINE 455 KG/24HRS CAPACITY', id: 'FIM455KG' },
          { name: 'ICE FLAKERS MACHINE 318 KG/24HRS CAPACITY', id: 'FIM318KG' },
          { name: 'ICE FLAKERS MACHINE 191 KG/24HRS CAPACITY', id: 'FIM191KG' },
          { name: 'ICE FLAKERS MACHINE 55 KG/24HRS CAPACITY', id: 'FIM55KGBW' }
        ]
      }
    ]
  },
  {
    name: 'LAB',
    slug: 'lab',
    description: 'Precision cooling and ultra-low temperature storage solutions for laboratories and medical facilities.',
    products: [
      {
        name: 'ULT Deep Freezer -86 °C Vertical',
        slug: 'ult-deep-freezer-86c-vertical',
        models: [
          { name: 'ULT Deep Freezer -86 °C Vertical', id: 'FUDF-86V' }
        ]
      },
      {
        name: 'Deep Freezer -40 °C Horizontal',
        slug: 'deep-freezer-40c-horizontal',
        models: [
          { name: 'Deep Freezer -40 °C Horizontal', id: 'FDF-40H' }
        ]
      },
      {
        name: 'Deep Freezer -25 °C Vertical',
        slug: 'deep-freezer-25c-vertical',
        models: [
          { name: 'Deep Freezer -25 °C Vertical', id: 'FDF-40V' }
        ]
      },
      {
        name: 'Ice Lined Refrigerator (Horizontal)',
        slug: 'ice-lined-refrigerator-horizontal',
        models: [
          { name: 'Ice Lined Refrigerator (Horizontal)', id: 'FICRH' }
        ]
      },
      {
        name: 'Ice Lined Refrigerator (Vertical)',
        slug: 'ice-lined-refrigerator-vertical',
        models: [
          { name: 'Ice Lined Refrigerator (Vertical)', id: 'FICRV' }
        ]
      },
      {
        name: 'Laboratory Refrigerator (Vertical)',
        slug: 'laboratory-refrigerator-vertical',
        models: [
          { name: 'Laboratory Refrigerator (Vertical)', id: 'FLRV' }
        ]
      }
    ]
  },
  {
    name: 'Confectionery Showcase',
    slug: 'confectionery-showcase',
    description: 'Premium glass displays engineered to highlight and preserve your finest confectioneries.',
    products: [
      {
        name: 'Cake Display',
        slug: 'cake-display',
        models: [
          { name: 'Stainless Steel & Tempered Glass - Cake Display', id: 'FSCDG' }
        ]
      },
      {
        name: 'Sweet Display Counter',
        slug: 'sweet-display-counter',
        models: [
          { name: 'Stainless Steel & Tempered Glass - Sweet Display Counter', id: 'FSSDCG' }
        ]
      }
    ]
  },
  {
    name: 'Super Market Refrigeration',
    slug: 'super-market-refrigeration',
    description: 'High-visibility multi-deck cooling solutions specifically built for modern retail environments.',
    products: [
      {
        name: 'Super Market Refrigeration',
        slug: 'super-market-refrigeration',
        models: [
          { name: 'Multi Deck Chillers and Freezers', id: 'MD-CF-Series' }
        ]
      }
    ]
  },
  {
    name: 'Cold Room',
    slug: 'cold-room',
    description: 'Customizable, large-scale modular cold room infrastructures for bulk storage.',
    products: [
      {
        name: 'Walk In Cooler',
        slug: 'walk-in-cooler',
        models: [
          { name: 'Walk In Cooler', id: 'FWIC' }
        ]
      },
      {
        name: 'Walk In Freezer',
        slug: 'walk-in-freezer',
        models: [
          { name: 'Walk In Freezer', id: 'FWIF' }
        ]
      }
    ]
  }
];
