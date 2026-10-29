const KB = {
    general: {
        name: "RV College of Engineering (RVCE)", est: "1963",
        campus: "16.85 acres on Mysuru Road, Bengaluru – 560 059",
        trust: "Rashtreeya Sikshana Samithi Trust (RSST)",
        status: "Autonomous (UG), Affiliated to VTU",
        accreditation: "NAAC A+ Grade (CGPA 3.39/4.0, valid 2024–2029), NBA Accredited (multiple UG & PG programs)",
        ranking: "NIRF 101-150 band (Engineering, 2025), #1 Private Engineering College in IIRF 2025",
        principal: "Dr. K.N. Subramanya",
        vicePrincipal: "Dr. K. S. Geetha",
        timings: "Mon-Fri: 9:00 AM – 4:45 PM, Sat: 9:00 AM – 1:00 PM",
        vision: "Leadership in quality technical education, interdisciplinary research & innovation, with focus on sustainable and inclusive technology.",
        intake: "2000+ students annually across UG and PG",
        research: "100+ Patents, ₹30+ Crores in grants, 20 Centres of Excellence, 15 VTU-recognized Research Centres",
        researchDomains: "AI, Quantum Tech, 5G, Electric Vehicles, Hydrogen Technology, IC Design",
        coes: [
            "Macroelectronics (CME)", "Macroelectronics (CME) - Thin Film Lab",
            "Internet of Things (IoT)", "Smart Antenna Systems (CSAS)",
            "Visual Computing", "Excellence in Materials & Manufacturing",
            "Robotics & Cognitive Systems", "Automotive Mechatronics (Mercedes Benz)",
            "Computational Genomics", "Quantum Computing (Q-RVCE)",
            "Cloud Computing & Big Data (HP)", "Advanced Manufacturing",
            "Smart Grid Technology", "Embedded Systems",
            "Data Science & AI", "IC Design & VLSI",
            "Electric Vehicle Technology", "Hydrogen & Fuel Cell Technology",
            "5G & Communication Systems", "Cyber Security",
            "Materials Fabrication and Characterization (CoE-MFC)",
            "Cognitive Intelligent Systems (CISSS)",
            "Logistics & Supply Chain Management",
            "AI Research (RVCE-BOSTON)",
            "Women in Cloud Centre of Excellence",
            "Sensor Technology Applications (CSTA)",
            "Nanomaterials and Devices (CND)",
            "Integrated Circuits and Systems (CoE-ICAS)",
            "Automotive Engineering (RV-Toyota)",
            "3S Infrastructure (Safe, Sustainable & Smart)",
            "Extended Reality Center (XR)",
            "Health Care Technology Research (CHTR)",
            "Wipro-IISc-RVCE EV Technology"
        ],
        cocs: [
            "Bosch Rexroth - Automation Tech", "Toyota - Automotive Tech",
            "Cisco - Networking", "HP - Cloud Computing",
            "5G and Emerging Wireless Technologies",
            "Electric Vehicle Tech (RVCE-MG)",
            "Smart Vidyuth & Sustainable Solutions",
            "Vision Astra in EV Academy",
            "Decibels RV Electric Vehicle"
        ],
        coes_detailed: [
            { n: "Materials Fabrication & Characterization (CoE-MFC)", i: "Advanced testing, characterization, and fabrication facilities (ECE)." },
            { n: "Cognitive Intelligent Systems (CISSS)", i: "In partnership with HPCC Systems, focuses on sustainable AI solutions (CSE)." },
            { n: "Internet of Things (Cisco-RVCE)", i: "Cisco-funded lab for advanced networking and IoT research (MCA)." },
            { n: "Computational Genomics", i: "Cutting-edge research at the intersection of BioTech and Computing." },
            { n: "Smart Antenna Systems (SASM)", i: "Features an Anechoic Chamber and EMI/EMC testing facilities (ECE)." },
            { n: "Quantum Information & Tech (CIRCUIT)", i: "Research in quantum computing and information theory (Physics)." },
            { n: "Hydrogen & Green Tech", i: "Collaborates with Dover India on clean energy and hydrogen materials (Chemical)." },
            { n: "Automotive Engineering (RV-Toyota)", i: "Focuses on engine technology and automotive systems (Mechanical)." },
            { n: "Extended Reality (XR) Center", i: "Specializes in VR/AR for education and industrial research (MCA)." },
            { n: "Integrated Circuits & Systems (CoE-ICAS)", i: "Advanced VLSI design and chip system research (ECE)." }
        ],
        /* === Comprehensive COE Database for specific COE search === */
        coes_db: [
            {
                id: 'coe_mfc',
                n: "Materials Fabrication & Characterization (CoE-MFC)",
                emoji: '🔬',
                dept: 'ECE',
                year: '2020-21',
                info: "Established in 2020-21, this CoE provides state-of-the-art advanced testing, characterization, and fabrication facilities. It focuses on semiconductor material analysis, thin-film deposition, nano-fabrication, and surface characterization to support cutting-edge electronics research.",
                url: 'https://rvce.edu.in/department/ece/the_centre_of_excellence_in_materials_fabrication_characterisation/',
                aliases: ['mfc','coe mfc','materials fabrication','materials characterization','materials fabrication characterization','coe-mfc','coemfc','fabrication lab','characterization lab']
            },
            {
                id: 'coe_cisss',
                n: "Cognitive Intelligent Systems for Sustainable Solutions (CISSS)",
                emoji: '🧠',
                dept: 'CSE',
                partner: 'HPCC Systems',
                info: "Established in partnership with HPCC Systems (LexisNexis), this CoE focuses on sustainable AI solutions using big data, machine learning, and cognitive computing. It supports research in intelligent data analytics, high-performance computing, and eco-friendly AI frameworks.",
                url: 'https://rvce.edu.in/department/cse/centre_of_excellence_in_rvce_hpcc_systems_cognitive_intelligent_systems_for_sustainable_solutionscisss/',
                aliases: ['cisss','hpcc','cognitive systems','cognitive intelligent','cisss coe','hpcc systems','lexisnexis','sustainable ai','coe cisss']
            },
            {
                id: 'coe_iot',
                n: "Internet of Things CoE (Cisco-RVCE)",
                emoji: '📡',
                dept: 'MCA',
                partner: 'Cisco',
                info: "Funded by Cisco, this IoT Centre of Excellence provides industry-standard networking equipment and IoT infrastructure. It supports research in smart systems, edge computing, and network automation, along with Cisco Networking Academy certification programs.",
                url: 'https://rvce.edu.in/department/mca/research/',
                aliases: ['iot coe','cisco iot','cisco rvce','internet of things coe','iot centre','networking coe','cisco coe','iot lab']
            },
            {
                id: 'coe_genomics',
                n: "Centre of Excellence in Computational Genomics",
                emoji: '🧬',
                dept: 'Biotechnology',
                info: "This CoE bridges Biotechnology and Computing, focusing on genomic data analysis, bioinformatics algorithms, proteomics, and computational biology. It enables multi-disciplinary research at the intersection of life sciences and engineering.",
                url: 'https://rvce.edu.in/department/biotechnology/centre-of-excellence-in-computational-genomics/',
                aliases: ['genomics','computational genomics','bioinformatics','genomics coe','biotech coe','coe genomics','proteomics','bio computing']
            },
            {
                id: 'coe_sasm',
                n: "Smart Antenna Systems (SASM)",
                emoji: '📡',
                dept: 'ECE',
                info: "This CoE features a cutting-edge Anechoic Chamber and EMI/EMC testing facilities. It focuses on antenna design, RF systems, electromagnetic compatibility testing, and smart/MIMO antenna research for 5G and beyond communications.",
                url: 'https://rvce.edu.in/department/ece/research/',
                aliases: ['sasm','smart antenna','antenna coe','anechoic','emi emc','rf systems','antenna systems','smart antenna systems','mimo antenna']
            },
            {
                id: 'coe_quantum',
                n: "Quantum Information & Technology (CIRCUIT)",
                emoji: '⚛️',
                dept: 'Physics',
                info: "The CIRCUIT (Centre for Information, Research, Computation, and Unification in Technology) CoE focuses on quantum computing algorithms, quantum information theory, quantum cryptography, and quantum hardware research. It is one of the few quantum-focused centres in Indian engineering colleges.",
                url: 'https://rvce.edu.in/department/physics/research/#',
                aliases: ['quantum','circuit coe','quantum computing','quantum information','quantum coe','quantum tech','quantum research','q-rvce','qrvce']
            },
            {
                id: 'coe_hydrogen',
                n: "Hydrogen & Green Technology CoE",
                emoji: '💧',
                dept: 'Chemical Engineering',
                partner: 'Dover India',
                info: "In collaboration with Dover India, this CoE researches clean hydrogen production, hydrogen fuel cells, green energy storage materials, and sustainable chemical processes. It supports India's hydrogen mission by developing expertise in next-gen clean energy technologies.",
                url: 'https://rvce.edu.in/department/chemical_engineering/ce_coe/',
                aliases: ['hydrogen','green tech','hydrogen coe','fuel cell','hydrogen fuel','clean energy coe','dover india','hydrogen technology','green energy coe','hydrogen green tech']
            },
            {
                id: 'coe_toyota',
                n: "Automotive Engineering CoE (RV-Toyota Kirloskar)",
                emoji: '🚗',
                dept: 'Mechanical Engineering',
                partner: 'Toyota Kirloskar',
                info: "Established with Toyota Kirloskar Motor, this CoE provides hands-on training in automotive engineering, engine technology, vehicle dynamics, and powertrain systems. Students gain industry-level exposure through Toyota's proprietary training modules and equipment.",
                url: 'https://rvce.edu.in/department/me/rv_toyota_kriloskar_centre_of_excellence_in_automotive_engineering/',
                aliases: ['toyota coe','rv toyota','automotive coe','toyota kirloskar','automotive engineering coe','engine technology coe','vehicle engineering coe']
            },
            {
                id: 'coe_xr',
                n: "Extended Reality Centre (XR Center)",
                emoji: '🥽',
                dept: 'MCA',
                info: "The XR Centre specializes in Virtual Reality (VR), Augmented Reality (AR), and Mixed Reality (MR) technologies. It supports research and development in immersive learning environments, industrial simulation, and next-generation human-computer interaction for both educational and industrial applications.",
                url: 'https://rvce.edu.in/department/mca/research/',
                aliases: ['xr center','xr centre','extended reality','virtual reality','augmented reality','mixed reality','vr ar coe','xr coe','vr coe','ar coe','immersive tech']
            },
            {
                id: 'coe_icas',
                n: "Integrated Circuits & Systems (CoE-ICAS)",
                emoji: '📟',
                dept: 'ECE',
                info: "The CoE-ICAS focuses on advanced VLSI chip design, system-on-chip (SoC) architectures, analog/mixed-signal circuit design, and embedded systems research. It bridges the gap between academic circuit design and industry-ready VLSI engineering.",
                url: 'https://rvce.edu.in/department/ece/centre_of_excellence_in_integrated_circuits_and_systemscoe_icas/',
                aliases: ['icas','coe icas','integrated circuits','vlsi coe','ic design coe','chip design','soc design','vlsi systems','coe-icas','icas coe']
            },
            {
                id: 'coe_3s',
                n: "3S Infrastructure CoE (Safe, Sustainable & Smart)",
                emoji: '🏗️',
                dept: 'Civil Engineering',
                info: "This CoE focuses on next-generation infrastructure research under three pillars: Safety (structural integrity and disaster resilience), Sustainability (eco-friendly construction materials and green buildings), and Smart (IoT-integrated smart infrastructure and transportation systems).",
                url: 'https://rvce.edu.in/department/civil_engineering/centre_of_excellence_in_3s_infrastructure_safe_sustainable_smart/',
                aliases: ['3s coe','3s infrastructure','safe sustainable smart','civil coe','smart infrastructure','sustainable infrastructure','structural coe','green building coe']
            },
            {
                id: 'coe_logistics',
                n: "Logistics & Supply Chain Management CoE",
                emoji: '🚚',
                dept: 'Industrial Engineering & Management',
                info: "This CoE researches optimization of supply chain operations, logistics network design, inventory management, Industry 4.0 integration, and data-driven decision-making in operations management. It has strong ties with logistics industry partners.",
                url: 'https://rvce.edu.in/department/iem/centre-of-excellence-in-logistics-supply-chain-management/',
                aliases: ['logistics coe','supply chain coe','iem coe','scm coe','logistics supply chain','supply chain management coe','operations coe','industrial engineering coe']
            },
            {
                id: 'coe_cav',
                n: "Connected & Autonomous Vehicles CoE",
                emoji: '🤖',
                dept: 'ECE',
                info: "Focuses on the research and development of connected vehicle systems, autonomous driving algorithms, V2X (vehicle-to-everything) communication, LiDAR-based sensing, and self-driving car technologies. A key research hub for the future of mobility.",
                url: 'https://rvce.edu.in/department/ece/centre_of_excellence_in_connected_autonomous_vehicles/',
                aliases: ['cav','autonomous vehicles','connected vehicles','self driving','lidar coe','autonomous car','v2x','vehicle coe','autonomous driving coe','coe cav']
            },
            {
                id: 'coe_ev',
                n: "Electric Vehicle Technology CoE (RVCE-MG Motor)",
                emoji: '⚡',
                dept: 'Mechanical Engineering',
                partner: 'MG Motor India',
                info: "In partnership with MG Motor India, this CoE focuses on electric vehicle powertrain design, battery management systems, EV motor control, charging infrastructure, and EV ecosystem research. Students work with industry-grade EV components and simulation tools.",
                url: 'https://rvce.edu.in/department/me/rvce_morris_garage_centre_of_excellence_in_electric_vehicle_technology_evt/',
                aliases: ['ev coe','electric vehicle coe','mg motor coe','ev technology','rvce mg','electric car coe','battery coe','ev powertrain','ev motor coe']
            },
            {
                id: 'coe_bosch',
                n: "RV-Bosch Rexroth Centre for Automation Technologies",
                emoji: '⚙️',
                dept: 'Mechanical Engineering',
                partner: 'Bosch Rexroth',
                info: "Established with Bosch Rexroth, this centre focuses on hydraulic automation, pneumatics, programmable logic controllers (PLC), industrial automation, and Industry 4.0 technologies. Students gain hands-on training with Bosch's industrial automation equipment.",
                url: 'https://rvce.edu.in/department/me/rv-bosch-rexroth-centre-for-automation-technologies/',
                aliases: ['bosch coe','bosch rexroth','automation coe','plc coe','hydraulics coe','industrial automation coe','rv bosch','bosch automation']
            },
            {
                id: 'coe_benz',
                n: "RV-Mercedes Benz Centre for Automotive Mechatronics (ADAM)",
                emoji: '🏎️',
                dept: 'Mechanical Engineering',
                partner: 'Mercedes-Benz',
                info: "The Mercedes-Benz Advanced Diploma in Automotive Mechatronics (ADAM) programme is a premium industry-academia collaboration offering specialization in mechatronic systems, automotive electronics, and luxury vehicle technology. Graduates receive a joint certification from RVCE and Mercedes-Benz.",
                url: 'https://rvce.edu.in/department/me/rv-mercedes-benz-centre-for-automotive-mechatronics/',
                aliases: ['benz','mercedes benz','mercedes-benz','benz coe','mercedes coe','adam','adam coe','mercedes benz coe','mechatronics coe','automotive mechatronics','rv mercedes','adam programme','mercedes benz centre']
            },
            {
                id: 'coe_wic',
                n: "Women in Cloud Centre of Excellence",
                emoji: '☁️',
                dept: 'Information Science & Engineering',
                partner: 'Women in Cloud',
                info: "Established in partnership with Women in Cloud, this CoE promotes gender diversity in technology and cloud computing. It provides training in cloud platforms, AI, and digital skills with a special focus on empowering women in STEM fields through certification programs and industry mentorship.",
                url: 'https://rvce.edu.in/department/ise/ise_coe/',
                aliases: ['women in cloud','wic coe','cloud coe','ise coe','women cloud coe','gender diversity tech','cloud computing coe']
            },
            {
                id: 'coe_sensor',
                n: "Sensor Technology Applications CoE (CSTA)",
                emoji: '📡',
                dept: 'Electronics & Instrumentation (EIE)',
                info: "CSTA focuses on the design and application of advanced sensor systems for industrial, biomedical, and environmental monitoring. Research areas include MEMS sensors, wireless sensor networks, IoT-integrated sensing, and precision instrumentation.",
                url: 'https://rvce.edu.in/department/eim/eie_centre_of_excellence_in_sensor_technology_applications/',
                aliases: ['sensor coe','csta','sensor technology','eie coe','sensor applications','mems coe','sensor research','instrumentation coe']
            },
            {
                id: 'coe_health',
                n: "Health Care Technology Research CoE (CHTR)",
                emoji: '🏥',
                dept: 'Electronics & Instrumentation (EIE)',
                info: "CHTR focuses on biomedical engineering, health monitoring devices, telemedicine systems, wearable health tech, and AI-driven diagnostic tools. It bridges electronics engineering and healthcare to develop impactful medical technology innovations.",
                url: 'https://rvce.edu.in/department/eim/eie_centre_of_excellence_in_health_care_technology_research/',
                aliases: ['health coe','chtr','healthcare tech coe','biomedical coe','health care technology','medical tech coe','health research coe','wearable tech coe']
            },
            {
                id: 'coe_5g',
                n: "5G & Emerging Wireless Technologies CoE",
                emoji: '📶',
                dept: 'Electronics & Telecom (ETE)',
                info: "This CoE focuses on 5G NR standards, millimeter-wave communications, network slicing, massive MIMO, edge computing for 5G, and next-generation wireless protocols. It prepares students for the telecom industry's transition to 5G and beyond (B5G/6G research).",
                url: 'https://rvce.edu.in/wp-content/uploads/2025/11/5G-AND-EMERGING-WIRELESS-TECHNOLOGIES.pdf',
                aliases: ['5g coe','5g wireless','telecom coe','etc coe','wireless coe','mmwave coe','5g nr','beyond 5g','6g coe','5g emerging']
            },
            {
                id: 'coe_mobility',
                n: "e-Mobility & Smart Grid Technology CoE (EEE)",
                emoji: '🔋',
                dept: 'Electrical & Electronics (EEE)',
                info: "This CoE focuses on electric mobility systems, smart grid technology, power electronics for EV applications, renewable energy integration, and energy storage systems. It supports research in next-generation electrical infrastructure for sustainable transportation and power systems.",
                url: 'https://rvce.edu.in/department/eee/eee_coe/',
                aliases: ['mobility coe','smart grid','eee coe','emobility','e-mobility coe','smart grid coe','power electronics coe','energy storage coe','electrical coe']
            },
            {
                id: 'coe_boston',
                n: "RVCE-Boston AI Research CoE",
                emoji: '🧠',
                dept: 'CSE / Multi-Department',
                partner: 'Boston Ltd., UK (Graphcore)',
                info: "One of the most powerful AI research centres in Indian academia, built with Boston Ltd., UK. Features a Graphcore POD4 server delivering 1-PetaFLOP of AI computing power. Research focus areas include Computer Vision, FinTech AI, AgriTech, BioTech, and MLOps. Offers a 6-month professional certification in Data Science & MLOps.",
                url: 'https://rvce.edu.in/department/wp-content/uploads/2026/03/RVCE-Boston-AI-CoE2.pdf',
                aliases: ['boston ai','rvce boston','boston coe','graphcore','petaflop','ai research coe','boston uk','mlops coe','computer vision coe','boston ai coe']
            }
        ],
        industryPartners: ["Google", "Microsoft", "Toyota", "Mercedes Benz", "Cisco", "IBM", "Intel", "Honeywell", "Bosch", "Amazon", "Adobe", "Samsung", "Tata Technologies", "Boeing", "Wipro", "MG Motor"],
        collaborations: [
            { n: "Tata Technologies", i: "CIIIT (Center for Invention, Innovation, Incubation & Training) focuses on Industry 4.0 and Smart Manufacturing (₹60 Cr project)." },
            { n: "Cisco", i: "Cisco Networking Academy and IoT CoE for advanced digital training." },
            { n: "MG Motor India", i: "EV Tech CoC for electric vehicle skill development." },
            { n: "Bosch Rexroth", i: "Automation Technology and Hydraulics training centre." },
            { n: "IBM", i: "IBM Centre of Excellence for software and cloud training." },
            { n: "Mercedes-Benz", i: "Advanced Diploma in Automotive Mechatronics (ADAM)." },
            { n: "Toyota", i: "Automotive Engineering and engine technology training centre." },
            { n: "Samsung", i: "PRISM program for industry-academic collaboration on research projects." }
        ],
        foodCourt: {
            name: "Cafe Mingos (Main Food Court)",
            capacity: "1000+ students",
            timings: "9:00 AM – 4:30 PM",
            cuisines: "North Indian, South Indian, Chinese, Fast Food (Burgers, Sandwiches, Chats)",
            features: "Two floors, 500 sq.m area, steam-cooked hygienic food, self-service model",
            outlets: ["Main Food Court (Cafe Mingos)", "Mini Canteen", "Extension Food Court Counter"],
            others: "The food court is a hub for social interaction and quick meals; Hostel messes are strictly vegetarian."
        }
    },
    contact: {
        address: "RV College of Engineering, RV Vidyanikethan Post, Mysuru Road, Bengaluru – 560 059",
        maps: "https://maps.google.com/?q=RV+College+of+Engineering+Bengaluru",
        phone: "+91-080-68188112 / 8111", admissionPhone: "080-68188147/48/49",
        email: "mailto:principal@rvce.edu.in", vicePrincipalEmail: "mailto:viceprincipal@rvce.edu.in", placementPhone: "9886130504",
        website: "https://rvce.edu.in/",
        social: {
            facebook: "https://www.facebook.com/RVCEngineering/",
            instagram: "https://www.instagram.com/rvcollegeofengineering/",
            linkedin: "https://www.linkedin.com/school/rvcengineering/",
            x: "https://x.com/rvce_official"
        }
    },
    rvei: {
        history: "Founded in 1940 by Sri M. C. Shivananda Sarma and Sri Meda Kasturi Ranga Setty.",
        institutions: "Manages over 25 institutions including RV College of Engineering, RV University, NMKRV College, DAPM RV Dental College, and RV Institute of Management.",
        motto: "Excellence in Education with Societal Commitment."
    },
    placements: {
        companies: "192+ companies participated (2026 Drive - Ongoing)", avgSalary: "₹16.86 LPA (2026 Avg)",
        maxSalary: "₹67 LPA Highest Package (2026 Batch)", recruiters: "Microsoft, Google, Amazon, Atlassian, Cisco, Dell, Intel, Adobe, Flipkart, Samsung, PayPal, IBM, Deloitte, JP Morgan, Goldman Sachs, Bosch, Mercedes-Benz",
        scholarships: "₹72+ Lakhs awarded annually from ABB, Boeing, CTS",
        infra: "800+ systems, seminar halls, 6 interview rooms, 2 GD rooms",
        offers: "698+ offers made so far",
        url: "https://rvce.edu.in/placement_and_training/",
        prev2025: { maxSalary: "₹67 LPA", companies: "262", offers: "922 offers" }
    },
    admissions: {
        ug: { eligibility: "12th/2nd PUC with min 45% in Physics + Maths + Chemistry/Biotech/Biology/CS/Electronics (40% for SC/ST/OBC Karnataka)", exams: "KCET (KEA), COMED-K, Management Quota. JEE Mains is NOT considered.", quotas: "Also available: CIWG/PIO/OCI/Nepal Citizens quota" },
        pg: { eligibility: "B.E./B.Tech with min 50% marks (45% for SC/ST/OBC Karnataka)", exams: "Valid GATE or PGCET score" },
        mca: { eligibility: "Bachelor's degree with min 50% marks (45% for SC/ST/OBC Karnataka)" },
        phd: { info: "Doctoral programs in all departments via entrance test + interview. 15 VTU-recognized Research Centres." },
        fees: "Management Quota B.E. fees range from ~₹16 Lakhs to ~₹70 Lakhs total over 4 years (e.g., CSE highest at ~₹70L, Core branches ~₹16L-₹24L). M.Tech/MCA ranges from ₹2L to ₹16L.",
        cutoffs: "Official KCET cutoffs are released by KEA (e.g., ISE cutoff was ~832 in 2023).",
        url: "https://rvce.edu.in/admissions/"
    },
    departments: {
        ug: [
            {
                n:"Aerospace Engineering (AE)",
                c:"ae", 
                u:"https://rvce.edu.in/department/ae/department-of-aerospace-engineering/",
                intake: "60",
                accreditation: "NBA Accredited", 
                hod:"Dr. R Supreeth",
                hod_url: "https://rvce.edu.in/department/ae/dr_r_supreeth/",
                info: "Welcome to the Department of Aerospace Engineering. Established in 2015, the Department has evolved into one of the country’s most prestigious destinations for undergraduate Aerospace Programmes.",
                about: "https://rvce.edu.in/department/ae/about_dept/",
                syllabus: "https://rvce.edu.in/academics_and_examinations/rvce_scheme_syllabus/#ug",
                faculty: "https://rvce.edu.in/department/ae/faculty/",
                research: "https://rvce.edu.in/department/ae/research/",
                placement: "https://rvce.edu.in/department/ae/placement/",
                labs: "https://rvce.edu.in/department/ae/laboratories/",
                facilities: "https://rvce.edu.in/department/ae/facilities/",
                campus_diaries: "https://rvce.edu.in/department/ae/campus_diaries/",
                hod_message: "https://rvce.edu.in/department/ae/dr_r_supreeth_hod_message/"
            },
            {
                n:"AI & Machine Learning (AIML)",
                c:"aiml", 
                u:"https://rvce.edu.in/department/ai_ml/main_department/",
                intake: "180",
                accreditation: "Not specified/New", 
                hod:"Dr. B. Sathish Babu",
                info: "Established in 2021, the programme builds a strong foundation in computer science engineering with focused training in Artificial Intelligence, Machine Learning, Deep Learning, and Data Science.",
                about: "https://rvce.edu.in/department/ai_ml/about_the_department/",
                syllabus: "https://rvce.edu.in/academics_and_examinations/rvce_scheme_syllabus/#ug",
                faculty: "https://rvce.edu.in/department/ai_ml/faculty/",
                placement: "https://rvce.edu.in/department/ai_ml/placement/",
                labs: "https://rvce.edu.in/department/ai_ml/laboratories/",
                facilities: "https://rvce.edu.in/department/ai_ml/facilities/",
                research: "https://rvce.edu.in/department/ai_ml/research/",
                campus_diaries: "https://rvce.edu.in/department/ai_ml/campus_diaries/",
                hod_message: "https://rvce.edu.in/department/ai_ml/dr_b_sathish_babu_hod_message/",
                academic_planning: "https://rvce.edu.in/department/ai_ml/academic_planning/",
                collab: "https://rvce.edu.in/department/ai_ml/collaboration-and-networking/"
            },
            {
                n:"Biotechnology (BT)",
                c:"bt", 
                u:"https://rvce.edu.in/department/biotechnology/department_of_biotechnology/",
                intake: "60",
                accreditation: "NBA Accredited", 
                hod:"Dr. Nagashree N Rao",
                info: "At the crossroads of science and innovation, the Department of Biotechnology (est. 2002) blends theoretical knowledge with practical experience, offering B.E., M.Tech., and Ph.D. programmes with advanced research facilities.",
                about: "https://rvce.edu.in/department/biotechnology/about_the_department/",
                syllabus: "https://rvce.edu.in/academics_and_examinations/rvce_scheme_syllabus/#ug",
                faculty: "https://rvce.edu.in/department/biotechnology/faculty/",
                placement: "https://rvce.edu.in/department/biotechnology/placement/",
                labs: "https://rvce.edu.in/department/biotechnology/laboratories/",
                facilities: "https://rvce.edu.in/department/biotechnology/facilities/",
                research: "https://rvce.edu.in/department/biotechnology/research/",
                hod_message: "https://rvce.edu.in/department/biotechnology/message_from_hod_biotechnology/",
                happenings: "https://rvce.edu.in/department/biotechnology/happenings/",
                academic_planning: "https://rvce.edu.in/department/biotechnology/acadamic_planning/",
                m_tech: "https://rvce.edu.in/department/biotechnology/m_tech_in_biotechnology/",
                coe_genomics: "https://rvce.edu.in/department/biotechnology/centre-of-excellence-in-computational-genomics/"
            },
            {
                n:"Chemical Engineering (CH)",
                c:"ch", 
                u:"https://rvce.edu.in/department/chemical_engineering/main_dept/",
                intake: "40",
                accreditation: "NBA Accredited", 
                hod:"Dr. Jagadish H Patil",
                info: "Established in 1982, the Department of Chemical Engineering is a leader in academic and research excellence, holding a 6-year NBA accreditation. It offers B.E., M.Sc. (Engg) by Research, and Ph.D. programmes.",
                about: "https://rvce.edu.in/department/chemical_engineering/about_dept/",
                syllabus: "https://rvce.edu.in/academics_and_examinations/rvce_scheme_syllabus/#ug",
                faculty: "http://rvce.edu.in/department/chemical_engineering/faculty/",
                placement: "https://rvce.edu.in/department/chemical_engineering/placement/",
                labs: "https://rvce.edu.in/department/chemical_engineering/laboratories/",
                research: "https://rvce.edu.in/department/chemical_engineering/research/",
                facilities: "https://rvce.edu.in/department/chemical_engineering/facilities/",
                project_labs: "https://rvce.edu.in/department/chemical_engineering/project_labs/",
                campus_diaries: "https://rvce.edu.in/department/chemical_engineering/campus_diaries/",
                hod_message: "https://rvce.edu.in/department/chemical_engineering/dr_jagadish_h_patil_hod_message/",
                coe_hydrogen: "https://rvce.edu.in/department/chemical_engineering/ce_coe/"
            },
            {
                n:"Chemistry (CHY)",
                c:"chy", 
                u:"https://rvce.edu.in/department/chemistry/department_of_chemistry/", 
                hod:"Dr. Mahesh R",
                info: "Established in 1963, the Department of Chemistry provides foundational knowledge to all first-year engineering students and offers global electives. It is a recognized VTU research centre.",
                about: "https://rvce.edu.in/department/chemistry/about_the_department/",
                syllabus: "https://rvce.edu.in/academics_and_examinations/rvce_scheme_syllabus/#ug",
                faculty: "https://rvce.edu.in/department/chemistry/faculty/",
                labs: "https://rvce.edu.in/department/chemistry/laboratories/",
                research: "https://rvce.edu.in/department/chemistry/research/",
                facilities: "https://rvce.edu.in/department/chemistry/facilities/",
                happenings: "https://rvce.edu.in/department/chemistry/happenings/",
                hod_message: "https://rvce.edu.in/department/chemistry/message_from_hod_basic_chemistry/",
                collab: "https://rvce.edu.in/department/chemistry/collaboration-and-networking/"
            },
            {
                n:"Civil Engineering (CV)",
                c:"cv", 
                u:"https://rvce.edu.in/department/civil_engineering/department-of-civil-engineering/",
                intake: "60",
                accreditation: "NBA Accredited", 
                hod:"Dr. Anjaneyappa",
                info: "Established in 1963, the department offers NBA-accredited B.E. in Civil Engineering and M.Tech in Structural Engineering & Highway Technology. It is a recognized VTU research centre.",
                about: "https://rvce.edu.in/department/civil_engineering/about-the-department/",
                syllabus: "https://rvce.edu.in/academics_and_examinations/rvce_scheme_syllabus/#ug",
                faculty: "https://rvce.edu.in/department/civil_engineering/faculty/",
                placement: "https://rvce.edu.in/department/civil_engineering/placement/",
                labs: "https://rvce.edu.in/department/civil_engineering/civil-laboratories/",
                research: "https://rvce.edu.in/department/civil_engineering/research/",
                facilities: "https://rvce.edu.in/department/civil_engineering/facilities/",
                coe_3s: "https://rvce.edu.in/department/civil_engineering/centre_of_excellence_in_3s_infrastructure_safe_sustainable_smart/",
                m_tech_structural: "https://rvce.edu.in/department/civil_engineering/mtech_in_structural_engineering/",
                m_tech_highway: "https://rvce.edu.in/department/civil_engineering/mtech_in_highway_technology/",
                collab: "https://rvce.edu.in/department/civil_engineering/collaboration-and-networking/"
            },
            {
                n:"Computer Science & Engg (CSE)",
                c:"cs", 
                u:"https://rvce.edu.in/department/cse/cse_main/",
                intake: "360",
                accreditation: "NBA Accredited", 
                hod:"Dr. Shanta Rangaswamy",
                info: "Established in 1984, the CSE department is the most sought-after at RVCE. It offers NBA-accredited B.E., M.Tech. (CSE and CNE), and Ph.D. programs with state-of-the-art labs and stellar placements.",
                about: "https://rvce.edu.in/department/cse/about_the_department/",
                syllabus: "https://rvce.edu.in/academics_and_examinations/rvce_scheme_syllabus/#ug",
                faculty: "https://rvce.edu.in/department/cse/faculty/",
                placement: "https://rvce.edu.in/department/cse/placement/",
                labs: "https://rvce.edu.in/department/cse/laboratories/",
                research: "https://rvce.edu.in/department/cse/research/",
                facilities: "https://rvce.edu.in/department/cse/facilities/",
                happenings: "https://rvce.edu.in/department/cse/happenings/",
                hod_message: "https://rvce.edu.in/department/cse/dr_shanta_rangaswamy_hod_message/",
                coe_cisss: "https://rvce.edu.in/department/cse/centre_of_excellence_in_rvce_hpcc_systems_cognitive_intelligent_systems_for_sustainable_solutionscisss/",
                coe_vision: "https://rvce.edu.in/department/cse/centre_of_excellence_in_computer_vision_research_next_generation_ai_enabled/",
                m_tech: "https://rvce.edu.in/department/cse/m_tech_cse/",
                m_tech_cne: "https://rvce.edu.in/department/cse/m_tech_cne/",
                collab: "https://rvce.edu.in/department/cse/collaboration-and-networking/"
            },
            {
                n:"CSE (AI & ML) (CSAIML)",
                c:"csaiml", 
                u:"https://rvce.edu.in/department/cse/cse_main/",
                intake: "180",
                accreditation: "Not specified/New", 
                hod:"Dr. Shanta Rangaswamy (Under CSE Dept)",
                info: "A specialized B.E. track under the CSE department focusing on Artificial Intelligence and Machine Learning.",
                about: "https://rvce.edu.in/department/cse/about_the_department/",
                syllabus: "https://rvce.edu.in/academics_and_examinations/rvce_scheme_syllabus/#ug",
                faculty: "https://rvce.edu.in/department/cse/faculty/",
                placement: "https://rvce.edu.in/department/cse/placement/",
                labs: "https://rvce.edu.in/department/cse/laboratories/"
            },
            {
                n:"CSE (Cyber Security) (CSCY)",
                c:"cscy", 
                u:"https://rvce.edu.in/department/cse/cse_main/",
                intake: "60",
                accreditation: "Not specified/New", 
                hod:"Dr. Shanta Rangaswamy (Under CSE Dept)",
                info: "A specialized B.E. track under the CSE department focusing on Cyber Security and defensive computing.",
                about: "https://rvce.edu.in/department/cse/about_the_department/",
                syllabus: "https://rvce.edu.in/academics_and_examinations/rvce_scheme_syllabus/#ug",
                faculty: "https://rvce.edu.in/department/cse/faculty/",
                placement: "https://rvce.edu.in/department/cse/placement/",
                labs: "https://rvce.edu.in/department/cse/laboratories/"
            },
            {
                n:"CSE (Data Science) (CSDS)",
                c:"csds", 
                u:"https://rvce.edu.in/department/cse/cse_main/",
                intake: "60",
                accreditation: "Not specified/New", 
                hod:"Dr. Shanta Rangaswamy (Under CSE Dept)",
                info: "A specialized B.E. track under the CSE department focusing on Data Science, Big Data, and Analytics.",
                about: "https://rvce.edu.in/department/cse/about_the_department/",
                syllabus: "https://rvce.edu.in/academics_and_examinations/rvce_scheme_syllabus/#ug",
                faculty: "https://rvce.edu.in/department/cse/faculty/",
                placement: "https://rvce.edu.in/department/cse/placement/",
                labs: "https://rvce.edu.in/department/cse/laboratories/"
            },
            {
                n:"Electrical & Electronics (EEE)",
                c:"ee", 
                u:"https://rvce.edu.in/department/eee/department-of-electrical-and-electronics-engineering/",
                intake: "60",
                accreditation: "NBA Accredited", 
                hod:"Dr. J N Hemalatha (I/c)",
                info: "Since 1963, the EEE department has been a hub of academic excellence. It offers B.E. and M.Tech in Power Electronics, focusing on renewable energy, smart grids, and industrial automation.",
                about: "https://rvce.edu.in/department/eee/about_the_department/",
                syllabus: "https://rvce.edu.in/academics_and_examinations/rvce_scheme_syllabus/#ug",
                faculty: "https://rvce.edu.in/department/eee/faculty/",
                placement: "https://rvce.edu.in/department/eee/placement/",
                labs: "https://rvce.edu.in/department/eee/laboratories/",
                research: "https://rvce.edu.in/department/eee/research/",
                facilities: "https://rvce.edu.in/department/eee/facilities/",
                campus_diaries: "https://rvce.edu.in/department/eee/campus_diaries/",
                hod_message: "https://rvce.edu.in/department/eee/hod_message/",
                rd_labs: "https://rvce.edu.in/department/eee/rd_labs/",
                m_tech: "https://rvce.edu.in/department/eee/mtech_in_power_electronics/",
                coe_mobility: "https://rvce.edu.in/department/eee/eee_coe/",
                coe_vidyuth: "https://rvce.edu.in/wp-content/uploads/2025/11/SMART-VIDYUTH-SUSTAINABLE-SOLUTIONS.pdf",
                coc_ev: "https://rvce.edu.in/department/eee/coc_vision_astra_in_ev_academy/"
            },
            {
                n:"Electronics & Communication (ECE)",
                c:"ec", 
                u:"https://rvce.edu.in/department/ece/department_of_electronics_and_communication/",
                intake: "240",
                accreditation: "NBA Accredited", 
                hod:"Dr. H. V. Ravish Aradhya",
                info: "Established in 1972, the department offers state-of-the-art degrees with a 6-year NBA accreditation (2022-2028) and hosts multiple Centres of Excellence in VLSI, Autonomous Vehicles, and Materials Fabrication.",
                about: "https://rvce.edu.in/department/ece/about_department/",
                syllabus: "https://rvce.edu.in/academics_and_examinations/rvce_scheme_syllabus/#ug",
                faculty: "https://rvce.edu.in/department/ece/faculty/",
                placement: "https://rvce.edu.in/department/ece/placement/",
                labs: "https://rvce.edu.in/department/ece/laboratories/",
                research: "https://rvce.edu.in/department/ece/research/",
                rd_labs: "https://rvce.edu.in/department/ece/randd-lab/",
                facilities: "https://rvce.edu.in/department/ece/facilities/",
                happenings: "https://rvce.edu.in/department/ece/happenings/",
                hod_message: "https://rvce.edu.in/department/ece/hod_message/",
                coe_mfc: "https://rvce.edu.in/department/ece/the_centre_of_excellence_in_materials_fabrication_characterisation/",
                coe_cav: "https://rvce.edu.in/department/ece/centre_of_excellence_in_connected_autonomous_vehicles/",
                coe_icas: "https://rvce.edu.in/department/ece/centre_of_excellence_in_integrated_circuits_and_systemscoe_icas/",
                m_tech_vlsi: "https://rvce.edu.in/department/ece/m_tech_in_vlsi_design_embedded_systems/",
                m_tech_comm: "https://rvce.edu.in/department/ece/master_of_technology_in_m_tech_communication_systems/",
                collab: "https://rvce.edu.in/department/ece/collaboration-and-networking/"
            },
            {
                n:"Electronics & Instrumentation (EIE)",
                c:"ei", 
                u:"https://rvce.edu.in/department/eim/main_dept/",
                intake: "60",
                accreditation: "NBA Accredited", 
                hod:"Dr. CH. Renumadhavi",
                info: "Established in 1981, the department offers an NBA-accredited curriculum that is regularly updated to meet industry demands, featuring modern laboratories for hands-on learning and innovation in automation and control.",
                about: "https://rvce.edu.in/department/eim/about_dept/",
                syllabus: "https://rvce.edu.in/academics_and_examinations/rvce_scheme_syllabus/#ug",
                faculty: "https://rvce.edu.in/department/eim/faculty/",
                placement: "https://rvce.edu.in/department/eim/placement/",
                labs: "https://rvce.edu.in/department/eim/laboratories/",
                research: "https://rvce.edu.in/department/eim/research/",
                rd_labs: "https://rvce.edu.in/department/eim/rd/",
                campus_diaries: "https://rvce.edu.in/department/eim/campus_diaries/",
                hod_message: "https://rvce.edu.in/department/eim/hod_message/",
                publications: "https://rvce.edu.in/department/eim/publications/",
                coe_sensor: "https://rvce.edu.in/department/eim/eie_centre_of_excellence_in_sensor_technology_applications/",
                coe_health: "https://rvce.edu.in/department/eim/eie_centre_of_excellence_in_health_care_technology_research/"
            },
            {
                n:"Electronics & Telecom (ETE)",
                c:"et", 
                u:"https://rvce.edu.in/department/etc/main_department/",
                intake: "60",
                accreditation: "NBA Accredited", 
                hod:"Dr. Nagamani K",
                info: "Established in 1992, the department offers a comprehensive educational experience emphasizing hands-on design in hardware, software, embedded systems, networks, and protocols.",
                about: "https://rvce.edu.in/department/etc/about_the_department/",
                syllabus: "https://rvce.edu.in/academics_and_examinations/rvce_scheme_syllabus/#ug",
                faculty: "http://rvce.edu.in/department/etc/faculty/",
                placement: "https://rvce.edu.in/department/etc/placement/",
                labs: "https://rvce.edu.in/department/etc/laboratories/",
                research: "https://rvce.edu.in/department/etc/research/",
                rd_labs: "https://rvce.edu.in/department/etc/rd_labs/",
                facilities: "https://rvce.edu.in/department/etc/facilities/",
                project_labs: "https://rvce.edu.in/department/etc/project_lab/",
                campus_diaries: "https://rvce.edu.in/department/etc/campus_diaries/",
                hod_message: "https://rvce.edu.in/department/etc/dr_nagamani_k_hod_message/",
                m_tech: "https://rvce.edu.in/department/etc/mtech_in_digital_communication_engineering/",
                coe_5g: "https://rvce.edu.in/wp-content/uploads/2025/11/5G-AND-EMERGING-WIRELESS-TECHNOLOGIES.pdf"
            },
            {
                n:"Industrial Engg & Mgmt (IEM)",
                c:"im", 
                u:"https://rvce.edu.in/department/iem/b_e_industrial_engineering_and_management/",
                intake: "60",
                accreditation: "NBA Accredited", 
                hod:"Dr. Rajeswara Rao K V S",
                info: "Established in 1980, the department integrates engineering and management to align with industry needs. It offers an NBA-accredited B.E. programme and maintains close associations with professional societies like IIIE, ORSI, and IIMM.",
                about: "https://rvce.edu.in/department/iem/about_the_department/",
                syllabus: "https://rvce.edu.in/academics_and_examinations/rvce_scheme_syllabus/#ug",
                faculty: "https://rvce.edu.in/department/iem/faculty/",
                placement: "https://rvce.edu.in/department/iem/placement/",
                labs: "https://rvce.edu.in/department/iem/laboratories/",
                facilities: "https://rvce.edu.in/department/iem/facilities/",
                research: "https://rvce.edu.in/department/iem/research/",
                coe: "https://rvce.edu.in/department/iem/centre-of-excellence-in-logistics-supply-chain-management/"
            },
            {
                n:"Information Science & Engg (ISE)",
                c:"is", 
                u:"https://rvce.edu.in/department/ise/department--of-information-science-and-engineering/",
                intake: "135",
                accreditation: "NBA Accredited", 
                hod:"Dr. G. S. Mamatha",
                info: "Offers a dynamic curriculum focused on AI, IoT, Cloud Computing and Cybersecurity. Supported by a VTU-recognised research centre and partnerships with Microsoft, Nvidia and HP.",
                about: "https://rvce.edu.in/department/ise/about_dept/",
                syllabus: "https://rvce.edu.in/academics_and_examinations/rvce_scheme_syllabus/#ug",
                faculty: "https://rvce.edu.in/department/ise/faculty/",
                placement: "https://rvce.edu.in/department/ise/placement/",
                labs: "https://rvce.edu.in/department/ise/facilities/",
                research: "https://rvce.edu.in/department/ise/research/",
                campus_diaries: "https://rvce.edu.in/department/ise/campus_diaries/",
                hod_message: "https://rvce.edu.in/department/ise/dr_g_s_mamatha_hod_message/",
                m_tech_soft: "https://rvce.edu.in/department/ise/mtech_in_software_engineering/",
                m_tech_it: "https://rvce.edu.in/department/ise/mtech_in_information_technology/",
                coe_wic: "https://rvce.edu.in/department/ise/ise_coe/"
            },
            {
                n:"Mathematics (MATHS)",
                c:"mat", 
                u:"https://rvce.edu.in/department/maths/main_dept/", 
                hod:"Dr. Jayalatha G",
                info: "Established in 1963, one of the oldest departments at RVCE. It provides high-quality education and features a dedicated team of experts with research spanning Pure Mathematics, Applied Mathematics, and Quantum Computing.",
                about: "https://rvce.edu.in/department/maths/about_dept/",
                syllabus: "https://rvce.edu.in/academics_and_examinations/rvce_scheme_syllabus/#ug",
                faculty: "https://rvce.edu.in/department/maths/main_dept/",
                labs: "https://rvce.edu.in/department/maths/facilities/",
                research: "https://rvce.edu.in/department/maths/research/",
                campus_diaries: "https://rvce.edu.in/department/maths/campus_diaries/",
                hod_message: "https://rvce.edu.in/department/maths/dr_jayalatha_g_hod_message/",
                networking: "https://rvce.edu.in/department/maths/maths_cn/",
                collab: "https://rvce.edu.in/department/maths/collaboration-and-networking/"
            },
            {
                n:"Mechanical Engineering (ME)",
                c:"me", 
                u:"https://rvce.edu.in/department/me/department_of_mechanical_engineering/",
                intake: "120",
                accreditation: "NBA Accredited", 
                hod:"Dr. Shanmukha Nagaraj",
                info: "Dedicated to fostering innovation and excellence in Mechanical Engineering. Offers premier education and cultivates cutting-edge research in Design, Materials, Thermal and Manufacturing, strengthened by robust industry collaborations.",
                about: "https://rvce.edu.in/department/me/about_the_department/",
                syllabus: "https://rvce.edu.in/academics_and_examinations/rvce_scheme_syllabus/#ug",
                faculty: "https://rvce.edu.in/department/me/faculty/",
                placement: "https://rvce.edu.in/department/me/placement/",
                labs: "https://rvce.edu.in/department/me/laboratories/",
                facilities: "https://rvce.edu.in/department/me/facilities/",
                research: "https://rvce.edu.in/department/me/research/",
                rd_labs: "https://rvce.edu.in/department/me/rd_labs/",
                campus_diaries: "https://rvce.edu.in/department/me/campus_diaries/",
                coe_toyota: "https://rvce.edu.in/department/me/rv_toyota_kriloskar_centre_of_excellence_in_automotive_engineering/",
                coe_ev: "https://rvce.edu.in/department/me/rvce_morris_garage_centre_of_excellence_in_electric_vehicle_technology_evt/",
                m_tech_pdm: "https://rvce.edu.in/department/me/mtech-in-product-design-and-manufacturing/",
                m_tech_machine: "https://rvce.edu.in/department/me/mtech_in_machine_design/",
                coe_bosch: "https://rvce.edu.in/department/me/rv-bosch-rexroth-centre-for-automation-technologies/",
                coe_benz: "https://rvce.edu.in/department/me/rv-mercedes-benz-centre-for-automotive-mechatronics/"
            },
            {
                n:"Physics (PHY)",
                c:"phy", 
                u:"https://rvce.edu.in/department/physics/department_of_physics/", 
                hod:"Dr. G. Shireesha",
                info: "Established in 1963, it offers Engineering Physics courses and global electives. Known for its research, discipline, and academic rigour, it features 13 doctorate-qualified faculty and advanced research facilities.",
                about: "https://rvce.edu.in/department/physics/about_the_department/",
                syllabus: "https://rvce.edu.in/academics_and_examinations/rvce_scheme_syllabus/#ug",
                faculty: "https://rvce.edu.in/department/physics/faculty/",
                labs: "https://rvce.edu.in/department/physics/laboratories/",
                facilities: "https://rvce.edu.in/department/physics/facilities/",
                research: "https://rvce.edu.in/department/physics/research/#",
                collab: "https://rvce.edu.in/department/physics/collaboration-and-networking/"
            },
            {
                n:"Physical Education & Sports",
                c:"sports", 
                u:"https://rvce.edu.in/department-of-physical-education-sports/", 
                info: "The Department of Physical Education and Sports at RVCE promotes student fitness and excellence in sports, organizing VTU tournaments and offering sports scholarships for exceptional athletes.",
                scholarship: "https://rvce.edu.in/department-of-physical-education-sports/rvce-sports-scholarship/",
                tournaments: "https://rvce.edu.in/department-of-physical-education-sports/v-t-u-tournament-organized/"
            }
        ],
        pg: [
            {n:"M.Tech Biotechnology",c:"bt", hod:"Dr. Nagashree N Rao", u:"https://rvce.edu.in/department/biotechnology/department-of-biotechnology/", syllabus: "https://rvce.edu.in/academics_and_examinations/rvce_scheme_syllabus/#pgscheme"},
            {n:"M.Tech Structural Engg",c:"cv_se", hod:"Dr. Anjaneyappa", u:"https://rvce.edu.in/department/civil_engineering/m_tech_structural_engineering/", syllabus: "https://rvce.edu.in/academics_and_examinations/rvce_scheme_syllabus/#pgscheme"},
            {n:"M.Tech Highway Tech",c:"cv_ht", hod:"Dr. Anjaneyappa", u:"https://rvce.edu.in/department/civil_engineering/m-tech-highway-technology/", syllabus: "https://rvce.edu.in/academics_and_examinations/rvce_scheme_syllabus/#pgscheme"},
            {n:"M.Tech CSE",c:"cs_cse", hod:"Dr. Shanta Rangaswamy", u:"https://rvce.edu.in/department/cse/m-tech-cse/", syllabus: "https://rvce.edu.in/academics_and_examinations/rvce_scheme_syllabus/#pgscheme"},
            {n:"M.Tech Computer Network Engg",c:"cs_cne", hod:"Dr. Shanta Rangaswamy", u:"https://rvce.edu.in/department/cse/m-tech-cne/", syllabus: "https://rvce.edu.in/academics_and_examinations/rvce_scheme_syllabus/#pgscheme"},
            {n:"M.Tech Power Electronics",c:"ee_pe", hod:"Dr. J N Hemalatha", u:"https://rvce.edu.in/department/eee/mtech_in_power_electronics/", syllabus: "https://rvce.edu.in/academics_and_examinations/rvce_scheme_syllabus/#pgscheme"},
            {n:"M.Tech VLSI & Embedded",c:"ec_vlsi", hod:"Dr. Ravish Aradhya H V", u:"https://rvce.edu.in/department/ece/m-tech-in-vlsi-design-embedded-systems/", syllabus: "https://rvce.edu.in/academics_and_examinations/rvce_scheme_syllabus/#pgscheme"},
            {n:"M.Tech Comm Systems",c:"ec_cs", hod:"Dr. Ravish Aradhya H V", u:"https://rvce.edu.in/department/ece/master-of-technology-in-m-tech-communication-systems/", syllabus: "https://rvce.edu.in/academics_and_examinations/rvce_scheme_syllabus/#pgscheme"},
            {n:"M.Tech Software Engg",c:"is_se", hod:"Dr. Mamatha G S", u:"https://rvce.edu.in/department/ise/ise-mtech-in-software-engineering/", syllabus: "https://rvce.edu.in/academics_and_examinations/rvce_scheme_syllabus/#pgscheme"},
            {n:"M.Tech Info Tech",c:"is_it", hod:"Dr. Mamatha G S", u:"https://rvce.edu.in/department/ise/ise_mtech_in_information_technology/", syllabus: "https://rvce.edu.in/academics_and_examinations/rvce_scheme_syllabus/#pgscheme"},
            {n:"M.Tech Product Design",c:"me_pd", hod:"Dr. Shanmukha Nagaraj", u:"https://rvce.edu.in/department/me/mtech-in-product-design-and-manufacturing/", syllabus: "https://rvce.edu.in/academics_and_examinations/rvce_scheme_syllabus/#pgscheme"},
            {n:"M.Tech Machine Design",c:"me_md", hod:"Dr. Shanmukha Nagaraj", u:"https://rvce.edu.in/department/me/mtech-in-machine-design/", syllabus: "https://rvce.edu.in/academics_and_examinations/rvce_scheme_syllabus/#pgscheme"},
            {n:"M.Tech Digital Comm",c:"et_dc", hod:"Dr. Nagamani K", u:"https://rvce.edu.in/department/etc/mtech_in_digital_communication_engineering/", syllabus: "https://rvce.edu.in/academics_and_examinations/rvce_scheme_syllabus/#pgscheme"},
            {
                n:"Master of Computer Applications (MCA)",
                c:"mca", 
                u:"https://rvce.edu.in/department/mca/main_department/", 
                hod:"Dr. Jasmine K S",
                info: "Established in 1997, it offers MCA (Intake: 120), M.Sc. by Research, and Ph.D. The programme holds 4 NBA accreditations and boasts consistent 100% placement opportunities with a 96% internship conversion rate.",
                about: "https://rvce.edu.in/department/mca/about_the_department/",
                syllabus: "https://rvce.edu.in/academics_and_examinations/rvce_scheme_syllabus/#pgscheme",
                faculty: "https://rvce.edu.in/department/mca/main_department/",
                placement: "https://rvce.edu.in/department/mca/placement/",
                labs: "https://rvce.edu.in/department/mca/laboratories/",
                facilities: "https://rvce.edu.in/department/mca/facilities/",
                research: "https://rvce.edu.in/department/mca/research/",
                campus_diaries: "https://rvce.edu.in/department/mca/campus_diaries/"
            }
        ]
    },
    hostels: {
        boys: "Chamundi, Cauvery, Sir MV, Krishna blocks",
        girls: "Diamond Jubilee, Krishna Garden blocks",
        amenities: "Vegetarian mess, Wi-Fi, laundry, 24/7 security",
        note: "Allotted during admission — no advance booking",
        url: "https://rvce.edu.in/facilities/"
    },
    facilities: {
        list: ["Central Library","Food Court","Sports Complex (400m track, Cricket/Football)","Health Centre","ICICI Bank","Post Office","Gymnatorium","Labs & Workshops"],
        url: "https://rvce.edu.in/facilities/"
    },
    placements2026: {
        maxSalary: "₹67 LPA Highest Package (2026 Batch)",
        avgSalary: "₹16.86 LPA (Current Average)",
        companies: "192+ companies visited (Ongoing)",
        offers: "698+ offers made so far",
        topRecruiters: "Microsoft, Google, Amazon, Atlassian, Cisco, Dell, Intel, Adobe, Samsung"
    },
    placements2025: {
        maxSalary: "₹67 LPA Highest Package (2025 Batch, B.E.)",
        mtechMax: "₹35 LPA (M.Tech highest)",
        mcaMax: "₹20 LPA (MCA highest)",
        avgSalary: "₹13.76 LPA (2025 B.E. Avg)",
        companies: "262 companies participated in 2025 drive",
        offers: "922 offers to B.E./B.Tech students",
        topRecruiters: "Microsoft, Google, Amazon, Atlassian, Cisco, Dell, Intel, Adobe, Flipkart, Samsung, PayPal, IBM, Deloitte, JP Morgan, Goldman Sachs, Bosch, Mercedes-Benz"
    },
    placements2024: {
        maxSalary: "₹92 LPA Highest Package (2024 Batch)",
        avgSalary: "~₹11.5 LPA (2024 Avg)",
        companies: "249 companies participated in 2024 drive",
        offers: "917 total offers with 75% placement rate"
    },
    'iem': {
        name: "Industrial Engineering and Management",
        ug: {
            ongoing: {
                name: "B.E. Industrial Engineering and Management (2025-26)",
                companies: 12, offers: 30, students: 27,
                avg: "12.46 LPA", max: "21.45 LPA"
            },
            full: [
                { name: "2024-25", companies: 30, offers: 51, students: 46, avg: "7.68 LPA", max: "21.45 LPA" },
                { name: "2023-24", companies: 30, offers: 53, students: 51, avg: "8.39 LPA", max: "20.00 LPA" },
                { name: "2022-23", companies: 35, offers: 49, students: 49, avg: "9.06 LPA", max: "18.99 LPA" },
                { name: "2021-22", companies: 38, offers: 66, students: 42, avg: "9.03 LPA", max: "14.95 LPA" }
            ]
        }
    },
    'mca': {
        name: "Master of Computer Applications",
        pg: {
            ongoing: {
                name: "Master of Computer Applications (2025-26)",
                companies: 3, offers: 21, students: 22,
                avg: "4.00 LPA", max: "11.59 LPA"
            },
            full: [
                { name: "2025-26 (Timeline)", companies: 24, offers: 62, students: 59, avg: "9.00 LPA", max: "20.00 LPA" },
                { name: "2024-25", companies: 35, offers: 80, students: 80, avg: "8.94 LPA", max: "20.00 LPA" },
                { name: "2023-24", companies: 52, offers: 132, students: 95, avg: "8.29 LPA", max: "25.00 LPA" },
                { name: "2021-22", companies: 56, offers: 146, students: 102, avg: "10.00 LPA", max: "28.00 LPA" },
                { name: "2020-21", companies: 85, offers: 274, students: 210, avg: "7.50 LPA", max: "20.00 LPA" }
            ]
        }
    },
    'me': {
        name: "Mechanical Engineering",
        ug: {
            ongoing: {
                name: "B.E. Mechanical Engineering (2025-26)",
                companies: 39, offers: 86, students: 80,
                avg: "9.22 LPA", max: "18.33 LPA"
            },
            full: [
                { name: "2024-25", companies: 44, offers: 88, students: 82, avg: "8.21 LPA", max: "18.33 LPA" },
                { name: "2023-24", companies: 46, offers: 78, students: 70, avg: "9.07 LPA", max: "18.00 LPA" },
                { name: "2022-23", companies: 60, offers: 113, students: 85, avg: "8.35 LPA", max: "16.00 LPA" },
                { name: "2021-22", companies: 45, offers: 112, students: 69, avg: "9.05 LPA", max: "18.00 LPA" }
            ]
        },
        pg: {
            ongoing: [
                {
                    name: "M.Tech. Product Design And Manufacturing (2025-26)",
                    companies: 6, offers: 8, students: 8, avg: "7.09 LPA", max: "14.00 LPA"
                },
                {
                    name: "M.Tech. Machine Design (2025-26)",
                    companies: 8, offers: 7, students: 7, avg: "6.02 LPA", max: "8.00 LPA"
                }
            ],
            full: [
                { name: "Product Design & Manufacturing (2024-25)", companies: 6, offers: 8, students: 8, avg: "7.09 LPA", max: "14.00 LPA" },
                { name: "Product Design & Manufacturing (2022-23)", companies: 12, offers: 23, students: 23, avg: "6.82 LPA", max: "10.00 LPA" },
                { name: "Product Design & Manufacturing (2021-22)", companies: 14, offers: 20, students: 20, avg: "6.45 LPA", max: "12.00 LPA" },

                { name: "Machine Design (2024-25)", companies: 8, offers: 7, students: 7, avg: "6.02 LPA", max: "8.00 LPA" },
                { name: "Machine Design (2022-23)", companies: 10, offers: 17, students: 17, avg: "6.44 LPA", max: "20.00 LPA" },
                { name: "Machine Design (2021-22)", companies: 12, offers: 15, students: 15, avg: "5.83 LPA", max: "12.00 LPA" }
            ]
        }
    },
    'mca': {
        name: "Master of Computer Applications",
        pg: {
            ongoing: {
                name: "Master of Computer Applications (2025-26)",
                companies: 3, offers: 21, students: 22,
                avg: "4.00 LPA", max: "11.59 LPA"
            },
            full: [
                { name: "2025-26 (Timeline)", companies: 24, offers: 62, students: 59, avg: "9.00 LPA", max: "20.00 LPA" },
                { name: "2024-25", companies: 35, offers: 80, students: 80, avg: "8.94 LPA", max: "20.00 LPA" },
                { name: "2023-24", companies: 52, offers: 132, students: 95, avg: "8.29 LPA", max: "25.00 LPA" },
                { name: "2021-22", companies: 56, offers: 146, students: 102, avg: "10.00 LPA", max: "28.00 LPA" },
                { name: "2020-21", companies: 85, offers: 274, students: 210, avg: "7.50 LPA", max: "20.00 LPA" }
            ]
        }
    },
    'et': {
        name: "Electronics And Telecommunication Engineering",
        ug: {
            ongoing: {
                name: "B.E. Electronics And Telecommunication Engineering (2025-26)",
                companies: 300, offers: 61, students: 47,
                avg: "11.128 LPA", max: "50.00 LPA"
            },
            full: [
                { name: "2024-25", companies: 41, offers: 53, students: 49, avg: "9.67 LPA", max: "39.00 LPA" },
                { name: "2023-24", companies: "N/A", offers: 45, students: 60, avg: "75% Placed", max: "12 Higher Studies" },
                { name: "2022-23", companies: "N/A", offers: 39, students: 64, avg: "61% Placed", max: "0 Higher Studies" },
                { name: "2021-22", companies: "N/A", offers: 48, students: 60, avg: "80% Placed", max: "0 Higher Studies" },
                { name: "2020-21", companies: "N/A", offers: 47, students: 54, avg: "87% Placed", max: "1 Higher Studies" }
            ]
        },
        pg: {
            ongoing: {
                name: "M.Tech. Digital Communication Engineering (2025-26)",
                companies: 1, offers: 1, students: 1,
                avg: "15.00 LPA", max: "15.00 LPA"
            },
            full: [
                { name: "2024-25*", companies: 1, offers: 1, students: 1, avg: "15.00 LPA", max: "15.00 LPA" },
                { name: "2023-24", companies: 12, offers: 8, students: 8, avg: "7.50 LPA", max: "10.00 LPA" },
                { name: "2021-22", companies: 12, offers: 11, students: 11, avg: "7.09 LPA", max: "18.60 LPA" },
                { name: "2020-21", companies: 16, offers: 22, students: 22, avg: "8.22 LPA", max: "21.50 LPA" }
            ]
        }
    },
    hostelDetails: {
        boysBlocks: { chamundi: "1st year UG", cauvery: "2nd & 3rd year UG", cauveryAnnex: "1st year UG", sirMV: "Final year UG & PG" },
        girlsBlocks: { djBlock: "1st year & higher sem B.E. (On-campus)", krishnaGarden: "Higher sem B.E., M.Tech, MCA (Off-campus, Pattanagere)" },
        fees: { tripleSharing: "~₹1,42,000 – ₹1,53,000 per annum", doubleSharing: "~₹1,84,000 – ₹1,91,000 per annum" },
        facilities: "Furnished rooms (bed, study table, chair, cupboard), Wi-Fi, 24/7 security, gymnasium, indoor/outdoor sports, vegetarian mess",
        messDetails: {
            type: "Strictly Vegetarian",
            messes: ["Cauvery Mess (1st Year)", "Sir MV Mess (Seniors)", "DJ Mess (Girls)"],
            meals: "Breakfast, Lunch, Evening Snacks, and Dinner",
            management: "Student-run Mess Committee (Finalizes menu & monitors quality)",
            timings: "Specific timings for each meal (Curfew applicable)",
            contact: "080-68188256 / 8271"
        }
    },
    safety: {
        cctv: "Extensive CCTV surveillance across all blocks, classrooms, and hostels",
        wardens: "Residential wardens in all hostel blocks",
        healthCentre: "On-campus Health Centre with 24/7 medical support and ambulance facility. Partnered with Aster Hospital for specialist care.",
        healthDetails: {
            doctor: "Full-time resident medical officer available",
            services: ["Emergency Care", "Consultation", "24/7 Ambulance", "Medical Pharmacy"],
            hospital: "Tied up with Aster Hospital, RV Road for advanced treatments"
        },
        grievance: "Active Internal Complaints Committee (ICC) and Student Grievance Redressal Cell",
        antiRagging: "Strict Zero Tolerance policy; Anti-ragging squad ensures a safe environment for freshers"
    },
    campus: {
        fest: "8th Mile (Annual Technocultural Fest)",
        clubs: ["Alaap (Music)", "Raaga (Dance)", "TEDxRVCE", "CARV (Cultural)", "Entrepreneurship Cell (E-Cell)", "Namma RVCE (Social)", "DebSoc", "QuizCorp", "Photography Club", "Literary Society", "Kannada Sangha", "Rotaract Club", "Coding Club", "Robotics Club", "NSS", "NCC", "RVCE Ham Club (Amateur Radio)"],
        teams: ["Team Ashwa (Formula Student Racing)", "Team dhRuVa (Solar Car Team)", "Team Antariksh (Satellite & Space Tech)", "ASTRA Robotics (Competitive Robotics)", "Team Chimera (Hybrid Engine Vehicle)", "Team Vyoma (UAS & Drones)", "Team Garuda (Supermileage Vehicle)", "Team Jatayu (Autonomous UAVs)", "Team Helios Racing (ATV/Baja Racing)"],
        societies: ["IEEE RVCE", "SAE RVCE", "ACM Student Chapter", "CSI Student Chapter"],
        urls: {
            innovation: "https://rvce.edu.in/innovative_teams/",
            cultural: "https://rvce.edu.in/cultural_teams/"
        }
    },
    events: [
        { name: "GenAI Workshop (B.E. 2nd Year)", date: "May 15-20, 2026", type: "Technical" },
        { name: "CSITSS 2026 Conference (IEEE)", date: "2026", type: "Research" },
        { name: "Applied AI/ML in Renewable Energy Certification", date: "Mar 16 – Jun 19, 2026", type: "Technical" },
        { name: "ICOECA 2026 Conference", date: "June 12-14, 2026", type: "Research" },
        { name: "8th Mile — Annual Technocultural Fest", date: "2026 (TBA)", type: "Cultural" }
    ],
    attendance: {
        requirement: "Minimum 85% attendance mandatory",
        consequence: "Students below 85% may be detained from appearing in semester exams",
        tracking: "Attendance tracked through mandatory ID card system"
    },
    nearby: {
        areas: "Mysuru Road, Kengeri, Rajarajeshwari Nagar, Pattanagere",
        food: "Multiple eateries, cafes & restaurants near campus on Mysuru Road",
        shopping: "RR Nagar has malls (Gopalan Arcade), local markets, and retail stores",
        hospitals: "BGS Gleneagles Global Hospital, Rajarajeshwari Medical College Hospital nearby",
        connectivity: "NICE Road junction nearby, Kengeri Metro station, BMTC bus routes"
    },
    circulars: {
        academic: "https://rvce.edu.in/academic-circular/",
        admissions: "https://rvce.edu.in/admission-circulars/",
        examinations: "https://rvce.edu.in/examination-circulars/",
        feePayment: "https://rvce.edu.in/academics_and_examinations/fee_payment_circulars/"
    },
    ncc: {
        battalion: "6 Karnataka Battalion NCC",
        established: "2008",
        strength: "80 cadets (Army wing)",
        officer: "ANO in charge",
        activities: "Drill, weapons training, adventure activities, camps (CATC, ATC, NIC), Republic Day parade participation, social service"
    },
    nss: {
        units: "2 NSS Units",
        strength: "200+ volunteers",
        activities: "Blood donation camps, tree plantation drives, rural development, Swachh Bharat campaigns, health awareness programs",
        motto: "Not Me But You"
    },
    kannadaSangha: {
        info: "Kannada Sangha promotes Kannada language, literature, and culture through events, literary competitions, and cultural celebrations.",
        events: "Rajyotsava celebrations, Kannada Habba, poetry recitals, drama performances"
    },
    rvjsteam: {
        info: "RVJ STEAM Team bridges Science, Technology, Engineering, Arts, and Mathematics through hands-on projects, workshops, and school outreach programs."
    },
    faculty: {
        deans: [
            { n: "Dr. Shanmukha Nagaraj", u: "https://rvce.edu.in/department/me/faculty-bio/", d: "Professor & Head of Department (Mechanical Engineering)", e: "23 years" },
            { n: "Dr. B.M. Sagar", u: "https://rvce.edu.in/department/ise/dr_b_m_sagar/", d: "Professor & Dean Student Affairs", e: "21 years" },
            { n: "Dr. M Uttara Kumari", u: "https://rvce.edu.in/department/ece/dr_m_uttara_kumari/", d: "Professor & Dean (Research & Development)", e: "22 years" },
            { n: "Dr. D. Ranganath", u: "https://rvce.edu.in/department/chemical_engineering/dr_d_ranganath/", d: "Professor & Dean Placement & Training", e: "29 years" },
            { n: "Dr. M Krishna", u: "https://rvce.edu.in/department/me/dr_krishna_m/", d: "Professor & Dean-Continuing Education & Skill Development", e: "24 years" }
        ],
        ae: [
            { n: "Dr. R Supreeth", u: "https://rvce.edu.in/department/ae/dr_r_supreeth/", d: "Associate Prof & Head", e: "13.6 Years" },
            { n: "Dr. Ravindra S Kulkarni", u: "https://rvce.edu.in/department/ae/dr_ravindra_s_kulkarni/#", d: "Professor", e: "Teaching: 26 years Research: 2 years" },
            { n: "Dr. Promio Charles F", u: "https://rvce.edu.in/department/ae/dr_promio_charles_f/", d: "Associate Professor", e: "Research-5.5 years; Industry- 1 year; Teaching- 8.6 Years" },
            { n: "Bhaskar K", u: "https://rvce.edu.in/department/ae/bhaskar_k/", d: "Assistant Professor", e: "Teaching: 1 years; Industrial: 7 Years; Research: 3 Years" },
            { n: "Pranesh Kumar S R", u: "https://rvce.edu.in/department/ae/pranesh_kumar_s_r/", d: "Assistant Professor", e: "10.3 Years" },
            { n: "Dr. Benjamin Rohit", u: "https://rvce.edu.in/department/ae/dr_benjamin_rohit/", d: "Assistant Professor", e: "Teaching: 10.4 years" },
            { n: "Srinivasan S", u: "https://rvce.edu.in/department/ae/srinivasan_s/", d: "Assistant Professor", e: "18 years" },
            { n: "Mukesh M", u: "https://rvce.edu.in/department/ae/mukesh_m/", d: "Assistant Professor", e: "Research( 2years) , Teaching( 10.2 years)" },
            { n: "Prof. Deepak Bana", u: "https://rvce.edu.in/department/ae/prof_deepak_bana/", d: "Visiting Professor", e: "Research (1year), Teaching (7 years), Indian Air Force (29 years)" },
            { n: "Dr. Balaguru Pandian", u: "https://rvce.edu.in/department/ae/dr-balaguru-pandian/", d: "Assistant Professor", e: "R&D (5 year), Industry (1 Year), Consulting (2 years), Academia (3 years)" },
            { n: "Dr. Karthik Vel E", u: "https://rvce.edu.in/department/ae/dr-karthik-vel-e/", d: "Assistant Professor", e: "-3.5 years (Research) and 1 year (Academic)" },
            { n: "Dr. Ekta Jain", u: "https://rvce.edu.in/department/ae/ekta-jain/", d: "Assistant Professor", e: "Not specified" }
        ],
        aiml: [
            { n: "Dr. B. Sathish Babu", u: "https://rvce.edu.in/department/ai_ml/dr_b_sathish_babu_bio/", d: "Professor and HoD", e: "Teaching: 30 Years" },
            { n: "Dr. Vijayalakshmi M N", u: "https://rvce.edu.in/department/ai_ml/dr_vijayalakshmi_m_n/", d: "Associate Professor", e: "25 years" },
            { n: "Dr. S. Anupama Kumar", u: "https://rvce.edu.in/department/ai_ml/dr_s_anupama_kumar/", d: "Associate Professor", e: "25 years" },
            { n: "Dr. Narasimha Swamy S", u: "https://rvce.edu.in/department/ai_ml/dr_narasimha_swamy_s/", d: "Assistant Professor", e: "Teaching: 4 years" },
            { n: "Dr. Somesh Nandi", u: "https://rvce.edu.in/department/ai_ml/dr_somesh_nandi/", d: "Assistant Professor", e: "7 years" },
            { n: "K Vishwavardhan Reddy", u: "https://rvce.edu.in/department/ai_ml/dr_k_vishwavardhan_reddy/", d: "Assistant Professor", e: "11 Years" },
            { n: "Prof. Sonika C T", u: "https://rvce.edu.in/department/wp-content/uploads/2025/10/Sonika.pdf", d: "Assistant Professor", e: "Not specified" },
            { n: "Prof. Manasa M", u: "https://rvce.edu.in/department/ai_ml/prof_manasa_m/", d: "Assistant Professor", e: "2 years" },
            { n: "Prof. Harshitha V", u: "https://rvce.edu.in/department/ai_ml/prof_harshitha_v/", d: "Assistant Professor", e: "Not specified" },
            { n: "Prof. Rushikesh Anil Padaki", u: "https://rvce.edu.in/department/ai_ml/prof_rushikesh_anil_padaki/", d: "Assistant Professor", e: "Not specified" }
        ],
        bt: [
            { n: "Dr. Nagashree N Rao", u: "https://rvce.edu.in/department/biotechnology/dr_nagashree_n_rao/", d: "Professor and HoD", e: "27 Years" },
            { n: "Dr. Vidya Niranjan", u: "https://rvce.edu.in/department/biotechnology/dr_vidya_niranjan/", d: "Professor", e: "22 years" },
            { n: "Dr. G Vijaya Kumar", u: "https://rvce.edu.in/department/biotechnology/dr_g_vijaya_kumar/", d: "Associate Professor and Associate Dean (PG Studies)", e: "20 years" },
            { n: "Dr. A. H. Manjunatha Reddy", u: "https://rvce.edu.in/department/biotechnology/dr_a_h_manjunatha_reddy/", d: "Professor", e: "18 years" },
            { n: "Dr. Neeta Shivakumar", u: "https://rvce.edu.in/department/biotechnology/dr_neeta_shivakumar/", d: "Associate Professor", e: "16 years" },
            { n: "Dr. Lingayya Hiremath", u: "https://rvce.edu.in/department/biotechnology/dr_lingayya_hiremath/", d: "Assistant Professor", e: "19 years" },
            { n: "Dr. M Rajeswari", u: "https://rvce.edu.in/department/biotechnology/dr_m_rajeswari/", d: "Assistant Professor", e: "21 years" },
            { n: "Dr. Ajeet Kumar Srivastava", u: "https://rvce.edu.in/department/biotechnology/dr_ajeet_kumar_srivastava/", d: "Assistant Professor", e: "19 years" },
            { n: "Dr. Shivandappa", u: "https://rvce.edu.in/department/biotechnology/dr_shivandappa/", d: "Assistant Professor", e: "17 years" },
            { n: "Dr. Narendra Kumar S", u: "https://rvce.edu.in/department/biotechnology/dr_narendra_kumar_s/", d: "Assistant Professor", e: "15 years" },
            { n: "Dr. Praveen Kumar Gupta", u: "https://rvce.edu.in/department/biotechnology/dr_praveen_kumar_gupta/", d: "Assistant Professor", e: "15 years" },
            { n: "Dr. Trilok Chandran B", u: "https://rvce.edu.in/department/biotechnology/dr_trilok_chandran_b/", d: "Assistant Professor", e: "17 years" },
            { n: "Dr. H. Raju", u: "https://rvce.edu.in/department/biotechnology/dr_h_raju/", d: "Assistant Professor", e: "15 years" },
            { n: "Dr. Sumathra M", u: "https://rvce.edu.in/department/biotechnology/dr_sumathra_m/", d: "Assistant Professor", e: "13 years" },
            { n: "Dr. H G Ashok Kumar", u: "https://rvce.edu.in/department/biotechnology/dr_h_g_ashok_kumar/", d: "Professor", e: "Teaching: 17 years" },
            { n: "Dr. A V Narayan", u: "https://rvce.edu.in/department/biotechnology/dr_a_v_narayan/", d: "Associate Professor", e: "19 Years" },
            { n: "Dr. Ashwani Sharma", u: "https://rvce.edu.in/department/biotechnology/dr_ashwani_sharma/", d: "Assistant Professor", e: "19 Years" }
        ],
        ch: [
            { n: "Dr. Jagadish H Patil", u: "https://rvce.edu.in/department/chemical_engineering/dr_jagadish_h_patil/", d: "Associate Professor and Head", e: "22 years" },
            { n: "Dr. D. Ranganath", u: "https://rvce.edu.in/department/chemical_engineering/dr_d_ranganath/", d: "Professor and Dean Placement", e: "29 years" },
            { n: "Dr. Vinod Kallur", u: "https://rvce.edu.in/department/chemical_engineering/dr_vinod_kallur/", d: "Associate Professor", e: "24 years" },
            { n: "Dr. Basavaraja R. J.", u: "https://rvce.edu.in/department/chemical_engineering/dr_basavaraja_r_j/", d: "Associate Professor", e: "17 years" },
            { n: "Dr. Vidya C.", u: "https://rvce.edu.in/department/chemical_engineering/dr_vidya_c/", d: "Assistant Professor", e: "14 years" },
            { n: "Dr. Rajalakshmi Mudbidre", u: "https://rvce.edu.in/department/chemical_engineering/dr_rajalakshmi_mudbidre/", d: "Assistant Professor and Associate Dean", e: "14 years" },
            { n: "Dr. Ujwal Shreenag Meda", u: "https://rvce.edu.in/department/chemical_engineering/dr_ujwal_shreenag_meda/", d: "Assistant Professor", e: "10 years" },
            { n: "Dr. Manjula Sarode", u: "https://rvce.edu.in/department/chemical_engineering/dr_manjula_sarode/", d: "Assistant Professor", e: "11 years" },
            { n: "Dr. Vinutha Moses", u: "https://rvce.edu.in/department/chemical_engineering/vinutha_moses/", d: "Assistant Professor", e: "16 years" },
            { n: "Dr. P L Muralidhara", u: "https://rvce.edu.in/department/chemical_engineering/dr_p_l_muralidhara/", d: "Assistant Professor", e: "28 years" },
            { n: "Dr. Anupama V. Joshi", u: "https://rvce.edu.in/department/chemical_engineering/anupama_v_joshi/", d: "Assistant Professor", e: "7 years" }
        ],
        chy: [
            { n: "Dr. Mahesh R", u: "https://rvce.edu.in/department/chemistry/dr_mahesh_r/", d: "Associate Professor", e: "24 Years" },
            { n: "Dr. Raviraj Kusanur", u: "https://rvce.edu.in/department/chemistry/raviraj_a_k/", d: "Professor", e: "14 Years" },
            { n: "Dr. Swarna M. Patra", u: "https://rvce.edu.in/department/chemistry/dr_swarna_mayee_patra/", d: "Associate Professor", e: "13 Years" },
            { n: "Dr. C. Manjunatha", u: "https://rvce.edu.in/department/chemistry/dr_manjunatha_c/", d: "Associate Professor", e: "16 Years" },
            { n: "Dr. Divakara S. G.", u: "https://rvce.edu.in/department/chemistry/divakara-s-g/", d: "Associate Professor", e: "19 Years" },
            { n: "Dr. Sham Aan M. P.", u: "https://rvce.edu.in/department/chemistry/sham_aan_m_p/", d: "Assistant Professor", e: "10.5 Years" },
            { n: "Dr. M. Sridharan", u: "https://rvce.edu.in/department/chemistry/dr_sridharan_m/", d: "Assistant Professor", e: "8 Years" },
            { n: "Dr. Vishnumurthy K. A", u: "https://rvce.edu.in/department/chemistry/dr_vishnumurthy_k_a/", d: "Assistant Professor", e: "11 Years" },
            { n: "Dr. Swetha S. M.", u: "https://rvce.edu.in/department/chemistry/dr_swetha_s_m/", d: "Assistant Professor", e: "2 Year" },
            { n: "Dr. Rita Hemanth Shankar", u: "https://rvce.edu.in/department/chemistry/dr_rita_hemanth_shankar/", d: "Assistant Professor", e: "7.5 years" },
            { n: "Dr. Radha N", u: "https://rvce.edu.in/department/chemistry/dr-radha-n/", d: "Assistant Professor", e: "Not specified" }
        ],
        cv: [
            { n: "Dr. Anjaneyappa", u: "https://rvce.edu.in/department/civil_engineering/civil-faculty-bio/", d: "Professor and Head", e: "21 Years" },
            { n: "Dr. Radhakrishna", u: "https://rvce.edu.in/department/civil_engineering/dr-radhakrishna/", d: "Professor & PG Dean (Non-Circuit)", e: "31 Years" },
            { n: "Dr. M. V. Renukadevi", u: "https://rvce.edu.in/department/civil_engineering/dr_m_v_renukadevi/", d: "Professor", e: "31 years" },
            { n: "Dr. B. C. Udayashankar", u: "https://rvce.edu.in/department/civil_engineering/dr-b-c-udayashankar/", d: "Professor", e: "33 Years" },
            { n: "Dr. M. S. Nagakumar", u: "https://rvce.edu.in/department/civil_engineering/dr-m-s-nagakumar/", d: "Professor", e: "31 Years" },
            { n: "Dr. V. Anantharama", u: "https://rvce.edu.in/department/civil_engineering/dr_v_anantharama/", d: "Associate Professor", e: "26 Years" },
            { n: "Dr. Vinod A. R.", u: "https://rvce.edu.in/department/civil_engineering/dr_vinod_a_r/", d: "Associate Professor", e: "18 Years" },
            { n: "Dr. M. Lokeshwari", u: "https://rvce.edu.in/department/civil_engineering/dr_m_lokeshwari/", d: "Associate Professor", e: "18 Years" },
            { n: "Dr. T. Raghavendra", u: "https://rvce.edu.in/department/civil_engineering/dr_t_raghavendra/", d: "Associate Professor", e: "18 years" },
            { n: "Dr. S. Nethravathi", u: "https://rvce.edu.in/department/civil_engineering/dr_s_nethravathi/", d: "Associate Professor", e: "16 Years" },
            { n: "Dr. L. Durga Prashanth", u: "https://rvce.edu.in/department/civil_engineering/dr-l-durga-prashanth/", d: "Associate Professor", e: "13 years" },
            { n: "Dr. M. Varuna", u: "https://rvce.edu.in/department/civil_engineering/dr_m_varuna/", d: "Assistant Professor", e: "14 years" },
            { n: "Dr. Sindhu D", u: "https://rvce.edu.in/department/civil_engineering/dr-sindhu-d/", d: "Assistant Professor", e: "13 years" },
            { n: "Dr. Sunil S", u: "https://rvce.edu.in/department/civil_engineering/dr-sunil-s/", d: "Assistant Professor", e: "13 Years" },
            { n: "Dr. Praveen Kumar K", u: "https://rvce.edu.in/department/civil_engineering/dr-praveen-kumar-k/", d: "Assistant Professor", e: "13 Years 6 months" },
            { n: "Dr. K. Gajalakshmi", u: "https://rvce.edu.in/department/civil_engineering/dr-k-gajalakshmi/", d: "Assistant Professor", e: "13 Years 6 months" },
            { n: "Dr. Somanath. M. Basutkar", u: "https://rvce.edu.in/department/civil_engineering/dr_somanath_m_basutkar/", d: "Assistant Professor", e: "4 years" },
            { n: "Dr. Venugopal. G", u: "https://rvce.edu.in/department/civil_engineering/dr-venugopal-g/", d: "Assistant Professor", e: "4 years" },
            { n: "Dr. Vikas Mendi", u: "https://rvce.edu.in/department/civil_engineering/dr_vikas_mendi/", d: "Assistant Professor", e: "6 years" },
            { n: "Ram Thilak", u: "https://rvce.edu.in/department/civil_engineering/ram-thilak/", d: "Assistant Professor", e: "7 years" },
            { n: "Dr. Vageesh H P", u: "https://rvce.edu.in/department/civil_engineering/vageesh_h_p/", d: "Assistant Professor", e: "10 years" },
            { n: "Ravikiran S Wali", u: "https://rvce.edu.in/department/civil_engineering/ravikiran_s_wali/", d: "Assistant Professor", e: "9 years" },
            { n: "Dr. Shrithi S Badami", u: "https://rvce.edu.in/department/civil_engineering/shrithi-s-badami/", d: "Assistant Professor", e: "9 Years" },
            { n: "Dr. Shashi Kiran C R", u: "https://rvce.edu.in/department/civil_engineering/shashi_kiran_c_r/", d: "Assistant Professor", e: "10 Years" },
            { n: "Gowtham Prasad M E", u: "https://rvce.edu.in/department/civil_engineering/gowtham_prasad_m_e/", d: "Assistant Professor", e: "8 years" },
            { n: "Ashwin Thammaiah K", u: "https://rvce.edu.in/department/civil_engineering/ashwin_thammaiah_k/", d: "Assistant Professor", e: "8 years" },
            { n: "Dr. K. Madhavi", u: "https://rvce.edu.in/department/civil_engineering/dr_k_madhavi/", d: "Assistant Professor", e: "17 Years" },
            { n: "Dr. M. R. Archana", u: "https://rvce.edu.in/department/civil_engineering/dr_m_r_archana/", d: "Assistant Professor", e: "12 years" }
        ],
        cs: [
            { n: "Dr. Ramakanth Kumar P", u: "https://rvce.edu.in/department/cse/dr_ramakanth_kumar_p/", d: "Professor & Dean (CSE cluster)", e: "31 years" },
            { n: "Dr. Shanta Rangaswamy", u: "https://rvce.edu.in/department/cse/dr_shanta_rangaswamy/", d: "Professor & Head", e: "24 years" },
            { n: "Dr. Vinay Hegde", u: "https://rvce.edu.in/department/cse/dr_vinay_hegde/", d: "Professor", e: "19 years" },
            { n: "Dr. Hemavathy R.", u: "https://rvce.edu.in/department/cse/dr_hemavathy_r/", d: "Professor", e: "23 years" },
            { n: "Dr. Krishnappa H K", u: "https://rvce.edu.in/department/cse/dr_krishnappa_h_k/", d: "Professor", e: "25 years" },
            { n: "Dr. Sowmyarani C N", u: "https://rvce.edu.in/department/cse/dr-sowmyarani-c-n/", d: "Professor", e: "14 years" },
            { n: "Dr. Rajashree Shettar", u: "https://rvce.edu.in/department/cse/dr-rajashree-shettar/", d: "Professor", e: "27 years" },
            { n: "Dr. G. S. Nagaraja", u: "https://rvce.edu.in/department/cse/dr-g-s-nagaraja/", d: "Professor", e: "30 years" },
            { n: "Dr. Minal Moharir", u: "https://rvce.edu.in/department/cse/dr-minal-moharir/", d: "Professor & Programme Coordinator", e: "Not specified" },
            { n: "Dr. Soumya A.", u: "https://rvce.edu.in/department/cse/dr_soumya_a/", d: "Professor & Program Coordinator", e: "21 years" },
            { n: "Dr. Deepamala N", u: "https://rvce.edu.in/department/cse/dr_deepamala_n/", d: "Professor", e: "15 years" },
            { n: "Dr. Azra Nasreen", u: "https://rvce.edu.in/department/cse/dr_azra_nasreen/", d: "Associate Professor", e: "20 years" },
            { n: "Dr. Pratiba D", u: "https://rvce.edu.in/department/cse/dr-pratiba-d/", d: "Associate Professor", e: "17 years" },
            { n: "Dr. Praveena T", u: "https://rvce.edu.in/department/cse/dr-praveena-t/", d: "Associate Professor", e: "18 years" },
            { n: "Dr. K. Badari Nath", u: "https://rvce.edu.in/department/cse/dr_k_badari_nath/", d: "Associate Professor", e: "13 years" },
            { n: "Dr. Chethana R. Murthy", u: "https://rvce.edu.in/department/cse/dr-chethana-r-murthy/", d: "Associate Professor", e: "16 years" },
            { n: "Dr. Pavithra H", u: "https://rvce.edu.in/department/cse/dr-pavithra-h/", d: "Associate Professor", e: "14 years" },
            { n: "Dr. Prapulla S B", u: "https://rvce.edu.in/department/cse/dr-prapulla-s-b/", d: "Associate Professor", e: "17 years" },
            { n: "Dr. Sneha M", u: "https://rvce.edu.in/department/cse/dr_sneha_m/", d: "Associate Professor", e: "11 years" },
            { n: "Dr. Smriti Srivastava", u: "https://rvce.edu.in/department/cse/dr_smriti_srivastava/", d: "Associate Professor", e: "13 years" },
            { n: "Dr. Veena Gadad", u: "https://rvce.edu.in/department/cse/dr-veena-gadad/", d: "Associate Professor", e: "12 years" },
            { n: "Dr. Mohana", u: "https://rvce.edu.in/department/cse/dr_mohana/", d: "Associate Professor", e: "18 years" },
            { n: "Dr. Sandhya S.", u: "https://rvce.edu.in/department/cse/dr_sandhya_s/", d: "Associate Professor", e: "19 years" },
            { n: "Dr. Manas M N", u: "https://rvce.edu.in/department/cse/dr-manas-m-n/", d: "Associate Professor", e: "8 years" },
            { n: "Dr. Manonmani S.", u: "https://rvce.edu.in/department/cse/dr-manonmani-s/", d: "Assistant Professor", e: "13 years" },
            { n: "Dr. Deepika Dash", u: "https://rvce.edu.in/department/cse/prof-deepika-dash/", d: "Assistant Professor", e: "13 years" },
            { n: "Dr. Anitha Sandeep", u: "https://rvce.edu.in/department/cse/dr_anitha_sandeep/", d: "Assistant Professor", e: "21+ years" },
            { n: "Dr. Apoorva Udaya Kumar Chate", u: "https://rvce.edu.in/department/cse/prof_apoorva_udaya_kumar_chate/", d: "Assistant Professor", e: "1.5 year" },
            { n: "Prof. Rajatha", u: "https://rvce.edu.in/department/cse/prof_rajatha/", d: "Assistant Professor", e: "7 years" },
            { n: "Dr. Savitri Kulkarni", u: "https://rvce.edu.in/department/cse/prof_savitri_kulkarni/", d: "Assistant Professor", e: "14.5 years" },
            { n: "Dr. Karanam Sunil Kumar", u: "https://rvce.edu.in/department/cse/dr-karanam-sunil-kumar/", d: "Assistant Professor", e: "18 years" },
            { n: "Prof. Saraswathi Govind Datard", u: "https://rvce.edu.in/department/cse/prof-saraswathi-govind-datard/", d: "Assistant Professor", e: "3 years" },
            { n: "Prof. Mekhala Vinod Purohit", u: "https://rvce.edu.in/department/cse/prof_mekhala_vinod_purohit/", d: "Assistant Professor", e: "6 months" },
            { n: "Prof. Deepthi L.", u: "https://rvce.edu.in/department/cse/prof-deepthi-l/", d: "Assistant Professor", e: "9 Years" },
            { n: "Dr. Sahana D. Shejwadkar", u: "https://rvce.edu.in/department/cse/sahana-d-shejwadkar/", d: "Assistant Professor", e: "1 Month" },
            { n: "Sanjana Ravindra Otihal", u: "https://rvce.edu.in/department/cse/sanjana-ravindra-otihal/", d: "Assistant Professor", e: "1 Month" },
            { n: "Dr. Jyoti Shetty", u: "https://rvce.edu.in/department/cse/dr-jyoti-shetty/", d: "Associate Professor", e: "16 years" },
            { n: "Dr. Suma B.", u: "https://rvce.edu.in/department/cse/dr_suma_b/", d: "Associate Professor", e: "22 Years" },
            { n: "Dr. Sindhu D V", u: "https://rvce.edu.in/department/cse/dr_sindhu_d_v/", d: "Assistant Professor", e: "5 years" },
            { n: "Prof. Nithyashree G D", u: "https://rvce.edu.in/department/cse/prof_nithyashree_g_d/", d: "Assistant Professor", e: "2 year" },
            { n: "Prof. Shweta Babu Prasad", u: "https://rvce.edu.in/department/cse/prof_shweta_babu_prasad/", d: "Assistant Professor", e: "1 year" },
            { n: "Dr. Srividya M. S.", u: "https://rvce.edu.in/department/cse/dr_srividya_m_s/", d: "Associate Professor", e: "Industry: 8 Years, Teaching: 13 Years" },
            { n: "Prof. L. Kala Chandrashekhar", u: "https://rvce.edu.in/department/cse/prof_l_kala_chandrashekhar/", d: "Assistant Professor", e: "17 year" },
            { n: "Prof. Ganashree K C", u: "https://rvce.edu.in/department/cse/prof-ganashree-k-c/", d: "Assistant Professor", e: "18 years" }
        ],
        ee: [
            { n: "Dr. S G Srivani", u: "https://rvce.edu.in/department/eee/dr_s_g_srivani_bio/", d: "Professor (Fixed Term)", e: "Teaching & Research: 39 years | Industry : 6 months" },
            { n: "Dr. Hemalatha J.N.", u: "https://rvce.edu.in/department/eee/dr_hemalatha_j_n/", d: "Associate Professor", e: "Teaching: 22 Years" },
            { n: "Dr. Adinatha Jain", u: "https://rvce.edu.in/department/eee/dr_adinatha_jain/", d: "Associate Professor", e: "Teaching: 22 Years , Industry: 5 years" },
            { n: "Dr. Rachana S. Akki", u: "https://rvce.edu.in/department/eee/dr_rachana_s_akki/", d: "Associate Professor", e: "Teaching: 18 Years , Industry: 7 Years" },
            { n: "Dr. C. Sunanda", u: "https://rvce.edu.in/department/eee/dr_c_sunanda/", d: "Assistant Professor", e: "Teaching: 22 years" },
            { n: "Dr. Suresh C", u: "https://rvce.edu.in/department/eee/dr_suresh_c/", d: "Assistant Professor", e: "Teaching: 20 years" },
            { n: "Dr. Ajay K.M.", u: "https://rvce.edu.in/department/eee/dr_ajay_k_m/", d: "Assistant Professor", e: "Teaching: 13 Years" },
            { n: "Dr. Madhu B.R.", u: "https://rvce.edu.in/department/eee/dr_madhu_b_r/", d: "Assistant Professor", e: "Teaching: 17 Years" },
            { n: "Dr. Sushmita Sarkar", u: "https://rvce.edu.in/department/eee/dr_sushmita_sarkar/", d: "Assistant Professor", e: "Teaching: 14 Years" },
            { n: "Raja Vidya", u: "https://rvce.edu.in/department/eee/raja_vidya/", d: "Assistant Professor", e: "Teaching – 12.5 Years , Industry – 04 years" },
            { n: "Dr. Parth Sarathi Panigrahy", u: "https://rvce.edu.in/department/eee/dr_parth_sarathi_panigrahy/", d: "Assistant Professor", e: "8.8 years" },
            { n: "Dr. Pandry Narendra Rao", u: "https://rvce.edu.in/department/eee/dr_pandry_narendra_rao/", d: "Assistant Professor", e: "Teaching & Research: 9 years , Industry : 3 Years" },
            { n: "Dr. Abhilash Krishna D G", u: "https://rvce.edu.in/department/eee/dr_abhilash_krishna_d_g/", d: "Assistant Professor", e: "02 Years" }
        ],
        ec: [
            { n: "Dr. H. V. Ravish Aradhya", u: "https://rvce.edu.in/department/ece/dr_h_v_ravish_aradhya/", d: "Professor & HoD", e: "34 years" },
            { n: "Dr. K. S. Geetha", u: "https://rvce.edu.in/department/ece/dr_k_s_geetha/", d: "Professor and Vice-Principal", e: "34 years" },
            { n: "Dr. M. Uttara Kumari", u: "https://rvce.edu.in/department/ece/dr_m_uttara_kumari/", d: "Professor & Dean (R&D)", e: "22 years" },
            { n: "Dr. Prakash Biswagar", u: "https://rvce.edu.in/department/ece/dr_prakash_biswagar/", d: "Professor", e: "30 years" },
            { n: "Dr. Ramesh K B", u: "https://rvce.edu.in/department/ece/dr_ramesh_k_b/", d: "Associate Professor", e: "Not specified" },
            { n: "Dr. Veena Devi", u: "https://rvce.edu.in/department/ece/dr_veena_devi/", d: "Associate Professor", e: "20 years" },
            { n: "Dr. Govinda Raju M", u: "https://rvce.edu.in/department/ece/dr_govinda_raju_m/", d: "Associate Professor", e: "15 Years" },
            { n: "Dr. Mahesh A", u: "https://rvce.edu.in/department/ece/dr_mahesh_a/", d: "Associate Professor", e: "16 years" },
            { n: "Dr. Shilpa D. R.", u: "https://rvce.edu.in/department/ece/dr_shilpa_d_r/", d: "Associate Professor & Assoc. Dean(P&T)", e: "10 years" },
            { n: "Dr. Abhay A. Deshpande", u: "https://rvce.edu.in/department/ece/dr_abhay_a_deshpande/", d: "Associate Professor", e: "8 years" },
            { n: "Dr. Chethana G", u: "https://rvce.edu.in/department/ece/dr_chethana_g/", d: "Assistant Professor", e: "12 years" },
            { n: "Dr. Sujata D. Badiger", u: "https://rvce.edu.in/department/ece/dr_sujata_d_badiger/", d: "Assistant Professor", e: "20 Years" },
            { n: "Dr. Rohini S. Hallikar", u: "https://rvce.edu.in/department/ece/dr_rohini_s_hallikar/", d: "Assistant Professor", e: "20 Years" },
            { n: "Dr. Sujatha Hiremath", u: "https://rvce.edu.in/department/ece/dr_sujatha_hiremath/", d: "Assistant Professor", e: "20 years" },
            { n: "Dr. Deepashree Devaraj", u: "https://rvce.edu.in/department/ece/dr-deepashree-devaraj/", d: "Assistant Professor (Selection Grade)", e: "Not specified" },
            { n: "Dr. Rajani Katiyar", u: "https://rvce.edu.in/department/ece/dr_rajani_katiyar/", d: "Assistant Professor", e: "Teaching: 20 Years" },
            { n: "Dr. K. A. Nethravathi", u: "https://rvce.edu.in/department/ece/dr_k_a_nethravathi/", d: "Assistant Professor(Selection Grade)", e: "Teaching: 18 Years." },
            { n: "Dr. Harsha H", u: "https://rvce.edu.in/department/ece/dr_harsha/", d: "Assistant Professor", e: "Teaching: 17 Years." },
            { n: "Dr. Ramavenkateswaran N", u: "https://rvce.edu.in/department/ece/dr_ramavenkateswaran_n/", d: "Assistant Professor (Selection Grade)", e: "Teaching: 16 Years Industry: 2 Years" },
            { n: "Dr. Roopa J", u: "https://rvce.edu.in/department/ece/dr_roopa_j/", d: "Assistant Professor", e: "Teaching: 16 Years , Industry: 2 Years , Research: 10 Years" },
            { n: "P Narashimaraja", u: "https://rvce.edu.in/department/ece/p_narashimaraja/", d: "Assistant Professor", e: "Teaching: 18 Years" },
            { n: "Dr. Veena Divya Krishnappa", u: "https://rvce.edu.in/department/ece/veena_divya_krishnappa/", d: "Assistant Professor", e: "Teaching: 16 yrs; Industry: 02 yrs; Research: 09 yrs" }
        ],
        ei: [
            { n: "Dr. Padmaja K V", u: "https://rvce.edu.in/department/eim/dr_padmaja_k_v/", d: "Professor and Associate Dean- IT", e: "33 yrs" },
            { n: "Dr. Prasanna Kumar S. C.", u: "https://rvce.edu.in/department/eim/dr_prasanna_kumar_s_c/", d: "Professor", e: "26yrs" },
            { n: "Prof. Venkatesh S", u: "https://rvce.edu.in/department/eim/prof_venkatesh_s/", d: "Associate Professor", e: "35 yrs" },
            { n: "Dr. K. B. Ramesh", u: "https://rvce.edu.in/department/eim/dr_k_b_ramesh/", d: "Associate Professor", e: "30yrs" },
            { n: "Dr. Anand Jatti", u: "https://rvce.edu.in/department/eim/dr_anand_jatti/", d: "Associate Professor", e: "22 yrs" },
            { n: "Dr. Sudarshan B. G.", u: "https://rvce.edu.in/department/eim/dr_sudarshan_b_g/", d: "Associate Professor", e: "20 yrs" },
            { n: "Dr. Rachana S. Akki", u: "https://rvce.edu.in/department/eim/dr_rachana_s_akki/#", d: "Assistant Professor", e: "18 yrs" },
            { n: "Dr. Deepashree Devaraj", u: "https://rvce.edu.in/department/eim/dr_deepashree_devaraj/", d: "Assistant Professor", e: "21 yrs" },
            { n: "Dr. Tabitha Janumala", u: "https://rvce.edu.in/department/eim/dr_tabitha_janumala/", d: "Assistant Professor", e: "17 yrs" },
            { n: "Dr. Rajasree P.M.", u: "https://rvce.edu.in/department/eim/dr_rajasree_p_m/", d: "Assistant Professor", e: "13 yrs" },
            { n: "Dr. Kendaganna Swamy S", u: "https://rvce.edu.in/department/eim/dr_kendaganna_swamy_s/", d: "Assistant Professor", e: "13 yrs" }
        ],
        et: [
            { n: "Dr. Nagamani K", u: "https://rvce.edu.in/department/etc/dr_nagamani_k_bio/", d: "Professor and Head", e: "21 Years" },
            { n: "Dr. H.V. Kumaraswamy", u: "https://rvce.edu.in/department/etc/dr_h_v_kumaraswamy/", d: "Professor", e: "30 Years" },
            { n: "Dr. K. Sreelakshmi", u: "https://rvce.edu.in/department/etc/dr_k_sreelakshmi/", d: "Professor & PG Dean Studies (Circuit Branches)", e: "28 yrs" },
            { n: "Dr. P. Nagaraju", u: "https://rvce.edu.in/department/etc/dr_p_nagaraju/", d: "Associate Professor & Associate Dean PG Studies", e: "30 Years" },
            { n: "Dr. B. Roja Reddy", u: "https://rvce.edu.in/department/etc/dr_b_roja_reddy/", d: "Associate Professor", e: "22 yrs" },
            { n: "Dr. Premananda B S", u: "https://rvce.edu.in/department/etc/dr_premananda_b_s/", d: "Associate Professor", e: "22 Yrs" },
            { n: "Dr. Bhagya R", u: "https://rvce.edu.in/department/etc/dr_bhagya_r/", d: "Associate Professor", e: "16 Years" },
            { n: "Dr. Shanthi P", u: "https://rvce.edu.in/department/etc/dr_shanthi_p/", d: "Associate Professor", e: "26 Yrs" },
            { n: "Dr. Usha Padma", u: "https://rvce.edu.in/department/etc/dr_usha_padma/", d: "Assistant Professor", e: "19 Years" },
            { n: "Prof. T.P. Mithun", u: "https://rvce.edu.in/department/etc/prof_t_p_mithun/", d: "Assistant Professor", e: "15 Yrs" },
            { n: "Dr. Shambulinga M", u: "https://rvce.edu.in/department/etc/dr_shambulinga_m/", d: "Assistant Professor", e: "12 yrs" },
            { n: "Dr. Sandya H B", u: "https://rvce.edu.in/department/etc/dr_sandya_h_b/", d: "Assistant Professor", e: "12 yrs" },
            { n: "Prof. N.N. Nagendra", u: "https://rvce.edu.in/department/etc/prof_nagendra_n_n/", d: "Assistant Professor", e: "10 yrs" },
            { n: "Prof. Mahalakshmi M. N.", u: "https://rvce.edu.in/department/etc/prof_mahalakshmi_m_n/", d: "Assistant Professor", e: "10Yrs" },
            { n: "Prof. Rakesh K.R", u: "https://rvce.edu.in/department/etc/prof_rakesh_k_r/", d: "Assistant Professor", e: "7 Years" },
            { n: "Dr. K. Saraswathi", u: "https://rvce.edu.in/department/etc/dr_k_saraswathi/", d: "Associate Professor", e: "19 Years" },
            { n: "Dr. Ranjani G", u: "https://rvce.edu.in/department/etc/dr_ranjani_g/", d: "Assistant Professor", e: "19 Years" }
        ],
        im: [
            { n: "Dr. Rajeswara Rao K V S", u: "https://rvce.edu.in/department/iem/dr_rajeswara_rao_k_v_s/", d: "Associate Professor & HoD", e: "Teaching: 26 years, Industry : 2 years" },
            { n: "Dr. K N Subramanya", u: "https://rvce.edu.in/department/iem/dr_k_n_subramanya/", d: "Professor & Principal", e: "Teaching : 31, Research :11" },
            { n: "Dr. C K Nagendra Gupta", u: "https://rvce.edu.in/department/iem/dr_c_k_nagendra_gupta/", d: "Professor", e: "Teaching: 28 Years, Industry : 05 years" },
            { n: "Dr M N Vijaya Kumar", u: "https://rvce.edu.in/department/iem/dr_m_n_vijaya_kumar/", d: "Associate Professor", e: "Teaching: 19 years, Industry : 2 years" },
            { n: "Dr. Ramaa A", u: "https://rvce.edu.in/department/iem/dr_ramaa_a/", d: "Associate Professor & Associate Dean Placement & Training", e: "Teaching: 20 years" },
            { n: "Dr. Shobha N S", u: "https://rvce.edu.in/department/iem/dr_shobha_n_s/", d: "Assistant Professor", e: "Teaching: 21 years" },
            { n: "Dr. Vivekanand S. Gogi", u: "https://rvce.edu.in/department/iem/dr_vivekanand_s_gogi/", d: "Assistant Professor", e: "24 years" },
            { n: "Dr Vikram N Bahadurdesai", u: "https://rvce.edu.in/department/iem/dr_vikram_n_bahadurdesai/", d: "Assistant Professor", e: "Teaching: 18 years, Industry 01 year." },
            { n: "Dr Chitra B T", u: "https://rvce.edu.in/department/iem/dr_chitra_b_t/", d: "Assistant Professor", e: "Teaching: 15 years" },
            { n: "Dr Bindu Ashwini C.", u: "https://rvce.edu.in/department/iem/dr_bindu_ashwini_c/", d: "Assistant Professor", e: "24 Years" },
            { n: "Prof Shruthi M N", u: "https://rvce.edu.in/department/iem/prof_shruthi_m_n/", d: "Assistant Professor", e: "17 years" },
            { n: "Prof B. Nandini", u: "https://rvce.edu.in/department/iem/prof_b_nandini/", d: "Assistant Professor", e: "Teaching: 16 years" },
            { n: "Prof Bhaskar M G", u: "https://rvce.edu.in/department/iem/prof_bhaskar_m_g/", d: "Assistant Professor", e: "Industry: 1 Year, Teaching: 11 Year" },
            { n: "Dr N. S. Narahari", u: "https://rvce.edu.in/department/iem/n_s_narahari/", d: "Visiting Professor", e: "Teaching: 35 years" }
        ],
        is: [
            { n: "Dr. G. S. Mamatha", u: "https://rvce.edu.in/department/ise/dr_g_s_mamatha/", d: "Professor and HoD", e: "20 Years" },
            { n: "Dr. B. M. Sagar", u: "https://rvce.edu.in/department/ise/dr_b_m_sagar/", d: "Professor & Dean Student Affairs", e: "21 Years" },
            { n: "Dr Ashwini K. B.", u: "https://rvce.edu.in/department/ise/dr_ashwini_k_b/", d: "Associate Professor", e: "17 years" },
            { n: "Dr Vanishree K.", u: "https://rvce.edu.in/department/ise/dr_vanishree_k/", d: "Associate Professor", e: "16 years" },
            { n: "Dr Merin Meleet", u: "https://rvce.edu.in/department/ise/dr_merin_meleet/", d: "Associate Professor", e: "17 years" },
            { n: "Dr S. G. Raghavendra Prasad", u: "https://rvce.edu.in/department/ise/s_g_raghavendra_prasad/", d: "Assistant Professor", e: "20 Years" },
            { n: "Dr Rekha B. S.", u: "https://rvce.edu.in/department/ise/rekha_b_s/", d: "Assistant Professor", e: "15 years" },
            { n: "Dr Swetha S.", u: "https://rvce.edu.in/department/ise/swetha_s/", d: "Assistant Professor", e: "13 years" },
            { n: "B K Srinivas", u: "https://rvce.edu.in/department/ise/b_k_srinivas/", d: "Assistant Professor", e: "11 years" },
            { n: "Dr Sushmitha N.", u: "https://rvce.edu.in/department/ise/sushmitha_n/", d: "Assistant Professor", e: "17 years" },
            { n: "Dr Kavitha S. N.", u: "https://rvce.edu.in/department/ise/dr_kavitha_s_n/", d: "Associate Professor", e: "17Years" },
            { n: "Dr Rashmi R", u: "https://rvce.edu.in/department/ise/rashmi_r/", d: "Assistant Professor", e: "18 years" },
            { n: "Dr Anala M. R.", u: "https://rvce.edu.in/department/ise/dr_anala_m_r/", d: "Professor", e: "20 years" },
            { n: "Dr Padmashree T", u: "https://rvce.edu.in/department/ise/dr_padmashree_t/", d: "Associate Professor", e: "17 years" },
            { n: "Dr Poornima Kulkarni", u: "https://rvce.edu.in/department/ise/poornima_kulkarni/", d: "Assistant Professor", e: "10 Years" }
        ],
        mat: [
            { n: "Dr. G. Jayalatha", u: "https://rvce.edu.in/department/maths/dr_g_jayalatha/", d: "Professor and HoD", e: "20 Years" },
            { n: "Dr. Neeti Ghiya", u: "https://rvce.edu.in/department/maths/dr_neeti_ghiya/", d: "Professor", e: "20 Years" },
            { n: "Dr. C. Nandeesh Kumar", u: "https://rvce.edu.in/department/maths/dr_c_nandeesh_kumar/", d: "Associate Professor", e: "25 Years" },
            { n: "Dr. Savithri Shashidhar", u: "https://rvce.edu.in/department/maths/dr_savithri_shashidhar/", d: "Associate Professor", e: "20 Years" },
            { n: "Dr. Prakash R", u: "https://rvce.edu.in/department/maths/dr_prakash_r/", d: "Associate Professor", e: "19 Years" },
            { n: "Dr. Sowmya M", u: "https://rvce.edu.in/department/maths/dr_sowmya_m/", d: "Associate Professor", e: "21 Years" },
            { n: "Dr. Satish V. Motammanavar", u: "https://rvce.edu.in/department/maths/dr_satish_v_motammanavar/", d: "Associate Professor", e: "09 Years" },
            { n: "Dr. Y. Sailaja", u: "https://rvce.edu.in/department/maths/dr_y_sailaja/", d: "Assistant Professor", e: "23 Years" },
            { n: "Dr. Sujatha A.", u: "https://rvce.edu.in/department/maths/dr_sujatha_a/", d: "Assistant Professor", e: "20 Years" },
            { n: "Dr. Vidya Patil", u: "https://rvce.edu.in/department/maths/dr_vidya_patil/", d: "Assistant Professor", e: "18 Years" },
            { n: "Dr. Nivya Muchikel", u: "https://rvce.edu.in/department/maths/dr_nivya_muchikel/", d: "Assistant Professor", e: "21 Years" },
            { n: "Dr. Ravi K. M", u: "https://rvce.edu.in/department/maths/dr_ravi_k_m/", d: "Assistant Professor", e: "21 Years" },
            { n: "P. L. Rajashekhar", u: "https://rvce.edu.in/department/maths/mr_p_l_rajashekhar/", d: "Assistant Professor", e: "18 Years" },
            { n: "Dr. Harish M", u: "https://rvce.edu.in/department/maths/dr_harish_m/", d: "Assistant Professor", e: "10 Years" },
            { n: "Dr. Suman N P", u: "https://rvce.edu.in/department/maths/dr_suman_n_p/", d: "Assistant Professor", e: "8 Years" },
            { n: "Dr. Kiran Kumar D L", u: "https://rvce.edu.in/department/maths/dr_kiran_kumar_d_l/", d: "Assistant Professor", e: "5 Years" },
            { n: "Dr. Venugopal K", u: "https://rvce.edu.in/department/maths/dr_venugopal_k/", d: "Assistant Professor", e: "8 Years" },
            { n: "Dr. Niranjan P. K.", u: "https://rvce.edu.in/department/maths/dr_niranjan_p_k/", d: "Assistant Professor", e: "6.5 Years" },
            { n: "Dr. Suma N Manjunath", u: "https://rvce.edu.in/department/maths/dr_suma_n_manjunath/", d: "Assistant Professor", e: "17 Years" },
            { n: "Dr. Prasanna Kumar T", u: "https://rvce.edu.in/department/maths/dr_prasanna_kumar_t/", d: "Assistant Professor", e: "15 Years" },
            { n: "Dr. Sakshath T n", u: "https://rvce.edu.in/department/maths/dr_sakshath_t_n/", d: "Assistant Professor", e: "07 Years" },
            { n: "Dr. Hemanthkumar B", u: "https://rvce.edu.in/department/maths/dr_hemanthkumar_b/", d: "Assistant Professor", e: "12 Years" },
            { n: "Dr. Kirthiga M", u: "https://rvce.edu.in/department/maths/dr_kirthiga_m/", d: "Assistant Professor", e: "5 Years" },
            { n: "Dr. Vyshnavi D", u: "https://rvce.edu.in/department/maths/dr_vyshnavi_d/", d: "Assistant Professor", e: "6 months" }
        ],
        mca: [
            { n: "Dr Jasmine K. S.", u: "https://rvce.edu.in/department/mca/dr_jasmine_k_s_bio/", d: "Associate Professor and Director", e: "28 Years" },
            { n: "Dr Usha J.", u: "https://rvce.edu.in/department/mca/dr_usha_j/", d: "Professor", e: "26 years" },
            { n: "Dr Andhe Dharani", u: "https://rvce.edu.in/department/mca/dr_andhe_dharani/", d: "Professor", e: "23 Years" },
            { n: "Dr B. Renuka Prasad", u: "https://rvce.edu.in/department/mca/dr_b_renuka_prasad/", d: "Associate Professor", e: "21 Years" },
            { n: "Dr B. H. Chandrashekar", u: "https://rvce.edu.in/department/mca/dr_b_h_chandrashekar/", d: "Associate Professor", e: "Teaching: 19 Years, Technical: 15 Years" },
            { n: "Dr Deepika K", u: "https://rvce.edu.in/department/mca/dr_deepika_k/", d: "Associate Professor", e: "Teaching: 12 Years" },
            { n: "Dr Mohan Aradhya", u: "https://rvce.edu.in/department/mca/dr_mohan_aradhya/", d: "Assistant Professor", e: "Teaching: 18 Years" },
            { n: "Dr Divya T. L.", u: "https://rvce.edu.in/department/mca/dr_divya_t_l/", d: "Assistant Professor", e: "Teaching: 17 Years" },
            { n: "Prof Saravanan C", u: "https://rvce.edu.in/department/mca/prof_saravanan_c/", d: "Assistant Professor", e: "Teaching: 17 Years" },
            { n: "Prof Chandrani Chakravorty", u: "https://rvce.edu.in/department/mca/prof_chandrani_chakravorty/", d: "Assistant Professor", e: "Teaching: 16 Years" },
            { n: "Prof Savita Sheelavant", u: "https://rvce.edu.in/department/mca/prof_savita_sheelavant/", d: "Assistant Professor", e: "Teaching: 17 Years" },
            { n: "Prof Prashanth K", u: "https://rvce.edu.in/department/mca/prof_prashanth_k/", d: "Assistant Professor", e: "Teaching: 14 Years, Industry: 1 Year 8 Months" }
        ],
        me: [
            { n: "Dr. Shanmukha N", u: "https://rvce.edu.in/department/me/faculty-bio/", d: "Professor and HOD", e: "23 years" },
            { n: "Dr Krishna M", u: "https://rvce.edu.in/department/me/dr_krishna_m/", d: "Professor and Dean-Continuing Education & Skill Development", e: "24 years" },
            { n: "Dr Nanjundaradhya N. V.", u: "https://rvce.edu.in/department/me/dr_nanjundaradhya_n_v/", d: "Professor", e: "2 years" },
            { n: "Dr Srihari P. V.", u: "https://rvce.edu.in/department/me/dr_srihari_p_v/", d: "Associate Professor", e: "20 years" },
            { n: "Dr P. R. Venkatesh", u: "https://rvce.edu.in/department/me/dr_p_r_venkatesh/", d: "Associate Professor", e: "31 years" },
            { n: "Dr Sridhar R", u: "https://rvce.edu.in/department/me/dr_sridhar_r/", d: "Associate Professor", e: "13 years" },
            { n: "Dr Harisha S. K.", u: "https://rvce.edu.in/department/me/dr_harisha_s_k/", d: "Associate Professor", e: "16 years" },
            { n: "Dr Ratna Pal", u: "https://rvce.edu.in/department/me/dr_ratna_pal/", d: "Assistant Professor", e: "10 years" },
            { n: "Dr Nataraj J. R.", u: "https://rvce.edu.in/department/me/dr_nataraj_j_r/", d: "Associate Professor & Dean Global Partnerships", e: "16 years" },
            { n: "Dr Nagesh S", u: "https://rvce.edu.in/department/me/dr_nagesh_s/", d: "Assistant Professor", e: "10 years" },
            { n: "Dr Ramakrishna Hegde", u: "https://rvce.edu.in/department/me/dr_ramakrishna_hegde/", d: "Assistant Professor", e: "12 years" },
            { n: "Dr Chandrakumar R", u: "https://rvce.edu.in/department/me/dr_chandrakumar_r/", d: "Assistant Professor", e: "17 years" },
            { n: "Dr Sourabha S. Havaldar", u: "https://rvce.edu.in/department/me/dr_sourabha_srinivasa_havaldar/", d: "Assistant Professor", e: "13 years" },
            { n: "Keshavamurthy Y. C.", u: "https://rvce.edu.in/department/me/keshavamurthy_y_c/", d: "Assistant Professor", e: "12 years" },
            { n: "Dr Keshav M", u: "https://rvce.edu.in/department/me/dr_keshav_m/", d: "Assistant Professor", e: "06 years" },
            { n: "Dr Girish Kumar R", u: "https://rvce.edu.in/department/me/dr_girish_kumar_r/", d: "Assistant Professor", e: "06 years" },
            { n: "Dr Girish V. A.", u: "https://rvce.edu.in/department/me/dr_girish_v_a/", d: "Assistant Professor", e: "Teaching: 11 years" },
            { n: "Dr Gangadhar Angadi", u: "https://rvce.edu.in/department/me/dr_gangadhar_angadi/", d: "Assistant Professor", e: "Teaching: 12 year" },
            { n: "Dr Anjaneya G", u: "https://rvce.edu.in/department/me/dr_anjaneya_g/", d: "Assistant Professor", e: "Teaching: 25 year" },
            { n: "Jinka Ranganayakulu", u: "https://rvce.edu.in/department/me/jinka_ranganayakalu/", d: "Assistant Professor", e: "Teaching: 12 year" },
            { n: "Dr Rakesh Kumar", u: "https://rvce.edu.in/department/me/rakesh_kumar/", d: "Assistant Professor", e: "Teaching : 3 Years" },
            { n: "Gajanan", u: "https://rvce.edu.in/department/me/gajanan/", d: "Assistant Professor", e: "Teaching: 10 years" },
            { n: "Abhiram E. R.", u: "https://rvce.edu.in/department/me/abhiram_e_r/", d: "Assistant Professor", e: "Teaching : 4 Years" },
            { n: "Dr Prapul Chandra A C", u: "https://rvce.edu.in/department/me/dr_prapul_chandra_a_c/", d: "Assistant Professor", e: "Teaching : 4 Years" },
            { n: "Dr Mahantash M. Math", u: "https://rvce.edu.in/department/me/dr_mahantash_m_math/", d: "Assistant Professor", e: "Teaching: 14 years" },
            { n: "Prof G R Rajkumar", u: "https://rvce.edu.in/department/me/dr_g_r_rajkumar/", d: "Associate Professor", e: "Teaching: 15 years" },
            { n: "Dr Bharatish A", u: "https://rvce.edu.in/department/me/dr_bharatish_a/", d: "Assistant Professor", e: "Teaching: 15 years" },
            { n: "Prof Roopa T. S.", u: "https://rvce.edu.in/department/me/dr_roopa_t_s/", d: "Assistant Professor", e: "12 Years" },
            { n: "Dr Ramesh S. Sharma", u: "https://rvce.edu.in/department/me/dr_ramesh_s_sharma/", d: "Professor & Associate Dean PG Programs", e: "Teaching: 19 years" },
            { n: "Dr Kirthan L. J.", u: "https://rvce.edu.in/department/me/dr_kirthan_l_j/", d: "Associate Professor", e: "Teaching: 10 years" },
            { n: "Sujan Chakraborty", u: "https://rvce.edu.in/department/me/sujan_chakraborty/", d: "Assistant Professor", e: "Teaching: 10 year" },
            { n: "Dr Jagannatha Guptha V. L.", u: "https://rvce.edu.in/department/me/dr_jagannatha_guptha_v_l/", d: "Assistant Professor", e: "Teaching: 10 years" }
        ],
        phy: [
            { n: "Dr. G. Shireesha", u: "https://rvce.edu.in/department/physics/dr_g_shireesha/", d: "Associate Professor and Head", e: "Teaching-23 years" },
            { n: "Dr. Bhuvaneswara Babu T", u: "https://rvce.edu.in/department/physics/faculty/", d: "Professor", e: "42 Years" },
            { n: "Dr. D. N. Avadhani", u: "https://rvce.edu.in/department/physics/dr_avadhani_d_n/", d: "Associate Professor", e: "Teaching: 22 years" },
            { n: "Dr. Sudha Kamath M K", u: "https://rvce.edu.in/department/physics/dr_sudha_kamath_m_k/", d: "Associate Professor & Deputy Warden RVCE DJ Girls Hostel", e: "Teaching: 30 years" },
            { n: "Dr. Shubha S", u: "https://rvce.edu.in/department/physics/dr_shubha_s/", d: "Assistant Professor (Selection Grade)", e: "Teaching – 16 years" },
            { n: "Dr. Tribikram Gupta", u: "https://rvce.edu.in/department/physics/dr_tribikram_gupta/", d: "Assistant Professor (Senior Scale)", e: "Teaching – 11 years" },
            { n: "Dr. B. M. Rajesh", u: "https://rvce.edu.in/department/physics/dr_b_m_rajesh/", d: "Assistant Professor (Senior Scale)", e: "Teaching – 12 years" },
            { n: "Dr. Ramaya P", u: "https://rvce.edu.in/department/physics/dr_ramya_p/", d: "Assistant Professor (Senior Scale)", e: "Teaching – 08 years" },
            { n: "Dr. Niranjana K M", u: "https://rvce.edu.in/department/physics/dr_niranjana_k_m/", d: "Assistant Professor", e: "Teaching – 08 years" },
            { n: "Dr. Dileep M S", u: "https://rvce.edu.in/department/physics/dr_dileep_m_s/", d: "Assistant Professor", e: "Teaching 12 years" },
            { n: "Dr. Shwetha K P", u: "https://rvce.edu.in/department/physics/dr_shwetha_k_p/", d: "Assistant Professor", e: "Teaching 17 years" },
            { n: "Dr. Rini Ganguly", u: "https://rvce.edu.in/department/physics/dr_rini_ganguly/", d: "Assistant Professor", e: "Teaching- 3.5 years" },
            { n: "Dr. Kavya K. Nayak", u: "https://rvce.edu.in/department/physics/dr_kavya_k_nayak/", d: "Assistant Professor", e: "Research – 6 years" }
        ]
    }
};

/* =============== INPUT SANITIZATION =============== */
function sanitize(input) {
    // 1. Remove dots explicitly to handle c.s.e -> cse
    let cleaned = input.replace(/\./g, '');
    // 2. Remove other special chars but keep underscores
    cleaned = cleaned.replace(/[^a-zA-Z0-9_\s]/g, ' ').toLowerCase();
    
    // 3. Expand common department abbreviations
    const deptAbbr = {
        'cs': 'computer science', 'cse': 'computer science',
        'ec': 'electronics', 'ece': 'electronics',
        'me': 'mechanical', 'mech': 'mechanical',
        'cv': 'civil',
        'ee': 'electrical', 'eee': 'electrical',
        'is': 'information science', 'ise': 'information science',
        'ae': 'aerospace', 'aero': 'aerospace',
        'ch': 'chemical', 'chem': 'chemical',
        'bt': 'biotech', 'biotech': 'biotechnology',
        'im': 'industrial', 'iem': 'industrial',
        'ei': 'instrumentation', 'eie': 'instrumentation',
        'et': 'telecommunication', 'ete': 'telecommunication',
        'aiml': 'artificial intelligence'
    };
    
    // Replace whole words
    cleaned = cleaned.split(/\s+/).map(w => deptAbbr[w] || w).join(' ');

    // 4. Remove extra spaces
    return cleaned.replace(/\s+/g, ' ').trim();
}

/* =============== INTENT MATCHING (Priority-based) =============== */
// p: 0=greet/bye, 1=very specific, 2=medium, 3=generic fallback
const QA = [
    {k:['hi','hello','hey','hii','hola','good morning','good evening','good afternoon','Namaste','yo','sup','howdy','wassup','yoo','heyo','heyy','hellooo','helloo','namaskara'],id:'greet',p:5},
    {k:['bye','goodbye','thank you','thanks','thats all','see you','cya','take care','ok bye','okay bye','good night','tata','laterz','peace out','im out','gtg','gotta go','kbye'],id:'bye',p:5},
    {k:['circular','circulars','announcement','announcements','latest news','recent notice','notices','update','notification','notifications'],id:'circulars',p:1},
    {k:['career','careers','future','jobs','roles','opportunities','scope','prospects','options'],id:'career_options_menu',p:4},
    // P1: Specific topics
    {k:['hostel','hostels','accommodation','dorm','dormitory','boys hostel','girls hostel','hostel fee','hostel room','single room','shared room','hostel mess','staying','where to stay','stay at rvce','pg','paying guest','hostel life','hstl','hostl'],id:'hostels',p:1},
    {k:['mess','mess food','hostel food','mess menu','breakfast','lunch','dinner','food in hostel','mess charges','mess committee'],id:'mess',p:1},
    {k:['transport','how to reach','bmtc','bus route','kengeri metro','commute to rvce','distance from','reach rvce','reach the college','how to get there','travel to rvce','cab to rvce','auto to rvce','ola to rvce','uber to rvce','metro station','nearest metro'],id:'transport',p:1},
    {k:['wifi','internet','wi fi','connectivity','broadband','net access','wifi password','net speed','slow internet'],id:'wifi',p:1},
    {k:['canteen','food','mess food','eat','dining','cafeteria','food court','what to eat','lunch','breakfast','snacks','tiffin','grub','khana','mess menu','food quality','dabba','maggi point'],id:'food',p:1},
    {k:['exam','exams','examination','examinations','semester exam','end semester','internal','assessment','cie','end sem','mid sem','exam pattern','question paper','question papers','endsem','midsem','internals','ia marks','see exam','cie marks','qp','prev papers','previous papers'],id:'exam',p:1},
    {k:['lateral','lateral entry','diploma holder','dcet','lateral admission'],id:'lateral',p:1},
    {k:['nri','international student','foreign student','overseas','ciwg','pio','oci','foreign quota','nri quota','nri admission','abroad student'],id:'nri',p:1},
    {k:['scholarship','financial aid','stipend','merit scholarship','scholy','scholorship','fee waiver','free seat','freeship'],id:'scholarships',p:1},
    {k:['jee','jee mains','jee main','jee accepted','jee score','jee rank','jee valid','does jee work'],id:'jee',p:1},
    {k:['kcet','comedk','comed k','cet rank','kcet rank','comedk rank'],id:'examTypes',p:1},
    {k:['management quota','management seat','direct admission','donation seat','mgmt quota','mgmt seat','donation','capitation','mq seat'],id:'management_quota',p:1},
    {k:['cutoff','cut off','closing rank','kcet rank','comedk cutoff','last rank','expected cutoff','cutoffs','closing ranks'],id:'cutoffs',p:1},
    {k:['fee','fees','tuition','fee structure','semester fee','total cost','how much cost','how much does it cost','fee details','kitna paisa','kitna lagta','college fees','yearly fees','annual fees','payment','pay fee','how to pay','online payment','payment mode'],id:'fees',p:1},
    {k:['refund','fee refund','cancellation','cancel admission','get money back','refund policy','aicte refund','money back','paisa wapas'],id:'refund_policy',p:1},
    {k:['syllabus','1st semester syllabus','1st sem syllabus','first semester syllabus','scheme','first year subjects','1st year syllabus','what are we studying','sylly','syll','subjects list','what subjects'],id:'syllabus_1st_sem',p:0.8},
    {k:['innovation team','formula student','uav','ashwa','chimera','jatayu','astra robotics','antariksh','student projects','project teams','racing team','baja','sae','drone team'],id:'innovationTeams',p:1},
    {k:['cultural life','culture','college culture','theatre','drama','tedx','tedxrvce','fest','8th mile','eighth mile','annual fest','college fest','cultural events','cultural activities','annual day','culturals','fests','techfest','tech fest'],id:'culturalLife',p:1.5},
    {k:['vision','mission','motto','college vision','rvce vision'],id:'vision',p:1},
    {k:['principal','principal name','who is principal','head of institution','director of rvce','who is the principal','about principal','tell me about principal','princi','whos the princi'],id:'principal',p:1},
    {k:['vice principal','vp','vice-principal','who is vice principal','about vice principal','tell me about vice principal','dr k s geetha','geetha mam'],id:'vice_principal',p:1},
    {k:['hod','head of department','dean','deans','faculty','teachers','professors','who is the hod','list of hods','hods','who is hod','department head','heads','teaching staff'],id:'faculty',p:1.5},
    {k:['deans list','all deans','dean list','executive committee','key executives'],id:'deans_list',p:1},
    {k:['hods list','list of hods','all hods','hod list','head of departments','all heads'],id:'hods_list',p:1},
    {k:['coe','coes','centres of excellence','centers of excellence','coe list','research centres','research centers','innovation hubs','all coes','list of coes'],id:'centres_of_excellence',p:1},
    // Specific COE search intents (higher priority for specific names)
    {k:['coe mfc','mfc coe','materials fabrication coe','materials fabrication characterization','coe-mfc','fabrication characterization'],id:'coe_mfc',p:0.5},
    {k:['cisss','cisss coe','hpcc systems','cognitive intelligent systems','hpcc coe','cognitive systems coe'],id:'coe_cisss',p:0.5},
    {k:['iot coe','cisco iot coe','internet of things coe','cisco rvce coe','cisco networking','cisco rvce'],id:'coe_iot',p:0.3},
    {k:['computational genomics coe','genomics coe','bioinformatics coe','biotech coe research'],id:'coe_genomics',p:0.5},
    {k:['sasm','smart antenna coe','sasm coe','anechoic chamber','emi emc coe'],id:'coe_sasm',p:0.5},
    {k:['quantum coe','circuit coe','quantum computing coe','quantum information coe','q-rvce','qrvce'],id:'coe_quantum',p:0.5},
    {k:['hydrogen coe','green tech coe','hydrogen technology coe','fuel cell coe','dover india coe'],id:'coe_hydrogen',p:0.5},
    {k:['toyota','rv toyota','toyota coe','rv toyota coe','automotive engineering coe','toyota kirloskar coe','toyota kirloskar','toyota automotive'],id:'coe_toyota',p:0.3},
    {k:['xr center','xr centre','extended reality coe','vr ar coe','virtual reality coe'],id:'coe_xr',p:0.5},
    {k:['icas','coe icas','integrated circuits coe','vlsi coe','ic design coe'],id:'coe_icas',p:0.5},
    {k:['3s coe','3s infrastructure','safe sustainable smart coe','civil coe research'],id:'coe_3s',p:0.5},
    {k:['logistics coe','supply chain coe','iem coe research','scm coe'],id:'coe_logistics',p:0.5},
    {k:['cav coe','autonomous vehicles coe','connected vehicles coe','self driving coe'],id:'coe_cav',p:0.5},
    {k:['ev coe','electric vehicle coe','mg motor coe','ev technology coe'],id:'coe_ev',p:0.5},
    {k:['bosch','bosch rexroth','rv bosch','bosch coe','bosch rexroth coe','automation coe','plc coe','bosch automation'],id:'coe_bosch',p:0.3},
    {k:['benz','mercedes','mercedes benz','mercedes-benz','adam','mercedes coe','benz coe','adam coe','automotive mechatronics coe','rv mercedes benz','mercedes benz mechatronics'],id:'coe_benz',p:0.3},
    {k:['women in cloud coe','wic coe','cloud computing coe','ise coe research'],id:'coe_wic',p:0.5},
    {k:['sensor coe','csta coe','sensor technology coe','eie sensor coe'],id:'coe_sensor',p:0.5},
    {k:['health coe','chtr','healthcare technology coe','biomedical coe research'],id:'coe_health',p:0.5},
    {k:['5g coe','5g wireless coe','etc coe research','wireless technology coe'],id:'coe_5g',p:0.5},
    {k:['emobility coe','smart grid coe','eee coe research','mobility coe'],id:'coe_mobility',p:0.5},
    {k:['boston ai coe','rvce boston coe','graphcore coe','petaflop coe','boston research'],id:'coe_boston',p:0.5},
    {k:['collaboration','collaborations','partnership','partnerships','industry partners','mou','tie up','tieups','industry tie ups','google','microsoft','tata','tata technologies','boeing','airbus','isro','navy','all collaborations','rvce partners','industry mou'],id:'collaborations',p:1},
    {k:['germany','german','indo german','germany program','german program','thws','indo-german','indo german coe','germany coe','würzburg','wurzburg','schweinfurt'],id:'germany_program',p:0.5},
    {k:['social media','facebook','instagram','linkedin','twitter','x handle','follow us','social handles','social links','connect','online presence','fb','insta'],id:'social',p:1},
    {k:['boston','boston training academy','boston uk','boston ai','graphcore','ai research centre'],id:'boston',p:1},
    {k:['health center','health centre','doctor','medical','ambulance','sick','hospital','first aid','emergency medical','clinic'],id:'health_centre',p:1},
    {k:['ieee','sae','acm','csi','societies','professional societies','student chapters','chapters'],id:'professional_societies',p:1},
    {k:['upcoming events','workshops','conferences','what is happening','happening soon'],id:'upcoming_events',p:1.2},
    {k:['calendar','academic calendar','calendar of events','events','college events'],id:'calendar_events',p:0.7},
    {k:['ranking','nirf','iirf','college ranking','where does rvce rank','ranked','best college','rvce rank','top college','rvce ranking'],id:'ranking',p:1},
    {k:['accreditation','naac','nba','naac grade','naac rating','accredited'],id:'accreditation',p:1},
    {k:['timing','timings','working hours','college hours','college time','what time','opening time','closing time','open close','class timings','college timing','kab khulta','when open'],id:'timings',p:1},
    {k:['trust','trust details'],id:'trust',p:1},
    {k:['research','patent','patents','innovation centre','centre of excellence','research centre','grants','funding','research at rvce','research lab','r and d','rnd'],id:'research',p:1},
    {k:['mca','master of computer application','mca dept','mca department','mca course','mca admission'],id:'dept_mca',p:1},
    {k:['phd','doctoral','doctorate','research program','doctor degree','phd admission','phd at rvce'],id:'phd',p:1},
    {k:['vtu','visvesvaraya','affiliated university','university affiliation','vtu affiliation'],id:'vtu',p:1},
    {k:['seat','seats','total seats','intake','intake capacity','seat count','total intake'],id:'intake',p:0.5},
    {k:['student count','student strength','total students','how many students','current students','how many students in rvce','student population'],id:'student_count',p:1},
    {k:['library','central library','books','reading room','e library','digital library','lib','library timing','study room'],id:'library',p:0.3},
    {k:['sports','cricket','football','basketball','volleyball','athletics','gym','gymnatorium','sports complex','games','badminton','table tennis','tt','fitness','workout','sports ground','playground'],id:'sports',p:1},
    {k:['autonomous','autonomy','own syllabus','own exam','autonomous status','is rvce autonomous'],id:'autonomous',p:1},
    {k:['stat','stats','statistic','statistics','figure','figures','data'],id:'stats_disambiguation',p:0.4},
    {k:['number','numbers','num','contact number','phone number','official number','calling','mobile'],id:'numbers_info',p:2.5},
    // Department-specific (with short codes + college slang)
    {k:['computer science','cse','cs','cs department','computer science engineering','cse department','comps','comp sci','cs branch','cs dept'],id:'dept_cs',p:1},
    {k:['artificial intelligence','aiml','ai ml','machine learning','ai department','ai branch','ml branch','ai and ml'],id:'dept_aiml',p:1},
    {k:['electronics and communication','ece','ec','ec department','ece department','entc','e and c','ec branch'],id:'dept_ec',p:1},
    {k:['mechanical engineering','me department','mech','mech department','mechanical','mech engg','mech branch','mechies'],id:'dept_me',p:1},
    {k:['civil engineering','cv department','cv','civil department','civil','civil branch','cv branch','civil engg'],id:'dept_cv',p:1},
    {k:['electrical','eee','ee','ee department','eee department','electrical engineering','elec','electrical branch','triple e'],id:'dept_ee',p:1},
    {k:['aerospace','ae department','ae','aero','aero department','aeronautical','aerospace engineering','aero branch','aero engg'],id:'dept_ae',p:1},
    {k:['biotech','bt','biotechnology','bio technology','bt department','bio tech','bio branch','biotech dept'],id:'dept_bt',p:1},
    {k:['chemical engineering','ch department','ch','chemical engg','che','chem engg','chem branch','chemical dept'],id:'dept_ch',p:1},
    {k:['information science','ise','is department','ise department','is branch','ise branch','info sci'],id:'dept_is',p:1},
    {k:['data science','csds','ds','cs data science','csds department','ds branch','data sci','csds branch'],id:'dept_csds',p:1},
    {k:['cyber security','cscy','cy','cs cyber security','cscy department','cyber','cyber branch','cscy branch','cybersec'],id:'dept_cscy',p:1},
    {k:['telecom','ete','tc','telecommunication','ete department','tc branch','ete branch','tele'],id:'dept_et',p:1},
    {k:['instrumentation','eie','ei','ei department','eie department','instr','instru','ei branch','eie branch'],id:'dept_ei',p:1},
    {k:['industrial engineering','iem','ie','iem department','industrial management','ie branch','iem branch','industrial'],id:'dept_im',p:1},
    // P2: Mid-level
    {k:['placement stats','placement statistics','placement year','year wise placement','2024 placement','placement 2024','2023 placement','placement 2023','2022 placement','placement 2022','2021 placement','placement 2021','2020 placement','placement 2020','past placements','previous year placements','2024','2023','2022','2021','2020'],id:'placements_yearly',p:0.1},
    {k:['2027 placement','2027 placements','placement 2027','placements 2027','placement stats 2027','2028 placement','2028 placements','2029 placement','2027 stats','2027'],id:'placements_future',p:0.1},
    {k:['placement','placements','placed','salary','package','lpa','ctc','highest package','average salary','recruit','hiring','companies visit','which companies','job','jobs','placement details','plcmnt','plcmnts','campus drive','dream company','mass recruit','superdream','dream offer','placed kya','placement scene','on campus placement','off campus placement'],id:'placements',p:0.5},
    {k:['top company','top companies','top recruiter','top recruiters','who recruits','who visits','recruiters','companies'],id:'top_companies',p:0.6},
    {k:['admission','admissions','how to apply','how to join','entrance','eligibility','enroll','apply to rvce','join rvce','get into rvce','admission process','how to get admission','ug adm','pg adm','ug b e','admission kaise','how to get in','want to join','joining process'],id:'admissions',p:1.5},
    {k:['department','departments','branch','branches','stream','streams','course','courses','program','programmes','what courses','all branches','view programs','depts','all depts'],id:'departments',p:2},
    {k:['ug','ug details'],id:'ug_disambiguation',p:2},
    {k:['ug programs','ug programmes','ug program','undergraduate','undergrad','b e','be','btech','b tech','ug courses','b e flavors','b e course','b e courses','be courses','bachelor','bachelors','ug branch'],id:'ugPrograms',p:1.5},
    {k:['pg program','pg programs','postgraduate','postgrad','m tech','mtech','masters','pg courses','pg branch','pg admission'],id:'pgPrograms',p:1.5},
    {k:['facility','facilities','infrastructure','what facilities','amenities','all facilities','infra','college infra','campus infra'],id:'facilities',p:2},
    {k:['website','site','official website','rvce website','visit website','rvce site','college website'],id:'website',p:2},
    // P3: Generic fallback
    {k:['tell me about','know about','information about','about'],id:'about_disambiguation',p:3.5},
    {k:['rvce','about rvce','college','history','founded','established','overview','abt rvce','whats rvce','what is rvce'],id:'about_rvce',p:3},
    {k:['rvei','about rvei','rsst','institutions','what is rvei','who is rvei','parent organization','who manages','who owns','ownership'],id:'about_rvei',p:3},
    {k:['campus life','student life','extracurricular','clubs','life at rvce','campus','student experience','college life','clg life','lyf at rvce','vibes','campus vibes','college scene'],id:'campusLife',p:1.5},
    {k:['innovation teams','project teams','team chimera','team astra','team ojas','team jatayu','rv racing','formula student','satellite team','racing car','electric car','chitrak','dhruva','quantum tech','anoraniya','ham club','amateur radio','vyoma','team vyoma','astra robotics','project garuda','team chitrak','quantum technology','uav','drone','drones'],id:'innovationTeams',p:1.5},
    {k:['team ashwa','ashwa','racing team','formula student ashwa'],id:'team_ashwa',p:0.6},
    {k:['team antariksh','antariksh','satellite team','space tech team','rocket team'],id:'team_antariksh',p:0.6},
    {k:['team vyoma','vyoma','uav team','drone team','aero design team'],id:'team_vyoma',p:0.6},
    {k:['team chimera','chimera','hybrid racing','electric car team'],id:'team_chimera',p:0.6},
    {k:['astra robotics','astra','robotics team','autonomous team'],id:'astra_robotics',p:0.6},
    {k:['team chitrak','chitrak','electric motorcycle team'],id:'team_chitrak',p:0.6},
    {k:['anoraniya','quantum tech team'],id:'anoraniya',p:0.6},
    {k:['project garuda','garuda','super mileage team'],id:'project_garuda',p:0.6},
    {k:['cultural teams','cultural clubs','alaap','raaga','carv','debsoc','quizcorp','photography club','literary society','rotaract','tedx','tedxrvce','namma rvce','kannada sangha','coding club','robotics club','nss','ncc','ham club'],id:'culturalTeams',p:1},
    {k:['dress code','uniform','what to wear','clothes allowed','is there a uniform','can i wear shorts','can i wear jeans','dress rules','formals','casuals allowed','shorts allowed'],id:'dress_code',p:0.8},
    {k:['anti ragging','ragging','helpline','report ragging','ragging completely banned','bullied','harassed','ragging helpline','rag','ragging scene','ragging hota hai','seniors bully'],id:'anti_ragging',p:0.8},
    {k:['contact','contact us','telephone','reach','phone','email','address','location','where is rvce','map','direction','call','bengaluru','bangalore','college address','rvce address','enquiry','enquiries','enqiry'],id:'contact',p:2},
    {k:['menu','main menu','options','help','start','what can you do','show menu','halp','commands'],id:'menu',p:3},
    // ===== PARENT-SPECIFIC INTENTS =====
    {k:['safe','safety','is it safe','is my child safe','is my daughter safe','security','cctv','campus security','safe for girls','is rvce safe','how safe','secure','campus safety','child safety','girl safety','daughter safety','women safety'],id:'safety',p:0.8},
    {k:['attendance','attendance rules','attendance requirement','minimum attendance','85 percent','attendance mandatory','bunking','bunk','proxy','absent','leave policy','attendance policy','how strict','strict attendance','will my child attend'],id:'attendance',p:1},
    {k:['roi','return on investment','worth the fees','worth the money','value for money','is it worth','paisa vasool','fee worth','investment','good investment','waste of money','expensive but good','justification of fees'],id:'roi',p:1},
    {k:['girls hostel','girls hostel rules','girls curfew','girls safety','female hostel','women hostel','hostel for girls','daughter hostel','curfew','curfew time','hostel timings','hostel curfew','in time','girls hostel fees','separate hostel','hostel rules for girls'],id:'girls_hostel',p:0.7},
    {k:['nearby','surroundings','area around','near rvce','around campus','neighbourhood','neighborhood','food outside','restaurants near','hospital near','hospitals near','shops near','market near','atm near','nearby places','what is around'],id:'nearby',p:1},
    {k:['internship','internships','intern','summer intern','company intern','internship opportunities','internship cell','internship support','do students get internships','intern kahan','intern milta hai'],id:'internship',p:1},
    {k:['startup','entrepreneurship','startup culture','e cell','ecell','incubation','startup support','business','own company','startup scene','entrepreneur','innovation hub'],id:'startup',p:1},
    {k:['peer','peers','peer quality','student quality','topper','toppers','smart students','competitive','peer group','classmates','caliber','students caliber','how are students','crowd','what type of students'],id:'peer_quality',p:1},
    {k:['worth','worth it','is rvce good','is rvce worth it','should i join','should my child join','rvce vs','rvce or','better college','how is rvce','rvce review','reviews','rvce worth joining','join karu','acha hai kya','kaisa hai','accha college hai'],id:'worth_it',p:1.5},
    {k:['best branch','which branch','branch to choose','best department','top branch','scope','which course','cse vs','ise vs','ece vs','branch selection','konsa branch','best course','trending branch','hot branch','most demand'],id:'best_branch',p:1},
    {k:['parking','vehicle','bike parking','car parking','two wheeler','scooty','bike allowed','vehicle allowed','parking space','parking facility'],id:'parking',p:1},
    {k:['part time','part time job','side hustle','earn while studying','freelance','freelancing','earn money','side income','working student','parttime'],id:'part_time',p:1},
    {k:['alumni','alumni network','famous alumni','notable alumni','alumni association','old students','passed out','alumni connect','alumni support','alumni portal'],id:'alumni',p:1},
    {k:['ncc','national cadet corps'],id:'ncc',p:1},
    {k:['nss','national service scheme'],id:'nss',p:1},
    {k:['mandatory disclosure'],id:'mandatory_disclosure',p:1},
    {k:['kannada sangha'],id:'kannada_sangha',p:1},
    {k:['steam team','rvjsteam'],id:'rvjsteam',p:1},
    {k:['calendar','academic calendar','calendar of events'],id:'calendar_events',p:0.7},
    {k:['comparison','compare','rvce vs pes','rvce vs msrit','rvce vs bms','rvce vs sit','pes vs rvce','msrit vs rvce','bms vs rvce','which is better','better than rvce','rvce better','college comparison'],id:'college_compare',p:1},
    {k:['statutory committees','committees','governing body','academic council','finance committee','board of studies'],id:'committees',p:1},
    {k:['policies','college policies','documents','mandatory disclosure','code of conduct','service rules','quality policy'],id:'policies',p:1},
    // ===== MULTI-TURN CONTEXT INTENTS =====
    {k:['tell me more','more about this','more details','elaborate','explain more','more info','more information','can you tell me more','in detail','detailed info','detail','details','expand','continue','go on','aur batao','aur bata'],id:'_more',p:5},
    {k:['go back','back','previous','prev','go back to','return','wapas','piche'],id:'_back',p:5},
    {k:['what else','anything else','something else','other options','what more','kuch aur','aur kya'],id:'_what_else',p:5},
    {k:['yes','yeah','yep','yup','sure','ok','okay','haan','ha','ji','correct','right'],id:'_yes',p:5},
    {k:['no','nah','nope','nahi','na','not interested','skip'],id:'_no',p:5},
];

// 2. Dynamically inject specific HOD queries for ALL departments from KB
const branchHodIntents = [];
const allBranches = [...KB.departments.ug, ...KB.departments.pg];

allBranches.forEach(branch => {
    const code = branch.c;
    const name = sanitize(branch.n.replace(/\s*\([^)]*\)$/, '').trim()).toLowerCase();
    const shortCode = branch.c.toLowerCase();
    
    const kws = [
        `hod ${shortCode}`, `${shortCode} hod`, `head of ${shortCode}`, `who is the hod of ${shortCode}`,
        `hod ${name}`, `${name} hod`, `head of ${name}`
    ];
    
    // Branch-specific aliases
    if (shortCode === 'cs') kws.push('hod cse', 'cse hod', 'computer science hod');
    if (shortCode === 'ec') kws.push('hod ece', 'ece hod', 'electronics hod');
    if (shortCode === 'ee') kws.push('hod eee', 'eee hod', 'electrical hod');
    if (shortCode === 'me') kws.push('mechanical hod', 'mech hod');
    if (shortCode === 'cv') kws.push('civil hod');

    branchHodIntents.push({ k: kws, id: `hod_${shortCode}`, p: 0.5 });
});
QA.push(...branchHodIntents);

// 2.5 Dynamically inject specific Placement queries for ALL departments from KB
const branchPlacementIntents = [];
allBranches.forEach(branch => {
    const code = branch.c;
    const name = sanitize(branch.n.replace(/\s*\([^)]*\)$/, '').trim()).toLowerCase();
    const shortCode = branch.c.toLowerCase();
    
    const kws = [
        `${shortCode} placement`, `${shortCode} placements`, `${shortCode} salary`, `${shortCode} package`, `${shortCode} job`,
        `${name} placement`, `${name} placements`,
        `placement in ${shortCode}`, `placements in ${shortCode}`,
        `placement in ${name}`, `placements in ${name}`
    ];
    
    if (shortCode === 'cs') kws.push('cse placement', 'cse placements', 'computer science placement');
    if (shortCode === 'ec') kws.push('ece placement', 'ece placements');
    if (shortCode === 'ee') kws.push('eee placement', 'eee placements');
    if (shortCode === 'me') kws.push('mechanical placement', 'mech placement');
    if (shortCode === 'cv') kws.push('civil placement');

    branchPlacementIntents.push({ k: kws, id: `plcmt_${shortCode}`, p: 0.4 });
});
QA.push(...branchPlacementIntents);

// 2.6 Dynamically inject specific Intake queries for ALL departments from KB
const branchIntakeIntents = [];
allBranches.forEach(branch => {
    const code = branch.c;
    const name = sanitize(branch.n.replace(/\s*\([^)]*\)$/, '').trim()).toLowerCase();
    const shortCode = branch.c.toLowerCase();
    
    const kws = [
        `${shortCode} intake`, `intake of ${shortCode}`, `how many seats in ${shortCode}`, `${shortCode} seats`,
        `${name} intake`, `intake of ${name}`, `how many seats in ${name}`, `${name} seats`
    ];
    
    kws.push(`${shortCode} accreditation`, `${shortCode} accredited`, `${name} accreditation`, `${name} accredited`);
    
    if (shortCode === 'cs') kws.push('cse intake', 'cse seats', 'computer science intake');
    if (shortCode === 'cs') kws.push('cse accreditation', 'computer science accreditation');
    if (shortCode === 'ec') kws.push('ece accreditation');
    if (shortCode === 'ee') kws.push('eee accreditation');
    if (shortCode === 'me') kws.push('mechanical accreditation', 'mech accreditation');
    if (shortCode === 'cv') kws.push('civil accreditation');
    if (shortCode === 'ec') kws.push('ece intake', 'ece seats');
    if (shortCode === 'ee') kws.push('eee intake', 'eee seats');
    if (shortCode === 'me') kws.push('mechanical intake', 'mech intake');
    if (shortCode === 'cv') kws.push('civil intake');

    branchIntakeIntents.push({ k: kws, id: `intake_${shortCode}`, p: 0.4 });
});
QA.push(...branchIntakeIntents);


// 3. Dynamically inject Faculty names for direct search
if (KB.faculty) {
    Object.keys(KB.faculty).forEach(dept => {
        KB.faculty[dept].forEach(fac => {
            const full = fac.n.toLowerCase();
            const plain = fac.n.replace(/Dr\.|Prof\.|Mr\.|Assistant Prof/gi, '').trim().toLowerCase();
            const slug = full.replace(/[^a-z0-9]/g, '');
            // Priority 4 ensures it matches AFTER common command keywords (p=1-3)
            QA.push({ k: [full, plain], id: `fac_${slug}`, p: 4 });
        });
    });
}

function findFacultyMatch(input) {
    const sInput = sanitize(input).toLowerCase().replace(/[^a-z]/g, '');
    let bestMatch = null;
    let bestMatchLength = 0;

    for (const deptCode in KB.faculty) {
        for (const fac of KB.faculty[deptCode]) {
            const fSlug = fac.n.toLowerCase().replace(/[^a-z]/g, '');
            const pSlug = fac.n.replace(/Dr\.|Prof\.|Mr\.|Assistant Prof/gi, '').toLowerCase().replace(/[^a-z]/g, '');
            
            if (sInput === fSlug || sInput === pSlug) {
                return `fac_${fSlug}`;
            }
            if (sInput.length > 5 && (sInput.includes(fSlug) || sInput.includes(pSlug))) {
                const matchLen = sInput.includes(fSlug) ? fSlug.length : pSlug.length;
                if (matchLen > bestMatchLength) {
                    bestMatch = `fac_${fSlug}`;
                    bestMatchLength = matchLen;
                }
            }
        }
    }
    return bestMatch;
    return bestMatch;
}

// Department-wise detailed placement statistics (Latest fetched from RVCE Portal)
KB.placement_stats = {
    
    'cs_core': {
        name: "B.E. Computer Science And Engineering",
        ongoing: { name: "B.E. CSE (2025-26 Placements Ongoing)", companies: "85", offers: "217", students: "200", avg: "20.32 LPA", max: "67 LPA" },
        full: [
            { name: "B.E. CSE (2024-25*)", companies: "91", offers: "190", students: "171", avg: "16.92 LPA", max: "67 LPA" },
            { name: "B.E. CSE (2023-24)", companies: "81", offers: "177", students: "166", avg: "15.81 LPA", max: "67 LPA" },
            { name: "B.E. CSE (2022-23)", companies: "103", offers: "225", students: "178", avg: "14.66 LPA", max: "48 LPA" },
            { name: "B.E. CSE (2021-22)", companies: "110", offers: "212", students: "179", avg: "14.12 LPA", max: "35.37 LPA" },
            { name: "B.E. CSE (2020-21)", companies: "95", offers: "202", students: "163", avg: "15.01 LPA", max: "32 LPA" }
        ]
    },
    'cs_ds': {
        name: "B.E. Computer Science And Engineering (Data Science)",
        ongoing: { name: "B.E. CSE Data Science (2025-26 Placements Ongoing)", companies: "42", offers: "55", students: "50", avg: "17.6 LPA", max: "40 LPA" }
    },
    'cs_cy': {
        name: "B.E. Computer Science And Engineering (Cyber Security)",
        ongoing: { name: "B.E. CSE Cyber Security (2025-26 Placements Ongoing)", companies: "45", offers: "51", students: "49", avg: "16.48 LPA", max: "35 LPA" }
    },
    'cs_aiml': {
        name: "B.E. Computer Science And Engineering (AIML)",
        ongoing: { name: "B.E. CSE AIML (2025-26 Placements Ongoing)", companies: "45", offers: "55", students: "53", avg: "18.17 LPA", max: "35 LPA" }
    },
    'cs_mtech': {
        name: "M.Tech. Computer Science & Engineering",
        ongoing: { name: "M.Tech. CSE (Placements Ongoing)", companies: "16", offers: "14", students: "14", avg: "19.21 LPA", max: "24 LPA" },
        full: [
            { name: "M.Tech. CSE (2024-25*)", companies: "16", offers: "14", students: "14", avg: "19.21 LPA", max: "24 LPA" },
            { name: "M.Tech. CSE (2023-24)", companies: "17", offers: "11", students: "11", avg: "15.13 LPA", max: "25 LPA" },
            { name: "M.Tech. CSE (2022-23)", companies: "14", offers: "15", students: "15", avg: "13.01 LPA", max: "26 LPA" },
            { name: "M.Tech. CSE (2021-22)", companies: "15", offers: "16", students: "16", avg: "11.05 LPA", max: "29.05 LPA" },
            { name: "M.Tech. CSE (2020-21)", companies: "Data unavailable", offers: "Data unavailable", students: "Data unavailable", avg: "Data unavailable", max: "Data unavailable" }
        ]
    },
    'cs_cne': {
        name: "M.Tech. Computer Network Engineering",
        ongoing: { name: "M.Tech. CNE (Placements Ongoing)", companies: "14", offers: "12", students: "12", avg: "13.02 LPA", max: "24 LPA" },
        full: [
            { name: "M.Tech. CNE (2024-25*)", companies: "14", offers: "12", students: "12", avg: "13.02 LPA", max: "24 LPA" },
            { name: "M.Tech. CNE (2023-24)", companies: "18", offers: "16", students: "16", avg: "5.76 LPA", max: "15 LPA" },
            { name: "M.Tech. CNE (2022-23)", companies: "13", offers: "14", students: "14", avg: "7.98 LPA", max: "16.24 LPA" },
            { name: "M.Tech. CNE (2021-22)", companies: "14", offers: "15", students: "15", avg: "8.57 LPA", max: "20 LPA" },
            { name: "M.Tech. CNE (2020-21)", companies: "Data unavailable", offers: "Data unavailable", students: "Data unavailable", avg: "Data unavailable", max: "Data unavailable" }
        ]
    },
'ae': {
        name: "Aerospace Engineering",
        ongoing: {
            name: "B.E. Aerospace Engineering (2025-26)",
            companies: 18, offers: 30, students: 30,
            avg: "8.12 LPA", max: "11.00 LPA"
        },
        'aiml': {
        name: "AI & Machine Learning",
        ongoing: {
            name: "B.E. AI & Machine Learning (2025-26)",
            companies: 47, offers: 63, students: 54,
            avg: "17.29 LPA", max: "53.00 LPA"
        },
        full: []
    },
        full: [
            { name: "2024-25", companies: 18, offers: 33, students: 28, avg: "7.02 LPA", max: "13.50 LPA" },
            { name: "2023-24", companies: 23, offers: 38, students: 33, avg: "6.83 LPA", max: "10.00 LPA" },
            { name: "2022-23", companies: 27, offers: 40, students: 33, avg: "7.60 LPA", max: "13.00 LPA" },
            { name: "2021-22", companies: 35, offers: 48, students: 44, avg: "7.83 LPA", max: "15.00 LPA" }
        ]
    },
'aiml': {
        name: "AI & Machine Learning",
        ongoing: {
            name: "B.E. AI & Machine Learning (2025-26)",
            companies: 47, offers: 63, students: 54,
            avg: "17.29 LPA", max: "53.00 LPA"
        },
        full: []
    },
'bt': {
        name: "Biotechnology",
        ug: {
            ongoing: {
                name: "B.E. in Biotechnology (2025-26)",
                companies: 5, offers: 8, students: 8,
                avg: "9.28 LPA", max: "14.81 LPA"
            },
            full: [
                { name: "2021-25", companies: 21, offers: 27, students: 27, avg: "4.75 LPA", max: "14.81 LPA" },
                { name: "2020-24", companies: "-", offers: 40, students: 40, avg: "5.49 LPA", max: "12.00 LPA" },
                { name: "2019-23", companies: "-", offers: 30, students: 30, avg: "5.42 LPA", max: "11.60 LPA" },
                { name: "2018-22", companies: "-", offers: 21, students: 21, avg: "5.42 LPA", max: "16.00 LPA" }
            ]
        },
        pg: {
            ongoing: {
                name: "M.Tech. in Biotechnology (2025-26)",
                companies: 6, offers: 14, students: 14,
                avg: "4.30 LPA", max: "5.50 LPA"
            },
            full: [
                { name: "2022-24", companies: "-", offers: 8, students: 8, avg: "3.35 LPA", max: "5.80 LPA" },
                { name: "2021-23", companies: "-", offers: 14, students: 14, avg: "3.80 LPA", max: "6.21 LPA" },
                { name: "2020-22", companies: "-", offers: 11, students: 11, avg: "3.50 LPA", max: "4.20 LPA" },
                { name: "2019-21", companies: "-", offers: 9, students: 9, avg: "3.00 LPA", max: "3.80 LPA" }
            ]
        }
    },
'ch': {
        name: "Chemical Engineering",
        ug: {
            ongoing: {
                name: "B.E. Chemical Engineering (2025-26)",
                companies: 10, offers: 21, students: 18,
                avg: "9.44 LPA", max: "18.33 LPA"
            },
            full: [
                { name: "2024-25", companies: 23, offers: 28, students: 28, avg: "6.69 LPA", max: "14.63 LPA" },
                { name: "2023-24", companies: 20, offers: 25, students: 25, avg: "6.78 LPA", max: "15.70 LPA" },
                { name: "2022-23", companies: 23, offers: 26, students: 21, avg: "7.70 LPA", max: "13.95 LPA" },
                { name: "2021-22", companies: 27, offers: 31, students: 26, avg: "7.14 LPA", max: "12.90 LPA" }
            ]
        }
    },
'cv': {
        name: "Civil Engineering",
        ug: {
            ongoing: {
                name: "B.E. Civil Engineering (2025-26)",
                companies: 14, offers: 38, students: 35,
                avg: "7.03 LPA", max: "18.33 LPA"
            },
            full: [
                { name: "2024-25", companies: 25, offers: 82, students: 77, avg: "5.52 LPA", max: "33.00 LPA" },
                { name: "2023-24", companies: 34, offers: 73, students: 71, avg: "5.11 LPA", max: "10.00 LPA" },
                { name: "2022-23", companies: 34, offers: 54, students: 50, avg: "6.72 LPA", max: "13.95 LPA" },
                { name: "2021-22", companies: 33, offers: 38, students: 38, avg: "6.39 LPA", max: "12.09 LPA" }
            ]
        },
        pg: {
            ongoing: [
                {
                    name: "M.Tech. Structural Engineering (2025-26)",
                    companies: 0, offers: 0, students: 0, avg: "0 LPA", max: "0 LPA"
                },
                {
                    name: "M.Tech. Highway Technology (2025-26)",
                    companies: 0, offers: 0, students: 0, avg: "0 LPA", max: "0 LPA"
                }
            ],
            full: [
                { name: "Structural Engg (2023-24)", companies: 6, offers: 10, students: 10, avg: "3.06 LPA", max: "6.00 LPA" },
                { name: "Structural Engg (2022-23)", companies: 6, offers: 7, students: 7, avg: "4.96 LPA", max: "6.00 LPA" },
                { name: "Structural Engg (2021-22)", companies: 6, offers: 7, students: 7, avg: "4.22 LPA", max: "5.00 LPA" },
                
                { name: "Highway Tech (2023-24)", companies: 8, offers: 13, students: 13, avg: "4.05 LPA", max: "7.00 LPA" },
                { name: "Highway Tech (2022-23)", companies: 9, offers: 12, students: 12, avg: "5.22 LPA", max: "6.00 LPA" },
                { name: "Highway Tech (2021-22)", companies: 7, offers: 11, students: 11, avg: "4.74 LPA", max: "5.03 LPA" }
            ]
        }
    },
'ec': {
        name: "Electronics & Communication Engineering",
        ug: {
            ongoing: {
                name: "B.E. Electronics & Communication Engg (2025-26)",
                companies: 65, offers: 148, students: 136,
                avg: "16.47 LPA", max: "37.00 LPA"
            },
            full: [
                { name: "2024-25", companies: 77, offers: 167, students: 156, avg: "13.40 LPA", max: "44.72 LPA" },
                { name: "2023-24", companies: 83, offers: 159, students: 152, avg: "11.27 LPA", max: "25.85 LPA" },
                { name: "2022-23", companies: 92, offers: 171, students: 161, avg: "12.12 LPA", max: "35.50 LPA" },
                { name: "2021-22", companies: 206, offers: 180, students: 152, avg: "84.00 LPA", max: "84.00 LPA" }
            ]
        },
        pg: {
            ongoing: [
                {
                    name: "M.Tech. VLSI Design & Embedded Systems (2025-26)",
                    companies: 23, offers: 29, students: 29, avg: "19.41 LPA", max: "35.00 LPA"
                },
                {
                    name: "M.Tech. Communication Systems (2025-26)",
                    companies: 9, offers: 6, students: 6, avg: "10.33 LPA", max: "15.00 LPA"
                }
            ],
            full: [
                { name: "VLSI Design & Embedded Systems (2024-25)", companies: 23, offers: 29, students: 29, avg: "19.41 LPA", max: "35.00 LPA" },
                { name: "VLSI Design & Embedded Systems (2023-24)", companies: 21, offers: 27, students: 27, avg: "11.97 LPA", max: "19.00 LPA" },
                { name: "VLSI Design & Embedded Systems (2022-23)", companies: 25, offers: 33, students: 33, avg: "16.18 LPA", max: "26.00 LPA" },
                { name: "VLSI Design & Embedded Systems (2021-22)", companies: 26, offers: 32, students: 32, avg: "12.75 LPA", max: "29.40 LPA" },

                { name: "Communication Systems (2024-25)", companies: 9, offers: 6, students: 6, avg: "10.33 LPA", max: "15.00 LPA" },
                { name: "Communication Systems (2023-24)", companies: 13, offers: 9, students: 9, avg: "7.06 LPA", max: "10.00 LPA" },
                { name: "Communication Systems (2022-23)", companies: 12, offers: 4, students: 4, avg: "8.46 LPA", max: "16.24 LPA" },
                { name: "Communication Systems (2021-22)", companies: 12, offers: 12, students: 12, avg: "8.05 LPA", max: "16.00 LPA" }
            ]
        }
    },
'ei': {
        name: "Electronics and Instrumentation Engineering",
        ug: {
            ongoing: {
                name: "B.E. Electronics and Instrumentation Engineering (2025-26)",
                companies: 27, offers: 53, students: 46,
                avg: "11.77 LPA", max: "37.00 LPA"
            },
            full: [
                { name: "2024-25", companies: 31, offers: 55, students: 51, avg: "9.28 LPA", max: "39.00 LPA" },
                { name: "2023-24", companies: 30, offers: 46, students: 43, avg: "9.29 LPA", max: "18.35 LPA" },
                { name: "2022-23", companies: 41, offers: 56, students: 45, avg: "9.59 LPA", max: "19.19 LPA" },
                { name: "2021-22", companies: 40, offers: 74, students: 54, avg: "11.11 LPA", max: "31.76 LPA" }
            ]
        }
    },
'is': {
        name: "Information Science and Engineering",
        ug: {
            ongoing: {
                name: "B.E. Information Science and Engineering (2025-26)",
                companies: 43, offers: 67, students: 57,
                avg: "19.11 LPA", max: "67.00 LPA"
            },
            full: [
                { name: "2024-25", companies: 55, offers: 71, students: 62, avg: "15.41 LPA", max: "67.00 LPA" },
                { name: "2023-24", companies: 51, offers: 61, students: 55, avg: "16.37 LPA", max: "92.00 LPA" },
                { name: "2022-23", companies: 63, offers: 73, students: 60, avg: "14.12 LPA", max: "62.00 LPA" },
                { name: "2021-22", companies: 67, offers: 74, students: 56, avg: "14.12 LPA", max: "32.50 LPA" }
            ]
        },
        pg: {
            ongoing: [
                {
                    name: "M.Tech. Software Engineering (2025-26)",
                    companies: 13, offers: 10, students: 10, avg: "15.18 LPA", max: "23.00 LPA"
                },
                {
                    name: "M.Tech. Information Technology (2025-26)",
                    companies: 14, offers: 9, students: 9, avg: "14.70 LPA", max: "21.00 LPA"
                }
            ],
            full: [
                { name: "Software Engineering (2024-25)", companies: 13, offers: 10, students: 10, avg: "15.18 LPA", max: "23.00 LPA" },
                { name: "Software Engineering (2023-24)", companies: 13, offers: 8, students: 8, avg: "7.95 LPA", max: "12.00 LPA" },
                { name: "Software Engineering (2022-23)", companies: 14, offers: 11, students: 11, avg: "10.00 LPA", max: "26.25 LPA" },
                { name: "Software Engineering (2021-22)", companies: 14, offers: 13, students: 13, avg: "9.10 LPA", max: "25.00 LPA" },

                { name: "Information Technology (2024-25)", companies: 14, offers: 9, students: 9, avg: "14.70 LPA", max: "21.00 LPA" },
                { name: "Information Technology (2023-24)", companies: 14, offers: 10, students: 10, avg: "5.65 LPA", max: "10.00 LPA" },
                { name: "Information Technology (2022-23)", companies: 14, offers: 7, students: 7, avg: "11.00 LPA", max: "19.00 LPA" },
                { name: "Information Technology (2021-22)", companies: 14, offers: 14, students: 14, avg: "10.95 LPA", max: "28.00 LPA" }
            ]
        }
    },
'ee': {
        name: "Electrical and Electronics Engineering",
        ug: {
            ongoing: {
                name: "B.E. Electrical and Electronics Engineering (2025-26)",
                companies: 31, offers: 40, students: 36,
                avg: "12.45 LPA", max: "30.00 LPA"
            },
            full: [
                { name: "2024-25", companies: 33, offers: 49, students: 43, avg: "10.26 LPA", max: "25.72 LPA" },
                { name: "2023-24", companies: 33, offers: 47, students: 44, avg: "8.83 LPA", max: "22.00 LPA" },
                { name: "2021-22", companies: 43, offers: 56, students: 49, avg: "10.24 LPA", max: "21.16 LPA" },
                { name: "2020-21", companies: 41, offers: 55, students: 50, avg: "10.49 LPA", max: "25.24 LPA" }
            ]
        },
        pg: {
            ongoing: {
                name: "M.Tech. Power Electronics (2025-26)",
                companies: 8, offers: 6, students: 6,
                avg: "6.83 LPA", max: "10.00 LPA"
            },
            full: [
                { name: "2023-24", companies: 14, offers: 11, students: 11, avg: "6.68 LPA", max: "18.00 LPA" },
                { name: "2021-22", companies: 13, offers: 12, students: 12, avg: "6.17 LPA", max: "9.00 LPA" },
                { name: "2020-21", companies: 17, offers: 17, students: 17, avg: "6.55 LPA", max: "16.00 LPA" }
            ]
        }
    },
'mca': {
        name: "Master of Computer Applications",
        pg: {
            ongoing: {
                name: "Master of Computer Applications (2025-26)",
                companies: 3, offers: 21, students: 22,
                avg: "4.00 LPA", max: "11.59 LPA"
            },
            full: [
                { name: "2025-26 (Timeline)", companies: 24, offers: 62, students: 59, avg: "9.00 LPA", max: "20.00 LPA" },
                { name: "2024-25", companies: 35, offers: 80, students: 80, avg: "8.94 LPA", max: "20.00 LPA" },
                { name: "2023-24", companies: 52, offers: 132, students: 95, avg: "8.29 LPA", max: "25.00 LPA" },
                { name: "2021-22", companies: 56, offers: 146, students: 102, avg: "10.00 LPA", max: "28.00 LPA" },
                { name: "2020-21", companies: 85, offers: 274, students: 210, avg: "7.50 LPA", max: "20.00 LPA" }
            ]
        }
    },
'me': {
        name: "Mechanical Engineering",
        ug: {
            ongoing: {
                name: "B.E. Mechanical Engineering (2025-26)",
                companies: 39, offers: 86, students: 80,
                avg: "9.22 LPA", max: "18.33 LPA"
            },
            full: [
                { name: "2024-25", companies: 44, offers: 88, students: 82, avg: "8.21 LPA", max: "18.33 LPA" },
                { name: "2023-24", companies: 46, offers: 78, students: 70, avg: "9.07 LPA", max: "18.00 LPA" },
                { name: "2022-23", companies: 60, offers: 113, students: 85, avg: "8.35 LPA", max: "16.00 LPA" },
                { name: "2021-22", companies: 45, offers: 112, students: 69, avg: "9.05 LPA", max: "18.00 LPA" }
            ]
        },
        pg: {
            ongoing: [
                {
                    name: "M.Tech. Product Design And Manufacturing (2025-26)",
                    companies: 6, offers: 8, students: 8, avg: "7.09 LPA", max: "14.00 LPA"
                },
                {
                    name: "M.Tech. Machine Design (2025-26)",
                    companies: 8, offers: 7, students: 7, avg: "6.02 LPA", max: "8.00 LPA"
                }
            ],
            full: [
                { name: "Product Design & Manufacturing (2024-25)", companies: 6, offers: 8, students: 8, avg: "7.09 LPA", max: "14.00 LPA" },
                { name: "Product Design & Manufacturing (2022-23)", companies: 12, offers: 23, students: 23, avg: "6.82 LPA", max: "10.00 LPA" },
                { name: "Product Design & Manufacturing (2021-22)", companies: 14, offers: 20, students: 20, avg: "6.45 LPA", max: "12.00 LPA" },

                { name: "Machine Design (2024-25)", companies: 8, offers: 7, students: 7, avg: "6.02 LPA", max: "8.00 LPA" },
                { name: "Machine Design (2022-23)", companies: 10, offers: 17, students: 17, avg: "6.44 LPA", max: "20.00 LPA" },
                { name: "Machine Design (2021-22)", companies: 12, offers: 15, students: 15, avg: "5.83 LPA", max: "12.00 LPA" }
            ]
        }
    },
'im': {
        name: "Industrial Engineering and Management",
        ug: {
            ongoing: {
                name: "B.E. Industrial Engineering and Management (2025-26)",
                companies: 12, offers: 30, students: 27,
                avg: "12.46 LPA", max: "21.45 LPA"
            },
            full: [
                { name: "2024-25", companies: 30, offers: 51, students: 46, avg: "7.68 LPA", max: "21.45 LPA" },
                { name: "2023-24", companies: 30, offers: 53, students: 51, avg: "8.39 LPA", max: "20.00 LPA" },
                { name: "2022-23", companies: 35, offers: 49, students: 49, avg: "9.06 LPA", max: "18.99 LPA" },
                { name: "2021-22", companies: 38, offers: 66, students: 42, avg: "9.03 LPA", max: "14.95 LPA" }
            ]
        }
    },
'et': {
        name: "Electronics And Telecommunication Engineering",
        ug: {
            ongoing: {
                name: "B.E. Electronics And Telecommunication Engineering (2025-26)",
                companies: 300, offers: 61, students: 47,
                avg: "11.128 LPA", max: "50.00 LPA"
            },
            full: [
                { name: "2024-25", companies: 41, offers: 53, students: 49, avg: "9.67 LPA", max: "39.00 LPA" },
                { name: "2023-24", companies: "N/A", offers: 45, students: 60, avg: "75% Placed", max: "12 Higher Studies" },
                { name: "2022-23", companies: "N/A", offers: 39, students: 64, avg: "61% Placed", max: "0 Higher Studies" },
                { name: "2021-22", companies: "N/A", offers: 48, students: 60, avg: "80% Placed", max: "0 Higher Studies" },
                { name: "2020-21", companies: "N/A", offers: 47, students: 54, avg: "87% Placed", max: "1 Higher Studies" }
            ]
        },
        pg: {
            ongoing: {
                name: "M.Tech. Digital Communication Engineering (2025-26)",
                companies: 1, offers: 1, students: 1,
                avg: "15.00 LPA", max: "15.00 LPA"
            },
            full: [
                { name: "2024-25*", companies: 1, offers: 1, students: 1, avg: "15.00 LPA", max: "15.00 LPA" },
                { name: "2023-24", companies: 12, offers: 8, students: 8, avg: "7.50 LPA", max: "10.00 LPA" },
                { name: "2021-22", companies: 12, offers: 11, students: 11, avg: "7.09 LPA", max: "18.60 LPA" },
                { name: "2020-21", companies: 16, offers: 22, students: 22, avg: "8.22 LPA", max: "21.50 LPA" }
            ]
        }
    }
};

// Human-readable labels for suggestion buttons

/* RVCE Chatbot v3 — Smart Engine with Content Moderation */
function startRVCEChatbot() {
'use strict';

let tone = 'pro';
let chatOpen = false;

/* =============== CONTENT MODERATION =============== */
const BLOCKED = {
    abusive: [
        'fuck','shit','ass','bitch','bastard','damn','dick','pussy','slut','whore',
        'stupid','idiot','dumb','moron','retard','crap','screw you','shut up','suck',
        'hate you','loser','trash','worthless','ugly','go to hell','kill','murder',
        'rape','abuse','harass','molest','stalk','threat','bomb','attack','terror',
        'drug','weed','cocaine','heroin','alcohol','drunk','smoke','gambling','porn',
        'sex','nude','naked','obscene','vulgar','profanity','racist','sexist','bigot',
        'ass hole','wtf','stfu','lmao','lmfao','bloody','madarchod','behenchod',
        'chutiya','bc','mc','gaand','saala','kamina','haramkhor','bewakoof','gadha','hack'
    ],
    conspiracy: [
        'illuminati','flat earth','reptilian','chemtrail','5g cause','qanon','deep state',
        'new world order','fake moon','area 51','aliens control','government mind control',
        'covid fake','vaccine microchip','bill gates chip','controlled demolition',
        'pizza gate','fake news media','rigged election','brainwash','propaganda',
        'freemason','secret society','population control','depopulation','mk ultra','political affiliation'
    ],
    private: [
        'student phone number','personal number','private email','home address',
        'student address','teacher address','salary of','faculty salary',
        'personal data','student marks','result of','cgpa of','gpa of',
        'marks of','percentage of','private detail','confidential','password',
        'bank detail','account number','aadhaar','pan card','dob of','date of birth of',
        'caste of','religion of','family of','father of','mother of','girlfriend',
        'boyfriend','relationship','married','wife of','husband of','someone\'s phone',
        'whatsapp number','instagram id','social media of','facebook of'
    ]
};

const SESSION = {
    lastIntent: null,
    history: [],
    navStack: [], // For back-navigation in nested flows
    pendingOverflows: [] // For retaining unanswered multiple questions
};

const PREFIXES = [
    "Sure thing!", "I can help with that!", "Got it!", "Great question.",
    "Here's what I found:", "Looking into that...", "Certainly!", "Happy to help."
];

function getPrefix() {
    return PREFIXES[Math.floor(Math.random() * PREFIXES.length)] + " ";
}

function checkModeration(input) {
    const lower = input.toLowerCase();
    
    // Helper to check for blocked pattern with word boundaries
    const isBlocked = (list) => {
        for (const word of list) {
            // Escape special chars and use word boundary (?:^|\s) and (?=\s|$) for broad match
            // or use \b if we want strict letter boundaries. 
            // Given "c.s.e" type sanitization, \b is generally safe for letters/numbers.
            const escaped = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const regex = new RegExp('(?:^|\\s)' + escaped + '(?=\\s|$|[?!.])', 'i');
            if (regex.test(lower)) return true;
        }
        return false;
    };

    if (isBlocked(BLOCKED.abusive)) return { blocked: true, type: 'abusive' };
    if (isBlocked(BLOCKED.conspiracy)) return { blocked: true, type: 'conspiracy' };
    if (isBlocked(BLOCKED.private)) return { blocked: true, type: 'private' };
    
    return { blocked: false };
}

function getModerationResponse(type) {
    const responses = {
        abusive: {
            funny: "Whoa there! 🚫 Let's keep it friendly, shall we? I'm here to help with RVCE stuff, not to trade insults! 😅",
            pro: "⚠️ I'm unable to respond to inappropriate or offensive language. Please keep our conversation respectful. I'm here to help you with genuine RVCE queries."
        },
        conspiracy: {
            funny: "Nice try! 🛸 But I only deal in verified RVCE facts, not conspiracy theories! Let's stick to something I can actually help with 😄",
            pro: "⚠️ I'm designed to provide factual information about RVCE only. I cannot engage with conspiracy theories or unverified claims. Please ask me about admissions, placements, or campus facilities."
        },
        private: {
            funny: "Sorry, that's classified! 🔒 I can't share anyone's private information. I'm a college chatbot, not a spy! 🕵️",
            pro: "⚠️ I cannot share personal or confidential information about students, faculty, or staff. This includes contact details, marks, or personal data. I can help with general college information instead."
        }
    };
    return responses[type][tone === 'funny' ? 'funny' : 'pro'];
}

/* =============== KNOWLEDGE BASE =============== */
const KB = {
    general: {
        name: "RV College of Engineering (RVCE)", est: "1963",
        campus: "16.85 acres on Mysuru Road, Bengaluru – 560 059",
        trust: "Rashtreeya Sikshana Samithi Trust (RSST)",
        status: "Autonomous (UG), Affiliated to VTU",
        accreditation: "NAAC A+ Grade (CGPA 3.39/4.0, valid 2024–2029), NBA Accredited (multiple UG & PG programs)",
        ranking: "NIRF 101-150 band (Engineering, 2025), #1 Private Engineering College in IIRF 2025",
        principal: "Dr. K.N. Subramanya",
        vicePrincipal: "Dr. K. S. Geetha",
        timings: "Mon-Fri: 9:00 AM – 4:45 PM, Sat: 9:00 AM – 1:00 PM",
        vision: "Leadership in quality technical education, interdisciplinary research & innovation, with focus on sustainable and inclusive technology.",
        intake: "2000+ students annually across UG and PG",
        research: "100+ Patents, ₹30+ Crores in grants, 20 Centres of Excellence, 15 VTU-recognized Research Centres",
        researchDomains: "AI, Quantum Tech, 5G, Electric Vehicles, Hydrogen Technology, IC Design",
        coes: [
            "Macroelectronics (CME)", "Macroelectronics (CME) - Thin Film Lab",
            "Internet of Things (IoT)", "Smart Antenna Systems (CSAS)",
            "Visual Computing", "Excellence in Materials & Manufacturing",
            "Robotics & Cognitive Systems", "Automotive Mechatronics (Mercedes Benz)",
            "Computational Genomics", "Quantum Computing (Q-RVCE)",
            "Cloud Computing & Big Data (HP)", "Advanced Manufacturing",
            "Smart Grid Technology", "Embedded Systems",
            "Data Science & AI", "IC Design & VLSI",
            "Electric Vehicle Technology", "Hydrogen & Fuel Cell Technology",
            "5G & Communication Systems", "Cyber Security",
            "Materials Fabrication and Characterization (CoE-MFC)",
            "Cognitive Intelligent Systems (CISSS)",
            "Logistics & Supply Chain Management",
            "AI Research (RVCE-BOSTON)",
            "Women in Cloud Centre of Excellence",
            "Sensor Technology Applications (CSTA)",
            "Nanomaterials and Devices (CND)",
            "Integrated Circuits and Systems (CoE-ICAS)",
            "Automotive Engineering (RV-Toyota)",
            "3S Infrastructure (Safe, Sustainable & Smart)",
            "Extended Reality Center (XR)",
            "Health Care Technology Research (CHTR)",
            "Wipro-IISc-RVCE EV Technology"
        ],
        cocs: [
            "Bosch Rexroth - Automation Tech", "Toyota - Automotive Tech",
            "Cisco - Networking", "HP - Cloud Computing",
            "5G and Emerging Wireless Technologies",
            "Electric Vehicle Tech (RVCE-MG)",
            "Smart Vidyuth & Sustainable Solutions",
            "Vision Astra in EV Academy",
            "Decibels RV Electric Vehicle"
        ],
        coes_detailed: [
            { n: "Materials Fabrication & Characterization (CoE-MFC)", i: "Advanced testing, characterization, and fabrication facilities (ECE)." },
            { n: "Cognitive Intelligent Systems (CISSS)", i: "In partnership with HPCC Systems, focuses on sustainable AI solutions (CSE)." },
            { n: "Internet of Things (Cisco-RVCE)", i: "Cisco-funded lab for advanced networking and IoT research (MCA)." },
            { n: "Computational Genomics", i: "Cutting-edge research at the intersection of BioTech and Computing." },
            { n: "Smart Antenna Systems (SASM)", i: "Features an Anechoic Chamber and EMI/EMC testing facilities (ECE)." },
            { n: "Quantum Information & Tech (CIRCUIT)", i: "Research in quantum computing and information theory (Physics)." },
            { n: "Hydrogen & Green Tech", i: "Collaborates with Dover India on clean energy and hydrogen materials (Chemical)." },
            { n: "Automotive Engineering (RV-Toyota)", i: "Focuses on engine technology and automotive systems (Mechanical)." },
            { n: "Extended Reality (XR) Center", i: "Specializes in VR/AR for education and industrial research (MCA)." },
            { n: "Integrated Circuits & Systems (CoE-ICAS)", i: "Advanced VLSI design and chip system research (ECE)." }
        ],
        /* === Comprehensive COE Database for specific COE search === */
        coes_db: [
            {
                id: 'coe_mfc',
                n: "Materials Fabrication & Characterization (CoE-MFC)",
                emoji: '🔬',
                dept: 'ECE',
                year: '2020-21',
                info: "Established in 2020-21, this CoE provides state-of-the-art advanced testing, characterization, and fabrication facilities. It focuses on semiconductor material analysis, thin-film deposition, nano-fabrication, and surface characterization to support cutting-edge electronics research.",
                url: 'https://rvce.edu.in/department/ece/the_centre_of_excellence_in_materials_fabrication_characterisation/',
                aliases: ['mfc','coe mfc','materials fabrication','materials characterization','materials fabrication characterization','coe-mfc','coemfc','fabrication lab','characterization lab']
            },
            {
                id: 'coe_cisss',
                n: "Cognitive Intelligent Systems for Sustainable Solutions (CISSS)",
                emoji: '🧠',
                dept: 'CSE',
                partner: 'HPCC Systems',
                info: "Established in partnership with HPCC Systems (LexisNexis), this CoE focuses on sustainable AI solutions using big data, machine learning, and cognitive computing. It supports research in intelligent data analytics, high-performance computing, and eco-friendly AI frameworks.",
                url: 'https://rvce.edu.in/department/cse/centre_of_excellence_in_rvce_hpcc_systems_cognitive_intelligent_systems_for_sustainable_solutionscisss/',
                aliases: ['cisss','hpcc','cognitive systems','cognitive intelligent','cisss coe','hpcc systems','lexisnexis','sustainable ai','coe cisss']
            },
            {
                id: 'coe_iot',
                n: "Internet of Things CoE (Cisco-RVCE)",
                emoji: '📡',
                dept: 'MCA',
                partner: 'Cisco',
                info: "Funded by Cisco, this IoT Centre of Excellence provides industry-standard networking equipment and IoT infrastructure. It supports research in smart systems, edge computing, and network automation, along with Cisco Networking Academy certification programs.",
                url: 'https://rvce.edu.in/department/mca/research/',
                aliases: ['iot coe','cisco iot','cisco rvce','internet of things coe','iot centre','networking coe','cisco coe','iot lab']
            },
            {
                id: 'coe_genomics',
                n: "Centre of Excellence in Computational Genomics",
                emoji: '🧬',
                dept: 'Biotechnology',
                info: "This CoE bridges Biotechnology and Computing, focusing on genomic data analysis, bioinformatics algorithms, proteomics, and computational biology. It enables multi-disciplinary research at the intersection of life sciences and engineering.",
                url: 'https://rvce.edu.in/department/biotechnology/centre-of-excellence-in-computational-genomics/',
                aliases: ['genomics','computational genomics','bioinformatics','genomics coe','biotech coe','coe genomics','proteomics','bio computing']
            },
            {
                id: 'coe_sasm',
                n: "Smart Antenna Systems (SASM)",
                emoji: '📡',
                dept: 'ECE',
                info: "This CoE features a cutting-edge Anechoic Chamber and EMI/EMC testing facilities. It focuses on antenna design, RF systems, electromagnetic compatibility testing, and smart/MIMO antenna research for 5G and beyond communications.",
                url: 'https://rvce.edu.in/department/ece/research/',
                aliases: ['sasm','smart antenna','antenna coe','anechoic','emi emc','rf systems','antenna systems','smart antenna systems','mimo antenna']
            },
            {
                id: 'coe_quantum',
                n: "Quantum Information & Technology (CIRCUIT)",
                emoji: '⚛️',
                dept: 'Physics',
                info: "The CIRCUIT (Centre for Information, Research, Computation, and Unification in Technology) CoE focuses on quantum computing algorithms, quantum information theory, quantum cryptography, and quantum hardware research. It is one of the few quantum-focused centres in Indian engineering colleges.",
                url: 'https://rvce.edu.in/department/physics/research/#',
                aliases: ['quantum','circuit coe','quantum computing','quantum information','quantum coe','quantum tech','quantum research','q-rvce','qrvce']
            },
            {
                id: 'coe_hydrogen',
                n: "Hydrogen & Green Technology CoE",
                emoji: '💧',
                dept: 'Chemical Engineering',
                partner: 'Dover India',
                info: "In collaboration with Dover India, this CoE researches clean hydrogen production, hydrogen fuel cells, green energy storage materials, and sustainable chemical processes. It supports India's hydrogen mission by developing expertise in next-gen clean energy technologies.",
                url: 'https://rvce.edu.in/department/chemical_engineering/ce_coe/',
                aliases: ['hydrogen','green tech','hydrogen coe','fuel cell','hydrogen fuel','clean energy coe','dover india','hydrogen technology','green energy coe','hydrogen green tech']
            },
            {
                id: 'coe_toyota',
                n: "Automotive Engineering CoE (RV-Toyota Kirloskar)",
                emoji: '🚗',
                dept: 'Mechanical Engineering',
                partner: 'Toyota Kirloskar',
                info: "Established with Toyota Kirloskar Motor, this CoE provides hands-on training in automotive engineering, engine technology, vehicle dynamics, and powertrain systems. Students gain industry-level exposure through Toyota's proprietary training modules and equipment.",
                url: 'https://rvce.edu.in/department/me/rv_toyota_kriloskar_centre_of_excellence_in_automotive_engineering/',
                aliases: ['toyota coe','rv toyota','automotive coe','toyota kirloskar','automotive engineering coe','engine technology coe','vehicle engineering coe']
            },
            {
                id: 'coe_xr',
                n: "Extended Reality Centre (XR Center)",
                emoji: '🥽',
                dept: 'MCA',
                info: "The XR Centre specializes in Virtual Reality (VR), Augmented Reality (AR), and Mixed Reality (MR) technologies. It supports research and development in immersive learning environments, industrial simulation, and next-generation human-computer interaction for both educational and industrial applications.",
                url: 'https://rvce.edu.in/department/mca/research/',
                aliases: ['xr center','xr centre','extended reality','virtual reality','augmented reality','mixed reality','vr ar coe','xr coe','vr coe','ar coe','immersive tech']
            },
            {
                id: 'coe_icas',
                n: "Integrated Circuits & Systems (CoE-ICAS)",
                emoji: '📟',
                dept: 'ECE',
                info: "The CoE-ICAS focuses on advanced VLSI chip design, system-on-chip (SoC) architectures, analog/mixed-signal circuit design, and embedded systems research. It bridges the gap between academic circuit design and industry-ready VLSI engineering.",
                url: 'https://rvce.edu.in/department/ece/centre_of_excellence_in_integrated_circuits_and_systemscoe_icas/',
                aliases: ['icas','coe icas','integrated circuits','vlsi coe','ic design coe','chip design','soc design','vlsi systems','coe-icas','icas coe']
            },
            {
                id: 'coe_3s',
                n: "3S Infrastructure CoE (Safe, Sustainable & Smart)",
                emoji: '🏗️',
                dept: 'Civil Engineering',
                info: "This CoE focuses on next-generation infrastructure research under three pillars: Safety (structural integrity and disaster resilience), Sustainability (eco-friendly construction materials and green buildings), and Smart (IoT-integrated smart infrastructure and transportation systems).",
                url: 'https://rvce.edu.in/department/civil_engineering/centre_of_excellence_in_3s_infrastructure_safe_sustainable_smart/',
                aliases: ['3s coe','3s infrastructure','safe sustainable smart','civil coe','smart infrastructure','sustainable infrastructure','structural coe','green building coe']
            },
            {
                id: 'coe_logistics',
                n: "Logistics & Supply Chain Management CoE",
                emoji: '🚚',
                dept: 'Industrial Engineering & Management',
                info: "This CoE researches optimization of supply chain operations, logistics network design, inventory management, Industry 4.0 integration, and data-driven decision-making in operations management. It has strong ties with logistics industry partners.",
                url: 'https://rvce.edu.in/department/iem/centre-of-excellence-in-logistics-supply-chain-management/',
                aliases: ['logistics coe','supply chain coe','iem coe','scm coe','logistics supply chain','supply chain management coe','operations coe','industrial engineering coe']
            },
            {
                id: 'coe_cav',
                n: "Connected & Autonomous Vehicles CoE",
                emoji: '🤖',
                dept: 'ECE',
                info: "Focuses on the research and development of connected vehicle systems, autonomous driving algorithms, V2X (vehicle-to-everything) communication, LiDAR-based sensing, and self-driving car technologies. A key research hub for the future of mobility.",
                url: 'https://rvce.edu.in/department/ece/centre_of_excellence_in_connected_autonomous_vehicles/',
                aliases: ['cav','autonomous vehicles','connected vehicles','self driving','lidar coe','autonomous car','v2x','vehicle coe','autonomous driving coe','coe cav']
            },
            {
                id: 'coe_ev',
                n: "Electric Vehicle Technology CoE (RVCE-MG Motor)",
                emoji: '⚡',
                dept: 'Mechanical Engineering',
                partner: 'MG Motor India',
                info: "In partnership with MG Motor India, this CoE focuses on electric vehicle powertrain design, battery management systems, EV motor control, charging infrastructure, and EV ecosystem research. Students work with industry-grade EV components and simulation tools.",
                url: 'https://rvce.edu.in/department/me/rvce_morris_garage_centre_of_excellence_in_electric_vehicle_technology_evt/',
                aliases: ['ev coe','electric vehicle coe','mg motor coe','ev technology','rvce mg','electric car coe','battery coe','ev powertrain','ev motor coe']
            },
            {
                id: 'coe_bosch',
                n: "RV-Bosch Rexroth Centre for Automation Technologies",
                emoji: '⚙️',
                dept: 'Mechanical Engineering',
                partner: 'Bosch Rexroth',
                info: "Established with Bosch Rexroth, this centre focuses on hydraulic automation, pneumatics, programmable logic controllers (PLC), industrial automation, and Industry 4.0 technologies. Students gain hands-on training with Bosch's industrial automation equipment.",
                url: 'https://rvce.edu.in/department/me/rv-bosch-rexroth-centre-for-automation-technologies/',
                aliases: ['bosch coe','bosch rexroth','automation coe','plc coe','hydraulics coe','industrial automation coe','rv bosch','bosch automation']
            },
            {
                id: 'coe_benz',
                n: "RV-Mercedes Benz Centre for Automotive Mechatronics (ADAM)",
                emoji: '🏎️',
                dept: 'Mechanical Engineering',
                partner: 'Mercedes-Benz',
                info: "The Mercedes-Benz Advanced Diploma in Automotive Mechatronics (ADAM) programme is a premium industry-academia collaboration offering specialization in mechatronic systems, automotive electronics, and luxury vehicle technology. Graduates receive a joint certification from RVCE and Mercedes-Benz.",
                url: 'https://rvce.edu.in/department/me/rv-mercedes-benz-centre-for-automotive-mechatronics/',
                aliases: ['benz','mercedes benz','mercedes-benz','benz coe','mercedes coe','adam','adam coe','mercedes benz coe','mechatronics coe','automotive mechatronics','rv mercedes','adam programme','mercedes benz centre']
            },
            {
                id: 'coe_wic',
                n: "Women in Cloud Centre of Excellence",
                emoji: '☁️',
                dept: 'Information Science & Engineering',
                partner: 'Women in Cloud',
                info: "Established in partnership with Women in Cloud, this CoE promotes gender diversity in technology and cloud computing. It provides training in cloud platforms, AI, and digital skills with a special focus on empowering women in STEM fields through certification programs and industry mentorship.",
                url: 'https://rvce.edu.in/department/ise/ise_coe/',
                aliases: ['women in cloud','wic coe','cloud coe','ise coe','women cloud coe','gender diversity tech','cloud computing coe']
            },
            {
                id: 'coe_sensor',
                n: "Sensor Technology Applications CoE (CSTA)",
                emoji: '📡',
                dept: 'Electronics & Instrumentation (EIE)',
                info: "CSTA focuses on the design and application of advanced sensor systems for industrial, biomedical, and environmental monitoring. Research areas include MEMS sensors, wireless sensor networks, IoT-integrated sensing, and precision instrumentation.",
                url: 'https://rvce.edu.in/department/eim/eie_centre_of_excellence_in_sensor_technology_applications/',
                aliases: ['sensor coe','csta','sensor technology','eie coe','sensor applications','mems coe','sensor research','instrumentation coe']
            },
            {
                id: 'coe_health',
                n: "Health Care Technology Research CoE (CHTR)",
                emoji: '🏥',
                dept: 'Electronics & Instrumentation (EIE)',
                info: "CHTR focuses on biomedical engineering, health monitoring devices, telemedicine systems, wearable health tech, and AI-driven diagnostic tools. It bridges electronics engineering and healthcare to develop impactful medical technology innovations.",
                url: 'https://rvce.edu.in/department/eim/eie_centre_of_excellence_in_health_care_technology_research/',
                aliases: ['health coe','chtr','healthcare tech coe','biomedical coe','health care technology','medical tech coe','health research coe','wearable tech coe']
            },
            {
                id: 'coe_5g',
                n: "5G & Emerging Wireless Technologies CoE",
                emoji: '📶',
                dept: 'Electronics & Telecom (ETE)',
                info: "This CoE focuses on 5G NR standards, millimeter-wave communications, network slicing, massive MIMO, edge computing for 5G, and next-generation wireless protocols. It prepares students for the telecom industry's transition to 5G and beyond (B5G/6G research).",
                url: 'https://rvce.edu.in/wp-content/uploads/2025/11/5G-AND-EMERGING-WIRELESS-TECHNOLOGIES.pdf',
                aliases: ['5g coe','5g wireless','telecom coe','etc coe','wireless coe','mmwave coe','5g nr','beyond 5g','6g coe','5g emerging']
            },
            {
                id: 'coe_mobility',
                n: "e-Mobility & Smart Grid Technology CoE (EEE)",
                emoji: '🔋',
                dept: 'Electrical & Electronics (EEE)',
                info: "This CoE focuses on electric mobility systems, smart grid technology, power electronics for EV applications, renewable energy integration, and energy storage systems. It supports research in next-generation electrical infrastructure for sustainable transportation and power systems.",
                url: 'https://rvce.edu.in/department/eee/eee_coe/',
                aliases: ['mobility coe','smart grid','eee coe','emobility','e-mobility coe','smart grid coe','power electronics coe','energy storage coe','electrical coe']
            },
            {
                id: 'coe_boston',
                n: "RVCE-Boston AI Research CoE",
                emoji: '🧠',
                dept: 'CSE / Multi-Department',
                partner: 'Boston Ltd., UK (Graphcore)',
                info: "One of the most powerful AI research centres in Indian academia, built with Boston Ltd., UK. Features a Graphcore POD4 server delivering 1-PetaFLOP of AI computing power. Research focus areas include Computer Vision, FinTech AI, AgriTech, BioTech, and MLOps. Offers a 6-month professional certification in Data Science & MLOps.",
                url: 'https://rvce.edu.in/department/wp-content/uploads/2026/03/RVCE-Boston-AI-CoE2.pdf',
                aliases: ['boston ai','rvce boston','boston coe','graphcore','petaflop','ai research coe','boston uk','mlops coe','computer vision coe','boston ai coe']
            }
        ],
        industryPartners: ["Google", "Microsoft", "Toyota", "Mercedes Benz", "Cisco", "IBM", "Intel", "Honeywell", "Bosch", "Amazon", "Adobe", "Samsung", "Tata Technologies", "Boeing", "Wipro", "MG Motor"],
        collaborations: [
            { n: "Tata Technologies", i: "CIIIT (Center for Invention, Innovation, Incubation & Training) focuses on Industry 4.0 and Smart Manufacturing (₹60 Cr project)." },
            { n: "Cisco", i: "Cisco Networking Academy and IoT CoE for advanced digital training." },
            { n: "MG Motor India", i: "EV Tech CoC for electric vehicle skill development." },
            { n: "Bosch Rexroth", i: "Automation Technology and Hydraulics training centre." },
            { n: "IBM", i: "IBM Centre of Excellence for software and cloud training." },
            { n: "Mercedes-Benz", i: "Advanced Diploma in Automotive Mechatronics (ADAM)." },
            { n: "Toyota", i: "Automotive Engineering and engine technology training centre." },
            { n: "Samsung", i: "PRISM program for industry-academic collaboration on research projects." }
        ],
        foodCourt: {
            name: "Cafe Mingos (Main Food Court)",
            capacity: "1000+ students",
            timings: "9:00 AM – 4:30 PM",
            cuisines: "North Indian, South Indian, Chinese, Fast Food (Burgers, Sandwiches, Chats)",
            features: "Two floors, 500 sq.m area, steam-cooked hygienic food, self-service model",
            outlets: ["Main Food Court (Cafe Mingos)", "Mini Canteen", "Extension Food Court Counter"],
            others: "The food court is a hub for social interaction and quick meals; Hostel messes are strictly vegetarian."
        }
    },
    contact: {
        address: "RV College of Engineering, RV Vidyanikethan Post, Mysuru Road, Bengaluru – 560 059",
        maps: "https://maps.google.com/?q=RV+College+of+Engineering+Bengaluru",
        phone: "+91-080-68188112 / 8111", admissionPhone: "080-68188147/48/49",
        email: "mailto:principal@rvce.edu.in", vicePrincipalEmail: "mailto:viceprincipal@rvce.edu.in", placementPhone: "9886130504",
        website: "https://rvce.edu.in/",
        social: {
            facebook: "https://www.facebook.com/RVCEngineering/",
            instagram: "https://www.instagram.com/rvcollegeofengineering/",
            linkedin: "https://www.linkedin.com/school/rvcengineering/",
            x: "https://x.com/rvce_official"
        }
    },
    rvei: {
        history: "Founded in 1940 by Sri M. C. Shivananda Sarma and Sri Meda Kasturi Ranga Setty.",
        institutions: "Manages over 25 institutions including RV College of Engineering, RV University, NMKRV College, DAPM RV Dental College, and RV Institute of Management.",
        motto: "Excellence in Education with Societal Commitment."
    },
    placements: {
        companies: "192+ companies participated (2026 Drive - Ongoing)", avgSalary: "₹16.86 LPA (2026 Avg)",
        maxSalary: "₹67 LPA Highest Package (2026 Batch)", recruiters: "Microsoft, Google, Amazon, Atlassian, Cisco, Dell, Intel, Adobe, Flipkart, Samsung, PayPal, IBM, Deloitte, JP Morgan, Goldman Sachs, Bosch, Mercedes-Benz",
        scholarships: "₹72+ Lakhs awarded annually from ABB, Boeing, CTS",
        infra: "800+ systems, seminar halls, 6 interview rooms, 2 GD rooms",
        offers: "698+ offers made so far",
        url: "https://rvce.edu.in/placement_and_training/",
        prev2025: { maxSalary: "₹67 LPA", companies: "262", offers: "922 offers" }
    },
    admissions: {
        ug: { eligibility: "12th/2nd PUC with min 45% in Physics + Maths + Chemistry/Biotech/Biology/CS/Electronics (40% for SC/ST/OBC Karnataka)", exams: "KCET (KEA), COMED-K, Management Quota. JEE Mains is NOT considered.", quotas: "Also available: CIWG/PIO/OCI/Nepal Citizens quota" },
        pg: { eligibility: "B.E./B.Tech with min 50% marks (45% for SC/ST/OBC Karnataka)", exams: "Valid GATE or PGCET score" },
        mca: { eligibility: "Bachelor's degree with min 50% marks (45% for SC/ST/OBC Karnataka)" },
        phd: { info: "Doctoral programs in all departments via entrance test + interview. 15 VTU-recognized Research Centres." },
        fees: "Management Quota B.E. fees range from ~₹16 Lakhs to ~₹70 Lakhs total over 4 years (e.g., CSE highest at ~₹70L, Core branches ~₹16L-₹24L). M.Tech/MCA ranges from ₹2L to ₹16L.",
        cutoffs: "Official KCET cutoffs are released by KEA (e.g., ISE cutoff was ~832 in 2023).",
        url: "https://rvce.edu.in/admissions/"
    },
    departments: {
        ug: [
            {
                n:"Aerospace Engineering (AE)",
                c:"ae", 
                u:"https://rvce.edu.in/department/ae/department-of-aerospace-engineering/",
                intake: "60",
                accreditation: "NBA Accredited", 
                hod:"Dr. R Supreeth",
                hod_url: "https://rvce.edu.in/department/ae/dr_r_supreeth/",
                info: "Welcome to the Department of Aerospace Engineering. Established in 2015, the Department has evolved into one of the country’s most prestigious destinations for undergraduate Aerospace Programmes.",
                about: "https://rvce.edu.in/department/ae/about_dept/",
                syllabus: "https://rvce.edu.in/academics_and_examinations/rvce_scheme_syllabus/#ug",
                faculty: "https://rvce.edu.in/department/ae/faculty/",
                research: "https://rvce.edu.in/department/ae/research/",
                placement: "https://rvce.edu.in/department/ae/placement/",
                labs: "https://rvce.edu.in/department/ae/laboratories/",
                facilities: "https://rvce.edu.in/department/ae/facilities/",
                campus_diaries: "https://rvce.edu.in/department/ae/campus_diaries/",
                hod_message: "https://rvce.edu.in/department/ae/dr_r_supreeth_hod_message/"
            },
            {
                n:"AI & Machine Learning (AIML)",
                c:"aiml", 
                u:"https://rvce.edu.in/department/ai_ml/main_department/",
                intake: "180",
                accreditation: "Not specified/New", 
                hod:"Dr. B. Sathish Babu",
                info: "Established in 2021, the programme builds a strong foundation in computer science engineering with focused training in Artificial Intelligence, Machine Learning, Deep Learning, and Data Science.",
                about: "https://rvce.edu.in/department/ai_ml/about_the_department/",
                syllabus: "https://rvce.edu.in/academics_and_examinations/rvce_scheme_syllabus/#ug",
                faculty: "https://rvce.edu.in/department/ai_ml/faculty/",
                placement: "https://rvce.edu.in/department/ai_ml/placement/",
                labs: "https://rvce.edu.in/department/ai_ml/laboratories/",
                facilities: "https://rvce.edu.in/department/ai_ml/facilities/",
                research: "https://rvce.edu.in/department/ai_ml/research/",
                campus_diaries: "https://rvce.edu.in/department/ai_ml/campus_diaries/",
                hod_message: "https://rvce.edu.in/department/ai_ml/dr_b_sathish_babu_hod_message/",
                academic_planning: "https://rvce.edu.in/department/ai_ml/academic_planning/",
                collab: "https://rvce.edu.in/department/ai_ml/collaboration-and-networking/"
            },
            {
                n:"Biotechnology (BT)",
                c:"bt", 
                u:"https://rvce.edu.in/department/biotechnology/department_of_biotechnology/",
                intake: "60",
                accreditation: "NBA Accredited", 
                hod:"Dr. Nagashree N Rao",
                info: "At the crossroads of science and innovation, the Department of Biotechnology (est. 2002) blends theoretical knowledge with practical experience, offering B.E., M.Tech., and Ph.D. programmes with advanced research facilities.",
                about: "https://rvce.edu.in/department/biotechnology/about_the_department/",
                syllabus: "https://rvce.edu.in/academics_and_examinations/rvce_scheme_syllabus/#ug",
                faculty: "https://rvce.edu.in/department/biotechnology/faculty/",
                placement: "https://rvce.edu.in/department/biotechnology/placement/",
                labs: "https://rvce.edu.in/department/biotechnology/laboratories/",
                facilities: "https://rvce.edu.in/department/biotechnology/facilities/",
                research: "https://rvce.edu.in/department/biotechnology/research/",
                hod_message: "https://rvce.edu.in/department/biotechnology/message_from_hod_biotechnology/",
                happenings: "https://rvce.edu.in/department/biotechnology/happenings/",
                academic_planning: "https://rvce.edu.in/department/biotechnology/acadamic_planning/",
                m_tech: "https://rvce.edu.in/department/biotechnology/m_tech_in_biotechnology/",
                coe_genomics: "https://rvce.edu.in/department/biotechnology/centre-of-excellence-in-computational-genomics/"
            },
            {
                n:"Chemical Engineering (CH)",
                c:"ch", 
                u:"https://rvce.edu.in/department/chemical_engineering/main_dept/",
                intake: "40",
                accreditation: "NBA Accredited", 
                hod:"Dr. Jagadish H Patil",
                info: "Established in 1982, the Department of Chemical Engineering is a leader in academic and research excellence, holding a 6-year NBA accreditation. It offers B.E., M.Sc. (Engg) by Research, and Ph.D. programmes.",
                about: "https://rvce.edu.in/department/chemical_engineering/about_dept/",
                syllabus: "https://rvce.edu.in/academics_and_examinations/rvce_scheme_syllabus/#ug",
                faculty: "http://rvce.edu.in/department/chemical_engineering/faculty/",
                placement: "https://rvce.edu.in/department/chemical_engineering/placement/",
                labs: "https://rvce.edu.in/department/chemical_engineering/laboratories/",
                research: "https://rvce.edu.in/department/chemical_engineering/research/",
                facilities: "https://rvce.edu.in/department/chemical_engineering/facilities/",
                project_labs: "https://rvce.edu.in/department/chemical_engineering/project_labs/",
                campus_diaries: "https://rvce.edu.in/department/chemical_engineering/campus_diaries/",
                hod_message: "https://rvce.edu.in/department/chemical_engineering/dr_jagadish_h_patil_hod_message/",
                coe_hydrogen: "https://rvce.edu.in/department/chemical_engineering/ce_coe/"
            },
            {
                n:"Chemistry (CHY)",
                c:"chy", 
                u:"https://rvce.edu.in/department/chemistry/department_of_chemistry/", 
                hod:"Dr. Mahesh R",
                info: "Established in 1963, the Department of Chemistry provides foundational knowledge to all first-year engineering students and offers global electives. It is a recognized VTU research centre.",
                about: "https://rvce.edu.in/department/chemistry/about_the_department/",
                syllabus: "https://rvce.edu.in/academics_and_examinations/rvce_scheme_syllabus/#ug",
                faculty: "https://rvce.edu.in/department/chemistry/faculty/",
                labs: "https://rvce.edu.in/department/chemistry/laboratories/",
                research: "https://rvce.edu.in/department/chemistry/research/",
                facilities: "https://rvce.edu.in/department/chemistry/facilities/",
                happenings: "https://rvce.edu.in/department/chemistry/happenings/",
                hod_message: "https://rvce.edu.in/department/chemistry/message_from_hod_basic_chemistry/",
                collab: "https://rvce.edu.in/department/chemistry/collaboration-and-networking/"
            },
            {
                n:"Civil Engineering (CV)",
                c:"cv", 
                u:"https://rvce.edu.in/department/civil_engineering/department-of-civil-engineering/",
                intake: "60",
                accreditation: "NBA Accredited", 
                hod:"Dr. Anjaneyappa",
                info: "Established in 1963, the department offers NBA-accredited B.E. in Civil Engineering and M.Tech in Structural Engineering & Highway Technology. It is a recognized VTU research centre.",
                about: "https://rvce.edu.in/department/civil_engineering/about-the-department/",
                syllabus: "https://rvce.edu.in/academics_and_examinations/rvce_scheme_syllabus/#ug",
                faculty: "https://rvce.edu.in/department/civil_engineering/faculty/",
                placement: "https://rvce.edu.in/department/civil_engineering/placement/",
                labs: "https://rvce.edu.in/department/civil_engineering/civil-laboratories/",
                research: "https://rvce.edu.in/department/civil_engineering/research/",
                facilities: "https://rvce.edu.in/department/civil_engineering/facilities/",
                coe_3s: "https://rvce.edu.in/department/civil_engineering/centre_of_excellence_in_3s_infrastructure_safe_sustainable_smart/",
                m_tech_structural: "https://rvce.edu.in/department/civil_engineering/mtech_in_structural_engineering/",
                m_tech_highway: "https://rvce.edu.in/department/civil_engineering/mtech_in_highway_technology/",
                collab: "https://rvce.edu.in/department/civil_engineering/collaboration-and-networking/"
            },
            {
                n:"Computer Science & Engg (CSE)",
                c:"cs", 
                u:"https://rvce.edu.in/department/cse/cse_main/",
                intake: "360",
                accreditation: "NBA Accredited", 
                hod:"Dr. Shanta Rangaswamy",
                info: "Established in 1984, the CSE department is the most sought-after at RVCE. It offers NBA-accredited B.E., M.Tech. (CSE and CNE), and Ph.D. programs with state-of-the-art labs and stellar placements.",
                about: "https://rvce.edu.in/department/cse/about_the_department/",
                syllabus: "https://rvce.edu.in/academics_and_examinations/rvce_scheme_syllabus/#ug",
                faculty: "https://rvce.edu.in/department/cse/faculty/",
                placement: "https://rvce.edu.in/department/cse/placement/",
                labs: "https://rvce.edu.in/department/cse/laboratories/",
                research: "https://rvce.edu.in/department/cse/research/",
                facilities: "https://rvce.edu.in/department/cse/facilities/",
                happenings: "https://rvce.edu.in/department/cse/happenings/",
                hod_message: "https://rvce.edu.in/department/cse/dr_shanta_rangaswamy_hod_message/",
                coe_cisss: "https://rvce.edu.in/department/cse/centre_of_excellence_in_rvce_hpcc_systems_cognitive_intelligent_systems_for_sustainable_solutionscisss/",
                coe_vision: "https://rvce.edu.in/department/cse/centre_of_excellence_in_computer_vision_research_next_generation_ai_enabled/",
                m_tech: "https://rvce.edu.in/department/cse/m_tech_cse/",
                m_tech_cne: "https://rvce.edu.in/department/cse/m_tech_cne/",
                collab: "https://rvce.edu.in/department/cse/collaboration-and-networking/"
            },
            {
                n:"CSE (AI & ML) (CSAIML)",
                c:"csaiml", 
                u:"https://rvce.edu.in/department/cse/cse_main/",
                intake: "180",
                accreditation: "Not specified/New", 
                hod:"Dr. Shanta Rangaswamy (Under CSE Dept)",
                info: "A specialized B.E. track under the CSE department focusing on Artificial Intelligence and Machine Learning.",
                about: "https://rvce.edu.in/department/cse/about_the_department/",
                syllabus: "https://rvce.edu.in/academics_and_examinations/rvce_scheme_syllabus/#ug",
                faculty: "https://rvce.edu.in/department/cse/faculty/",
                placement: "https://rvce.edu.in/department/cse/placement/",
                labs: "https://rvce.edu.in/department/cse/laboratories/"
            },
            {
                n:"CSE (Cyber Security) (CSCY)",
                c:"cscy", 
                u:"https://rvce.edu.in/department/cse/cse_main/",
                intake: "60",
                accreditation: "Not specified/New", 
                hod:"Dr. Shanta Rangaswamy (Under CSE Dept)",
                info: "A specialized B.E. track under the CSE department focusing on Cyber Security and defensive computing.",
                about: "https://rvce.edu.in/department/cse/about_the_department/",
                syllabus: "https://rvce.edu.in/academics_and_examinations/rvce_scheme_syllabus/#ug",
                faculty: "https://rvce.edu.in/department/cse/faculty/",
                placement: "https://rvce.edu.in/department/cse/placement/",
                labs: "https://rvce.edu.in/department/cse/laboratories/"
            },
            {
                n:"CSE (Data Science) (CSDS)",
                c:"csds", 
                u:"https://rvce.edu.in/department/cse/cse_main/",
                intake: "60",
                accreditation: "Not specified/New", 
                hod:"Dr. Shanta Rangaswamy (Under CSE Dept)",
                info: "A specialized B.E. track under the CSE department focusing on Data Science, Big Data, and Analytics.",
                about: "https://rvce.edu.in/department/cse/about_the_department/",
                syllabus: "https://rvce.edu.in/academics_and_examinations/rvce_scheme_syllabus/#ug",
                faculty: "https://rvce.edu.in/department/cse/faculty/",
                placement: "https://rvce.edu.in/department/cse/placement/",
                labs: "https://rvce.edu.in/department/cse/laboratories/"
            },
            {
                n:"Electrical & Electronics (EEE)",
                c:"ee", 
                u:"https://rvce.edu.in/department/eee/department-of-electrical-and-electronics-engineering/",
                intake: "60",
                accreditation: "NBA Accredited", 
                hod:"Dr. J N Hemalatha (I/c)",
                info: "Since 1963, the EEE department has been a hub of academic excellence. It offers B.E. and M.Tech in Power Electronics, focusing on renewable energy, smart grids, and industrial automation.",
                about: "https://rvce.edu.in/department/eee/about_the_department/",
                syllabus: "https://rvce.edu.in/academics_and_examinations/rvce_scheme_syllabus/#ug",
                faculty: "https://rvce.edu.in/department/eee/faculty/",
                placement: "https://rvce.edu.in/department/eee/placement/",
                labs: "https://rvce.edu.in/department/eee/laboratories/",
                research: "https://rvce.edu.in/department/eee/research/",
                facilities: "https://rvce.edu.in/department/eee/facilities/",
                campus_diaries: "https://rvce.edu.in/department/eee/campus_diaries/",
                hod_message: "https://rvce.edu.in/department/eee/hod_message/",
                rd_labs: "https://rvce.edu.in/department/eee/rd_labs/",
                m_tech: "https://rvce.edu.in/department/eee/mtech_in_power_electronics/",
                coe_mobility: "https://rvce.edu.in/department/eee/eee_coe/",
                coe_vidyuth: "https://rvce.edu.in/wp-content/uploads/2025/11/SMART-VIDYUTH-SUSTAINABLE-SOLUTIONS.pdf",
                coc_ev: "https://rvce.edu.in/department/eee/coc_vision_astra_in_ev_academy/"
            },
            {
                n:"Electronics & Communication (ECE)",
                c:"ec", 
                u:"https://rvce.edu.in/department/ece/department_of_electronics_and_communication/",
                intake: "240",
                accreditation: "NBA Accredited", 
                hod:"Dr. H. V. Ravish Aradhya",
                info: "Established in 1972, the department offers state-of-the-art degrees with a 6-year NBA accreditation (2022-2028) and hosts multiple Centres of Excellence in VLSI, Autonomous Vehicles, and Materials Fabrication.",
                about: "https://rvce.edu.in/department/ece/about_department/",
                syllabus: "https://rvce.edu.in/academics_and_examinations/rvce_scheme_syllabus/#ug",
                faculty: "https://rvce.edu.in/department/ece/faculty/",
                placement: "https://rvce.edu.in/department/ece/placement/",
                labs: "https://rvce.edu.in/department/ece/laboratories/",
                research: "https://rvce.edu.in/department/ece/research/",
                rd_labs: "https://rvce.edu.in/department/ece/randd-lab/",
                facilities: "https://rvce.edu.in/department/ece/facilities/",
                happenings: "https://rvce.edu.in/department/ece/happenings/",
                hod_message: "https://rvce.edu.in/department/ece/hod_message/",
                coe_mfc: "https://rvce.edu.in/department/ece/the_centre_of_excellence_in_materials_fabrication_characterisation/",
                coe_cav: "https://rvce.edu.in/department/ece/centre_of_excellence_in_connected_autonomous_vehicles/",
                coe_icas: "https://rvce.edu.in/department/ece/centre_of_excellence_in_integrated_circuits_and_systemscoe_icas/",
                m_tech_vlsi: "https://rvce.edu.in/department/ece/m_tech_in_vlsi_design_embedded_systems/",
                m_tech_comm: "https://rvce.edu.in/department/ece/master_of_technology_in_m_tech_communication_systems/",
                collab: "https://rvce.edu.in/department/ece/collaboration-and-networking/"
            },
            {
                n:"Electronics & Instrumentation (EIE)",
                c:"ei", 
                u:"https://rvce.edu.in/department/eim/main_dept/",
                intake: "60",
                accreditation: "NBA Accredited", 
                hod:"Dr. CH. Renumadhavi",
                info: "Established in 1981, the department offers an NBA-accredited curriculum that is regularly updated to meet industry demands, featuring modern laboratories for hands-on learning and innovation in automation and control.",
                about: "https://rvce.edu.in/department/eim/about_dept/",
                syllabus: "https://rvce.edu.in/academics_and_examinations/rvce_scheme_syllabus/#ug",
                faculty: "https://rvce.edu.in/department/eim/faculty/",
                placement: "https://rvce.edu.in/department/eim/placement/",
                labs: "https://rvce.edu.in/department/eim/laboratories/",
                research: "https://rvce.edu.in/department/eim/research/",
                rd_labs: "https://rvce.edu.in/department/eim/rd/",
                campus_diaries: "https://rvce.edu.in/department/eim/campus_diaries/",
                hod_message: "https://rvce.edu.in/department/eim/hod_message/",
                publications: "https://rvce.edu.in/department/eim/publications/",
                coe_sensor: "https://rvce.edu.in/department/eim/eie_centre_of_excellence_in_sensor_technology_applications/",
                coe_health: "https://rvce.edu.in/department/eim/eie_centre_of_excellence_in_health_care_technology_research/"
            },
            {
                n:"Electronics & Telecom (ETE)",
                c:"et", 
                u:"https://rvce.edu.in/department/etc/main_department/",
                intake: "60",
                accreditation: "NBA Accredited", 
                hod:"Dr. Nagamani K",
                info: "Established in 1992, the department offers a comprehensive educational experience emphasizing hands-on design in hardware, software, embedded systems, networks, and protocols.",
                about: "https://rvce.edu.in/department/etc/about_the_department/",
                syllabus: "https://rvce.edu.in/academics_and_examinations/rvce_scheme_syllabus/#ug",
                faculty: "http://rvce.edu.in/department/etc/faculty/",
                placement: "https://rvce.edu.in/department/etc/placement/",
                labs: "https://rvce.edu.in/department/etc/laboratories/",
                research: "https://rvce.edu.in/department/etc/research/",
                rd_labs: "https://rvce.edu.in/department/etc/rd_labs/",
                facilities: "https://rvce.edu.in/department/etc/facilities/",
                project_labs: "https://rvce.edu.in/department/etc/project_lab/",
                campus_diaries: "https://rvce.edu.in/department/etc/campus_diaries/",
                hod_message: "https://rvce.edu.in/department/etc/dr_nagamani_k_hod_message/",
                m_tech: "https://rvce.edu.in/department/etc/mtech_in_digital_communication_engineering/",
                coe_5g: "https://rvce.edu.in/wp-content/uploads/2025/11/5G-AND-EMERGING-WIRELESS-TECHNOLOGIES.pdf"
            },
            {
                n:"Industrial Engg & Mgmt (IEM)",
                c:"im", 
                u:"https://rvce.edu.in/department/iem/b_e_industrial_engineering_and_management/",
                intake: "60",
                accreditation: "NBA Accredited", 
                hod:"Dr. Rajeswara Rao K V S",
                info: "Established in 1980, the department integrates engineering and management to align with industry needs. It offers an NBA-accredited B.E. programme and maintains close associations with professional societies like IIIE, ORSI, and IIMM.",
                about: "https://rvce.edu.in/department/iem/about_the_department/",
                syllabus: "https://rvce.edu.in/academics_and_examinations/rvce_scheme_syllabus/#ug",
                faculty: "https://rvce.edu.in/department/iem/faculty/",
                placement: "https://rvce.edu.in/department/iem/placement/",
                labs: "https://rvce.edu.in/department/iem/laboratories/",
                facilities: "https://rvce.edu.in/department/iem/facilities/",
                research: "https://rvce.edu.in/department/iem/research/",
                coe: "https://rvce.edu.in/department/iem/centre-of-excellence-in-logistics-supply-chain-management/"
            },
            {
                n:"Information Science & Engg (ISE)",
                c:"is", 
                u:"https://rvce.edu.in/department/ise/department--of-information-science-and-engineering/",
                intake: "135",
                accreditation: "NBA Accredited", 
                hod:"Dr. G. S. Mamatha",
                info: "Offers a dynamic curriculum focused on AI, IoT, Cloud Computing and Cybersecurity. Supported by a VTU-recognised research centre and partnerships with Microsoft, Nvidia and HP.",
                about: "https://rvce.edu.in/department/ise/about_dept/",
                syllabus: "https://rvce.edu.in/academics_and_examinations/rvce_scheme_syllabus/#ug",
                faculty: "https://rvce.edu.in/department/ise/faculty/",
                placement: "https://rvce.edu.in/department/ise/placement/",
                labs: "https://rvce.edu.in/department/ise/facilities/",
                research: "https://rvce.edu.in/department/ise/research/",
                campus_diaries: "https://rvce.edu.in/department/ise/campus_diaries/",
                hod_message: "https://rvce.edu.in/department/ise/dr_g_s_mamatha_hod_message/",
                m_tech_soft: "https://rvce.edu.in/department/ise/mtech_in_software_engineering/",
                m_tech_it: "https://rvce.edu.in/department/ise/mtech_in_information_technology/",
                coe_wic: "https://rvce.edu.in/department/ise/ise_coe/"
            },
            {
                n:"Mathematics (MATHS)",
                c:"mat", 
                u:"https://rvce.edu.in/department/maths/main_dept/", 
                hod:"Dr. Jayalatha G",
                info: "Established in 1963, one of the oldest departments at RVCE. It provides high-quality education and features a dedicated team of experts with research spanning Pure Mathematics, Applied Mathematics, and Quantum Computing.",
                about: "https://rvce.edu.in/department/maths/about_dept/",
                syllabus: "https://rvce.edu.in/academics_and_examinations/rvce_scheme_syllabus/#ug",
                faculty: "https://rvce.edu.in/department/maths/main_dept/",
                labs: "https://rvce.edu.in/department/maths/facilities/",
                research: "https://rvce.edu.in/department/maths/research/",
                campus_diaries: "https://rvce.edu.in/department/maths/campus_diaries/",
                hod_message: "https://rvce.edu.in/department/maths/dr_jayalatha_g_hod_message/",
                networking: "https://rvce.edu.in/department/maths/maths_cn/",
                collab: "https://rvce.edu.in/department/maths/collaboration-and-networking/"
            },
            {
                n:"Mechanical Engineering (ME)",
                c:"me", 
                u:"https://rvce.edu.in/department/me/department_of_mechanical_engineering/",
                intake: "120",
                accreditation: "NBA Accredited", 
                hod:"Dr. Shanmukha Nagaraj",
                info: "Dedicated to fostering innovation and excellence in Mechanical Engineering. Offers premier education and cultivates cutting-edge research in Design, Materials, Thermal and Manufacturing, strengthened by robust industry collaborations.",
                about: "https://rvce.edu.in/department/me/about_the_department/",
                syllabus: "https://rvce.edu.in/academics_and_examinations/rvce_scheme_syllabus/#ug",
                faculty: "https://rvce.edu.in/department/me/faculty/",
                placement: "https://rvce.edu.in/department/me/placement/",
                labs: "https://rvce.edu.in/department/me/laboratories/",
                facilities: "https://rvce.edu.in/department/me/facilities/",
                research: "https://rvce.edu.in/department/me/research/",
                rd_labs: "https://rvce.edu.in/department/me/rd_labs/",
                campus_diaries: "https://rvce.edu.in/department/me/campus_diaries/",
                coe_toyota: "https://rvce.edu.in/department/me/rv_toyota_kriloskar_centre_of_excellence_in_automotive_engineering/",
                coe_ev: "https://rvce.edu.in/department/me/rvce_morris_garage_centre_of_excellence_in_electric_vehicle_technology_evt/",
                m_tech_pdm: "https://rvce.edu.in/department/me/mtech-in-product-design-and-manufacturing/",
                m_tech_machine: "https://rvce.edu.in/department/me/mtech_in_machine_design/",
                coe_bosch: "https://rvce.edu.in/department/me/rv-bosch-rexroth-centre-for-automation-technologies/",
                coe_benz: "https://rvce.edu.in/department/me/rv-mercedes-benz-centre-for-automotive-mechatronics/"
            },
            {
                n:"Physics (PHY)",
                c:"phy", 
                u:"https://rvce.edu.in/department/physics/department_of_physics/", 
                hod:"Dr. G. Shireesha",
                info: "Established in 1963, it offers Engineering Physics courses and global electives. Known for its research, discipline, and academic rigour, it features 13 doctorate-qualified faculty and advanced research facilities.",
                about: "https://rvce.edu.in/department/physics/about_the_department/",
                syllabus: "https://rvce.edu.in/academics_and_examinations/rvce_scheme_syllabus/#ug",
                faculty: "https://rvce.edu.in/department/physics/faculty/",
                labs: "https://rvce.edu.in/department/physics/laboratories/",
                facilities: "https://rvce.edu.in/department/physics/facilities/",
                research: "https://rvce.edu.in/department/physics/research/#",
                collab: "https://rvce.edu.in/department/physics/collaboration-and-networking/"
            },
            {
                n:"Physical Education & Sports",
                c:"sports", 
                u:"https://rvce.edu.in/department-of-physical-education-sports/", 
                info: "The Department of Physical Education and Sports at RVCE promotes student fitness and excellence in sports, organizing VTU tournaments and offering sports scholarships for exceptional athletes.",
                scholarship: "https://rvce.edu.in/department-of-physical-education-sports/rvce-sports-scholarship/",
                tournaments: "https://rvce.edu.in/department-of-physical-education-sports/v-t-u-tournament-organized/"
            }
        ],
        pg: [
            {n:"M.Tech Biotechnology",c:"bt", hod:"Dr. Nagashree N Rao", u:"https://rvce.edu.in/department/biotechnology/department-of-biotechnology/", syllabus: "https://rvce.edu.in/academics_and_examinations/rvce_scheme_syllabus/#pgscheme"},
            {n:"M.Tech Structural Engg",c:"cv_se", hod:"Dr. Anjaneyappa", u:"https://rvce.edu.in/department/civil_engineering/m_tech_structural_engineering/", syllabus: "https://rvce.edu.in/academics_and_examinations/rvce_scheme_syllabus/#pgscheme"},
            {n:"M.Tech Highway Tech",c:"cv_ht", hod:"Dr. Anjaneyappa", u:"https://rvce.edu.in/department/civil_engineering/m-tech-highway-technology/", syllabus: "https://rvce.edu.in/academics_and_examinations/rvce_scheme_syllabus/#pgscheme"},
            {n:"M.Tech CSE",c:"cs_cse", hod:"Dr. Shanta Rangaswamy", u:"https://rvce.edu.in/department/cse/m-tech-cse/", syllabus: "https://rvce.edu.in/academics_and_examinations/rvce_scheme_syllabus/#pgscheme"},
            {n:"M.Tech Computer Network Engg",c:"cs_cne", hod:"Dr. Shanta Rangaswamy", u:"https://rvce.edu.in/department/cse/m-tech-cne/", syllabus: "https://rvce.edu.in/academics_and_examinations/rvce_scheme_syllabus/#pgscheme"},
            {n:"M.Tech Power Electronics",c:"ee_pe", hod:"Dr. J N Hemalatha", u:"https://rvce.edu.in/department/eee/mtech_in_power_electronics/", syllabus: "https://rvce.edu.in/academics_and_examinations/rvce_scheme_syllabus/#pgscheme"},
            {n:"M.Tech VLSI & Embedded",c:"ec_vlsi", hod:"Dr. Ravish Aradhya H V", u:"https://rvce.edu.in/department/ece/m-tech-in-vlsi-design-embedded-systems/", syllabus: "https://rvce.edu.in/academics_and_examinations/rvce_scheme_syllabus/#pgscheme"},
            {n:"M.Tech Comm Systems",c:"ec_cs", hod:"Dr. Ravish Aradhya H V", u:"https://rvce.edu.in/department/ece/master-of-technology-in-m-tech-communication-systems/", syllabus: "https://rvce.edu.in/academics_and_examinations/rvce_scheme_syllabus/#pgscheme"},
            {n:"M.Tech Software Engg",c:"is_se", hod:"Dr. Mamatha G S", u:"https://rvce.edu.in/department/ise/ise-mtech-in-software-engineering/", syllabus: "https://rvce.edu.in/academics_and_examinations/rvce_scheme_syllabus/#pgscheme"},
            {n:"M.Tech Info Tech",c:"is_it", hod:"Dr. Mamatha G S", u:"https://rvce.edu.in/department/ise/ise_mtech_in_information_technology/", syllabus: "https://rvce.edu.in/academics_and_examinations/rvce_scheme_syllabus/#pgscheme"},
            {n:"M.Tech Product Design",c:"me_pd", hod:"Dr. Shanmukha Nagaraj", u:"https://rvce.edu.in/department/me/mtech-in-product-design-and-manufacturing/", syllabus: "https://rvce.edu.in/academics_and_examinations/rvce_scheme_syllabus/#pgscheme"},
            {n:"M.Tech Machine Design",c:"me_md", hod:"Dr. Shanmukha Nagaraj", u:"https://rvce.edu.in/department/me/mtech-in-machine-design/", syllabus: "https://rvce.edu.in/academics_and_examinations/rvce_scheme_syllabus/#pgscheme"},
            {n:"M.Tech Digital Comm",c:"et_dc", hod:"Dr. Nagamani K", u:"https://rvce.edu.in/department/etc/mtech_in_digital_communication_engineering/", syllabus: "https://rvce.edu.in/academics_and_examinations/rvce_scheme_syllabus/#pgscheme"},
            {
                n:"Master of Computer Applications (MCA)",
                c:"mca", 
                u:"https://rvce.edu.in/department/mca/main_department/", 
                hod:"Dr. Jasmine K S",
                info: "Established in 1997, it offers MCA (Intake: 120), M.Sc. by Research, and Ph.D. The programme holds 4 NBA accreditations and boasts consistent 100% placement opportunities with a 96% internship conversion rate.",
                about: "https://rvce.edu.in/department/mca/about_the_department/",
                syllabus: "https://rvce.edu.in/academics_and_examinations/rvce_scheme_syllabus/#pgscheme",
                faculty: "https://rvce.edu.in/department/mca/main_department/",
                placement: "https://rvce.edu.in/department/mca/placement/",
                labs: "https://rvce.edu.in/department/mca/laboratories/",
                facilities: "https://rvce.edu.in/department/mca/facilities/",
                research: "https://rvce.edu.in/department/mca/research/",
                campus_diaries: "https://rvce.edu.in/department/mca/campus_diaries/"
            }
        ]
    },
    hostels: {
        boys: "Chamundi, Cauvery, Sir MV, Krishna blocks",
        girls: "Diamond Jubilee, Krishna Garden blocks",
        amenities: "Vegetarian mess, Wi-Fi, laundry, 24/7 security",
        note: "Allotted during admission — no advance booking",
        url: "https://rvce.edu.in/facilities/"
    },
    facilities: {
        list: ["Central Library","Food Court","Sports Complex (400m track, Cricket/Football)","Health Centre","ICICI Bank","Post Office","Gymnatorium","Labs & Workshops"],
        url: "https://rvce.edu.in/facilities/"
    },
    placements2026: {
        maxSalary: "₹67 LPA Highest Package (2026 Batch)",
        avgSalary: "₹16.86 LPA (Current Average)",
        companies: "192+ companies visited (Ongoing)",
        offers: "698+ offers made so far",
        topRecruiters: "Microsoft, Google, Amazon, Atlassian, Cisco, Dell, Intel, Adobe, Samsung"
    },
    placements2025: {
        maxSalary: "₹67 LPA Highest Package (2025 Batch, B.E.)",
        mtechMax: "₹35 LPA (M.Tech highest)",
        mcaMax: "₹20 LPA (MCA highest)",
        avgSalary: "₹13.76 LPA (2025 B.E. Avg)",
        companies: "262 companies participated in 2025 drive",
        offers: "922 offers to B.E./B.Tech students",
        topRecruiters: "Microsoft, Google, Amazon, Atlassian, Cisco, Dell, Intel, Adobe, Flipkart, Samsung, PayPal, IBM, Deloitte, JP Morgan, Goldman Sachs, Bosch, Mercedes-Benz"
    },
    placements2024: {
        maxSalary: "₹92 LPA Highest Package (2024 Batch)",
        avgSalary: "~₹11.5 LPA (2024 Avg)",
        companies: "249 companies participated in 2024 drive",
        offers: "917 total offers with 75% placement rate"
    },
    'iem': {
        name: "Industrial Engineering and Management",
        ug: {
            ongoing: {
                name: "B.E. Industrial Engineering and Management (2025-26)",
                companies: 12, offers: 30, students: 27,
                avg: "12.46 LPA", max: "21.45 LPA"
            },
            full: [
                { name: "2024-25", companies: 30, offers: 51, students: 46, avg: "7.68 LPA", max: "21.45 LPA" },
                { name: "2023-24", companies: 30, offers: 53, students: 51, avg: "8.39 LPA", max: "20.00 LPA" },
                { name: "2022-23", companies: 35, offers: 49, students: 49, avg: "9.06 LPA", max: "18.99 LPA" },
                { name: "2021-22", companies: 38, offers: 66, students: 42, avg: "9.03 LPA", max: "14.95 LPA" }
            ]
        }
    },
    'mca': {
        name: "Master of Computer Applications",
        pg: {
            ongoing: {
                name: "Master of Computer Applications (2025-26)",
                companies: 3, offers: 21, students: 22,
                avg: "4.00 LPA", max: "11.59 LPA"
            },
            full: [
                { name: "2025-26 (Timeline)", companies: 24, offers: 62, students: 59, avg: "9.00 LPA", max: "20.00 LPA" },
                { name: "2024-25", companies: 35, offers: 80, students: 80, avg: "8.94 LPA", max: "20.00 LPA" },
                { name: "2023-24", companies: 52, offers: 132, students: 95, avg: "8.29 LPA", max: "25.00 LPA" },
                { name: "2021-22", companies: 56, offers: 146, students: 102, avg: "10.00 LPA", max: "28.00 LPA" },
                { name: "2020-21", companies: 85, offers: 274, students: 210, avg: "7.50 LPA", max: "20.00 LPA" }
            ]
        }
    },
    'me': {
        name: "Mechanical Engineering",
        ug: {
            ongoing: {
                name: "B.E. Mechanical Engineering (2025-26)",
                companies: 39, offers: 86, students: 80,
                avg: "9.22 LPA", max: "18.33 LPA"
            },
            full: [
                { name: "2024-25", companies: 44, offers: 88, students: 82, avg: "8.21 LPA", max: "18.33 LPA" },
                { name: "2023-24", companies: 46, offers: 78, students: 70, avg: "9.07 LPA", max: "18.00 LPA" },
                { name: "2022-23", companies: 60, offers: 113, students: 85, avg: "8.35 LPA", max: "16.00 LPA" },
                { name: "2021-22", companies: 45, offers: 112, students: 69, avg: "9.05 LPA", max: "18.00 LPA" }
            ]
        },
        pg: {
            ongoing: [
                {
                    name: "M.Tech. Product Design And Manufacturing (2025-26)",
                    companies: 6, offers: 8, students: 8, avg: "7.09 LPA", max: "14.00 LPA"
                },
                {
                    name: "M.Tech. Machine Design (2025-26)",
                    companies: 8, offers: 7, students: 7, avg: "6.02 LPA", max: "8.00 LPA"
                }
            ],
            full: [
                { name: "Product Design & Manufacturing (2024-25)", companies: 6, offers: 8, students: 8, avg: "7.09 LPA", max: "14.00 LPA" },
                { name: "Product Design & Manufacturing (2022-23)", companies: 12, offers: 23, students: 23, avg: "6.82 LPA", max: "10.00 LPA" },
                { name: "Product Design & Manufacturing (2021-22)", companies: 14, offers: 20, students: 20, avg: "6.45 LPA", max: "12.00 LPA" },

                { name: "Machine Design (2024-25)", companies: 8, offers: 7, students: 7, avg: "6.02 LPA", max: "8.00 LPA" },
                { name: "Machine Design (2022-23)", companies: 10, offers: 17, students: 17, avg: "6.44 LPA", max: "20.00 LPA" },
                { name: "Machine Design (2021-22)", companies: 12, offers: 15, students: 15, avg: "5.83 LPA", max: "12.00 LPA" }
            ]
        }
    },
    'mca': {
        name: "Master of Computer Applications",
        pg: {
            ongoing: {
                name: "Master of Computer Applications (2025-26)",
                companies: 3, offers: 21, students: 22,
                avg: "4.00 LPA", max: "11.59 LPA"
            },
            full: [
                { name: "2025-26 (Timeline)", companies: 24, offers: 62, students: 59, avg: "9.00 LPA", max: "20.00 LPA" },
                { name: "2024-25", companies: 35, offers: 80, students: 80, avg: "8.94 LPA", max: "20.00 LPA" },
                { name: "2023-24", companies: 52, offers: 132, students: 95, avg: "8.29 LPA", max: "25.00 LPA" },
                { name: "2021-22", companies: 56, offers: 146, students: 102, avg: "10.00 LPA", max: "28.00 LPA" },
                { name: "2020-21", companies: 85, offers: 274, students: 210, avg: "7.50 LPA", max: "20.00 LPA" }
            ]
        }
    },
    'et': {
        name: "Electronics And Telecommunication Engineering",
        ug: {
            ongoing: {
                name: "B.E. Electronics And Telecommunication Engineering (2025-26)",
                companies: 300, offers: 61, students: 47,
                avg: "11.128 LPA", max: "50.00 LPA"
            },
            full: [
                { name: "2024-25", companies: 41, offers: 53, students: 49, avg: "9.67 LPA", max: "39.00 LPA" },
                { name: "2023-24", companies: "N/A", offers: 45, students: 60, avg: "75% Placed", max: "12 Higher Studies" },
                { name: "2022-23", companies: "N/A", offers: 39, students: 64, avg: "61% Placed", max: "0 Higher Studies" },
                { name: "2021-22", companies: "N/A", offers: 48, students: 60, avg: "80% Placed", max: "0 Higher Studies" },
                { name: "2020-21", companies: "N/A", offers: 47, students: 54, avg: "87% Placed", max: "1 Higher Studies" }
            ]
        },
        pg: {
            ongoing: {
                name: "M.Tech. Digital Communication Engineering (2025-26)",
                companies: 1, offers: 1, students: 1,
                avg: "15.00 LPA", max: "15.00 LPA"
            },
            full: [
                { name: "2024-25*", companies: 1, offers: 1, students: 1, avg: "15.00 LPA", max: "15.00 LPA" },
                { name: "2023-24", companies: 12, offers: 8, students: 8, avg: "7.50 LPA", max: "10.00 LPA" },
                { name: "2021-22", companies: 12, offers: 11, students: 11, avg: "7.09 LPA", max: "18.60 LPA" },
                { name: "2020-21", companies: 16, offers: 22, students: 22, avg: "8.22 LPA", max: "21.50 LPA" }
            ]
        }
    },
    hostelDetails: {
        boysBlocks: { chamundi: "1st year UG", cauvery: "2nd & 3rd year UG", cauveryAnnex: "1st year UG", sirMV: "Final year UG & PG" },
        girlsBlocks: { djBlock: "1st year & higher sem B.E. (On-campus)", krishnaGarden: "Higher sem B.E., M.Tech, MCA (Off-campus, Pattanagere)" },
        fees: { tripleSharing: "~₹1,42,000 – ₹1,53,000 per annum", doubleSharing: "~₹1,84,000 – ₹1,91,000 per annum" },
        facilities: "Furnished rooms (bed, study table, chair, cupboard), Wi-Fi, 24/7 security, gymnasium, indoor/outdoor sports, vegetarian mess",
        messDetails: {
            type: "Strictly Vegetarian",
            messes: ["Cauvery Mess (1st Year)", "Sir MV Mess (Seniors)", "DJ Mess (Girls)"],
            meals: "Breakfast, Lunch, Evening Snacks, and Dinner",
            management: "Student-run Mess Committee (Finalizes menu & monitors quality)",
            timings: "Specific timings for each meal (Curfew applicable)",
            contact: "080-68188256 / 8271"
        }
    },
    safety: {
        cctv: "Extensive CCTV surveillance across all blocks, classrooms, and hostels",
        wardens: "Residential wardens in all hostel blocks",
        healthCentre: "On-campus Health Centre with 24/7 medical support and ambulance facility. Partnered with Aster Hospital for specialist care.",
        healthDetails: {
            doctor: "Full-time resident medical officer available",
            services: ["Emergency Care", "Consultation", "24/7 Ambulance", "Medical Pharmacy"],
            hospital: "Tied up with Aster Hospital, RV Road for advanced treatments"
        },
        grievance: "Active Internal Complaints Committee (ICC) and Student Grievance Redressal Cell",
        antiRagging: "Strict Zero Tolerance policy; Anti-ragging squad ensures a safe environment for freshers"
    },
    campus: {
        fest: "8th Mile (Annual Technocultural Fest)",
        clubs: ["Alaap (Music)", "Raaga (Dance)", "TEDxRVCE", "CARV (Cultural)", "Entrepreneurship Cell (E-Cell)", "Namma RVCE (Social)", "DebSoc", "QuizCorp", "Photography Club", "Literary Society", "Kannada Sangha", "Rotaract Club", "Coding Club", "Robotics Club", "NSS", "NCC", "RVCE Ham Club (Amateur Radio)"],
        teams: ["Team Ashwa (Formula Student Racing)", "Team dhRuVa (Solar Car Team)", "Team Antariksh (Satellite & Space Tech)", "ASTRA Robotics (Competitive Robotics)", "Team Chimera (Hybrid Engine Vehicle)", "Team Vyoma (UAS & Drones)", "Team Garuda (Supermileage Vehicle)", "Team Jatayu (Autonomous UAVs)", "Team Helios Racing (ATV/Baja Racing)"],
        societies: ["IEEE RVCE", "SAE RVCE", "ACM Student Chapter", "CSI Student Chapter"],
        urls: {
            innovation: "https://rvce.edu.in/innovative_teams/",
            cultural: "https://rvce.edu.in/cultural_teams/"
        }
    },
    events: [
        { name: "GenAI Workshop (B.E. 2nd Year)", date: "May 15-20, 2026", type: "Technical" },
        { name: "CSITSS 2026 Conference (IEEE)", date: "2026", type: "Research" },
        { name: "Applied AI/ML in Renewable Energy Certification", date: "Mar 16 – Jun 19, 2026", type: "Technical" },
        { name: "ICOECA 2026 Conference", date: "June 12-14, 2026", type: "Research" },
        { name: "8th Mile — Annual Technocultural Fest", date: "2026 (TBA)", type: "Cultural" }
    ],
    attendance: {
        requirement: "Minimum 85% attendance mandatory",
        consequence: "Students below 85% may be detained from appearing in semester exams",
        tracking: "Attendance tracked through mandatory ID card system"
    },
    nearby: {
        areas: "Mysuru Road, Kengeri, Rajarajeshwari Nagar, Pattanagere",
        food: "Multiple eateries, cafes & restaurants near campus on Mysuru Road",
        shopping: "RR Nagar has malls (Gopalan Arcade), local markets, and retail stores",
        hospitals: "BGS Gleneagles Global Hospital, Rajarajeshwari Medical College Hospital nearby",
        connectivity: "NICE Road junction nearby, Kengeri Metro station, BMTC bus routes"
    },
    circulars: {
        academic: "https://rvce.edu.in/academic-circular/",
        admissions: "https://rvce.edu.in/admission-circulars/",
        examinations: "https://rvce.edu.in/examination-circulars/",
        feePayment: "https://rvce.edu.in/academics_and_examinations/fee_payment_circulars/"
    },
    ncc: {
        battalion: "6 Karnataka Battalion NCC",
        established: "2008",
        strength: "80 cadets (Army wing)",
        officer: "ANO in charge",
        activities: "Drill, weapons training, adventure activities, camps (CATC, ATC, NIC), Republic Day parade participation, social service"
    },
    nss: {
        units: "2 NSS Units",
        strength: "200+ volunteers",
        activities: "Blood donation camps, tree plantation drives, rural development, Swachh Bharat campaigns, health awareness programs",
        motto: "Not Me But You"
    },
    kannadaSangha: {
        info: "Kannada Sangha promotes Kannada language, literature, and culture through events, literary competitions, and cultural celebrations.",
        events: "Rajyotsava celebrations, Kannada Habba, poetry recitals, drama performances"
    },
    rvjsteam: {
        info: "RVJ STEAM Team bridges Science, Technology, Engineering, Arts, and Mathematics through hands-on projects, workshops, and school outreach programs."
    },
    faculty: {
        deans: [
            { n: "Dr. Shanmukha Nagaraj", u: "https://rvce.edu.in/department/me/faculty-bio/", d: "Professor & Head of Department (Mechanical Engineering)", e: "23 years" },
            { n: "Dr. B.M. Sagar", u: "https://rvce.edu.in/department/ise/dr_b_m_sagar/", d: "Professor & Dean Student Affairs", e: "21 years" },
            { n: "Dr. M Uttara Kumari", u: "https://rvce.edu.in/department/ece/dr_m_uttara_kumari/", d: "Professor & Dean (Research & Development)", e: "22 years" },
            { n: "Dr. D. Ranganath", u: "https://rvce.edu.in/department/chemical_engineering/dr_d_ranganath/", d: "Professor & Dean Placement & Training", e: "29 years" },
            { n: "Dr. M Krishna", u: "https://rvce.edu.in/department/me/dr_krishna_m/", d: "Professor & Dean-Continuing Education & Skill Development", e: "24 years" }
        ],
        ae: [
            { n: "Dr. R Supreeth", u: "https://rvce.edu.in/department/ae/dr_r_supreeth/", d: "Associate Prof & Head", e: "13.6 Years" },
            { n: "Dr. Ravindra S Kulkarni", u: "https://rvce.edu.in/department/ae/dr_ravindra_s_kulkarni/#", d: "Professor", e: "Teaching: 26 years Research: 2 years" },
            { n: "Dr. Promio Charles F", u: "https://rvce.edu.in/department/ae/dr_promio_charles_f/", d: "Associate Professor", e: "Research-5.5 years; Industry- 1 year; Teaching- 8.6 Years" },
            { n: "Bhaskar K", u: "https://rvce.edu.in/department/ae/bhaskar_k/", d: "Assistant Professor", e: "Teaching: 1 years; Industrial: 7 Years; Research: 3 Years" },
            { n: "Pranesh Kumar S R", u: "https://rvce.edu.in/department/ae/pranesh_kumar_s_r/", d: "Assistant Professor", e: "10.3 Years" },
            { n: "Dr. Benjamin Rohit", u: "https://rvce.edu.in/department/ae/dr_benjamin_rohit/", d: "Assistant Professor", e: "Teaching: 10.4 years" },
            { n: "Srinivasan S", u: "https://rvce.edu.in/department/ae/srinivasan_s/", d: "Assistant Professor", e: "18 years" },
            { n: "Mukesh M", u: "https://rvce.edu.in/department/ae/mukesh_m/", d: "Assistant Professor", e: "Research( 2years) , Teaching( 10.2 years)" },
            { n: "Prof. Deepak Bana", u: "https://rvce.edu.in/department/ae/prof_deepak_bana/", d: "Visiting Professor", e: "Research (1year), Teaching (7 years), Indian Air Force (29 years)" },
            { n: "Dr. Balaguru Pandian", u: "https://rvce.edu.in/department/ae/dr-balaguru-pandian/", d: "Assistant Professor", e: "R&D (5 year), Industry (1 Year), Consulting (2 years), Academia (3 years)" },
            { n: "Dr. Karthik Vel E", u: "https://rvce.edu.in/department/ae/dr-karthik-vel-e/", d: "Assistant Professor", e: "-3.5 years (Research) and 1 year (Academic)" },
            { n: "Dr. Ekta Jain", u: "https://rvce.edu.in/department/ae/ekta-jain/", d: "Assistant Professor", e: "Not specified" }
        ],
        aiml: [
            { n: "Dr. B. Sathish Babu", u: "https://rvce.edu.in/department/ai_ml/dr_b_sathish_babu_bio/", d: "Professor and HoD", e: "Teaching: 30 Years" },
            { n: "Dr. Vijayalakshmi M N", u: "https://rvce.edu.in/department/ai_ml/dr_vijayalakshmi_m_n/", d: "Associate Professor", e: "25 years" },
            { n: "Dr. S. Anupama Kumar", u: "https://rvce.edu.in/department/ai_ml/dr_s_anupama_kumar/", d: "Associate Professor", e: "25 years" },
            { n: "Dr. Narasimha Swamy S", u: "https://rvce.edu.in/department/ai_ml/dr_narasimha_swamy_s/", d: "Assistant Professor", e: "Teaching: 4 years" },
            { n: "Dr. Somesh Nandi", u: "https://rvce.edu.in/department/ai_ml/dr_somesh_nandi/", d: "Assistant Professor", e: "7 years" },
            { n: "K Vishwavardhan Reddy", u: "https://rvce.edu.in/department/ai_ml/dr_k_vishwavardhan_reddy/", d: "Assistant Professor", e: "11 Years" },
            { n: "Prof. Sonika C T", u: "https://rvce.edu.in/department/wp-content/uploads/2025/10/Sonika.pdf", d: "Assistant Professor", e: "Not specified" },
            { n: "Prof. Manasa M", u: "https://rvce.edu.in/department/ai_ml/prof_manasa_m/", d: "Assistant Professor", e: "2 years" },
            { n: "Prof. Harshitha V", u: "https://rvce.edu.in/department/ai_ml/prof_harshitha_v/", d: "Assistant Professor", e: "Not specified" },
            { n: "Prof. Rushikesh Anil Padaki", u: "https://rvce.edu.in/department/ai_ml/prof_rushikesh_anil_padaki/", d: "Assistant Professor", e: "Not specified" }
        ],
        bt: [
            { n: "Dr. Nagashree N Rao", u: "https://rvce.edu.in/department/biotechnology/dr_nagashree_n_rao/", d: "Professor and HoD", e: "27 Years" },
            { n: "Dr. Vidya Niranjan", u: "https://rvce.edu.in/department/biotechnology/dr_vidya_niranjan/", d: "Professor", e: "22 years" },
            { n: "Dr. G Vijaya Kumar", u: "https://rvce.edu.in/department/biotechnology/dr_g_vijaya_kumar/", d: "Associate Professor and Associate Dean (PG Studies)", e: "20 years" },
            { n: "Dr. A. H. Manjunatha Reddy", u: "https://rvce.edu.in/department/biotechnology/dr_a_h_manjunatha_reddy/", d: "Professor", e: "18 years" },
            { n: "Dr. Neeta Shivakumar", u: "https://rvce.edu.in/department/biotechnology/dr_neeta_shivakumar/", d: "Associate Professor", e: "16 years" },
            { n: "Dr. Lingayya Hiremath", u: "https://rvce.edu.in/department/biotechnology/dr_lingayya_hiremath/", d: "Assistant Professor", e: "19 years" },
            { n: "Dr. M Rajeswari", u: "https://rvce.edu.in/department/biotechnology/dr_m_rajeswari/", d: "Assistant Professor", e: "21 years" },
            { n: "Dr. Ajeet Kumar Srivastava", u: "https://rvce.edu.in/department/biotechnology/dr_ajeet_kumar_srivastava/", d: "Assistant Professor", e: "19 years" },
            { n: "Dr. Shivandappa", u: "https://rvce.edu.in/department/biotechnology/dr_shivandappa/", d: "Assistant Professor", e: "17 years" },
            { n: "Dr. Narendra Kumar S", u: "https://rvce.edu.in/department/biotechnology/dr_narendra_kumar_s/", d: "Assistant Professor", e: "15 years" },
            { n: "Dr. Praveen Kumar Gupta", u: "https://rvce.edu.in/department/biotechnology/dr_praveen_kumar_gupta/", d: "Assistant Professor", e: "15 years" },
            { n: "Dr. Trilok Chandran B", u: "https://rvce.edu.in/department/biotechnology/dr_trilok_chandran_b/", d: "Assistant Professor", e: "17 years" },
            { n: "Dr. H. Raju", u: "https://rvce.edu.in/department/biotechnology/dr_h_raju/", d: "Assistant Professor", e: "15 years" },
            { n: "Dr. Sumathra M", u: "https://rvce.edu.in/department/biotechnology/dr_sumathra_m/", d: "Assistant Professor", e: "13 years" },
            { n: "Dr. H G Ashok Kumar", u: "https://rvce.edu.in/department/biotechnology/dr_h_g_ashok_kumar/", d: "Professor", e: "Teaching: 17 years" },
            { n: "Dr. A V Narayan", u: "https://rvce.edu.in/department/biotechnology/dr_a_v_narayan/", d: "Associate Professor", e: "19 Years" },
            { n: "Dr. Ashwani Sharma", u: "https://rvce.edu.in/department/biotechnology/dr_ashwani_sharma/", d: "Assistant Professor", e: "19 Years" }
        ],
        ch: [
            { n: "Dr. Jagadish H Patil", u: "https://rvce.edu.in/department/chemical_engineering/dr_jagadish_h_patil/", d: "Associate Professor and Head", e: "22 years" },
            { n: "Dr. D. Ranganath", u: "https://rvce.edu.in/department/chemical_engineering/dr_d_ranganath/", d: "Professor and Dean Placement", e: "29 years" },
            { n: "Dr. Vinod Kallur", u: "https://rvce.edu.in/department/chemical_engineering/dr_vinod_kallur/", d: "Associate Professor", e: "24 years" },
            { n: "Dr. Basavaraja R. J.", u: "https://rvce.edu.in/department/chemical_engineering/dr_basavaraja_r_j/", d: "Associate Professor", e: "17 years" },
            { n: "Dr. Vidya C.", u: "https://rvce.edu.in/department/chemical_engineering/dr_vidya_c/", d: "Assistant Professor", e: "14 years" },
            { n: "Dr. Rajalakshmi Mudbidre", u: "https://rvce.edu.in/department/chemical_engineering/dr_rajalakshmi_mudbidre/", d: "Assistant Professor and Associate Dean", e: "14 years" },
            { n: "Dr. Ujwal Shreenag Meda", u: "https://rvce.edu.in/department/chemical_engineering/dr_ujwal_shreenag_meda/", d: "Assistant Professor", e: "10 years" },
            { n: "Dr. Manjula Sarode", u: "https://rvce.edu.in/department/chemical_engineering/dr_manjula_sarode/", d: "Assistant Professor", e: "11 years" },
            { n: "Dr. Vinutha Moses", u: "https://rvce.edu.in/department/chemical_engineering/vinutha_moses/", d: "Assistant Professor", e: "16 years" },
            { n: "Dr. P L Muralidhara", u: "https://rvce.edu.in/department/chemical_engineering/dr_p_l_muralidhara/", d: "Assistant Professor", e: "28 years" },
            { n: "Dr. Anupama V. Joshi", u: "https://rvce.edu.in/department/chemical_engineering/anupama_v_joshi/", d: "Assistant Professor", e: "7 years" }
        ],
        chy: [
            { n: "Dr. Mahesh R", u: "https://rvce.edu.in/department/chemistry/dr_mahesh_r/", d: "Associate Professor", e: "24 Years" },
            { n: "Dr. Raviraj Kusanur", u: "https://rvce.edu.in/department/chemistry/raviraj_a_k/", d: "Professor", e: "14 Years" },
            { n: "Dr. Swarna M. Patra", u: "https://rvce.edu.in/department/chemistry/dr_swarna_mayee_patra/", d: "Associate Professor", e: "13 Years" },
            { n: "Dr. C. Manjunatha", u: "https://rvce.edu.in/department/chemistry/dr_manjunatha_c/", d: "Associate Professor", e: "16 Years" },
            { n: "Dr. Divakara S. G.", u: "https://rvce.edu.in/department/chemistry/divakara-s-g/", d: "Associate Professor", e: "19 Years" },
            { n: "Dr. Sham Aan M. P.", u: "https://rvce.edu.in/department/chemistry/sham_aan_m_p/", d: "Assistant Professor", e: "10.5 Years" },
            { n: "Dr. M. Sridharan", u: "https://rvce.edu.in/department/chemistry/dr_sridharan_m/", d: "Assistant Professor", e: "8 Years" },
            { n: "Dr. Vishnumurthy K. A", u: "https://rvce.edu.in/department/chemistry/dr_vishnumurthy_k_a/", d: "Assistant Professor", e: "11 Years" },
            { n: "Dr. Swetha S. M.", u: "https://rvce.edu.in/department/chemistry/dr_swetha_s_m/", d: "Assistant Professor", e: "2 Year" },
            { n: "Dr. Rita Hemanth Shankar", u: "https://rvce.edu.in/department/chemistry/dr_rita_hemanth_shankar/", d: "Assistant Professor", e: "7.5 years" },
            { n: "Dr. Radha N", u: "https://rvce.edu.in/department/chemistry/dr-radha-n/", d: "Assistant Professor", e: "Not specified" }
        ],
        cv: [
            { n: "Dr. Anjaneyappa", u: "https://rvce.edu.in/department/civil_engineering/civil-faculty-bio/", d: "Professor and Head", e: "21 Years" },
            { n: "Dr. Radhakrishna", u: "https://rvce.edu.in/department/civil_engineering/dr-radhakrishna/", d: "Professor & PG Dean (Non-Circuit)", e: "31 Years" },
            { n: "Dr. M. V. Renukadevi", u: "https://rvce.edu.in/department/civil_engineering/dr_m_v_renukadevi/", d: "Professor", e: "31 years" },
            { n: "Dr. B. C. Udayashankar", u: "https://rvce.edu.in/department/civil_engineering/dr-b-c-udayashankar/", d: "Professor", e: "33 Years" },
            { n: "Dr. M. S. Nagakumar", u: "https://rvce.edu.in/department/civil_engineering/dr-m-s-nagakumar/", d: "Professor", e: "31 Years" },
            { n: "Dr. V. Anantharama", u: "https://rvce.edu.in/department/civil_engineering/dr_v_anantharama/", d: "Associate Professor", e: "26 Years" },
            { n: "Dr. Vinod A. R.", u: "https://rvce.edu.in/department/civil_engineering/dr_vinod_a_r/", d: "Associate Professor", e: "18 Years" },
            { n: "Dr. M. Lokeshwari", u: "https://rvce.edu.in/department/civil_engineering/dr_m_lokeshwari/", d: "Associate Professor", e: "18 Years" },
            { n: "Dr. T. Raghavendra", u: "https://rvce.edu.in/department/civil_engineering/dr_t_raghavendra/", d: "Associate Professor", e: "18 years" },
            { n: "Dr. S. Nethravathi", u: "https://rvce.edu.in/department/civil_engineering/dr_s_nethravathi/", d: "Associate Professor", e: "16 Years" },
            { n: "Dr. L. Durga Prashanth", u: "https://rvce.edu.in/department/civil_engineering/dr-l-durga-prashanth/", d: "Associate Professor", e: "13 years" },
            { n: "Dr. M. Varuna", u: "https://rvce.edu.in/department/civil_engineering/dr_m_varuna/", d: "Assistant Professor", e: "14 years" },
            { n: "Dr. Sindhu D", u: "https://rvce.edu.in/department/civil_engineering/dr-sindhu-d/", d: "Assistant Professor", e: "13 years" },
            { n: "Dr. Sunil S", u: "https://rvce.edu.in/department/civil_engineering/dr-sunil-s/", d: "Assistant Professor", e: "13 Years" },
            { n: "Dr. Praveen Kumar K", u: "https://rvce.edu.in/department/civil_engineering/dr-praveen-kumar-k/", d: "Assistant Professor", e: "13 Years 6 months" },
            { n: "Dr. K. Gajalakshmi", u: "https://rvce.edu.in/department/civil_engineering/dr-k-gajalakshmi/", d: "Assistant Professor", e: "13 Years 6 months" },
            { n: "Dr. Somanath. M. Basutkar", u: "https://rvce.edu.in/department/civil_engineering/dr_somanath_m_basutkar/", d: "Assistant Professor", e: "4 years" },
            { n: "Dr. Venugopal. G", u: "https://rvce.edu.in/department/civil_engineering/dr-venugopal-g/", d: "Assistant Professor", e: "4 years" },
            { n: "Dr. Vikas Mendi", u: "https://rvce.edu.in/department/civil_engineering/dr_vikas_mendi/", d: "Assistant Professor", e: "6 years" },
            { n: "Ram Thilak", u: "https://rvce.edu.in/department/civil_engineering/ram-thilak/", d: "Assistant Professor", e: "7 years" },
            { n: "Dr. Vageesh H P", u: "https://rvce.edu.in/department/civil_engineering/vageesh_h_p/", d: "Assistant Professor", e: "10 years" },
            { n: "Ravikiran S Wali", u: "https://rvce.edu.in/department/civil_engineering/ravikiran_s_wali/", d: "Assistant Professor", e: "9 years" },
            { n: "Dr. Shrithi S Badami", u: "https://rvce.edu.in/department/civil_engineering/shrithi-s-badami/", d: "Assistant Professor", e: "9 Years" },
            { n: "Dr. Shashi Kiran C R", u: "https://rvce.edu.in/department/civil_engineering/shashi_kiran_c_r/", d: "Assistant Professor", e: "10 Years" },
            { n: "Gowtham Prasad M E", u: "https://rvce.edu.in/department/civil_engineering/gowtham_prasad_m_e/", d: "Assistant Professor", e: "8 years" },
            { n: "Ashwin Thammaiah K", u: "https://rvce.edu.in/department/civil_engineering/ashwin_thammaiah_k/", d: "Assistant Professor", e: "8 years" },
            { n: "Dr. K. Madhavi", u: "https://rvce.edu.in/department/civil_engineering/dr_k_madhavi/", d: "Assistant Professor", e: "17 Years" },
            { n: "Dr. M. R. Archana", u: "https://rvce.edu.in/department/civil_engineering/dr_m_r_archana/", d: "Assistant Professor", e: "12 years" }
        ],
        cs: [
            { n: "Dr. Ramakanth Kumar P", u: "https://rvce.edu.in/department/cse/dr_ramakanth_kumar_p/", d: "Professor & Dean (CSE cluster)", e: "31 years" },
            { n: "Dr. Shanta Rangaswamy", u: "https://rvce.edu.in/department/cse/dr_shanta_rangaswamy/", d: "Professor & Head", e: "24 years" },
            { n: "Dr. Vinay Hegde", u: "https://rvce.edu.in/department/cse/dr_vinay_hegde/", d: "Professor", e: "19 years" },
            { n: "Dr. Hemavathy R.", u: "https://rvce.edu.in/department/cse/dr_hemavathy_r/", d: "Professor", e: "23 years" },
            { n: "Dr. Krishnappa H K", u: "https://rvce.edu.in/department/cse/dr_krishnappa_h_k/", d: "Professor", e: "25 years" },
            { n: "Dr. Sowmyarani C N", u: "https://rvce.edu.in/department/cse/dr-sowmyarani-c-n/", d: "Professor", e: "14 years" },
            { n: "Dr. Rajashree Shettar", u: "https://rvce.edu.in/department/cse/dr-rajashree-shettar/", d: "Professor", e: "27 years" },
            { n: "Dr. G. S. Nagaraja", u: "https://rvce.edu.in/department/cse/dr-g-s-nagaraja/", d: "Professor", e: "30 years" },
            { n: "Dr. Minal Moharir", u: "https://rvce.edu.in/department/cse/dr-minal-moharir/", d: "Professor & Programme Coordinator", e: "Not specified" },
            { n: "Dr. Soumya A.", u: "https://rvce.edu.in/department/cse/dr_soumya_a/", d: "Professor & Program Coordinator", e: "21 years" },
            { n: "Dr. Deepamala N", u: "https://rvce.edu.in/department/cse/dr_deepamala_n/", d: "Professor", e: "15 years" },
            { n: "Dr. Azra Nasreen", u: "https://rvce.edu.in/department/cse/dr_azra_nasreen/", d: "Associate Professor", e: "20 years" },
            { n: "Dr. Pratiba D", u: "https://rvce.edu.in/department/cse/dr-pratiba-d/", d: "Associate Professor", e: "17 years" },
            { n: "Dr. Praveena T", u: "https://rvce.edu.in/department/cse/dr-praveena-t/", d: "Associate Professor", e: "18 years" },
            { n: "Dr. K. Badari Nath", u: "https://rvce.edu.in/department/cse/dr_k_badari_nath/", d: "Associate Professor", e: "13 years" },
            { n: "Dr. Chethana R. Murthy", u: "https://rvce.edu.in/department/cse/dr-chethana-r-murthy/", d: "Associate Professor", e: "16 years" },
            { n: "Dr. Pavithra H", u: "https://rvce.edu.in/department/cse/dr-pavithra-h/", d: "Associate Professor", e: "14 years" },
            { n: "Dr. Prapulla S B", u: "https://rvce.edu.in/department/cse/dr-prapulla-s-b/", d: "Associate Professor", e: "17 years" },
            { n: "Dr. Sneha M", u: "https://rvce.edu.in/department/cse/dr_sneha_m/", d: "Associate Professor", e: "11 years" },
            { n: "Dr. Smriti Srivastava", u: "https://rvce.edu.in/department/cse/dr_smriti_srivastava/", d: "Associate Professor", e: "13 years" },
            { n: "Dr. Veena Gadad", u: "https://rvce.edu.in/department/cse/dr-veena-gadad/", d: "Associate Professor", e: "12 years" },
            { n: "Dr. Mohana", u: "https://rvce.edu.in/department/cse/dr_mohana/", d: "Associate Professor", e: "18 years" },
            { n: "Dr. Sandhya S.", u: "https://rvce.edu.in/department/cse/dr_sandhya_s/", d: "Associate Professor", e: "19 years" },
            { n: "Dr. Manas M N", u: "https://rvce.edu.in/department/cse/dr-manas-m-n/", d: "Associate Professor", e: "8 years" },
            { n: "Dr. Manonmani S.", u: "https://rvce.edu.in/department/cse/dr-manonmani-s/", d: "Assistant Professor", e: "13 years" },
            { n: "Dr. Deepika Dash", u: "https://rvce.edu.in/department/cse/prof-deepika-dash/", d: "Assistant Professor", e: "13 years" },
            { n: "Dr. Anitha Sandeep", u: "https://rvce.edu.in/department/cse/dr_anitha_sandeep/", d: "Assistant Professor", e: "21+ years" },
            { n: "Dr. Apoorva Udaya Kumar Chate", u: "https://rvce.edu.in/department/cse/prof_apoorva_udaya_kumar_chate/", d: "Assistant Professor", e: "1.5 year" },
            { n: "Prof. Rajatha", u: "https://rvce.edu.in/department/cse/prof_rajatha/", d: "Assistant Professor", e: "7 years" },
            { n: "Dr. Savitri Kulkarni", u: "https://rvce.edu.in/department/cse/prof_savitri_kulkarni/", d: "Assistant Professor", e: "14.5 years" },
            { n: "Dr. Karanam Sunil Kumar", u: "https://rvce.edu.in/department/cse/dr-karanam-sunil-kumar/", d: "Assistant Professor", e: "18 years" },
            { n: "Prof. Saraswathi Govind Datard", u: "https://rvce.edu.in/department/cse/prof-saraswathi-govind-datard/", d: "Assistant Professor", e: "3 years" },
            { n: "Prof. Mekhala Vinod Purohit", u: "https://rvce.edu.in/department/cse/prof_mekhala_vinod_purohit/", d: "Assistant Professor", e: "6 months" },
            { n: "Prof. Deepthi L.", u: "https://rvce.edu.in/department/cse/prof-deepthi-l/", d: "Assistant Professor", e: "9 Years" },
            { n: "Dr. Sahana D. Shejwadkar", u: "https://rvce.edu.in/department/cse/sahana-d-shejwadkar/", d: "Assistant Professor", e: "1 Month" },
            { n: "Sanjana Ravindra Otihal", u: "https://rvce.edu.in/department/cse/sanjana-ravindra-otihal/", d: "Assistant Professor", e: "1 Month" },
            { n: "Dr. Jyoti Shetty", u: "https://rvce.edu.in/department/cse/dr-jyoti-shetty/", d: "Associate Professor", e: "16 years" },
            { n: "Dr. Suma B.", u: "https://rvce.edu.in/department/cse/dr_suma_b/", d: "Associate Professor", e: "22 Years" },
            { n: "Dr. Sindhu D V", u: "https://rvce.edu.in/department/cse/dr_sindhu_d_v/", d: "Assistant Professor", e: "5 years" },
            { n: "Prof. Nithyashree G D", u: "https://rvce.edu.in/department/cse/prof_nithyashree_g_d/", d: "Assistant Professor", e: "2 year" },
            { n: "Prof. Shweta Babu Prasad", u: "https://rvce.edu.in/department/cse/prof_shweta_babu_prasad/", d: "Assistant Professor", e: "1 year" },
            { n: "Dr. Srividya M. S.", u: "https://rvce.edu.in/department/cse/dr_srividya_m_s/", d: "Associate Professor", e: "Industry: 8 Years, Teaching: 13 Years" },
            { n: "Prof. L. Kala Chandrashekhar", u: "https://rvce.edu.in/department/cse/prof_l_kala_chandrashekhar/", d: "Assistant Professor", e: "17 year" },
            { n: "Prof. Ganashree K C", u: "https://rvce.edu.in/department/cse/prof-ganashree-k-c/", d: "Assistant Professor", e: "18 years" }
        ],
        ee: [
            { n: "Dr. S G Srivani", u: "https://rvce.edu.in/department/eee/dr_s_g_srivani_bio/", d: "Professor (Fixed Term)", e: "Teaching & Research: 39 years | Industry : 6 months" },
            { n: "Dr. Hemalatha J.N.", u: "https://rvce.edu.in/department/eee/dr_hemalatha_j_n/", d: "Associate Professor", e: "Teaching: 22 Years" },
            { n: "Dr. Adinatha Jain", u: "https://rvce.edu.in/department/eee/dr_adinatha_jain/", d: "Associate Professor", e: "Teaching: 22 Years , Industry: 5 years" },
            { n: "Dr. Rachana S. Akki", u: "https://rvce.edu.in/department/eee/dr_rachana_s_akki/", d: "Associate Professor", e: "Teaching: 18 Years , Industry: 7 Years" },
            { n: "Dr. C. Sunanda", u: "https://rvce.edu.in/department/eee/dr_c_sunanda/", d: "Assistant Professor", e: "Teaching: 22 years" },
            { n: "Dr. Suresh C", u: "https://rvce.edu.in/department/eee/dr_suresh_c/", d: "Assistant Professor", e: "Teaching: 20 years" },
            { n: "Dr. Ajay K.M.", u: "https://rvce.edu.in/department/eee/dr_ajay_k_m/", d: "Assistant Professor", e: "Teaching: 13 Years" },
            { n: "Dr. Madhu B.R.", u: "https://rvce.edu.in/department/eee/dr_madhu_b_r/", d: "Assistant Professor", e: "Teaching: 17 Years" },
            { n: "Dr. Sushmita Sarkar", u: "https://rvce.edu.in/department/eee/dr_sushmita_sarkar/", d: "Assistant Professor", e: "Teaching: 14 Years" },
            { n: "Raja Vidya", u: "https://rvce.edu.in/department/eee/raja_vidya/", d: "Assistant Professor", e: "Teaching – 12.5 Years , Industry – 04 years" },
            { n: "Dr. Parth Sarathi Panigrahy", u: "https://rvce.edu.in/department/eee/dr_parth_sarathi_panigrahy/", d: "Assistant Professor", e: "8.8 years" },
            { n: "Dr. Pandry Narendra Rao", u: "https://rvce.edu.in/department/eee/dr_pandry_narendra_rao/", d: "Assistant Professor", e: "Teaching & Research: 9 years , Industry : 3 Years" },
            { n: "Dr. Abhilash Krishna D G", u: "https://rvce.edu.in/department/eee/dr_abhilash_krishna_d_g/", d: "Assistant Professor", e: "02 Years" }
        ],
        ec: [
            { n: "Dr. H. V. Ravish Aradhya", u: "https://rvce.edu.in/department/ece/dr_h_v_ravish_aradhya/", d: "Professor & HoD", e: "34 years" },
            { n: "Dr. K. S. Geetha", u: "https://rvce.edu.in/department/ece/dr_k_s_geetha/", d: "Professor and Vice-Principal", e: "34 years" },
            { n: "Dr. M. Uttara Kumari", u: "https://rvce.edu.in/department/ece/dr_m_uttara_kumari/", d: "Professor & Dean (R&D)", e: "22 years" },
            { n: "Dr. Prakash Biswagar", u: "https://rvce.edu.in/department/ece/dr_prakash_biswagar/", d: "Professor", e: "30 years" },
            { n: "Dr. Ramesh K B", u: "https://rvce.edu.in/department/ece/dr_ramesh_k_b/", d: "Associate Professor", e: "Not specified" },
            { n: "Dr. Veena Devi", u: "https://rvce.edu.in/department/ece/dr_veena_devi/", d: "Associate Professor", e: "20 years" },
            { n: "Dr. Govinda Raju M", u: "https://rvce.edu.in/department/ece/dr_govinda_raju_m/", d: "Associate Professor", e: "15 Years" },
            { n: "Dr. Mahesh A", u: "https://rvce.edu.in/department/ece/dr_mahesh_a/", d: "Associate Professor", e: "16 years" },
            { n: "Dr. Shilpa D. R.", u: "https://rvce.edu.in/department/ece/dr_shilpa_d_r/", d: "Associate Professor & Assoc. Dean(P&T)", e: "10 years" },
            { n: "Dr. Abhay A. Deshpande", u: "https://rvce.edu.in/department/ece/dr_abhay_a_deshpande/", d: "Associate Professor", e: "8 years" },
            { n: "Dr. Chethana G", u: "https://rvce.edu.in/department/ece/dr_chethana_g/", d: "Assistant Professor", e: "12 years" },
            { n: "Dr. Sujata D. Badiger", u: "https://rvce.edu.in/department/ece/dr_sujata_d_badiger/", d: "Assistant Professor", e: "20 Years" },
            { n: "Dr. Rohini S. Hallikar", u: "https://rvce.edu.in/department/ece/dr_rohini_s_hallikar/", d: "Assistant Professor", e: "20 Years" },
            { n: "Dr. Sujatha Hiremath", u: "https://rvce.edu.in/department/ece/dr_sujatha_hiremath/", d: "Assistant Professor", e: "20 years" },
            { n: "Dr. Deepashree Devaraj", u: "https://rvce.edu.in/department/ece/dr-deepashree-devaraj/", d: "Assistant Professor (Selection Grade)", e: "Not specified" },
            { n: "Dr. Rajani Katiyar", u: "https://rvce.edu.in/department/ece/dr_rajani_katiyar/", d: "Assistant Professor", e: "Teaching: 20 Years" },
            { n: "Dr. K. A. Nethravathi", u: "https://rvce.edu.in/department/ece/dr_k_a_nethravathi/", d: "Assistant Professor(Selection Grade)", e: "Teaching: 18 Years." },
            { n: "Dr. Harsha H", u: "https://rvce.edu.in/department/ece/dr_harsha/", d: "Assistant Professor", e: "Teaching: 17 Years." },
            { n: "Dr. Ramavenkateswaran N", u: "https://rvce.edu.in/department/ece/dr_ramavenkateswaran_n/", d: "Assistant Professor (Selection Grade)", e: "Teaching: 16 Years Industry: 2 Years" },
            { n: "Dr. Roopa J", u: "https://rvce.edu.in/department/ece/dr_roopa_j/", d: "Assistant Professor", e: "Teaching: 16 Years , Industry: 2 Years , Research: 10 Years" },
            { n: "P Narashimaraja", u: "https://rvce.edu.in/department/ece/p_narashimaraja/", d: "Assistant Professor", e: "Teaching: 18 Years" },
            { n: "Dr. Veena Divya Krishnappa", u: "https://rvce.edu.in/department/ece/veena_divya_krishnappa/", d: "Assistant Professor", e: "Teaching: 16 yrs; Industry: 02 yrs; Research: 09 yrs" }
        ],
        ei: [
            { n: "Dr. Padmaja K V", u: "https://rvce.edu.in/department/eim/dr_padmaja_k_v/", d: "Professor and Associate Dean- IT", e: "33 yrs" },
            { n: "Dr. Prasanna Kumar S. C.", u: "https://rvce.edu.in/department/eim/dr_prasanna_kumar_s_c/", d: "Professor", e: "26yrs" },
            { n: "Prof. Venkatesh S", u: "https://rvce.edu.in/department/eim/prof_venkatesh_s/", d: "Associate Professor", e: "35 yrs" },
            { n: "Dr. K. B. Ramesh", u: "https://rvce.edu.in/department/eim/dr_k_b_ramesh/", d: "Associate Professor", e: "30yrs" },
            { n: "Dr. Anand Jatti", u: "https://rvce.edu.in/department/eim/dr_anand_jatti/", d: "Associate Professor", e: "22 yrs" },
            { n: "Dr. Sudarshan B. G.", u: "https://rvce.edu.in/department/eim/dr_sudarshan_b_g/", d: "Associate Professor", e: "20 yrs" },
            { n: "Dr. Rachana S. Akki", u: "https://rvce.edu.in/department/eim/dr_rachana_s_akki/#", d: "Assistant Professor", e: "18 yrs" },
            { n: "Dr. Deepashree Devaraj", u: "https://rvce.edu.in/department/eim/dr_deepashree_devaraj/", d: "Assistant Professor", e: "21 yrs" },
            { n: "Dr. Tabitha Janumala", u: "https://rvce.edu.in/department/eim/dr_tabitha_janumala/", d: "Assistant Professor", e: "17 yrs" },
            { n: "Dr. Rajasree P.M.", u: "https://rvce.edu.in/department/eim/dr_rajasree_p_m/", d: "Assistant Professor", e: "13 yrs" },
            { n: "Dr. Kendaganna Swamy S", u: "https://rvce.edu.in/department/eim/dr_kendaganna_swamy_s/", d: "Assistant Professor", e: "13 yrs" }
        ],
        et: [
            { n: "Dr. Nagamani K", u: "https://rvce.edu.in/department/etc/dr_nagamani_k_bio/", d: "Professor and Head", e: "21 Years" },
            { n: "Dr. H.V. Kumaraswamy", u: "https://rvce.edu.in/department/etc/dr_h_v_kumaraswamy/", d: "Professor", e: "30 Years" },
            { n: "Dr. K. Sreelakshmi", u: "https://rvce.edu.in/department/etc/dr_k_sreelakshmi/", d: "Professor & PG Dean Studies (Circuit Branches)", e: "28 yrs" },
            { n: "Dr. P. Nagaraju", u: "https://rvce.edu.in/department/etc/dr_p_nagaraju/", d: "Associate Professor & Associate Dean PG Studies", e: "30 Years" },
            { n: "Dr. B. Roja Reddy", u: "https://rvce.edu.in/department/etc/dr_b_roja_reddy/", d: "Associate Professor", e: "22 yrs" },
            { n: "Dr. Premananda B S", u: "https://rvce.edu.in/department/etc/dr_premananda_b_s/", d: "Associate Professor", e: "22 Yrs" },
            { n: "Dr. Bhagya R", u: "https://rvce.edu.in/department/etc/dr_bhagya_r/", d: "Associate Professor", e: "16 Years" },
            { n: "Dr. Shanthi P", u: "https://rvce.edu.in/department/etc/dr_shanthi_p/", d: "Associate Professor", e: "26 Yrs" },
            { n: "Dr. Usha Padma", u: "https://rvce.edu.in/department/etc/dr_usha_padma/", d: "Assistant Professor", e: "19 Years" },
            { n: "Prof. T.P. Mithun", u: "https://rvce.edu.in/department/etc/prof_t_p_mithun/", d: "Assistant Professor", e: "15 Yrs" },
            { n: "Dr. Shambulinga M", u: "https://rvce.edu.in/department/etc/dr_shambulinga_m/", d: "Assistant Professor", e: "12 yrs" },
            { n: "Dr. Sandya H B", u: "https://rvce.edu.in/department/etc/dr_sandya_h_b/", d: "Assistant Professor", e: "12 yrs" },
            { n: "Prof. N.N. Nagendra", u: "https://rvce.edu.in/department/etc/prof_nagendra_n_n/", d: "Assistant Professor", e: "10 yrs" },
            { n: "Prof. Mahalakshmi M. N.", u: "https://rvce.edu.in/department/etc/prof_mahalakshmi_m_n/", d: "Assistant Professor", e: "10Yrs" },
            { n: "Prof. Rakesh K.R", u: "https://rvce.edu.in/department/etc/prof_rakesh_k_r/", d: "Assistant Professor", e: "7 Years" },
            { n: "Dr. K. Saraswathi", u: "https://rvce.edu.in/department/etc/dr_k_saraswathi/", d: "Associate Professor", e: "19 Years" },
            { n: "Dr. Ranjani G", u: "https://rvce.edu.in/department/etc/dr_ranjani_g/", d: "Assistant Professor", e: "19 Years" }
        ],
        im: [
            { n: "Dr. Rajeswara Rao K V S", u: "https://rvce.edu.in/department/iem/dr_rajeswara_rao_k_v_s/", d: "Associate Professor & HoD", e: "Teaching: 26 years, Industry : 2 years" },
            { n: "Dr. K N Subramanya", u: "https://rvce.edu.in/department/iem/dr_k_n_subramanya/", d: "Professor & Principal", e: "Teaching : 31, Research :11" },
            { n: "Dr. C K Nagendra Gupta", u: "https://rvce.edu.in/department/iem/dr_c_k_nagendra_gupta/", d: "Professor", e: "Teaching: 28 Years, Industry : 05 years" },
            { n: "Dr M N Vijaya Kumar", u: "https://rvce.edu.in/department/iem/dr_m_n_vijaya_kumar/", d: "Associate Professor", e: "Teaching: 19 years, Industry : 2 years" },
            { n: "Dr. Ramaa A", u: "https://rvce.edu.in/department/iem/dr_ramaa_a/", d: "Associate Professor & Associate Dean Placement & Training", e: "Teaching: 20 years" },
            { n: "Dr. Shobha N S", u: "https://rvce.edu.in/department/iem/dr_shobha_n_s/", d: "Assistant Professor", e: "Teaching: 21 years" },
            { n: "Dr. Vivekanand S. Gogi", u: "https://rvce.edu.in/department/iem/dr_vivekanand_s_gogi/", d: "Assistant Professor", e: "24 years" },
            { n: "Dr Vikram N Bahadurdesai", u: "https://rvce.edu.in/department/iem/dr_vikram_n_bahadurdesai/", d: "Assistant Professor", e: "Teaching: 18 years, Industry 01 year." },
            { n: "Dr Chitra B T", u: "https://rvce.edu.in/department/iem/dr_chitra_b_t/", d: "Assistant Professor", e: "Teaching: 15 years" },
            { n: "Dr Bindu Ashwini C.", u: "https://rvce.edu.in/department/iem/dr_bindu_ashwini_c/", d: "Assistant Professor", e: "24 Years" },
            { n: "Prof Shruthi M N", u: "https://rvce.edu.in/department/iem/prof_shruthi_m_n/", d: "Assistant Professor", e: "17 years" },
            { n: "Prof B. Nandini", u: "https://rvce.edu.in/department/iem/prof_b_nandini/", d: "Assistant Professor", e: "Teaching: 16 years" },
            { n: "Prof Bhaskar M G", u: "https://rvce.edu.in/department/iem/prof_bhaskar_m_g/", d: "Assistant Professor", e: "Industry: 1 Year, Teaching: 11 Year" },
            { n: "Dr N. S. Narahari", u: "https://rvce.edu.in/department/iem/n_s_narahari/", d: "Visiting Professor", e: "Teaching: 35 years" }
        ],
        is: [
            { n: "Dr. G. S. Mamatha", u: "https://rvce.edu.in/department/ise/dr_g_s_mamatha/", d: "Professor and HoD", e: "20 Years" },
            { n: "Dr. B. M. Sagar", u: "https://rvce.edu.in/department/ise/dr_b_m_sagar/", d: "Professor & Dean Student Affairs", e: "21 Years" },
            { n: "Dr Ashwini K. B.", u: "https://rvce.edu.in/department/ise/dr_ashwini_k_b/", d: "Associate Professor", e: "17 years" },
            { n: "Dr Vanishree K.", u: "https://rvce.edu.in/department/ise/dr_vanishree_k/", d: "Associate Professor", e: "16 years" },
            { n: "Dr Merin Meleet", u: "https://rvce.edu.in/department/ise/dr_merin_meleet/", d: "Associate Professor", e: "17 years" },
            { n: "Dr S. G. Raghavendra Prasad", u: "https://rvce.edu.in/department/ise/s_g_raghavendra_prasad/", d: "Assistant Professor", e: "20 Years" },
            { n: "Dr Rekha B. S.", u: "https://rvce.edu.in/department/ise/rekha_b_s/", d: "Assistant Professor", e: "15 years" },
            { n: "Dr Swetha S.", u: "https://rvce.edu.in/department/ise/swetha_s/", d: "Assistant Professor", e: "13 years" },
            { n: "B K Srinivas", u: "https://rvce.edu.in/department/ise/b_k_srinivas/", d: "Assistant Professor", e: "11 years" },
            { n: "Dr Sushmitha N.", u: "https://rvce.edu.in/department/ise/sushmitha_n/", d: "Assistant Professor", e: "17 years" },
            { n: "Dr Kavitha S. N.", u: "https://rvce.edu.in/department/ise/dr_kavitha_s_n/", d: "Associate Professor", e: "17Years" },
            { n: "Dr Rashmi R", u: "https://rvce.edu.in/department/ise/rashmi_r/", d: "Assistant Professor", e: "18 years" },
            { n: "Dr Anala M. R.", u: "https://rvce.edu.in/department/ise/dr_anala_m_r/", d: "Professor", e: "20 years" },
            { n: "Dr Padmashree T", u: "https://rvce.edu.in/department/ise/dr_padmashree_t/", d: "Associate Professor", e: "17 years" },
            { n: "Dr Poornima Kulkarni", u: "https://rvce.edu.in/department/ise/poornima_kulkarni/", d: "Assistant Professor", e: "10 Years" }
        ],
        mat: [
            { n: "Dr. G. Jayalatha", u: "https://rvce.edu.in/department/maths/dr_g_jayalatha/", d: "Professor and HoD", e: "20 Years" },
            { n: "Dr. Neeti Ghiya", u: "https://rvce.edu.in/department/maths/dr_neeti_ghiya/", d: "Professor", e: "20 Years" },
            { n: "Dr. C. Nandeesh Kumar", u: "https://rvce.edu.in/department/maths/dr_c_nandeesh_kumar/", d: "Associate Professor", e: "25 Years" },
            { n: "Dr. Savithri Shashidhar", u: "https://rvce.edu.in/department/maths/dr_savithri_shashidhar/", d: "Associate Professor", e: "20 Years" },
            { n: "Dr. Prakash R", u: "https://rvce.edu.in/department/maths/dr_prakash_r/", d: "Associate Professor", e: "19 Years" },
            { n: "Dr. Sowmya M", u: "https://rvce.edu.in/department/maths/dr_sowmya_m/", d: "Associate Professor", e: "21 Years" },
            { n: "Dr. Satish V. Motammanavar", u: "https://rvce.edu.in/department/maths/dr_satish_v_motammanavar/", d: "Associate Professor", e: "09 Years" },
            { n: "Dr. Y. Sailaja", u: "https://rvce.edu.in/department/maths/dr_y_sailaja/", d: "Assistant Professor", e: "23 Years" },
            { n: "Dr. Sujatha A.", u: "https://rvce.edu.in/department/maths/dr_sujatha_a/", d: "Assistant Professor", e: "20 Years" },
            { n: "Dr. Vidya Patil", u: "https://rvce.edu.in/department/maths/dr_vidya_patil/", d: "Assistant Professor", e: "18 Years" },
            { n: "Dr. Nivya Muchikel", u: "https://rvce.edu.in/department/maths/dr_nivya_muchikel/", d: "Assistant Professor", e: "21 Years" },
            { n: "Dr. Ravi K. M", u: "https://rvce.edu.in/department/maths/dr_ravi_k_m/", d: "Assistant Professor", e: "21 Years" },
            { n: "P. L. Rajashekhar", u: "https://rvce.edu.in/department/maths/mr_p_l_rajashekhar/", d: "Assistant Professor", e: "18 Years" },
            { n: "Dr. Harish M", u: "https://rvce.edu.in/department/maths/dr_harish_m/", d: "Assistant Professor", e: "10 Years" },
            { n: "Dr. Suman N P", u: "https://rvce.edu.in/department/maths/dr_suman_n_p/", d: "Assistant Professor", e: "8 Years" },
            { n: "Dr. Kiran Kumar D L", u: "https://rvce.edu.in/department/maths/dr_kiran_kumar_d_l/", d: "Assistant Professor", e: "5 Years" },
            { n: "Dr. Venugopal K", u: "https://rvce.edu.in/department/maths/dr_venugopal_k/", d: "Assistant Professor", e: "8 Years" },
            { n: "Dr. Niranjan P. K.", u: "https://rvce.edu.in/department/maths/dr_niranjan_p_k/", d: "Assistant Professor", e: "6.5 Years" },
            { n: "Dr. Suma N Manjunath", u: "https://rvce.edu.in/department/maths/dr_suma_n_manjunath/", d: "Assistant Professor", e: "17 Years" },
            { n: "Dr. Prasanna Kumar T", u: "https://rvce.edu.in/department/maths/dr_prasanna_kumar_t/", d: "Assistant Professor", e: "15 Years" },
            { n: "Dr. Sakshath T n", u: "https://rvce.edu.in/department/maths/dr_sakshath_t_n/", d: "Assistant Professor", e: "07 Years" },
            { n: "Dr. Hemanthkumar B", u: "https://rvce.edu.in/department/maths/dr_hemanthkumar_b/", d: "Assistant Professor", e: "12 Years" },
            { n: "Dr. Kirthiga M", u: "https://rvce.edu.in/department/maths/dr_kirthiga_m/", d: "Assistant Professor", e: "5 Years" },
            { n: "Dr. Vyshnavi D", u: "https://rvce.edu.in/department/maths/dr_vyshnavi_d/", d: "Assistant Professor", e: "6 months" }
        ],
        mca: [
            { n: "Dr Jasmine K. S.", u: "https://rvce.edu.in/department/mca/dr_jasmine_k_s_bio/", d: "Associate Professor and Director", e: "28 Years" },
            { n: "Dr Usha J.", u: "https://rvce.edu.in/department/mca/dr_usha_j/", d: "Professor", e: "26 years" },
            { n: "Dr Andhe Dharani", u: "https://rvce.edu.in/department/mca/dr_andhe_dharani/", d: "Professor", e: "23 Years" },
            { n: "Dr B. Renuka Prasad", u: "https://rvce.edu.in/department/mca/dr_b_renuka_prasad/", d: "Associate Professor", e: "21 Years" },
            { n: "Dr B. H. Chandrashekar", u: "https://rvce.edu.in/department/mca/dr_b_h_chandrashekar/", d: "Associate Professor", e: "Teaching: 19 Years, Technical: 15 Years" },
            { n: "Dr Deepika K", u: "https://rvce.edu.in/department/mca/dr_deepika_k/", d: "Associate Professor", e: "Teaching: 12 Years" },
            { n: "Dr Mohan Aradhya", u: "https://rvce.edu.in/department/mca/dr_mohan_aradhya/", d: "Assistant Professor", e: "Teaching: 18 Years" },
            { n: "Dr Divya T. L.", u: "https://rvce.edu.in/department/mca/dr_divya_t_l/", d: "Assistant Professor", e: "Teaching: 17 Years" },
            { n: "Prof Saravanan C", u: "https://rvce.edu.in/department/mca/prof_saravanan_c/", d: "Assistant Professor", e: "Teaching: 17 Years" },
            { n: "Prof Chandrani Chakravorty", u: "https://rvce.edu.in/department/mca/prof_chandrani_chakravorty/", d: "Assistant Professor", e: "Teaching: 16 Years" },
            { n: "Prof Savita Sheelavant", u: "https://rvce.edu.in/department/mca/prof_savita_sheelavant/", d: "Assistant Professor", e: "Teaching: 17 Years" },
            { n: "Prof Prashanth K", u: "https://rvce.edu.in/department/mca/prof_prashanth_k/", d: "Assistant Professor", e: "Teaching: 14 Years, Industry: 1 Year 8 Months" }
        ],
        me: [
            { n: "Dr. Shanmukha N", u: "https://rvce.edu.in/department/me/faculty-bio/", d: "Professor and HOD", e: "23 years" },
            { n: "Dr Krishna M", u: "https://rvce.edu.in/department/me/dr_krishna_m/", d: "Professor and Dean-Continuing Education & Skill Development", e: "24 years" },
            { n: "Dr Nanjundaradhya N. V.", u: "https://rvce.edu.in/department/me/dr_nanjundaradhya_n_v/", d: "Professor", e: "2 years" },
            { n: "Dr Srihari P. V.", u: "https://rvce.edu.in/department/me/dr_srihari_p_v/", d: "Associate Professor", e: "20 years" },
            { n: "Dr P. R. Venkatesh", u: "https://rvce.edu.in/department/me/dr_p_r_venkatesh/", d: "Associate Professor", e: "31 years" },
            { n: "Dr Sridhar R", u: "https://rvce.edu.in/department/me/dr_sridhar_r/", d: "Associate Professor", e: "13 years" },
            { n: "Dr Harisha S. K.", u: "https://rvce.edu.in/department/me/dr_harisha_s_k/", d: "Associate Professor", e: "16 years" },
            { n: "Dr Ratna Pal", u: "https://rvce.edu.in/department/me/dr_ratna_pal/", d: "Assistant Professor", e: "10 years" },
            { n: "Dr Nataraj J. R.", u: "https://rvce.edu.in/department/me/dr_nataraj_j_r/", d: "Associate Professor & Dean Global Partnerships", e: "16 years" },
            { n: "Dr Nagesh S", u: "https://rvce.edu.in/department/me/dr_nagesh_s/", d: "Assistant Professor", e: "10 years" },
            { n: "Dr Ramakrishna Hegde", u: "https://rvce.edu.in/department/me/dr_ramakrishna_hegde/", d: "Assistant Professor", e: "12 years" },
            { n: "Dr Chandrakumar R", u: "https://rvce.edu.in/department/me/dr_chandrakumar_r/", d: "Assistant Professor", e: "17 years" },
            { n: "Dr Sourabha S. Havaldar", u: "https://rvce.edu.in/department/me/dr_sourabha_srinivasa_havaldar/", d: "Assistant Professor", e: "13 years" },
            { n: "Keshavamurthy Y. C.", u: "https://rvce.edu.in/department/me/keshavamurthy_y_c/", d: "Assistant Professor", e: "12 years" },
            { n: "Dr Keshav M", u: "https://rvce.edu.in/department/me/dr_keshav_m/", d: "Assistant Professor", e: "06 years" },
            { n: "Dr Girish Kumar R", u: "https://rvce.edu.in/department/me/dr_girish_kumar_r/", d: "Assistant Professor", e: "06 years" },
            { n: "Dr Girish V. A.", u: "https://rvce.edu.in/department/me/dr_girish_v_a/", d: "Assistant Professor", e: "Teaching: 11 years" },
            { n: "Dr Gangadhar Angadi", u: "https://rvce.edu.in/department/me/dr_gangadhar_angadi/", d: "Assistant Professor", e: "Teaching: 12 year" },
            { n: "Dr Anjaneya G", u: "https://rvce.edu.in/department/me/dr_anjaneya_g/", d: "Assistant Professor", e: "Teaching: 25 year" },
            { n: "Jinka Ranganayakulu", u: "https://rvce.edu.in/department/me/jinka_ranganayakalu/", d: "Assistant Professor", e: "Teaching: 12 year" },
            { n: "Dr Rakesh Kumar", u: "https://rvce.edu.in/department/me/rakesh_kumar/", d: "Assistant Professor", e: "Teaching : 3 Years" },
            { n: "Gajanan", u: "https://rvce.edu.in/department/me/gajanan/", d: "Assistant Professor", e: "Teaching: 10 years" },
            { n: "Abhiram E. R.", u: "https://rvce.edu.in/department/me/abhiram_e_r/", d: "Assistant Professor", e: "Teaching : 4 Years" },
            { n: "Dr Prapul Chandra A C", u: "https://rvce.edu.in/department/me/dr_prapul_chandra_a_c/", d: "Assistant Professor", e: "Teaching : 4 Years" },
            { n: "Dr Mahantash M. Math", u: "https://rvce.edu.in/department/me/dr_mahantash_m_math/", d: "Assistant Professor", e: "Teaching: 14 years" },
            { n: "Prof G R Rajkumar", u: "https://rvce.edu.in/department/me/dr_g_r_rajkumar/", d: "Associate Professor", e: "Teaching: 15 years" },
            { n: "Dr Bharatish A", u: "https://rvce.edu.in/department/me/dr_bharatish_a/", d: "Assistant Professor", e: "Teaching: 15 years" },
            { n: "Prof Roopa T. S.", u: "https://rvce.edu.in/department/me/dr_roopa_t_s/", d: "Assistant Professor", e: "12 Years" },
            { n: "Dr Ramesh S. Sharma", u: "https://rvce.edu.in/department/me/dr_ramesh_s_sharma/", d: "Professor & Associate Dean PG Programs", e: "Teaching: 19 years" },
            { n: "Dr Kirthan L. J.", u: "https://rvce.edu.in/department/me/dr_kirthan_l_j/", d: "Associate Professor", e: "Teaching: 10 years" },
            { n: "Sujan Chakraborty", u: "https://rvce.edu.in/department/me/sujan_chakraborty/", d: "Assistant Professor", e: "Teaching: 10 year" },
            { n: "Dr Jagannatha Guptha V. L.", u: "https://rvce.edu.in/department/me/dr_jagannatha_guptha_v_l/", d: "Assistant Professor", e: "Teaching: 10 years" }
        ],
        phy: [
            { n: "Dr. G. Shireesha", u: "https://rvce.edu.in/department/physics/dr_g_shireesha/", d: "Associate Professor and Head", e: "Teaching-23 years" },
            { n: "Dr. Bhuvaneswara Babu T", u: "https://rvce.edu.in/department/physics/faculty/", d: "Professor", e: "42 Years" },
            { n: "Dr. D. N. Avadhani", u: "https://rvce.edu.in/department/physics/dr_avadhani_d_n/", d: "Associate Professor", e: "Teaching: 22 years" },
            { n: "Dr. Sudha Kamath M K", u: "https://rvce.edu.in/department/physics/dr_sudha_kamath_m_k/", d: "Associate Professor & Deputy Warden RVCE DJ Girls Hostel", e: "Teaching: 30 years" },
            { n: "Dr. Shubha S", u: "https://rvce.edu.in/department/physics/dr_shubha_s/", d: "Assistant Professor (Selection Grade)", e: "Teaching – 16 years" },
            { n: "Dr. Tribikram Gupta", u: "https://rvce.edu.in/department/physics/dr_tribikram_gupta/", d: "Assistant Professor (Senior Scale)", e: "Teaching – 11 years" },
            { n: "Dr. B. M. Rajesh", u: "https://rvce.edu.in/department/physics/dr_b_m_rajesh/", d: "Assistant Professor (Senior Scale)", e: "Teaching – 12 years" },
            { n: "Dr. Ramaya P", u: "https://rvce.edu.in/department/physics/dr_ramya_p/", d: "Assistant Professor (Senior Scale)", e: "Teaching – 08 years" },
            { n: "Dr. Niranjana K M", u: "https://rvce.edu.in/department/physics/dr_niranjana_k_m/", d: "Assistant Professor", e: "Teaching – 08 years" },
            { n: "Dr. Dileep M S", u: "https://rvce.edu.in/department/physics/dr_dileep_m_s/", d: "Assistant Professor", e: "Teaching 12 years" },
            { n: "Dr. Shwetha K P", u: "https://rvce.edu.in/department/physics/dr_shwetha_k_p/", d: "Assistant Professor", e: "Teaching 17 years" },
            { n: "Dr. Rini Ganguly", u: "https://rvce.edu.in/department/physics/dr_rini_ganguly/", d: "Assistant Professor", e: "Teaching- 3.5 years" },
            { n: "Dr. Kavya K. Nayak", u: "https://rvce.edu.in/department/physics/dr_kavya_k_nayak/", d: "Assistant Professor", e: "Research – 6 years" }
        ]
    }
};

/* =============== INPUT SANITIZATION =============== */
function sanitize(input) {
    // 1. Remove dots explicitly to handle c.s.e -> cse
    let cleaned = input.replace(/\./g, '');
    // 2. Remove other special chars but keep underscores
    cleaned = cleaned.replace(/[^a-zA-Z0-9_\s]/g, ' ').toLowerCase();
    
    // 3. Expand common department abbreviations
    const deptAbbr = {
        'cs': 'computer science', 'cse': 'computer science',
        'ec': 'electronics', 'ece': 'electronics',
        'me': 'mechanical', 'mech': 'mechanical',
        'cv': 'civil',
        'ee': 'electrical', 'eee': 'electrical',
        'is': 'information science', 'ise': 'information science',
        'ae': 'aerospace', 'aero': 'aerospace',
        'ch': 'chemical', 'chem': 'chemical',
        'bt': 'biotech', 'biotech': 'biotechnology',
        'im': 'industrial', 'iem': 'industrial',
        'ei': 'instrumentation', 'eie': 'instrumentation',
        'et': 'telecommunication', 'ete': 'telecommunication',
        'aiml': 'artificial intelligence'
    };
    
    // Replace whole words
    cleaned = cleaned.split(/\s+/).map(w => deptAbbr[w] || w).join(' ');

    // 4. Remove extra spaces
    return cleaned.replace(/\s+/g, ' ').trim();
}

/* =============== INTENT MATCHING (Priority-based) =============== */
// p: 0=greet/bye, 1=very specific, 2=medium, 3=generic fallback


function findSuggestions(text) { return []; }
function findFacultyMatch(text) { return null; }

function classifyIntent(input) {
    let cleanInput = sanitize(input).toLowerCase();

    // Extract requested year if any (e.g., 2024, 2023)
    let extractedYear = null;
    const yearMatch = cleanInput.match(/\b20\d{2}\b/);
    if (yearMatch) {
        extractedYear = yearMatch[0];
    }

    // 0. Placement Regex Override (Detect Year-wise Dept Placements early)
    let pMatch = /(?:placement|placements|highest package|average package|salary)\s+(?:for|in|of)?\s*([a-zA-Z\s\(\)]+)/i.exec(cleanInput);
    if (!pMatch) pMatch = /([a-zA-Z\s\(\)]+)\s+(?:placement|placements|highest package|average package|salary)/i.exec(cleanInput);
    
    if (pMatch) {
        let extractedDept = pMatch[1].trim();
        // Remove common stop words from dept name
        extractedDept = extractedDept.replace(/\b(engineering|technology|department|dept)\b/gi, '').trim();
        
        const matched = KB.departments.ug.find(x => x.n.toLowerCase().includes(extractedDept) || x.c === extractedDept) ||
                        KB.departments.pg.find(x => x.n.toLowerCase().includes(extractedDept) || x.c === extractedDept);
        if (matched) {
            return { type: 'exact', id: 'plcmt_' + matched.c, year: extractedYear, suggestions: [] };
        }
    }

    // Context Memory: Implicitly inject department if requested contextually
    const contextualTopics = ['placement', 'hod', 'faculty', 'labs', 'syllabus', 'research'];
    let strippedInput = cleanInput;
    if (typeof SESSION !== 'undefined' && SESSION.lastIntent && SESSION.lastIntent.startsWith('dept_')) {
        const hasTopic = contextualTopics.some(t => cleanInput.includes(t));
        const hasDeptMention = cleanInput.match(/cse|cs|ec|mech|civil|ai|ml/i);
        if (hasTopic && !hasDeptMention) {
            const branchCode = SESSION.lastIntent.replace('dept_', '');
            cleanInput += ` ${branchCode}`;
        }
    }
    
    // Remove common stop words for more robust matching of separated keywords
    const stopWords = ['the', 'is', 'for', 'a', 'an', 'of', 'in', 'to', 'and', 'with', 'about', 'on', 'at', 'please', 'can', 'you', 'tell', 'me', 'know'];
    strippedInput = cleanInput.split(' ').filter(w => !stopWords.includes(w)).join(' ');

    // 0. Abbreviation Check
    if (ABBR[cleanInput]) return { type: 'fuzzy', id: null, year: extractedYear, suggestions: [ABBR[cleanInput]]  };

    // 0.5 Context-aware multi-turn handling
    const contextIntents = ['_more','_back','_what_else','_yes','_no'];
    for (const q of QA) {
        if (contextIntents.includes(q.id) && q.k.includes(cleanInput)) {
            return { type: 'context', id: q.id, year: extractedYear, suggestions: []  };
        }
    }
    
    // 1. Universal Button-to-Intent Bypass — these are BUTTONS the user clicked, always exact
    for (const [id, label] of Object.entries(INTENT_LABELS)) {
        if (sanitize(label).toLowerCase() === cleanInput) return { type: 'exact', id, suggestions: [] };
    }
    for (const d of KB.departments.ug) {
        if (sanitize(d.n).toLowerCase() === cleanInput) return { type: 'exact', id: 'dept_' + d.c, year: extractedYear, suggestions: []  };
    }
    for (const d of KB.departments.pg) {
        if (sanitize(d.n).toLowerCase() === cleanInput) return { type: 'exact', id: 'dept_' + d.c, year: extractedYear, suggestions: []  };
    }
    const BUTTON_MAP = {
        'ug be': 'ugAdm', 'pg mtech': 'pgAdm', 'mca': 'mca', 'phd': 'phd',
        'view programs': 'ugPrograms', 'pg programs': 'pgPrograms', 'all departments': 'departments',
        'admissions page': 'admissions', 'apply': 'admissions',
        'placement details': 'placements', 'more info': 'admissions',
        'facilities': 'facilities', 'all facilities': 'facilities',
        'innovation teams': 'innovationTeams', 'see teams': 'innovationTeams',
        'cultural clubs': 'culturalLife', 'cultural teams': 'culturalLife',
        'sports info': 'sports', 'rvei website': 'trust',
        'website': 'website', 'email': 'contact', 'rvce edu in': 'website'
    };
    if (BUTTON_MAP[cleanInput]) return { type: 'exact', id: BUTTON_MAP[cleanInput], year: extractedYear, suggestions: []  };

    // 2. Exact match: user typed EXACTLY a keyword from the QA bank
    for (const q of QA) {
        if (q.k.includes(cleanInput)) return { type: 'exact', id: q.id, year: extractedYear, suggestions: []  };
    }

    // 3. Keyword-in-sentence: a keyword appears as a whole word inside user's input
    let best = null, bestP = 99, bestL = 0;
    const matchedIntents = [];
    const intentIndices = {};

    for (const q of QA) {
        for (const k of q.k) {
            const escapedK = k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const regex = new RegExp('(?:^|\\s)' + escapedK + '(?=\\s|$)', 'i');
            
            let isMatch = regex.test(cleanInput) || regex.test(strippedInput);
            
            // Fuzzy Matching for typos on single keywords > 4 chars
            const wordCount = strippedInput.split(' ').length;
            if (!isMatch && k.length > 4 && !k.includes(' ') && wordCount < 15) {
                const words = strippedInput.split(' ');
                for (const w of words) {
                    if (w.length > 4) {
                        const dist = levenshtein(w, k);
                        // Allow 1 typo for words 5-7 chars, 2 typos for 8+ chars
                        if (dist <= 1 || (k.length > 7 && dist <= 2)) {
                            isMatch = true; break;
                        }
                    }
                }
            }
            
            if (isMatch) {
                const idx = cleanInput.indexOf(k.toLowerCase());
                
                // --- NEGATION DETECTION ---
                if (idx !== -1) {
                    const precedingText = cleanInput.substring(Math.max(0, idx - 20), idx);
                    if (/\b(not|no|don't|dont|without|excluding|except)\b/i.test(precedingText)) {
                        continue;
                    }
                }

console.log(classifyIntent("ECE PLACEMENT STATS 2025"));
