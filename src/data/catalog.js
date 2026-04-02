export const catalog = [
  {
    name: 'Commercial Refrigeration',
    slug: 'commercial-refrigeration',
    description: 'Explore our comprehensive range of commercial cooling solutions designed for high performance and durability.',
    products: [
      {
        name: 'Hard Top Chest Freezer',
        slug: 'hard-top-chest-freezer',
        image: '/new product images/commercial-refrigeration/hard-top-chest-freezer.jpg',
        pageData: {
          description: "Introducing the Froven Innovations Hard Top Chest Freezer — a durable, high-capacity deep-freezing solution built for powerful cooling and long-term reliability. Designed for commercial and home use, it offers fast cooling, superior insulation, and energy-efficient performance, ensuring your stored items stay fresh and protected. Built with a robust hard-top lid, it guarantees excellent temperature retention. A perfect choice for businesses and households that demand dependable freezing every day.",
          features: [
            { icon: 'fas fa-leaf', text: 'Eco-Friendly Refrigerant' },
            { icon: 'fas fa-bolt', text: 'Low Power Consumption' },
            { icon: 'fas fa-door-open', text: 'Hinge Door' },
            { icon: 'fas fa-lock', text: 'Door Lock' },
            { icon: 'fas fa-truck-monster', text: 'Durable Castors (Wheels)' },
            { icon: 'fas fa-temperature-high', text: 'Tropicalized @ 50°C' }
          ],
          table: {
            headers: ['Model Number', 'FHF120SD', 'FHF240SD', 'FHF330SD', 'FHTF330DD', 'FHF420DD', 'FHF540DD'],
            rows: [
              ['Capacity (Litres)', '100', '200', '300', '300', '400', '500'],
              ['Refrigerant Used', 'R134a', '-', '-', '-', '-', '-'],
              ['External Dimension in mm (WxDxH)', '554 x 576 x 832', '815 x 720 x 825', '1105 x 720 x 845', '1105 x 720 x 845', '1395 x 720 x 845', '1685 x 720 x 845'],
              ['Packaging Dimension in mm (WxDxH)', '-', '885 x 760 x 900', '1175 x 760 x 900', '1175 x 760 x 900', '1465 x 760 x 900', '1755 x 760 x 900'],
              ['Baskets', '1', '1', '1', '1', '2', '2'],
              ['No Of Doors', '1', '1', '1', '2', '2', '2'],
              ['Temperature Range - °C', '8 ~ -25', '+5°C to -27°C', '+5°C to -27°C', '+5°C to -27°C', '+5°C to -27°C', '+5°C to -27°C'],
              ['Door Type', 'Solid', '-', '-', '-', '-', '-'],
              ['Compressor Type', 'ZEL', '-', '-', '-', '-', '-'],
              ['Ambient Temperature', '32 Deg C', '-', '-', '-', '-', '-'],
              ['Castors (Wheels)', 'Yes', 'Yes', 'Yes', 'Yes', 'Yes', 'Yes'],
              ['Lock & Key / Door Lock', 'Yes', 'Yes', 'Yes', 'Yes', 'Yes', 'Yes']
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
        image: '/new product images/commercial-refrigeration/glass-top-chest-freezer.jpg',
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
            headers: ['Model Number', 'FGF120F', 'FGF230F', 'FGF330F', 'FGF420F', 'FGF540F'],
            rows: [
              ['Capacity (Litres)', '100', '225', '325', '425', '525'],
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
        image: '/new visicooler images/Gemini_Generated_Image_1eqfbw1eqfbw1eqf.png',
        images: [
          '/new visicooler images/Gemini_Generated_Image_1eqfbw1eqfbw1eqf.png',
          '/new visicooler images/Gemini_Generated_Image_4qsv8q4qsv8q4qsv.png',
          '/new visicooler images/Whisk_11eafbc606cd41e87464333b3f623bd6dr.png',
          '/new visicooler images/Whisk_aa2046b18cdd7de9ad142bb5fde688ffdr.png'
        ],
        pageData: {
          description: "Froven Innovations Visi Coolers are designed to deliver superior product visibility, reliable cooling performance, and energy efficiency — all in one sleek package. Built with advanced refrigeration technology and modern design aesthetics, Froven coolers ensure that your beverages and perishables stay perfectly chilled while attracting customer attention through crystal-clear visibility and bright LED illumination. Whether for retail outlets, supermarkets, restaurants, or beverage brands, Froven Innovations Visi Coolers combine durability, style, and performance to enhance your product presentation and boost sales With a range of capacities and custom branding options, Froven Innovations stands as a trusted partner for businesses that demand quality and reliability.",
          features: [
            { icon: 'far fa-lightbulb', text: 'LED Lighting – Bright and long' },
            { icon: 'fas fa-palette', text: 'Custom Branding Space' },
            { icon: 'fas fa-door-closed', text: 'Double Vacuum Glass Door' },
            { icon: 'fas fa-leaf', text: 'Eco-Friendly Refrigerant' },
            { icon: 'fas fa-bars', text: 'Adjustable Shelves' },
            { icon: 'fas fa-bolt', text: 'Low Power Consumption' }
          ],
          table: {
            headers: ['Model (Without Canopy)', 'FVC240SD', 'FVC330SD', 'FVC420SD', 'FVC540SD', 'FVC730DD', 'FVC1050DD'],
            rows: [
              ['Model (With Canopy)', 'FVC240SDC', 'FVC330SDC', 'FVC420SDC', 'FVC540SDC', 'FVC730DDC', 'FVC1050DDC'],
              ['Capacity (Litres)', '200', '300', '400', '500', '700', '1000'],
              ['External Dimensions (WxDxH)', '530 x 510 x 1570', '583 x 684 x 1660', '583 x 684 x 1991', '643 x 684 x 1991', '950 x 684 x 1991', '1100 x 752 x 1991'],
              ['Internal Dimensions (WxDxH)', '454 x 410 x 1170', '495 x 536 x 1250', '495 x 536 x 1580', '555 x 536 x 1580', '867 x 537 x 1580', '1050 x 605 x 1580'],
              ['Shelves', '4', '4', '5', '5', '10', '10'],
              ['No Of Glass Doors', '1', '1', '1', '1', '2', '2'],
              ['Temperature Range', '2°C to 8°C', '2°C to 8°C', '2°C to 8°C', '2°C to 8°C', '2°C to 8°C', '2°C to 8°C'],
              ['Castors Wheels', 'Uni direction roller wheels without brake', 'Uni direction roller wheels without brake', 'Uni direction roller wheels without brake', 'Uni direction roller wheels without brake', 'Uni direction roller wheels without brake', 'Uni direction roller wheels without brake'],
              ['Lock', 'Pad Lock', 'Pad Lock', 'Pad Lock', 'Pad Lock', 'Pad Lock', 'Pad Lock']
            ]
          }
        },
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
        image: '/new product images/commercial-refrigeration/vertical-freezer.jpg',
        pageData: {
          description: "The Froven Innovations Vertical Freezer is a high-performance upright storage solution designed for commercial environments that demand absolute reliability and space efficiency. With a substantial 516-liter capacity and a powerful 641-watt cooling system, it provides consistent deep-freezing for ice creams, biologicals, and frozen foods. Its sleek vertical footprint makes it an ideal choice for busy kitchens, biotech labs, and retail spaces where floor space is at a premium.",
          features: [
            { icon: 'fas fa-thermometer-low', text: 'Steady Temp Range: Maintains consistent -18°C to -15°C for reliable food safety.' },
            { icon: 'fas fa-bolt', text: 'Powerful 641W System: High-performance cooling for rapid pull-down and recovery.' },
            { icon: 'fas fa-box', text: 'Massive 516L Capacity: Optimized internal volume for bulk professional storage.' },
            { icon: 'fas fa-ruler-combined', text: 'Space-Saving Verticality: Slim 680x760mm footprint with 1995mm height.' },
            { icon: 'fas fa-layer-group', text: 'Adjustable Heavy-Duty Shelves: Versatile storage configurations built for high loads.' },
            { icon: 'fas fa-shield-alt', text: 'Tough Commercial Build: Durable exterior and high-density insulation for maximum efficiency.' }
          ],
          table: {
            headers: ['Specifications', 'FVF342SD', 'FVF460SD', 'FVF516SD'],
            rows: [
              ['External Dimensions (WxDxH)', '680 x 760 x 1995 mm', '680 x 760 x 1995 mm', '680 x 760 x 1995 mm'],
              ['Gross Capacity', '342 Litres', '460 Litres', '516 Litres'],
              ['Rated Power input', '641 Watts', '641 Watts', '641 Watts'],
              ['Temperature Range', '-18°C to -15°C', '-18°C to -15°C', '-18°C to -15°C'],
              ['Cabinet Type', 'Vertical / Upright', 'Vertical / Upright', 'Vertical / Upright'],
              ['No. of Shelves', '04 Nos', '04 Nos', '04 Nos'],
              ['Cooling Type', 'Ventilated', 'Ventilated', 'Ventilated'],
              ['Refrigerant', 'CFC-Free', 'CFC-Free', 'CFC-Free'],
              ['Lock & Key', 'Yes', 'Yes', 'Yes']
            ]
          }
        },
        models: [
          { name: 'Vertical Freezer - 516 ltrs Single Door', id: 'FVF516SD' },
          { name: 'Vertical Freezer - 342 ltrs Single Door', id: 'FVF342SD' },
          { name: 'Vertical Freezer - 460 ltrs Single Door', id: 'FVF460SD' }
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
        image: '/new product images/horeca/minibar.jpg',
        pageData: {
          description: "Froven Innovations Mini Bars are compact, efficient, and elegantly designed cooling solutions—perfect for hotels, offices, guest rooms, and personal spaces. Built with advanced cooling technology, they deliver silent operation, low power consumption, and reliable performance. Engineered for convenience and style, Froven Innovations Mini Bars offer optimal temperature control, adjustable shelves, and sleek interiors to store beverages and snacks in the ideal condition. With their energy-efficient design and eco-friendly refrigerants, they provide both comfort and sustainability in every environment. Whether for hospitality, corporate, or home use, Froven Innovations Mini Bars combine functionality and sophistication to enhance user experience and add a touch of modern luxury.",
          features: [
            { icon: 'fas fa-leaf', text: 'Eco-Friendly Refrigerant' },
            { icon: 'fas fa-thermometer-half', text: 'Exact Temperature Regulation' },
            { icon: 'fas fa-pencil-ruler', text: 'Contemporary Design' },
            { icon: 'fas fa-door-open', text: 'Multiple Door Options' },
            { icon: 'fas fa-bars', text: 'Adjustable Storage' },
            { icon: 'fas fa-tools', text: 'Low Maintenance' }
          ],
          table: {
            headers: ['Model Number', 'FMB50H (Solid)', 'FMB50G (Glass)', 'FMB100H (Solid)'],
            rows: [
              ['Capacity (Litres)', '46', '46', '96'],
              ['External Dimensions in mm (WxDxH)', '450 x 470 x 500', '450 x 460 x 500', '450 x 490 x 825'],
              ['Internal Dimensions in mm (WxDxH)', '384 x 380 x 214', '384 x 380 x 214', '372 x 378 x 480'],
              ['Shelves', '1', '1', '3'],
              ['No Of Doors/Type', '1/HD', '1/GD', '1/HD'],
              ['Temperature Range (°C)', '2°C to 8°C', '2°C to 8°C', '2°C to 8°C'],
              ['Ice Box', 'Yes', 'NA', 'Yes']
            ]
          }
        },
        models: [
          { name: 'Minibar 46 L Glass Door', id: 'FMB50G' },
          { name: 'Minibar 46 L Hard Door', id: 'FMB50H' },
          { name: 'Minibar 96 L Hard Door', id: 'FMB100H' }
        ]
      },
      {
        name: 'Water Dispenser',
        slug: 'water-dispenser',
        image: '/new product images/horeca/water-dispenser.jpg',
        pageData: {
          description: "Froven Innovations Hot & Cold Water Dispensers are crafted to deliver more than just water — they bring hygiene, comfort, efficiency, and elegance into every space. Designed with advanced technology, they instantly provide hot, cold, and room temperature water, ensuring convenience for diverse needs throughout the day.",
          features: [
            { icon: 'fas fa-thermometer-three-quarters', text: 'Multi-Temperature Options' },
            { icon: 'fas fa-cube', text: 'Refrigerated Cabinet' },
            { icon: 'fas fa-bolt', text: 'Durability & Energy Efficiency' },
            { icon: 'fas fa-smile', text: 'User-Friendly' },
            { icon: 'fas fa-lock', text: 'Child Lock' },
            { icon: 'fas fa-shield-alt', text: 'Hygiene Assured' }
          ],
          table: {
            headers: ['Model Details', 'Table Top (FWDTT)', 'Floor Standing with Storage (FWDSC)', 'Floor Standing with Cooling (FWDCC)'],
            rows: [
              ['No Of Taps', '3', '3', '3'],
              ['External Dimension (WxDxH) (MM)', '352 x 350 x 500', '313 x 350 x 946', '352 x 335 x 990'],
              ['Packed Dimension (WxDxH) (MM)', '352 x 380 x 552', '352 x 380 x 990', '352 x 380 x 990'],
              ['Water Cooling Capacity', '3 Lit / hr', '3 Lit / hr', '3 Lit / hr'],
              ['Water Heating Capacity', '5 Lit /hr', '5 Lit /hr', '5 Lit /hr'],
              ['Tap Distribution', 'Hot/ Normal/ Cold', 'Hot/ Normal/ Cold', 'Hot/ Normal/ Cold'],
              ['Cold Storage Capacity', '3.2 Lit', '3.2 Lit', '3.2 Lit'],
              ['Hot Storage Capacity', '1 Lit', '1 Lit', '1 Lit'],
              ['Bottom Compartment', 'NA', 'Only Storage', 'Refrigerated']
            ]
          }
        },
        models: [
          { name: 'Water Dispenser (Floor Standing with Cooling cabinet)', id: 'FWDCC' },
          { name: 'Water Dispenser (Floor Standing with Storage cabinet)', id: 'FWDSC' },
          { name: 'Water Dispenser (Table Top)', id: 'FWDTT' }
        ]
      },
      {
        name: 'Blast Chillers / Freezers',
        slug: 'blast-chillers-freezers',
        image: '/new product images/horeca/blast-freezer.jpg',
        pageData: {
          description: "Froven Innovations Blast Freezer is a high-performance rapid-freezing solution designed to preserve the freshness, texture, and nutritional quality of food products. Using powerful forced-air cooling technology, it quickly reduces the temperature of cooked or raw items, minimizing bacterial growth and extending shelf life. Built with durable stainless-steel construction and advanced digital controls, the Blast Freezer ensures precise temperature management and consistent performance. It is an essential appliance for commercial kitchens, bakeries, hotels, and food production units that require fast, safe, and efficient deep freezing.",
          features: [
            { icon: 'fas fa-shield-alt', text: 'Insulation: 120 mm polyurethane foam' },
            { icon: 'fas fa-check-circle', text: 'Stainless Steel 304 Construction' },
            { icon: 'fas fa-virus-slash', text: 'Prevent bacterial growth' },
            { icon: 'fas fa-snowflake', text: 'Empty cabinet reaches -45°C in 30 minutes' },
            { icon: 'fas fa-atom', text: 'Preserves original molecule structure' },
            { icon: 'fas fa-tools', text: 'Copper Tubing for Condenser' },
            { icon: 'fas fa-temperature-low', text: '4°C in 90 min / -18°C in 240 min' }
          ],
          table: {
            headers: ['Model (Tray Capacity)', 'FBCF5T (5 Tray)', 'FBCF10T (10 Tray)', 'FBCF15T (15 Tray)'],
            rows: [
              ['Description', 'Blast Freezer/Chiller', 'Blast Freezer/Chiller', 'Blast Freezer/Chiller'],
              ['Dimension W x D x H (mm)', '800 x 860 x 1360', '800 x 860 x 1660', '800 x 860 x 1960'],
              ['Operating Temperature', '-45°C', '-45°C', '-45°C'],
              ['GN Tray 1/1', '5 Tray', '10 Tray', '15 Tray'],
              ['Power Supply', '220 V / 50 Hz', '220 V / 50 Hz', '220 V / 50 Hz'],
              ['Cooling Mode', 'Ventilated', 'Ventilated', 'Ventilated']
            ]
          }
        },
        models: [
          { name: 'Blast Chillers / Freezers (5 Tray)', id: 'FBCF5T' },
          { name: 'Blast Chillers / Freezers (10 Tray)', id: 'FBCF10T' },
          { name: 'Blast Chillers / Freezers (15 Tray)', id: 'FBCF15T' }
        ]
      },
      {
        name: 'Back Bar',
        slug: 'back-bar',
        image: '/new product images/horeca/backbar.jpg',
        pageData: {
          description: "Froven Innovations Back Bars are designed for elegant display and efficient cooling of beverages in bars, restaurants, and hotels. Featuring high-performance refrigeration with rapid temperature recovery, these units ensure drinks remain perfectly chilled even during peak hours. With stylish glass doors, LED illumination, and a compact yet durable stainless-steel design, they offer both visual appeal and dependable performance—ideal for professional hospitality environments.",
          features: [
            { icon: 'fas fa-layer-group', text: 'Double layers tempered glass' },
            { icon: 'fas fa-thermometer-half', text: 'Digital Thermostat' },
            { icon: 'fas fa-door-closed', text: 'Self-Closing Door' },
            { icon: 'far fa-lightbulb', text: 'Internal LED Light' },
            { icon: 'fas fa-fan', text: 'Fan assisted cooling' },
            { icon: 'fas fa-lock', text: 'Lock' },
            { icon: 'fas fa-bars', text: '2 adjustable shelves per door' },
            { icon: 'fas fa-microchip', text: 'Digital Controller ensures precise temperature' }
          ],
          table: {
            headers: ['Model Number', 'FBB2D (2 Door)', 'FBB3D (3 Door)'],
            rows: [
              ['Description', '2 Door Back Bar', '3 Door Back Bar'],
              ['Dimension W x D x H (mm)', '920 x 515 x 905', '1350 x 515 x 905'],
              ['Temperature', '2°C ~ 8°C', '2°C ~ 8°C'],
              ['Capacity (Litre)', '208', '330'],
              ['Type Of Cooling', 'Static'],
              ['No Of Shelves', '4', '6'],
              ['Door Type', 'Glass Door', 'Glass Door']
            ]
          }
        },
        models: [
          { name: 'Back Bar with 2 Glass Doors', id: 'FBB2D' },
          { name: 'Back Bar with 3 Glass Doors', id: 'FBB3D' }
        ]
      },
      {
        name: 'Wine cooler',
        slug: 'wine-cooler',
        image: '/new product images/horeca/wine-cooler.jpg',
        pageData: {
          description: "Froven Innovations Wine Chiller is a premium temperature-controlled storage unit designed to preserve the flavor, aroma, and quality of wines. Engineered with precise cooling technology, it maintains the ideal serving and aging temperature for both red and white varieties. Its sleek stainless-steel design, adjustable shelving, and low-vibration operation protect the wine's natural character while offering an elegant display. Perfect for homes, restaurants, bars, and lounges, the Wine Chiller ensures every bottle is stored in optimal conditions for a perfect pour every time.",
          features: [
            { icon: 'fas fa-layer-group', text: 'Double layers tempered glass' },
            { icon: 'fas fa-thermometer-half', text: 'Dual temperature zone for red & white wine storage' },
            { icon: 'fas fa-border-all', text: 'Elegant door frame' },
            { icon: 'far fa-lightbulb', text: 'Blue LED light' },
            { icon: 'fas fa-snowflake', text: 'No Frost' },
            { icon: 'fas fa-lock', text: 'Lock' },
            { icon: 'fas fa-align-justify', text: 'Pull out Beech Wood Shelves' },
            { icon: 'fas fa-desktop', text: 'Actual & set temperature display (Dual)' }
          ],
          table: {
            headers: ['Model Details', 'FWC12B (12 Bottle)', 'FWC40B (40 Bottle)', 'FWC126B (126 Bottle)'],
            rows: [
              ['Volume', '38 L', '113 L', '291 L'],
              ['Dimension W x D x H (mm)', '530 x 395 x 515', '573 x 595 x 820', '630 x 595 x 1585'],
              ['Capacity (750 ml Bottle)', '12', '40', '126'],
              ['Temperature Range', '5°C ~ 22°C', '5°C ~ 12°C / 12°C ~ 22°C', '5°C ~ 12°C / 12°C ~ 22°C'],
              ['No Of Shelves', '3', '5', '7']
            ]
          }
        },
        models: [
          { name: 'Black with SS Door/ 12 Std Bottles', id: 'FWC12B' },
          { name: 'Black with SS Door/ 40 Std Bottles', id: 'FWC40B' },
          { name: 'Black with SS Door/ 126 Std Bottles', id: 'FWC126B' }
        ]
      },
      {
        name: 'Water Cooler',
        slug: 'water-cooler',
        image: '/new product images/horeca/water-cooler.jpg',
        pageData: {
          description: "Keep yourself cool and hydrated with our heavy-duty and dependable Water Coolers which is designed to provide uninterrupted chilled water in high-demanding conditions. Whether you have a restaurant, school, office, hospital, factory or any commercial establishment, our water coolers are designed for efficiency, hygiene and long-term performance.",
          features: [
            { icon: 'fas fa-shield-alt', text: 'Sturdy Stainless Steel Body: High-quality SS material for excellent durability, corrosion resistance, and hygiene.' },
            { icon: 'fas fa-snowflake', text: 'Quick Cooling System: Fitted with a robust refrigeration unit to cool water rapidly even in hot conditions.' },
            { icon: 'fas fa-users', text: 'Ergonomic Design: Simple-to-use taps and design provide easy access for users of all age groups.' },
            { icon: 'fas fa-leaf', text: 'Energy Efficient: Manufactured to provide maximum cooling performance using minimal power input.' },
            { icon: 'fas fa-hand-sparkles', text: 'Low Maintenance: Smooth SS finish makes cleaning effortless while ensuring minimal wear and tear.' }
          ],
          table: {
            headers: ['Specifications', 'FSWC20', 'FSWC40', 'FSWC60'],
            rows: [
              ['Description', 'Water Cooler - 20 Ltrs', 'Water Cooler - 40 Ltrs', 'Water Cooler - 60 Ltrs'],
              ['Material', 'Stainless Steel', 'Stainless Steel', 'Stainless Steel'],
              ['Cooling Capacity (Ltrs/Hr)', '20', '40', '60'],
              ['Storage Capacity (Ltrs)', '20', '40', '60'],
              ['No. of Taps', '1', '1', '2'],
              ['Refrigerant', 'R-134a', 'R-134a', 'R-134a'],
              ['Power Supply', '230V / 50Hz / 1 Ph', '230V / 50Hz / 1 Ph', '230V / 50Hz / 1 Ph']
            ]
          }
        },
        models: [
          { name: 'Stainlesssteel Water Cooler - 20 Ltrs', id: 'FSWC20' },
          { name: 'Stainlesssteel Water Cooler - 40 Ltrs', id: 'FSWC40' },
          { name: 'Stainlesssteel Water Cooler - 60 Ltrs', id: 'FSWC60' }
        ]
      },
      {
        name: 'Ice Machine',
        slug: 'ice-machine',
        image: '/new product images/horeca/ice-machine.jpg',
        pageData: {
          description: "Froven Innovations Ice Machines are engineered to deliver a consistent supply of clean, crystal-clear ice for hotels, restaurants, hospitals, and laboratories. Featuring advanced refrigeration technology and stainless-steel construction, they ensure hygiene, durability, and energy-efficient performance. Designed for continuous operation, these machines produce ice rapidly while maintaining low noise and easy maintenance—making them a reliable choice for both commercial and healthcare environments.",
          features: [
            { icon: 'fas fa-bolt', text: 'Low Energy Consumption to reduce operating cost' },
            { icon: 'fas fa-tint', text: 'Low Water Consumption without compromising performance' },
            { icon: 'fas fa-wind', text: 'Air – Cooled system for consistent operation in varied environments' },
            { icon: 'fas fa-hand-pointer', text: 'Easy to use interface for monitoring & adjustments' },
            { icon: 'fas fa-snowflake', text: 'Vertical Evaporator for reliable ice formation' }
          ],
          table: {
            headers: ['Model Number', 'FIM36KG', 'FIM55KGBW', 'FIM191KG', 'FIM318KG', 'FIM455KG', 'FIM909KG'],
            rows: [
              ['Rated Capacity (Kg/24 hrs)', '36', '55', '191', '318', '455', '909'],
              ['Compatible Bin Model', 'In-built', 'In-built', 'B 275', 'Available Separately', 'B-375', 'Available Separately'],
              ['Bin Size (Kg)', '15', '18', '125', 'Separate Bins', '170', '350'],
              ['Dimensions WxDxH (mm)', '500 x 450 x 800', '500 x 590 x 850', '560 x 830 x 1718', '760 x 830 x 1718', '760 x 830 x 1718', '1227 x 973 x 2048'],
              ['Power Consumption / 24 hrs', '310W', '360W', '1100W', '1420W', '2300W', '3800W'],
              ['Ice Form / Cube Size (mm)', 'Dice / 22x22x22', 'Cube / 22x22x22', 'Cube / 22x22x22', 'Cube', 'Cube / 22x22x22', 'Cube / 22x22x22'],
              ['Electricals', '220V/50Hz', '220V/50Hz', '220V/1Ph/50Hz', '220V/50Hz', '220V/50Hz', '220V/50Hz']
            ]
          }
        },
        models: [
          { name: 'ICE FLAKERS MACHINE 36 KG/24HRS CAPACITY', id: 'FIM36KG' },
          { name: 'ICE FLAKERS MACHINE 55 KG/24HRS CAPACITY', id: 'FIM55KGBW' },
          { name: 'ICE FLAKERS MACHINE 191 KG/24HRS CAPACITY', id: 'FIM191KG' },
          { name: 'ICE FLAKERS MACHINE 318 KG/24HRS CAPACITY', id: 'FIM318KG' },
          { name: 'ICE FLAKERS MACHINE 455 KG/24HRS CAPACITY', id: 'FIM455KG' },
          { name: 'ICE FLAKERS MACHINE 909 KG/24HRS CAPACITY', id: 'FIM909KG' }
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
        image: '/new product images/LAB/ult-deep-freezer-86c-vertical.jpg',
        pageData: {
          description: "Ultra Low Temperature (-86°C) Deep Freezer is engineered for the critical preservation of high-value biological specimens, including vaccines, plasma, and cell cultures. Its precision-controlled refrigeration, robust insulation, and advanced safety systems ensure ultra-stable temperatures—even under extreme ambient conditions making it a trusted solution in biomedical research, pharmaceutical, and clinical applications.",
          features: [
            { icon: 'fas fa-thermometer-half', text: 'ULT Stability (–50°C to –86°C): Ensures safe long-term storage for sensitive biological materials.' },
            { icon: 'fas fa-snowflake', text: 'Advanced Refrigeration System: High efficiency, CFC-free compression cycle.' },
            { icon: 'fas fa-door-closed', text: 'Triple Seal Door Design: Robust multi-point sealing for superior insulation.' },
            { icon: 'fas fa-desktop', text: 'Smart Control Interface: Touchscreen programming with secure access and alarms.' },
            { icon: 'fas fa-plug', text: 'Optional Power Backup Support: Protects samples during power outages.' },
            { icon: 'fas fa-shield-alt', text: 'Comprehensive Safety Mechanisms: Fire resistance and pressure control.' }
          ],
          table: {
            headers: ['Specifications', 'Values'],
            rows: [
              ['Model Number', 'FUDF-86V'],
              ['Cabinet Type', 'Vertical / Upright'],
              ['Exterior Cabinet', 'Corrosion resistance CRCA/GI powder coated steel'],
              ['Inner Cabinet', 'High grade corrosion-resistant SS 304 (Stainless Steel)'],
              ['Insulation Material', 'CFC-free vacuum insulation panels for prevent temperature loss'],
              ['Insulation Thickness', 'Cabinet: 127 mm | Door: 115 mm'],
              ['Castors Wheels', 'Four castor wheels (two lockable and two unlockable)'],
              ['Ground Clearance', '100 mm'],
              ['Door', 'Single or double (optional) door with a handle and latch assembly, featuring a standard key lock and a provision for a padlock'],
              ['Compressor', 'Two two-stage cascade hermetically sealed compressors'],
              ['Refrigerants', 'CFC Free-HCFC Free non-flammable green refrigerants.'],
              ['Condensing', 'Skin condensing with inner and air-cooled grooved aluminum fins.'],
              ['Temperature Range', '-50°C to -86°C adjustable with accuracy of +0.1°C'],
              ['Temperature Uniformity', '±2°C'],
              ['Pull-down Time', '5.5 hours'],
              ['Warm-up Time', '-86°C to -40°C in 5 hours (when freezer is empty)'],
              ['Hold-over Time', '5 to 8 hours in case of power failure.'],
              ['Environmental Condition', 'Up to +45°C with Humidity 5% to 95% RH'],
              ['Temperature Monitoring System', 'IoT (Cloud Management) supported (optional) with a 7-day inkless chart recorder (optional).'],
              ['Audio & Visual Alarms System', 'Settable over and under-temperature alarms, sudden power failure, system failure, door open alert, low battery, overload, overheating, overcurrent, blocked filter, and filter cleaning fault notifications.'],
              ['Battery Backup', '24/48/72-hour backup for temperature display, security lock, alarm system, and temperature chart recorder'],
              ['Noise Level', '<55dBA'],
              ['Power Protection', 'MCB protection against electrical overloads and short circuits'],
              ['Power Supply', '220-240V AC, 50 Hz Single Phase AC Power Supply']
            ]
          }
        },
        models: [
          { name: 'ULT Deep Freezer -86 °C Vertical', id: 'FUDF-86V' }
        ]
      },
      {
        name: 'Deep Freezer -40 °C Horizontal',
        slug: 'deep-freezer-40c-horizontal',
        image: '/new product images/LAB/deep-freezer-40c-horizontal.jpg',
        pageData: {
          description: "-40°C Deep Freezer is purpose-built for secure storage of temperature-sensitive biological materials, including stem cells, plasma, and viruses. Designed for reliability, efficiency, and compliance, it delivers stable sub-zero performance with a robust, corrosion-resistant build and advanced temperature recovery technology, ideal for healthcare, diagnostics, and biotech environments.",
          features: [
            { icon: 'fas fa-thermometer-low', text: 'Precise Cooling Range (–10°C to –40°C): Maintains consistent temperatures for safe biological storage.' },
            { icon: 'fas fa-snowflake', text: 'Advanced Refrigeration System: CFC-free compression cycle and insulation for an eco-friendly solution.' },
            { icon: 'fas fa-shield-alt', text: 'Superior Build & Durability: 99.97% pure copper tubing enhances performance and longevity.' },
            { icon: 'fas fa-microchip', text: 'Smart Temperature Monitoring: Real-time data storage and transfer to PC for compliance analysis.' },
            { icon: 'fas fa-user-check', text: 'Enhanced User Convenience: Auto door closure, anti-condensation hotline, and easy defrosting.' },
            { icon: 'fas fa-award', text: 'Compliance & Longevity: CE certified and built for a minimum 10-year lifespan with global safety standards.' }
          ],
          table: {
            headers: ['Specifications', 'Values'],
            rows: [
              ['Model Number', 'FDF-40H'],
              ['Make', 'Froven Innovations'],
              ['Type of Cabinet', 'Horizontal/Chest'],
              ['Color', 'White'],
              ['Outer Material', 'Corrosion resistance CRCA/GI powder steel (18swg)'],
              ['Inner Material', 'Stainless Steel 304'],
              ['PUFF Insulation (Cabinet / Door)', '127 mm / 115 mm'],
              ['Ground Clearance', '100 mm (Castor wheels, 2 Lockable)'],
              ['Door Details', 'Solid door with Lock-Key, handle and Inner Door'],
              ['Baskets', '02 - 04 Nos.'],
              ['Compressor Type', 'Hermetically sealed'],
              ['Refrigerants', 'CFC-HCFC-Free (R 404)'],
              ['Condensing', 'Skin condensing / forced air circulation'],
              ['Pull down time', '04 Hours'],
              ['Temperature uniformity', '±3˚C or Less'],
              ['Environmental Condition', 'Maximum +45°C with Humidity 5% to 95% RH'],
              ['Control System', 'Programmable microprocessor (Eye level panel)'],
              ['Temperature Monitoring', 'IOT Supported (Optional) | 7 days Chart Recorder (Optional)'],
              ['Display', '7” Touch Screen Digital Display'],
              ['Alarms', 'Audible and visual (Temp, Power, System, Door, Battery)'],
              ['Battery Backup', '74 Hrs for Display, Alarms, and Recording'],
              ['Access port', 'LN2/CO2 Backup provision'],
              ['Noise level', '<55 db'],
              ['Power Consumption (Stable / Cool Down)', '2.040 kWh/24Hrs / 2.30kWh/24Hrs'],
              ['Power supply', '100 to 290 VAC, 50 Hz +10%']
            ]
          }
        },
        models: [
          { name: 'Deep Freezer -40 °C Horizontal', id: 'FDF-40H' }
        ]
      },
      {
        name: 'Deep Freezer -25 °C Vertical',
        slug: 'deep-freezer-25c-vertical',
        image: '/new product images/LAB/deep-freezer-25c-vertical.jpg',
        pageData: {
          description: "Deep Freezer -25°C is a high-precision cold storage unit crafted for the secure preservation of sensitive biologicals, including plasma, vaccines, and lab reagents. Its robust vertical design, user-centric interface, and intelligent temperature management system make it a trusted choice for laboratories, hospitals, and biotech facilities. Built to excel in demanding conditions, it seamlessly combines technical performance, energy efficiency, and global safety compliance.",
          features: [
            { icon: 'fas fa-thermometer-half', text: 'Precision Cooling Control (–10°C to –25°C): Stable, accurate temperature range ideal for biological storage.' },
            { icon: 'fas fa-cube', text: 'Ergonomic & Durable Design: Vertical structure with stainless steel interior and powder-coated body.' },
            { icon: 'fas fa-leaf', text: 'Eco friendly Advanced Insulation: CFC-free high-density polyurethane insulation for thermal consistency.' },
            { icon: 'fas fa-desktop', text: 'Integrated Monitoring System: Digital display with alarms, event logs, and system alerts.' },
            { icon: 'fas fa-check-circle', text: 'WHO & IEC Compliant: Conforms to international standards for electrical safety and cold chain.' },
            { icon: 'fas fa-bolt', text: 'Energy efficient Compressor System: Optimized for 24/7 operation with reduced power consumption.' }
          ],
          table: {
            headers: ['Specifications', 'Values'],
            rows: [
              ['Model Number', 'FDF-25V'],
              ['Make', 'Froven Innovations'],
              ['Type of Cabinet', 'Vertical/Upright'],
              ['Color', 'White'],
              ['Outer Material', 'Corrosion resistance CRCA/GI powder steel (18swg)'],
              ['Inner Material', 'Stainless Steel 304'],
              ['PUFF Insulation (Cabinet / Door)', '127 mm / 115 mm'],
              ['Ground Clearance', '100 mm (Castor wheels, 2 Lockable)'],
              ['Door Details', 'Solid door with Lock-Key, handle and 04 Nos Inner Door'],
              ['Inner Shelves', '04 Nos'],
              ['Compressor Type', 'Hermetically sealed'],
              ['Refrigerants', 'R452A'],
              ['Condensing', 'Skin condensing / forced air circulation'],
              ['Pull down time', '04 Hours'],
              ['Temperature uniformity', '±3˚C or Less'],
              ['Environmental Condition', 'Maximum +45°C with Humidity 5% to 95% RH'],
              ['Control System', 'Programmable microprocessor (Eye level panel)'],
              ['Temperature Monitoring System', 'IOT Supported (Optional) | 7 days Chart Recorder (Optional)'],
              ['Display', '7” Touch Screen Digital Display'],
              ['Alarms', 'Audible and visual (Temp, Power, System, Clogged Filter, Door, Battery)'],
              ['Battery Backup', '74 Hrs for Display, Alarms, and recording system'],
              ['Access port', 'LN2/CO2 Backup provision'],
              ['Power Consumption (Stable / Cool Down)', '2.040 kWh/24Hrs / 2.30kWh/24Hrs'],
              ['Power supply', '100 to 290 VAC, 50 Hz +10%']
            ]
          }
        },
        models: [
          { name: 'Deep Freezer -25 °C Vertical', id: 'FDF-25V' }
        ]
      },
      {
        name: 'Ice Lined Refrigerator (Horizontal)',
        slug: 'ice-lined-refrigerator-horizontal',
        image: '/new product images/LAB/ice-lined-refrigerator-horizontal.jpg',
        pageData: {
          description: "Ice Lined Refrigerator (Horizantal) is designed to ensure precise temperature control, eliminating the risk of freezing vaccines. With energy-efficient technology, it maintains a temperature holdover of 24 hours and requires just 8 hours of daily power to operate. The high-tech energy management system and optimized refrigeration design ensure superior temperature stability, even in challenging conditions.",
          features: [
            { icon: 'fas fa-thermometer-half', text: 'Optimal Temperature Control: Maintains a consistent +2°C to +8°C range even in extreme environments.' },
            { icon: 'fas fa-bolt', text: 'Reliable Operation in Unstable Power: Continuous cooling for 24+ hours without needing standby power.' },
            { icon: 'fas fa-sun', text: 'Tropical Climate Ready: Green-based technology ensures consistent cooling in warm and humid climates.' },
            { icon: 'fas fa-droplet-slash', text: 'Anti-Condensation Hot Line: Prevents moisture buildup around the cabinet opening for hygienic storage.' },
            { icon: 'fas fa-leaf', text: 'Energy-Efficient Refrigeration: Compression cycle system minimizes power consumption while regulating temperature.' },
            { icon: 'fas fa-satellite-dish', text: 'Remote Monitoring & GPS: Real-time temperature alerts and compliance tracking via SMS/App.' }
          ],
          table: {
            headers: ['Specifications', 'FICRH'],
            rows: [
              ['Model Number', 'FICRH'],
              ['Gross Capacity', '301 L'],
              ['Net Capacity', '248 L'],
              ['Outer Dimensions (WxDxH) mm', '1100 x 600 x 800'],
              ['Inner Dimensions (WxDxH) mm', '900 x 450 x 600'],
              ['Net Weight', '115 kg'],
              ['Type of Cabinet', 'Horizontal'],
              ['Outer Body Material', 'Corrosion-resistant CRCA/GI powder steel'],
              ['Inner Chamber Material', 'Stainless Steel 304'],
              ['Insulation', 'CFC-free PUFF (Cabinet & Door: 80-100 mm)'],
              ['Ground Clearance', '100 mm'],
              ['Door', 'Ballast box-type solid door with lock-key'],
              ['Castor Wheels', '4 castor wheels (2 lockable)'],
              ['Baskets', '05 Nos.'],
              ['Compressor', 'Hermetically sealed'],
              ['Refrigerants', 'CFC-HCFC-free (R-134a)'],
              ['Temperature Sensor', 'PT 100'],
              ['Holdover time (Full Load)', '24 Hours'],
              ['Temperature Range', '+2°C to +8°C'],
              ['Temperature Uniformity', '±1°C'],
              ['Control System', 'Microprocessor-controlled'],
              ['Display', 'Digital temperature display'],
              ['Alarms', 'Audible & Visual (Over/Under Temp, Power Failure, Low Battery)'],
              ['Power Supply', '220-240V AC, 50 Hz']
            ]
          }
        },
        models: [
          { name: 'Ice Lined Refrigerator (Horizontal)', id: 'FICRH' }
        ]
      },
      {
        name: 'Ice Lined Refrigerator (Vertical)',
        slug: 'ice-lined-refrigerator-vertical',
        image: '/new product images/LAB/ice-lined-refrigerator-vertical.jpg',
        pageData: {
          description: "Ice Lined Refrigerator (Vertical) is designed to ensure precise temperature control, eliminating the risk of freezing vaccines. With energy-efficient technology, it maintains a temperature holdover of 24 hours and requires just 8 hours of daily power to operate. The high-tech energy management system and optimized refrigeration design ensure superior temperature stability, even in challenging conditions.",
          features: [
            { icon: 'fas fa-thermometer-half', text: 'Optimal Temperature Control: Maintains a consistent +2°C to +8°C range even in extreme environments from -10°C to +43°C.' },
            { icon: 'fas fa-bolt', text: 'Reliable Operation in Unstable Power Conditions: Ideal for regions with inconsistent electricity, ensuring continuous cooling without needing standby power.' },
            { icon: 'fas fa-sun', text: 'Tropical Climate Ready: Green-based technology ensures efficient and consistent cooling performance in warm and humid climates.' },
            { icon: 'fas fa-droplet-slash', text: 'Anti-Condensation Hot Line: Prevents moisture buildup around the cabinet opening, maintaining hygienic and efficient storage.' },
            { icon: 'fas fa-leaf', text: 'Energy-Efficient Refrigeration: Compression cycle cooling system delivers consistent temperature regulation while minimizing power consumption.' },
            { icon: 'fas fa-satellite-dish', text: 'Remote Temperature Monitoring & GPS Tracking: GPS system ensures 24/7 real-time temperature alerts and compliance via SMS, email, and app-based QR tracking.' }
          ],
          table: {
            headers: ['Specifications', 'FLRV'],
            rows: [
              ['Model Number', 'FLRV'],
              ['Gross Capacity (L)', '301 L'],
              ['Net Capacity', '248 L'],
              ['Outer Dimensions (W×D×H mm)', '1100 × 600 × 800'],
              ['Inner Dimensions (W×D×H mm)', '900 × 450 × 600'],
              ['Door (H×W mm)', '600 × 800'],
              ['Net Weight', '115 kg'],
              ['Type of Cabinet', 'Vertical'],
              ['Color', 'White'],
              ['Outer Body Material', 'Corrosion-resistant CRCA/GI powder-coated steel, Galvanized Steel (18 SWG)'],
              ['Inner Chamber Material', 'SS-304 / Rotomolded Rust-Free'],
              ['Insulation Material', 'CFC-free PUFF insulation'],
              ['Insulation Thickness', 'Cabinet: 80–100 mm; Door: 80–100 mm'],
              ['Ground Clearance', '100 mm'],
              ['Door Type', 'Solid door with lock & handle'],
              ['Castor Wheels', '4 (2 lockable)'],
              ['Basket', '02–05'],
              ['Compressor', 'Hermetically sealed'],
              ['Refrigerant', 'R-134a (CFC/HCFC-free, non-flammable)'],
              ['Temperature Sensor', 'PT-100 (25–50 mm above base)'],
              ['Condensing Type', 'Skin condensing + inner & air-cooled grooved aluminum fins'],
              ['Pull-Down Time', '12 hr empty'],
              ['Holdover Time (Full Load)', '24 hr'],
              ['Operating Temp. Range', '+2°C to +8°C (±0.1°C accuracy)'],
              ['Temperature Uniformity', '±1°C'],
              ['Control System', 'Microprocessor-controlled, password protected, membrane keypad'],
              ['Temperature Monitoring (Optional)', 'IoT (Cloud Managed)'],
              ['Display', '3-digit digital, 0.1°C resolution'],
              ['Alarms', 'Over/under-temp, power failure, low battery (audible/visual)'],
              ['Battery Backup', '12-hour for display, alarms & recording'],
              ['Noise Level', '<55 dB'],
              ['Power Supply', '220–240V AC, 50 Hz +22%']
            ]
          }
        },
        models: [
          { name: 'Ice Lined Refrigerator (Vertical)', id: 'FLRV' }
        ]
      },
      {
        name: 'Laboratory Refrigerator (Vertical)',
        slug: 'laboratory-refrigerator-vertical',
        image: '/new product images/LAB/laboratory-refrigerator-vertical.jpg',
        pageData: {
          description: "Laboratory Refrigerators provide reliable, uniform temperature control for safe storage of pharmaceuticals, vaccines, medicines, and other sensitive products — trusted by research labs, hospitals, and pharmaceutical industries.",
          features: [
            { icon: 'fas fa-shield-alt', text: 'Ergonomic & Secure Design: Key-locked glass door ensures visibility while preventing unauthorized access.' },
            { icon: 'fas fa-sun', text: 'Tropical Climate Ready: Operates from -10°C to +45°C, maintaining stability in diverse environments.' },
            { icon: 'fas fa-user-shield', text: 'Enhanced Safety & Security: Programmable alarms and password-protected panels prevent tampering.' },
            { icon: 'fas fa-award', text: 'Premium Build Quality: 99.97% pure copper tubing ensures exceptional durability and cooling efficiency.' },
            { icon: 'fas fa-wind', text: 'Forced-Air Cooling System: Finned evaporator ensures fast temperature recovery and frost-free performance.' },
            { icon: 'fas fa-lightbulb', text: 'Convenient Interior Lighting: Built-in lights provide clear visibility for easy inventory management.' }
          ],
          table: {
            headers: ['Specifications', 'Values'],
            rows: [
              ['Model Number', 'FLRV'],
              ['Cabinet Type', 'Vertical / Upright'],
              ['Outer Body', 'Mild steel /GI powder coated steel (18swg)'],
              ['Inner Chamber', 'Stainless Steel 304 for Durable unbreakable construct'],
              ['Insulation', 'PUFF Insulation-CFC free (Cabinet: 75mm | Door: 50mm)'],
              ['Castors Wheels', '4 castor wheels (2 Lockable and 2 un-lockable)'],
              ['Ground Clearance', '100mm'],
              ['Door', 'Glass Door with Handel and Key Lock'],
              ['Inner Door', 'Separate acrylic sheet inner door to prevent cold air loss'],
              ['Compressor', 'Hermetically sealed compressor'],
              ['Refrigerants', 'CFC-HCFC-Free non flammable R134a'],
              ['Condensing', 'Force Air Circulation'],
              ['Temperature Range', '+2°C to +8°C (Accuracy +0.1°C)'],
              ['Temperature Sensor', 'PT100'],
              ['Environmental Conditions', 'Maximum -10°C to +45°C with Humidity 5% to 95%'],
              ['Pull Down Time', '8 hrs. when refrigerator is fully loaded.'],
              ['Holdover Time', '1.5 hrs.'],
              ['Control System', 'Programmable microprocessor with membrane keypad & Password Protected'],
              ['Display', 'TFT Touch Screen Digital Temperature Display'],
              ['Alarms', 'Audible & Visual (Over-under temp, Power failure, Battery low, Door open)'],
              ['Battery Backup', '12 hrs. for Display, Alarms, and Recording system'],
              ['Monitoring System', 'Data logger and Inkless temperature chart recorder (Optional)'],
              ['Noise Level', '<55 dBA'],
              ['Power Protection', 'MCB fitted in input Power Line'],
              ['Power Supply', '220-240V AC, 50Hz single phase AC power supply'],
              ['Accessories', 'Servo Voltage Stabilizer, SS Shelves, Stem Alcohol Thermometer']
            ]
          }
        },
        models: [
          { name: 'Laboratory Refrigerator (Vertical)', id: 'FLRV' }
        ]
      },
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
        image: '/new product images/confectionery/cake-display.png',
        pageData: {
          description: "Showcase your cakes in the most sophisticated and professional manner with our Cake Display Counter, specifically tailored for bakery stores. Made of high-quality glass and engineered for performance, this counter is perfect for keeping cakes fresh while exposing them to maximum visibility.",
          features: [
            { icon: 'fas fa-eye', text: 'Premium Glass Construction: Complete glass build for maximum transparency and clear product visibility.' },
            { icon: 'fas fa-snowflake', text: 'Refrigerated Display: In-built cooling mechanism keeps cakes fresh, moist, and chilled to perfection.' },
            { icon: 'fas fa-layer-group', text: 'Large 4-Tier Display: Four solid glass shelves offer extensive space for neat and pleasing displays.' },
            { icon: 'fas fa-vector-square', text: 'Modern Rectangular Shape: Sleek design fits seamlessly into modern bakery settings.' },
            { icon: 'fas fa-bread-slice', text: 'Ideal for Bakeries: Perfect for cake boutiques, pastry corners, and dessert counters.' }
          ],
          table: {
            headers: ['Specifications', 'Values'],
            rows: [
              ['Model Number', 'FSCDG'],
              ['Usage/Application', 'Bakery Shop'],
              ['Material', 'Glass'],
              ['Counter Shape', 'Rectangular'],
              ['Number of Shelves', '4 Shelves'],
              ['Refrigeration', 'Yes (Built-in Cooling)']
            ]
          }
        },
        models: [
          { name: 'Stainless Steel & Tempered Glass - Cake Display', id: 'FSCDG' }
        ]
      },
      {
        name: 'Sweet Display Counter',
        slug: 'sweet-display-counter',
        image: '/new product images/confectionery/sweet-display-counter.png',
        pageData: {
          description: "Our Sweet Display Counters are carefully created to provide long-lasting durability, hygiene as well as appearance, so that your food showpiece is equally appealing and hygienic. Made from tempered glass and top-grade stainless steel, this counter is a robust solution to the display of your sweets and desserts in a hygienic and easy-to-access fashion. Its sleek rectangular design, spacious shelving and top-quality finish mean it is a must-have for any commercial food establishment.",
          features: [
            { icon: 'fas fa-gem', text: 'Excellent-Quality Construction: Top-of-the-line SS and tempered glass for strength, durability and cleanliness.' },
            { icon: 'fas fa-vector-square', text: 'Sleek Rectangular Design: Modern shape designed to slide quietly into any fashionable shop or café.' },
            { icon: 'fas fa-layer-group', text: 'Convenience Shelves: 3 or 4 well-spaced shelves for convenient stacked-together presentation of sweets.' },
            { icon: 'fas fa-arrows-alt-v', text: 'Ergonomic Height: At 4.5 to 5 feet, it is easily viewable by customers and accessible by staff.' },
            { icon: 'fas fa-hand-holding-heart', text: 'Easy to Clean & Maintain: Non-porous SS surface resists staining for maximum food safety and hygiene.' },
            { icon: 'fas fa-shield-alt', text: 'Rustproof & Durable: Built to withstand constant commercial use without sacrificing appearance.' }
          ],
          table: {
            headers: ['Specifications', 'Values'],
            rows: [
              ['Model Number', 'FSSDCG'],
              ['Details', 'Stainless Steel & Tempered Glass'],
              ['Application', 'Restaurant, Café, Bakery, Sweet Shop'],
              ['Shape', 'Rectangular'],
              ['Number of Shelves', '3 or 4 Shelves'],
              ['Height', '4.5 – 5 Feet'],
              ['Finish', 'Polished, Easy-to-clean Surface'],
              ['Structure', 'Welded Frame with Adjustable Shelves']
            ]
          }
        },
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
        name: 'Multi-Deck Chillers With Glass Door - Plug In',
        slug: 'multi-deck-chillers-with-glass-door-plug-in',
        image: '/new product images/super market refrigeration/multi-deck-chillers-with-glass-door-plug-in.jpg',
        pageData: {
          description: "These cabinets are designed to be a perfect fit for small, medium, and large stores. This refrigeration product reduces energy costs as it is equipped with energy-efficient technology.",
          features: [
            { icon: 'fas fa-expand-arrows-alt', text: 'Wide flexible display area.' },
            { icon: 'fas fa-columns', text: 'Designed for modular configuration.' },
            { icon: 'fas fa-snowflake', text: 'Uniform cooling to keep the food fresh for longer hours.' },
            { icon: 'fas fa-door-closed', text: 'Tempered & low emissivity glass.' },
            { icon: 'fas fa-leaf', text: 'Energy saving.' },
            { icon: 'far fa-lightbulb', text: 'LED on each shelf.' },
            { icon: 'fas fa-tag', text: 'Price holder flap on each shelf.' },
            { icon: 'fas fa-moon', text: 'Night blind.' },
            { icon: 'fas fa-ruler-horizontal', text: 'Available in different sizes (in feet): 3, 4, 6 & 8.' }
          ],
          table: {
            headers: ['Specification (All Customizable)', 'Variant 1 (Chiller 4ft)', 'Variant 2 (Chiller 6ft)', 'Variant 3 (Freezer 4ft)', 'Variant 4 (Freezer 6ft)'],
            rows: [
              ['Function', 'Chiller', 'Chiller', 'Freezer', 'Freezer'],
              ['Size in ft', '4', '6', '4', '6'],
              ['Temp Range C', '1-7', '1-70', '180', '5-18C'],
              ['Voltage/Frequency', '220-240/50 1 Phase', '220-240/50 1 Phase', '220-240/50 1 Phase', '220-240/50 1 Phase'],
              ['Refrigerant', 'R404a', 'R404a', 'R404a', 'R404a'],
              ['Price Ticket Strip', 'Yes', 'Yes', 'Yes', 'Yes'],
              ['Door', 'Self Closing', 'Self Closing', 'Self Closing', 'Self Closing'],
              ['Shelf', '5 Shelves', '5 Shelves', '5 Shelves', '5 Shelves'],
              ['Side Panel', 'Metal Foaming', 'Metal Foaming', 'Metal Foaming', 'Metal Foaming'],
              ['Light', 'Yes', 'Yes', 'Yes', 'Yes'],
              ['Temp Display', 'Digital', 'Digital', 'Digital', 'Digital'],
              ['Dimension (WxDxH) in mm', '1220x750x1930', '1830x750x1930', '1220x750x1930', '1830x750x1930'],
              ['Weight in kg', '218', '305', '213', '327']
            ]
          }
        },
        models: [
          { name: 'Customizable', id: 'customizable' }
        ]
      },
      {
        name: 'Multi-Deck Chillers Without Glass Door - Plug In',
        slug: 'multi-deck-chillers-without-glass-door-plug-in',
        image: '/new product images/super market refrigeration/multi-deck-chillers-without-glass-door-plug-in.jpg',
        pageData: {
          description: "These multi-deck chillers are designed for keeping delicate products fresh while providing customizable storage and digital temperature control.",
          features: [
            { icon: 'fas fa-door-closed', text: 'Tempered & low emissivity glass door.' },
            { icon: 'fas fa-apple-alt', text: 'Keeps delicate Fruit, Dairy and Meat products fresh for longer hours.' },
            { icon: 'fas fa-leaf', text: 'Energy saving, self closing glass doors.' },
            { icon: 'fas fa-thermometer-half', text: 'Electronic temperature control with digital display.' },
            { icon: 'fas fa-sliders-h', text: 'Customised adjustable shelves.' },
            { icon: 'fas fa-tag', text: 'Price holder flap on each shelf.' },
            { icon: 'far fa-lightbulb', text: 'LED on each shelf.' },
            { icon: 'fas fa-grip-lines-vertical', text: 'Door frame with silver handle.' },
            { icon: 'fas fa-ruler-horizontal', text: 'Available in different sizes (in feet): 2, 4 & 6.' }
          ],
          table: {
            headers: ['Specification (All Customizable)', 'Variant 1 (4ft)', 'Variant 2 (6ft)', 'Variant 3 (8ft)'],
            rows: [
              ['Function', 'Chiller', 'Chiller', 'Chiller'],
              ['Size in ft', '428', '632', '835'],
              ['Temp Range C', 'TO 10°C', 'C TO 10°C', '1 C 16 10°C'],
              ['Voltage/Frequency', '220-240/50 1 Phase', '220-240/50 1 Phase', '220-240/50 1 Phase'],
              ['Refrigerant', 'R404', 'R404a', 'R404'],
              ['Price Ticket Strip', 'Yes', 'Yes', 'Yes'],
              ['Night Blind', 'Yes', 'Yes', 'Yes'],
              ['Shelf', '4 Shelves', '4 Shelves', '4 Shelves'],
              ['Side Panel', 'Tempered Glass', 'Tempered Glass', 'Tempered Glass'],
              ['Light', 'Yes', 'Yes', 'Yes'],
              ['Temp Display', 'Digital', 'Digital', 'Digital'],
              ['Dimension (WxDxH) in mm', '1285x750x1930', '1895x750x1930', '2505x756x1930'],
              ['Weight in kg', '210', 'OLE', '395']
            ]
          }
        },
        models: [
          { name: 'Customizable', id: 'customizable' }
        ]
      },
      {
        name: 'Multi-Deck Chiller Without Glass Door - Remote',
        slug: 'multi-deck-chiller-without-glass-door-remote',
        image: '/new product images/super market refrigeration/multi-deck-chiller-without-glass-door-remote.jpg',
        pageData: {
          description: "Designed with uniform cooling capabilities to maintain the freshness of food for extended periods.",
          features: [
            { icon: 'fas fa-expand-arrows-alt', text: 'Large flexible display area.' },
            { icon: 'fas fa-columns', text: 'Designed for modular configuration.' },
            { icon: 'fas fa-thermometer-half', text: 'Electronic temperature control with digital display.' },
            { icon: 'fas fa-sliders-h', text: 'Customised adjustable shelves.' },
            { icon: 'fas fa-tag', text: 'Price holders flaps on each shelf.' },
            { icon: 'fas fa-ruler-horizontal', text: 'Available in different sizes (in feet): 3, 4, 6 & 8.' },
            { icon: 'far fa-lightbulb', text: 'LED on each shelf.' },
            { icon: 'fas fa-moon', text: 'Energy saving night blind.' }
          ],
          table: {
            headers: ['Specification (All Customizable)', 'Variant 1 (4ft)', 'Variant 2 (6ft)', 'Variant 3 (8ft)', 'Variant 4 (12ft)'],
            rows: [
              ['Function', 'Remote', 'Remote', 'Remote', 'Remote'],
              ['Size in ft', '4', '629', '833', '125'],
              ['Temp Range C', '1°C-7 C', 'C-PC', '7C', '7C'],
              ['Voltage/Frequency', '220VAC-240VAC, 50Hz', '220VAC-240VAC, 50Hz', '220VAC-240VAC, 50Hz', '220VAC-240VAC, 50Hz'],
              ['Rated Current (A)', '0.85', '1.25', '1.68', '2.41'],
              ['Rated Power (W)', '167', '275', '370', '531'],
              ['Refrigerant', 'R404a/R22', 'R404/R22', 'R22/R404a', 'R404a/R22'],
              ['Condenser Type', 'Copper', 'Copper', 'Copper', 'Copper'],
              ['Evaporator Type', 'Copper Fins', 'Copper+Fins', 'Copper Fins', 'Copper+Fins'],
              ['Cooling Type', 'Ventilated, Duct', 'Ventilated, Duct', 'Ventilated, Duct', 'Ventilated, Duct'],
              ['Price Ticket Strip', 'Yes', 'Yes', 'Yes', 'Yes'],
              ['Shelf Type', '5 shelves', '5 shelves', '5 shelves', '5 shelves'],
              ['Side Panel', 'Glass Door', 'Glass Door', 'Glass Door', 'Glass Door'],
              ['Light', 'Yes', 'Yes', 'Yes', 'Yes'],
              ['Night Blind', 'Yes', 'Yes', 'Yes', 'Yes'],
              ['Temp Display', 'Digital', 'Digital', 'Digital', 'Digital'],
              ['Colour Option', 'Multiple', 'Multiple', 'Multiple', 'Multiple'],
              ['Dimension (WxDxH) in mm', '1250x850x2050', '1875x850x2050', '2500x850x2050', '3750x850x2050'],
              ['Weight in kg', '150', '230', '300', '425']
            ]
          }
        },
        models: [
          { name: 'Customizable', id: 'customizable' }
        ]
      },
      {
        name: 'Pastry Showcase',
        slug: 'pastry-showcase',
        image: '/new product images/super market refrigeration/pastry-showcase.jpg',
        pageData: {
          description: "Froven Innovations's Pastry Showcase suits any environment without compromising on style and display area. Its unique design enhances the appearance of cookies, cakes, brownies and more items, and attracts the eyes of everyone who pass by. The showcase is also incorporated with advanced technology and comes with low emissivity tempered glass that offers greater display and a truly enviable product visibility with no frost formation on the glass.",
          features: [
            { icon: 'fas fa-eye', text: 'Tempered & low emissivity glass for unlimited visibility.' },
            { icon: 'fas fa-layer-group', text: '3 Nos: glass shelves.' },
            { icon: 'fas fa-wind', text: 'Ventilated refrigeration for uniform cooling.' },
            { icon: 'fas fa-truck-monster', text: '4 castor wheels, 2 with brakes.' },
            { icon: 'far fa-lightbulb', text: 'Brilliant LED lighting.' },
            { icon: 'fas fa-ruler-horizontal', text: 'Available in different sizes (in feet): 3, 4, 5, 6.' },
            { icon: 'fas fa-leaf', text: 'Consumes less energy.' },
            { icon: 'fas fa-gem', text: 'Elegant finish.' }
          ],
          table: {
            headers: ['Specification (All Customizable)', 'Variant 1 (3ft)', 'Variant 2 (4ft)', 'Variant 3 (5ft)', 'Variant 4 (6ft)'],
            rows: [
              ['Function', 'Chiller', 'Chiller', 'Chiller', 'Chiller'],
              ['Structure', 'Square', 'Square', 'Square', 'Square'],
              ['Size In Ft', '3', '4', '5', '6'],
              ['Temp Range', '2 C-°', 'ac', '2°C-8°C', '2°C-8°C'],
              ['Voltage/Frequency', '220VAC-240VAC, 50Hz', '220VAC-240VAC, 50Hz', '220VAC-240VAC 50Hz', '220VAC-240VAC 50Hz'],
              ['Refrigerant', 'R290', 'R290', 'R290', 'R290'],
              ['Castor Wheels', 'Yes', 'Yes', 'Yes', 'Yes'],
              ['Inner Material', 'SS201-Food Safe', 'SS201-Food Safe', 'SS201-Food Safe', 'SS201-Food Safe'],
              ['Shelf Nos.', '3', '3', '3', '3'],
              ['Side Panel', 'Tempered Glass', 'Tempered Glass', 'Tempered Glass', 'Tempered Glass'],
              ['Marble Base', 'Optional', 'Optional', 'Optional', 'Optional'],
              ['Light', 'Yes', 'Yes', 'Yes', 'Yes'],
              ['Dimension (WxDxH) In mm', '900x750x1200', '1200x750x1200', '1500x750x1200', '1800x750x1200'],
              ['Weight in Kg', '130', '167', '204', '240']
            ]
          }
        },
        models: [
          { name: 'Customizable', id: 'customizable' }
        ]
      },
      {
        name: 'Serve Over Counter',
        slug: 'serve-over-counter',
        image: '/new product images/super market refrigeration/serve-over-counter.jpg',
        pageData: {
          description: "Froven Innovations's serve over counters are versatile and perfect for the presentation of fast-moving items like dairy products, meat and fish. Its inner cabinet is made of food grade steel to preserve the food material for a longer time. It also has an LED light to enhance the look of the products and comes with different temperature settings for different storage applications. It's a fully-customised refrigerated cabinet technology that minimises the structural measures through heat recovery and reduces operating costs to a previously unachievable minimum, making these counters a sure bet to increase sales.",
          features: [
            { icon: 'fas fa-snowflake', text: 'Uniform cooling across the display area.' },
            { icon: 'fas fa-sliders-h', text: 'Adjustable temperature setting for assorted products.' },
            { icon: 'far fa-lightbulb', text: 'Interior LED lighting.' },
            { icon: 'fas fa-desktop', text: 'Electronic temperature display.' },
            { icon: 'fas fa-shield-alt', text: 'Inner cabinet made of food grade steel.' },
            { icon: 'fas fa-sync', text: 'Automatic defrost and auto stop compressor defrosting.' },
            { icon: 'fas fa-window-maximize', text: 'Canopy sliding glass.' },
            { icon: 'fas fa-wind', text: 'Ventilated refrigeration.' },
            { icon: 'fas fa-door-closed', text: 'Rear closing system with self-rolling glass.' },
            { icon: 'fas fa-ruler-horizontal', text: 'Available in different sizes (in feet): 4, 6, 8 & 12.' }
          ],
          table: {
            headers: ['Specification (All Customizable)', 'Variant 1 (4.5ft)', 'Variant 2 (12.8ft)'],
            rows: [
              ['Function', 'Chiller', 'Chiller'],
              ['Size in ft', '4.5', '12.8'],
              ['Temp Range C', '1-5C', '1-5C'],
              ['Voltage/Frequency', '220VAC-240VAC, 50Hz', '220VAC-240VAC 50Hz'],
              ['Refrigerant', 'R404', 'R404'],
              ['Cooling Type', 'Ventilated', 'Ventilated'],
              ['Glass Canopy & Support', 'Yes 4 nos', 'Yes 4 nos'],
              ['Side Panel', 'Tempered Glass', 'Tempered Glass'],
              ['Temp Display', 'Digital', 'Digital'],
              ['Dimension (WxDxH) in mm', '1350x1185x1150', '3850x1185x1150'],
              ['Weight in kg', '178', '350']
            ]
          }
        },
        models: [
          { name: 'Customizable', id: 'customizable' }
        ]
      },
      {
        name: 'Island Freezer',
        slug: 'island-freezer',
        image: '/new product images/super market refrigeration/island-freezer.jpg',
        pageData: {
          description: "Froven Innovations's Island Freezer is an ideal choice for retail applications where high-end product display is essential for better presentation, impulse buying or simply to complement the aesthetics of the interiors. In all its different arrangement variants, the Froven Innovations Island model range offers elegant styling, and thanks to its innovatively designed glass side panels, it is sure to get your customers even more in the mood to buy. With the smooth sliding lid offering the maximum view of the products inside, there's nothing to stand in the way of good sales figures.",
          features: [
            { icon: 'fas fa-window-maximize', text: 'Overhead glass cover & sliding door.' },
            { icon: 'fas fa-desktop', text: 'LED display.' },
            { icon: 'fas fa-door-open', text: 'Glass door with sliding top and bottom.' },
            { icon: 'fas fa-sliders-h', text: 'Adjustable temperature setting for different products.' },
            { icon: 'fas fa-thermometer-half', text: 'Electronic temperature control with display.' },
            { icon: 'fas fa-truck-monster', text: 'Caster wheels with locks.' },
            { icon: 'fas fa-expand-arrows-alt', text: 'Wide display area with four side tempered glass.' },
            { icon: 'fas fa-wind', text: 'Double air curtain and high cooling efficiency.' },
            { icon: 'fas fa-tools', text: 'Copper condenser and evaporator.' },
            { icon: 'fas fa-palette', text: 'Available in different colours and sizes.' }
          ],
          table: {
            headers: ['Specification (All Customizable)', 'Variant 1 (6.3ft)', 'Variant 2 (6.6ft)', 'Variant 3 (4.1ft)'],
            rows: [
              ['Function', 'Freezer', 'Freezer', 'Freezer'],
              ['Size in ft', '6.3', '6.6', '4.1'],
              ['Temp Range C', '18°C', '18°C', '18°C'],
              ['Gross capacity in Ltrs', '790', '890', '500'],
              ['Voltage/Frequency', '220VAC-240VAC 50Hz', '220VAC-240VAC, 50Hz', '220V/50Hz'],
              ['Refrigerant', 'R290', 'R290', 'R290'],
              ['Cooling Type', 'Ventilated', 'Ventilated', 'Static'],
              ['Inner Tank', 'Prepainted Steel', 'Prepainted Steel', 'Prepainted Steel'],
              ['Basket Available', 'Yes', 'Yes', 'Yes'],
              ['Caster Wheels', '5 nos', '5 nos', '4 nos'],
              ['Glass Cover Assembly', 'Curved Glass, Step Bottom', 'Curved Glass, Step Bottom', 'Low height Curved Glass'],
              ['Top Glass Sliding', 'Top-Bottom', 'Top-Bottom', 'Yes'],
              ['Light', 'Yes', 'Yes', 'Yes'],
              ['Temp Display', 'Digital', 'Digital', 'Analog'],
              ['Dimension (WxDxH) in mm', '1915x800x520', '2000x800x880', '1475x757x867'],
              ['Weight in kg', '113', '139', '95']
            ]
          }
        },
        models: [
          { name: 'Customizable', id: 'customizable' }
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
        image: '/new product images/cold room/walk-in-cooler.jpg',
        pageData: {
          description: "Froven Innovations Walk-in-Coolers are used for bulk storage of various vaccines, food, and other perishable items. These walk-ins are enclosed refrigerated storage spaces and are totally customizable according to the user's needs. They can maintain a temperature anywhere in the range of +2⁰C to +8⁰C, available in capacities such as 8CuM, 16.05CuM, 25CuM, 32CuM, and 40CuM.",
          features: [
            { icon: 'fas fa-thermometer-half', text: 'Precise Temperature Control (+2°C to +8°C): Reliable operation in diverse ambient conditions.' },
            { icon: 'fas fa-satellite-dish', text: 'Remote Monitoring System: Programmable system with real-time alerts for temperature deviations.' },
            { icon: 'fas fa-shield-alt', text: 'Stainless Steel Construction: Hygienic, corrosion-resistant SS panels with eco-friendly insulation.' },
            { icon: 'fas fa-globe', text: 'Global Standards Compliance: Fulfills USFDA, European CE, and ISO standards for medical storage.' },
            { icon: 'fas fa-bell', text: 'Built-in Safety Alarms: Acoustic alarm units complying with WHO/PQS specifications.' },
            { icon: 'fas fa-th-large', text: 'Modular & Scalable Design: Easily expandable to suit varying storage needs with minimal on-site installation.' }
          ],
          table: {
            headers: ['Specifications', 'Details'],
            rows: [
              ['Model Number', 'FWIC'],
              ['Product Type', 'Walk in Cold Room'],
              ['Storage Capacity', '5 MT'],
              ['Brand', 'Froven Innovations'],
              ['Temperature Range', '+2°C to +8°C'],
              ['Capacity (Litres)', 'Customised (8CuM, 16.05CuM, 25CuM, 32CuM, 40CuM)'],
              ['Automation Grade', 'Automatic'],
              ['Vaccine Storage Compatible', 'Yes'],
              ['Dial Thermometer', 'Vapour Pressure Dial Thermo Meter (PQS/E006/TH02 compliant)'],
              ['Shelves', 'Stainless Steel 304 (Non-corrosive, load min 0.075Kg/cm2)'],
              ['Evaporator', 'Forced Air cooling with Auto Defrosting System'],
              ['Alarm', 'Hutter Acoustic Alarm (WHO/PQS/E06/AL01-01 or E006/TR03 compliant)'],
              ['Temperature Display', 'Glow sign Temp display (EVM norms compliant)'],
              ['Door', 'Heavy duty self-closing with lock & Plastic curtains'],
              ['Chucker Plate', 'Insulated Concrete Base with checker platform'],
              ['Country of Origin', 'Made in India']
            ]
          }
        },
        models: [
          { name: 'Walk In Cooler Series', id: 'FWIC' }
        ]
      },
      {
        name: 'Walk In Freezer',
        slug: 'walk-in-freezer',
        image: '/new product images/cold room/walk-in-freezer.jpg',
        pageData: {
          description: "Froven Innovations Walk-in-Freezers are high-performance modular cold storage solution specifically engineered for sensitive biological samples, vaccines and perishables. These walk-ins are totally customizable according to the user's needs. They can maintain a stable temperature anywhere in the range of -10°C to -20°C.",
          features: [
            { icon: 'fas fa-thermometer-low', text: 'Ultra-Precise Cooling (–10°C to –20°C): Stable temperature with ±0.1°C accuracy for sensitive inventory.' },
            { icon: 'fas fa-mobile-alt', text: 'Smart IoT Monitoring System: Remote programmable interface for live tracking and alert notifications.' },
            { icon: 'fas fa-sync-alt', text: 'Dual Redundant Cooling Units: Auto-switching refrigeration ensures uninterrupted built-in backup.' },
            { icon: 'fas fa-battery-half', text: 'Power-Outage Resilience: Maintains cold chain integrity for 6–8 hours with thermal holdover.' },
            { icon: 'fas fa-globe-americas', text: 'Global Compliance Ready: Engineered to meet WHO and international cold chain safety norms.' },
            { icon: 'fas fa-tools', text: 'Rugged, Modular Construction: Weather-resistant design, operational in –10°C to +43°C ambient.' }
          ],
          table: {
            headers: ['Specifications', 'Details'],
            rows: [
              ['Model Number', 'FWIF'],
              ['Product Type', 'Walk-in Cold Room'],
              ['Storage Capacity', '5 MT'],
              ['Brand', 'Froven Innovations'],
              ['Temperature Range', '–10°C to –20°C'],
              ['Capacity (Litres)', 'Customised'],
              ['Automation Grade', 'Automatic'],
              ['Suitable for Vaccine Storage', 'Yes'],
              ['Dial Thermometer', 'Vapour Pressure Dial Thermometer (PQS/E006/TH02 compliant)'],
              ['Shelves', 'Non-corrosive 304 SS (Load capacity min. 0.075 Kg/cm²)'],
              ['Evaporator', 'Forced-air cooling evaporators with auto-defrost system'],
              ['Alarm System', 'Hutter acoustic alarm (WHO/PQS/E06/AL01-01 or E006/TR03 compliant)'],
              ['Temperature Display', 'Glow-sign temperature display (EVM norms compliant)'],
              ['Door', 'Heavy-duty, self-closing, lockable; plastic curtains on doorway'],
              ['Chucker Plate', 'Insulated concrete base with checker platform'],
              ['Country of Origin', 'Made in India']
            ]
          }
        },
        models: [
          { name: 'Walk In Freezer Series', id: 'FWIF' }
        ]
      }
    ]
  }
];
