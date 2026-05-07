// ==========================================
// DATA & TRANSLATIONS
// ==========================================
const translations = {
  it: {
    site_name: "La Cucina Italiana",
    site_tagline: "Sapori Autentici del Mondo",
    nav_recipes: "Ricette",
    nav_categories: "Categorie",
    nav_chef: "Chef",
    nav_video: "Video",
    nav_contact: "Contatto",
    search_placeholder: "Cerca ricette, ingredienti...",
    hero_badge: "✦ Cucina Tradizionale dal 1950",
    hero_title: "L'Arte della<br/><em>Cucina Italiana</em>",
    hero_desc: "Scopri ricette autentiche tramandate di generazione in generazione. Dal Nord al Sud dell'Italia, ogni piatto racconta una storia.",
    hero_btn1: "Esplora Ricette",
    hero_btn2: "▶ Guarda i Video",
    stat_recipes: "Ricette",
    stat_langs: "Lingue",
    stat_fans: "Appassionati",
    scroll_down: "Scorri",
    cat_badge: "Le Nostre Categorie",
    cat_title: "Esplora per Categoria",
    cat_desc: "Dalle antipasti ai dolci, un viaggio completo attraverso la cucina italiana",
    cat_pasta: "Primi Piatti",
    cat_pizza: "Pizza",
    cat_meat: "Secondi Piatti",
    cat_dessert: "Dolci",
    cat_antipasti: "Antipasti",
    cat_drinks: "Bevande",
    feat_badge: "Ricetta della Settimana",
    cat_pasta_tag: "Primi Piatti",
    feat_title: "Risotto ai Funghi Porcini",
    feat_desc: "Un classico della cucina italiana del nord. Il risotto ai funghi porcini è un piatto cremoso e profumato, perfetto per le serate autunnali. Con riso Carnaroli e funghi freschi di stagione.",
    time_prep: "Prep: 15 min",
    time_cook: "Cottura: 25 min",
    servings: "4 Persone",
    difficulty: "Medio",
    view_recipe: "Vedi Ricetta Completa",
    rec_badge: "Le Nostre Ricette",
    rec_title: "Ultime Ricette",
    filter_all: "Tutti",
    filter_pasta: "Pasta",
    filter_pizza: "Pizza",
    filter_desserts: "Dolci",
    filter_antipasti: "Antipasti",
    load_more: "Carica Altre Ricette",
    chef_badge: "I Nostri Chef",
    chef_title: "Maestri della Cucina",
    chef_desc: "Chef professionisti con decenni di esperienza nelle cucine italiane più prestigiose",
    chef_role1: "Chef Esecutivo — Roma",
    chef_bio1: "30 anni di esperienza nella cucina romana tradizionale. Stella Michelin dal 2010.",
    chef_role2: "Pastry Chef — Milano",
    chef_bio2: "Specializzata in dolci e pasticceria italiana. Ha studiato a Parigi e New York.",
    chef_role3: "Pizzaiolo — Napoli",
    chef_bio3: "Campione mondiale di pizza napoletana. Artigiano del forno a legna.",
    chef_role4: "Chef Regionale — Toscana",
    chef_bio4: "Custode delle tradizioni toscane. Esperta di prodotti biologici e km zero.",
    vid_badge: "Video Ricette",
    vid_title: "Impara con i Video",
    vid_desc: "Tutorial passo-passo con i nostri chef per padroneggiare le tecniche italiane",
    vid1_title: "La Pizza Napoletana Perfetta",
    vid1_desc: "Con Chef Luca Ferrari — Impasta, stendi e cuoci come un vero pizzaiolo napoletano",
    vid2_title: "Tiramisù Classico",
    vid2_desc: "La ricetta originale veneziana",
    vid3_title: "Bruschetta al Pomodoro",
    vid3_desc: "L'antipasto italiano per eccellenza",
    vid4_title: "Pasta Fresca Fatta in Casa",
    vid4_desc: "Tecnica professionale passo-passo",
    tips_badge: "Consigli & Trucchi",
    tips_title: "I Segreti della Cucina Italiana",
    tip1_title: "L'acqua della pasta",
    tip1_desc: "Aggiungi sempre l'acqua di cottura alla salsa. L'amido rende il sugo cremoso e fa attaccare meglio il condimento.",
    tip2_title: "Olio Extra Vergine",
    tip2_desc: "Usa sempre olio EVO di qualità a crudo. Per cuocere usa olio normale, per condire solo il migliore.",
    tip3_title: "Il Parmigiano",
    tip3_desc: "Usa solo Parmigiano Reggiano DOP grattugiato al momento. La differenza è abissale rispetto a quello in busta.",
    tip4_title: "Pomodori San Marzano",
    tip4_desc: "Per la salsa autentica usa solo pomodori San Marzano DOP. Il gusto dolce e poco acido è inimitabile.",
    news_title: "Ricevi le Ricette Ogni Settimana",
    news_desc: "Iscriviti alla nostra newsletter e ricevi ogni settimana le migliori ricette italiane, consigli degli chef e inviti esclusivi.",
    nl_name: "Il tuo nome",
    nl_email: "La tua email",
    nl_btn: "Iscriviti Gratis",
    nl_privacy: "🔒 Nessuno spam. Puoi disiscriverti in qualsiasi momento.",
    nl_success: "🎉 Grazie! Sei iscritto con successo.",
    footer_about: "Il portale di riferimento per la cucina italiana autentica. Ricette tradizionali, tecniche professionali e ingredienti di qualità.",
    footer_recipes: "Ricette",
    footer_info: "Informazioni",
    footer_about_link: "Chi Siamo",
    footer_contact: "Contattaci",
    footer_privacy: "Privacy Policy",
    footer_langs: "Lingue",
    footer_copy: "© 2025 La Cucina Italiana. Tutti i diritti riservati. Fatto con ❤️ in Italia."
  },
  en: {
    site_name: "Italian Kitchen",
    site_tagline: "Authentic Tastes of the World",
    nav_recipes: "Recipes",
    nav_categories: "Categories",
    nav_chef: "Chefs",
    nav_video: "Videos",
    nav_contact: "Contact",
    search_placeholder: "Search recipes, ingredients...",
    hero_badge: "✦ Traditional Cuisine since 1950",
    hero_title: "The Art of<br/><em>Italian Cooking</em>",
    hero_desc: "Discover authentic recipes passed down through generations. From North to South Italy, every dish tells a story.",
    hero_btn1: "Explore Recipes",
    hero_btn2: "▶ Watch Videos",
    stat_recipes: "Recipes",
    stat_langs: "Languages",
    stat_fans: "Foodies",
    scroll_down: "Scroll",
    cat_badge: "Our Categories",
    cat_title: "Explore by Category",
    cat_desc: "From appetizers to desserts, a complete journey through Italian cuisine",
    cat_pasta: "Pasta Dishes",
    cat_pizza: "Pizza",
    cat_meat: "Main Courses",
    cat_dessert: "Desserts",
    cat_antipasti: "Appetizers",
    cat_drinks: "Drinks",
    feat_badge: "Recipe of the Week",
    cat_pasta_tag: "Pasta Dishes",
    feat_title: "Porcini Mushroom Risotto",
    feat_desc: "A classic Northern Italian dish. Porcini mushroom risotto is creamy and fragrant, perfect for autumn evenings. Made with Carnaroli rice and fresh seasonal mushrooms.",
    time_prep: "Prep: 15 min",
    time_cook: "Cook: 25 min",
    servings: "4 People",
    difficulty: "Medium",
    view_recipe: "View Full Recipe",
    rec_badge: "Our Recipes",
    rec_title: "Latest Recipes",
    filter_all: "All",
    filter_pasta: "Pasta",
    filter_pizza: "Pizza",
    filter_desserts: "Desserts",
    filter_antipasti: "Appetizers",
    load_more: "Load More Recipes",
    chef_badge: "Our Chefs",
    chef_title: "Masters of the Kitchen",
    chef_desc: "Professional chefs with decades of experience in the most prestigious Italian kitchens",
    chef_role1: "Executive Chef — Rome",
    chef_bio1: "30 years of experience in traditional Roman cuisine. Michelin Star since 2010.",
    chef_role2: "Pastry Chef — Milan",
    chef_bio2: "Specialized in Italian desserts and pastry. Studied in Paris and New York.",
    chef_role3: "Pizzaiolo — Naples",
    chef_bio3: "World champion of Neapolitan pizza. Artisan of the wood-fired oven.",
    chef_role4: "Regional Chef — Tuscany",
    chef_bio4: "Guardian of Tuscan traditions. Expert in organic and zero-mile products.",
    vid_badge: "Video Recipes",
    vid_title: "Learn with Videos",
    vid_desc: "Step-by-step tutorials with our chefs to master Italian techniques",
    vid1_title: "The Perfect Neapolitan Pizza",
    vid1_desc: "With Chef Luca Ferrari — Knead, stretch and bake like a true Neapolitan pizzaiolo",
    vid2_title: "Classic Tiramisu",
    vid2_desc: "The original Venetian recipe",
    vid3_title: "Tomato Bruschetta",
    vid3_desc: "The quintessential Italian appetizer",
    vid4_title: "Homemade Fresh Pasta",
    vid4_desc: "Professional step-by-step technique",
    tips_badge: "Tips & Tricks",
    tips_title: "The Secrets of Italian Cooking",
    tip1_title: "Pasta water",
    tip1_desc: "Always add pasta water to your sauce. The starch makes the sauce creamy and helps it stick to the pasta.",
    tip2_title: "Extra Virgin Olive Oil",
    tip2_desc: "Always use high-quality EVOO raw. Use regular oil for cooking, but only the best for finishing.",
    tip3_title: "Parmigiano Reggiano",
    tip3_desc: "Only use freshly grated Parmigiano Reggiano DOP. The difference is massive compared to pre-packaged.",
    tip4_title: "San Marzano Tomatoes",
    tip4_desc: "For authentic sauce, only use San Marzano DOP tomatoes. Their sweet, low-acid taste is inimitable.",
    news_title: "Get Recipes Every Week",
    news_desc: "Subscribe to our newsletter and receive the best Italian recipes, chef tips, and exclusive invites every week.",
    nl_name: "Your name",
    nl_email: "Your email",
    nl_btn: "Subscribe Free",
    nl_privacy: "🔒 No spam. You can unsubscribe at any time.",
    nl_success: "🎉 Thank you! You have successfully subscribed.",
    footer_about: "The ultimate destination for authentic Italian cooking. Traditional recipes, professional techniques, and quality ingredients.",
    footer_recipes: "Recipes",
    footer_info: "Information",
    footer_about_link: "About Us",
    footer_contact: "Contact Us",
    footer_privacy: "Privacy Policy",
    footer_langs: "Languages",
    footer_copy: "© 2025 Italian Kitchen. All rights reserved. Made with ❤️ in Italy."
  },
  ar: {
    site_name: "المطبخ الإيطالي",
    site_tagline: "نكهات أصيلة من العالم",
    nav_recipes: "الوصفات",
    nav_categories: "الأقسام",
    nav_chef: "الطهاة",
    nav_video: "فيديو",
    nav_contact: "اتصل بنا",
    search_placeholder: "ابحث عن وصفة، مكونات...",
    hero_badge: "✦ مطبخ تقليدي منذ 1950",
    hero_title: "فن<br/><em>الطبخ الإيطالي</em>",
    hero_desc: "اكتشف وصفات أصيلة متوارثة عبر الأجيال. من شمال إيطاليا إلى جنوبها، كل طبق يروي قصة.",
    hero_btn1: "تصفح الوصفات",
    hero_btn2: "▶ شاهد الفيديوهات",
    stat_recipes: "وصفة",
    stat_langs: "لغات",
    stat_fans: "محب للطبخ",
    scroll_down: "انزل للأسفل",
    cat_badge: "أقسامنا",
    cat_title: "تصفح حسب القسم",
    cat_desc: "من المقبلات إلى الحلويات، رحلة كاملة عبر المطبخ الإيطالي",
    cat_pasta: "أطباق الباستا",
    cat_pizza: "بيتزا",
    cat_meat: "أطباق رئيسية",
    cat_dessert: "حلويات",
    cat_antipasti: "مقبلات",
    cat_drinks: "مشروبات",
    feat_badge: "وصفة الأسبوع",
    cat_pasta_tag: "أطباق رئيسية",
    feat_title: "ريزوتو فطر البورسيني",
    feat_desc: "طبق كلاسيكي من شمال إيطاليا. ريزوتو فطر البورسيني كريمي وعطري، مثالي لأمسيات الخريف. محضر من أرز كارنارولي والفطر الطازج.",
    time_prep: "تحضير: 15 دقيقة",
    time_cook: "طبخ: 25 دقيقة",
    servings: "4 أشخاص",
    difficulty: "متوسط",
    view_recipe: "عرض الوصفة كاملة",
    rec_badge: "وصفاتنا",
    rec_title: "أحدث الوصفات",
    filter_all: "الكل",
    filter_pasta: "باستا",
    filter_pizza: "بيتزا",
    filter_desserts: "حلويات",
    filter_antipasti: "مقبلات",
    load_more: "تحميل المزيد من الوصفات",
    chef_badge: "طُهاتنا",
    chef_title: "أسياد المطبخ",
    chef_desc: "طهاة محترفون يتمتعون بعقود من الخبرة في أرقى المطابخ الإيطالية",
    chef_role1: "شيف تنفيذي — روما",
    chef_bio1: "خبرة 30 عامًا في المطبخ الروماني التقليدي. حاصل على نجمة ميشلان منذ 2010.",
    chef_role2: "شيف حلويات — ميلانو",
    chef_bio2: "متخصصة في الحلويات والمعجنات الإيطالية. درست في باريس ونيويورك.",
    chef_role3: "صانع بيتزا — نابولي",
    chef_bio3: "بطل العالم في البيتزا النابولية. فنان في استخدام الفرن الخشبي.",
    chef_role4: "شيف إقليمي — توسكانا",
    chef_bio4: "حارسة التقاليد التوسكانية. خبيرة في المنتجات العضوية والمحلية.",
    vid_badge: "وصفات بالفيديو",
    vid_title: "تعلم مع الفيديوهات",
    vid_desc: "دروس خطوة بخطوة مع طهاتنا لإتقان التقنيات الإيطالية",
    vid1_title: "البيتزا النابولية المثالية",
    vid1_desc: "مع الشيف لوكا فيراري - اعجن وافرد واخبز كصانع بيتزا نابولي حقيقي",
    vid2_title: "تيراميسو كلاسيكي",
    vid2_desc: "الوصفة الفينيسية الأصلية",
    vid3_title: "بروشيتا الطماطم",
    vid3_desc: "المقبلات الإيطالية بامتياز",
    vid4_title: "باستا طازجة منزلية",
    vid4_desc: "تقنية احترافية خطوة بخطوة",
    tips_badge: "نصائح وحيل",
    tips_title: "أسرار المطبخ الإيطالي",
    tip1_title: "ماء الباستا",
    tip1_desc: "أضف دائمًا ماء سلق الباستا إلى الصلصة. النشا يجعل الصلصة كريمية وتلتصق بشكل أفضل.",
    tip2_title: "زيت الزيتون البكر الممتاز",
    tip2_desc: "استخدم دائمًا زيت الزيتون البكر الممتاز ذو الجودة العالية نيئًا. استخدم الزيت العادي للطبخ.",
    tip3_title: "جبنة البارميزان",
    tip3_desc: "استخدم فقط بارميزان ريجيانو المبشور طازجاً. الفرق شاسع مقارنة بالجبن المعبأ.",
    tip4_title: "طماطم سان مارزانو",
    tip4_desc: "للحصول على صلصة أصلية، استخدم طماطم سان مارزانو فقط. طعمها الحلو قليل الحموضة لا يُضاهى.",
    news_title: "احصل على الوصفات كل أسبوع",
    news_desc: "اشترك في نشرتنا الإخبارية واحصل على أفضل الوصفات الإيطالية ونصائح الطهاة كل أسبوع.",
    nl_name: "اسمك",
    nl_email: "بريدك الإلكتروني",
    nl_btn: "اشترك مجاناً",
    nl_privacy: "🔒 لا للرسائل المزعجة. يمكنك إلغاء الاشتراك في أي وقت.",
    nl_success: "🎉 شكراً لك! تم الاشتراك بنجاح.",
    footer_about: "الوجهة الأولى للطبخ الإيطالي الأصيل. وصفات تقليدية، تقنيات احترافية ومكونات عالية الجودة.",
    footer_recipes: "الوصفات",
    footer_info: "معلومات",
    footer_about_link: "من نحن",
    footer_contact: "اتصل بنا",
    footer_privacy: "سياسة الخصوصية",
    footer_langs: "اللغات",
    footer_copy: "© 2025 المطبخ الإيطالي. جميع الحقوق محفوظة. صُنع بـ ❤️ في إيطاليا."
  },
  fr: {
    site_name: "La Cuisine Italienne",
    site_tagline: "Saveurs Authentiques du Monde",
    nav_recipes: "Recettes",
    nav_categories: "Catégories",
    nav_chef: "Chefs",
    nav_video: "Vidéos",
    nav_contact: "Contact",
    search_placeholder: "Rechercher des recettes, ingrédients...",
    hero_badge: "✦ Cuisine Traditionnelle depuis 1950",
    hero_title: "L'Art de la<br/><em>Cuisine Italienne</em>",
    hero_desc: "Découvrez des recettes authentiques transmises de génération en génération. Du Nord au Sud de l'Italie, chaque plat raconte une histoire.",
    hero_btn1: "Explorer les Recettes",
    hero_btn2: "▶ Voir les Vidéos",
    stat_recipes: "Recettes",
    stat_langs: "Langues",
    stat_fans: "Passionnés",
    scroll_down: "Défiler",
    cat_badge: "Nos Catégories",
    cat_title: "Explorer par Catégorie",
    cat_desc: "Des entrées aux desserts, un voyage complet à travers la cuisine italienne",
    cat_pasta: "Pâtes",
    cat_pizza: "Pizza",
    cat_meat: "Plats Principaux",
    cat_dessert: "Desserts",
    cat_antipasti: "Antipasti",
    cat_drinks: "Boissons",
    feat_badge: "Recette de la Semaine",
    cat_pasta_tag: "Pâtes",
    feat_title: "Risotto aux Cèpes",
    feat_desc: "Un classique de l'Italie du Nord. Le risotto aux cèpes est crémeux et parfumé, parfait pour les soirées d'automne. Fait avec du riz Carnaroli et des champignons frais.",
    time_prep: "Prép: 15 min",
    time_cook: "Cuisson: 25 min",
    servings: "4 Personnes",
    difficulty: "Moyen",
    view_recipe: "Voir la Recette Complète",
    rec_badge: "Nos Recettes",
    rec_title: "Dernières Recettes",
    filter_all: "Tout",
    filter_pasta: "Pâtes",
    filter_pizza: "Pizza",
    filter_desserts: "Desserts",
    filter_antipasti: "Antipasti",
    load_more: "Charger Plus de Recettes",
    chef_badge: "Nos Chefs",
    chef_title: "Maîtres de la Cuisine",
    chef_desc: "Des chefs professionnels avec des décennies d'expérience dans les cuisines italiennes les plus prestigieuses",
    chef_role1: "Chef Exécutif — Rome",
    chef_bio1: "30 ans d'expérience dans la cuisine romaine traditionnelle. Étoile Michelin depuis 2010.",
    chef_role2: "Chef Pâtissier — Milan",
    chef_bio2: "Spécialisée dans les desserts et pâtisseries italiennes. A étudié à Paris et New York.",
    chef_role3: "Pizzaiolo — Naples",
    chef_bio3: "Champion du monde de pizza napolitaine. Artisan du four à bois.",
    chef_role4: "Chef Régional — Toscane",
    chef_bio4: "Gardienne des traditions toscanes. Experte en produits bio et locaux.",
    vid_badge: "Recettes en Vidéo",
    vid_title: "Apprendre avec des Vidéos",
    vid_desc: "Tutoriels étape par étape avec nos chefs pour maîtriser les techniques italiennes",
    vid1_title: "La Pizza Napolitaine Parfaite",
    vid1_desc: "Avec le Chef Luca Ferrari — Pétrir, étaler et cuire comme un vrai pizzaiolo",
    vid2_title: "Tiramisu Classique",
    vid2_desc: "La recette vénitienne originale",
    vid3_title: "Bruschetta à la Tomate",
    vid3_desc: "L'antipasto italien par excellence",
    vid4_title: "Pâtes Fraîches Maison",
    vid4_desc: "Technique professionnelle étape par étape",
    tips_badge: "Conseils & Astuces",
    tips_title: "Les Secrets de la Cuisine Italienne",
    tip1_title: "L'eau des pâtes",
    tip1_desc: "Ajoutez toujours l'eau de cuisson à votre sauce. L'amidon rend la sauce crémeuse et la fait adhérer aux pâtes.",
    tip2_title: "Huile d'Olive Extra Vierge",
    tip2_desc: "Utilisez toujours de l'huile d'olive de qualité crue. Utilisez de l'huile normale pour cuisiner.",
    tip3_title: "Le Parmesan",
    tip3_desc: "Utilisez uniquement du Parmigiano Reggiano fraîchement râpé. La différence est énorme.",
    tip4_title: "Tomates San Marzano",
    tip4_desc: "Pour une sauce authentique, utilisez uniquement des tomates San Marzano. Leur goût doux est inimitable.",
    news_title: "Recevez des Recettes Chaque Semaine",
    news_desc: "Abonnez-vous à notre newsletter et recevez chaque semaine les meilleures recettes italiennes et conseils de chefs.",
    nl_name: "Votre nom",
    nl_email: "Votre email",
    nl_btn: "S'abonner Gratuitement",
    nl_privacy: "🔒 Pas de spam. Vous pouvez vous désabonner à tout moment.",
    nl_success: "🎉 Merci ! Vous êtes inscrit avec succès.",
    footer_about: "La destination ultime pour la cuisine italienne authentique. Recettes traditionnelles, techniques professionnelles et ingrédients de qualité.",
    footer_recipes: "Recettes",
    footer_info: "Informations",
    footer_about_link: "À Propos",
    footer_contact: "Nous Contacter",
    footer_privacy: "Politique de Confidentialité",
    footer_langs: "Langues",
    footer_copy: "© 2025 La Cuisine Italienne. Tous droits réservés. Fait avec ❤️ en Italie."
  },
  de: {
    site_name: "Italienische Küche",
    site_tagline: "Authentische Aromen der Welt",
    nav_recipes: "Rezepte",
    nav_categories: "Kategorien",
    nav_chef: "Köche",
    nav_video: "Videos",
    nav_contact: "Kontakt",
    search_placeholder: "Suche nach Rezepten, Zutaten...",
    hero_badge: "✦ Traditionelle Küche seit 1950",
    hero_title: "Die Kunst der<br/><em>Italienischen Küche</em>",
    hero_desc: "Entdecken Sie authentische Rezepte, die über Generationen weitergegeben wurden. Von Nord- bis Süditalien erzählt jedes Gericht eine Geschichte.",
    hero_btn1: "Rezepte Entdecken",
    hero_btn2: "▶ Videos Ansehen",
    stat_recipes: "Rezepte",
    stat_langs: "Sprachen",
    stat_fans: "Feinschmecker",
    scroll_down: "Scrollen",
    cat_badge: "Unsere Kategorien",
    cat_title: "Nach Kategorie durchsuchen",
    cat_desc: "Von Vorspeisen bis hin zu Desserts, eine komplette Reise durch die italienische Küche",
    cat_pasta: "Pasta-Gerichte",
    cat_pizza: "Pizza",
    cat_meat: "Hauptgerichte",
    cat_dessert: "Desserts",
    cat_antipasti: "Vorspeisen",
    cat_drinks: "Getränke",
    feat_badge: "Rezept der Woche",
    cat_pasta_tag: "Pasta-Gerichte",
    feat_title: "Steinpilzrisotto",
    feat_desc: "Ein Klassiker aus Norditalien. Steinpilzrisotto ist cremig und duftend, perfekt für Herbstabende. Zubereitet mit Carnaroli-Reis und frischen Pilzen.",
    time_prep: "Zubereitung: 15 Min",
    time_cook: "Kochzeit: 25 Min",
    servings: "4 Personen",
    difficulty: "Mittel",
    view_recipe: "Ganzes Rezept Ansehen",
    rec_badge: "Unsere Rezepte",
    rec_title: "Neueste Rezepte",
    filter_all: "Alle",
    filter_pasta: "Pasta",
    filter_pizza: "Pizza",
    filter_desserts: "Desserts",
    filter_antipasti: "Vorspeisen",
    load_more: "Weitere Rezepte Laden",
    chef_badge: "Unsere Köche",
    chef_title: "Meister der Küche",
    chef_desc: "Professionelle Köche mit jahrzehntelanger Erfahrung in den angesehensten italienischen Küchen",
    chef_role1: "Küchenchef — Rom",
    chef_bio1: "30 Jahre Erfahrung in der traditionellen römischen Küche. Michelin-Stern seit 2010.",
    chef_role2: "Konditor — Mailand",
    chef_bio2: "Spezialisiert auf italienische Desserts und Gebäck. Studierte in Paris und New York.",
    chef_role3: "Pizzaiolo — Neapel",
    chef_bio3: "Weltmeister der neapolitanischen Pizza. Handwerker des Holzofens.",
    chef_role4: "Regionalkoch — Toskana",
    chef_bio4: "Hüterin toskanischer Traditionen. Expertin für biologische und lokale Produkte.",
    vid_badge: "Video-Rezepte",
    vid_title: "Lernen mit Videos",
    vid_desc: "Schritt-für-Schritt-Tutorials mit unseren Köchen, um italienische Techniken zu meistern",
    vid1_title: "Die Perfekte Neapolitanische Pizza",
    vid1_desc: "Mit Küchenchef Luca Ferrari — Kneten, dehnen und backen wie ein echter Pizzaiolo",
    vid2_title: "Klassisches Tiramisu",
    vid2_desc: "Das originale venezianische Rezept",
    vid3_title: "Tomaten Bruschetta",
    vid3_desc: "Die klassische italienische Vorspeise",
    vid4_title: "Hausgemachte Frische Pasta",
    vid4_desc: "Professionelle Schritt-für-Schritt-Technik",
    tips_badge: "Tipps & Tricks",
    tips_title: "Die Geheimnisse der Italienischen Küche",
    tip1_title: "Pasta Wasser",
    tip1_desc: "Fügen Sie Ihrer Soße immer Nudelwasser hinzu. Die Stärke macht die Soße cremig.",
    tip2_title: "Natives Olivenöl Extra",
    tip2_desc: "Verwenden Sie immer hochwertiges Olivenöl roh. Zum Kochen normales Öl verwenden.",
    tip3_title: "Parmigiano Reggiano",
    tip3_desc: "Verwenden Sie nur frisch geriebenen Parmigiano Reggiano DOP. Der Unterschied ist gewaltig.",
    tip4_title: "San Marzano Tomaten",
    tip4_desc: "Verwenden Sie für authentische Soßen nur San Marzano DOP Tomaten. Ihr süßer Geschmack ist unnachahmlich.",
    news_title: "Erhalten Sie Jede Woche Rezepte",
    news_desc: "Abonnieren Sie unseren Newsletter und erhalten Sie jede Woche die besten italienischen Rezepte.",
    nl_name: "Dein Name",
    nl_email: "Deine E-Mail",
    nl_btn: "Kostenlos Abonnieren",
    nl_privacy: "🔒 Kein Spam. Du kannst dich jederzeit abmelden.",
    nl_success: "🎉 Danke! Du hast dich erfolgreich angemeldet.",
    footer_about: "Das ultimative Ziel für authentische italienische Küche. Traditionelle Rezepte, professionelle Techniken und hochwertige Zutaten.",
    footer_recipes: "Rezepte",
    footer_info: "Informationen",
    footer_about_link: "Über Uns",
    footer_contact: "Kontaktiere Uns",
    footer_privacy: "Datenschutz",
    footer_langs: "Sprachen",
    footer_copy: "© 2025 Italienische Küche. Alle Rechte vorbehalten. Hergestellt mit ❤️ in Italien."
  },
  es: {
    site_name: "Cocina Italiana",
    site_tagline: "Sabores Auténticos del Mundo",
    nav_recipes: "Recetas",
    nav_categories: "Categorías",
    nav_chef: "Chefs",
    nav_video: "Videos",
    nav_contact: "Contacto",
    search_placeholder: "Buscar recetas, ingredientes...",
    hero_badge: "✦ Cocina Tradicional desde 1950",
    hero_title: "El Arte de la<br/><em>Cocina Italiana</em>",
    hero_desc: "Descubre recetas auténticas transmitidas de generación en generación. Del Norte al Sur de Italia, cada plato cuenta una historia.",
    hero_btn1: "Explorar Recetas",
    hero_btn2: "▶ Ver Videos",
    stat_recipes: "Recetas",
    stat_langs: "Idiomas",
    stat_fans: "Aficionados",
    scroll_down: "Desplazar",
    cat_badge: "Nuestras Categorías",
    cat_title: "Explorar por Categoría",
    cat_desc: "De antipastos a postres, un viaje completo por la cocina italiana",
    cat_pasta: "Platos de Pasta",
    cat_pizza: "Pizza",
    cat_meat: "Platos Principales",
    cat_dessert: "Postres",
    cat_antipasti: "Aperitivos",
    cat_drinks: "Bebidas",
    feat_badge: "Receta de la Semana",
    cat_pasta_tag: "Platos de Pasta",
    feat_title: "Risotto de Champiñones",
    feat_desc: "Un clásico del norte de Italia. El risotto de champiñones es cremoso y fragante, perfecto para las noches de otoño. Hecho con arroz Carnaroli y setas frescas.",
    time_prep: "Prep: 15 min",
    time_cook: "Cocción: 25 min",
    servings: "4 Personas",
    difficulty: "Medio",
    view_recipe: "Ver Receta Completa",
    rec_badge: "Nuestras Recetas",
    rec_title: "Últimas Recetas",
    filter_all: "Todo",
    filter_pasta: "Pasta",
    filter_pizza: "Pizza",
    filter_desserts: "Postres",
    filter_antipasti: "Antipastos",
    load_more: "Cargar Más Recetas",
    chef_badge: "Nuestros Chefs",
    chef_title: "Maestros de la Cocina",
    chef_desc: "Chefs profesionales con décadas de experiencia en las cocinas italianas más prestigiosas",
    chef_role1: "Chef Ejecutivo — Roma",
    chef_bio1: "30 años de experiencia en cocina romana tradicional. Estrella Michelin desde 2010.",
    chef_role2: "Chef Pastelera — Milán",
    chef_bio2: "Especializada en postres y pastelería italiana. Estudió en París y Nueva York.",
    chef_role3: "Pizzaiolo — Nápoles",
    chef_bio3: "Campeón del mundo de pizza napolitana. Artesano del horno de leña.",
    chef_role4: "Chef Regional — Toscana",
    chef_bio4: "Guardiana de las tradiciones toscanas. Experta en productos orgánicos.",
    vid_badge: "Video Recetas",
    vid_title: "Aprende con Videos",
    vid_desc: "Tutoriales paso a paso con nuestros chefs para dominar las técnicas italianas",
    vid1_title: "La Pizza Napolitana Perfecta",
    vid1_desc: "Con el Chef Luca Ferrari — Amasa, estira y hornea como un verdadero pizzaiolo",
    vid2_title: "Tiramisú Clásico",
    vid2_desc: "La receta veneciana original",
    vid3_title: "Bruschetta de Tomate",
    vid3_desc: "El aperitivo italiano por excelencia",
    vid4_title: "Pasta Fresca Casera",
    vid4_desc: "Técnica profesional paso a paso",
    tips_badge: "Consejos y Trucos",
    tips_title: "Los Secretos de la Cocina Italiana",
    tip1_title: "Agua de la pasta",
    tip1_desc: "Añade siempre agua de la pasta a tu salsa. El almidón hace que la salsa sea cremosa.",
    tip2_title: "Aceite de Oliva Virgen Extra",
    tip2_desc: "Usa siempre aceite de oliva de alta calidad crudo. Usa aceite normal para cocinar.",
    tip3_title: "Queso Parmesano",
    tip3_desc: "Usa solo Parmigiano Reggiano DOP recién rallado. La diferencia es enorme.",
    tip4_title: "Tomates San Marzano",
    tip4_desc: "Para salsa auténtica, usa solo tomates San Marzano. Su sabor dulce es inimitable.",
    news_title: "Recibe Recetas Cada Semana",
    news_desc: "Suscríbete a nuestro boletín y recibe las mejores recetas italianas cada semana.",
    nl_name: "Tu nombre",
    nl_email: "Tu correo",
    nl_btn: "Suscribirse Gratis",
    nl_privacy: "🔒 Sin spam. Puedes darte de baja en cualquier momento.",
    nl_success: "🎉 ¡Gracias! Te has suscrito con éxito.",
    footer_about: "El destino definitivo para la auténtica cocina italiana. Recetas tradicionales y técnicas profesionales.",
    footer_recipes: "Recetas",
    footer_info: "Información",
    footer_about_link: "Sobre Nosotros",
    footer_contact: "Contáctanos",
    footer_privacy: "Política de Privacidad",
    footer_langs: "Idiomas",
    footer_copy: "© 2025 Cocina Italiana. Todos los derechos reservados. Hecho con ❤️ en Italia."
  },
  zh: {
    site_name: "意大利厨房",
    site_tagline: "地道世界风味",
    nav_recipes: "食谱",
    nav_categories: "分类",
    nav_chef: "主厨",
    nav_video: "视频",
    nav_contact: "联系我们",
    search_placeholder: "搜索食谱、食材...",
    hero_badge: "✦ 始于1950年的传统美食",
    hero_title: "意大利的<br/><em>烹饪艺术</em>",
    hero_desc: "探索代代相传的地道食谱。从意大利北部到南部，每道菜都讲述着一个故事。",
    hero_btn1: "探索食谱",
    hero_btn2: "▶ 观看视频",
    stat_recipes: "食谱",
    stat_langs: "语言",
    stat_fans: "美食家",
    scroll_down: "向下滑动",
    cat_badge: "我们的分类",
    cat_title: "按分类浏览",
    cat_desc: "从开胃菜到甜点，开启一趟完整的意大利美食之旅",
    cat_pasta: "意大利面",
    cat_pizza: "比萨",
    cat_meat: "主菜",
    cat_dessert: "甜点",
    cat_antipasti: "开胃菜",
    cat_drinks: "饮品",
    feat_badge: "本周食谱",
    cat_pasta_tag: "意大利面",
    feat_title: "牛肝菌意式烩饭",
    feat_desc: "意大利北部的经典名菜。牛肝菌烩饭口感浓郁、香气扑鼻，是秋季晚餐的完美选择。采用卡纳罗利米和新鲜蘑菇烹制。",
    time_prep: "准备: 15分钟",
    time_cook: "烹饪: 25分钟",
    servings: "4人份",
    difficulty: "中等",
    view_recipe: "查看完整食谱",
    rec_badge: "我们的食谱",
    rec_title: "最新食谱",
    filter_all: "全部",
    filter_pasta: "意面",
    filter_pizza: "比萨",
    filter_desserts: "甜点",
    filter_antipasti: "开胃菜",
    load_more: "加载更多食谱",
    chef_badge: "我们的主厨",
    chef_title: "厨房大师",
    chef_desc: "在最负盛名的意大利餐厅拥有数十年经验的专业主厨",
    chef_role1: "行政主厨 — 罗马",
    chef_bio1: "拥有30年传统罗马菜经验。自2010年起获得米其林星级。",
    chef_role2: "糕点主厨 — 米兰",
    chef_bio2: "擅长意大利甜点和糕点。曾在巴黎和纽约学习。",
    chef_role3: "比萨大师 — 那不勒斯",
    chef_bio3: "那不勒斯比萨世界冠军。木柴烤炉的工匠。",
    chef_role4: "区域主厨 — 托斯卡纳",
    chef_bio4: "托斯卡纳传统的守护者。有机和本地农产品专家。",
    vid_badge: "视频食谱",
    vid_title: "跟随视频学习",
    vid_desc: "我们的主厨提供的一步步教程，帮您掌握意大利烹饪技巧",
    vid1_title: "完美的那不勒斯比萨",
    vid1_desc: "与主厨Luca Ferrari一起 — 像真正的比萨大师一样揉面、拉伸和烘焙",
    vid2_title: "经典提拉米苏",
    vid2_desc: "最初的威尼斯配方",
    vid3_title: "番茄意式烤面包",
    vid3_desc: "最经典的意大利开胃菜",
    vid4_title: "自制新鲜意面",
    vid4_desc: "专业的一步步技巧",
    tips_badge: "技巧与窍门",
    tips_title: "意大利烹饪的秘密",
    tip1_title: "煮意面的水",
    tip1_desc: "永远要把煮意面的水加到酱汁里。淀粉能让酱汁变得浓郁且更容易挂面。",
    tip2_title: "特级初榨橄榄油",
    tip2_desc: "凉拌时永远使用高品质的特级初榨橄榄油。炒菜时可以用普通的橄榄油。",
    tip3_title: "帕马森干酪",
    tip3_desc: "只使用现磨的帕马森-雷吉亚诺奶酪（DOP）。与包装好的相比，味道有天壤之别。",
    tip4_title: "圣马扎诺番茄",
    tip4_desc: "为了制作正宗的酱汁，只使用圣马扎诺番茄。它们香甜微酸的味道无可替代。",
    news_title: "每周获取食谱",
    news_desc: "订阅我们的时事通讯，每周接收最好的意大利食谱、主厨建议和独家邀请。",
    nl_name: "您的名字",
    nl_email: "您的邮箱",
    nl_btn: "免费订阅",
    nl_privacy: "🔒 绝无垃圾邮件。您可以随时取消订阅。",
    nl_success: "🎉 谢谢！您已成功订阅。",
    footer_about: "正宗意大利烹饪的终极目的地。传统食谱、专业技巧和高品质食材。",
    footer_recipes: "食谱",
    footer_info: "信息",
    footer_about_link: "关于我们",
    footer_contact: "联系我们",
    footer_privacy: "隐私政策",
    footer_langs: "语言",
    footer_copy: "© 2025 意大利厨房。保留所有权利。在意大利用❤️制作。"
  },
  ja: {
    site_name: "イタリアンキッチン",
    site_tagline: "世界の本物の味",
    nav_recipes: "レシピ",
    nav_categories: "カテゴリー",
    nav_chef: "シェフ",
    nav_video: "動画",
    nav_contact: "お問い合わせ",
    search_placeholder: "レシピ、材料を検索...",
    hero_badge: "✦ 1950年からの伝統的な料理",
    hero_title: "イタリアの<br/><em>料理芸術</em>",
    hero_desc: "何世代にもわたって受け継がれてきた本物のレシピを発見してください。北から南まで、すべての料理に物語があります。",
    hero_btn1: "レシピを探す",
    hero_btn2: "▶ 動画を見る",
    stat_recipes: "レシピ",
    stat_langs: "言語",
    stat_fans: "ファン",
    scroll_down: "スクロール",
    cat_badge: "カテゴリー",
    cat_title: "カテゴリー別に探す",
    cat_desc: "前菜からデザートまで、イタリア料理の完全な旅",
    cat_pasta: "パスタ",
    cat_pizza: "ピザ",
    cat_meat: "メインディッシュ",
    cat_dessert: "デザート",
    cat_antipasti: "前菜",
    cat_drinks: "飲み物",
    feat_badge: "今週のレシピ",
    cat_pasta_tag: "パスタ",
    feat_title: "ポルチーニ茸のリゾット",
    feat_desc: "北イタリアのクラシック。ポルチーニ茸のリゾットはクリーミーで香り高く、秋の夜にぴったりです。",
    time_prep: "準備: 15分",
    time_cook: "調理: 25分",
    servings: "4人分",
    difficulty: "普通",
    view_recipe: "レシピ全体を見る",
    rec_badge: "私たちのレシピ",
    rec_title: "最新のレシピ",
    filter_all: "すべて",
    filter_pasta: "パスタ",
    filter_pizza: "ピザ",
    filter_desserts: "デザート",
    filter_antipasti: "前菜",
    load_more: "もっとレシピを読み込む",
    chef_badge: "私たちのシェフ",
    chef_title: "キッチンの巨匠たち",
    chef_desc: "最も権威のあるイタリアのキッチンで数十年の経験を持つプロのシェフ",
    chef_role1: "エグゼクティブシェフ — ローマ",
    chef_bio1: "伝統的なローマ料理で30年の経験。2010年からミシュランの星を獲得。",
    chef_role2: "ペストリーシェフ — ミラノ",
    chef_bio2: "イタリアのデザートとペストリーが専門。パリとニューヨークで学びました。",
    chef_role3: "ピッツァイオーロ — ナポリ",
    chef_bio3: "ナポリピザの世界チャンピオン。薪窯の職人。",
    chef_role4: "郷土料理シェフ — トスカーナ",
    chef_bio4: "トスカーナの伝統の守り手。オーガニックと地産地消の専門家。",
    vid_badge: "動画レシピ",
    vid_title: "動画で学ぶ",
    vid_desc: "イタリアの技術を習得するためのシェフによるステップバイステップのチュートリアル",
    vid1_title: "完璧なナポリピザ",
    vid1_desc: "シェフのルカ・フェラーリと — 真のピッツァイオーロのようにこねて、伸ばして、焼く",
    vid2_title: "クラシック・ティラミス",
    vid2_desc: "オリジナルのヴェネツィアのレシピ",
    vid3_title: "トマトのブルスケッタ",
    vid3_desc: "典型的なイタリアの前菜",
    vid4_title: "自家製生パスタ",
    vid4_desc: "プロのステップバイステップの技術",
    tips_badge: "ヒントと裏技",
    tips_title: "イタリア料理の秘密",
    tip1_title: "パスタの茹で汁",
    tip1_desc: "ソースには必ずパスタの茹で汁を加えてください。でんぷんがソースをクリーミーにします。",
    tip2_title: "エキストラバージンオリーブオイル",
    tip2_desc: "生食には常に高品質のオリーブオイルを使用してください。調理には普通の油を使用します。",
    tip3_title: "パルミジャーノ・レッジャーノ",
    tip3_desc: "すりおろしたてのパルミジャーノ・レッジャーノのみを使用してください。違いは歴然です。",
    tip4_title: "サンマルツァーノトマト",
    tip4_desc: "本物のソースにはサンマルツァーノトマトのみを使用してください。甘い味は真似できません。",
    news_title: "毎週レシピを受け取る",
    news_desc: "ニュースレターに登録して、最高のイタリアンレシピを毎週受け取りましょう。",
    nl_name: "お名前",
    nl_email: "メールアドレス",
    nl_btn: "無料で登録",
    nl_privacy: "🔒 スパムはありません。いつでも購読解除できます。",
    nl_success: "🎉 ありがとうございます！登録が完了しました。",
    footer_about: "本物のイタリア料理の究極の目的地。伝統的なレシピ、プロの技術、高品質の食材。",
    footer_recipes: "レシピ",
    footer_info: "情報",
    footer_about_link: "私たちについて",
    footer_contact: "お問い合わせ",
    footer_privacy: "プライバシーポリシー",
    footer_langs: "言語",
    footer_copy: "© 2025 イタリアンキッチン。全著作権所有。イタリアから❤️を込めて。"
  }
};

// ==========================================
// RECIPES DATA
// ==========================================
const recipesData = [
  {
    id: 1,
    title: {
      it: "Spaghetti alla Carbonara", en: "Spaghetti Carbonara", ar: "سباغيتي كاربونارا",
      fr: "Spaghetti Carbonara", de: "Spaghetti Carbonara", es: "Espaguetis a la Carbonara",
      zh: "培根蛋面", ja: "カルボナーラ"
    },
    category: "primi",
    time: "20 min",
    img: "images/hero_pasta.png"
  },
  {
    id: 2,
    title: {
      it: "Pizza Margherita DOP", en: "Margherita Pizza DOP", ar: "بيتزا مارغريتا",
      fr: "Pizza Margherita", de: "Pizza Margherita", es: "Pizza Margarita",
      zh: "玛格丽特比萨", ja: "マルゲリータピザ"
    },
    category: "pizza",
    time: "15 min",
    img: "images/pizza.png"
  },
  {
    id: 3,
    title: {
      it: "Tiramisù Tradizionale", en: "Traditional Tiramisu", ar: "تيراميسو تقليدي",
      fr: "Tiramisu Traditionnel", de: "Traditionelles Tiramisu", es: "Tiramisú Tradicional",
      zh: "传统提拉米苏", ja: "伝統的なティラミス"
    },
    category: "dolci",
    time: "30 min",
    img: "images/tiramisu.png"
  },
  {
    id: 4,
    title: {
      it: "Bruschetta al Pomodoro", en: "Tomato Bruschetta", ar: "بروشيتا الطماطم",
      fr: "Bruschetta Tomate", de: "Tomaten Bruschetta", es: "Bruschetta de Tomate",
      zh: "番茄意式烤面包", ja: "トマトのブルスケッタ"
    },
    category: "antipasti",
    time: "10 min",
    img: "images/bruschetta.png"
  },
  {
    id: 5,
    title: {
      it: "Risotto ai Funghi", en: "Mushroom Risotto", ar: "ريزوتو الفطر",
      fr: "Risotto aux Champignons", de: "Pilzrisotto", es: "Risotto de Champiñones",
      zh: "蘑菇烩饭", ja: "キノコのリゾット"
    },
    category: "primi",
    time: "35 min",
    img: "images/risotto.png"
  },
  {
    id: 6,
    title: {
      it: "Panna Cotta alle Fragole", en: "Strawberry Panna Cotta", ar: "بانا كوتا بالفراولة",
      fr: "Panna Cotta Fraise", de: "Erdbeer Panna Cotta", es: "Panna Cotta de Fresa",
      zh: "草莓意式奶冻", ja: "イチゴのパンナコッタ"
    },
    category: "dolci",
    time: "15 min",
    img: "images/tiramisu.png" /* Reusing image for demo */
  }
];

// ==========================================
// STATE & INITIALIZATION
// ==========================================
let currentLang = 'it';
let isRTL = false;

document.addEventListener('DOMContentLoaded', () => {
  // Init Lang
  const savedLang = localStorage.getItem('site_lang');
  if(savedLang && translations[savedLang]) {
    setLanguage(savedLang);
  } else {
    // Try to detect browser language
    const browserLang = navigator.language.split('-')[0];
    if(translations[browserLang]) {
      setLanguage(browserLang);
    } else {
      renderRecipes('all');
    }
  }

  // Header Scroll Effect
  const header = document.getElementById('header');
  const backToTop = document.getElementById('backToTop');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
      backToTop.classList.add('visible');
    } else {
      header.classList.remove('scrolled');
      backToTop.classList.remove('visible');
    }
  });

  // Mobile Menu
  const menuToggle = document.getElementById('menuToggle');
  const nav = document.getElementById('nav');
  
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    nav.classList.toggle('active');
  });

  // Close menu on link click
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('active');
      nav.classList.remove('active');
    });
  });

  // Search Toggle
  const searchBtn = document.getElementById('searchBtn');
  const searchClose = document.getElementById('searchClose');
  const searchBar = document.getElementById('searchBar');
  const searchInput = document.getElementById('searchInput');

  searchBtn.addEventListener('click', () => {
    searchBar.classList.add('active');
    setTimeout(() => searchInput.focus(), 300);
  });

  searchClose.addEventListener('click', () => {
    searchBar.classList.remove('active');
  });

  // Language Dropdown
  const langBtn = document.getElementById('langBtn');
  const langDropdown = document.getElementById('langDropdown');

  langBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    langDropdown.classList.toggle('active');
  });

  document.addEventListener('click', () => {
    langDropdown.classList.remove('active');
  });

  // Language Options
  document.querySelectorAll('.lang-option').forEach(option => {
    option.addEventListener('click', (e) => {
      const lang = e.target.getAttribute('data-lang');
      setLanguage(lang);
    });
  });

  // Recipe Filters
  document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
      // Remove active class from all
      document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
      // Add active to clicked
      e.target.classList.add('active');
      
      const filter = e.target.getAttribute('data-filter');
      filterRecipes(filter);
    });
  });
});

// ==========================================
// FUNCTIONS
// ==========================================

function setLanguage(lang) {
  if (!translations[lang]) return;
  
  currentLang = lang;
  localStorage.setItem('site_lang', lang);
  
  // RTL Support for Arabic
  isRTL = (lang === 'ar');
  document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
  document.documentElement.setAttribute('lang', lang);
  
  // Update translation texts
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Update placeholders
  const inputs = document.querySelectorAll('[data-i18n-placeholder]');
  inputs.forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang][key]) {
      el.setAttribute('placeholder', translations[lang][key]);
    }
  });

  // Update Language Selector UI
  const btn = document.querySelector(`.lang-option[data-lang="${lang}"]`);
  if (btn) {
    const flag = btn.getAttribute('data-flag');
    document.getElementById('currentFlag').textContent = flag;
    document.getElementById('currentLang').textContent = lang.toUpperCase();
    
    document.querySelectorAll('.lang-option').forEach(opt => opt.classList.remove('active'));
    btn.classList.add('active');
  }

  // Re-render dynamic content
  renderRecipes(document.querySelector('.filter-tab.active')?.getAttribute('data-filter') || 'all');
}

function renderRecipes(filter) {
  const grid = document.getElementById('recipesGrid');
  grid.innerHTML = '';
  
  let filtered = recipesData;
  if (filter !== 'all') {
    filtered = recipesData.filter(r => r.category === filter);
  }

  // Category Names Dictionary mapping to translations keys
  const catNames = {
    'primi': 'cat_pasta',
    'pizza': 'cat_pizza',
    'dolci': 'cat_dessert',
    'antipasti': 'cat_antipasti'
  };

  filtered.forEach(recipe => {
    const catLabel = translations[currentLang][catNames[recipe.category]] || recipe.category;
    const title = recipe.title[currentLang] || recipe.title.en; // fallback
    
    const card = document.createElement('div');
    card.className = 'recipe-card';
    card.innerHTML = `
      <div class="recipe-img-wrap">
        <button class="recipe-fav" onclick="toggleFav(event, this)" aria-label="Add to favorites">♡</button>
        <span class="recipe-time">⏱ ${recipe.time}</span>
        <img src="${recipe.img}" alt="${title}" class="recipe-img" loading="lazy"/>
      </div>
      <div class="recipe-content">
        <span class="recipe-tag">${catLabel}</span>
        <h3 class="recipe-title">${title}</h3>
        <div class="recipe-card-meta">
          <span style="color:var(--accent)">★★★★★</span>
          <button class="btn btn-outline" onclick="openRecipeModal(${recipe.id})"><span>${translations[currentLang].view_recipe || "View Recipe"}</span></button>
        </div>
      </div>
    `;
    grid.appendChild(card);
    // Observe new card
    if(window.aosObserver) window.aosObserver.observe(card);
  });
}

function filterRecipes(category) {
  // Update tabs visually if called from outside
  document.querySelectorAll('.filter-tab').forEach(t => {
    if(t.getAttribute('data-filter') === category) {
      t.classList.add('active');
    } else {
      t.classList.remove('active');
    }
  });
  
  // Scroll to section smoothly
  document.getElementById('ricette').scrollIntoView({ behavior: 'smooth' });
  
  renderRecipes(category);
}

function toggleFav(e, btn) {
  e.stopPropagation();
  btn.classList.toggle('active');
  if(btn.classList.contains('active')) {
    btn.innerHTML = '♥';
  } else {
    btn.innerHTML = '♡';
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handleNewsletter(e) {
  e.preventDefault();
  const name = document.getElementById('nlName').value;
  const email = document.getElementById('nlEmail').value;
  
  if(email) {
    document.getElementById('nlSuccess').style.display = 'block';
    document.getElementById('newsletterForm').reset();
    setTimeout(() => {
      document.getElementById('nlSuccess').style.display = 'none';
    }, 5000);
  }
}

// Modal Functions
function openRecipeModal(id) {
  // Instead of a modal, we now have a professional recipe page
  window.location.href = 'recipe.html?id=' + id;
}

function closeRecipeModal() {
  document.getElementById('recipeModal').classList.remove('active');
  document.body.style.overflow = '';
}

function closeModal(e) {
  if (e.target.id === 'recipeModal') {
    closeRecipeModal();
  }
}

// ==========================================
// RECIPE PAGE LOGIC
// ==========================================
function adjustServings(change) {
  const countEl = document.getElementById('servingCount');
  if(!countEl) return;
  
  let current = parseInt(countEl.innerText);
  let newCount = current + change;
  if(newCount < 1) newCount = 1;
  if(newCount > 20) newCount = 20;
  
  countEl.innerText = newCount;
  
  // Adjust amounts
  document.querySelectorAll('.ingredient-checkbox .amount').forEach(el => {
    const base = parseFloat(el.getAttribute('data-base'));
    // Base is for 4 servings
    const amountPerServing = base / 4;
    let newAmount = amountPerServing * newCount;
    
    // Format nicely
    if(newAmount % 1 !== 0) {
      newAmount = newAmount.toFixed(1);
    }
    el.innerText = newAmount;
  });
}

function toggleSaveRecipe(btn) {
  btn.classList.toggle('active');
  const textEl = btn.querySelector('.save-text');
  if(btn.classList.contains('active')) {
    textEl.innerText = translations[currentLang]?.rcp_saved || "Salvato";
  } else {
    textEl.innerText = translations[currentLang]?.rcp_save || "Salva";
  }
}

// Recipe Specific Translations
const recipeTranslations = {
  it: {
    nav_home: "Home",
    rcp_carbonara_title: "Spaghetti alla Carbonara",
    rcp_carbonara_desc: "La vera ricetta romana. Senza panna, senza aglio, solo guanciale croccante, pecorino romano, uova fresche e pepe nero.",
    rcp_author: "Ricetta di:",
    rcp_chef_name: "Chef Marco Rossi",
    rcp_print: "Stampa",
    rcp_save: "Salva",
    rcp_saved: "Salvato",
    rcp_share: "Condividi",
    rcp_prep: "Prep",
    rcp_prep_time: "15 min",
    rcp_cook: "Cottura",
    rcp_cook_time: "10 min",
    rcp_servings: "Persone",
    rcp_servings_count: "4",
    rcp_difficulty: "Difficoltà",
    rcp_diff_level: "Media",
    rcp_calories: "Calorie",
    rcp_cal_count: "580 kcal",
    rcp_ingredients: "Ingredienti",
    rcp_servings_label: "porzioni",
    rcp_ing_pasta: "Spaghetti",
    rcp_ing_guanciale: "Guanciale",
    rcp_ing_yolks: "Tuorli d'uovo freschissimi",
    rcp_ing_egg: "Uovo intero",
    rcp_ing_cheese: "Pecorino Romano DOP",
    rcp_ing_pepper: "Pepe nero in grani q.b.",
    rcp_tips_title: "I Segreti dello Chef",
    rcp_tip1: "<strong>Pancetta o Guanciale?</strong> Il guanciale è obbligatorio per la vera ricetta romana. Ha più grasso e sapore.",
    rcp_tip2: "<strong>Il calore:</strong> Non mescolare le uova sul fuoco! Il calore della pasta è sufficiente per creare la crema perfetta senza fare l'effetto 'frittata'.",
    rcp_tip3: "<strong>Acqua di cottura:</strong> Conserva sempre una tazza di acqua di cottura. È ricca di amido e fondamentale per mantecare.",
    rcp_steps_title: "Preparazione Passo Passo",
    rcp_step1_title: "Prepara il guanciale",
    rcp_step1_desc: "Taglia il guanciale a listarelle di circa 1 cm. Mettilo in una padella fredda senza olio e accendi il fuoco basso. Fai sudare il grasso finché il guanciale non diventa croccante ma non bruciato.",
    rcp_step2_title: "La crema di pecorino",
    rcp_step2_desc: "In una ciotola grande, unisci i tuorli, l'uovo intero, il pecorino grattugiato e abbondante pepe nero appena macinato. Mescola con una frusta fino a ottenere una crema densa. Aggiungi un cucchiaio del grasso del guanciale sciolto per insaporire.",
    rcp_step3_title: "Cuoci la pasta",
    rcp_step3_desc: "Cuoci gli spaghetti in abbondante acqua salata (ma non troppo salata, dato che pecorino e guanciale sono sapidi). Scolala al dente, conservando una tazza di acqua di cottura.",
    rcp_step4_title: "La mantecatura (Il momento magico)",
    rcp_step4_desc: "Metti la pasta scolata nella padella con il guanciale (fuoco spento!). Aggiungi la crema di uova e pecorino. Inizia a mescolare velocemente, aggiungendo un po' di acqua di cottura per creare un'emulsione cremosa e perfetta.",
    rcp_step5_title: "Servi subito",
    rcp_step5_desc: "Servi immediatamente nei piatti caldi, aggiungendo altro pecorino e una macinata di pepe nero in cima.",
    rcp_faq_title: "Domande Frequenti (FAQ)",
    rcp_faq1_q: "Posso usare la pancetta?",
    rcp_faq1_a: "Se non trovi il guanciale, la pancetta tesa o dolce è un'alternativa accettabile, ma il sapore originale si ottiene solo col guanciale.",
    rcp_faq2_q: "Posso prepararla in anticipo?",
    rcp_faq2_a: "No, la carbonara va preparata e mangiata immediatamente. Se si raffredda, la crema perde la sua setosità.",
    rcp_faq3_q: "Panna sì o panna no?",
    rcp_faq3_a: "Assolutamente NO. L'aggiunta di panna è considerata un crimine culinario in Italia. La cremosità deve derivare solo dall'emulsione di uovo, formaggio e acqua di cottura."
  },
  en: {
    nav_home: "Home",
    rcp_carbonara_title: "Spaghetti Carbonara",
    rcp_carbonara_desc: "The true Roman recipe. No cream, no garlic, just crispy guanciale, pecorino romano, fresh eggs and black pepper.",
    rcp_author: "Recipe by:",
    rcp_chef_name: "Chef Marco Rossi",
    rcp_print: "Print",
    rcp_save: "Save",
    rcp_saved: "Saved",
    rcp_share: "Share",
    rcp_prep: "Prep",
    rcp_prep_time: "15 min",
    rcp_cook: "Cook",
    rcp_cook_time: "10 min",
    rcp_servings: "Servings",
    rcp_servings_count: "4",
    rcp_difficulty: "Difficulty",
    rcp_diff_level: "Medium",
    rcp_calories: "Calories",
    rcp_cal_count: "580 kcal",
    rcp_ingredients: "Ingredients",
    rcp_servings_label: "servings",
    rcp_ing_pasta: "Spaghetti",
    rcp_ing_guanciale: "Guanciale",
    rcp_ing_yolks: "Very fresh egg yolks",
    rcp_ing_egg: "Whole egg",
    rcp_ing_cheese: "Pecorino Romano DOP",
    rcp_ing_pepper: "Black peppercorns to taste",
    rcp_tips_title: "Chef's Secrets",
    rcp_tip1: "<strong>Pancetta or Guanciale?</strong> Guanciale is mandatory for the true Roman recipe. It has more fat and flavor.",
    rcp_tip2: "<strong>The heat:</strong> Do not mix the eggs over the fire! The heat of the pasta is enough to create the perfect cream without scrambling the eggs.",
    rcp_tip3: "<strong>Pasta water:</strong> Always keep a cup of pasta water. It is rich in starch and essential for creaminess.",
    rcp_steps_title: "Step by Step Preparation",
    rcp_step1_title: "Prepare the guanciale",
    rcp_step1_desc: "Cut the guanciale into strips about 1 cm thick. Put it in a cold pan without oil and turn on low heat. Let the fat sweat until the guanciale is crispy but not burnt.",
    rcp_step2_title: "The pecorino cream",
    rcp_step2_desc: "In a large bowl, combine the egg yolks, whole egg, grated pecorino, and plenty of freshly ground black pepper. Mix with a whisk until you get a thick cream. Add a spoonful of the melted guanciale fat for flavor.",
    rcp_step3_title: "Cook the pasta",
    rcp_step3_desc: "Cook the spaghetti in plenty of salted water (but not too salty, since pecorino and guanciale are salty). Drain al dente, saving a cup of pasta water.",
    rcp_step4_title: "The mantecatura (The magic moment)",
    rcp_step4_desc: "Put the drained pasta into the pan with the guanciale (fire off!). Add the egg and pecorino cream. Start mixing quickly, adding a little pasta water to create a perfect creamy emulsion.",
    rcp_step5_title: "Serve immediately",
    rcp_step5_desc: "Serve immediately on hot plates, adding more pecorino and a grind of black pepper on top.",
    rcp_faq_title: "Frequently Asked Questions (FAQ)",
    rcp_faq1_q: "Can I use pancetta?",
    rcp_faq1_a: "If you can't find guanciale, pancetta is an acceptable alternative, but the original flavor is only achieved with guanciale.",
    rcp_faq2_q: "Can I make it ahead?",
    rcp_faq2_a: "No, carbonara must be prepared and eaten immediately. If it cools, the cream loses its silkiness.",
    rcp_faq3_q: "Cream or no cream?",
    rcp_faq3_a: "Absolutely NO. Adding cream is considered a culinary crime in Italy. The creaminess must come only from the emulsion of egg, cheese, and pasta water."
  },
  ar: {
    nav_home: "الرئيسية",
    rcp_carbonara_title: "سباغيتي كاربونارا",
    rcp_carbonara_desc: "الوصفة الرومانية الأصلية. بدون كريمة، بدون ثوم، فقط غوانتشالي مقرمش، بيكورينو رومانو، بيض طازج وفلفل أسود.",
    rcp_author: "وصفة الشيف:",
    rcp_chef_name: "الشيف ماركو روسي",
    rcp_print: "طباعة",
    rcp_save: "حفظ",
    rcp_saved: "تم الحفظ",
    rcp_share: "مشاركة",
    rcp_prep: "تحضير",
    rcp_prep_time: "15 دقيقة",
    rcp_cook: "طبخ",
    rcp_cook_time: "10 دقائق",
    rcp_servings: "أشخاص",
    rcp_servings_count: "4",
    rcp_difficulty: "صعوبة",
    rcp_diff_level: "متوسطة",
    rcp_calories: "سعرات",
    rcp_cal_count: "580 حريرة",
    rcp_ingredients: "المكونات",
    rcp_servings_label: "حصص",
    rcp_ing_pasta: "سباغيتي",
    rcp_ing_guanciale: "غوانتشالي (لحم مقدد إيطالي)",
    rcp_ing_yolks: "صفار بيض طازج جداً",
    rcp_ing_egg: "بيضة كاملة",
    rcp_ing_cheese: "جبنة بيكورينو رومانو",
    rcp_ing_pepper: "فلفل أسود حب (حسب الرغبة)",
    rcp_tips_title: "أسرار الشيف",
    rcp_tip1: "<strong>بانشيتا أم غوانتشالي؟</strong> الغوانتشالي إلزامي للوصفة الرومانية الحقيقية. فيه دهون ونكهة أكثر.",
    rcp_tip2: "<strong>الحرارة:</strong> لا تخلط البيض على النار! حرارة الباستا تكفي لعمل كريمة مثالية بدون أن يصبح البيض مقلياً.",
    rcp_tip3: "<strong>ماء الباستا:</strong> احتفظ دائماً بكوب من ماء سلق الباستا. إنه غني بالنشا وأساسي للقوام الكريمي.",
    rcp_steps_title: "التحضير خطوة بخطوة",
    rcp_step1_title: "تجهيز الغوانتشالي",
    rcp_step1_desc: "قطع الغوانتشالي إلى شرائح بسماكة 1 سم. ضعه في مقلاة باردة بدون زيت وشغل نار هادئة. دعه يتحمر حتى يصبح مقرمشاً ولكن غير محترق.",
    rcp_step2_title: "كريمة البيكورينو",
    rcp_step2_desc: "في وعاء كبير، اخلط صفار البيض، البيضة الكاملة، البيكورينو المبشور والكثير من الفلفل الأسود المطحون طازجاً. اخلط جيداً حتى تحصل على كريمة كثيفة. أضف ملعقة من دهن الغوانتشالي المذاب للنكهة.",
    rcp_step3_title: "سلق الباستا",
    rcp_step3_desc: "اسلق السباغيتي في ماء مملح (ليس مالحاً جداً، لأن البيكورينو والغوانتشالي مالحان). صفيها وهي (أل دينتي)، مع الاحتفاظ بكوب من ماء السلق.",
    rcp_step4_title: "الخلط (اللحظة السحرية)",
    rcp_step4_desc: "ضع الباستا المصفاة في المقلاة مع الغوانتشالي (والنار مطفأة!). أضف كريمة البيض والجبن. ابدأ بالخلط بسرعة، مع إضافة القليل من ماء الباستا لعمل مستحلب كريمي مثالي.",
    rcp_step5_title: "التقديم فوراً",
    rcp_step5_desc: "قدمها فوراً في أطباق ساخنة، مع إضافة المزيد من البيكورينو ورشة من الفلفل الأسود على الوجه.",
    rcp_faq_title: "أسئلة شائعة",
    rcp_faq1_q: "هل يمكنني استخدام البانشيتا؟",
    rcp_faq1_a: "إذا لم تجد الغوانتشالي، البانشيتا بديل مقبول، لكن النكهة الأصلية لا تتحقق إلا بالغوانتشالي.",
    rcp_faq2_q: "هل يمكنني تحضيرها مسبقاً؟",
    rcp_faq2_a: "لا، يجب تحضير الكاربونارا وتناولها فوراً. إذا بردت، تفقد الكريمة قوامها الحريري.",
    rcp_faq3_q: "هل أضيف الكريمة؟",
    rcp_faq3_a: "مطلقاً لا. إضافة الكريمة تعتبر جريمة في المطبخ الإيطالي. القوام الكريمي يجب أن يأتي فقط من مزيج البيض والجبن وماء الباستا."
  }
};

// Merge recipe translations into main translations
Object.keys(recipeTranslations).forEach(lang => {
  if (translations[lang]) {
    Object.assign(translations[lang], recipeTranslations[lang]);
  }
});

// Region Translations
const regionTranslations = {
  it: {
    reg_badge: "Viaggio Culinario", reg_title: "Ricette per Regione", reg_desc: "Ogni regione italiana ha i suoi sapori unici. Scopri l'autenticità locale.",
    reg_naples: "Napoli (Campania)", reg_naples_desc: "Pizza, Frutti di Mare & Pomodori", reg_explore: "Esplora",
    reg_rome: "Roma (Lazio)", reg_rome_desc: "Carbonara, Pecorino & Guanciale",
    reg_sicily: "Sicilia", reg_sicily_desc: "Agrumi, Pistacchi & Dolci",
    reg_tuscany: "Toscana", reg_tuscany_desc: "Olio d'oliva, Carne & Pane rustico"
  },
  en: {
    reg_badge: "Culinary Journey", reg_title: "Recipes by Region", reg_desc: "Each Italian region has its unique flavors. Discover local authenticity.",
    reg_naples: "Naples (Campania)", reg_naples_desc: "Pizza, Seafood & Tomatoes", reg_explore: "Explore",
    reg_rome: "Rome (Lazio)", reg_rome_desc: "Carbonara, Pecorino & Guanciale",
    reg_sicily: "Sicily", reg_sicily_desc: "Citrus, Pistachios & Sweets",
    reg_tuscany: "Tuscany", reg_tuscany_desc: "Olive oil, Meat & Rustic bread"
  },
  ar: {
    reg_badge: "رحلة طهي", reg_title: "وصفات حسب المنطقة", reg_desc: "كل منطقة إيطالية لها نكهاتها الفريدة. اكتشف الأصالة المحلية.",
    reg_naples: "نابولي (كامبانيا)", reg_naples_desc: "بيتزا، مأكولات بحرية وطماطم", reg_explore: "استكشف",
    reg_rome: "روما (لاتسيو)", reg_rome_desc: "كاربونارا، بيكورينو وغوانتشالي",
    reg_sicily: "صقلية", reg_sicily_desc: "حمضيات، فستق وحلويات",
    reg_tuscany: "توسكانا", reg_tuscany_desc: "زيت زيتون، لحوم وخبز ريفي"
  },
  fr: {
    reg_badge: "Voyage Culinaire", reg_title: "Recettes par Région", reg_desc: "Chaque région a ses saveurs uniques. Découvrez l'authenticité.",
    reg_naples: "Naples (Campanie)", reg_naples_desc: "Pizza, Fruits de mer & Tomates", reg_explore: "Explorer",
    reg_rome: "Rome (Latium)", reg_rome_desc: "Carbonara, Pecorino & Guanciale",
    reg_sicily: "Sicile", reg_sicily_desc: "Agrumes, Pistaches & Douceurs",
    reg_tuscany: "Toscane", reg_tuscany_desc: "Huile d'olive, Viande & Pain rustique"
  },
  es: {
    reg_badge: "Viaje Culinario", reg_title: "Recetas por Región", reg_desc: "Cada región italiana tiene sabores únicos. Descubre la autenticidad.",
    reg_naples: "Nápoles (Campania)", reg_naples_desc: "Pizza, Mariscos y Tomates", reg_explore: "Explorar",
    reg_rome: "Roma (Lacio)", reg_rome_desc: "Carbonara, Pecorino y Guanciale",
    reg_sicily: "Sicilia", reg_sicily_desc: "Cítricos, Pistachos y Dulces",
    reg_tuscany: "Toscana", reg_tuscany_desc: "Aceite de oliva, Carne y Pan rústico"
  },
  de: {
    reg_badge: "Kulinarische Reise", reg_title: "Rezepte nach Region", reg_desc: "Jede italienische Region hat ihre einzigartigen Aromen.",
    reg_naples: "Neapel (Kampanien)", reg_naples_desc: "Pizza, Meeresfrüchte & Tomaten", reg_explore: "Entdecken",
    reg_rome: "Rom (Latium)", reg_rome_desc: "Carbonara, Pecorino & Guanciale",
    reg_sicily: "Sizilien", reg_sicily_desc: "Zitrusfrüchte, Pistazien & Süßigkeiten",
    reg_tuscany: "Toskana", reg_tuscany_desc: "Olivenöl, Fleisch & rustikales Brot"
  },
  zh: {
    reg_badge: "烹饪之旅", reg_title: "按地区分类的食谱", reg_desc: "每个意大利地区都有其独特的风味。发现当地的地道美食。",
    reg_naples: "那不勒斯", reg_naples_desc: "比萨、海鲜和番茄", reg_explore: "探索",
    reg_rome: "罗马", reg_rome_desc: "培根蛋面、羊奶酪和腌肉",
    reg_sicily: "西西里岛", reg_sicily_desc: "柑橘、开心果和甜点",
    reg_tuscany: "托斯卡纳", reg_tuscany_desc: "橄榄油、肉类和乡村面包"
  },
  ja: {
    reg_badge: "料理の旅", reg_title: "地域別のレシピ", reg_desc: "イタリアの各地域には独特の風味があります。地元の味を発見してください。",
    reg_naples: "ナポリ", reg_naples_desc: "ピザ、シーフード、トマト", reg_explore: "探索する",
    reg_rome: "ローマ", reg_rome_desc: "カルボナーラ、ペコリーノ、グアンチャーレ",
    reg_sicily: "シチリア", reg_sicily_desc: "柑橘類、ピスタチオ、スイーツ",
    reg_tuscany: "トスカーナ", reg_tuscany_desc: "オリーブオイル、肉、素朴なパン"
  }
};

Object.keys(regionTranslations).forEach(lang => {
  if (translations[lang]) Object.assign(translations[lang], regionTranslations[lang]);
});

// ==========================================
// ANIMATIONS (AOS Observer)
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  // Dynamically add data-aos tags to cards if not present
  const animateElements = document.querySelectorAll('.cat-card, .recipe-card, .chef-card, .step-card, .section-header, .region-card, .video-card, .tip-card, .stat-box');
  animateElements.forEach((el, index) => {
    if(!el.hasAttribute('data-aos')) {
      el.setAttribute('data-aos', 'fade-up');
      // Add slight delay based on index for stagger effect within grid
      if(el.parentElement && (el.parentElement.style.display === 'grid' || getComputedStyle(el.parentElement).display === 'grid')) {
        el.style.transitionDelay = `${(index % 4) * 0.15}s`;
      }
    }
  });

  window.aosObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('aos-animate');
        // Optional: stop observing once animated
        // observer.unobserve(entry.target); 
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  });

  document.querySelectorAll('[data-aos]').forEach(el => {
    window.aosObserver.observe(el);
  });
});
