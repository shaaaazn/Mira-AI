import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "app_name": "Mira AI", "nav_home": "Home", "nav_scan": "Scan", "nav_history": "History", "nav_weather": "Weather", "nav_profile": "Profile",
      "dash_greeting": "Good morning, Mark!", "dash_weather_desc": "72°F & Sunny", "dash_humidity": "42% Humidity", "dash_quick_scan": "Launch Quick Scan", "dash_health_index": "Crop Health Index", "dash_optimal": "OPTIMAL", "dash_north_field": "NORTH FIELD",
      "scan_target": "Drag & Drop Image Here", "scan_or": "or click to upload", "scan_result_title": "Analysis Results", "scan_disease": "Disease Name", "scan_accuracy": "Accuracy / Confidence", "scan_cause": "Cause / Explanation", "scan_solution": "Solution / Treatment", "scan_button": "Treat Plan", "scan_detecting": "AI Processing & Pattern Detection...",
      "history_title": "Scan History", "history_subtitle": "Archive of field analysis and crop diagnostics.", "history_recent": "Recent", "history_delete": "Delete",
      "weather_title": "Weather Intelligence", "weather_subtitle": "Real-time localized insights for crop protection.", "weather_search_placeholder": "Search city for weather info...", "weather_precip": "Precipitation", "weather_wind": "Wind", "weather_insights": "AI agronomy highlights",
      "profile_title": "Farmer Profile", "profile_edit": "Edit Profile", "profile_name": "Mark Johnson", "profile_email": "mark.johnson@farmcare.ai", "profile_sector": "Sector 4B Manager", "profile_location": "Fairfield County",
      "auth_subtitle": "Crop Intelligence", "auth_role_agronomist": "Field Agronomist", "auth_role_manager": "Farm Manager", "auth_telemetry_online": "SYS: ONLINE", "auth_gps_verified": "GPS Verified Login", "auth_security_notice": "Sign in with Google is recommended for enhanced security.", "auth_placeholder_id": "Agronomist ID / Email", "auth_placeholder_key": "Passkey / Security Hash", "auth_google_btn": "Sign in with Google", "auth_login_btn": "Standard Sign In", "auth_error_missing": "Please provide email and password.", "auth_status_connecting": "Authenticating Uplink..."
    }
  },
  hi: {
    translation: {
      "app_name": "मीरा एआई", "nav_home": "होम", "nav_scan": "स्कैन", "nav_history": "इतिहास", "nav_weather": "मौसम", "nav_profile": "प्रोफ़ाइल",
      "dash_greeting": "सुप्रभात, मार्क!", "dash_weather_desc": "72°F और धूप", "dash_humidity": "42% नमी", "dash_quick_scan": "त्वरित स्कैन शुरू करें", "dash_health_index": "फसल स्वास्थ्य सूचकांक", "dash_optimal": "इष्टतम", "dash_north_field": "उत्तरी क्षेत्र",
      "scan_target": "छवि यहाँ खींचें और छोड़ें", "scan_or": "या अपलोड करने के लिए क्लिक करें", "scan_result_title": "विश्लेषण परिणाम", "scan_disease": "बीमारी का नाम", "scan_accuracy": "सटीकता / विश्वास", "scan_cause": "कारण / स्पष्टीकरण", "scan_solution": "समाधान / उपचार", "scan_button": "उपचार योजना", "scan_detecting": "एआई प्रसंस्करण...",
      "history_title": "स्कैन इतिहास", "history_subtitle": "फसल निदान का संग्रह।", "history_recent": "हाल ही में", "history_delete": "हटाएं",
      "weather_title": "मौसम की जानकारी", "weather_subtitle": "फसल सुरक्षा के लिए वास्तविक समय की जानकारी।", "weather_search_placeholder": "शहर खोजें...", "weather_precip": "वर्षा", "weather_wind": "हवा", "weather_insights": "एआई कृषि सुझाव",
      "profile_title": "किसान प्रोफ़ाइल", "profile_edit": "प्रोफ़ाइल संपादित करें", "profile_name": "मार्क जॉनसन", "profile_email": "mark.johnson@farmcare.ai", "profile_sector": "सेक्टर 4 बी प्रबंधक", "profile_location": "फेयरफील्ड काउंटी",
      "auth_subtitle": "फसल बुद्धिमत्ता", "auth_role_agronomist": "क्षेत्र कृषिविद्", "auth_role_manager": "खेत प्रबंधक", "auth_telemetry_online": "प्रणाली: ऑनलाइन", "auth_gps_verified": "जीपीएस सत्यापित", "auth_security_notice": "बढ़ी हुई सुरक्षा के लिए Google के साथ साइन इन करने की अनुशंसा की जाती है।", "auth_placeholder_id": "कृषिविद् आईडी / ईमेल", "auth_placeholder_key": "पासकी / सुरक्षा हैश", "auth_google_btn": "Google के साथ साइन इन करें", "auth_login_btn": "मानक साइन इन", "auth_error_missing": "कृपया ईमेल और पासवर्ड प्रदान करें।", "auth_status_connecting": "प्रमाणीकरण..."
    }
  },
  bn: {
    translation: {
      "app_name": "মীরা এআই", "nav_home": "হোম", "nav_scan": "স্ক্যান", "nav_history": "ইতিহাস", "nav_weather": "আবহাওয়া", "nav_profile": "প্রোফাইল",
      "dash_greeting": "সুপ্রভাত, মার্ক!", "dash_weather_desc": "৭২°F এবং রৌদ্রোজ্জ্বল", "dash_humidity": "৪২% আর্দ্রতা", "dash_quick_scan": "স্ক্যান শুরু করুন", "dash_health_index": "ফসল স্বাস্থ্য সূচক", "dash_optimal": "অনুকূল", "dash_north_field": "উত্তর মাঠ",
      "scan_target": "ছবি এখানে ছেড়ে দিন", "scan_or": "বা আপলোড করতে ক্লিক করুন", "scan_result_title": "বিশ্লেষণের ফলাফল", "scan_disease": "রোগের নাম", "scan_accuracy": "সঠিকতা", "scan_cause": "কারণ / ব্যাখ্যা", "scan_solution": "সমাধান / চিকিৎসা", "scan_button": "চিকিৎসা পরিকল্পনা", "scan_detecting": "এআই প্রসেসিং...",
      "history_title": "স্ক্যান ইতিহাস", "history_subtitle": "মাঠ বিশ্লেষণের আর্কাইভ।", "history_recent": "সাম্প্রতিক", "history_delete": "মুছুন",
      "weather_title": "আবহাওয়া", "weather_subtitle": "ফसल সুরক্ষার জন্য রিয়েল-টাইম তথ্য।", "weather_search_placeholder": "শহর খুঁজুন...", "weather_precip": "বৃষ্টিপাত", "weather_wind": "বাতাস", "weather_insights": "এআই কৃষি পরামর্শ",
      "profile_title": "কৃষক প্রোফাইল", "profile_edit": "প্রোফাইল সম্পাদনা করুন", "profile_name": "মার্ক জনসন", "profile_email": "mark.johnson@farmcare.ai", "profile_sector": "সেক্টর ৪বি ম্যানেজার", "profile_location": "ফেয়ারফিল্ড কাউন্টি",
      "auth_subtitle": "ক্রপ ইন্টেলিজেন্স", "auth_role_agronomist": "এগ্রোনমিস্ট", "auth_role_manager": "ফার্ম ম্যানেজার", "auth_telemetry_online": "সিস্টেম: অনলাইন", "auth_gps_verified": "GPS যাচাইকৃত", "auth_security_notice": "নিরাপত্তার জন্য Google এর সাথে সাইন ইন করুন।", "auth_placeholder_id": "ইমেইল", "auth_placeholder_key": "পাসওয়ার্ড", "auth_google_btn": "Google দিয়ে সাইন ইন", "auth_login_btn": "লগইন", "auth_error_missing": "তথ্য দিন", "auth_status_connecting": "সংযুক্ত হচ্ছে..."
    }
  },
  mr: {
    translation: {
      "app_name": "मीरा एआय", "nav_home": "होम", "nav_scan": "स्कॅन", "nav_history": "इतिहास", "nav_weather": "हवामान", "nav_profile": "प्रोफाइल",
      "dash_greeting": "सुप्रभात, मार्क!", "dash_weather_desc": "72°F आणि सूर्यप्रकाश", "dash_humidity": "42% आर्द्रता", "dash_quick_scan": "स्कॅन सुरू करा", "dash_health_index": "पीक आरोग्य निर्देशांक", "dash_optimal": "इष्टतम", "dash_north_field": "उत्तर शेत",
      "scan_target": "इमेज येथे ड्रॅग आणि ड्रॉप करा", "scan_or": "किंवा अपलोड करण्यासाठी क्लिक करा", "scan_result_title": "विश्लेषण निकाल", "scan_disease": "आजाराचे नाव", "scan_accuracy": "अचूकता", "scan_cause": "कारण / स्पष्टीकरण", "scan_solution": "उपाय / उपचार", "scan_button": "उपचार योजना", "scan_detecting": "एआय प्रक्रियेत...",
      "history_title": "स्कॅन इतिहास", "history_subtitle": "पीक निदानाचे संग्रहण.", "history_recent": "अलीकडील", "history_delete": "हटवा",
      "weather_title": "हवामान माहिती", "weather_subtitle": "रिअल-टाइम हवामान अंदाज.", "weather_search_placeholder": "शहर शोधा...", "weather_precip": "पाऊस", "weather_wind": "वारा", "weather_insights": "एआय शेती सल्ला",
      "profile_title": "शेतकरी प्रोफाइल", "profile_edit": "प्रोफाइल संपादित करा", "profile_name": "मार्क जॉन्सन", "profile_email": "mark.johnson@farmcare.ai", "profile_sector": "सेक्टर 4B व्यवस्थापक", "profile_location": "फेअरफिल्ड काउंटी",
      "auth_subtitle": "पीक बुद्धिमत्ता", "auth_role_agronomist": "कृषिविज्ञानी", "auth_role_manager": "शेती व्यवस्थापक", "auth_telemetry_online": "ऑनलाइन", "auth_gps_verified": "GPS सुरक्षित", "auth_security_notice": "Google सह साइन इन करणे सुरक्षित आहे.", "auth_placeholder_id": "ईमेल", "auth_placeholder_key": "पासवर्ड", "auth_google_btn": "Google सह साइन इन करा", "auth_login_btn": "लॉगिन", "auth_error_missing": "माहिती द्या.", "auth_status_connecting": "प्रक्रिया..."
    }
  },
  te: {
    translation: {
      "app_name": "మీరా ఏఐ", "nav_home": "హోమ్", "nav_scan": "స్కాన్", "nav_history": "చరిత్ర", "nav_weather": "వాతావరణం", "nav_profile": "ప్రొఫైల్",
      "dash_greeting": "శుభోదయం, మార్క్!", "dash_weather_desc": "72°F & ఎండగా ఉంది", "dash_humidity": "42% తేమ", "dash_quick_scan": "స్కాన్ చేయండి", "dash_health_index": "పంట ఆరోగ్య సూచిక", "dash_optimal": "అనుకూలమైనది", "dash_north_field": "ఉత్తర పొలం",
      "scan_target": "చిత్రాన్ని ఇక్కడ వదలండి", "scan_or": "లేదా అప్లోడ్ చేయడానికి క్లిక్ చేయండి", "scan_result_title": "విశ్లేషణ ఫలితాలు", "scan_disease": "వ్యాధి పేరు", "scan_accuracy": "ఖచ్చితత్వం", "scan_cause": "కారణం / వివరణ", "scan_solution": "పరిష్కారం / చికిత్స", "scan_button": "చికిత్స ప్రణాళిక", "scan_detecting": "ఏఐ ప్రాసెసింగ్...",
      "history_title": "స్కాన్ చరిత్ర", "history_subtitle": "పంట విశ్లేషణ ఆర్కైవ్.", "history_recent": "ఇటీవలి", "history_delete": "తొలగించు",
      "weather_title": "వాతావరణ సమాచారం", "weather_subtitle": "నిజ-సమయ వాతావరణ అంచనా.", "weather_search_placeholder": "నగరాన్ని శోధించండి...", "weather_precip": "వర్షపాతం", "weather_wind": "గాలి", "weather_insights": "ఏఐ వ్యవసాయ సూచనలు",
      "profile_title": "రైతు ప్రొఫైల్", "profile_edit": "ప్రొఫైల్ సవరించండి", "profile_name": "మార్క్ జాన్సన్", "profile_email": "mark.johnson@farmcare.ai", "profile_sector": "సెక్టార్ 4B మేనేజర్", "profile_location": "ఫెయిర్‌ఫీల్డ్ కౌంటీ",
      "auth_subtitle": "పంట ఇంటెలిజెన్స్", "auth_role_agronomist": "వ్యవసాయ నిపుణుడు", "auth_role_manager": "వ్యవసాయ మేనేజర్", "auth_telemetry_online": "ఆన్‌లైన్", "auth_gps_verified": "GPS ధృవీకరించబడింది", "auth_security_notice": "Google తో సైన్ ఇన్ చేయడం సురక్షితం.", "auth_placeholder_id": "ఇమెయిల్", "auth_placeholder_key": "పాస్‌వర్డ్", "auth_google_btn": "Google ద్వారా సైన్ ఇన్", "auth_login_btn": "ప్రవేశించండి", "auth_error_missing": "వివరాలు ఇవ్వండి.", "auth_status_connecting": "కనెక్ట్..."
    }
  },
  ta: {
    translation: {
      "app_name": "மீரா ஏஐ", "nav_home": "முகப்பு", "nav_scan": "ஸ்கேன்", "nav_history": "வரலாறு", "nav_weather": "வானிலை", "nav_profile": "சுயவிவரம்",
      "dash_greeting": "காலை வணக்கம், மார்க்!", "dash_weather_desc": "72°F மற்றும் சூரிய ஒளி", "dash_humidity": "42% ஈரப்பதம்", "dash_quick_scan": "ஸ்கேன் தொடங்கு", "dash_health_index": "பயிர் சுகாதார குறியீடு", "dash_optimal": "சிறந்த", "dash_north_field": "வடக்கு வயல்",
      "scan_target": "படத்தை இங்கே விடவும்", "scan_or": "அல்லது பதிவேற்ற கிளிக் செய்யவும்", "scan_result_title": "பகுப்பாய்வு முடிவுகள்", "scan_disease": "நோய் பெயர்", "scan_accuracy": "துல்லியம்", "scan_cause": "காரணம் / விளக்கம்", "scan_solution": "தீர்வு / சிகிச்சை", "scan_button": "சிகிச்சை திட்டம்", "scan_detecting": "செயலாக்கம்...",
      "history_title": "ஸ்கேன் வரலாறு", "history_subtitle": "பயிர் பகுப்பாய்வு காப்பகம்.", "history_recent": "சமீபத்திய", "history_delete": "நீக்கு",
      "weather_title": "வானிலை தகவல்", "weather_subtitle": "உண்மையான நேர வானிலை கணிப்பு.", "weather_search_placeholder": "நகரத்தை தேடு...", "weather_precip": "மழைப்பொழிவு", "weather_wind": "காற்று", "weather_insights": "விவசாய குறிப்புகள்",
      "profile_title": "விவசாயி சுயவிவரம்", "profile_edit": "சுயவிவரத்தை திருத்து", "profile_name": "மார்க் ஜான்சன்", "profile_email": "mark.johnson@farmcare.ai", "profile_sector": "துறை 4B மேலாளர்", "profile_location": "பேர்ஃபீல்ட் கவுண்டி",
      "auth_subtitle": "பயிர் நுண்ணறிவு", "auth_role_agronomist": "வேளாண் நிபுணர்", "auth_role_manager": "பண்ணை மேலாளர்", "auth_telemetry_online": "ஆன்லைன்", "auth_gps_verified": "GPS சரிபார்க்கப்பட்டது", "auth_security_notice": "பாதுகாப்பிற்கு Google ஐப் பயன்படுத்தவும்.", "auth_placeholder_id": "மின்னஞ்சல்", "auth_placeholder_key": "கடவுச்சொல்", "auth_google_btn": "Google மூலம் உள்நுழைக", "auth_login_btn": "உள்நுழை", "auth_error_missing": "தகவல் தேவை.", "auth_status_connecting": "இணைக்கிறது..."
    }
  },
  gu: {
    translation: {
      "app_name": "મીરા એઆઈ", "nav_home": "હોમ", "nav_scan": "સ્કેન", "nav_history": "ઇતિહાસ", "nav_weather": "હવામાન", "nav_profile": "પ્રોફાઇલ",
      "dash_greeting": "સુપ્રભાત, માર્ક!", "dash_weather_desc": "72°F અને તડકો", "dash_humidity": "42% ભેજ", "dash_quick_scan": "સ્કેન શરૂ કરો", "dash_health_index": "પાક આરોગ્ય સૂચકાંક", "dash_optimal": "શ્રેષ્ઠ", "dash_north_field": "ઉત્તર ખેતર",
      "scan_target": "છબી અહીં ખેંચો અને છોડો", "scan_or": "અથવા અપલોડ કરવા ક્લિક કરો", "scan_result_title": "વિશ્લેષણ પરિણામો", "scan_disease": "રોગનું નામ", "scan_accuracy": "ચોકસાઈ", "scan_cause": "કારણ / સમજૂતી", "scan_solution": "ઉકેલ / સારવાર", "scan_button": "સારવાર યોજના", "scan_detecting": "એઆઈ પ્રોસેસિંગ...",
      "history_title": "સ્કેન ઇતિહાસ", "history_subtitle": "પાક નિદાન આર્કાઇવ.", "history_recent": "તાજેતરનું", "history_delete": "કાઢી નાખો",
      "weather_title": "હવામાન માહિતી", "weather_subtitle": "રિયલ-ટાઇમ હવામાનની આગાહી.", "weather_search_placeholder": "શહેર શોધો...", "weather_precip": "વરસાદ", "weather_wind": "પવન", "weather_insights": "એઆઈ ખેતી સૂચનો",
      "profile_title": "ખેડૂત પ્રોફાઇલ", "profile_edit": "પ્રોફાઇલ સંપાદિત કરો", "profile_name": "માર્ક જોહ્ન્સન", "profile_email": "mark.johnson@farmcare.ai", "profile_sector": "સેક્ટર 4B મેનેજર", "profile_location": "ફેરફિલ્ડ કાઉન્ટી",
      "auth_subtitle": "પાક બુદ્ધિમત્તા", "auth_role_agronomist": "કૃષિ વિજ્ઞાની", "auth_role_manager": "ફાર્મ મેનેજર", "auth_telemetry_online": "ઓનલાઈન", "auth_gps_verified": "GPS સલામત", "auth_security_notice": "Google સાથે સાઇન ઇન કરો.", "auth_placeholder_id": "ઇમેઇલ", "auth_placeholder_key": "પાસવર્ડ", "auth_google_btn": "Google સાથે સાઇન ઇન", "auth_login_btn": "લૉગિન", "auth_error_missing": "માહિતી આપો.", "auth_status_connecting": "જોડાયેલ છે..."
    }
  },
  es: {
    translation: {
      "app_name": "Mira AI", "nav_home": "Inicio", "nav_scan": "Escanear", "nav_history": "Historial", "nav_weather": "Clima", "nav_profile": "Perfil",
      "dash_greeting": "¡Buenos días, Mark!", "dash_weather_desc": "72°F y Soleado", "dash_humidity": "42% Humedad", "dash_quick_scan": "Iniciar Escaneo", "dash_health_index": "Índice de Salud", "dash_optimal": "ÓPTIMO", "dash_north_field": "CAMPO NORTE",
      "scan_target": "Arrastra y suelta tu imagen aquí", "scan_or": "o haz clic para subir", "scan_result_title": "Resultados de Análisis", "scan_disease": "Nombre de Enfermedad", "scan_accuracy": "Precisión", "scan_cause": "Causa", "scan_solution": "Solución", "scan_button": "Plan de Tratamiento", "scan_detecting": "Procesando IA...",
      "history_title": "Historial", "history_subtitle": "Archivo de análisis de campo.", "history_recent": "Reciente", "history_delete": "Eliminar",
      "weather_title": "Clima", "weather_subtitle": "Información local meteorológica.", "weather_search_placeholder": "Busca ciudad...", "weather_precip": "Lluvia", "weather_wind": "Viento", "weather_insights": "Sugerencias de IA",
      "profile_title": "Perfil de Granjero", "profile_edit": "Editar Perfil", "profile_name": "Mark Johnson", "profile_email": "mark.johnson@farmcare.ai", "profile_sector": "Gerente del Sector 4B", "profile_location": "Condado de Fairfield",
      "auth_subtitle": "Inteligencia de Cultivos", "auth_role_agronomist": "Agrónomo de Campo", "auth_role_manager": "Gerente Agrícola", "auth_telemetry_online": "SISTEMA: EN LÍNEA", "auth_gps_verified": "Acceso Verificado GPS", "auth_security_notice": "Google recomendado para mayor seguridad.", "auth_placeholder_id": "Correo / ID Agrónomo", "auth_placeholder_key": "Clave de Seguridad", "auth_google_btn": "Inicia con Google", "auth_login_btn": "Iniciar Sesión", "auth_error_missing": "Falta información.", "auth_status_connecting": "Conectando..."
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;
