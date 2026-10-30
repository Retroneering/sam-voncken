export const projects = [
  {
    id: 'lfs27-accumulator-cooling',
    title: 'LFS27 accumulator cooling',
    category: 'Thermal engineering · Formula Student',
    year: '2025 — Present',
    status: 'Currently ongoing',
    cover: './assets/images/lfs27-frontpic.webg',
    coverAlt: 'LFS27 accumulator cooling project',
    summary: 'A hand-calculation-led thermal model for the accumulator of an 80 kW electric Formula Student car, correlated with Ansys simulations.',
    role: 'Cooling System Engineer in the Lund Formula Student powertrain group. I own the accumulator thermal modelling and air-cooling development within the accumulator-cooling sub-team.',
    tags: ['Thermal modelling', 'Ansys', 'Air cooling', 'Hand calculations', 'Formula Student'],
    intro: 'How do you remove heat from a tightly packaged accumulator without adding unnecessary mass, pressure loss or complexity? This project starts with first-principles calculations and uses simulation to challenge them.',
    metrics: [
      { value: '80 kW', label: 'Full-electric Formula Student car' },
      { value: '550 W', label: 'Cooling design heat load' },
      { value: '4', label: 'Hub motors' }
    ],
    details: [
      { title: 'The engineering problem', text: 'The LFS27 accumulator must remain within its allowable temperature window while fitting inside a competitive vehicle package. Cooling performance therefore cannot be treated in isolation: airflow, available volume, mass and integration with the rest of the powertrain all shape the answer.' },
      { title: 'Model before geometry', text: 'I began with a thermal representation of the accumulator and hand calculations sized around a 550 W heat load. This makes the governing assumptions visible early: heat generation, heat-transfer paths, air-side behaviour and the sensitivity of the result to uncertain inputs. The analytical model provides a baseline that can be checked rather than a black-box answer.' },
      { title: 'Correlation and iteration', text: 'Ansys thermal simulations are being used to correlate the hand calculations and expose where the simplified representation diverges from the three-dimensional hardware. The comparison is part of the design loop: investigate discrepancies, refine assumptions and use the improved model to guide the air-cooling layout.' }
    ],
    results: [
      'Established a transparent thermal baseline for accumulator-cooling decisions.',
      'Connected first-principles sizing with detailed Ansys thermal analysis.',
      'Cooling architecture and design iterations remain under active development.'
    ],
    note: 'Ongoing project: no final performance or experimental-validation claims are made at this stage.'
  },
  {
    id: 'retroneering',
    title: 'Retroneering.com',
    category: 'Venture · Reverse engineering',
    year: '2026 — Present',
    status: 'In development',
    cover: './assets/images/retroneering-frontpic.webg',
    coverAlt: 'Retroneering reverse-engineering work',
    summary: 'An independent reverse-engineering venture for discontinued classic and race-car parts — from physical measurement to CAD, drawings and validation.',
    role: 'Founder and engineer. I am developing the measurement, reconstruction, drawing and simulation workflows, as well as the remote-capture process and technical direction of the venture.',
    tags: ['Reverse engineering', 'CAD', 'GD&T', 'Photogrammetry', 'MATLAB'],
    intro: 'When a component is no longer available, the part itself becomes the drawing. Retroneering is being built to turn that physical evidence into manufacturable, checkable engineering information.',
    metrics: [
      { value: '3D → 2D', label: 'Reconstruction to manufacturing data' },
      { value: 'Remote', label: 'Guided capture workflow in development' },
      { value: 'MATLAB', label: 'Working grid-rectifier model' }
    ],
    details: [
      { title: 'Reverse-engineering workflow', text: 'The core process combines precision hand measurement, geometric reconstruction, parametric CAD and GD&T drawings. Functional surfaces, interfaces and tolerances matter as much as external shape: a useful reconstruction must explain how the part fits and works, not simply reproduce its silhouette. FEA can then be used where structural behaviour needs to be assessed.' },
      { title: 'Capture beyond the workshop', text: 'The planned remote-capture workflow uses guided phone photographs from multiple angles, caliper dimensions and, where useful, a rotating video. Suitable flat parts can also be scanned and calibrated before unwarping. Photogrammetry and structured-light scanning are being evaluated for more controlled capture. The expected limits of remote measurements are treated explicitly rather than hidden behind a precise-looking model.' },
      { title: 'Simulation alongside reconstruction', text: 'Alongside the physical-part workflow, I built a working MATLAB grid-rectifier model. It forms a separate demonstration of system-level modelling: translating an electrical architecture into equations and simulation blocks, then using the model to inspect behaviour and support engineering reasoning.' }
    ],
    results: [
      'Defined an end-to-end reconstruction workflow centred on functional design intent.',
      'Developed the foundations for remote capture and an in-house photogrammetry pipeline.',
      'Built a working MATLAB grid-rectifier model as a system-simulation demonstrator.'
    ],
    note: 'Retroneering is an early-stage venture. No completed customer projects are claimed or presented here.',
    links: [{ label: 'Visit Retroneering', url: 'https://retroneering.com/', external: true }]
  },
  {
    id: 'project-locagas',
    title: 'Project LoCaGas',
    category: 'Combustion research · Dual fuel',
    year: '2025 — Present',
    status: 'Currently ongoing',
    cover: './assets/images/locagas-frontpic.webg',
    coverAlt: 'Project LoCaGas engine research',
    summary: 'Experimental heavy-duty engine research using synthetic landfill gas, with an RME pilot carrying a pyrolysis-oil blend for ignition.',
    role: 'Extra-curricular Research Engineer at LTH. I plan and execute engine-dynamometer campaigns, from measurement planning and instrumentation through test execution and post-processing.',
    tags: ['Dual fuel', 'Engine dyno', 'Combustion', 'RME', 'Pyrolysis oil', 'Scania D13'],
    intro: 'LoCaGas investigates a route to reduce landfill methane emissions while creating an opportunity for useful power generation. The engine research combines a low-methane synthetic landfill-gas supply with a carefully controlled pilot-fuel strategy.',
    metrics: [
      { value: '20 / 80', label: 'CH₄ / CO₂ synthetic landfill gas' },
      { value: 'D13', label: 'Converted single-cylinder Scania engine' },
      { value: '2 fuels', label: 'Landfill gas + RME/PO pilot' }
    ],
    details: [
      { title: 'Fuel architecture', text: 'The primary fuel is synthetic landfill gas with a 20% methane and 80% CO₂ composition. RME is the secondary pilot fuel and provides the ignition source. Pyrolysis oil is intended to be blended into that RME pilot rather than used as a 100% pilot: reliable ignition with pure pyrolysis oil is unlikely, while RME adequately mixes with it because of liquid polarity.' },
      { title: 'From engine conversion to test plan', text: 'The experimental platform is a heavy-duty Scania D13 converted to single-cylinder operation. My work connects the research question to a practical dynamometer campaign: choose operating points, define the required measurements, check the acquisition chain and make sure the resulting data can support a meaningful comparison.' },
      { title: 'Execution and analysis', text: 'During testing, the focus is stable operation, repeatable conditions and clear traceability between fuel settings, engine state and measured response. Post-processing then turns the logged data into combustion and efficiency indicators, with the aim of improving the diesel-to-landfill-gas conversion rather than treating individual test points as isolated results.' }
    ],
    results: [
      'Established a campaign workflow linking measurement planning, execution and analysis.',
      'Defined the respective roles of synthetic landfill gas, RME and pyrolysis oil in the dual-fuel strategy.',
      'Experimental optimisation is ongoing; final combustion-efficiency conclusions are not yet claimed.'
    ],
    note: 'Ongoing EU-funded Interreg South Baltic research. Results will be added as the campaign matures.',
    links: [{ label: 'About LoCaGas', url: 'https://locagas.eu/', external: true }]
  },
  {
    id: 'lfs26-swirl-pot',
    title: 'LFS26 swirl-pot design',
    category: 'Cooling systems · Additive manufacturing',
    year: '2025',
    cover: './assets/images/lfs26-frontpic.webg',
    coverAlt: 'LFS26 swirl-pot design',
    summary: 'A four-port ASA-CF swirl pot that merges two inverter cooling loops, developed through packaging iterations, annealing and pressure testing.',
    role: 'Cooling System Engineer at Lund Formula Student. I designed the proof of concept and its port architecture, developed the printed iterations and carried out the manufacturing and leakage-test process.',
    tags: ['ASA-CF', '3D printing', 'Cooling', 'Annealing', 'Pressure testing'],
    intro: 'The LFS26 cooling layout needed one compact component to de-aerate and merge two inverter loops while retaining swirl under vehicle acceleration. Additive manufacturing allowed the internal concept and packaging to be tested quickly.',
    media: [
      { src: './assets/images/lfs26-prototype.webp', alt: 'Original aluminium and printed swirl pots', caption: 'Inherited aluminium component and the ASA-CF printed proof of concept.' },
      { src: './assets/images/lfs26-architecture.webp', alt: 'Dual-loop cooling architecture schematic', caption: 'Four-port architecture merging the two inverter cooling loops.' },
      { src: './assets/images/lfs26-iterations.webp', alt: 'Printed swirl-pot design iterations', caption: 'Design iterations used to resolve packaging and geometry.' },
      { src: './assets/images/lfs26-pressure-test.webp', alt: 'Submerged pressure and bubble test', caption: 'Submerged pressure test used to identify leakage paths.' },
      { src: './assets/images/lfs26-annealing.webp', alt: 'Printed parts in an annealing oven', caption: 'Annealing setup used during manufacturing development.' }
    ],
    metrics: [
      { value: '23 L/min', label: 'Cooling-loop operating flow' },
      { value: '4 ports', label: 'Dual-loop merged architecture' },
      { value: 'ASA-CF', label: 'Printed proof-of-concept material' }
    ],
    details: [
      { title: 'Functional architecture', text: 'The design replaces the inherited aluminium concept with a four-port printed vessel serving two inverter cooling plates. Its job is not just to connect hoses: it must support de-aeration and preserve useful swirl while cornering and braking loads act on the fluid. The internal and external geometry therefore developed together.' },
      { title: 'Printed development loop', text: 'Multiple ASA-CF prototypes made packaging changes and design iterations tangible. Printing introduced its own engineering constraints, especially layer-related porosity and leakage. Annealing and submerged pressure testing were used to investigate whether the printed vessel could achieve the required integrity, with bubble formation providing direct evidence of remaining leak paths.' },
      { title: 'Engineering evaluation', text: 'The project demonstrated the packaging and architecture as a proof of concept, but it did not establish a race-ready printed pressure vessel. Late in the programme, an aluminium replacement was used because of Formula Student regulatory uncertainty. That decision kept vehicle compliance separate from the value of the additive-manufacturing investigation.' }
    ],
    results: [
      'Produced and physically tested a compact four-port proof of concept.',
      'Used pressure testing to make porosity and leakage visible rather than assumed.',
      'Separated a successful design investigation from the final aluminium on-car decision.'
    ],
    note: 'The printed component was a proof of concept; it is not presented as the component that ultimately raced.'
  },
  {
    id: 'r-quatre',
    title: 'R-Quatre.nl',
    category: 'Product engineering · Classic Renault',
    year: '2024 — 2025',
    cover: './assets/images/r-quatre-frontpic.webg',
    coverAlt: 'R-Quatre replacement parts and specialist tooling',
    summary: 'Replacement parts and specialist tools for classic Renaults, developed from original hardware through production-ready design and manufacturer liaison.',
    role: 'Part & Tool Design Engineer. I took products from measurement and CAD through drawings, production discussion and preparation for the R-Quatre webshop.',
    tags: ['Product design', 'SolidWorks', 'Sheet metal', 'Casting', 'Tool design'],
    intro: 'Classic-car parts sit at the intersection of reverse engineering and production reality. At R-Quatre, the objective was not merely to draw an old component again, but to deliver a part or tool that could be manufactured and used repeatedly.',
    metrics: [
      { value: '24', label: 'Replacement parts designed' },
      { value: '2', label: 'Specialist tools developed' },
      { value: '200', label: 'First tool production batch' }
    ],
    details: [
      { title: 'Example 01 — Replacement-part redesign', text: 'A representative part-redesign project began with original components and their wear, interfaces and assembly context. Photographs and measurements supported a reconstructed CAD model, followed by a manufacturing drawing with the dimensions and tolerances required for reproduction. The design work accounted for the intended process — including folded sheet metal, cast selector forks, rubber moulding and 3D printing across the wider product range — rather than forcing every part into the same method.' },
      { title: 'Example 02 — Differential tool', text: 'The differential tool addressed a workshop operation rather than a replacement component. Its geometry had to locate correctly, transmit the required loads and remain practical to use. Development moved from the mechanical requirement into a production design and manufacturer liaison, with a reproduction video documenting the manufacturing route for communication and quality alignment.' },
      { title: 'From CAD to saleable hardware', text: 'The work extended beyond modelling. Manufacturer feedback, process limitations, drawings and production batches all fed back into the design. This made the role a complete product-engineering exercise: understand the original, define the new article, get it made and support its introduction to the webshop.' }
    ],
    results: [
      'Designed 24 replacement parts and two specialist tools for classic Renault vehicles.',
      'The first batch of 200 tools nearly sold out within twelve months.',
      'Parts reached customers internationally, from Europe to Madagascar and Australia.'
    ],
    links: [{ label: 'Visit R-Quatre', url: 'https://renault4onderdelen.nl/', external: true }]
  },
  {
    id: 'renault-r4-restoration',
    title: 'Own project car: Renault R4',
    category: 'Restoration · Powertrain integration',
    year: '2021 — Present',
    status: 'Currently ongoing',
    cover: './assets/images/r4-frontpic.webg',
    coverAlt: 'Renault R4 personal project car',
    summary: 'A long-term personal restoration and rally-car build centred on a turbocharged engine and five-speed gearbox swap, standalone ECU configuration and hands-on fabrication.',
    role: 'Owner, builder and calibrator. I carry out the restoration and integration work, programme the engine management and developed the roll-cage package with friends.',
    tags: ['Renault R4', 'Engine swap', 'Gearbox swap', 'MaxxECU', 'Restoration', 'Fabrication'],
    intro: 'This is the project where systems engineering becomes personal: restoring a Renault 4 while transforming its powertrain, drivability and structural package without losing the coherence of the whole car.',
    media: [
      { src: './assets/images/chassis-cage-install.webp', alt: 'Sam and friends with the Renault 4 roll cage', caption: 'The roll-cage build with friends — one part of the wider restoration and rally-car project.' }
    ],
    metrics: [
      { value: '34 → 170 hp', label: 'Original to turbocharged configuration' },
      { value: '5-speed', label: 'Gearbox conversion' },
      { value: '28 kg', label: 'Current roll-cage package' }
    ],
    details: [
      { title: 'Restoration before modification', text: 'The build starts with the unglamorous work that determines whether everything else lasts: assessing the vehicle, restoring worn structure and hardware, and resolving the many small interfaces that define an old car. That foundation makes the later performance work an integrated conversion rather than a collection of unrelated upgrades.' },
      { title: 'Engine and gearbox swap', text: 'The central technical change is the turbocharged powertrain and five-speed gearbox conversion. Packaging the engine, adapting the drivetrain and making the supporting systems work together require mechanical design and practical fabrication in equal measure. The standalone MaxxECU adds another layer: injection and ignition are configured from multiple sensor inputs, with calibration treated as an iterative engineering task.' },
      { title: 'Structure and future development', text: 'The roll cage was developed with friends and designed around CAD/FEA work with FIA Appendix J Article 283-8 as the reference. At 28 kg, the current cage compares with the earlier 46 kg HAN 4L cage. The broader project remains active, with hub-dyno calibration and performance testing as the next steps and hybrid-powertrain and Dakar Classic ambitions beyond them.' }
    ],
    results: [
      'Integrated a turbocharged engine, five-speed gearbox and standalone engine management.',
      'Combined full-vehicle restoration with fabrication, wiring, control and structural design.',
      'Created a lightweight roll-cage package; final calibration and performance development continue.'
    ],
    note: 'This is the personal restoration/build case study. The separate chassis-stiffness study below documents the experimental validation work.'
  },
  {
    id: 'westport-knock-thesis',
    title: 'Westport combustion-knock thesis',
    category: 'Combustion · Measurement & analysis',
    year: '2023 — 2024',
    cover: './assets/images/westport-frontpic.webg',
    coverAlt: 'Westport combustion-knock research',
    summary: 'A comparison of structure-borne knock sensors and in-cylinder pressure reference measurements on a heavy-duty dual-fuel engine.',
    role: 'BEng graduation researcher at Westport Fuel Systems. I planned the measurements, instrumented the test environment, built MATLAB post-processing tools and evaluated sensor position and threshold conditioning.',
    tags: ['Knock detection', 'DEWESoft', 'MATLAB', 'Plex V3', 'LabVIEW', 'Dual fuel'],
    intro: 'Knock control depends on detecting an abnormal combustion event early without confusing it with normal engine vibration. This thesis put the production-style structure-borne measurement chain next to an in-cylinder pressure reference.',
    media: [
      { src: './assets/images/westport-engine.webp', alt: 'FPT dual-fuel engine test installation', caption: 'Engine-dynamometer installation used to induce and measure knock.' },
      { src: './assets/images/westport-sensors.webp', alt: 'Structure-borne knock sensor test positions', caption: 'Sensor-position investigation on the engine structure.' },
      { src: './assets/images/westport-knock.webp', alt: 'Pressure and vibration signals during knock', caption: 'Pressure reference and knock-related vibration response.' },
      { src: './assets/images/westport-analysis.webp', alt: 'DEWESoft combustion analysis screen', caption: 'DEWETRON / DEWESoft measurement and analysis environment.' }
    ],
    metrics: [
      { value: '2.5–5 mg', label: 'Earlier LPG-based reference detection' },
      { value: 'Block–head', label: 'Best sensor-response region' },
      { value: 'V3', label: 'Plex Knock Monitor evaluated' }
    ],
    details: [
      { title: 'Controlled knock investigation', text: 'The FPT engine used parallel LPG injection to help induce knock. A piezoelectric in-cylinder pressure channel acquired through DEWETRON/DEWESoft provided the combustion reference. Structure-borne sensors and the Plex Knock Monitor V3 represented the practical detection chain, with LabVIEW, Prins AFC and MATLAB supporting control, acquisition and analysis.' },
      { title: 'Sensor location and signal quality', text: 'Different mounting positions were compared to find where engine vibration carried the clearest knock information. The strongest response was found near the engine block–cylinder-head mating surface. This result mattered because filtering and threshold algorithms cannot recover information that was never captured cleanly by the sensor.' },
      { title: 'Reference-based evaluation', text: 'MATLAB scripts aligned and visualised the pressure and vibration evidence so that threshold settings could be compared with the reference rather than judged by warning lights alone. The DEWETRON pressure-based analysis detected knock approximately 2.5–5 mg LPG earlier in the test comparison, but the practical Plex warning was not significantly later. Automatic Plex threshold calibration was also comparable to early knock detection with the pressure reference.' }
    ],
    results: [
      'Identified the block–head mating region as the best sensor-response location.',
      'Calibrated and assessed knock thresholds against in-cylinder pressure evidence.',
      'Showed that practical Plex detection was close to the reference in the tested conditions.'
    ],
    note: 'The numerical detection comparison is specific to the reported test conditions, not a universal engine-independent offset.'
  },
  {
    id: 'renault-chassis-stiffness',
    title: 'Renault 4 chassis stiffness & roll cage',
    category: 'Structures · Experimental validation',
    year: '2021',
    cover: './assets/images/chassis-frontpic.webg',
    coverAlt: 'Renault 4 chassis-stiffness testing and roll-cage simulation',
    summary: 'A physical bare-chassis stiffness test correlated with SolidWorks FEA, followed by a roll-cage assessment in the validated model.',
    role: 'Structural Design Engineer. I developed the shell/beam simulation approach, designed the physical test and compared measured deflection with the numerical model. R-Quatre sponsored the brand-new chassis and transport.',
    tags: ['FEA', 'SolidWorks', 'Torsional stiffness', 'Validation', 'Roll cage', 'R-Quatre'],
    intro: 'A simulation becomes more useful when its assumptions survive contact with a dial gauge. This project measured a bare Renault 4 chassis, correlated the FE model and only then assessed the effect of adding a roll cage.',
    media: [
      { src: './assets/images/chassis-rig.webp', alt: 'Physical Renault 4 chassis stiffness rig', caption: 'Physical validation on the bare chassis in the university test rig.' },
      { src: './assets/images/chassis-dial-gauge.webp', alt: 'Dial gauge measuring chassis deflection', caption: 'Dial-gauge measurement of vertical chassis deflection.' },
      { src: './assets/images/chassis-fea.webp', alt: 'Bare-chassis finite-element deflection result', caption: 'Bare-chassis FEA used for correlation with the physical test.' },
      { src: './assets/images/chassis-cage-simulation.webp', alt: 'Roll-cage finite-element deflection result', caption: 'Roll cage added subsequently to the validated FE model.' },
      { src: './assets/images/chassis-cage-install.webp', alt: 'Roll cage installed with friends', caption: 'The physical cage build with friends, separate from the bare-chassis test.' }
    ],
    metrics: [
      { value: '0.63%', label: 'Left-side simulation/test difference' },
      { value: '1218.3 N/mm', label: 'Measured bare-chassis stiffness' },
      { value: '+25.4%', label: 'Simulated stiffness with cage' }
    ],
    details: [
      { title: 'Sponsored test article and load case', text: 'R-Quatre sponsored a brand-new chassis and its transport, providing a controlled basis for the investigation. A 581 kg steel block and approximately 5.8 kg wooden spreading beam applied about 586.8 kg, or 5756.5 N, representing a 3G load case. Supports and loading were arranged to produce a measurable torsional response.' },
      { title: 'Physical test and FE correlation', text: 'The bare-chassis model predicted approximately 4.725 mm deflection. The physical test measured 4.76 mm on the left and 4.92 mm on the right. On the left, the 0.03 mm difference is approximately 0.63%, giving a measured stiffness of about 1218.3 N/mm. The close agreement supported the modelling choices while still leaving the physical asymmetry visible.' },
      { title: 'Roll-cage assessment', text: 'Only after the bare-chassis correlation was the roll cage added to the FE model. Simulated deflection reduced to approximately 3.767 mm and stiffness increased to about 1528.1 N/mm — 125.4% of the original value, or a 25.4% improvement. The physical stiffness test itself was not performed with the cage installed.' }
    ],
    results: [
      'Correlated bare-chassis FEA with a physical torsional-deflection test.',
      'Quantified the simulated roll-cage contribution as a 25.4% stiffness increase.',
      'Kept experimental evidence and subsequent cage simulation clearly separated.'
    ],
    links: [{ label: 'Download chassis report', url: './assets/Renault-4-Chassis-Stiffness-Report.pdf', download: true }]
  },
  {
    id: 'lightyear-durability',
    title: 'Lightyear durability-test engineering',
    category: 'Test engineering · Robotics',
    year: '2022 — 2023',
    cover: './assets/images/lightyear-frontpic.webg',
    coverAlt: 'Lightyear durability-test engineering',
    summary: 'An accelerated hub-motor cable test built around a DENSO robot, combining motion replication, custom fixtures, safety systems and damage analysis.',
    role: 'Durability Test Engineer Intern. I investigated the cable-damage concern, defined the test approach, designed mounting adaptations and programmed the robot-driven rig in WINCAPS III.',
    tags: ['WINCAPS III', 'DENSO robotics', 'Durability', 'Test design', 'EMC shielding'],
    intro: 'Development vehicles showed unexpected hub-motor cable damage after roughly 6,000 km, far short of the intended ten-year or 250,000 km lifetime. The internship turned that concern into a repeatable accelerated test.',
    media: [
      { src: './assets/images/lightyear-rig.webp', alt: 'Complete robotic durability test installation', caption: 'Robot-driven accelerated durability rig and custom mounting structure.' },
      { src: './assets/images/lightyear-measurement.webp', alt: 'Measurement on the cable test rig', caption: 'Test measurement and rig instrumentation.' },
      { src: './assets/images/lightyear-cables.webp', alt: 'Hub-motor cable test samples', caption: 'Cable samples prepared for durability investigation.' },
      { src: './assets/images/lightyear-damage.webp', alt: 'Cable damage and EMC shielding degradation', caption: 'Observed damage, including degradation requiring further EMC-shielding investigation.' }
    ],
    metrics: [
      { value: '500,000', label: 'Target accelerated test cycles' },
      { value: '<10 s', label: 'Full target cycle time' },
      { value: '±100 mm', label: 'Suspension motion envelope' }
    ],
    details: [
      { title: 'Reproducing the vehicle motion', text: 'The three-phase hub-motor cable moves with both suspension and steering. The rig therefore had to reproduce a suspension envelope of ±100 mm and steering of ±45°, rather than apply a generic bending cycle. Custom mounts and adapters connected the vehicle hardware to a DENSO HSR-065 robot installation with safety fencing and emergency stops.' },
      { title: 'Programming the accelerated test', text: 'WINCAPS III programmes translated the required movement into a repeatable robot routine. A beer-bottle-opening routine served as an initial proof of principle for the programming approach before the actual durability sequence. The engineering target was 500,000 cycles in approximately one week, with a complete cycle in under ten seconds.' },
      { title: 'Damage investigation and limits', text: 'Testing directed attention to cable degradation, particularly the EMC shielding. The work showed where further investigation was needed, but it did not fully validate a mission profile or final service interval. Lightyear’s bankruptcy shortened the available test period, so the conclusions must remain bounded by the evidence gathered rather than presented as a complete lifetime qualification.' }
    ],
    results: [
      'Defined and implemented a robot-driven test for combined suspension and steering motion.',
      'Built the programming, fixturing and safety approach around a repeatable accelerated cycle.',
      'Identified cable and EMC-shielding degradation concerns requiring further investigation.'
    ],
    note: 'Only the approved internship presentation is shared. The confidential internship report is not published.',
    links: [{ label: 'Download presentation', url: './assets/Lightyear-Internship-Presentation.pdf', download: true }]
  },
  {
    id: 'han-4l',
    title: 'HAN 4L',
    category: 'Team leadership · Humanitarian rally',
    year: '2019 — 2022',
    cover: './assets/images/han4l-frontpic.webg',
    coverAlt: 'HAN 4L Renault 4 rally project',
    summary: 'Founded and led an international student team that rebuilt a Renault 4, raised sponsorship and completed the 4L Trophy journey to Morocco.',
    role: 'Founder, Team Manager and Engineer. I built the team, coordinated sponsorship and contributed to the vehicle rebuild and equal-length exhaust-header design.',
    tags: ['Leadership', 'Renault 4', 'Sponsorship', 'CFD', '4L Trophy'],
    intro: 'HAN 4L combined an international student organisation, a classic-car rebuild and a humanitarian rally. Engineering delivery depended on the same thing as team delivery: keeping people, hardware and objectives moving together.',
    metrics: [
      { value: '11', label: 'Team members · 10 nationalities' },
      { value: '€15,000', label: 'Sponsorship raised' },
      { value: '≈8,000 km', label: 'Netherlands to Morocco journey' }
    ],
    details: [
      { title: 'Building the team', text: 'I founded HAN 4L in 2019 and led a team of eleven students spanning ten nationalities and three study programmes. The role covered organisation, technical coordination and external representation. Raising €15,000 in sponsorship, including support from DENSO, made the vehicle and rally programme possible.' },
      { title: 'Engineering a Renault 4 for the journey', text: 'The team rebuilt a Renault 4 for the approximately 8,000 km Netherlands–Morocco undertaking. My technical contribution included an equal-length exhaust-header design and flow simulation, with the aim of improving engine thermodynamic efficiency. The broader vehicle work demanded practical reliability decisions: the car had to be serviceable and survive the journey, not merely perform in a model.' },
      { title: 'Competition and humanitarian delivery', text: 'The team achieved a top-ten international-team result and delivered 8 kg of school supplies and food. HAN 4L has continued through successive student generations and is now entering its seventh consecutive year, extending the original project beyond its founders.' }
    ],
    results: [
      'Founded an enduring international student team and raised €15,000 in sponsorship.',
      'Rebuilt and engineered a Renault 4 for the 4L Trophy, finishing top ten among international teams.',
      'Delivered school supplies and food while establishing a team that continues today.'
    ],
    links: [
      { label: 'HAN 4L', url: 'http://han4l.nl/', external: true },
      { label: '4L Trophy', url: 'https://www.4ltrophy.com/', external: true, secondary: true }
    ]
  },
  {
    id: 'longboard-research',
    title: 'Longboard final research project',
    category: 'Materials · Design & manufacturing',
    year: '2018',
    cover: './assets/images/longboard-frontpic.webg',
    coverAlt: 'Longboard final research project',
    summary: 'An award-recognised high-school research project by Sam Voncken and Jelle Feitsma: a complete longboard using recycled HDPE, sand-cast aluminium and cast polyurethane.',
    role: 'Co-researcher, designer and manufacturer, together with Jelle Feitsma. We developed the deck, trucks, wheels and related components, then tested the materials and inspected the cast parts.',
    tags: ['Recycled HDPE', 'Aluminium casting', 'Polyurethane', 'Material testing', 'X-ray inspection'],
    intro: 'Rather than design only a deck, we asked how much of a complete longboard we could engineer and manufacture ourselves — and how recycled and cast materials could be turned into functional, tested components.',
    media: [
      { src: './assets/images/longboard-complete.webp', alt: 'Completed custom longboard', caption: 'The finished longboard, weighing approximately 5,230 g.' },
      { src: './assets/images/longboard-recycling.webp', alt: 'Recycled HDPE material processing', caption: 'Recycled HDPE prepared for the deck-manufacturing process.' },
      { src: './assets/images/longboard-casting.webp', alt: 'Sand-casting aluminium truck components', caption: 'Sand-casting process used for the aluminium trucks.' },
      { src: './assets/images/longboard-wheels.webp', alt: 'Polyurethane wheels and X-ray component inspection', caption: 'Cast wheels and X-ray inspection used to reveal internal porosity.' },
      { src: './assets/images/longboard-testing.webp', alt: 'Material tensile-test graph', caption: 'Material testing connected process development to measured mechanical behaviour.' }
    ],
    metrics: [
      { value: '39.01 MPa', label: 'Tensile strength · ±0.66 MPa' },
      { value: '119.31 kJ/m²', label: 'Impact strength · ±16.04' },
      { value: '5.23 kg', label: 'Finished board weight' }
    ],
    details: [
      { title: 'A complete product, not a single part', text: 'The project covered the deck, trucks, wheels and associated components. Recycled HDPE formed the deck, the trucks were sand-cast in aluminium, and polyurethane was used for the wheels and bushings. This gave the research a useful breadth: material preparation, moulds and casting, geometry, assembly and riding-relevant product decisions all had to work together.' },
      { title: 'Material evidence', text: 'Mechanical testing reported tensile strength around 39.01 ± 0.66 MPa and impact strength around 119.31 ± 16.04 kJ/m². These measurements moved the discussion beyond whether the materials looked suitable and provided a basis for evaluating their actual behaviour. The approximately 5,230 g finished board made the final mass equally tangible.' },
      { title: 'Inspecting and improving the casting', text: 'X-ray inspection revealed porosity inside cast components that could not be assessed reliably from the surface. We used that evidence to improve the process, including preheating the axles to reduce the conditions that promoted casting defects. The loop of manufacture, inspect and modify became one of the project’s most important engineering lessons.' }
    ],
    results: [
      'Designed and manufactured a complete longboard using three distinct material-process routes.',
      'Combined mechanical testing and X-ray inspection with iterative process improvements.',
      'Received national, school and international recognition for the research and final product.'
    ],
    note: 'Recognition listed in Sam’s project record: KNAW Prize; University of Twente audience prize; Van Melsenprijs Nijmegen; Peter Debye Prize; Best Final Project of Porta Mosana; third-place category results at ICYS 2018 (Serbia) and OKSEEF 2018 (Turkey).',
    links: [
      { label: 'Download research poster', url: './assets/POSTER-PWSfinal.pdf', download: true },
      { label: 'Download report · Dutch', url: './assets/Longboard-Research-Report-NL.pdf', download: true, secondary: true }
    ]
  }
];
