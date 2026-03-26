'use client';

import React, { useState } from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import '../product-details.css';

// Import the category thumbnails mapping
import { productsList } from '../page';

// Using the provided reference data precisely
export const productsData = {
  'visicooler': {
    name: 'VISI COOLER',
    category: 'Commercial Refrigeration',
    breadcrumbs: ['Home', 'Commercial Cooling', 'Visi Cooler'],
    sku: 'FVC Series',
    models: [
      { id: 'fvc200g', name: 'FVC200G', image: '/products/visicooler.jpg', specs: ['217L', '530x510x1570', '4 Shelves'] },
      { id: 'fvc300g', name: 'FVC300G (300L)', image: '/products/visicooler.jpg', specs: ['345L', '583x684x1660', '5 Shelves', '1 Year Warranty'] },
      { id: 'fvc400g', name: 'FVC400G', image: '/products/visicooler.jpg', specs: ['436L', '583x684x1991', '5 Shelves'] },
      { id: 'fvc500g', name: 'FVC500G', image: '/products/visicooler.jpg', specs: ['485L', '643x684x1991', '5 Shelves'] },
      { id: 'fvc700g', name: 'FVC700G', image: '/products/visicooler.jpg', specs: ['766L', '950x684x1991', '10 Shelves'] },
      { id: 'fvc1000g', name: 'FVC1000G', image: '/products/visicooler.jpg', specs: ['998L', '1100x752x1991', '10 Shelves'] },
    ],
    images: [
      '/products/visicooler.jpg',
      '/products/visicooler.jpg',
      '/products/visicooler.jpg',
      '/products/visicooler.jpg',
      '/products/visicooler.jpg'
    ],
    features: [
      { text: 'Double pane tempered glass door', icon: 'fa-solid fa-door-open' },
      { text: 'Self-closing door mechanism', icon: 'fa-solid fa-arrow-rotate-left' },
      { text: 'Adjustable heavy-duty shelves', icon: 'fa-solid fa-layer-group' },
      { text: 'Internal LED lighting', icon: 'fa-solid fa-lightbulb' },
      { text: 'High efficiency cooling system', icon: 'fa-solid fa-snowflake' },
      { text: 'Temperature control display', icon: 'fa-solid fa-thermometer' },
      { text: 'Universal castor wheels', icon: 'fa-solid fa-circle-dot' },
      { text: 'Lockable door for security', icon: 'fa-solid fa-lock' }
    ],
    specTable: {
      columns: ['Specification', 'FVC200G', 'FVC300G', 'FVC400G', 'FVC500G', 'FVC700G', 'FVC1000G'],
      rows: [
        { label: 'Capacity (Litres)', values: ['217', '345', '436', '485', '766', '998'] },
        { label: 'External Dimensions in mm (WxDxH)', values: ['530 x 510 x 1570', '583 x 684 x 1660', '583 x 684 x 1991', '643 x 684 x 1991', '950 x 684 x 1991', '1100 x 752 x 1991'] },
        { label: 'Internal Dimensions in mm (WxDxH)', values: ['454 x 410 x 1170', '495 x 536 x 1250', '495 x 536 x 1580', '555 x 536 x 1580', '867 x 537 x 1580', '1050 x 605 x 1580'] },
        { label: 'Shelves', spans: [
          { val: '4', colSpan: 2 },
          { val: '5', colSpan: 2 },
          { val: '10', colSpan: 2 }
        ]},
        { label: 'No Of Glass Doors', spans: [
          { val: '1', colSpan: 5 },
          { val: '2', colSpan: 1 }
        ]},
        { label: 'Temperature Range', spans: [{ val: '2°C to 8°C', colSpan: 6 }] },
        { label: 'Castors Wheels', spans: [{ val: 'Uni direction roller wheels without brake', colSpan: 6 }] },
        { label: 'Lock', spans: [{ val: 'Pad Lock', colSpan: 6 }] },
        { label: 'Warranty Note', spans: [{ val: '1 Year Warranty', colSpan: 6 }] }
      ]
    },
    related: [
      { id: 7, name: 'Mini Bar', image: '/product range /minibars.png', link: '/products/minibars' },
      { id: 10, name: 'Reach-In Static', image: '/products/Reach-In Static Refrigerators .jpg', link: '/products/reach-in-static' },
      { id: 11, name: 'Under Counter Static', image: '/products/Under Counter Static Refrigerators.jpg', link: '/products/under-counter-static' },
      { id: 12, name: 'Reach-In Ventilated', image: '/products/REACH IN VENTILATED.jpg', link: '/products/reach-in-ventilated' },
      { id: 13, name: 'Under Counter Ventilated', image: '/products/Under Counter Ventilated Refrigerators .jpg', link: '/products/under-counter-ventilated' },
      { id: 14, name: 'Saladatte With Prep Table', image: '/products/Saladatte With Prep Table (Ventilated).jpg', link: '/products/saladatte' },
      { id: 15, name: 'Refrigerated Topping Unit', image: '/products/Refrigerated Topping Unit.jpg', link: '/products/topping-unit' },
      { id: 16, name: 'Blast Freezer', image: '/products/Blast Freezer.jpg', link: '/products/blast-freezer' },
      { id: 17, name: 'Back Bar', image: '/products/Back Bars.jpg', link: '/products/back-bar' },
      { id: 18, name: 'Wine Chiller', image: '/products/WINE CHILLER.jpg', link: '/products/wine-chiller' },
      { id: 19, name: 'Ice Machine', image: '/products/ICE MACHINE.jpg', link: '/products/ice-machine' },
      { id: 20, name: 'Mini Bar With Absorption', image: '/products/MINI BAR WITH ABSORPTION.jpg', link: '/products/minibar-absorption' },
      { id: 21, name: 'Cake Display Cabinets', image: '/products/CAKE DISPLAY CABINETS.jpg', link: '/products/cake-display' },
    ]
  },
  'minibars': {
    name: 'MINI BAR',
    category: 'Commercial Refrigeration',
    breadcrumbs: ['Home', 'Commercial Cooling', 'Mini Bar'],
    sku: 'FMB Series',
    images: [
      '/product range /minibars.png',
      '/product range /minibars.png',
      '/product range /minibars.png'
    ],
    models: [
      { id: 'fmb50g', name: 'FMB50G', image: '/product range /minibars.png', specs: ['50L', 'Glass Door', '400x415x530'] },
      { id: 'fmb50h', name: 'FMB50H', image: '/product range /minibars.png', specs: ['50L', 'Solid Door', '400x415x530'] },
      { id: 'fmb100h', name: 'FMB100H', image: '/product range /minibars.png', specs: ['100L', 'Solid Door', '435x455x545'] },
    ],
    features: [
      { text: 'Silent absorption cooling technology', icon: 'fa-solid fa-volume-mute' },
      { text: 'Compact & elegant design', icon: 'fa-solid fa-compress' },
      { text: 'Adjustable temperature control', icon: 'fa-solid fa-sliders' },
      { text: 'Interior LED light', icon: 'fa-solid fa-lightbulb' },
      { text: 'Reversible door hinge', icon: 'fa-solid fa-arrows-left-right' },
      { text: 'Low energy consumption', icon: 'fa-solid fa-leaf' }
    ],
    specTable: {
      columns: ['Model', 'FMB50G', 'FMB50H', 'FMB100H'],
      rows: [
        { label: 'Door Option', values: ['Glass', 'Solid', 'Solid'] },
        { label: 'Dimension W x D x H (mm)', values: ['400 x 415 x 530', '400 x 415 x 530', '435 x 455 x 545'] },
        { label: 'Capacity Ltrs', values: ['50', '50', '100'] },
        { label: 'Temperature', spans: [{ val: '2°C ~ 10°C', colSpan: 3 }] },
        { label: 'Energy Consumption (Kwh)', values: ['0.8', '0.8', '0.9'] },
        { label: 'Input Power (W)', values: ['60', '60', '60'] }
      ]
    },
    related: [
      { id: 1, name: 'Visicooler', image: '/products/visicooler.jpg', link: '/products/visicooler' },
      { id: 10, name: 'Reach-In Static', image: '/products/Reach-In Static Refrigerators .jpg', link: '/products/reach-in-static' },
      { id: 11, name: 'Under Counter Static', image: '/products/Under Counter Static Refrigerators.jpg', link: '/products/under-counter-static' },
      { id: 12, name: 'Reach-In Ventilated', image: '/products/REACH IN VENTILATED.jpg', link: '/products/reach-in-ventilated' },
      { id: 13, name: 'Under Counter Ventilated', image: '/products/Under Counter Ventilated Refrigerators .jpg', link: '/products/under-counter-ventilated' },
      { id: 14, name: 'Saladatte With Prep Table', image: '/products/Saladatte With Prep Table (Ventilated).jpg', link: '/products/saladatte' },
      { id: 15, name: 'Refrigerated Topping Unit', image: '/products/Refrigerated Topping Unit.jpg', link: '/products/topping-unit' },
      { id: 16, name: 'Blast Freezer', image: '/products/Blast Freezer.jpg', link: '/products/blast-freezer' },
      { id: 17, name: 'Back Bar', image: '/products/Back Bars.jpg', link: '/products/back-bar' },
      { id: 18, name: 'Wine Chiller', image: '/products/WINE CHILLER.jpg', link: '/products/wine-chiller' },
      { id: 19, name: 'Ice Machine', image: '/products/ICE MACHINE.jpg', link: '/products/ice-machine' },
      { id: 20, name: 'Mini Bar With Absorption', image: '/products/MINI BAR WITH ABSORPTION.jpg', link: '/products/minibar-absorption' },
      { id: 21, name: 'Cake Display Cabinets', image: '/products/CAKE DISPLAY CABINETS.jpg', link: '/products/cake-display' },
    ]
  },
  'reach-in-static': {
    name: 'REACH IN STATIC',
    category: 'Commercial Refrigeration',
    breadcrumbs: ['Home', 'Commercial Cooling', 'Reach-In Static'],
    sku: 'MFS Series',
    images: [
      '/products/Reach-In Static Refrigerators .jpg',
      '/products/Reach-In Static Refrigerators .jpg',
      '/products/Reach-In Static Refrigerators .jpg'
    ],
    models: [
      { id: 'mfs550c', name: 'MFS550C', image: '/products/Reach-In Static Refrigerators .jpg', specs: ['516L', 'Chiller (2°C~8°C)', '680x760x1995'] },
      { id: 'mfs550f', name: 'MFS550F', image: '/products/Reach-In Static Refrigerators .jpg', specs: ['516L', 'Freezer (-18°C~-15°C)', '680x760x1995'] },
      { id: 'mfs1100c', name: 'MFS1100C', image: '/products/Reach-In Static Refrigerators .jpg', specs: ['1000L', 'Chiller (2°C~8°C)', '1220x760x1995'] },
      { id: 'mfs1100f', name: 'MFS1100F', image: '/products/Reach-In Static Refrigerators .jpg', specs: ['1000L', 'Freezer (-18°C~-15°C)', '1220x760x1995'] },
    ],
    description: 'MarkEn Reach-In Static Refrigerators are designed for dependable and uniform cooling in medical, laboratory, and pharmaceutical settings. Featuring advanced static refrigeration technology, they maintain consistent temperature stability without air disturbance ideal for sensitive samples and vaccines.',
    features: [
      { text: 'Heavy Duty Lockable Castors', icon: 'fa-solid fa-truck' },
      { text: 'Heavy duty copper evaporator & condenser', icon: 'fa-solid fa-fan' },
      { text: 'Lockable for security', icon: 'fa-solid fa-lock' },
      { text: 'Eco-Friendly Refrigerant', icon: 'fa-solid fa-leaf' },
      { text: 'Removable Gasket for easy hygiene', icon: 'fa-solid fa-soap' },
      { text: 'Adjustable Shelves for storage flex', icon: 'fa-solid fa-layer-group' }
    ],
    specTable: {
      columns: ['Model', 'MFS550C', 'MFS550F', 'MFS1100C', 'MFS1100F'],
      rows: [
        { label: 'Capacity (Ltr)', values: ['516', '516', '1000', '1000'] },
        { label: 'Dimension W x D x H (mm)', values: ['680 x 760 x 1995', '680 x 760 x 1995', '1220 x 760 x 1995', '1220 x 760 x 1995'] },
        { label: 'Temperature', values: ['2°C ~ 8°C', '-18°C ~ -15°C', '2°C ~ 8°C', '-18°C ~ -15°C'] },
        { label: 'GN Compatibility', spans: [{ val: 'NA', colSpan: 4 }] },
        { label: 'Refrigerant', spans: [{ val: 'R290', colSpan: 4 }] },
        { label: 'Type Of Cooling', spans: [{ val: 'Static', colSpan: 4 }] },
        { label: 'No Of Shelves', values: ['2', '2', '4', '4'] },
        { label: 'SUS Material', spans: [{ val: '201', colSpan: 4 }] }
      ]
    },
    related: [
      { id: 1, name: 'Visicooler', image: '/products/visicooler.jpg', link: '/products/visicooler' },
      { id: 7, name: 'Mini Bar', image: '/product range /minibars.png', link: '/products/minibars' },
      { id: 11, name: 'Under Counter Static', image: '/products/Under Counter Static Refrigerators.jpg', link: '/products/under-counter-static' },
      { id: 12, name: 'Reach-In Ventilated', image: '/products/REACH IN VENTILATED.jpg', link: '/products/reach-in-ventilated' },
      { id: 13, name: 'Under Counter Ventilated', image: '/products/Under Counter Ventilated Refrigerators .jpg', link: '/products/under-counter-ventilated' },
      { id: 14, name: 'Saladatte With Prep Table', image: '/products/Saladatte With Prep Table (Ventilated).jpg', link: '/products/saladatte' },
      { id: 15, name: 'Refrigerated Topping Unit', image: '/products/Refrigerated Topping Unit.jpg', link: '/products/topping-unit' },
      { id: 16, name: 'Blast Freezer', image: '/products/Blast Freezer.jpg', link: '/products/blast-freezer' },
      { id: 17, name: 'Back Bar', image: '/products/Back Bars.jpg', link: '/products/back-bar' },
      { id: 18, name: 'Wine Chiller', image: '/products/WINE CHILLER.jpg', link: '/products/wine-chiller' },
      { id: 19, name: 'Ice Machine', image: '/products/ICE MACHINE.jpg', link: '/products/ice-machine' },
      { id: 20, name: 'Mini Bar With Absorption', image: '/products/MINI BAR WITH ABSORPTION.jpg', link: '/products/minibar-absorption' },
      { id: 21, name: 'Cake Display Cabinets', image: '/products/CAKE DISPLAY CABINETS.jpg', link: '/products/cake-display' },
    ]
  },
  'under-counter-static': {
    name: 'UNDER COUNTER STATIC',
    category: 'Commercial Refrigeration',
    breadcrumbs: ['Home', 'Commercial Cooling', 'Under Counter Static'],
    sku: 'MFS-UC Series',
    images: [
      '/products/Under Counter Static Refrigerators.jpg',
      '/products/Under Counter Static Refrigerators.jpg',
      '/products/Under Counter Static Refrigerators.jpg'
    ],
    models: [
      { id: 'mfs1200c', name: 'MFS1200C', image: '/products/Under Counter Static Refrigerators.jpg', specs: ['270L', 'Chiller (2°C~8°C)', '1200x700x850'] },
      { id: 'mfs1200f', name: 'MFS1200F', image: '/products/Under Counter Static Refrigerators.jpg', specs: ['270L', 'Freezer (-18°C~-15°C)', '1200x700x850'] },
      { id: 'mfs1500c', name: 'MFS1500C', image: '/products/Under Counter Static Refrigerators.jpg', specs: ['380L', 'Chiller (2°C~8°C)', '1500x700x850'] },
      { id: 'mfs1500f', name: 'MFS1500F', image: '/products/Under Counter Static Refrigerators.jpg', specs: ['380L', 'Freezer (-18°C~-22°C)', '1500x700x850'] },
      { id: 'mfs1800c', name: 'MFS1800C', image: '/products/Under Counter Static Refrigerators.jpg', specs: ['480L', 'Chiller (2°C~8°C)', '1800x700x850'] },
      { id: 'mfs1800f', name: 'MFS1800F', image: '/products/Under Counter Static Refrigerators.jpg', specs: ['480L', 'Freezer (-18°C~-22°C)', '1800x700x850'] },
    ],
    description: 'MarkEn Under Counter Static Refrigerators combine compact design with reliable static cooling performance. Ideal for laboratories, hospitals, and clinical setups with space constraints, they ensure uniform temperature stability without air turbulence perfect for storing sensitive reagents, vaccines, and samples.',
    features: [
      { text: 'Lock & Heavy Duty Lockable Castors', icon: 'fa-solid fa-lock' },
      { text: 'Digital Controller for precise temp', icon: 'fa-solid fa-thermometer' },
      { text: 'Eco-Friendly Refrigerant', icon: 'fa-solid fa-leaf' },
      { text: 'Heavy duty copper evaporator & condenser', icon: 'fa-solid fa-fan' },
      { text: 'Removable Gasket for easy maintenance', icon: 'fa-solid fa-soap' }
    ],
    specTable: {
      columns: ['Model', 'MFS1200C', 'MFS1200F', 'MFS1500C', 'MFS1500F', 'MFS1800C', 'MFS1800F'],
      rows: [
        { label: 'Capacity (Ltr)', values: ['270', '270', '380', '380', '480', '480'] },
        { label: 'Dimension W x D x H (mm)', values: ['1200x700x850', '1200x700x850', '1500x700x850', '1500x700x850', '1800x700x850', '1800x700x850'] },
        { label: 'Temperature', values: ['2°C ~ 8°C', '-18°C ~ -15°C', '2°C ~ 8°C', '-18°C ~ -22°C', '2°C ~ 8°C', '-18°C ~ -22°C'] },
        { label: 'GN Compatibility', spans: [{ val: 'NA', colSpan: 6 }] },
        { label: 'Refrigerant', spans: [{ val: 'R290', colSpan: 6 }] },
        { label: 'Type Of Cooling', spans: [{ val: 'Static', colSpan: 6 }] },
        { label: 'No Of Shelves', values: ['2', '2', '2', '2', '3', '3'] },
        { label: 'SUS Material', spans: [{ val: '201', colSpan: 6 }] }
      ]
    },
    related: [
      { id: 1, name: 'Visicooler', image: '/products/visicooler.jpg', link: '/products/visicooler' },
      { id: 7, name: 'Mini Bar', image: '/product range /minibars.png', link: '/products/minibars' },
      { id: 10, name: 'Reach-In Static', image: '/products/Reach-In Static Refrigerators .jpg', link: '/products/reach-in-static' },
      { id: 12, name: 'Reach-In Ventilated', image: '/products/REACH IN VENTILATED.jpg', link: '/products/reach-in-ventilated' },
      { id: 13, name: 'Under Counter Ventilated', image: '/products/Under Counter Ventilated Refrigerators .jpg', link: '/products/under-counter-ventilated' },
      { id: 14, name: 'Saladatte With Prep Table', image: '/products/Saladatte With Prep Table (Ventilated).jpg', link: '/products/saladatte' },
      { id: 15, name: 'Refrigerated Topping Unit', image: '/products/Refrigerated Topping Unit.jpg', link: '/products/topping-unit' },
      { id: 16, name: 'Blast Freezer', image: '/products/Blast Freezer.jpg', link: '/products/blast-freezer' },
      { id: 17, name: 'Back Bar', image: '/products/Back Bars.jpg', link: '/products/back-bar' },
      { id: 18, name: 'Wine Chiller', image: '/products/WINE CHILLER.jpg', link: '/products/wine-chiller' },
      { id: 19, name: 'Ice Machine', image: '/products/ICE MACHINE.jpg', link: '/products/ice-machine' },
      { id: 20, name: 'Mini Bar With Absorption', image: '/products/MINI BAR WITH ABSORPTION.jpg', link: '/products/minibar-absorption' },
      { id: 21, name: 'Cake Display Cabinets', image: '/products/CAKE DISPLAY CABINETS.jpg', link: '/products/cake-display' },
    ]
  },
  'reach-in-ventilated': {
    name: 'REACH IN VENTILATED',
    category: 'Commercial Refrigeration',
    breadcrumbs: ['Home', 'Commercial Cooling', 'Reach-In Ventilated'],
    sku: 'MFGN Series',
    images: [
      '/products/REACH IN VENTILATED.jpg',
      '/products/REACH IN VENTILATED.jpg',
      '/products/REACH IN VENTILATED.jpg'
    ],
    models: [
      { id: 'mfgn650c2', name: 'MFGN650C2', image: '/products/REACH IN VENTILATED.jpg', specs: ['650L', 'Chiller (2°C~+8°C)', '740x830x2010'] },
      { id: 'mfgn650f2', name: 'MFGN650F2', image: '/products/REACH IN VENTILATED.jpg', specs: ['650L', 'Freezer (-18°C~-22°C)', '740x830x2010'] },
      { id: 'mfgn1410c4', name: 'MFGN1410C4', image: '/products/REACH IN VENTILATED.jpg', specs: ['1400L', 'Chiller (2°C~+8°C)', '1480x830x2010'] },
      { id: 'mfgn1410f4', name: 'MFGN1410F4', image: '/products/REACH IN VENTILATED.jpg', specs: ['1400L', 'Freezer (-18°C~-22°C)', '1480x830x2010'] },
    ],
    description: 'MarkEn Reach-In Ventilated Refrigerators are designed for precise temperature control and uniform air circulation, ideal for laboratories, hospitals, and food service environments. Featuring advanced ventilated (forced-air) cooling technology, these units ensure consistent temperature throughout the chamber for safe storage of sensitive materials.',
    features: [
      { text: 'Heavy Duty Lockable Castors', icon: 'fa-solid fa-truck' },
      { text: 'Stainless Steel AISI 304', icon: 'fa-solid fa-industry' },
      { text: 'Key & Lock for security', icon: 'fa-solid fa-key' },
      { text: 'Automatic defrost cooling system', icon: 'fa-solid fa-droplet' },
      { text: 'Inner Body Curved Edges', icon: 'fa-solid fa-circle-nodes' },
      { text: 'High quality compressor: Danfoss', icon: 'fa-solid fa-microchip' },
      { text: 'CFC free with 60mm insulation', icon: 'fa-solid fa-shield-halved' }
    ],
    specTable: {
      columns: ['Model', 'MFGN650C2', 'MFGN650F2', 'MFGN1410C4', 'MFGN1410F4'],
      rows: [
        { label: 'Capacity (Ltr)', values: ['650', '650', '1400', '1400'] },
        { label: 'Dimension W x D x H (mm)', values: ['740x830x2010', '740x830x2010', '1480x830x2010', '1480x830x2010'] },
        { label: 'Temperature', values: ['2°C ~ +8°C', '-18°C ~ -22°C', '2°C ~ +8°C', '-18°C ~ -22°C'] },
        { label: 'GN Compatibility', spans: [{ val: 'GN 2/1', colSpan: 4 }] },
        { label: 'Refrigerant', values: ['R600a', 'R290', 'R600a', 'R290'] },
        { label: 'Type Of Cooling', spans: [{ val: 'Ventilated', colSpan: 4 }] },
        { label: 'No Of Shelves', values: ['3', '3', '6', '6'] },
        { label: 'SUS Material', spans: [{ val: '304', colSpan: 4 }] }
      ]
    },
    related: [
      { id: 1, name: 'Visicooler', image: '/products/visicooler.jpg', link: '/products/visicooler' },
      { id: 7, name: 'Mini Bar', image: '/product range /minibars.png', link: '/products/minibars' },
      { id: 10, name: 'Reach-In Static', image: '/products/Reach-In Static Refrigerators .jpg', link: '/products/reach-in-static' },
      { id: 11, name: 'Under Counter Static', image: '/products/Under Counter Static Refrigerators.jpg', link: '/products/under-counter-static' },
      { id: 13, name: 'Under Counter Ventilated', image: '/products/Under Counter Ventilated Refrigerators .jpg', link: '/products/under-counter-ventilated' },
      { id: 14, name: 'Saladatte With Prep Table', image: '/products/Saladatte With Prep Table (Ventilated).jpg', link: '/products/saladatte' },
      { id: 15, name: 'Refrigerated Topping Unit', image: '/products/Refrigerated Topping Unit.jpg', link: '/products/topping-unit' },
      { id: 16, name: 'Blast Freezer', image: '/products/Blast Freezer.jpg', link: '/products/blast-freezer' },
      { id: 17, name: 'Back Bar', image: '/products/Back Bars.jpg', link: '/products/back-bar' },
      { id: 18, name: 'Wine Chiller', image: '/products/WINE CHILLER.jpg', link: '/products/wine-chiller' },
      { id: 19, name: 'Ice Machine', image: '/products/ICE MACHINE.jpg', link: '/products/ice-machine' },
      { id: 20, name: 'Mini Bar With Absorption', image: '/products/MINI BAR WITH ABSORPTION.jpg', link: '/products/minibar-absorption' },
      { id: 21, name: 'Cake Display Cabinets', image: '/products/CAKE DISPLAY CABINETS.jpg', link: '/products/cake-display' },
    ]
  },
  'under-counter-ventilated': {
    name: 'UNDER COUNTER VENTILATED',
    category: 'Commercial Refrigeration',
    breadcrumbs: ['Home', 'Commercial Cooling', 'Under Counter Ventilated'],
    sku: 'MFGN-UC Series',
    images: [
      '/products/Under Counter Ventilated Refrigerators .jpg',
      '/products/Under Counter Ventilated Refrigerators .jpg',
      '/products/Under Counter Ventilated Refrigerators .jpg'
    ],
    models: [
      { id: 'mfgn2100c', name: 'MFGN2100C', image: '/products/Under Counter Ventilated Refrigerators .jpg', specs: ['282L', 'Chiller (2°C~+8°C)', '1360x700x850'] },
      { id: 'mfgn2100f', name: 'MFGN2100F', image: '/products/Under Counter Ventilated Refrigerators .jpg', specs: ['282L', 'Freezer (-18°C~-22°C)', '1360x700x850'] },
      { id: 'mfgn3100c', name: 'MFGN3100C', image: '/products/Under Counter Ventilated Refrigerators .jpg', specs: ['417L', 'Chiller (2°C~+8°C)', '1795x700x850'] },
      { id: 'mfgn3100f', name: 'MFGN3100F', image: '/products/Under Counter Ventilated Refrigerators .jpg', specs: ['417L', 'Freezer (-18°C~-22°C)', '1795x700x850'] },
    ],
    description: 'MarkEn Under Counter Ventilated Refrigerators combine compact design with efficient air circulation to deliver uniform cooling across all storage zones. Ideal for laboratories, hospitals, and commercial kitchens, these units use advanced forced-air technology to maintain stable temperatures even with frequent door openings.',
    features: [
      { text: 'Adjustable lockable castors', icon: 'fa-solid fa-truck' },
      { text: 'High quality compressor: Danfoss', icon: 'fa-solid fa-microchip' },
      { text: 'Stainless Steel AISI 304', icon: 'fa-solid fa-industry' },
      { text: 'CFC free with 60mm insulation', icon: 'fa-solid fa-shield-halved' },
      { text: 'Automatic defrost cooling system', icon: 'fa-solid fa-droplet' },
      { text: 'Digital thermostat control', icon: 'fa-solid fa-thermometer' },
      { text: 'Germany Well-known brand EBM fans', icon: 'fa-solid fa-fan' }
    ],
    specTable: {
      columns: ['Model', 'MFGN2100C', 'MFGN2100F', 'MFGN3100C', 'MFGN3100F'],
      rows: [
        { label: 'Capacity (Ltr)', values: ['282', '282', '417', '417'] },
        { label: 'Dimension W x D x H (mm)', values: ['1360 x 700 x 850', '1360 x 700 x 850', '1795 x 700 x 850', '1795 x 700 x 850'] },
        { label: 'Temperature', values: ['2°C ~ +8°C', '-18°C ~ -22°C', '2°C ~ +8°C', '-18°C ~ -22°C'] },
        { label: 'GN Compatibility', spans: [{ val: 'GN 1 x 1/1', colSpan: 4 }] },
        { label: 'Refrigerant', values: ['R600a', 'R290', 'R600a', 'R290'] },
        { label: 'Type Of Cooling', spans: [{ val: 'Ventilated', colSpan: 4 }] },
        { label: 'No Of Shelves', values: ['2', '2', '3', '3'] },
        { label: 'SUS Material', spans: [{ val: '304', colSpan: 4 }] }
      ]
    },
    related: [
      { id: 1, name: 'Visicooler', image: '/products/visicooler.jpg', link: '/products/visicooler' },
      { id: 7, name: 'Mini Bar', image: '/product range /minibars.png', link: '/products/minibars' },
      { id: 10, name: 'Reach-In Static', image: '/products/Reach-In Static Refrigerators .jpg', link: '/products/reach-in-static' },
      { id: 11, name: 'Under Counter Static', image: '/products/Under Counter Static Refrigerators.jpg', link: '/products/under-counter-static' },
      { id: 12, name: 'Reach-In Ventilated', image: '/products/REACH IN VENTILATED.jpg', link: '/products/reach-in-ventilated' },
      { id: 14, name: 'Saladatte With Prep Table', image: '/products/Saladatte With Prep Table (Ventilated).jpg', link: '/products/saladatte' },
      { id: 15, name: 'Refrigerated Topping Unit', image: '/products/Refrigerated Topping Unit.jpg', link: '/products/topping-unit' },
      { id: 16, name: 'Blast Freezer', image: '/products/Blast Freezer.jpg', link: '/products/blast-freezer' },
      { id: 17, name: 'Back Bar', image: '/products/Back Bars.jpg', link: '/products/back-bar' },
      { id: 18, name: 'Wine Chiller', image: '/products/WINE CHILLER.jpg', link: '/products/wine-chiller' },
      { id: 19, name: 'Ice Machine', image: '/products/ICE MACHINE.jpg', link: '/products/ice-machine' },
      { id: 20, name: 'Mini Bar With Absorption', image: '/products/MINI BAR WITH ABSORPTION.jpg', link: '/products/minibar-absorption' },
    ]
  },
  'saladatte': {
    name: 'SALADATTE WITH PREP TABLE',
    category: 'Commercial Refrigeration',
    breadcrumbs: ['Home', 'Commercial Cooling', 'Saladatte With Prep Table'],
    sku: 'MFSH/MFPV Series',
    images: [
      '/products/Saladatte With Prep Table (Ventilated).jpg',
      '/products/Saladatte With Prep Table (Ventilated).jpg',
      '/products/Saladatte With Prep Table (Ventilated).jpg'
    ],
    models: [
      { id: 'mfsh2000-800', name: 'MFSH2000/800', image: '/products/Saladatte With Prep Table (Ventilated).jpg', specs: ['390L', '7xGN 1/3', '1510x800x1085'] },
      { id: 'mfsh3000-800', name: 'MFSH3000/800', image: '/products/Saladatte With Prep Table (Ventilated).jpg', specs: ['580L', '10xGN 1/3', '2020x800x1250'] },
      { id: 'mfpv200-1-6', name: 'MFPV200 1/6', image: '/products/Saladatte With Prep Table (Ventilated).jpg', specs: ['240L', '5xGN 1/6', '900x700x970'] },
      { id: 'mfpv300-1-6', name: 'MFPV300 1/6', image: '/products/Saladatte With Prep Table (Ventilated).jpg', specs: ['390L', '8xGN 1/6', '1365x700x970'] },
    ],
    description: 'MarkEn Saladatte With Prep Table (Ventilated) is a high-performance stainless-steel preparation station designed to enhance speed, hygiene, and efficiency in commercial kitchens. Its advanced ventilated cooling system keeps ingredients fresh for longer, while the top GN pans provide quick and easy access to salads and toppings.',
    features: [
      { text: 'Adjustable lockable castors', icon: 'fa-solid fa-truck' },
      { text: 'Stainless Steel AISI 304', icon: 'fa-solid fa-industry' },
      { text: 'CFC free insulation', icon: 'fa-solid fa-leaf' },
      { text: 'High quality compressor: Danfoss', icon: 'fa-solid fa-microchip' },
      { text: 'Digital thermostat control', icon: 'fa-solid fa-thermometer' },
      { text: 'Magnetic sealing strip', icon: 'fa-solid fa-magnet' },
      { text: 'GN Topping Well for easy access', icon: 'fa-solid fa-utensils' }
    ],
    specTable: {
      columns: ['Model', 'MFSH2000/800', 'MFSH3000/800', 'MFPV200 1/6', 'MFPV300 1/6'],
      rows: [
        { label: 'Capacity (Ltr)', values: ['390', '580', '240', '390'] },
        { label: 'Dimension W x D x H (mm)', values: ['1510x800x1085', '2020x800x1250', '900x700x970', '1365x700x970'] },
        { label: 'Temperature', values: ['2°C ~ +8°C', '2°C ~ +8°C', '2°C ~ +10°C', '2°C ~ +10°C'] },
        { label: 'GN Compatibility', values: ['7 x GN 1/3', '10 x GN 1/3', '5 x GN 1/6', '8 x GN 1/6'] },
        { label: 'Type Of Cooling', values: ['Ventilated', 'Ventilated', 'Static', 'Static'] },
        { label: 'No Of Shelves', values: ['2', '3', '2', '3'] },
        { label: 'SUS Material', spans: [{ val: '304', colSpan: 4 }] },
        { label: 'Climate Class', values: ['38°C', '38°C', '32°C', '32°C'] }
      ]
    },
    related: [
      { id: 1, name: 'Visicooler', image: '/products/visicooler.jpg', link: '/products/visicooler' },
      { id: 7, name: 'Mini Bar', image: '/product range /minibars.png', link: '/products/minibars' },
      { id: 10, name: 'Reach-In Static', image: '/products/Reach-In Static Refrigerators .jpg', link: '/products/reach-in-static' },
      { id: 11, name: 'Under Counter Static', image: '/products/Under Counter Static Refrigerators.jpg', link: '/products/under-counter-static' },
      { id: 12, name: 'Reach-In Ventilated', image: '/products/REACH IN VENTILATED.jpg', link: '/products/reach-in-ventilated' },
      { id: 13, name: 'Under Counter Ventilated', image: '/products/Under Counter Ventilated Refrigerators .jpg', link: '/products/under-counter-ventilated' },
      { id: 15, name: 'Refrigerated Topping Unit', image: '/products/Refrigerated Topping Unit.jpg', link: '/products/topping-unit' },
      { id: 16, name: 'Blast Freezer', image: '/products/Blast Freezer.jpg', link: '/products/blast-freezer' },
      { id: 17, name: 'Back Bar', image: '/products/Back Bars.jpg', link: '/products/back-bar' },
      { id: 18, name: 'Wine Chiller', image: '/products/WINE CHILLER.jpg', link: '/products/wine-chiller' },
      { id: 19, name: 'Ice Machine', image: '/products/ICE MACHINE.jpg', link: '/products/ice-machine' },
      { id: 20, name: 'Mini Bar With Absorption', image: '/products/MINI BAR WITH ABSORPTION.jpg', link: '/products/minibar-absorption' },
      { id: 21, name: 'Cake Display Cabinets', image: '/products/CAKE DISPLAY CABINETS.jpg', link: '/products/cake-display' },
    ]
  },
  'topping-unit': {
    name: 'REFRIGERATED TOPPING UNIT',
    category: 'Commercial Refrigeration',
    breadcrumbs: ['Home', 'Commercial Cooling', 'Refrigerated Topping Unit'],
    sku: 'MFVRX Series',
    images: [
      '/products/Refrigerated Topping Unit.jpg',
      '/products/Refrigerated Topping Unit.jpg',
      '/products/Refrigerated Topping Unit.jpg'
    ],
    models: [
      { id: 'mfvrx1200-330', name: 'MFVRX1200/330', image: '/products/Refrigerated Topping Unit.jpg', specs: ['GN1/4*5', '900x700x970', '2°C~10°C'] },
      { id: 'mfvrx1400-330', name: 'MFVRX1400/330', image: '/products/Refrigerated Topping Unit.jpg', specs: ['GN1/4*6', '1365x700x970', '2°C~10°C'] },
    ],
    description: 'MarkEn Refrigerated Topping Unit is a compact and efficient solution for keeping ingredients fresh, organized, and easily accessible during food preparation. Designed for fast-paced environments like cafés and pizza stations.',
    features: [
      { text: 'Adjustable feet for stability', icon: 'fa-solid fa-arrows-up-down' },
      { text: 'High quality compressor: Embraco', icon: 'fa-solid fa-microchip' },
      { text: 'Stainless Steel AISI 304', icon: 'fa-solid fa-industry' },
      { text: 'CFC free foaming insulation', icon: 'fa-solid fa-leaf' },
      { text: 'Automatic defrost cooling system', icon: 'fa-solid fa-droplet' },
      { text: 'Italian Dixell thermostat', icon: 'fa-solid fa-thermometer' },
      { text: 'GN Pan connectivity (1/4 pans)', icon: 'fa-solid fa-utensils' }
    ],
    specTable: {
      columns: ['Model', 'MFVRX1200/330', 'MFVRX1400/330'],
      rows: [
        { label: 'Capacity (Pan)', values: ['GN1/4*5', 'GN1/4*6'] },
        { label: 'Dimension W x D x H (mm)', values: ['900 x 700 x 970', '1365 x 700 x 970'] },
        { label: 'Temperature', spans: [{ val: '2°C ~ +10°C', colSpan: 2 }] },
        { label: 'Refrigerant', spans: [{ val: 'R600a', colSpan: 2 }] },
        { label: 'Type Of Cooling', spans: [{ val: 'Ventilated', colSpan: 2 }] },
        { label: 'Climate Class', spans: [{ val: '32°C', colSpan: 2 }] }
      ]
    },
    related: [
      { id: 1, name: 'Visicooler', image: '/products/visicooler.jpg', link: '/products/visicooler' },
      { id: 7, name: 'Mini Bar', image: '/product range /minibars.png', link: '/products/minibars' },
      { id: 10, name: 'Reach-In Static', image: '/products/Reach-In Static Refrigerators .jpg', link: '/products/reach-in-static' },
      { id: 11, name: 'Under Counter Static', image: '/products/Under Counter Static Refrigerators.jpg', link: '/products/under-counter-static' },
      { id: 12, name: 'Reach-In Ventilated', image: '/products/REACH IN VENTILATED.jpg', link: '/products/reach-in-ventilated' },
      { id: 13, name: 'Under Counter Ventilated', image: '/products/Under Counter Ventilated Refrigerators .jpg', link: '/products/under-counter-ventilated' },
      { id: 14, name: 'Saladatte With Prep Table', image: '/products/Saladatte With Prep Table (Ventilated).jpg', link: '/products/saladatte' },
      { id: 15, name: 'Refrigerated Topping Unit', image: '/products/Refrigerated Topping Unit.jpg', link: '/products/topping-unit' },
      { id: 16, name: 'Blast Freezer', image: '/products/Blast Freezer.jpg', link: '/products/blast-freezer' },
      { id: 17, name: 'Back Bar', image: '/products/Back Bars.jpg', link: '/products/back-bar' },
      { id: 18, name: 'Wine Chiller', image: '/products/WINE CHILLER.jpg', link: '/products/wine-chiller' },
      { id: 19, name: 'Ice Machine', image: '/products/ICE MACHINE.jpg', link: '/products/ice-machine' },
      { id: 20, name: 'Mini Bar With Absorption', image: '/products/MINI BAR WITH ABSORPTION.jpg', link: '/products/minibar-absorption' },
      { id: 21, name: 'Cake Display Cabinets', image: '/products/CAKE DISPLAY CABINETS.jpg', link: '/products/cake-display' },
    ]
  },
  'blast-freezer': {
    name: 'BLAST FREEZER',
    category: 'Commercial Refrigeration',
    breadcrumbs: ['Home', 'Commercial Cooling', 'Blast Freezer'],
    sku: 'MFBF Series',
    images: [
      '/products/Blast Freezer.jpg',
      '/products/Blast Freezer.jpg',
      '/products/Blast Freezer.jpg'
    ],
    models: [
      { id: 'mfbf5', name: 'MFBF5', image: '/products/Blast Freezer.jpg', specs: ['5 Tray', '-45°C', '800x860x1360'] },
      { id: 'mfbf10', name: 'MFBF10', image: '/products/Blast Freezer.jpg', specs: ['10 Tray', '-45°C', '800x860x1660'] },
      { id: 'mfbf15', name: 'MFBF15', image: '/products/Blast Freezer.jpg', specs: ['15 Tray', '-45°C', '800x860x1960'] },
    ],
    description: 'MarkEn Blast Freezer is a high-performance rapid-freezing solution designed to preserve the freshness, texture, and nutritional quality of food products. Using powerful forced-air cooling technology, it quickly reduces the temperature of cooked or raw items.',
    features: [
      { text: '120mm Polyurethane insulation', icon: 'fa-solid fa-shield-halved' },
      { text: 'Stainless Steel AISI 304', icon: 'fa-solid fa-industry' },
      { text: 'Superior bacterial growth prevention', icon: 'fa-solid fa-virus-slash' },
      { text: 'Reaches -45°C in 30 minutes', icon: 'fa-solid fa-bolt' },
      { text: 'Preserves molecular structure', icon: 'fa-solid fa-dna' },
      { text: 'Copper Tubing for Condenser', icon: 'fa-solid fa-circle-notch' },
      { text: 'Rapid Chill: 99°C to 4°C in 90m', icon: 'fa-solid fa-temperature-arrow-down' }
    ],
    specTable: {
      columns: ['Model', 'MFBF5', 'MFBF10', 'MFBF15'],
      rows: [
        { label: 'Description', spans: [{ val: 'Blast Freezer/Chiller', colSpan: 3 }] },
        { label: 'Dimension W x D x H (mm)', values: ['800x860x1360', '800x860x1660', '800x860x1960'] },
        { label: 'Operating Temperature', spans: [{ val: '-45°C', colSpan: 3 }] },
        { label: 'GN Tray 1/1', values: ['5 Tray', '10 Tray', '15 Tray'] },
        { label: 'Power Supply', spans: [{ val: '220 V / 50 Hz', colSpan: 3 }] },
        { label: 'Cooling Mode', spans: [{ val: 'Ventilated', colSpan: 3 }] }
      ]
    },
    related: [
      { id: 1, name: 'Visicooler', image: '/products/visicooler.jpg', link: '/products/visicooler' },
      { id: 7, name: 'Mini Bar', image: '/product range /minibars.png', link: '/products/minibars' },
      { id: 10, name: 'Reach-In Static', image: '/products/Reach-In Static Refrigerators .jpg', link: '/products/reach-in-static' },
      { id: 11, name: 'Under Counter Static', image: '/products/Under Counter Static Refrigerators.jpg', link: '/products/under-counter-static' },
      { id: 12, name: 'Reach-In Ventilated', image: '/products/REACH IN VENTILATED.jpg', link: '/products/reach-in-ventilated' },
      { id: 13, name: 'Under Counter Ventilated', image: '/products/Under Counter Ventilated Refrigerators .jpg', link: '/products/under-counter-ventilated' },
      { id: 14, name: 'Saladatte With Prep Table', image: '/products/Saladatte With Prep Table (Ventilated).jpg', link: '/products/saladatte' },
      { id: 15, name: 'Refrigerated Topping Unit', image: '/products/Refrigerated Topping Unit.jpg', link: '/products/topping-unit' },
      { id: 16, name: 'Blast Freezer', image: '/products/Blast Freezer.jpg', link: '/products/blast-freezer' },
      { id: 17, name: 'Back Bar', image: '/products/Back Bars.jpg', link: '/products/back-bar' },
      { id: 18, name: 'Wine Chiller', image: '/products/WINE CHILLER.jpg', link: '/products/wine-chiller' },
      { id: 19, name: 'Ice Machine', image: '/products/ICE MACHINE.jpg', link: '/products/ice-machine' },
      { id: 20, name: 'Mini Bar With Absorption', image: '/products/MINI BAR WITH ABSORPTION.jpg', link: '/products/minibar-absorption' },
      { id: 21, name: 'Cake Display Cabinets', image: '/products/CAKE DISPLAY CABINETS.jpg', link: '/products/cake-display' },
    ]
  },
  'back-bar': {
    name: 'BACK BAR',
    category: 'Commercial Refrigeration',
    breadcrumbs: ['Home', 'Commercial Cooling', 'Back Bar'],
    sku: 'MFSBB Series',
    images: [
      '/products/Back Bars.jpg',
      '/products/Back Bars.jpg',
      '/products/Back Bars.jpg'
    ],
    models: [
      { id: 'mfsbb2d', name: 'MFSBB2D / 2DSS', image: '/products/Back Bars.jpg', specs: ['2 Door', '208L', '920x515x905'] },
      { id: 'mfsbb3d', name: 'MFSBB3D / 3DSS', image: '/products/Back Bars.jpg', specs: ['3 Door', '330L', '1350x515x905'] },
    ],
    description: 'MarkEn Back Bars are designed for elegant display and efficient cooling of beverages in bars, restaurants, and hotels. Featuring high-performance refrigeration with rapid temperature recovery, these units ensure drinks remain perfectly chilled even during peak hours.',
    features: [
      { text: 'Double layer tempered glass', icon: 'fa-solid fa-door-open' },
      { text: 'Fan assisted cooling system', icon: 'fa-solid fa-fan' },
      { text: 'Digital controller for precise temp', icon: 'fa-solid fa-thermometer' },
      { text: 'Self-closing door mechanism', icon: 'fa-solid fa-arrow-rotate-left' },
      { text: 'Lock for security', icon: 'fa-solid fa-lock' },
      { text: 'Internal LED Light illumination', icon: 'fa-solid fa-lightbulb' },
      { text: '2 adjustable shelves per door', icon: 'fa-solid fa-layer-group' }
    ],
    specTable: {
      columns: ['Model', 'MFSBB2D / 2DSS', 'MFSBB3D / 3DSS'],
      rows: [
        { label: 'Description', values: ['2 Door Back Bar', '3 Door Back bar'] },
        { label: 'Dimension W x D x H (mm)', values: ['920 x 515 x 905', '1350 x 515 x 905'] },
        { label: 'Temperature', spans: [{ val: '2°C ~ 8°C', colSpan: 2 }] },
        { label: 'Capacity (Litre)', values: ['208', '330'] },
        { label: 'Type Of Cooling', spans: [{ val: 'Static', colSpan: 2 }] },
        { label: 'No Of Shelves', values: ['4', '6'] },
        { label: 'Climate Class', spans: [{ val: '35°C', colSpan: 2 }] }
      ]
    },
    related: [
      { id: 1, name: 'Visicooler', image: '/products/visicooler.jpg', link: '/products/visicooler' },
      { id: 7, name: 'Mini Bar', image: '/product range /minibars.png', link: '/products/minibars' },
      { id: 10, name: 'Reach-In Static', image: '/products/Reach-In Static Refrigerators .jpg', link: '/products/reach-in-static' },
      { id: 11, name: 'Under Counter Static', image: '/products/Under Counter Static Refrigerators.jpg', link: '/products/under-counter-static' },
      { id: 12, name: 'Reach-In Ventilated', image: '/products/REACH IN VENTILATED.jpg', link: '/products/reach-in-ventilated' },
      { id: 13, name: 'Under Counter Ventilated', image: '/products/Under Counter Ventilated Refrigerators .jpg', link: '/products/under-counter-ventilated' },
      { id: 14, name: 'Saladatte With Prep Table', image: '/products/Saladatte With Prep Table (Ventilated).jpg', link: '/products/saladatte' },
      { id: 15, name: 'Refrigerated Topping Unit', image: '/products/Refrigerated Topping Unit.jpg', link: '/products/topping-unit' },
      { id: 16, name: 'Blast Freezer', image: '/products/Blast Freezer.jpg', link: '/products/blast-freezer' },
      { id: 18, name: 'Wine Chiller', image: '/products/WINE CHILLER.jpg', link: '/products/wine-chiller' },
      { id: 19, name: 'Ice Machine', image: '/products/ICE MACHINE.jpg', link: '/products/ice-machine' },
      { id: 20, name: 'Mini Bar With Absorption', image: '/products/MINI BAR WITH ABSORPTION.jpg', link: '/products/minibar-absorption' },
      { id: 21, name: 'Cake Display Cabinets', image: '/products/CAKE DISPLAY CABINETS.jpg', link: '/products/cake-display' },
    ]
  },
  'wine-chiller': {
    name: 'WINE CHILLER',
    category: 'Commercial Refrigeration',
    breadcrumbs: ['Home', 'Commercial Cooling', 'Wine Chiller'],
    sku: 'MFWC Series',
    images: [
      '/products/WINE CHILLER.jpg',
      '/products/WINE CHILLER.jpg',
      '/products/WINE CHILLER.jpg'
    ],
    models: [
      { id: 'mfwc12', name: 'MFWC12', image: '/products/WINE CHILLER.jpg', specs: ['12 Bottles', '38L', '530x395x515'] },
      { id: 'mfwc40-dt', name: 'MFWC40 DT', image: '/products/WINE CHILLER.jpg', specs: ['40 Bottles', 'Dual Zone', '573x595x820'] },
      { id: 'mfwc126-dt', name: 'MFWC126 DT', image: '/products/WINE CHILLER.jpg', specs: ['126 Bottles', 'Dual Zone', '630x595x1585'] },
    ],
    description: 'MarkEn Wine Chiller is a premium temperature-controlled storage unit designed to preserve the flavor, aroma, and quality of wines. Engineered with precise cooling technology, it maintains the ideal serving and aging temperature for both red and white varieties.',
    features: [
      { text: 'Double layers tempered glass', icon: 'fa-solid fa-door-open' },
      { text: 'No Frost cooling technology', icon: 'fa-solid fa-snowflake' },
      { text: 'Dual temperature zone (Red & White)', icon: 'fa-solid fa-cloud-sun' },
      { text: 'Elegant door frame design', icon: 'fa-solid fa-border-all' },
      { text: 'Pull out Beech Wood Shelves', icon: 'fa-solid fa-bars' },
      { text: 'Blue LED interior light', icon: 'fa-solid fa-lightbulb' },
      { text: 'Dual Actual & Set temp display', icon: 'fa-solid fa-digital-tachograph' },
      { text: 'Lock for security', icon: 'fa-solid fa-lock' }
    ],
    specTable: {
      columns: ['Model', 'MFWC12', 'MFWC40 DT', 'MFWC126 DT'],
      rows: [
        { label: 'Description', spans: [{ val: 'Wine Cooler', colSpan: 3 }] },
        { label: 'Volume (L)', values: ['38 L', '113 L', '291 L'] },
        { label: 'Dimension W x D x H (mm)', values: ['530 x 395 x 515', '573 x 595 x 820', '630 x 595 x 1585'] },
        { label: 'Capacity 750 ml Bottle', values: ['12', '40', '126'] },
        { label: 'Temperature', values: ['5°C ~ 22°C', '5°C ~ 12°C / 12°C ~ 22°C', '5°C ~ 12°C / 12°C ~ 22°C'] },
        { label: 'No Of Shelves', values: ['3', '5', '7'] },
        { label: 'Note', spans: [{ val: 'Climate Class 38°C', colSpan: 3 }] }
      ]
    },
    related: [
      { id: 1, name: 'Visicooler', image: '/products/visicooler.jpg', link: '/products/visicooler' },
      { id: 7, name: 'Mini Bar', image: '/product range /minibars.png', link: '/products/minibars' },
      { id: 10, name: 'Reach-In Static', image: '/products/Reach-In Static Refrigerators .jpg', link: '/products/reach-in-static' },
      { id: 11, name: 'Under Counter Static', image: '/products/Under Counter Static Refrigerators.jpg', link: '/products/under-counter-static' },
      { id: 12, name: 'Reach-In Ventilated', image: '/products/REACH IN VENTILATED.jpg', link: '/products/reach-in-ventilated' },
      { id: 13, name: 'Under Counter Ventilated', image: '/products/Under Counter Ventilated Refrigerators .jpg', link: '/products/under-counter-ventilated' },
      { id: 14, name: 'Saladatte With Prep Table', image: '/products/Saladatte With Prep Table (Ventilated).jpg', link: '/products/saladatte' },
      { id: 15, name: 'Refrigerated Topping Unit', image: '/products/Refrigerated Topping Unit.jpg', link: '/products/topping-unit' },
      { id: 16, name: 'Blast Freezer', image: '/products/Blast Freezer.jpg', link: '/products/blast-freezer' },
      { id: 17, name: 'Back Bar', image: '/products/Back Bars.jpg', link: '/products/back-bar' },
      { id: 18, name: 'Wine Chiller', image: '/products/WINE CHILLER.jpg', link: '/products/wine-chiller' },
      { id: 19, name: 'Ice Machine', image: '/products/ICE MACHINE.jpg', link: '/products/ice-machine' },
      { id: 20, name: 'Mini Bar With Absorption', image: '/products/MINI BAR WITH ABSORPTION.jpg', link: '/products/minibar-absorption' },
      { id: 21, name: 'Cake Display Cabinets', image: '/products/CAKE DISPLAY CABINETS.jpg', link: '/products/cake-display' },
    ]
  },
  'ice-machine': {
    name: 'ICE MACHINE',
    category: 'Commercial Refrigeration',
    breadcrumbs: ['Home', 'Commercial Cooling', 'Ice Machine'],
    sku: 'MFIM Series',
    images: [
      '/products/ICE MACHINE.jpg',
      '/products/ICE MACHINE.jpg',
      '/products/ICE MACHINE.jpg'
    ],
    models: [
      { id: 'mfim40', name: 'MFIM40', image: '/products/ICE MACHINE.jpg', specs: ['40kg/Day', 'Inbuilt Bin', '500x450x800'] },
      { id: 'mfim60', name: 'MFIM60', image: '/products/ICE MACHINE.jpg', specs: ['60kg/Day', 'Inbuilt Bin', '500x590x850'] },
      { id: 'mfim40bt', name: 'MFIM40BT*', image: '/products/ICE MACHINE.jpg', specs: ['40kg/Day', 'Inbuilt Bin', '500x450x850'] },
      { id: 'mfim60bt', name: 'MFIM60BT*', image: '/products/ICE MACHINE.jpg', specs: ['60kg/Day', 'Inbuilt Bin', '500x590x890'] },
      { id: 'mfim150', name: 'MFIM150', image: '/products/ICE MACHINE.jpg', specs: ['150kg/Day', 'Inbuilt Bin', '660x685x920'] },
      { id: 'mfim250', name: 'MFIM250', image: '/products/ICE MACHINE.jpg', specs: ['250kg/Day', 'Separate Bin', '560x830x1718'] },
      { id: 'mfim350', name: 'MFIM350', image: '/products/ICE MACHINE.jpg', specs: ['350kg/Day', 'Separate Bin', '760x830x1718'] },
      { id: 'mfim550', name: 'MFIM550', image: '/products/ICE MACHINE.jpg', specs: ['550kg/Day', 'Separate Bin', '760x830x1893'] },
      { id: 'mfim1050', name: 'MFIM1050', image: '/products/ICE MACHINE.jpg', specs: ['1050kg/Day', 'Separate Bin', '1227x973x2048'] },
    ],
    description: 'MarkEn Ice Machines are engineered to deliver a consistent supply of clean, crystal-clear ice for hotels, restaurants, hospitals, and laboratories. Featuring advanced refrigeration technology and stainless-steel construction, they ensure hygiene, durability, and energy-efficient performance.',
    features: [
      { text: 'Low Energy Consumption to reduce operating cost', icon: 'fa-solid fa-leaf' },
      { text: 'Easy to use interface for monitoring & adjustments', icon: 'fa-solid fa-desktop' },
      { text: 'Air – Cooled system for consistent operation', icon: 'fa-solid fa-wind' },
      { text: 'Vertical Evaporator for reliable ice formation', icon: 'fa-solid fa-cube' }
    ],
    specTable: {
      columns: ['Model', 'MFIM40', 'MFIM60', 'MFIM40BT*', 'MFIM60BT*', 'MFIM150', 'MFIM250', 'MFIM350', 'MFIM550', 'MFIM1050'],
      rows: [
        { label: 'Ice Bin', values: ['Inbuilt', 'Inbuilt', 'Inbuilt', 'Inbuilt', 'Inbuilt', 'Separate', 'Separate', 'Separate', 'Separate'] },
        { label: 'Rated Cap. Kg/24Hr#', values: ['36', '55', '36', '55', '95', '191', '318', '455', '909'] },
        { label: 'Bin Size(Kg)', values: ['15', '18', '15', '18', '36', '125', '175', '175', '350'] },
        { label: 'Dimension W x D x H (mm)^', values: ['500x450x800', '500x590x850', '500x450x850', '500x590x890', '660x685x920', '560x830x1718', '760x830x1718', '760x830x1893', '1227x973x2048'] },
        { label: 'Power Consumption / 24 Hrs', values: ['310', '460', '310', '460', '625', '790', '1420', '2300', '3800'] },
        { label: 'Ice Cube size', spans: [{ val: '22 x 22 x 22', colSpan: 9 }] },
        { label: 'Electrical', spans: [{ val: '220V/50Hz/Single Phase', colSpan: 9 }] },
        { label: 'Note', spans: [{ val: 'Climate Class 38°C', colSpan: 9 }] }
      ]
    },
    related: [
      { id: 1, name: 'Visicooler', image: '/products/visicooler.jpg', link: '/products/visicooler' },
      { id: 7, name: 'Mini Bar', image: '/product range /minibars.png', link: '/products/minibars' },
      { id: 10, name: 'Reach-In Static', image: '/products/Reach-In Static Refrigerators .jpg', link: '/products/reach-in-static' },
      { id: 11, name: 'Under Counter Static', image: '/products/Under Counter Static Refrigerators.jpg', link: '/products/under-counter-static' },
      { id: 12, name: 'Reach-In Ventilated', image: '/products/REACH IN VENTILATED.jpg', link: '/products/reach-in-ventilated' },
      { id: 13, name: 'Under Counter Ventilated', image: '/products/Under Counter Ventilated Refrigerators .jpg', link: '/products/under-counter-ventilated' },
      { id: 14, name: 'Saladatte With Prep Table', image: '/products/Saladatte With Prep Table (Ventilated).jpg', link: '/products/saladatte' },
      { id: 15, name: 'Refrigerated Topping Unit', image: '/products/Refrigerated Topping Unit.jpg', link: '/products/topping-unit' },
      { id: 16, name: 'Blast Freezer', image: '/products/Blast Freezer.jpg', link: '/products/blast-freezer' },
      { id: 17, name: 'Back Bar', image: '/products/Back Bars.jpg', link: '/products/back-bar' },
      { id: 18, name: 'Wine Chiller', image: '/products/WINE CHILLER.jpg', link: '/products/wine-chiller' },
      { id: 20, name: 'Mini Bar With Absorption', image: '/products/MINI BAR WITH ABSORPTION.jpg', link: '/products/minibar-absorption' },
      { id: 21, name: 'Cake Display Cabinets', image: '/products/CAKE DISPLAY CABINETS.jpg', link: '/products/cake-display' },
    ]
  },
  'minibar-absorption': {
    name: 'MINI BAR WITH ABSORPTION',
    category: 'Commercial Refrigeration',
    breadcrumbs: ['Home', 'Commercial Cooling', 'Mini Bar With Absorption'],
    sku: 'MFMBA Series',
    images: [
      '/products/MINI BAR WITH ABSORPTION.jpg',
      '/products/MINI BAR WITH ABSORPTION.jpg',
      '/products/MINI BAR WITH ABSORPTION.jpg'
    ],
    models: [
      { id: 'mfmba30', name: 'MFMBA30', image: '/products/MINI BAR WITH ABSORPTION.jpg', specs: ['30L', 'Solid Door', '400x415x530'] },
      { id: 'mfmba30g', name: 'MFMBA30G', image: '/products/MINI BAR WITH ABSORPTION.jpg', specs: ['30L', 'Glass Door', '400x415x530'] },
      { id: 'mfmba40', name: 'MFMBA40', image: '/products/MINI BAR WITH ABSORPTION.jpg', specs: ['40L', 'Solid Door', '435x455x545'] },
      { id: 'mfmba40g', name: 'MFMBA40G', image: '/products/MINI BAR WITH ABSORPTION.jpg', specs: ['40L', 'Glass Door', '435x455x545'] },
    ],
    description: 'MarkEn Mini Bar with Absorption Technology is a silent, energy-efficient refrigeration solution designed for guest rooms, suites, and premium hospitality spaces. Using advanced absorption cooling, it operates without a compressor, ensuring completely noise-free performance— ideal for hotels prioritizing guest comfort.',
    features: [
      { text: 'Silent Operation (Absorption Cooling)', icon: 'fa-solid fa-volume-mute' },
      { text: 'Elegant & Compact Design', icon: 'fa-solid fa-compress' },
      { text: 'Precise Temperature Control', icon: 'fa-solid fa-sliders' },
      { text: 'Perfect for Hotels with 27°C ambient', icon: 'fa-solid fa-hotel' },
      { id: 5, text: 'Reversible Door hinge', icon: 'fa-solid fa-arrows-left-right' },
      { text: 'Low Energy Consumption', icon: 'fa-solid fa-leaf' }
    ],
    specTable: {
      columns: ['Model', 'MFMBA30', 'MFMBA30G', 'MFMBA40', 'MFMBA40G'],
      rows: [
        { label: 'Door Option', values: ['Solid', 'Glass', 'Solid', 'Glass'] },
        { label: 'Dimension W x D x H (mm)', values: ['400 x 415 x 530', '400 x 415 x 530', '435 x 455 x 545', '435 x 455 x 545'] },
        { label: 'Capacity Ltrs', values: ['30', '30', '40', '40'] },
        { label: 'Temperature', spans: [{ val: '2°C ~ 10°C', colSpan: 4 }] },
        { label: 'Energy Consumption (Kwh)', values: ['0.8', '0.8', '0.9', '0.9'] },
        { label: 'Input Power (W)', values: ['60', '60', '60', '60'] },
        { label: 'Note', spans: [{ val: 'Climate Class 27°C', colSpan: 4 }] }
      ]
    },
    related: [
      { id: 1, name: 'Visicooler', image: '/products/visicooler.jpg', link: '/products/visicooler' },
      { id: 7, name: 'Mini Bar', image: '/product range /minibars.png', link: '/products/minibars' },
      { id: 10, name: 'Reach-In Static', image: '/products/Reach-In Static Refrigerators .jpg', link: '/products/reach-in-static' },
      { id: 11, name: 'Under Counter Static', image: '/products/Under Counter Static Refrigerators.jpg', link: '/products/under-counter-static' },
      { id: 12, name: 'Reach-In Ventilated', image: '/products/REACH IN VENTILATED.jpg', link: '/products/reach-in-ventilated' },
      { id: 13, name: 'Under Counter Ventilated', image: '/products/Under Counter Ventilated Refrigerators .jpg', link: '/products/under-counter-ventilated' },
      { id: 14, name: 'Saladatte With Prep Table', image: '/products/Saladatte With Prep Table (Ventilated).jpg', link: '/products/saladatte' },
      { id: 15, name: 'Refrigerated Topping Unit', image: '/products/Refrigerated Topping Unit.jpg', link: '/products/topping-unit' },
      { id: 16, name: 'Blast Freezer', image: '/products/Blast Freezer.jpg', link: '/products/blast-freezer' },
      { id: 17, name: 'Back Bar', image: '/products/Back Bars.jpg', link: '/products/back-bar' },
      { id: 18, name: 'Wine Chiller', image: '/products/WINE CHILLER.jpg', link: '/products/wine-chiller' },
      { id: 19, name: 'Ice Machine', image: '/products/ICE MACHINE.jpg', link: '/products/ice-machine' },
      { id: 21, name: 'Cake Display Cabinets', image: '/products/CAKE DISPLAY CABINETS.jpg', link: '/products/cake-display' },
    ]
  },
  'cake-display': {
    name: 'CAKE DISPLAY CABINETS',
    category: 'Commercial Refrigeration',
    breadcrumbs: ['Home', 'Commercial Cooling', 'Cake Display Cabinets'],
    sku: 'MFDC Series',
    images: [
      '/products/CAKE DISPLAY CABINETS.jpg',
      '/products/CAKE DISPLAY CABINETS.jpg',
      '/products/CAKE DISPLAY CABINETS.jpg'
    ],
    models: [
      { id: 'mfdc900f3', name: 'MFDC900F3', image: '/products/CAKE DISPLAY CABINETS.jpg', specs: ['375L', '900x700x1270', 'Black/SS'] },
      { id: 'mfdc1000f3', name: 'MFDC1000F3', image: '/products/CAKE DISPLAY CABINETS.jpg', specs: ['410L', '1000x700x1270', 'Black/SS'] },
      { id: 'mfdc1200f3', name: 'MFDC1200F3', image: '/products/CAKE DISPLAY CABINETS.jpg', specs: ['520L', '1200x700x1270', 'Black/SS'] },
      { id: 'mfdc1500f3', name: 'MFDC1500F3', image: '/products/CAKE DISPLAY CABINETS.jpg', specs: ['650L', '1500x700x1270', 'Black/SS'] },
      { id: 'mfdc901f3', name: 'MFDC901F3', image: '/products/CAKE DISPLAY CABINETS.jpg', specs: ['375L', '900x700x1270', 'Black/SS'] },
      { id: 'mfdc1001f3', name: 'MFDC1001F3', image: '/products/CAKE DISPLAY CABINETS.jpg', specs: ['410L', '1000x700x1270', 'Black/SS'] },
      { id: 'mfdc1201f3', name: 'MFDC1201F3', image: '/products/CAKE DISPLAY CABINETS.jpg', specs: ['520L', '1200x700x1270', 'Black/SS'] },
    ],
    description: 'MarkEn Cake Display Cabinets are specialized refrigerated showcases crafted to preserve the freshness, texture, and visual appeal of cakes, pastries, and desserts. Built with high- clarity glass, bright LED lighting, and precise temperature control, these cabinets create an attractive presentation.',
    features: [
      { text: 'Available in Black & Stainless Steel', icon: 'fa-solid fa-palette' },
      { text: 'Durable Stainless Steel Interior', icon: 'fa-solid fa-square' },
      { text: 'Front Heated Glass to prevent fog', icon: 'fa-solid fa-fire-burner' },
      { text: 'Lockable castors for easy mobility', icon: 'fa-solid fa-truck' },
      { text: 'Double layer side glass insulation', icon: 'fa-solid fa-shield-halved' },
      { text: 'Copper Condenser & Evaporator', icon: 'fa-solid fa-fan' }
    ],
    specTable: {
      columns: ['Model', 'MFDC900F3', 'MFDC1000F3', 'MFDC1200F3', 'MFDC1500F3', 'MFDC901F3', 'MFDC1001F3', 'MFDC1201F3', 'MFDC1501F3'],
      rows: [
        { label: 'Capacity (Ltr)', values: ['375', '410', '520', '650', '375', '410', '520', '650'] },
        { label: 'Dimension W x D x H (mm)', values: ['900x700x1270', '1000x700x1270', '1200x700x1270', '1500x700x1270', '900x700x1270', '1000x700x1270', '1200x700x1270', '1500x700x1270'] },
        { label: 'Temperature', spans: [{ val: '-2°C ~ +8°C', colSpan: 8 }] },
        { label: 'Type Of Cooling', spans: [{ val: 'Ventilated', colSpan: 8 }] },
        { label: 'No Of Shelves', spans: [{ val: 'Base + 3', colSpan: 8 }] },
        { label: 'Heated Glass', spans: [{ val: 'Front', colSpan: 8 }] },
        { label: 'Note', spans: [{ val: '32°C Ambient Temperature / 55%RH', colSpan: 8 }] }
      ]
    },
    related: [
      { id: 1, name: 'Visicooler', image: '/products/visicooler.jpg', link: '/products/visicooler' },
      { id: 7, name: 'Mini Bar', image: '/product range /minibars.png', link: '/products/minibars' },
      { id: 10, name: 'Reach-In Static', image: '/products/Reach-In Static Refrigerators .jpg', link: '/products/reach-in-static' },
      { id: 11, name: 'Under Counter Static', image: '/products/Under Counter Static Refrigerators.jpg', link: '/products/under-counter-static' },
      { id: 12, name: 'Reach-In Ventilated', image: '/products/REACH IN VENTILATED.jpg', link: '/products/reach-in-ventilated' },
      { id: 13, name: 'Under Counter Ventilated', image: '/products/Under Counter Ventilated Refrigerators .jpg', link: '/products/under-counter-ventilated' },
      { id: 14, name: 'Saladatte With Prep Table', image: '/products/Saladatte With Prep Table (Ventilated).jpg', link: '/products/saladatte' },
      { id: 15, name: 'Refrigerated Topping Unit', image: '/products/Refrigerated Topping Unit.jpg', link: '/products/topping-unit' },
      { id: 16, name: 'Blast Freezer', image: '/products/Blast Freezer.jpg', link: '/products/blast-freezer' },
      { id: 17, name: 'Back Bar', image: '/products/Back Bars.jpg', link: '/products/back-bar' },
      { id: 18, name: 'Wine Chiller', image: '/products/WINE CHILLER.jpg', link: '/products/wine-chiller' },
      { id: 19, name: 'Ice Machine', image: '/products/ICE MACHINE.jpg', link: '/products/ice-machine' },
      { id: 20, name: 'Mini Bar With Absorption', image: '/products/MINI BAR WITH ABSORPTION.jpg', link: '/products/minibar-absorption' },
      { id: 22, name: 'Water Dispenser', image: '/product thumbnail/ water dispenser new.jpeg', link: '/products/water-dispenser' },
    ]
  },

  // ─────────────────────────────────────────────────────────
  'water-dispenser': {
    name: 'WATER DISPENSER',
    category: 'Water Dispensing',
    breadcrumbs: ['Home', 'Products', 'Water Dispenser'],
    sku: 'MFWD Series',
    models: [
      {
        id: 'mfwdttblkwh',
        name: 'MFWDTTBLKWH',
        image: '/product thumbnail/ water dispenser new.jpeg',
        specs: ['Table Top', '3 Taps', '3 Lit/hr Cooling', '1 Year Warranty']
      },
      {
        id: 'mfwdfcblkwh',
        name: 'MFWDFCBLKWH',
        image: '/product thumbnail/ water dispenser new.jpeg',
        specs: ['Floor Standing + Cabinet', '3 Taps', '3 Lit/hr Cooling', '1 Year Warranty']
      },
      {
        id: 'mfwdfrblkwh',
        name: 'MFWDFRBLKWH',
        image: '/product thumbnail/ water dispenser new.jpeg',
        specs: ['Floor Standing + Cooling Cabinet', '3 Taps', '3 Lit/hr Cooling', '1 Year Warranty']
      },
    ],
    images: [
      '/product thumbnail/ water dispenser new.jpeg',
      '/product thumbnail/ water dispenser new.jpeg',
      '/product thumbnail/ water dispenser new.jpeg',
    ],
    features: [
      { text: 'Multi-Temperature Options', icon: 'fa-solid fa-temperature-half' },
      { text: 'Refrigerated Cabinet', icon: 'fa-solid fa-box' },
      { text: 'Durability & Energy Efficiency', icon: 'fa-solid fa-bolt' },
      { text: 'User-Friendly Design', icon: 'fa-solid fa-hand-pointer' },
      { text: 'Child Lock', icon: 'fa-solid fa-lock' },
      { text: 'Hygiene Assured', icon: 'fa-solid fa-shield-halved' },
    ],
    specTable: {
      columns: ['Specification', 'MFWDTTBLKWH', 'MFWDFCBLKWH', 'MFWDFRBLKWH'],
      rows: [
        { label: 'BWD Type', values: ['Table Top', 'Floor Standing with cabinet', 'Floor Standing with Cooling cabinet'] },
        { label: 'No Of Taps', values: ['3', '3', '3'] },
        { label: 'External Dimension (WxDxH) (MM)', values: ['352 x 350 x 500', '313 x 350 x 946', '352 x 335 x 990'] },
        { label: 'Packed Dimension (WxDxH) (MM)', values: ['352 x 380 x 552', '352 x 380 x 990', '352 x 380 x 990'] },
        { label: 'Water Cooling Capacity', values: ['3 Lit / hr', '3 Lit / hr', '3 Lit / hr'] },
        { label: 'Water Heating Capacity', values: ['5 Lit /hr', '5 Lit /hr', '5 Lit /hr'] },
        { label: 'Tap Distribution', spans: [{ val: 'Hot / Normal / Cold', colSpan: 3 }] },
        { label: 'Cold Storage Capacity', values: ['3.2 Lit', '3.2 Lit', '3.2 Lit'] },
        { label: 'Hot Storage Capacity', values: ['1 Lit', '1 Lit', '1 Lit'] },
        { label: 'Bottom Compartment', values: ['NA', 'Only Storage', 'Refrigerated'] },
        { label: 'Warranty', spans: [{ val: '1 Year', colSpan: 3 }] },
      ]
    },
    related: [
      { id: 1, name: 'Visi Cooler', image: '/products/visicooler.jpg', link: '/products/visicooler' },
      { id: 7, name: 'Mini Bar', image: '/products/MINI BAR.jpg', link: '/products/minibars' },
      { id: 16, name: 'Blast Freezer', image: '/products/Blast Freezer.jpg', link: '/products/blast-freezer' },
      { id: 21, name: 'Cake Display Cabinets', image: '/products/CAKE DISPLAY CABINETS.jpg', link: '/products/cake-display' },
    ]
  },
  'hard-top-chest-freezer': {
    name: 'Hard Top Chest Freezer',
    category: 'Commercial Refrigeration',
    breadcrumbs: ['Home', 'Commercial Cooling', 'Hard Top Chest Freezer'],
    sku: 'MF-DHT Series',
    images: [
      '/product thumbnail/HARD TOP CHEST FREEZER.png',
      '/product thumbnail/HARD TOP CHEST FREEZER.png',
      '/product thumbnail/HARD TOP CHEST FREEZER.png',
    ],
    models: [
      { id: 'MF3DHT230SD', name: 'MF3DHT230SD (200L)', specs: ['200L', '1 Basket', '1 Door', '3 Star', '+5°C ~ -27°C', '1 Year Warranty'] },
      { id: 'MF3DHT340SD', name: 'MF3DHT340SD (300L)', specs: ['300L', '1 Basket', '1 Door', '3 Star', '+5°C ~ -27°C', '1 Year Warranty'] },
      { id: 'MF4DHT450DD', name: 'MF4DHT450DD (400L)', specs: ['400L', '1 Basket', '2 Doors', '4 Star', '+5°C ~ -27°C', '1 Year Warranty'] },
      { id: 'MF5DHT560DD', name: 'MF5DHT560DD (500L)', specs: ['500L', '2 Baskets', '2 Doors', '5 Star', '+5°C ~ -27°C', '1 Year Warranty'] },
      { id: 'MFDHT310DDC', name: 'MFDHT310DDC (296L Combo)', specs: ['166C + 130F', '2 Baskets', '2 Doors', 'NA Star Rating', '+2°C ~ +8°C / -16°C ~ -24°C', '1 Year Warranty'] },
      { id: 'MFDHT410DDC', name: 'MFDHT410DDC (401L Combo)', specs: ['218C + 183F', '2 Baskets', '2 Doors', 'NA Star Rating', '+2°C ~ +8°C / -16°C ~ -24°C', '1 Year Warranty'] }
    ],
    specTable: {
      columns: ['Description', 'MF3DHT230SD', 'MF3DHT340SD', 'MF4DHT450DD', 'MF5DHT560DD', 'MFDHT310DDC', 'MFDHT410DDC'],
      rows: [
        { label: 'Star Rating (BEE)', values: ['3 Star', '3 Star', '4 Star', '5 Star', 'NA', 'NA'] },
        { label: 'Capacity (Litres)', values: ['200', '300', '400', '500', '166C + 130F', '218C + 183F'] },
        { label: 'External Dimension in mm (WxDxH)', values: ['815 x 720 x 825', '1105 x 720 x 845', '1395 x 720 x 845', '1685 x 720 x 845', '1115 x 720 x 845', '1395 x 720 x 845'] },
        { label: 'Packaging Dimension in mm (WxDxH)', values: ['885 x 760 x 900', '1175 x 760 x 900', '1465 x 760 x 900', '1755 x 760 x 900', '1180 x 770 x 885', '1475 x 770 x 885'] },
        { label: 'Baskets', values: ['1', '1', '1', '2', '2', '2'] },
        { label: 'No Of Doors', values: ['1', '1', '2', '2', '2', '2'] },
        { label: 'Temperature Range - °C', values: ['+5°C to -27°C', '+5°C to -27°C', '+5°C to -27°C', '+5°C to -27°C', '+2°C to +8°C / -16°C to -24°C', '+2°C to +8°C / -16°C to -24°C'] },
        { label: 'Castors (Wheels)', spans: [{ val: 'Yes', colSpan: 6 }] },
        { label: 'Lock & Key', spans: [{ val: 'Yes', colSpan: 6 }] },
        { label: 'Warranty Note', spans: [{ val: '1 Year Full Warranty', colSpan: 6 }] },
      ]
    },
    features: [
      { text: 'Eco-Friendly Refrigerant', icon: 'fa-solid fa-leaf' },
      { text: 'Low Power Consumption', icon: 'fa-solid fa-plug' },
      { text: 'Hinge Door', icon: 'fa-solid fa-door-open' },
      { text: 'Door Lock', icon: 'fa-solid fa-lock' },
      { text: 'Durable Castors (Wheels)', icon: 'fa-solid fa-circle-dot' },
      { text: 'Tropicalized @ 50°C', icon: 'fa-solid fa-thermometer' }
    ],
    related: [
      { id: 16, name: 'Blast Freezer', image: '/products/Blast Freezer.jpg', link: '/products/blast-freezer' },
      { id: 22, name: 'Water Dispenser', image: '/product thumbnail/ water dispenser new.jpeg', link: '/products/water-dispenser' },
    ]
  },
  'hard-top-chest-freezer-70mm': {
    name: 'Hard Top Chest Freezer 70mm',
    category: 'Commercial Refrigeration',
    breadcrumbs: ['Home', 'Commercial Cooling', 'Hard Top Chest Freezer 70mm'],
    sku: 'MF-DHT 70mm Series',
    images: [
      '/product thumbnail/HARD TOP CHEST FREEZER70MM.png',
      '/product thumbnail/HARD TOP CHEST FREEZER70MM.png',
      '/product thumbnail/HARD TOP CHEST FREEZER70MM.png',
    ],
    models: [
      { id: 'MF3DHT150SD', name: 'MF3DHT150SD (102L)', specs: ['102L', '1 Basket', '1 Door', '3 Star', '2.5°C ~ -29°C', '1 Year Warranty'] },
      { id: 'MF4DHT250SD', name: 'MF4DHT250SD (205L)', specs: ['205L', '1 Basket', '1 Door', '4 Star', '2.5°C ~ -29°C', '1 Year Warranty'] },
      { id: 'MF5DHT350SD', name: 'MF5DHT350SD (315L)', specs: ['315L', '1 Basket', '1 Door', '5 Star', '2.5°C ~ -29°C', '1 Year Warranty'] },
      { id: 'MF5DHT350DD', name: 'MF5DHT350DD (315L DD)', specs: ['315L', '2 Baskets', '2 Doors', '5 Star', '2.5°C ~ -29°C', '1 Year Warranty'] },
      { id: 'MF5DHT450DD', name: 'MF5DHT450DD (421L)', specs: ['421L', '2 Baskets', '2 Doors', '5 Star', '2.5°C ~ -29°C', '1 Year Warranty'] },
      { id: 'MF5DHT550DD', name: 'MF5DHT550DD (530L)', specs: ['530L', '2 Baskets', '2 Doors', '5 Star', '2.5°C ~ -29°C', '1 Year Warranty'] }
    ],
    specTable: {
      columns: ['Model', 'MF3DHT150SD', 'MF4DHT250SD', 'MF5DHT350SD', 'MF5DHT350DD', 'MF5DHT450DD', 'MF5DHT550DD'],
      rows: [
        { label: 'Star Rating (BEE)', values: ['3 Star', '4 Star', '5 Star', '5 Star', '5 Star', '5 Star'] },
        { label: 'Capacity (Litres)', values: ['102', '205', '315', '315', '421', '530'] },
        { label: 'External Dimension in mm (WxDxH)', values: ['580 x 630 x 835', '940 x 630 x 835', '1100 x 740 x 835', '1100 x 740 x 835', '1390 x 740 x 835', '1680 x 740 x 835'] },
        { label: 'Internal Dimension in mm (WxDxH)', values: ['440 x 440 x 632', '790 x 440 x 632', '960 x 550 x 632', '960 x 550 x 632', '1250 x 550 x 632', '1540 x 550 x 632'] },
        { label: 'Baskets', values: ['1', '1', '1', '2', '2', '2'] },
        { label: 'No Of Doors', values: ['1', '1', '1', '2', '2', '2'] },
        { label: 'Temperature Range', spans: [{ val: '2.5°C ~ -29°C', colSpan: 6 }] },
        { label: 'Castors', spans: [{ val: 'Yes', colSpan: 6 }] },
        { label: 'Lock', spans: [{ val: 'Yes', colSpan: 6 }] },
        { label: 'Warranty Note', spans: [{ val: '1 Year Full Warranty', colSpan: 6 }] },
      ]
    },
    features: [
      { text: 'Eco-Friendly Refrigerant', icon: 'fa-solid fa-leaf' },
      { text: 'Low Power Consumption', icon: 'fa-solid fa-plug' },
      { text: 'Hinge Door', icon: 'fa-solid fa-door-open' },
      { text: 'Door Lock', icon: 'fa-solid fa-lock' },
      { text: 'Durable Castors (Wheels)', icon: 'fa-solid fa-circle-dot' },
      { text: 'Tropicalized @ 50°C', icon: 'fa-solid fa-thermometer' }
    ],
    related: [
      { id: 16, name: 'Blast Freezer', image: '/products/Blast Freezer.jpg', link: '/products/blast-freezer' },
      { id: 23, name: 'Hard Top Chest Freezer', image: '/product thumbnail/HARD TOP CHEST FREEZER.png', link: '/products/hard-top-chest-freezer' },
    ]
  },
  'glass-top-chest-freezer': {
    name: 'Glass Top Chest Freezer',
    category: 'Commercial Refrigeration',
    breadcrumbs: ['Home', 'Commercial Cooling', 'Glass Top Chest Freezer'],
    sku: 'MF5DGT Series',
    images: [
      '/product thumbnail/GLASS TOP CHEST FREEZER.png',
      '/product thumbnail/GLASS TOP CHEST FREEZER.png',
      '/product thumbnail/GLASS TOP CHEST FREEZER.png',
    ],
    models: [
      { id: 'MF5DGT250', name: 'MF5DGT250 (200L)', specs: ['200L', '2 Baskets', 'Sliding Doors', '5 Star', '-17°C ~ -31°C', '1 Year Warranty'] },
      { id: 'MF5DGT350', name: 'MF5DGT350 (320L)', specs: ['320L', '3 Baskets', 'Sliding Doors', '5 Star', '-17°C ~ -31°C', '1 Year Warranty'] },
      { id: 'MF5DGT450', name: 'MF5DGT450 (430L)', specs: ['430L', '4 Baskets', 'Sliding Doors', '5 Star', '-17°C ~ -31°C', '1 Year Warranty'] },
      { id: 'MF5DGT550', name: 'MF5DGT550 (540L)', specs: ['540L', '5 Baskets', 'Sliding Doors', '5 Star', '-17°C ~ -31°C', '1 Year Warranty'] }
    ],
    specTable: {
      columns: ['Model', 'MF5DGT250', 'MF5DGT350', 'MF5DGT450', 'MF5DGT550'],
      rows: [
        { label: 'Star Rating (BEE)', values: ['5 Star', '5 Star', '5 Star', '5 Star'] },
        { label: 'Capacity (Litres)', values: ['200', '320', '430', '540'] },
        { label: 'External Dimension (WxDxH) (MM)', values: ['940 x 630 x 835', '1100 x 740 x 800', '1390 x 740 x 800', '1680 x 740 x 800'] },
        { label: 'Internal Dimension (WxDxH) (MM)', values: ['790 x 440 x 632', '960 x 550 x 632', '1250 x 550 x 632', '1540 x 550 x 632'] },
        { label: 'Baskets', values: ['2', '3', '4', '5'] },
        { label: 'No Of Doors (Sliding)', values: ['2', '2', '2', '2'] },
        { label: 'Temperature Range - °C', spans: [{ val: '-17°C ~ -31°C', colSpan: 4 }] },
        { label: 'Castors', spans: [{ val: 'Yes', colSpan: 4 }] },
        { label: 'Inbuilt Lock', spans: [{ val: 'Yes', colSpan: 4 }] },
        { label: 'Warranty Note', spans: [{ val: '1 Year Full Warranty', colSpan: 4 }] },
      ]
    },
    features: [
      { text: 'Eco-Friendly Refrigerant', icon: 'fa-solid fa-leaf' },
      { text: 'Low Power Consumption', icon: 'fa-solid fa-plug' },
      { text: 'Sliding Glass Door', icon: 'fa-solid fa-door-open' },
      { text: 'Inbuilt Lock', icon: 'fa-solid fa-lock' },
      { text: 'Durable Castors (Wheels)', icon: 'fa-solid fa-circle-dot' },
      { text: 'Tropicalized @ 50°C', icon: 'fa-solid fa-thermometer' }
    ],
    related: [
      { id: 16, name: 'Blast Freezer', image: '/products/Blast Freezer.jpg', link: '/products/blast-freezer' },
      { id: 23, name: 'Hard Top Chest Freezer', image: '/product thumbnail/HARD TOP CHEST FREEZER.png', link: '/products/hard-top-chest-freezer' },
      { id: 24, name: 'Hard Top Chest Freezer 70mm', image: '/product thumbnail/HARD TOP CHEST FREEZER70MM.png', link: '/products/hard-top-chest-freezer-70mm' },
    ]
  }
};


export default function ProductDetailsPage() {
  const params = useParams();
  const slug = params?.slug || 'visicooler';
  const [activeImage, setActiveImage] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    
    const body = `Name: ${form.name.value}
Email: ${form.email.value}
Mobile: ${form.mobile.value}

Message:
${form.message.value}`;

    window.location.href = `mailto:froveninnovations@outlook.com?subject=${encodeURIComponent(form.subject.value)}&body=${encodeURIComponent(body)}`;
  };

  // Lookup product or fallback to visicooler
  const product = productsData[slug] || productsData['visicooler'];

  return (
    <div className="app-container pd-page">
      <Header />

      {/* Breadcrumb */}
      <div className="pd-breadcrumb">
        {product.breadcrumbs.map((crumb, idx) => (
          <span key={idx}>
            {idx !== 0 && ' / '}
            <Link href={idx === 0 ? '/' : '/products'}>{crumb}</Link>
          </span>
        ))}
      </div>

      <div className="pd-container">
        
        {product.models ? (
          /* =========================================
             MODEL SELECTION GRID VIEW
             ========================================= */
          <div className="models-selection-view" style={{ padding: '40px 0 80px' }}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <h1 style={{ fontSize: '36px', color: 'var(--froven-dark-blue)', marginBottom: '16px' }}>Select a Model</h1>
              <p style={{ fontSize: '18px', color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>
                Discover our range of {product.name} configurations tailored to your specific cooling requirements.
              </p>
            </div>
            
            <div className="models-grid">
              {product.models.map((m) => {
                const categoryImage = productsList?.find(p => p.slug === slug)?.image || m.image;
                
                return (
                  <Link href={`/products/${slug}/${m.id}`} key={m.id} style={{ textDecoration: 'none' }}>
                    <div className="ref-card center-image model-card">
                      <div className="ref-card-title">
                        {m.name}
                        <div style={{ display: 'flex', gap: '6px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '6px' }}>
                          {m.specs.map((spec, i) => (
                             <span key={i} style={{ fontSize: '12px', background: 'rgba(255,255,255,0.2)', padding: '2px 8px', borderRadius: '4px', color: 'white' }}>
                               {spec}
                             </span>
                          ))}
                        </div>
                      </div>
                      <div 
                        className="ref-card-image" 
                        style={{ backgroundImage: `url('${categoryImage}')` }}
                      ></div>
                      <div className="ref-card-arrow">→</div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        ) : (
          /* =========================================
             STANDARD DETAIL VIEW (For non-hierarchical products)
             ========================================= */
          <>
            {/* Main Product Info */}
            <div className="pd-main">
          {/* Left: Gallery */}
          <div className="pd-gallery">
            <div className="pd-main-image">
              <i className="fa-solid fa-magnifying-glass pd-magnify"></i>
              <img src={product.images[activeImage]} alt={product.name} />
            </div>
            <div className="pd-thumbnails">
              {product.images.map((img, idx) => (
                <div 
                  key={idx} 
                  className={`pd-thumb ${activeImage === idx ? 'active' : ''}`}
                  onClick={() => setActiveImage(idx)}
                >
                  <img src={img} alt={`Thumb ${idx}`} />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Info */}
          <div className="pd-info">
            <div className="pd-badge">Premium Choice</div>
            <h1 className="pd-title">{product.name}</h1>
            
            <div className="pd-features">
              {product.features.map((feature, idx) => (
                <div className="pd-feature-item" key={idx}>
                  <div className="pd-feature-icon">
                    <i className={feature.icon}></i>
                  </div>
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>

            <div className="pd-actions">
              <button className="pd-enquire-btn" onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Enquire Now <i className="fa-solid fa-paper-plane"></i>
              </button>
            </div>

            <div className="pd-meta">
              <span>SKU: {product.sku}</span> | 
              <span>Category: <Link href="/products">{product.category}</Link></span>
            </div>
          </div>
        </div>

        {/* Technical Specs */}
        <div className="pd-tech-specs">
          <h2 className="pd-section-title">Technical Specifications</h2>
          <div className="pd-table-wrapper">
            <table className="pd-table">
              <thead>
                <tr>
                  {product.specTable.columns.map((col, idx) => (
                    <th key={idx}>{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {product.specTable.rows.map((row, idx) => (
                  <tr key={idx}>
                    <td>{row.label}</td>
                    {row.values ? (
                      row.values.map((val, vIdx) => <td key={vIdx}>{val}</td>)
                    ) : (
                      row.spans.map((s, sIdx) => (
                        <td key={sIdx} colSpan={s.colSpan} style={row.spans.length === 1 ? { textAlign: 'center' } : {}}>
                          {s.val}
                        </td>
                      ))
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Related Products */}
        <div className="pd-related">
          <h2 className="pd-section-title">Related Products</h2>
          <div className="pd-related-grid">
            {product.related.map((item) => (
              <Link href={item.link} key={item.id} className="related-card" style={{ textDecoration: 'none' }}>
                <div className="related-image-wrapper">
                  {(() => {
                    const relatedSlug = item.link.split('/').pop();
                    const relatedImage = productsList?.find(p => p.slug === relatedSlug)?.image || item.image;
                    return <img src={relatedImage} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />;
                  })()}
                </div>
                <div className="related-bottom">
                  <span className="related-name">{item.name}</span>
                  <span className="related-readmore">Read More</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
        </>
        )}

      </div>

        {/* Contact Section */}
        <div className="pd-contact-section" id="contact-section">
          <div className="pd-contact-container">
            <div className="pd-contact-info">
              <h2>GET IN TOUCH WITH US</h2>
              <p>Discover our top collections, carefully curated to deliver the best in quality, innovation, and performance.</p>
              
              <div className="pd-contact-links">
                <a href="https://wa.me/919702273180" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <span><i className="fa-brands fa-whatsapp"></i> WhatsApp</span>
                </a>
                <a href="tel:+919702273180" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <span><i className="fa-solid fa-phone"></i> Call Now</span>
                </a>
              </div>
            </div>

            <form className="pd-contact-form" onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Name" required />
              <input type="email" name="email" placeholder="Email" required />
              <input type="text" name="mobile" placeholder="Mobile Number" />
              <input type="text" name="subject" placeholder="Subject" required />
              <textarea name="message" placeholder="Message" required></textarea>
              <button type="submit">Request Call Back</button>
            </form>
          </div>
        </div>
      {/* Adding some spacing before footer since contact section has negative margin */}
      <div style={{ height: '100px' }}></div>

      <Footer />
    </div>
  );
}
