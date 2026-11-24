import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      auth: {
  brandTitle: "Smart Farming Starts Here",
  brandDescription:
    "Access Agri-Sahayak and get smart agricultural support in one place.",
  benefit1: "AI-powered crop assistance",
  benefit2: "Weather-based farming alerts",
  benefit3: "Marketplace and equipment services",
  benefit4: "Hindi and English support",

  welcome: "Welcome to Agri-Sahayak",
  loginTitle: "Login to your account",
  registerTitle: "Create your farmer account",
  loginDescription: "Enter your mobile number and password to continue.",
  registerDescription:
    "Create your account and access smart farming services.",

  login: "Login",
  register: "Register",

  fullName: "Full Name",
  namePlaceholder: "Enter your full name",

  mobile: "Mobile Number",
  mobilePlaceholder: "Enter 10-digit mobile number",

  password: "Password",
  passwordPlaceholder: "Enter your password",

  confirmPassword: "Confirm Password",
  confirmPasswordPlaceholder: "Re-enter your password",

  loginButton: "Login",
  registerButton: "Create Account",

  noAccount: "Don't have an account?",
  haveAccount: "Already have an account?",

  loginSuccess: "Login Successful!",
  registerSuccess: "Registration Successful!",
  successDescription:
    "Your Agri-Sahayak account is ready. Continue to your dashboard.",
  goDashboard: "Go to Dashboard",
},

      weather: {
  badge: "Smart Farming Weather",
  title: "Weather-Based Farming Alerts",
  description:
    "Get weather information and farming-focused alerts to make better decisions about irrigation, crop protection and farm activities.",

  currentWeather: "Current Weather",
  yourLocation: "Your Location",
  locationPending:
    "Location will be detected when weather API is connected.",
  dataPending: "Weather data pending",
  liveData: "Live data will appear here",

  farmingStatus: "Farming Status",
  farmingStatusDescription:
    "Farming recommendations will be generated from live weather conditions.",
  currentRecommendation: "Current recommendation",
  waitingWeather: "Waiting for weather data",

  temperature: "TEMPERATURE",
  currentTemperature: "Current temperature",

  humidity: "HUMIDITY",
  relativeHumidity: "Relative humidity",

  rain: "RAIN",
  rainProbability: "Rain probability",

  wind: "WIND",
  windSpeed: "Wind speed",

  intelligence: "Farming Intelligence",
  farmingAlerts: "Farming Alerts",
  alertsDescription:
    "Weather conditions will be converted into practical farming recommendations.",

  irrigationTitle: "Irrigation Advice",
  irrigationDescription:
    "Weather data will help determine whether irrigation may be needed for your crops.",
  waitingLiveData: "Waiting for live weather data",

  rainAlertTitle: "Rain Alert",
  rainAlertDescription:
    "Get alerts when rainfall may affect spraying, irrigation, harvesting or other farm activities.",
  noAlert: "No alert available yet",

  cropProtectionTitle: "Crop Protection",
  cropProtectionDescription:
    "Receive warnings about extreme heat, heavy rain, frost and other conditions that may affect crops.",
  noWarning: "No warning available yet",

  forecastTitle: "Weather Forecast",
  forecastDescription: "Upcoming weather conditions",
  liveDataComing: "Live data coming soon",

  day: "Day",
  dataPendingShort: "Data pending",

  tipTitle: "Smart Farming Tip",
  tipDescription:
    "Agri-Sahayak will use weather conditions to provide farming-specific recommendations instead of simply displaying temperature and forecasts.",
},
      // =========================
      // NAVBAR
      // =========================
navbar: {
  home: "Home",
  features: "Features",
  services: "Services",
  marketplace: "Marketplace",
  products: "Products",
  schemes: "Schemes",
  dashboard: "Dashboard",
  about: "About",
  login: "Login",
  register: "Register",
  tagline: "Smart Farming Platform",
},

      // =========================
      // FOOTER
      // =========================
      footer: {
        description:
          "Smart farming solutions to help farmers make better decisions and improve their productivity.",
        quickLinks: "Quick Links",
        services: "Services",
        contact: "Contact",
        home: "Home",
        about: "About",
        marketplace: "Marketplace",
        schemes: "Government Schemes",
        disease: "Disease Detection",
        weather: "Weather Alerts",
        coldStorage: "Cold Storage",
        voiceAssistant: "Voice Assistant",
        products: "Products Marketplace",
        equipment: "Equipment Rental",
      },

      // =========================
      // HOME PAGE
      // =========================
 home: {
  hero: {
    badge: "Smart Technology for Modern Farming",
    title: "Smarter Farming.",
    highlight: "Better Decisions.",
    description:
      "Agri-Sahayak brings AI-powered crop care, weather intelligence, marketplaces, storage, equipment and farmer services together in one simple platform.",
    primaryButton: "Explore Agri-Sahayak",
    secondaryButton: "Try AI Detection",
    feature1: "AI Powered",
    feature2: "Hindi + English",
    feature3: "Farmer Focused",
    imageAlt: "Agricultural field",
  },

  intro: {
    badge: "One Platform",
    title: "Everything a farmer needs,",
    highlight: "in one place.",
    description:
      "Farmers often need different tools for crop health, weather, markets, storage and agricultural services. Agri-Sahayak brings these needs together into one easy-to-use digital platform.",
    farmerFirst: {
      title: "Farmer First",
      description:
        "Simple interfaces designed around farming needs.",
    },
    smart: {
      title: "Smart Decisions",
      description:
        "Turn agricultural information into useful actions.",
    },
    imageAlt: "Farmer working in agricultural field",
    cardTitle: "Complete Farming Ecosystem",
    cardSubtitle: "Care • Manage • Sell",
  },

  servicesSection: {
    badge: "Our Smart Services",
    title: "Built around the farmer",
    description:
      "From identifying crop problems to finding markets, Agri-Sahayak supports the complete farming journey.",
    explore: "Explore Service",
  },

  services: {
    disease: {
      title: "AI Crop Disease Detection",
      description:
        "Upload a crop image and get an AI-based disease analysis with precautions.",
    },
    weather: {
      title: "Weather Intelligence",
      description:
        "Understand weather conditions and receive farming-focused alerts.",
    },
    market: {
      title: "Crop Marketplace",
      description:
        "Buy and sell crops through a simple farmer-friendly marketplace.",
    },
    storage: {
      title: "Cold Storage",
      description:
        "Find nearby cold storage facilities to help protect harvested crops.",
    },
    voice: {
      title: "Voice Assistant",
      description:
        "Ask farming questions using voice in both Hindi and English.",
    },
    equipment: {
      title: "Equipment Rental",
      description:
        "Find agricultural machinery and equipment available for rental.",
    },
  },

  howItWorks: {
    badge: "How It Works",
    title: "One journey.",
    highlight: "Multiple farming needs.",
    description:
      "Agri-Sahayak connects important farming activities into a straightforward digital workflow.",
    button: "Open Farmer Dashboard",
  },

  steps: {
    identify: {
      title: "Identify",
      description:
        "Detect crop diseases and understand the condition of your crops.",
    },
    decide: {
      title: "Decide",
      description:
        "Use weather alerts and smart farming information to plan better.",
    },
    manage: {
      title: "Manage",
      description:
        "Find storage, equipment, seeds, fertilizers and government schemes.",
    },
    sell: {
      title: "Sell",
      description:
        "Connect your crops with buyers through the digital marketplace.",
    },
  },

  marketplace: {
    badge: "Digital Agriculture",
    title: "From growing crops to finding the right market.",
    description:
      "Explore crop selling, agricultural products, equipment rental, government schemes and other services through Agri-Sahayak.",
    primaryButton: "Explore Marketplace",
    secondaryButton: "Government Schemes",
    imageAlt: "Agricultural produce",
  },

  cta: {
    title: "Ready to farm smarter?",
    description:
      "Explore Agri-Sahayak and experience a connected digital farming platform designed for modern agricultural needs.",
    button: "Get Started",
  },
},
      about: {
  badge: "About Agri-Sahayak",
  heroTitle1: "Technology for",
  heroTitle2: "Smarter Farming",
  heroDescription:
    "Agri-Sahayak is a smart farming platform designed to bring useful agricultural tools, AI assistance and digital services together in one simple and farmer-friendly platform.",

  whatIsTitle: "What is Agri-Sahayak?",
  platformTitle: "One platform for multiple farming needs",
  platformDescription1:
    "Farmers often need to access different types of information and services while managing their crops. Agri-Sahayak brings several of these requirements together through a single digital platform.",
  platformDescription2:
    "From identifying crop diseases and receiving farming alerts to finding cold storage, using a voice assistant and accessing agricultural marketplaces, the platform aims to simplify the farming journey with technology.",

  highlightAI: "AI-powered crop assistance",
  highlightLanguage: "Hindi and English accessibility",
  highlightBuyingSelling:
    "Agricultural buying and selling services",
  highlightMarketplace:
    "Equipment and agricultural product marketplace",

  accessibleTitle:
    "Making digital agriculture more accessible",
  accessibleDescription:
    "Agri-Sahayak focuses on bringing technology closer to farmers through a simple interface and practical digital services. Instead of requiring farmers to use multiple platforms, the goal is to provide important agricultural tools in one place.",

  aiAssisted: "AI Assisted",
  voiceEnabled: "Voice Enabled",
  marketplace: "Marketplace",
  farmerFocused: "Farmer Focused",

  offerBadge: "What We Offer",
  offerTitle: "Built around real farming needs",
  offerDescription:
    "Agri-Sahayak brings multiple digital agricultural services together to support farmers at different stages of farming.",

  featureDiseaseTitle: "AI Crop Assistance",
  featureDiseaseDescription:
    "AI-powered crop disease detection with practical precautions and farming guidance.",

  featureWeatherTitle: "Weather-Based Alerts",
  featureWeatherDescription:
    "Weather information and farming alerts to help farmers plan important agricultural activities.",

  featureColdStorageTitle: "Cold Storage Connection",
  featureColdStorageDescription:
    "Helps farmers discover and connect with nearby cold storage facilities for better crop preservation.",

  featureVoiceTitle: "Voice Assistant",
  featureVoiceDescription:
    "A farmer-friendly voice assistant designed to support both Hindi and English.",

  featureMarketplaceTitle: "Agricultural Marketplace",
  featureMarketplaceDescription:
    "Supports crop buying and selling along with seeds, fertilizers and other agricultural products.",

  featureEquipmentTitle: "Equipment Rental",
  featureEquipmentDescription:
    "Helps farmers find agricultural equipment available for rental.",

  missionBadge: "Our Mission",
  missionTitle: "Technology that supports better decisions",
  missionDescription:
    "Our mission is to use technology to make agricultural information and digital services more accessible, understandable and useful.",

  goalTitle: "Our Goal",
  goalDescription:
    "To make useful agricultural information and digital farming services easier for farmers to access.",

  approachTitle: "Our Approach",
  approachDescription:
    "We combine AI, digital services and simple interfaces to create practical solutions for modern farming.",

  farmerFirstTitle: "Farmer First",
  farmerFirstDescription:
    "The platform is designed around simple navigation, useful information and accessibility for farmers.",

  finalTitle: "Building a smarter agricultural future",
  finalDescription:
    "Agri-Sahayak brings AI, digital services and agricultural marketplaces together to create a more connected farming experience.",
},
coldStorage: {
  badge: "Smart Storage Finder",
  title: "Find Nearby Cold Storage",
  description:
    "Find suitable cold-storage facilities near your location and access useful information about distance, address, contact and storage facilities.",

  searchLocation: "Search Location",
  findStorage: "Find storage near you",
  searchDescription:
    "Enter a city, village, district or area to search for nearby cold-storage facilities.",
  locationPlaceholder: "Enter your location...",
  search: "Search",
  useLocation: "Use My Location",

  nearbyFacilities: "Nearby Facilities",
  resultsTitle: "Cold Storage Results",
  liveResults: "Live results coming soon",

  emptyTitle: "Search for nearby cold storage",
  emptyDescription:
    "Enter your location above to find available cold-storage facilities. Real facilities and their details will appear after the location API is connected.",

  facilityName: "Cold Storage Facility",
  facilityInfo: "Facility information will appear here",
  nearby: "Nearby",

  address: "Address will appear here",
  distance: "Distance will appear here",
  contact: "Contact will appear here",
  hours: "Opening hours will appear here",

  storageDetails: "Storage details",
  capacity: "Capacity",
  availability: "Availability",

  mapTitle: "Storage Map",
  mapDescription: "Nearby facilities will be shown here",
  interactiveMap: "Interactive Map",
  mapPlaceholder:
    "The map and real cold-storage locations will be connected during the location and API integration phase.",

  whyUse: "Why Use It",
  betterDecisions: "Better Storage Decisions",
  whyDescription:
    "Agri-Sahayak is designed to make it easier to discover and compare suitable storage options.",

  nearbyLocations: "Nearby Locations",
  nearbyLocationsDescription:
    "Find storage facilities based on your selected location.",

  usefulInformation: "Useful Information",
  usefulInformationDescription:
    "View important details such as address, distance, contact and storage information.",

  reliableInformation: "Reliable Information",
  reliableInformationDescription:
    "Real facility information will be displayed through verified location and data sources.",

  locationIntegration:
    "Current location will be connected in the location integration step.",
},
governmentSchemes: {
  title: "Government Schemes",
  description:
    "Discover government programs and support initiatives designed for farmers and agricultural development.",

  searchPlaceholder: "Search government schemes...",

  availableSchemes: "Available Schemes",
  availableDescription:
    "Explore schemes and check their benefits and eligibility.",

  noSchemes: "No schemes found",
  tryDifferent: "Try searching with a different keyword.",

  benefits: "Benefits",
  eligibility: "Eligibility",
  viewDetails: "View Details",

  importantTitle: "Important Information",
  importantDescription:
    "Government scheme information should always be verified through the relevant official government portal before applying.",

  categories: {
    "Financial Support": "Financial Support",
    Agriculture: "Agriculture",
    "Farmer Welfare": "Farmer Welfare",
  },

  schemes: {
    "Government Scheme": {
      title: "Government Scheme",
      description:
        "Information about government financial assistance and support available for eligible farmers.",
      eligibility: "Eligibility details will be provided here.",
    },

    "Agricultural Support Scheme": {
      title: "Agricultural Support Scheme",
      description:
        "Information about agricultural development programs and farmer support initiatives.",
      eligibility: "Eligibility details will be provided here.",
    },

    "Farmer Welfare Scheme": {
      title: "Farmer Welfare Scheme",
      description:
        "Information about welfare programs designed to support farmers and agricultural communities.",
      eligibility: "Eligibility details will be provided here.",
    },
  },

  benefitItems: {
    "Financial assistance": "Financial assistance",
    "Support for eligible farmers": "Support for eligible farmers",
    "Application information": "Application information",

    "Agricultural support": "Agricultural support",
    "Farmer assistance": "Farmer assistance",
    "Program information": "Program information",

    "Farmer welfare": "Farmer welfare",
    "Government assistance": "Government assistance",
    "Support information": "Support information",
  },
},
disease: {
  badge: "AI-Powered Crop Care",
  title: "Crop Disease Detection",
  description:
    "Upload a clear image of your crop or plant leaf and use AI-powered analysis to identify possible diseases and get useful farming guidance.",

  uploadTitle: "Upload Crop Image",
  uploadDescription:
    "Upload a clear photo of the affected crop or leaf.",
  uploadImage: "Upload an image",
  selectImage:
    "Click here to select a crop image from your device.",
  chooseImage: "Choose Image",
  fileTypes: "JPG, JPEG or PNG",

  selectedCrop: "Selected crop",
  removeImage: "Remove image",
  remove: "Remove",

  analyze: "Analyze Crop",

  analysisTitle: "AI Analysis",
  analysisDescription:
    "Your crop analysis results will appear here.",
  noAnalysis: "No analysis yet",
  noAnalysisDescription:
    "Upload a crop image and start the analysis to receive disease information and farming guidance.",

  whatYouGet: "What You'll Get",

  identificationTitle: "Disease Identification",
  identificationDescription:
    "Information about the possible crop disease detected by the AI model.",

  confidenceTitle: "Confidence Score",
  confidenceDescription:
    "The AI model's confidence level for the identified condition.",

  treatmentTitle: "Treatment Guidance",
  treatmentDescription:
    "Practical treatment information based on the actual AI analysis.",

  preventionTitle: "Prevention",
  preventionDescription:
    "Prevention recommendations to help protect your crop.",

  noticeTitle: "AI Analysis Notice",
  noticeDescription:
    "The disease result, confidence score, treatment and prevention information will come from the actual AI/backend integration. No artificial diagnosis is displayed when an image is uploaded.",

  invalidImage: "Please select a valid image file.",
  backendNotice:
    "AI analysis will be connected in the backend integration step.",
},
equipmentRental: {
  badge: "Agricultural Equipment Rental",

  title: "Rent Farming Equipment Easily",

  description:
    "Find and rent agricultural equipment near you without the need to purchase expensive machinery.",

  searchPlaceholder: "Search equipment or location...",

  allEquipment: "All Equipment",
  tractor: "Tractor",
  tillage: "Tillage Equipment",
  seeding: "Seeding Equipment",
  harvesting: "Harvesting Equipment",

  availableTitle: "Available Equipment",

  availableDescription:
    "Explore agricultural equipment available for rental.",

  noEquipment: "No equipment found",

  changeFilter:
    "Try changing your search or equipment category.",

  rentalPrice: "Rental Price",

  rentNow: "Rent Now",

  howTitle: "How Equipment Rental Works",

  howDescription:
    "Renting agricultural equipment will be simple and convenient through Agri-Sahayak.",

  stepOneTitle: "Find Equipment",

  stepOneDescription:
    "Search for suitable farming equipment available near your location.",

  stepTwoTitle: "Choose & Book",

  stepTwoDescription:
    "Select the equipment and choose a suitable rental period.",

  stepThreeTitle: "Use the Equipment",

  stepThreeDescription:
    "Connect with the equipment provider and use the machinery for your farming needs.",

  noticeTitle: "Equipment Rental Information",

  noticeDescription:
    "Equipment listings, rental prices, availability and booking will be connected to the backend marketplace during the integration phase.",

  types: {
    Tractor: "Tractor",
    "Tillage Equipment": "Tillage Equipment",
    "Seeding Equipment": "Seeding Equipment",
    "Harvesting Equipment": "Harvesting Equipment",
  },

  items: {
    Tractor: "Tractor",
    Rotavator: "Rotavator",
    "Seed Drill": "Seed Drill",
    Harvester: "Harvester",
  },

  descriptions: {
    Tractor:
      "Suitable for ploughing, cultivation and farm preparation.",

    Rotavator:
      "Useful for soil preparation and field tillage.",

    "Seed Drill":
      "Helps farmers sow seeds efficiently and uniformly.",

    Harvester:
      "Useful for faster crop harvesting operations.",
  },
},

productsMarketplace: {
  badge: "Agri-Sahayak Marketplace",

  title: "Seeds, Fertilizers & Agricultural Products",

  description:
    "Explore agricultural products designed to support farmers throughout their farming journey.",

  qualityProducts: "Quality Products",
  easySearch: "Easy Search",
  farmerFriendly: "Farmer Friendly",

  searchPlaceholder:
    "Search seeds, fertilizers, agricultural products...",

  allProducts: "All Products",
  seeds: "Seeds",
  fertilizers: "Fertilizers",
  agriculturalProducts: "Agricultural Products",

  availableProducts: "Available Products",

  showing: "Showing",
  product: "product",
  products: "products",

  price: "Price",
  per: "per",
  add: "Add",

  noProducts: "No products found",
  tryDifferent:
    "Try a different search term or category.",

  qualitySeeds: "Quality Seeds",
  qualitySeedsDescription:
    "Explore different seed options for agricultural use.",

  fertilizersTitle: "Fertilizers",
  fertilizersDescription:
    "Browse fertilizer products and soil-support options.",

  easyShopping: "Easy Shopping",
  easyShoppingDescription:
    "Search products and add them to your cart with a simple UI.",

  demoNoticeTitle: "Demo Notice:",

  demoNoticeDescription:
    "Product information shown here is sample UI data. Real products, sellers, inventory, orders, and payments will be connected later through the backend.",

  categories: {
    Seeds: "Seeds",
    Fertilizers: "Fertilizers",
    "Agricultural Products": "Agricultural Products",
  },

  items: {
    "Premium Wheat Seeds": "Premium Wheat Seeds",
    "Hybrid Rice Seeds": "Hybrid Rice Seeds",
    "Organic Compost": "Organic Compost",
    "NPK Fertilizer": "NPK Fertilizer",
    "Urea Fertilizer": "Urea Fertilizer",
    "Vegetable Seed Pack": "Vegetable Seed Pack",
    "Bio Fertilizer": "Bio Fertilizer",
    "Crop Growth Booster": "Crop Growth Booster",
  },

  descriptions: {
    "Premium Wheat Seeds":
      "High-quality wheat seeds suitable for reliable crop production.",

    "Hybrid Rice Seeds":
      "Hybrid rice seeds designed for healthy crop growth.",

    "Organic Compost":
      "Organic compost for improving soil health and fertility.",

    "NPK Fertilizer":
      "Balanced fertilizer containing essential nutrients for crops.",

    "Urea Fertilizer":
      "Nitrogen-rich fertilizer commonly used for crop nutrition.",

    "Vegetable Seed Pack":
      "A selection of quality vegetable seeds for farming.",

    "Bio Fertilizer":
      "Bio-based agricultural product designed to support soil health.",

    "Crop Growth Booster":
      "Agricultural growth-support product for crop management.",
  },
},
cropMarketplace: {
  badge: "Crop Marketplace",
  title: "Buy & Sell Crops",
  description:
    "Connect farmers and buyers through a simple digital marketplace for agricultural products.",

  sellCrop: "Sell Your Crop",

  searchPlaceholder: "Search crops, varieties or location...",

  allCategories: "All Categories",
  grains: "Grains",
  vegetables: "Vegetables",

  listingsTitle: "Crop Listings",
  listingsDescription:
    "Browse available agricultural products.",
  listingsCount: "Listings",

  noCrops: "No crops found",
  changeFilter:
    "Try changing your search or category filter.",

  quantity: "Quantity",
  price: "Price",
  viewListing: "View Listing",

  lookingToBuy: "Looking to Buy?",
  buyDescription:
    "Browse crop listings and connect with sellers for agricultural products.",

  wantToSell: "Want to Sell?",
  sellDescription:
    "Farmers will be able to create their own crop listings and connect with potential buyers.",

  categories: {
    Grains: "Grains",
    Vegetables: "Vegetables",
  },

  crops: {
    Wheat: "Wheat",
    Rice: "Rice",
    Potato: "Potato",
    Tomato: "Tomato",
  },

  varieties: {
    "Premium Wheat": "Premium Wheat",
    "Basmati Rice": "Basmati Rice",
    "Fresh Potato": "Fresh Potato",
    "Fresh Tomato": "Fresh Tomato",
  },
},
voiceAssistant: {
  badge: "Farmer Voice Assistant",
  title: "Ask. Speak. Get Farming Help.",
  description:
    "Talk to Agri-Sahayak in Hindi or English and get assistance with your farming questions.",

  welcome:
    "Hello! I am your Agri-Sahayak farming assistant. Ask me anything about crops, weather, storage, markets or farming.",

  assistantName: "Agri-Sahayak Assistant",
  listeningStatus: "Listening to you...",
  readyStatus: "Ready to help with farming questions",

  english: "English",
  hindi: "हिंदी",

  stopListening: "Stop listening",
  startListening: "Start listening",

  listeningButton: "Listening... Tap to stop",
  speakButton: "Tap the microphone to speak",
  voiceSupport: "Hindi and English voice support",

  inputPlaceholder: "Type your farming question...",
  inputPlaceholderHi: "अपना सवाल लिखें...",
  sendMessage: "Send message",

  clearConversation: "Clear conversation",

  clearWelcome:
    "Hello! I am your Agri-Sahayak farming assistant. Ask me anything about farming.",

  quickQuestions: "Quick Questions",
  quickQuestionsDescription: "Try asking one of these",

  quickFertilizer: "Which fertilizer is suitable for wheat?",
  quickWeather: "What is today's weather?",
  quickStorage: "How can I find nearby cold storage?",
  quickSell: "Where can I sell my crop?",

  farmingTopics: "Farming Topics",

  cropHealth: "Crop Health",
  weatherAlerts: "Weather & Alerts",
  cropMarketplace: "Crop Marketplace",
  coldStorage: "Cold Storage",
  seedsFertilizers: "Seeds & Fertilizers",

  voiceFirstTitle: "Voice-First Farming",
  voiceFirstDescription:
    "Designed to make farming information easier to access using natural voice interaction in Hindi and English.",
},
    },
  },

  // ==========================================================
  // HINDI
  // ==========================================================
  hi: {
    translation: {
      auth: {
  brandTitle: "स्मार्ट फार्मिंग यहीं से शुरू करें",
  brandDescription:
    "Agri-Sahayak में प्रवेश करें और एक ही जगह पर स्मार्ट कृषि सहायता प्राप्त करें।",
  benefit1: "AI आधारित फसल सहायता",
  benefit2: "मौसम आधारित खेती अलर्ट",
  benefit3: "मार्केटप्लेस और उपकरण सेवाएं",
  benefit4: "हिंदी और अंग्रेज़ी भाषा का समर्थन",

  welcome: "Agri-Sahayak में आपका स्वागत है",
  loginTitle: "अपने अकाउंट में लॉगिन करें",
  registerTitle: "अपना किसान अकाउंट बनाएं",
  loginDescription:
    "जारी रखने के लिए अपना मोबाइल नंबर और पासवर्ड दर्ज करें।",
  registerDescription:
    "अपना अकाउंट बनाएं और स्मार्ट खेती सेवाओं का लाभ उठाएं।",

  login: "लॉगिन",
  register: "रजिस्टर",

  fullName: "पूरा नाम",
  namePlaceholder: "अपना पूरा नाम दर्ज करें",

  mobile: "मोबाइल नंबर",
  mobilePlaceholder: "10 अंकों का मोबाइल नंबर दर्ज करें",

  password: "पासवर्ड",
  passwordPlaceholder: "अपना पासवर्ड दर्ज करें",

  confirmPassword: "पासवर्ड की पुष्टि करें",
  confirmPasswordPlaceholder: "पासवर्ड दोबारा दर्ज करें",

  loginButton: "लॉगिन करें",
  registerButton: "अकाउंट बनाएं",

  noAccount: "क्या आपका अकाउंट नहीं है?",
  haveAccount: "क्या आपका पहले से अकाउंट है?",

  loginSuccess: "लॉगिन सफल रहा!",
  registerSuccess: "रजिस्ट्रेशन सफल रहा!",
  successDescription:
    "आपका Agri-Sahayak अकाउंट तैयार है। अपने डैशबोर्ड पर जाएं।",
  goDashboard: "डैशबोर्ड पर जाएं",
},
    weather: {
  badge: "स्मार्ट खेती मौसम",
  title: "मौसम आधारित खेती अलर्ट",
  description:
    "सिंचाई, फसल सुरक्षा और खेती से जुड़ी गतिविधियों के बारे में बेहतर निर्णय लेने के लिए मौसम की जानकारी और खेती-केंद्रित अलर्ट प्राप्त करें।",

  currentWeather: "वर्तमान मौसम",
  yourLocation: "आपका स्थान",
  locationPending:
    "मौसम API कनेक्ट होने पर स्थान का पता लगाया जाएगा।",
  dataPending: "मौसम का डेटा उपलब्ध नहीं है",
  liveData: "लाइव डेटा यहां दिखाई देगा",

  farmingStatus: "खेती की स्थिति",
  farmingStatusDescription:
    "लाइव मौसम की स्थिति के आधार पर खेती संबंधी सुझाव तैयार किए जाएंगे।",
  currentRecommendation: "वर्तमान सुझाव",
  waitingWeather: "मौसम के डेटा की प्रतीक्षा है",

  temperature: "तापमान",
  currentTemperature: "वर्तमान तापमान",

  humidity: "नमी",
  relativeHumidity: "सापेक्ष नमी",

  rain: "बारिश",
  rainProbability: "बारिश की संभावना",

  wind: "हवा",
  windSpeed: "हवा की गति",

  intelligence: "खेती संबंधी जानकारी",
  farmingAlerts: "खेती अलर्ट",
  alertsDescription:
    "मौसम की स्थिति को व्यावहारिक खेती संबंधी सुझावों में बदला जाएगा।",

  irrigationTitle: "सिंचाई सलाह",
  irrigationDescription:
    "मौसम का डेटा यह निर्धारित करने में मदद करेगा कि आपकी फसलों के लिए सिंचाई की आवश्यकता हो सकती है या नहीं।",
  waitingLiveData: "लाइव मौसम डेटा की प्रतीक्षा है",

  rainAlertTitle: "बारिश अलर्ट",
  rainAlertDescription:
    "बारिश के कारण छिड़काव, सिंचाई, कटाई या अन्य खेती की गतिविधियों पर प्रभाव पड़ने पर अलर्ट प्राप्त करें।",
  noAlert: "अभी कोई अलर्ट उपलब्ध नहीं है",

  cropProtectionTitle: "फसल सुरक्षा",
  cropProtectionDescription:
    "अत्यधिक गर्मी, तेज बारिश, पाला और फसलों को प्रभावित करने वाली अन्य परिस्थितियों के बारे में चेतावनी प्राप्त करें।",
  noWarning: "अभी कोई चेतावनी उपलब्ध नहीं है",

  forecastTitle: "मौसम पूर्वानुमान",
  forecastDescription: "आने वाले मौसम की स्थिति",
  liveDataComing: "लाइव डेटा जल्द उपलब्ध होगा",

  day: "दिन",
  dataPendingShort: "डेटा उपलब्ध नहीं",

  tipTitle: "स्मार्ट खेती सुझाव",
  tipDescription:
    "Agri-Sahayak केवल तापमान और पूर्वानुमान दिखाने के बजाय मौसम की स्थिति का उपयोग करके खेती से जुड़े विशेष सुझाव देगा।",
},
      // =========================
      // NAVBAR
      // =========================
navbar: {
  home: "होम",
  features: "फीचर्स",
  services: "सेवाएं",
  marketplace: "मार्केटप्लेस",
  products: "उत्पाद",
  schemes: "योजनाएं",
  dashboard: "डैशबोर्ड",
  about: "हमारे बारे में",
  login: "लॉगिन",
  register: "रजिस्टर",
  tagline: "स्मार्ट फार्मिंग प्लेटफॉर्म",
},

      // =========================
      // FOOTER
      // =========================
      footer: {
        description:
          "किसानों को बेहतर निर्णय लेने और उत्पादकता बढ़ाने में मदद करने वाले स्मार्ट खेती समाधान।",
        quickLinks: "त्वरित लिंक",
        services: "सेवाएं",
        contact: "संपर्क करें",
        home: "होम",
        about: "हमारे बारे में",
        marketplace: "मार्केटप्लेस",
        schemes: "सरकारी योजनाएं",
        disease: "फसल रोग पहचान",
        weather: "मौसम अलर्ट",
        coldStorage: "कोल्ड स्टोरेज",
        voiceAssistant: "वॉइस असिस्टेंट",
        products: "उत्पाद मार्केटप्लेस",
        equipment: "उपकरण किराया",
      },

      // =========================
      // HOME PAGE
      // =========================
home: {
  hero: {
    badge: "आधुनिक खेती के लिए स्मार्ट तकनीक",
    title: "स्मार्ट खेती।",
    highlight: "बेहतर निर्णय।",
    description:
      "एग्री-सहायक AI आधारित फसल देखभाल, मौसम की जानकारी, मार्केटप्लेस, कोल्ड स्टोरेज, कृषि उपकरण और किसान सेवाओं को एक सरल प्लेटफॉर्म पर उपलब्ध कराता है।",
    primaryButton: "एग्री-सहायक एक्सप्लोर करें",
    secondaryButton: "AI डिटेक्शन आज़माएं",
    feature1: "AI आधारित",
    feature2: "हिंदी + अंग्रेज़ी",
    feature3: "किसान केंद्रित",
    imageAlt: "कृषि क्षेत्र",
  },

  intro: {
    badge: "एक प्लेटफॉर्म",
    title: "किसान की हर ज़रूरत,",
    highlight: "एक ही जगह।",
    description:
      "किसानों को फसल स्वास्थ्य, मौसम, बाजार, भंडारण और कृषि सेवाओं के लिए अलग-अलग साधनों की आवश्यकता होती है। एग्री-सहायक इन सभी जरूरतों को एक आसान डिजिटल प्लेटफॉर्म पर जोड़ता है।",
    farmerFirst: {
      title: "किसान पहले",
      description:
        "किसानों की जरूरतों को ध्यान में रखकर बनाया गया सरल इंटरफेस।",
    },
    smart: {
      title: "स्मार्ट निर्णय",
      description:
        "कृषि जानकारी को उपयोगी कार्यों में बदलने में मदद।",
    },
    imageAlt: "कृषि क्षेत्र में काम करता किसान",
    cardTitle: "पूर्ण कृषि इकोसिस्टम",
    cardSubtitle: "देखभाल • प्रबंधन • बिक्री",
  },

  servicesSection: {
    badge: "हमारी स्मार्ट सेवाएं",
    title: "किसानों के लिए बनाया गया",
    description:
      "फसल की समस्या पहचानने से लेकर सही बाजार खोजने तक, एग्री-सहायक खेती की पूरी यात्रा में सहायता करता है।",
    explore: "सेवा देखें",
  },

  services: {
    disease: {
      title: "AI फसल रोग पहचान",
      description:
        "फसल की तस्वीर अपलोड करें और AI आधारित रोग विश्लेषण तथा सावधानियां प्राप्त करें।",
    },
    weather: {
      title: "मौसम की स्मार्ट जानकारी",
      description:
        "मौसम की स्थिति समझें और खेती से जुड़े महत्वपूर्ण अलर्ट प्राप्त करें।",
    },
    market: {
      title: "फसल मार्केटप्लेस",
      description:
        "सरल किसान-अनुकूल मार्केटप्लेस के माध्यम से फसल खरीदें और बेचें।",
    },
    storage: {
      title: "कोल्ड स्टोरेज",
      description:
        "कटी हुई फसलों को सुरक्षित रखने के लिए नजदीकी कोल्ड स्टोरेज खोजें।",
    },
    voice: {
      title: "वॉइस असिस्टेंट",
      description:
        "हिंदी और अंग्रेज़ी में आवाज़ के माध्यम से खेती से जुड़े सवाल पूछें।",
    },
    equipment: {
      title: "कृषि उपकरण किराया",
      description:
        "किराए पर उपलब्ध कृषि मशीनरी और उपकरण खोजें।",
    },
  },

  howItWorks: {
    badge: "यह कैसे काम करता है",
    title: "एक यात्रा।",
    highlight: "खेती की कई जरूरतें।",
    description:
      "एग्री-सहायक खेती की महत्वपूर्ण गतिविधियों को एक सरल डिजिटल प्रक्रिया में जोड़ता है।",
    button: "किसान डैशबोर्ड खोलें",
  },

  steps: {
    identify: {
      title: "पहचानें",
      description:
        "फसल के रोगों की पहचान करें और अपनी फसल की स्थिति समझें।",
    },
    decide: {
      title: "निर्णय लें",
      description:
        "मौसम अलर्ट और स्मार्ट कृषि जानकारी का उपयोग करके बेहतर योजना बनाएं।",
    },
    manage: {
      title: "प्रबंधन करें",
      description:
        "भंडारण, उपकरण, बीज, उर्वरक और सरकारी योजनाएं खोजें।",
    },
    sell: {
      title: "बेचें",
      description:
        "डिजिटल मार्केटप्लेस के माध्यम से अपनी फसल को खरीदारों तक पहुंचाएं।",
    },
  },

  marketplace: {
    badge: "डिजिटल कृषि",
    title: "फसल उगाने से लेकर सही बाजार खोजने तक।",
    description:
      "एग्री-सहायक के माध्यम से फसल बिक्री, कृषि उत्पाद, उपकरण किराया, सरकारी योजनाएं और अन्य सेवाएं एक्सप्लोर करें।",
    primaryButton: "मार्केटप्लेस देखें",
    secondaryButton: "सरकारी योजनाएं",
    imageAlt: "कृषि उत्पाद",
  },

  cta: {
    title: "क्या आप स्मार्ट खेती के लिए तैयार हैं?",
    description:
      "एग्री-सहायक को एक्सप्लोर करें और आधुनिक कृषि जरूरतों के लिए बनाए गए एक जुड़े हुए डिजिटल फार्मिंग प्लेटफॉर्म का अनुभव करें।",
    button: "शुरू करें",
  },
},
      about: {
  badge: "Agri-Sahayak के बारे में",
  heroTitle1: "स्मार्ट खेती के लिए",
  heroTitle2: "तकनीक",
  heroDescription:
    "Agri-Sahayak एक स्मार्ट खेती प्लेटफॉर्म है जो उपयोगी कृषि उपकरणों, AI सहायता और डिजिटल सेवाओं को एक सरल और किसान-अनुकूल प्लेटफॉर्म पर उपलब्ध कराता है।",

  whatIsTitle: "Agri-Sahayak क्या है?",
  platformTitle: "खेती की कई जरूरतों के लिए एक प्लेटफॉर्म",
  platformDescription1:
    "किसानों को अपनी फसलों का प्रबंधन करते समय विभिन्न प्रकार की जानकारी और सेवाओं की आवश्यकता होती है। Agri-Sahayak इन आवश्यकताओं को एक ही डिजिटल प्लेटफॉर्म पर उपलब्ध कराने का प्रयास करता है।",
  platformDescription2:
    "फसल रोगों की पहचान और खेती संबंधी अलर्ट से लेकर कोल्ड स्टोरेज खोजने, वॉइस असिस्टेंट का उपयोग करने और कृषि मार्केटप्लेस तक पहुंचने में यह प्लेटफॉर्म तकनीक के माध्यम से खेती की प्रक्रिया को सरल बनाने का प्रयास करता है।",

  highlightAI: "AI आधारित फसल सहायता",
  highlightLanguage: "हिंदी और अंग्रेज़ी की सुविधा",
  highlightBuyingSelling:
    "कृषि उत्पाद खरीदने और बेचने की सेवाएं",
  highlightMarketplace:
    "उपकरण और कृषि उत्पाद मार्केटप्लेस",

  accessibleTitle:
    "डिजिटल कृषि को अधिक सुलभ बनाना",
  accessibleDescription:
    "Agri-Sahayak सरल इंटरफेस और व्यावहारिक डिजिटल सेवाओं के माध्यम से तकनीक को किसानों के करीब लाने पर ध्यान केंद्रित करता है। किसानों को अलग-अलग प्लेटफॉर्म इस्तेमाल करने के बजाय महत्वपूर्ण कृषि उपकरण एक ही स्थान पर उपलब्ध कराने का लक्ष्य है।",

  aiAssisted: "AI सहायता",
  voiceEnabled: "वॉइस सुविधा",
  marketplace: "मार्केटप्लेस",
  farmerFocused: "किसान केंद्रित",

  offerBadge: "हम क्या प्रदान करते हैं",
  offerTitle: "वास्तविक खेती की जरूरतों पर आधारित",
  offerDescription:
    "Agri-Sahayak खेती के विभिन्न चरणों में किसानों की सहायता के लिए कई डिजिटल कृषि सेवाओं को एक साथ लाता है।",

  featureDiseaseTitle: "AI फसल सहायता",
  featureDiseaseDescription:
    "व्यावहारिक सावधानियों और खेती संबंधी मार्गदर्शन के साथ AI आधारित फसल रोग पहचान।",

  featureWeatherTitle: "मौसम आधारित अलर्ट",
  featureWeatherDescription:
    "महत्वपूर्ण कृषि गतिविधियों की योजना बनाने में किसानों की सहायता के लिए मौसम की जानकारी और खेती संबंधी अलर्ट।",

  featureColdStorageTitle: "कोल्ड स्टोरेज कनेक्शन",
  featureColdStorageDescription:
    "बेहतर फसल संरक्षण के लिए आसपास के कोल्ड स्टोरेज खोजने और उनसे जुड़ने में सहायता।",

  featureVoiceTitle: "वॉइस असिस्टेंट",
  featureVoiceDescription:
    "किसानों के लिए बनाया गया वॉइस असिस्टेंट जो हिंदी और अंग्रेज़ी दोनों को सपोर्ट करता है।",

  featureMarketplaceTitle: "कृषि मार्केटप्लेस",
  featureMarketplaceDescription:
    "फसल खरीदने और बेचने के साथ-साथ बीज, उर्वरक और अन्य कृषि उत्पादों की सुविधा।",

  featureEquipmentTitle: "उपकरण किराया",
  featureEquipmentDescription:
    "किराए पर उपलब्ध कृषि उपकरण खोजने में किसानों की सहायता।",

  missionBadge: "हमारा मिशन",
  missionTitle: "बेहतर निर्णयों में सहायता करने वाली तकनीक",
  missionDescription:
    "हमारा मिशन तकनीक के माध्यम से कृषि जानकारी और डिजिटल सेवाओं को अधिक सुलभ, समझने योग्य और उपयोगी बनाना है।",

  goalTitle: "हमारा लक्ष्य",
  goalDescription:
    "उपयोगी कृषि जानकारी और डिजिटल खेती सेवाओं को किसानों के लिए आसानी से उपलब्ध कराना।",

  approachTitle: "हमारा दृष्टिकोण",
  approachDescription:
    "हम AI, डिजिटल सेवाओं और सरल इंटरफेस को मिलाकर आधुनिक खेती के लिए व्यावहारिक समाधान तैयार करते हैं।",

  farmerFirstTitle: "किसान पहले",
  farmerFirstDescription:
    "यह प्लेटफॉर्म सरल नेविगेशन, उपयोगी जानकारी और किसानों की पहुंच को ध्यान में रखकर बनाया गया है।",

  finalTitle: "एक स्मार्ट कृषि भविष्य का निर्माण",
  finalDescription:
    "Agri-Sahayak AI, डिजिटल सेवाओं और कृषि मार्केटप्लेस को एक साथ लाकर अधिक कनेक्टेड खेती का अनुभव प्रदान करने का प्रयास करता है।",
},
disease: {
  badge: "AI आधारित फसल देखभाल",
  title: "फसल रोग पहचान",
  description:
    "अपनी फसल या पौधे की पत्ती की स्पष्ट तस्वीर अपलोड करें और संभावित रोगों की पहचान तथा उपयोगी खेती संबंधी मार्गदर्शन प्राप्त करने के लिए AI आधारित विश्लेषण का उपयोग करें।",

  uploadTitle: "फसल की तस्वीर अपलोड करें",
  uploadDescription:
    "प्रभावित फसल या पत्ती की स्पष्ट तस्वीर अपलोड करें।",
  uploadImage: "तस्वीर अपलोड करें",
  selectImage:
    "अपने डिवाइस से फसल की तस्वीर चुनने के लिए यहां क्लिक करें।",
  chooseImage: "तस्वीर चुनें",
  fileTypes: "JPG, JPEG या PNG",

  selectedCrop: "चयनित फसल",
  removeImage: "तस्वीर हटाएं",
  remove: "हटाएं",

  analyze: "फसल का विश्लेषण करें",

  analysisTitle: "AI विश्लेषण",
  analysisDescription:
    "आपके फसल विश्लेषण के परिणाम यहां दिखाई देंगे।",
  noAnalysis: "अभी कोई विश्लेषण नहीं",
  noAnalysisDescription:
    "रोग की जानकारी और खेती संबंधी मार्गदर्शन प्राप्त करने के लिए फसल की तस्वीर अपलोड करें और विश्लेषण शुरू करें।",

  whatYouGet: "आपको क्या मिलेगा",

  identificationTitle: "रोग की पहचान",
  identificationDescription:
    "AI मॉडल द्वारा पहचाने गए संभावित फसल रोग की जानकारी।",

  confidenceTitle: "विश्वसनीयता स्कोर",
  confidenceDescription:
    "पहचानी गई स्थिति के लिए AI मॉडल का विश्वास स्तर।",

  treatmentTitle: "उपचार संबंधी मार्गदर्शन",
  treatmentDescription:
    "वास्तविक AI विश्लेषण के आधार पर व्यावहारिक उपचार संबंधी जानकारी।",

  preventionTitle: "बचाव",
  preventionDescription:
    "आपकी फसल की सुरक्षा में मदद करने के लिए बचाव संबंधी सुझाव।",

  noticeTitle: "AI विश्लेषण सूचना",
  noticeDescription:
    "रोग का परिणाम, विश्वसनीयता स्कोर, उपचार और बचाव की जानकारी वास्तविक AI/backend integration से प्राप्त होगी। तस्वीर अपलोड करने पर कोई कृत्रिम निदान प्रदर्शित नहीं किया जाता है।",

  invalidImage: "कृपया एक मान्य तस्वीर चुनें।",
  backendNotice:
    "AI विश्लेषण को backend integration के चरण में जोड़ा जाएगा।",
},
equipmentRental: {
  badge: "कृषि उपकरण किराया",

  title: "खेती के उपकरण आसानी से किराए पर लें",

  description:
    "महंगे कृषि उपकरण खरीदने की आवश्यकता के बिना अपने आसपास खेती के उपकरण खोजें और किराए पर लें।",

  searchPlaceholder: "उपकरण या स्थान खोजें...",

  allEquipment: "सभी उपकरण",
  tractor: "ट्रैक्टर",
  tillage: "जुताई उपकरण",
  seeding: "बुवाई उपकरण",
  harvesting: "कटाई उपकरण",

  availableTitle: "उपलब्ध उपकरण",

  availableDescription:
    "किराए के लिए उपलब्ध कृषि उपकरण देखें।",

  noEquipment: "कोई उपकरण नहीं मिला",

  changeFilter:
    "अपनी खोज या उपकरण श्रेणी बदलने का प्रयास करें।",

  rentalPrice: "किराया",

  rentNow: "अभी किराए पर लें",

  howTitle: "उपकरण किराए पर कैसे लें",

  howDescription:
    "Agri-Sahayak के माध्यम से कृषि उपकरण किराए पर लेना आसान और सुविधाजनक होगा।",

  stepOneTitle: "उपकरण खोजें",

  stepOneDescription:
    "अपने स्थान के पास उपलब्ध उपयुक्त खेती के उपकरण खोजें।",

  stepTwoTitle: "चुनें और बुक करें",

  stepTwoDescription:
    "उपकरण चुनें और अपनी आवश्यकता के अनुसार किराये की अवधि चुनें।",

  stepThreeTitle: "उपकरण का उपयोग करें",

  stepThreeDescription:
    "उपकरण प्रदाता से संपर्क करें और अपनी खेती की जरूरत के लिए मशीनरी का उपयोग करें।",

  noticeTitle: "उपकरण किराया जानकारी",

  noticeDescription:
    "उपकरण की लिस्टिंग, किराया, उपलब्धता और बुकिंग को integration चरण के दौरान backend marketplace से जोड़ा जाएगा।",

  types: {
    Tractor: "ट्रैक्टर",
    "Tillage Equipment": "जुताई उपकरण",
    "Seeding Equipment": "बुवाई उपकरण",
    "Harvesting Equipment": "कटाई उपकरण",
  },

  items: {
    Tractor: "ट्रैक्टर",
    Rotavator: "रोटावेटर",
    "Seed Drill": "सीड ड्रिल",
    Harvester: "हार्वेस्टर",
  },

  descriptions: {
    Tractor:
      "जुताई, खेती और खेत की तैयारी के लिए उपयुक्त।",

    Rotavator:
      "मिट्टी की तैयारी और खेत की जुताई के लिए उपयोगी।",

    "Seed Drill":
      "किसानों को बीजों की समान और प्रभावी बुवाई में मदद करता है।",

    Harvester:
      "फसल की तेज कटाई के लिए उपयोगी।",
  },
},
productsMarketplace: {
  badge: "Agri-Sahayak मार्केटप्लेस",

  title: "बीज, खाद और कृषि उत्पाद",

  description:
    "किसानों की खेती की पूरी यात्रा में सहायता करने के लिए बनाए गए कृषि उत्पादों को देखें।",

  qualityProducts: "गुणवत्तापूर्ण उत्पाद",
  easySearch: "आसान खोज",
  farmerFriendly: "किसान अनुकूल",

  searchPlaceholder:
    "बीज, खाद और कृषि उत्पाद खोजें...",

  allProducts: "सभी उत्पाद",
  seeds: "बीज",
  fertilizers: "खाद",
  agriculturalProducts: "कृषि उत्पाद",

  availableProducts: "उपलब्ध उत्पाद",

  showing: "दिखाए जा रहे हैं",
  product: "उत्पाद",
  products: "उत्पाद",

  price: "कीमत",
  per: "प्रति",
  add: "जोड़ें",

  noProducts: "कोई उत्पाद नहीं मिला",
  tryDifferent:
    "कोई दूसरा खोज शब्द या श्रेणी आज़माएं।",

  qualitySeeds: "गुणवत्तापूर्ण बीज",
  qualitySeedsDescription:
    "कृषि उपयोग के लिए विभिन्न प्रकार के बीज विकल्प देखें।",

  fertilizersTitle: "खाद",
  fertilizersDescription:
    "खाद और मिट्टी के लिए उपयोगी उत्पादों को देखें।",

  easyShopping: "आसान खरीदारी",
  easyShoppingDescription:
    "उत्पाद खोजें और सरल UI के माध्यम से उन्हें कार्ट में जोड़ें।",

  demoNoticeTitle: "डेमो सूचना:",

  demoNoticeDescription:
    "यहां दिखाई गई उत्पाद जानकारी केवल सैंपल UI डेटा है। वास्तविक उत्पाद, विक्रेता, इन्वेंट्री, ऑर्डर और भुगतान बाद में backend के माध्यम से जोड़े जाएंगे।",

  categories: {
    Seeds: "बीज",
    Fertilizers: "खाद",
    "Agricultural Products": "कृषि उत्पाद",
  },

  items: {
    "Premium Wheat Seeds": "प्रीमियम गेहूं के बीज",
    "Hybrid Rice Seeds": "हाइब्रिड चावल के बीज",
    "Organic Compost": "जैविक कम्पोस्ट",
    "NPK Fertilizer": "NPK खाद",
    "Urea Fertilizer": "यूरिया खाद",
    "Vegetable Seed Pack": "सब्जियों के बीज पैक",
    "Bio Fertilizer": "जैविक खाद",
    "Crop Growth Booster": "फसल वृद्धि बूस्टर",
  },

  descriptions: {
    "Premium Wheat Seeds":
      "विश्वसनीय फसल उत्पादन के लिए उपयुक्त उच्च गुणवत्ता वाले गेहूं के बीज।",

    "Hybrid Rice Seeds":
      "स्वस्थ फसल वृद्धि के लिए तैयार किए गए हाइब्रिड चावल के बीज।",

    "Organic Compost":
      "मिट्टी के स्वास्थ्य और उर्वरता को बेहतर बनाने के लिए जैविक कम्पोस्ट।",

    "NPK Fertilizer":
      "फसलों के लिए आवश्यक पोषक तत्वों वाला संतुलित खाद।",

    "Urea Fertilizer":
      "फसल पोषण के लिए सामान्य रूप से उपयोग की जाने वाली नाइट्रोजन युक्त खाद।",

    "Vegetable Seed Pack":
      "खेती के लिए गुणवत्तापूर्ण सब्जियों के बीजों का चयन।",

    "Bio Fertilizer":
      "मिट्टी के स्वास्थ्य में सहायता करने के लिए बनाया गया जैव-आधारित कृषि उत्पाद।",

    "Crop Growth Booster":
      "फसल प्रबंधन में सहायता करने वाला कृषि वृद्धि उत्पाद।",
  },
},
cropMarketplace: {
  badge: "फसल मार्केटप्लेस",
  title: "फसल खरीदें और बेचें",
  description:
    "कृषि उत्पादों के लिए एक सरल डिजिटल मार्केटप्लेस के माध्यम से किसानों और खरीदारों को जोड़ें।",

  sellCrop: "अपनी फसल बेचें",

  searchPlaceholder: "फसल, किस्म या स्थान खोजें...",

  allCategories: "सभी श्रेणियां",
  grains: "अनाज",
  vegetables: "सब्जियां",

  listingsTitle: "फसल लिस्टिंग",
  listingsDescription:
    "उपलब्ध कृषि उत्पादों को देखें।",
  listingsCount: "लिस्टिंग",

  noCrops: "कोई फसल नहीं मिली",
  changeFilter:
    "अपनी खोज या श्रेणी फ़िल्टर बदलने का प्रयास करें।",

  quantity: "मात्रा",
  price: "कीमत",
  viewListing: "लिस्टिंग देखें",

  lookingToBuy: "खरीदना चाहते हैं?",
  buyDescription:
    "फसल लिस्टिंग देखें और कृषि उत्पादों के लिए विक्रेताओं से संपर्क करें।",

  wantToSell: "बेचना चाहते हैं?",
  sellDescription:
    "किसान अपनी फसल की लिस्टिंग बना सकेंगे और संभावित खरीदारों से जुड़ सकेंगे।",

  categories: {
    Grains: "अनाज",
    Vegetables: "सब्जियां",
  },

  crops: {
    Wheat: "गेहूं",
    Rice: "चावल",
    Potato: "आलू",
    Tomato: "टमाटर",
  },

  varieties: {
    "Premium Wheat": "प्रीमियम गेहूं",
    "Basmati Rice": "बासमती चावल",
    "Fresh Potato": "ताजा आलू",
    "Fresh Tomato": "ताजा टमाटर",
  },
},

voiceAssistant: {
  badge: "किसानों के लिए वॉयस असिस्टेंट",
  title: "पूछें। बोलें। खेती की मदद पाएं।",
  description:
    "Agri-Sahayak से हिंदी या अंग्रेजी में बात करें और खेती से जुड़े अपने सवालों में सहायता प्राप्त करें।",

  welcome:
    "नमस्ते! मैं आपका Agri-Sahayak खेती सहायक हूं। फसल, मौसम, स्टोरेज, बाजार या खेती से जुड़ा कोई भी सवाल पूछें।",

  assistantName: "Agri-Sahayak सहायक",
  listeningStatus: "आपकी बात सुनी जा रही है...",
  readyStatus: "खेती से जुड़े सवालों में मदद के लिए तैयार",

  english: "English",
  hindi: "हिंदी",

  stopListening: "सुनना बंद करें",
  startListening: "सुनना शुरू करें",

  listeningButton: "सुन रहा हूं... बंद करने के लिए टैप करें",
  speakButton: "बोलने के लिए माइक्रोफोन पर टैप करें",
  voiceSupport: "हिंदी और अंग्रेजी वॉयस सपोर्ट",

  inputPlaceholder: "अपना खेती से जुड़ा सवाल लिखें...",
  inputPlaceholderHi: "अपना सवाल लिखें...",
  sendMessage: "संदेश भेजें",

  clearConversation: "बातचीत साफ करें",

  clearWelcome:
    "नमस्ते! मैं आपका Agri-Sahayak खेती सहायक हूं। खेती से जुड़ा कोई भी सवाल पूछें।",

  quickQuestions: "त्वरित सवाल",
  quickQuestionsDescription: "इनमें से कोई सवाल पूछकर देखें",

  quickFertilizer: "गेहूं की फसल में कौन सा खाद डालें?",
  quickWeather: "आज मौसम कैसा है?",
  quickStorage: "नजदीकी कोल्ड स्टोरेज कैसे खोजें?",
  quickSell: "फसल कहां बेच सकते हैं?",

  farmingTopics: "खेती के विषय",

  cropHealth: "फसल स्वास्थ्य",
  weatherAlerts: "मौसम और अलर्ट",
  cropMarketplace: "फसल मार्केटप्लेस",
  coldStorage: "कोल्ड स्टोरेज",
  seedsFertilizers: "बीज और खाद",

  voiceFirstTitle: "वॉयस आधारित खेती",
  voiceFirstDescription:
    "हिंदी और अंग्रेजी में प्राकृतिक वॉयस इंटरैक्शन के माध्यम से खेती की जानकारी को आसानी से उपलब्ध कराने के लिए बनाया गया है।",
},
governmentSchemes: {
  title: "सरकारी योजनाएं",
  description:
    "किसानों और कृषि विकास के लिए बनाई गई सरकारी योजनाओं और सहायता कार्यक्रमों की जानकारी प्राप्त करें।",

  searchPlaceholder: "सरकारी योजनाएं खोजें...",

  availableSchemes: "उपलब्ध योजनाएं",
  availableDescription:
    "योजनाओं की जानकारी देखें और उनके लाभ तथा पात्रता की जांच करें।",

  noSchemes: "कोई योजना नहीं मिली",
  tryDifferent: "किसी दूसरे कीवर्ड से खोजने का प्रयास करें।",

  benefits: "लाभ",
  eligibility: "पात्रता",
  viewDetails: "विवरण देखें",

  importantTitle: "महत्वपूर्ण जानकारी",
  importantDescription:
    "आवेदन करने से पहले सरकारी योजना की जानकारी संबंधित आधिकारिक सरकारी पोर्टल से अवश्य सत्यापित करें।",

  categories: {
    "Financial Support": "वित्तीय सहायता",
    Agriculture: "कृषि",
    "Farmer Welfare": "किसान कल्याण",
  },

  schemes: {
    "Government Scheme": {
      title: "सरकारी योजना",
      description:
        "पात्र किसानों के लिए उपलब्ध सरकारी वित्तीय सहायता और सहयोग की जानकारी।",
      eligibility: "पात्रता की जानकारी यहां उपलब्ध कराई जाएगी।",
    },

    "Agricultural Support Scheme": {
      title: "कृषि सहायता योजना",
      description:
        "कृषि विकास कार्यक्रमों और किसान सहायता पहलों की जानकारी।",
      eligibility: "पात्रता की जानकारी यहां उपलब्ध कराई जाएगी।",
    },

    "Farmer Welfare Scheme": {
      title: "किसान कल्याण योजना",
      description:
        "किसानों और कृषि समुदायों की सहायता के लिए बनाए गए कल्याण कार्यक्रमों की जानकारी।",
      eligibility: "पात्रता की जानकारी यहां उपलब्ध कराई जाएगी।",
    },
  },

  benefitItems: {
    "Financial assistance": "वित्तीय सहायता",
    "Support for eligible farmers": "पात्र किसानों के लिए सहायता",
    "Application information": "आवेदन संबंधी जानकारी",

    "Agricultural support": "कृषि सहायता",
    "Farmer assistance": "किसान सहायता",
    "Program information": "कार्यक्रम की जानकारी",

    "Farmer welfare": "किसान कल्याण",
    "Government assistance": "सरकारी सहायता",
    "Support information": "सहायता संबंधी जानकारी",
  },
},
coldStorage: {
  badge: "स्मार्ट स्टोरेज खोजक",
  title: "नजदीकी कोल्ड स्टोरेज खोजें",
  description:
    "अपने स्थान के पास उपयुक्त कोल्ड स्टोरेज सुविधाएं खोजें और दूरी, पता, संपर्क तथा स्टोरेज सुविधाओं की उपयोगी जानकारी प्राप्त करें।",

  searchLocation: "स्थान खोजें",
  findStorage: "अपने पास स्टोरेज खोजें",
  searchDescription:
    "नजदीकी कोल्ड स्टोरेज सुविधाओं को खोजने के लिए शहर, गांव, जिला या क्षेत्र दर्ज करें।",
  locationPlaceholder: "अपना स्थान दर्ज करें...",
  search: "खोजें",
  useLocation: "मेरा स्थान उपयोग करें",

  nearbyFacilities: "नजदीकी सुविधाएं",
  resultsTitle: "कोल्ड स्टोरेज परिणाम",
  liveResults: "लाइव परिणाम जल्द उपलब्ध होंगे",

  emptyTitle: "नजदीकी कोल्ड स्टोरेज खोजें",
  emptyDescription:
    "उपलब्ध कोल्ड स्टोरेज सुविधाओं को खोजने के लिए ऊपर अपना स्थान दर्ज करें। लोकेशन API कनेक्ट होने के बाद वास्तविक सुविधाएं और उनकी जानकारी दिखाई जाएगी।",

  facilityName: "कोल्ड स्टोरेज सुविधा",
  facilityInfo: "सुविधा की जानकारी यहां दिखाई जाएगी",
  nearby: "नजदीक",

  address: "पता यहां दिखाई देगा",
  distance: "दूरी यहां दिखाई देगी",
  contact: "संपर्क यहां दिखाई देगा",
  hours: "खुलने का समय यहां दिखाई देगा",

  storageDetails: "स्टोरेज विवरण",
  capacity: "क्षमता",
  availability: "उपलब्धता",

  mapTitle: "स्टोरेज मानचित्र",
  mapDescription: "नजदीकी सुविधाएं यहां दिखाई जाएंगी",
  interactiveMap: "इंटरैक्टिव मानचित्र",
  mapPlaceholder:
    "मानचित्र और वास्तविक कोल्ड स्टोरेज स्थानों को लोकेशन और API इंटीग्रेशन चरण के दौरान जोड़ा जाएगा।",

  whyUse: "इसका उपयोग क्यों करें",
  betterDecisions: "बेहतर स्टोरेज निर्णय",
  whyDescription:
    "Agri-Sahayak उपयुक्त स्टोरेज विकल्पों को खोजने और उनकी तुलना करने को आसान बनाने के लिए बनाया गया है।",

  nearbyLocations: "नजदीकी स्थान",
  nearbyLocationsDescription:
    "अपने चुने हुए स्थान के आधार पर स्टोरेज सुविधाएं खोजें।",

  usefulInformation: "उपयोगी जानकारी",
  usefulInformationDescription:
    "पता, दूरी, संपर्क और स्टोरेज की जानकारी जैसी महत्वपूर्ण जानकारी देखें।",

  reliableInformation: "विश्वसनीय जानकारी",
  reliableInformationDescription:
    "वास्तविक सुविधा की जानकारी सत्यापित लोकेशन और डेटा स्रोतों के माध्यम से प्रदर्शित की जाएगी।",

  locationIntegration:
    "वर्तमान स्थान को लोकेशन इंटीग्रेशन चरण में जोड़ा जाएगा।",
},
    },
  },
};

// =========================
// INITIALIZE i18next
// =========================
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;