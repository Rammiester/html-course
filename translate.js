function translatePage(languageCode) {
    var elements = document.querySelectorAll('html, body, h1, h2, h3, p, a, li');

    // Translations for all sections
    var translations = {
        "en": {
            "Select Language": "Select Language",
            "Section 1: Introduction to HTML": "Section 1: Introduction to HTML",
            "This section covers basic HTML elements and their usage.": "This section covers basic HTML elements and their usage.",
            "Section 1.1: HTML components": "Section 1.1: HTML components",
            "In this segment, we explore the components of an HTML element and put that understanding into practice by crafting an HTML about page for a musician of your selection. By the conclusion of this tutorial, you will have developed the entire HTML code for the initial page of this course's band website assignment.": "In this segment, we explore the components of an HTML element and put that understanding into practice by crafting an HTML about page for a musician of your selection. By the conclusion of this tutorial, you will have developed the entire HTML code for the initial page of this course's band website assignment.",
            "Section 2: Advanced HTML Elements": "Section 2: Advanced HTML Elements",
            "Get ready to code your band's website! This video dives into the building blocks of web pages: HTML elements. We'll master the powerful span and div tags, then use them to craft a killer home page for your music.": "Get ready to code your band's website! This video dives into the building blocks of web pages: HTML elements. We'll master the powerful span and div tags, then use them to craft a killer home page for your music.",
            "Section 2.1: Links and Inputs": "Section 2.1: Links and Inputs",
            "Last stop, web warriors! Conquer links and forms (anchor & input tags) to build your band's store page. By video's end, you'll have a complete HTML website and HTML fluency!": "Last stop, web warriors! Conquer links and forms (anchor & input tags) to build your band's store page. By video's end, you'll have a complete HTML website and HTML fluency!",
            "Section 3: 20 Minutes to Stunning Web Design: Your Intro to CSS": "Section 3: 20 Minutes to Stunning Web Design: Your Intro to CSS",
            "Master CSS, the secret weapon of web design, in this quick and effective video. Learn syntax, colors, units, and best practices with a full example walkthrough. Be ready to unleash your creative vision on any webpage!": "Master CSS, the secret weapon of web design, in this quick and effective video. Learn syntax, colors, units, and best practices with a full example walkthrough. Be ready to unleash your creative vision on any webpage!"
        },
        "hi": {
            "Select Language": "भाषा चुनें",
            "Section 1: Introduction to HTML": "सेक्शन 1: HTML का परिचय",
            "This section covers basic HTML elements and their usage.": "इस सेक्शन में मूल एचटीएमएल तत्वों और उनके उपयोग को शामिल किया गया है।",
            "Section 1.1: HTML components": "सेक्शन 1.1: एचटीएमएल के घटक",
            "In this segment, we explore the components of an HTML element and put that understanding into practice by crafting an HTML about page for a musician of your selection. By the conclusion of this tutorial, you will have developed the entire HTML code for the initial page of this course's band website assignment.": "इस सेगमेंट में, हम एचटीएमएल तत्वों के घटकों की खोज करते हैं और उन्हें अपने चयनित संगीतकार के लिए एचटीएमएल के बारे में पृष्ठ बनाकर उस समझ को अभ्यास में लाते हैं। इस ट्यूटोरियल के समापन पर, आप इस पाठ्यक्रम के बैंड वेबसाइट असाइनमेंट के प्रारंभिक पृष्ठ के लिए पूरा HTML कोड विकसित कर लेंगे।",
            "Section 2: Advanced HTML Elements": "सेक्शन 2: एडवांस्ड एचटीएमएल तत्व",
            "Get ready to code your band's website! This video dives into the building blocks of web pages: HTML elements. We'll master the powerful span and div tags, then use them to craft a killer home page for your music.": "अपने बैंड की वेबसाइट को कोड करने के लिए तैयार हो जाओ! यह वीडियो वेब पृष्ठों के निर्माण खंडों में घुसता है: एचटीएमएल तत्व। हम शक्तिशाली स्पैन और डिव टैग को अधिकार करेंगे, फिर उन्हें अपनी संगीत के लिए एक किलर होम पेज बनाने के लिए उन्हें उपयोग करेंगे।",
            "Section 2.1: Links and Inputs": "सेक्शन 2.1: लिंक और इनपुट",
            "Last stop, web warriors! Conquer links and forms (anchor & input tags) to build your band's store page. By video's end, you'll have a complete HTML website and HTML fluency!": "अंतिम ठहराव, वेब योद्धाओं! अपने बैंड के स्टोर पेज को बनाने के लिए लिंक और फॉर्म (एंकर और इनपुट टैग) को जीतें। वीडियो के अंत में, आपके पास एक पूरी HTML वेबसाइट और HTML दक्षता होगी!",
            "Section 3: 20 Minutes to Stunning Web Design: Your Intro to CSS": "सेक्शन 3: चौंकाने वाले वेब डिज़ाइन के लिए 20 मिनट: आपका CSS का परिचय",
            "Master CSS, the secret weapon of web design, in this quick and effective video. Learn syntax, colors, units, and best practices with a full example walkthrough. Be ready to unleash your creative vision on any webpage!": "इस त्वरित और प्रभावी वीडियो में वेब डिजाइन का गुप्त उपकरण सीएसएस को मास्टर करें। पूर्ण उदाहरण वॉकथ्रू के साथ वाक्य विन्यास, रंग, इकाइयाँ, और सर्वश्रेष्ठ प्रथाओं को सीखें। किसी भी वेबपेज पर अपने रचनात्मक दृष्टिकोण को किसी भी वेबपेज पर खोलने के लिए तैयार रहें!"
        },
        "es": {
            "Select Language": "Seleccionar idioma",
            "Section 1: Introduction to HTML": "Sección 1: Introducción a HTML",
            "This section covers basic HTML elements and their usage.": "Esta sección cubre los elementos básicos de HTML y su uso.",
            "Section 1.1: HTML components": "Sección 1.1: Componentes HTML",
            "In this segment, we explore the components of an HTML element and put that understanding into practice by crafting an HTML about page for a musician of your selection. By the conclusion of this tutorial, you will have developed the entire HTML code for the initial page of this course's band website assignment.": "En este segmento, exploramos los componentes de un elemento HTML y ponemos esa comprensión en práctica creando una página HTML sobre un músico de su elección. Al final de este tutoriel, habrás desarrollado todo el código HTML para la página inicial de la tarea del sitio web de la banda de este curso.",
            "Section 2: Advanced HTML Elements": "Sección 2: Elementos HTML avanzados",
            "Get ready to code your band's website! This video dives into the building blocks of web pages: HTML elements. We'll master the powerful span and div tags, then use them to craft a killer home page for your music.": "¡Prepárate para codificar el sitio web de tu banda! Este video profundiza en los componentes básicos de las páginas web: los elementos HTML. Dominaremos las potentes etiquetas span y div, y luego las usaremos para crear una página de inicio impresionante para tu música.",
            "Section 2.1: Links and Inputs": "Sección 2.1: Enlaces e Inputs",
            "Last stop, web warriors! Conquer links and forms (anchor & input tags) to build your band's store page. By video's end, you'll have a complete HTML website and HTML fluency!": "¡Última parada, guerreros web! Conquista enlaces y formularios (etiquetas de anclaje e input) para construir la página de la tienda de tu banda. ¡Al final del video, tendrás un sitio web HTML completo y fluidez en HTML!",
            "Section 3: 20 Minutes to Stunning Web Design: Your Intro to CSS": "Sección 3: 20 Minutos para un Asombroso Diseño Web: Tu Introducción a CSS",
            "Master CSS, the secret weapon of web design, in this quick and effective video. Learn syntax, colors, units, and best practices with a full example walkthrough. Be ready to unleash your creative vision on any webpage!": "Maestra CSS, el arma secreta del diseño web, en este video rápido y efectivo. Aprende sintaxis, colores, unidades y mejores prácticas con una explicación completa de ejemplos. ¡Prepárate para liberar tu visión creativa en cualquier página web!"
        },
        "fr": {
            "Select Language": "Sélectionner la langue",
            "Section 1: Introduction to HTML": "Section 1: Introduction à HTML",
            "This section covers basic HTML elements and their usage.": "Cette section couvre les éléments HTML de base et leur utilisation.",
            "Section 1.1: HTML components": "Section 1.1: Composants HTML",
            "In this segment, we explore the components of an HTML element and put that understanding into practice by crafting an HTML about page for a musician of your selection. By the conclusion of this tutorial, you will have developed the entire HTML code for the initial page of this course's band website assignment.": "Dans ce segment, nous explorons les composants d'un élément HTML et mettons cette compréhension en pratique en créant une page HTML sur un musicien de votre choix. À la fin de ce tutoriel, vous aurez développé l'ensemble du code HTML pour la page initiale de la tâche du site Web de groupe de ce cours.",
            "Section 2: Advanced HTML Elements": "Section 2: Éléments HTML avancés",
            "Get ready to code your band's website! This video dives into the building blocks of web pages: HTML elements. We'll master the powerful span and div tags, then use them to craft a killer home page for your music.": "Préparez-vous à coder le site Web de votre groupe ! Cette vidéo plonge dans les fondements des pages Web : les éléments HTML. Nous maîtriserons les puissantes balises span et div, puis les utiliserons pour créer une page d'accueil de tueur pour votre musique.",
            "Section 2.1: Links and Inputs": "Section 2.1: Liens et Entrées",
            "Last stop, web warriors! Conquer links and forms (anchor & input tags) to build your band's store page. By video's end, you'll have a complete HTML website and HTML fluency!": "Dernier arrêt, guerriers du web ! Conquérez les liens et les formulaires (balises d'ancre et d'entrée) pour construire la page de magasin de votre groupe. À la fin de la vidéo, vous aurez un site Web HTML complet et une fluidité en HTML !",
            "Section 3: 20 Minutes to Stunning Web Design: Your Intro to CSS": "Section 3: 20 Minutes pour un Design Web Étonnant: Votre Introduction à CSS",
            "Master CSS, the secret weapon of web design, in this quick and effective video. Learn syntax, colors, units, and best practices with a full example walkthrough. Be ready to unleash your creative vision on any webpage!": "Maîtrisez CSS, l'arme secrète du design web, dans cette vidéo rapide et efficace. Apprenez la syntaxe, les couleurs, les unités et les meilleures pratiques avec une explication complète des exemples. Soyez prêt à libérer votre vision créative sur n'importe quelle page web !"
        }
    };

    // Update navbar language
    var languageDropdown = document.getElementById("languageDropdown");
    languageDropdown.textContent = translations[languageCode]["Select Language"];

    // Update content language
    elements.forEach(function (element) {
        if (translations[languageCode][element.textContent]) {
            element.textContent = translations[languageCode][element.textContent];
        }
        // Handling text nodes
        if (element.childNodes.length === 1 && element.childNodes[0].nodeType === 3) {
            if (translations[languageCode][element.childNodes[0].textContent]) {
                element.childNodes[0].textContent = translations[languageCode][element.childNodes[0].textContent];
            }
        }
    });
}