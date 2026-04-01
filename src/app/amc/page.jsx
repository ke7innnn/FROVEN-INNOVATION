'use client';

import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import SnowParticles from '../../components/SnowParticles';

export default function AmcPage() {
  const [hoveredPlan, setHoveredPlan] = useState(null);
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const [activeTab, setActiveTab] = useState('overview');

  const serviceOptions = [
    { id: 'overview', title: 'Overview', icon: 'fa-house-chimney-window' },
    { id: 'range', title: 'Range of Services', icon: 'fa-list-check' },
    { id: 'revamp', title: 'Revamp & Retrofit', icon: 'fa-screwdriver-wrench' },
    { id: 'air', title: 'Air Management', icon: 'fa-fan' },
    { id: 'water', title: 'Water Management', icon: 'fa-faucet-drip' },
    { id: 'energy', title: 'Energy Management', icon: 'fa-plug-circle-bolt' },
    { id: 'green', title: 'Green Building / WELL', icon: 'fa-leaf' },
    { id: 'engineering', title: 'Facility Management', icon: 'fa-building-shield' },
    { id: 'tab', title: 'TAB Services', icon: 'fa-sliders' }
  ];

  const serviceContent = {
    overview: (
      <div>
        <h2 style={{ fontSize: '32px', color: 'var(--froven-dark-blue)', marginBottom: '24px' }}>Customer Service Overview</h2>
        <p style={{ fontSize: '18px', color: '#64748b', lineHeight: '1.8' }}>
          Welcome to Froven Innovations Customer Service. We are committed to providing top-tier maintenance, retrofit, and management solutions for your commercial refrigeration and HVAC systems. Select a service from the menu to learn more about our comprehensive offerings designed to ensure peak performance and longevity of your vital equipment.
        </p>
      </div>
    ),
    range: (
      <div>
        <h2 style={{ fontSize: '32px', color: 'var(--froven-dark-blue)', marginBottom: '24px' }}>Range of Services</h2>
        <p style={{ fontSize: '18px', color: '#64748b', lineHeight: '1.8', marginBottom: '20px' }}>
          Froven Innovations’ service division provides an extensive array of solutions tailored to meet every potential requirement of HVAC installations at any phase of the equipment’s lifecycle. Our offerings include:
        </p>
        <ul style={{ fontSize: '18px', color: '#64748b', lineHeight: '1.8', marginBottom: '30px', paddingLeft: '20px' }}>
          <li>Maintenance Services</li>
          <li>Multi-Brand Chiller Services</li>
          <li>Value-Added Support</li>
          <li>Remote Monitoring Operations</li>
          <li>Energy Management Solutions</li>
          <li>Green Building Implementations</li>
          <li>Testing, Adjusting, and Balancing (TAB)</li>
          <li>Indoor Air Quality Management</li>
          <li>Audit Solutions</li>
          <li>Revamp and Retrofit Services</li>
          <li>Engineering Facility Management</li>
        </ul>
        <h3 style={{ fontSize: '24px', color: 'var(--froven-dark-blue)', marginBottom: '16px' }}>Annual Maintenance Contracts (AMCs)</h3>
        <p style={{ fontSize: '18px', color: '#64748b', lineHeight: '1.8', marginBottom: '20px' }}>
          Froven Innovations delivers a broad spectrum of AMCs designed to address all field requirements for repair, servicing, and ongoing maintenance.
        </p>
        
        <div style={{ marginBottom: '24px' }}>
          <h4 style={{ fontSize: '20px', color: 'var(--froven-blue)', fontWeight: 'bold' }}>RISK PROTECTION CONTRACT (RPC) / Comprehensive AMC (CAMC):</h4>
          <p style={{ fontSize: '18px', color: '#64748b', lineHeight: '1.8' }}>
            This all-inclusive contract covers all expenses—labor, spare parts, and consumables—needed to maintain the covered machinery. Based on the enrolled equipment, we proactively plan parts procurement and stock them across our national service centers. The RPC scope includes quarterly preventive maintenance (or more frequent intervals if demanded by site conditions), priority response to breakdown calls, and full replacement of required parts.
          </p>
        </div>

        <div style={{ marginBottom: '24px' }}>
          <h4 style={{ fontSize: '20px', color: 'var(--froven-blue)', fontWeight: 'bold' }}>COMPRESSOR EXCLUDED CONTRACT (CEC):</h4>
          <p style={{ fontSize: '18px', color: '#64748b', lineHeight: '1.8' }}>
            Identical in scope to the RPC, but specifically excludes the compressor unit. Should the compressor fail, it can be seamlessly procured via a separate purchase order.
          </p>
        </div>

        <div style={{ marginBottom: '24px' }}>
          <h4 style={{ fontSize: '20px', color: 'var(--froven-blue)', fontWeight: 'bold' }}>LABOUR MAINTENANCE CONTRACT (LBR):</h4>
          <p style={{ fontSize: '18px', color: '#64748b', lineHeight: '1.8' }}>
            This agreement provides expert labor for maintenance services exclusively. We conduct preventive maintenance every three months (or as site conditions dictate) and attend to all breakdown requests. If replacement parts become necessary, they are supplied directly by Froven Innovations under a separate purchase arrangement.
          </p>
        </div>

        <div style={{ marginBottom: '24px' }}>
          <h4 style={{ fontSize: '20px', color: 'var(--froven-blue)', fontWeight: 'bold' }}>OPERATING CONTRACT (OPR):</h4>
          <p style={{ fontSize: '18px', color: '#64748b', lineHeight: '1.8' }}>
            A dedicated manpower contract where Froven Innovations deploys highly trained operators to be stationed directly at your site. Available for single, double, or 24/7 shifts depending on your operational needs, our professionals actively operate the equipment while continuously monitoring parameters and status.
          </p>
        </div>
      </div>
    ),
    revamp: (
      <div>
        <h2 style={{ fontSize: '32px', color: 'var(--froven-dark-blue)', marginBottom: '24px' }}>Revamp and Retrofit Services</h2>
        <p style={{ fontSize: '18px', color: '#64748b', lineHeight: '1.8', marginBottom: '20px' }}>
          As technology advances and newer, highly efficient HVAC systems equipped with intelligent capabilities enter the market, it frequently makes financial sense to evaluate replacing or upgrading legacy systems. Moreover, fluctuations in heat loads may necessitate the redesign of existing cooling architectures or ductwork.
        </p>
        <p style={{ fontSize: '18px', color: '#64748b', lineHeight: '1.8', marginBottom: '20px' }}>
          Froven Innovations’ Revamp and Retrofit solutions are expertly customized to handle these exact scenarios. Aging systems inevitably draw more power and become expensive to maintain. Our specialized engineers will perform a thorough cost-benefit analysis to determine whether retrofitting or complete replacement will reduce your energy expenditure, elevate performance, and boost your operational bottom line. We can modify ducting, scale capacities, or swap out chillers to perfectly adapt to any revised heat load.
        </p>
        <p style={{ fontSize: '18px', color: '#64748b', lineHeight: '1.8', marginBottom: '20px' }}>
          System efficacy can be dramatically improved by replacing outdated condensing units, upgrading to energy-optimized compressors, transitioning to eco-friendly refrigerants, and swapping legacy electro-mechanical controls for advanced microprocessor-based management systems. This allows you to leverage cutting-edge technology without the massive capital expenditure of a totally new installation.
        </p>
        <p style={{ fontSize: '18px', color: '#64748b', lineHeight: '1.8', marginBottom: '20px' }}>
          Our retrofit capabilities extend beyond our own proprietary units to encompass systems from other manufacturers. Services include complete replacement, structural modification, strategic repair, relocation of active units, and the integration of new hardware to satisfy enhanced demand loads.
        </p>
        <h3 style={{ fontSize: '24px', color: 'var(--froven-dark-blue)', marginBottom: '16px', marginTop: '30px' }}>Equipment Covered Under Revamp & Retrofit:</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', fontSize: '18px', color: '#64748b' }}>
          <li>Chiller Units</li>
          <li>VRF Systems</li>
          <li>Ducted Networks</li>
          <li>Split ACs</li>
          <li>Air Handling Units (AHU)</li>
          <li>Ventilation Systems</li>
          <li>Cooling Towers</li>
          <li>Pumping Systems</li>
          <li>Chilled/Condenser Water Pipelines</li>
          <li>Electrical Infrastructures</li>
          <li>Air Distribution System Overhauls</li>
          <li>Specialty Filters and EC Fans</li>
        </div>
      </div>
    ),
    air: (
      <div>
        <h2 style={{ fontSize: '32px', color: 'var(--froven-dark-blue)', marginBottom: '24px' }}>Air Management Services</h2>
        <p style={{ fontSize: '18px', color: '#64748b', lineHeight: '1.8', marginBottom: '20px' }}>
          Research clearly establishes that indoor air can be significantly more polluted than the environment outside. Substandard air quality directly correlates with health complications, which subsequently triggers elevated absenteeism and crippling productivity losses in the workplace. Discover our specialized suite of offerings designed to sustain pristine indoor air quality within your commercial facilities.
        </p>
  
        <h3 style={{ fontSize: '24px', color: 'var(--froven-dark-blue)', marginBottom: '16px', marginTop: '30px' }}>Duct Cleaning Operations</h3>
        <p style={{ fontSize: '18px', color: '#64748b', lineHeight: '1.8', marginBottom: '20px' }}>
          Recent global health events have drastically amplified awareness regarding indoor air purity and the critical necessity of maintaining it. The spotlight is now firmly on the transmission of viruses, bacteria, and varied airborne pathogens through living and corporate spaces. Consequently, the rigorous sanitization of HVAC ducting systems is an absolute operational imperative to protect employees, residents, and consumers.
        </p>
  
        <h3 style={{ fontSize: '24px', color: 'var(--froven-dark-blue)', marginBottom: '16px', marginTop: '30px' }}>ULTRAVIOLET GERMICIDAL IRRADIATION (UVGI)</h3>
        <p style={{ fontSize: '18px', color: '#64748b', lineHeight: '1.8', marginBottom: '20px' }}>
          Infectious droplets from coughing or sneezing survive considerably longer in cooled, low-humidity environments, keeping them suspended in the atmosphere and escalating transmission risks. Ultraviolet Germicidal Irradiation (UVGI) is a globally recognized technology for atmospheric disinfection. Utilizing UVC light at a specific 253.7 nm wavelength, this system effectively neutralizes the nucleic acids of hazardous microorganisms, including resilient viruses. Froven Innovations’ proprietary UV Duct System actively mitigates the proliferation of infectious microbes—ensuring the air circulating within your conditioned space remains both perfectly chilled and medically safe. It integrates seamlessly into any standard ducted air conditioning framework.
        </p>
  
        <h3 style={{ fontSize: '24px', color: 'var(--froven-dark-blue)', marginBottom: '16px', marginTop: '30px' }}>ADVANCED DEACTIVATION FILTRATION</h3>
        <p style={{ fontSize: '18px', color: '#64748b', lineHeight: '1.8', marginBottom: '20px' }}>
          Conditioned air can be mechanically purified by forcing it through scientifically treated filtration active barriers. Froven's advanced filtration ducted systems arrive equipped with specialized antimicrobial fabrics. These filters feature a highly concentrated reactive coating designed to actively neutralize harmful bacteria and airborne coronaviruses instantly upon contact, guaranteeing the distributed air is pure and hygienic.
        </p>
  
        <h3 style={{ fontSize: '24px', color: 'var(--froven-dark-blue)', marginBottom: '16px', marginTop: '30px' }}>INDOOR AIR QUALITY (IAQ) ANALYSIS</h3>
        <p style={{ fontSize: '18px', color: '#64748b', lineHeight: '1.8', marginBottom: '20px' }}>
          Indoor Air Quality dictates the health and physical comfort of the individuals occupying a building. Since humans spend up to 80% of their lives indoors, the atmospheric condition of those spaces is a vital determinant of overall well-being. Deficient IAQ is directly linked to Sick Building Syndrome (SBS), severe drops in workplace output (up to 10% productivity loss), and cognitive impairment. 
        </p>
        
        <p style={{ fontSize: '18px', color: '#64748b', lineHeight: '1.8', marginBottom: '10px', fontWeight: 'bold' }}>Common IAQ Degradation Factors:</p>
        <ul style={{ fontSize: '18px', color: '#64748b', lineHeight: '1.8', marginBottom: '20px', paddingLeft: '20px' }}>
          <li>Subpar maintenance turning HVAC arrays into contamination sources.</li>
          <li>Occupational loads exceeding the original design parameters.</li>
          <li>Insufficient inflow of fresh ventilation.</li>
          <li>Restricted circulation due to poorly positioned exhaust vents.</li>
          <li>Intake vents unwittingly pulling in external pollutants like vehicle exhaust.</li>
        </ul>
  
        <p style={{ fontSize: '18px', color: '#64748b', lineHeight: '1.8', marginBottom: '10px', fontWeight: 'bold' }}>Our Audit Parameters Include:</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '5px', fontSize: '16px', color: '#64748b', marginBottom: '20px' }}>
          <li>Temperature (°C) & Relative Humidity (%)</li>
          <li>Carbon Dioxide (CO2) & Carbon Monoxide (CO) PPM</li>
          <li>Ozone (O3) & Sulphur Dioxide (SO2) PPM</li>
          <li>Nitrogen Dioxide (NO2) & Ammonia (NH3) PPM</li>
          <li>Oxygen (O2) Percentage</li>
          <li>Total Volatile Organic Compounds (TVOC) PPM</li>
          <li>Suspended Particulate Matter (SPM)</li>
          <li>Formaldehyde Levels</li>
        </div>
        
        <p style={{ fontSize: '18px', color: '#64748b', lineHeight: '1.8', marginBottom: '20px' }}>
          Our comprehensive IAQ audit maps these metrics against strict international standards (ASHRAE, OSHA, NIOSH). Utilizing imported, state-of-the-art electrochemical sensory equipment, we silently and accurately measure time-weighted averages during standard working hours. We then execute targeted solutions to eliminate or safely dilute any hazardous pollutant sources.
        </p>
      </div>
    ),
    water: (
      <div>
        <h2 style={{ fontSize: '32px', color: 'var(--froven-dark-blue)', marginBottom: '24px' }}>Water Management Services</h2>
        <p style={{ fontSize: '18px', color: '#64748b', lineHeight: '1.8', marginBottom: '20px' }}>
          Froven Innovations delivers highly specialized industrial products within the Water Management sector, engineered exclusively to protect and optimize vital cooling infrastructure.
        </p>
        <h3 style={{ fontSize: '24px', color: 'var(--froven-dark-blue)', marginBottom: '16px', marginTop: '30px' }}>AUTOMATED TUBE CLEANING SYSTEM FOR SHELL AND TUBE HEAT EXCHANGERS</h3>
        <p style={{ fontSize: '18px', color: '#64748b', lineHeight: '1.8', marginBottom: '20px' }}>
          Our automated hydrodynamic cleaning architecture permanently eradicates the threat of sediment accumulation inside central cooling arrays. This fiercely reliable, fully automated system operates without problematic moving internal parts, ensuring condensers remain fundamentally spotless. The mechanism continuously cycles specialized sponge spheres through the condenser tubing at pre-programmed intervals. These spheres physically scrub and absorb all accumulated sediment from the internal surfaces without causing any disruptions or drops to the standard water flow pressures.
        </p>
      </div>
    ),
    energy: (
      <div>
        <h2 style={{ fontSize: '32px', color: 'var(--froven-dark-blue)', marginBottom: '24px' }}>Energy Management Services</h2>
        <p style={{ fontSize: '18px', color: '#64748b', lineHeight: '1.8', marginBottom: '20px' }}>
          Backed by decades of hardcore project engineering experience, Froven Innovations deploys elite energy management solutions explicitly for the corporate, industrial, and commercial sectors.
        </p>
  
        <h3 style={{ fontSize: '24px', color: 'var(--froven-dark-blue)', marginBottom: '16px', marginTop: '30px' }}>1. Comprehensive & Walk-Through Energy Audits</h3>
        <p style={{ fontSize: '18px', color: '#64748b', lineHeight: '1.8', marginBottom: '20px' }}>
          We conduct preliminary and deep-dive energy consumption analyses to isolate highly effective low-cost or no-cost improvement measures. We also assess potential capital infrastructure overhauls, providing stringent energy recovery calculations and detailed financial ROI analysis for any proposed efficiency mechanisms.
        </p>
  
        <h3 style={{ fontSize: '24px', color: 'var(--froven-dark-blue)', marginBottom: '16px', marginTop: '30px' }}>2. Power Quality Analysis</h3>
        <p style={{ fontSize: '18px', color: '#64748b', lineHeight: '1.8', marginBottom: '20px' }}>
          Our grid and internal power quality audits are designed to uncover systemic electrical anomalies or dirty power issues existing within a facility, accompanied by engineered solutions to rapidly mitigate those risks and protect sensitive hardware.
        </p>
  
        <h3 style={{ fontSize: '24px', color: 'var(--froven-dark-blue)', marginBottom: '16px', marginTop: '30px' }}>3. Advanced Plant & Air Audits</h3>
        <ul style={{ fontSize: '18px', color: '#64748b', lineHeight: '1.8', marginBottom: '20px', paddingLeft: '20px' }}>
          <li><strong>Boiler Performance Evaluation:</strong> Rigorous assessment of varied industrial boilers (Packaged, Travelling grate, AFBC, CFBC, Pulverized fuel setups) and their peripheral subsystems.</li>
          <li><strong>Steam Turbine Evaluation:</strong> Output and efficiency analysis for turbines and connected accessories.</li>
          <li><strong>Compressed Air System Optimization:</strong> Compressed air is notoriously expensive due to massive electricity demands. Froven isolates algorithmic optimizations for air consumption, dramatically driving down the overall energy footprint of industrial plants.</li>
        </ul>
      </div>
    ),
    green: (
      <div>
        <h2 style={{ fontSize: '32px', color: 'var(--froven-dark-blue)', marginBottom: '24px' }}>Green Building Services & WELL</h2>
        <p style={{ fontSize: '18px', color: '#64748b', lineHeight: '1.8', marginBottom: '20px' }}>
          Froven Innovations is deeply entrenched in the pursuit of rendering modern infrastructure green, environmentally sustainable, and exceptionally efficient. We actively assist structural developers and owners in easily achieving their targeted LEED and environmental certification directives.
        </p>
        <p style={{ fontSize: '18px', color: '#64748b', lineHeight: '1.8', marginBottom: '20px' }}>
          Our certified internal professionals expertly guide operators of both newly constructed and legacy buildings to prepare for and successfully obtain top-tier ecological compliance and green certifications.
        </p>
  
        <h3 style={{ fontSize: '24px', color: 'var(--froven-dark-blue)', marginBottom: '16px', marginTop: '30px' }}>Primary Services Deployed:</h3>
        <ul style={{ fontSize: '18px', color: '#64748b', lineHeight: '1.8', marginBottom: '20px', paddingLeft: '20px' }}>
          <li>Comprehensive Feasibility Studies</li>
          <li>Precision Commissioning Services</li>
          <li>Predictive Energy Modeling</li>
          <li>End-to-End Handholding throughout the formal certification timeline</li>
        </ul>
  
        <h3 style={{ fontSize: '24px', color: 'var(--froven-dark-blue)', marginBottom: '16px', marginTop: '30px' }}>The WELL Building Standard Implementation</h3>
        <p style={{ fontSize: '18px', color: '#64748b', lineHeight: '1.8', marginBottom: '20px' }}>
          At Froven Innovations, we believe optimal spaces should directly nurture the wellbeing and health of their occupants. Utilizing our certified WELL Accredited Professionals (WELL AP), we are steadfast in our mission to architect healthier, drastically more sustainable physical environments. 
        </p>
        <p style={{ fontSize: '18px', color: '#64748b', lineHeight: '1.8', marginBottom: '20px' }}>
          Our experts guarantee that every facet of the project matrix is engineered to bolster human health. From the absolute purification of localized air and water supplies, to intelligently automated lighting grids and strict ergonomic compliance, we deploy environments that actively advocate for structural wellness.
        </p>
        <p style={{ fontSize: '18px', color: '#64748b', lineHeight: '1.8', marginBottom: '20px' }}>
          The WELL Standard not only prioritizes biological safety but inherently weaves those concepts into uncompromising sustainability models, granting our clients an unparalleled competitive edge in modern infrastructure asset management. Experience exactly where operational health meets high-end engineering with Froven.
        </p>
      </div>
    ),
    engineering: (
      <div>
        <h2 style={{ fontSize: '32px', color: 'var(--froven-dark-blue)', marginBottom: '24px' }}>Engineering Facility Management Services</h2>
        <p style={{ fontSize: '18px', color: '#64748b', lineHeight: '1.8', marginBottom: '20px' }}>
          Engineering Facility Management (EFM) is our holistic, aggressive approach to aggressively maintaining all technical verticals of your real estate, guaranteeing flawless, hyper-efficient daily operations.
        </p>
        <p style={{ fontSize: '18px', color: '#64748b', lineHeight: '1.8', marginBottom: '20px' }}>
          Our protocol unifying critical disciplines—spanning complex electrical grids, heavy HVAC arrays, robust plumbing infrastructures, and automated fire-suppression logic—under one seamlessly commanded roof. This grants incredible synergistic efficiency, injecting the correct specialized manpower, diagnostic tracking technology, and uncompromising domain expertise to harmonize and maintain these differing systems flawlessly.
        </p>
        <p style={{ fontSize: '18px', color: '#64748b', lineHeight: '1.8', marginBottom: '20px' }}>
          Leveraging massive project management capability and deep EMPG integration, Froven Innovations inherently understands the granular complexities involved in the ongoing operation of heavy engineering hardware. We act as the ultimate centralized command authority for all operational maintenance parameters within your industrial or commercial facility.
        </p>
      </div>
    ),
    tab: (
      <div>
        <h2 style={{ fontSize: '32px', color: 'var(--froven-dark-blue)', marginBottom: '24px' }}>Testing, Adjusting, and Balancing (TAB) Services</h2>
        <p style={{ fontSize: '18px', color: '#64748b', lineHeight: '1.8', marginBottom: '20px' }}>
          Testing, Adjusting, and Balancing (TAB) is an enormously critical engineering process mapped to the entire spectrum of HVAC deployments. TAB embodies the strict methodical quantification of an ecosystem to verify it operates exactly to its designed stress limits and capability markers. Our foundational goal is standardizing a biologically harmonious internal environment wherein air purity, thermal comfort, and raw energy efficiency are flawlessly balanced.
        </p>
        <p style={{ fontSize: '18px', color: '#64748b', lineHeight: '1.8', marginBottom: '20px' }}>
          The workflow encompasses specialized tracking of complex variables: volumetric air and water transfer rates, thermal differentials, and ambient pressure stabilization. Our technicians execute these checks via highly calibrated hardware, directly manipulating the HVAC sub-components so reality perfectly mirrors the theoretical blueprint.
        </p>
  
        <ul style={{ fontSize: '18px', color: '#64748b', lineHeight: '1.8', marginBottom: '20px', paddingLeft: '20px' }}>
          <li><strong>Rigorous Testing:</strong> Deployment of specialized sensory equipment to accurately capture thermal limits, speeds, voltages, and fluid volume parameters to strictly assess isolated component yield.</li>
          <li><strong>Precision Adjusting:</strong> The conclusive physical modulation of balancing throttles, motorized dampers, valves, vari-speed impeller drives, and automated control nodes (like localized thermostats) to command maximum operational yield without strain.</li>
          <li><strong>Algorithmic Balancing:</strong> The calculated regulation of bulk site fluid kinematics to consistently guarantee the explicitly designed volume metrics.</li>
        </ul>
  
        <h3 style={{ fontSize: '24px', color: 'var(--froven-dark-blue)', marginBottom: '16px', marginTop: '30px' }}>When is TAB Engineering Required?</h3>
        <ul style={{ fontSize: '18px', color: '#64748b', lineHeight: '1.8', marginBottom: '20px', paddingLeft: '20px' }}>
          <li><strong>New Architecture:</strong> Full infrastructural balance preceding official operational launch.</li>
          <li><strong>Structural Remodels:</strong> Subsequent to wall shifts, equipment relocation, or occupant density changes.</li>
          <li><strong>Periodic Re-balancing:</strong> Essential systemic re-calibration mandated across multi-year asset lifecycles.</li>
          <li><strong>Hardware Swaps:</strong> Finalization phase following the integration of modernized heavy HVAC units.</li>
          <li><strong>Inefficiency Diagnostics:</strong> Active crisis investigation into systemic cooling failure or comfort degradation.</li>
        </ul>
  
        <h3 style={{ fontSize: '24px', color: 'var(--froven-dark-blue)', marginBottom: '16px', marginTop: '30px' }}>The Concrete Assets Derived from TAB Engineering:</h3>
        <ul style={{ fontSize: '18px', color: '#64748b', lineHeight: '1.8', marginBottom: '20px', paddingLeft: '20px' }}>
          <li>Strict atmospheric stabilization drastically boosting physiological comfort and ventilation metrics.</li>
          <li>Precision hydronic governance of chilled water channels, instantly driving down pump electrical demands.</li>
          <li>Aggressive system tuning to correct for actual on-site architectural anomalies ignoring the raw design data.</li>
          <li>Comprehensive pre-verification audits halting installation flaws before final hardware lockdown.</li>
          <li>Granular diagnostic reporting clearly illustrating the delta between theoretical design output and raw factual performance.</li>
        </ul>
        <p style={{ fontSize: '18px', color: '#64748b', lineHeight: '1.8', marginBottom: '20px' }}>
          TAB is a highly meticulous, absolutely uncompromising protocol ensuring cooling machinery not only hits its performance envelope but fiercely drives down parasitic electrical consumption. Froven Innovations executes definitive system surveys, and air/hydronic balancing resolutions on demand.
        </p>
      </div>
    )
  };


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="app-container">
      <Header />
      
      <style>{`
        .service-content-block h2 { font-size: 38px !important; font-weight: 900 !important; background: linear-gradient(135deg, #054078 0%, #38bdf8 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 30px !important; letter-spacing: -0.5px; }
        .service-content-block h3 { font-size: 26px !important; font-weight: 800 !important; color: #0f172a !important; margin-top: 40px !important; margin-bottom: 20px !important; display: flex; align-items: center; }
        .service-content-block h3::before { content: ""; display: inline-block; width: 8px; height: 24px; background: #38bdf8; border-radius: 4px; margin-right: 12px; }
        .service-content-block h4 { font-size: 20px !important; font-weight: 800 !important; color: #38bdf8 !important; margin-bottom: 12px !important; text-transform: uppercase; letter-spacing: 1px; }
        .service-content-block p { font-size: 18px !important; color: #475569 !important; line-height: 1.9 !important; margin-bottom: 24px !important; }
        .service-content-block ul { list-style: none !important; padding-left: 0 !important; display: grid; gap: 16px; margin-bottom: 35px !important; }
        .service-content-block ul:not([style*="display: grid"]) { grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); }
        .service-content-block li { background: #f8fafc; padding: 16px 20px; border-radius: 12px; border-left: 4px solid #38bdf8; font-size: 17px !important; color: #334155 !important; font-weight: 500; display: flex; align-items: flex-start; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05); }
        .service-content-block li::before { font-family: "Font Awesome 6 Free"; content: "\\f00c"; font-weight: 900; color: #38bdf8; margin-right: 12px; font-size: 18px; margin-top: 2px; }
        .service-content-block strong { color: #0f172a; font-weight: 800; }
        .glass-btn { position: relative; overflow: hidden; transition: all 0.3s ease; }
        .glass-btn::after { content: ""; position: absolute; top: 0; left: -100%; width: 50%; height: 100%; background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%); transform: skewX(-25deg); animation: shine 6s infinite; }
        @keyframes shine { 0% { left: -100%; } 20% { left: 200%; } 100% { left: 200%; } }
      `}</style>
      
      <main style={{ backgroundColor: '#ffffff' }}>
        
        {/* Hero Section */}
        <section 
          style={{ 
            minHeight: '85vh',
            display: 'flex',
            alignItems: 'center',
            backgroundImage: "url('/3 slides/slide 3comp.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative'
          }}
        >
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle at 70% 50%, rgba(5,64,120,0.7) 0%, rgba(5,64,120,0.95) 100%)',
            zIndex: 1
          }}></div>
          <SnowParticles />
          
          <div style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} style={{ maxWidth: '800px' }}>
              <h1 style={{ fontSize: '72px', fontWeight: 900, color: 'white', lineHeight: '1.05', marginBottom: '30px', letterSpacing: '-1.5px', textShadow: '0 20px 40px rgba(0,0,0,0.3)' }}>
                SERVICING FOR <br/>
                <span style={{ color: 'transparent', WebkitTextStroke: '2px #bae6fd', backgroundImage: 'linear-gradient(to right, #bae6fd, #38bdf8)', WebkitBackgroundClip: 'text', backgroundClip: 'text' }}>BEST PERFORMANCE.</span>
              </h1>
              
              <p style={{ fontSize: '24px', color: '#e2e8f0', lineHeight: '1.6', marginBottom: '50px', maxWidth: '650px', fontWeight: 300, textShadow: '0 4px 10px rgba(0,0,0,0.2)' }}>
                An unexpected breakdown isn't just an inconvenience—it's catastrophic inventory loss. Froven's Annual Maintenance Contracts shift your strategy from reactive panic to <strong style={{color: 'white', fontWeight: 700}}>proactive security</strong>.
              </p>
              
              <div style={{ display: 'flex', gap: '20px' }}>
                <a href="/contact" className="glass-btn" style={{ display: 'inline-flex', alignItems: 'center', padding: '18px 45px', background: 'linear-gradient(135deg, #38bdf8 0%, #0ea5e9 100%)', color: 'white', borderRadius: '40px', fontSize: '18px', fontWeight: 800, textDecoration: 'none', transition: 'all 0.3s ease', boxShadow: '0 15px 30px rgba(56, 189, 248, 0.4)' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'none'}>
                  Talk to an Expert <i className="fa-solid fa-arrow-right" style={{ marginLeft: '12px' }}></i>
                </a>
              </div>
            </motion.div>
          </div>
          
          {/* Animated Scroll Indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            <span style={{ color: 'white', fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '10px', opacity: 0.7 }}>Scroll</span>
            <div style={{ width: '30px', height: '50px', border: '2px solid rgba(255,255,255,0.3)', borderRadius: '20px', display: 'flex', justifyContent: 'center', padding: '5px' }}>
              <motion.div 
                animate={{ y: [0, 15, 0] }} 
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                style={{ width: '6px', height: '6px', backgroundColor: 'white', borderRadius: '50%' }}
              />
            </div>
          </motion.div>
        </section>

        
        {/* Customer Services Framework Options */}
        <section style={{ padding: '80px 20px', backgroundColor: '#f4f7f6', backgroundImage: 'radial-gradient(#e2e8f0 1.5px, transparent 1.5px)', backgroundSize: '30px 30px' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', gap: '40px', flexDirection: 'row', flexWrap: 'wrap' }}>
            
            {/* Sidebar Navigation */}
            <div style={{ flex: '1', minWidth: '320px', maxWidth: '380px', backgroundColor: 'rgba(255, 255, 255, 0.85)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', borderRadius: '30px', padding: '40px 24px', boxShadow: '0 20px 60px rgba(5,64,120,0.08)', height: 'fit-content', position: 'sticky', top: '100px', border: '1px solid rgba(255,255,255,0.8)' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '30px', paddingLeft: '12px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'linear-gradient(135deg, #38bdf8 0%, #054078 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '16px', boxShadow: '0 10px 20px rgba(5,64,120,0.2)' }}>
                  <i className="fa-solid fa-layer-group" style={{ color: 'white', fontSize: '18px' }}></i>
                </div>
                <h3 style={{ fontSize: '22px', fontWeight: 900, color: 'var(--froven-dark-blue)', margin: 0, textTransform: 'uppercase', letterSpacing: '1px' }}>Solutions Menu</h3>
              </div>
              
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {serviceOptions.map((opt) => (
                  <li key={opt.id}>
                    <button
                      onClick={() => setActiveTab(opt.id)}
                      style={{
                        width: '100%',
                        textAlign: 'left',
                        padding: '18px 24px',
                        backgroundColor: activeTab === opt.id ? 'var(--froven-dark-blue)' : 'transparent',
                        color: activeTab === opt.id ? 'white' : '#475569',
                        border: 'none',
                        borderRadius: '20px',
                        fontSize: '16px',
                        fontWeight: activeTab === opt.id ? 700 : 600,
                        cursor: 'pointer',
                        transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                        display: 'flex',
                        alignItems: 'center',
                        boxShadow: activeTab === opt.id ? '0 15px 30px rgba(5,64,120,0.25)' : 'none',
                        transform: activeTab === opt.id ? 'translateY(-3px)' : 'none'
                      }}
                      onMouseOver={(e) => {
                        if (activeTab !== opt.id) {
                          e.currentTarget.style.backgroundColor = 'rgba(56, 189, 248, 0.1)';
                          e.currentTarget.style.color = 'var(--froven-blue)';
                          e.currentTarget.style.transform = 'translateY(-2px)';
                        }
                      }}
                      onMouseOut={(e) => {
                        if (activeTab !== opt.id) {
                          e.currentTarget.style.backgroundColor = 'transparent';
                          e.currentTarget.style.color = '#475569';
                          e.currentTarget.style.transform = 'none';
                        }
                      }}
                    >
                      <i className={`fa-solid ${opt.icon}`} style={{ width: '28px', fontSize: '18px', opacity: activeTab === opt.id ? 1 : 0.6, marginRight: '14px', transition: 'all 0.3s ease' }}></i>
                      {opt.title}
                      {activeTab === opt.id && <i className="fa-solid fa-chevron-right" style={{ marginLeft: 'auto', fontSize: '14px', opacity: 0.9, animation: 'fadeIn 0.3s ease' }}></i>}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Main Content Area */}
            <div style={{ flex: '2', minWidth: '320px', backgroundColor: 'white', borderRadius: '30px', padding: '60px 80px', boxShadow: '0 20px 60px rgba(5,64,120,0.06)', minHeight: '600px', border: '1px solid rgba(226, 232, 240, 0.8)', position: 'relative', overflow: 'hidden' }}>
              
              {/* Decorative Accents */}
              <div style={{ position: 'absolute', top: 0, right: 0, width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(56,189,248,0.08) 0%, rgba(255,255,255,0) 70%)', transform: 'translate(30%, -30%)', borderRadius: '50%', pointerEvents: 'none' }}></div>
              <div style={{ position: 'absolute', bottom: 0, left: 0, width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(5,64,120,0.03) 0%, rgba(255,255,255,0) 70%)', transform: 'translate(-30%, 30%)', borderRadius: '50%', pointerEvents: 'none' }}></div>
              
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: -25, filter: 'blur(8px)' }}
                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                style={{ position: 'relative', zIndex: 1 }}
                className="service-content-block"
              >
                {serviceContent[activeTab]}
              </motion.div>
            </div>
            
          </div>
        </section>



        {/* Global CTA */}
        <section 
          style={{ 
            padding: '120px 20px', 
            backgroundColor: '#f4f7f6',
            position: 'relative'
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', overflow: 'hidden', borderRadius: '40px', boxShadow: '0 40px 80px rgba(5,64,120,0.15)' }}>
            
            <div style={{ 
              position: 'absolute', inset: 0, 
              backgroundImage: "url('/products/Back Bars.jpg')",
              backgroundPosition: 'center', backgroundSize: 'cover',
              zIndex: 0
            }}></div>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(5,64,120,0.95) 0%, rgba(5,64,120,0.85) 100%)', zIndex: 1 }}></div>
            
            <div style={{ position: 'relative', zIndex: 2, padding: '100px 40px', textAlign: 'center' }}>
              <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}>
                <h2 style={{ fontSize: '56px', fontWeight: 900, color: 'white', marginBottom: '24px', letterSpacing: '-1px' }}>Ready to eliminate downtime?</h2>
                <div style={{ width: '100px', height: '4px', background: 'linear-gradient(90deg, transparent, #38bdf8, transparent)', margin: '0 auto 30px' }}></div>
                <p style={{ fontSize: '24px', color: '#e2e8f0', lineHeight: '1.6', maxWidth: '750px', margin: '0 auto 50px', fontWeight: 300 }}>
                  Let's engineer a maintenance protocol that perfectly matches your inventory load. Drop us a message or call directly for immediate deployment.
                </p>
                <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <a href="/contact" className="glass-btn" style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: '#38bdf8', color: 'var(--froven-dark-blue)', padding: '20px 45px', borderRadius: '40px', fontSize: '18px', fontWeight: 800, textDecoration: 'none', transition: 'all 0.3s ease', boxShadow: '0 15px 30px rgba(0,0,0,0.2)' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'none'}>
                    Get a Free Quote <i className="fa-solid fa-file-invoice" style={{ marginLeft: '12px' }}></i>
                  </a>
                  <a href="tel:+919702273180" style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.3)', color: 'white', padding: '20px 45px', borderRadius: '40px', fontSize: '18px', fontWeight: 800, textDecoration: 'none', transition: 'all 0.3s ease' }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'white'; e.currentTarget.style.color = 'var(--froven-dark-blue)'; e.currentTarget.style.transform = 'translateY(-3px)'; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = 'white'; e.currentTarget.style.transform = 'none'; }}>
                    <i className="fa-solid fa-phone-volume" style={{ marginRight: '12px' }}></i> Call +91 97022 73180
                  </a>
                </div>
              </motion.div>
            </div>
            
          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
}
