        // Evitar el flash de scroll al recargar y saltar instantáneamente
        if (history.scrollRestoration) {
            history.scrollRestoration = 'manual';
        }
        const savedScroll = sessionStorage.getItem('scrollPositionBeforeReload');
        if (savedScroll && parseFloat(savedScroll) > 50) {
            document.documentElement.style.scrollBehavior = 'auto';
            window.scrollTo(0, parseFloat(savedScroll));
            document.documentElement.offsetHeight; // Forzar reflujo
            document.documentElement.style.scrollBehavior = 'smooth';
        }

        // --- BASE DE DATOS DE TRADUCCIÓN ---
        const translations = {
            es: {
                nav_inicio: "Inicio",
                nav_carta: "Carta",
                nav_galeria: "Galería",
                nav_esencia: "Sobre Nosotros",
                nav_contacto: "Contacto",
                nav_write_review: "Dejar Reseña",
                nav_reseñas: "Reseñas",
                nav_reserve: "Reservar",
                hero_h1: "Korta Taberna | Mejor Taberna Zumarraga",
                hero_title: "Korta Taberna",
                hero_subtitle: "Pintxos, vinos y tradición desde el corazón de Gipuzkoa",
                hero_menu_btn: "Ver nuestra carta",
                hero_map_btn: "Cómo llegar",
                hero_call_btn: "Llámanos",
                badge_local_product: "100% Tokiko Produktua",
                about_tag: "Tradición desde 1985",
                about_title: "Nuestra Esencia",
                about_p1: "En el corazón de Zumarraga, Korta Taberna es el lugar donde la cocina vasca de siempre se convierte en experiencia. Nuestros pintxos elaborados a diario, la materia prima de cercanía y el calor de la barra te esperan para compartir momentos inolvidables.",
                about_p2: "Cada plato cuenta una historia de producto local, desde la anchoa del Cantábrico hasta la txuleta de nuestras montañas. Un rincón con alma donde se respira la esencia de Gipuzkoa.",
                pillar1_title: "Materia Prima Local",
                pillar1_desc: "Ingredientes frescos y de temporada seleccionados directamente de productores locales y del puerto.",
                pillar2_title: "Tradición Familiar",
                pillar2_desc: "Recetas tradicionales y técnicas culinarias vascas perfeccionadas a lo largo de décadas.",
                pillar3_title: "El Alma de la Barra",
                pillar3_desc: "Un ambiente cercano, acogedor y dinámico que invita a compartir y disfrutar juntos.",
                menu_title: "Lo más pedido",
                menu_subtitle: "Una pequeña muestra de nuestra barra",
                menu_card1_title: "Pintxo de Txangurro",
                menu_card1_desc: "Centollo desmigado sobre pan de cristal, gratinado con alioli suave.",
                menu_card2_title: "Tosta de Anchoa del Cantábrico",
                menu_card2_desc: "Anchoa de bajura con tomate natural asado y aceite de oliva virgen extra.",
                menu_card3_title: "Tortilla de Bacalao",
                menu_card3_desc: "Jugosa y en su punto, con bacalao desalado y pimiento verde.",
                menu_card4_title: "Txuleta a la Brasa",
                menu_card4_desc: "Carne madurada de vaca vieja, servida con pimientos de piquillo.",
                menu_btn: "Carta completa",
                info_hours_title: "Horario de apertura",
                info_hours_tue_sat: "Martes a sábado:",
                info_hours_sun: "Domingo:",
                info_hours_mon: "Lunes:",
                info_hours_closed: "cerrado",
                info_hours_note: "Cocina ininterrumpida de 13:00 a 15:30 y de 20:00 a 22:00.",
                info_loc_title: "Encuéntranos",
                info_loc_btn: "Abrir en Google Maps",
                reviews_title: "Lo que dicen nuestros clientes",
                reviews_subtitle: "Basado en +200 reseñas",
                review1_text: "\"El mejor pintxo de Zumarraga, sin duda. Ambiente inmejorable y el trato es como estar en casa. La tortilla de bacalao es espectacular. ¡Volveremos cada vez que pasemos por la zona!\"",
                review2_text: "\"Producto de primera y una barra que enamora. No te pierdas la txuleta, es de otro nivel. Relación calidad-precio difícil de superar. Enhorabuena al equipo.\"",
                review3_text: "\"Taberna auténtica con un toque moderno. Los pintxos fríos y calientes son muy originales, y la selección de vinos es excelente. Recomiendo la tosta de anchoa. Solo echo en falta un poco más de espacio los fines de semana, pero merece la pena.\"",
                write_review_title: "Comparte tu experiencia",
                write_review_subtitle: "Queremos saber tu opinión. Tu reseña aparecerá instantáneamente en nuestra web.",
                btn_write_review: "Compartir mi experiencia",
                form_name_label: "Tu nombre",
                form_rating_label: "Tu valoración",
                form_comment_label: "Tu comentario",
                form_submit_text: "Enviar reseña",
                form_success_message: "¡Muchas gracias! Tu reseña ha sido añadida correctamente.",
                gallery_title: "Nuestro rincón en imágenes",
                transition_quote: "\"El secreto de nuestros platos no está en la receta, está en el origen.\"",
                footer_tagline: "Pintxos y tradición desde Zumarraga",
                footer_links_title: "Enlaces",
                footer_contact_title: "Contacto",
                footer_newsletter_title: "Recibe nuestras novedades y eventos",
                footer_newsletter_placeholder: "Tu email",
                footer_newsletter_btn: "Suscribirse",
                info_section_title: "Contacto, Horario y Ubicación",
                btn_view_full_schedule: "Ver horario completo",
                btn_hide_full_schedule: "Ocultar horario completo",
                day_mon: "Lunes:",
                day_tue: "Martes:",
                day_wed: "Miércoles:",
                day_thu: "Jueves:",
                day_fri: "Viernes:",
                day_sat: "Sábado:",
                day_sun: "Domingo:",
                footer_copyright: "© 2026 Korta Taberna. Todos los derechos reservados."
            },
            eu: {
                nav_inicio: "Hasiera",
                nav_carta: "Karta",
                nav_galeria: "Galeria",
                nav_esencia: "Gure Esentzia",
                nav_contacto: "Kontaktua",
                nav_write_review: "Iritzia utzi",
                nav_reseñas: "Iritziak",
                nav_reserve: "Erreserbatu",
                hero_h1: "Korta Taberna | Zumarragako Tabernarik Onena",
                hero_title: "Korta Taberna",
                hero_subtitle: "Pintxoak, ardoak eta tradizioa Gipuzkoako bihotzetik",
                hero_menu_btn: "Ikusi gure karta",
                hero_map_btn: "Nola iritsi",
                hero_call_btn: "Deitu iezaguzu",
                badge_local_product: "100% Tokiko Produktua",
                about_tag: "Tradizioa 1985etik",
                about_title: "Gure Esentzia",
                about_p1: "Zumarragako bihotzean, Korta Taberna euskal sukaldaritza beti bizi izateko tokia da. Egunero egindako pintxoak, inguruko lehengaiak eta tabernako berotasuna zain dituzu une ahaztezinak partekatzeko.",
                about_p2: "Plater bakoitzak tokiko produktuaren istorio bat kontatzen du, Kantauriko antxoatik hasi eta gure mendietako txuletaraino. Gipuzkoako esentzia arnasten den arima duen txokoa.",
                pillar1_title: "Tokiko Lehengaia",
                pillar1_desc: "Garaiko ingredientu freskoak, inguruko ekoizleengandik eta portutik zuzenean hautatuak.",
                pillar2_title: "Familia Tradizioa",
                pillar2_desc: "Euskal sukaldaritzako errezeta tradizionalak eta teknikak, hamarkadetan zehar hobetuak.",
                pillar3_title: "Tabernako Arima",
                pillar3_desc: "Giro hurbila, atsegina eta dinamikoa, elkarrekin partekatzera eta gozatzera gonbidatzen duena.",
                menu_title: "Eskatuena",
                menu_subtitle: "Gure barraren lagin txiki bat",
                menu_card1_title: "Txangurro Pintxoa",
                menu_card1_desc: "Txangurro xehatua pan de cristal gainean, alioli leunarekin gratinatua.",
                menu_card2_title: "Kantauriko Antxoa Tosta",
                menu_card2_desc: "Kostako antxoa tomate errearekin eta oliba olio birjina estrarekin.",
                menu_card3_title: "Bakailao Tortilla",
                menu_card3_desc: "Mamitsua eta bere puntuan, bakailao gabetuarekin eta piper berdearekin.",
                menu_card4_title: "Txuleta Parrillan",
                menu_card4_desc: "Behi zaharren haragi ondua, pikillo piperrekin zerbitzatua.",
                menu_btn: "Karta osoa",
                info_hours_title: "Ordutegia",
                info_hours_tue_sat: "Asteartetik larunbatera:",
                info_hours_sun: "Igandea:",
                info_hours_mon: "Astelehena:",
                info_hours_closed: "itxita",
                info_hours_note: "Sukaldea etengabe zabalik 13:00etatik 15:30era eta 20:00etatik 22:00etara.",
                info_loc_title: "Aurki gaitzazu",
                info_loc_btn: "Ireki Google Maps-en",
                reviews_title: "Gure bezeroek esaten dutena",
                reviews_subtitle: "+200 baloraziotik gora",
                review1_text: "\"Zumarragako pintxorik onena, zalantzarik gabe. Giro ezin hobea eta harrera etxean bezala sentitzea da. Bakailao tortilla bikaina da. Ingurutik pasatzen garen bakoitzean itzuliko gara!\"",
                review2_text: "\"Lehen mailako produktua eta maitemintzen duen barra. Ez galdu txuleta, beste maila bat da. Kalitate-prezio erlazioa gainditzen zaila. Zorionak taldeari.\"",
                review3_text: "\"Taberna autentikoa ukitu modernoarekin. Pintxo hotz eta beroak oso originalak dira, eta ardo aukeraketa bikaina da. Antxoa tosta gomendatzen dut. Asteburuetan lekua falta da, baina merezi du.\"",
                write_review_title: "Idatzi zure iritzia",
                write_review_subtitle: "Zure iritzia jakin nahi dugu. Zure balorazioa berehala agertuko da gure webgunean.",
                btn_write_review: "Zure esperientzia partekatu",
                form_name_label: "Zure izena",
                form_rating_label: "Zure balorazioa",
                form_comment_label: "Zure iritzia",
                form_submit_text: "Bidali iritzia",
                form_success_message: "Eskerrik asko! Zure iritzia zuzen gehitu da gure webgunera.",
                gallery_title: "Gure Txokoak",
                transition_quote: "\"Gure plateren sekretua ez dago errezetan, jatorrian baizik.\"",
                footer_tagline: "Pintxoak eta tradizioa Zumarragatik",
                footer_links_title: "Estekak",
                footer_contact_title: "Kontaktua",
                footer_newsletter_title: "Jaso gure albisteak eta ekitaldiak",
                footer_newsletter_placeholder: "Zure emaila",
                footer_newsletter_btn: "Harpidetu",
                info_section_title: "Kontaktua, Ordutegia eta Kokapena",
                btn_view_full_schedule: "Ikusi ordutegi osoa",
                btn_hide_full_schedule: "Ezkutatu ordutegi osoa",
                day_mon: "Astelehena:",
                day_tue: "Asteartea:",
                day_wed: "Asteazkena:",
                day_thu: "Osteguna:",
                day_fri: "Ostirala:",
                day_sat: "Larunbata:",
                day_sun: "Igandea:",
                footer_copyright: "© 2026 Korta Taberna. Eskubide guztiak erreserbatuta."
            }
        };

        // --- SISTEMA DE IDIOMA ---
        // Leer el idioma de la URL para indexación bilingüe en motores de búsqueda (hreflang)
        const urlParams = new URLSearchParams(window.location.search);
        const urlLang = urlParams.get('lang');
        let currentLang = (urlLang === 'es' || urlLang === 'eu') ? urlLang : (localStorage.getItem('korta_lang') || 'eu');

        function updateTodaySchedule() {
            const todayEl = document.getElementById('today-schedule');
            if (!todayEl) return;

            const now = new Date();
            const day = now.getDay(); // 0: Sun, 1: Mon, ..., 6: Sat
            const lang = currentLang || 'eu';

            let dayName = '';
            let hoursStr = '';

            if (lang === 'eu') {
                const daysEu = ["Igandea", "Astelehena", "Asteartea", "Asteazkena", "Osteguna", "Ostirala", "Larunbata"];
                dayName = daysEu[day];
                if (day >= 1 && day <= 5) {
                    hoursStr = "09:00 – 22:30";
                } else if (day === 6) {
                    hoursStr = "10:30 – 00:30";
                } else {
                    hoursStr = "10:30 – 22:30";
                }
                todayEl.innerHTML = `<strong>Gaur, ${dayName}:</strong> <span>${hoursStr}</span>`;
            } else {
                const daysEs = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
                dayName = daysEs[day];
                if (day >= 1 && day <= 5) {
                    hoursStr = "09:00 – 22:30";
                } else if (day === 6) {
                    hoursStr = "10:30 – 00:30";
                } else {
                    hoursStr = "10:30 – 22:30";
                }
                todayEl.innerHTML = `<strong>Hoy, ${dayName}:</strong> <span>${hoursStr}</span>`;
            }
        }

        function updateOpenStatus() {
            const statusBadge = document.getElementById('status-badge');
            if (!statusBadge) return;

            const now = new Date();
            const day = now.getDay(); // 0: Sunday, 1: Monday, ..., 6: Saturday
            const hours = now.getHours();
            const minutes = now.getMinutes();
            const currentTime = hours * 60 + minutes;

            let isOpen = false;

            // Monday to Friday: 09:00 - 22:30
            if (day >= 1 && day <= 5) {
                if (currentTime >= 9 * 60 && currentTime < 22 * 60 + 30) {
                    isOpen = true;
                }
            }
            // Saturday: 10:30 - 00:30
            else if (day === 6) {
                if (currentTime >= 10 * 60 + 30) { // from 10:30 to 23:59
                    isOpen = true;
                }
            }
            // Sunday: 10:30 - 22:30 (and Saturday night overflow 00:00 - 00:30)
            else if (day === 0) {
                if (currentTime >= 0 && currentTime < 30) { // 00:00 - 00:30
                    isOpen = true;
                } else if (currentTime >= 10 * 60 + 30 && currentTime < 22 * 60 + 30) {
                    isOpen = true;
                }
            }

            const lang = currentLang || 'eu';

            if (isOpen) {
                statusBadge.className = 'status-badge open';
                statusBadge.innerHTML = '<span class="status-dot"></span>' + (lang === 'eu' ? 'Zabalik Orain' : 'Abierto Ahora');
            } else {
                statusBadge.className = 'status-badge closed';
                statusBadge.innerHTML = '<span class="status-dot"></span>' + (lang === 'eu' ? 'Itxita Orain' : 'Cerrado Ahora');
            }
        }

        function applyLanguage(lang, updateURL = true) {
            currentLang = lang;
            localStorage.setItem('korta_lang', lang);
            document.documentElement.lang = lang;

            // Actualizar canonical de forma dinámica para apuntar a la variante idiomática
            const canonicalLink = document.querySelector('link[rel="canonical"]');
            if (canonicalLink) {
                canonicalLink.href = 'https://kortataberna.com/?lang=' + lang;
            }

            // Cambiar URL en el navegador sin recargar para compartir y posicionamiento SEO
            if (updateURL && window.history.replaceState) {
                const newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?lang=' + lang + window.location.hash;
                window.history.replaceState({ path: newUrl }, '', newUrl);
            }

            // Actualizar todos los elementos con data-key
            document.querySelectorAll('[data-key]').forEach(el => {
                const key = el.getAttribute('data-key');
                if (translations[lang] && translations[lang][key]) {
                    if (el.children.length === 0) {
                        el.textContent = translations[lang][key];
                    } else {
                        let textNodeFound = false;
                        for (let node of el.childNodes) {
                            if (node.nodeType === Node.TEXT_NODE && node.nodeValue.trim() !== '') {
                                node.nodeValue = translations[lang][key];
                                textNodeFound = true;
                                break;
                            }
                        }
                        if (!textNodeFound) {
                            const textSpan = el.querySelector('span[data-key]');
                            if (textSpan) {
                                textSpan.textContent = translations[lang][key];
                            }
                        }
                    }
                }
            });

            // Actualizar placeholders
            document.querySelectorAll('[data-placeholder-key]').forEach(el => {
                const key = el.getAttribute('data-placeholder-key');
                if (translations[lang] && translations[lang][key]) {
                    el.placeholder = translations[lang][key];
                }
            });

            // Sincronizar botones activos de la isla y barra flotante
            document.querySelectorAll('.lang-btn').forEach(btn => {
                if (btn.getAttribute('data-lang') === lang) {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            });

                        updateOpenStatus();
            updateTodaySchedule();
        }

        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const lang = btn.getAttribute('data-lang');
                applyLanguage(lang);
            });
        });

        // --- SCROLL REVEAL E INTERSECTION OBSERVER Y SCROLL CONSTANTE DE RESEÑAS ---
        let isReviewsHovered = false;
        let initInfiniteScroll;

        window.addEventListener('beforeunload', () => {
            sessionStorage.setItem('scrollPositionBeforeReload', window.scrollY);
        });

        document.addEventListener('DOMContentLoaded', () => {
            // Desactivar la restauración automática para controlar nosotros el desplazamiento
            if (history.scrollRestoration) {
                history.scrollRestoration = 'manual';
            }

            const savedScroll = sessionStorage.getItem('scrollPositionBeforeReload');
            if (savedScroll && parseFloat(savedScroll) > 50) {
                sessionStorage.removeItem('scrollPositionBeforeReload');

                // Realizar scroll suave hacia la cabecera (landing)
                setTimeout(() => {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                }, 150);
            } else {
                window.scrollTo(0, 0);
            }

            if (window.location.hash) {
                history.replaceState(null, null, window.location.pathname + window.location.search);
            }

            applyLanguage(currentLang);
            loadReviews();

            // --- COMPORTAMIENTO DESPLEGABLE HORARIO ---
            const toggleBtn = document.getElementById('btn-schedule-toggle');
            const collapsible = document.getElementById('schedule-collapsible');
            if (toggleBtn && collapsible) {
                toggleBtn.addEventListener('click', () => {
                    const isOpen = collapsible.classList.contains('open');
                    if (isOpen) {
                        collapsible.classList.remove('open');
                        toggleBtn.classList.remove('active');
                        const labelSpan = toggleBtn.querySelector('span');
                        if (labelSpan) {
                            labelSpan.setAttribute('data-key', 'btn_view_full_schedule');
                            labelSpan.textContent = currentLang === 'eu' ? 'Ikusi ordutegi osoa' : 'Ver horario completo';
                        }
                    } else {
                        collapsible.classList.add('open');
                        toggleBtn.classList.add('active');
                        const labelSpan = toggleBtn.querySelector('span');
                        if (labelSpan) {
                            labelSpan.setAttribute('data-key', 'btn_hide_full_schedule');
                            labelSpan.textContent = currentLang === 'eu' ? 'Ezkutatu ordutegi osoa' : 'Ocultar horario completo';
                        }
                    }
                });
            }

            // --- SUAVIZAR BUCLE DE VIDEO HERO ---
            const heroVideo = document.querySelector('.hero-bg video');
            if (heroVideo) {
                function smoothVideoLoop() {
                    if (heroVideo.duration > 0 && !heroVideo.paused) {
                        const fadeTime = 0.3; // Segundos para el fundido a negro (rápido)
                        const timeLeft = heroVideo.duration - heroVideo.currentTime;

                        if (timeLeft < fadeTime) {
                            // Al final del video, baja la opacidad hacia 0
                            heroVideo.style.opacity = Math.max(0, timeLeft / fadeTime);
                        } else if (heroVideo.currentTime < fadeTime) {
                            // Al inicio del video, sube la opacidad hacia 1
                            heroVideo.style.opacity = Math.min(1, heroVideo.currentTime / fadeTime);
                        } else {
                            heroVideo.style.opacity = 1;
                        }
                    }
                    requestAnimationFrame(smoothVideoLoop);
                }
                requestAnimationFrame(smoothVideoLoop);
            }

            const observerOptions = {
                root: null,
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const revealObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        const staggerItems = entry.target.querySelectorAll('.stagger-item');
                        staggerItems.forEach((item, index) => {
                            setTimeout(() => {
                                item.classList.add('active');
                            }, index * 100);
                        });
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

            setTimeout(() => {
                document.querySelectorAll('.hero .reveal').forEach(el => el.classList.add('active'));
            }, 100);

            // --- Scroll Constante e Infinito ---
            const container = document.getElementById('reviews-container');

            container.addEventListener('mouseenter', () => isReviewsHovered = true);
            container.addEventListener('mouseleave', () => {
                isReviewsHovered = false;
                isDown = false;
                container.classList.remove('active-drag');
            });
            container.addEventListener('touchstart', () => isReviewsHovered = true);
            container.addEventListener('touchend', () => isReviewsHovered = false);

            let isDown = false;
            let startX;
            let scrollLeft;

            container.addEventListener('mousedown', (e) => {
                isDown = true;
                isReviewsHovered = true;
                container.classList.add('active-drag');
                startX = e.pageX - container.offsetLeft;
                scrollLeft = container.scrollLeft;
            });

            container.addEventListener('mouseup', () => {
                isDown = false;
                container.classList.remove('active-drag');
            });

            container.addEventListener('mousemove', (e) => {
                if (!isDown) return;
                e.preventDefault();
                const x = e.pageX - container.offsetLeft;
                const walk = (x - startX) * 1.5;
                container.scrollLeft = scrollLeft - walk;
                currentScroll = container.scrollLeft;
            });

            initInfiniteScroll = function () {
                // Eliminar clones existentes si los hay
                container.querySelectorAll('.review-card-clone').forEach(el => el.remove());

                const cards = Array.from(container.children);
                if (cards.length === 0) return;

                // Clonar las tarjetas para crear un bucle sin costuras
                cards.forEach(card => {
                    const clone = card.cloneNode(true);
                    clone.classList.add('review-card-clone');
                    clone.style.animation = 'none'; // Quitar animaciones de entrada en los clones
                    container.appendChild(clone);
                });
            };

            initInfiniteScroll();

            let scrollSpeed = 0.8; // Velocidad en píxeles por fotograma
            let currentScroll = 0;
            function scrollStep() {
                if (!isReviewsHovered) {
                    currentScroll += scrollSpeed;

                    // Encontrar la posición exacta de salto usando el primer clon
                    const firstClone = container.querySelector('.review-card-clone');
                    let loopWidth = container.scrollWidth / 2;
                    if (firstClone) {
                        loopWidth = firstClone.offsetLeft - container.firstElementChild.offsetLeft;
                    }

                    if (currentScroll >= loopWidth) {
                        currentScroll -= loopWidth;
                    }
                    container.scrollLeft = currentScroll;
                } else {
                    // Si el usuario está interactuando, sincronizar la variable
                    currentScroll = container.scrollLeft;
                }
                requestAnimationFrame(scrollStep);
            }

            // Iniciar scroll automático
            setTimeout(() => {
                currentScroll = container.scrollLeft;
                requestAnimationFrame(scrollStep);
            }, 500);
        });

        // --- COMPORTAMIENTO ISLA DINÁMICA E ISLA FLOTANTE DE IDIOMA ---
        const header = document.getElementById('header');
        const floatingLang = document.getElementById('floating-lang-island');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 80) {
                if (header) header.classList.add('scrolled');
                if (floatingLang) floatingLang.classList.add('visible');
            } else {
                if (header) header.classList.remove('scrolled');
                if (floatingLang) floatingLang.classList.remove('visible');
            }
        });

        // --- COMPORTAMIENTO EXPANSIÓN ISLA DINÁMICA ---
        const island = document.getElementById('header');
        const islandReviewRow = document.getElementById('island-review-row');
        const islandReviewBackBtn = document.getElementById('island-review-back');

        island.addEventListener('click', (e) => {
            // No hacer nada al hacer clic si estamos en modo reseña dentro de la isla
            if (island.classList.contains('mode-review')) return;

            const isClickInsideContent = e.target.closest('.island-content-row');
            const isLangBtn = e.target.closest('.lang-btn');

            if (!island.classList.contains('expanded')) {
                island.classList.add('expanded');
            } else {
                if (e.target.closest('.island-toggle') || (e.target.closest('a') && !isLangBtn) || !isClickInsideContent) {
                    island.classList.remove('expanded');
                }
            }
        });

        // Contraer si se hace clic fuera de la isla dinámica
        document.addEventListener('click', (e) => {
            if (!e.target.closest('#header')) {
                island.classList.remove('expanded');
                island.classList.remove('mode-review');
                if (islandReviewRow) islandReviewRow.style.display = 'none';
            }
        });

        // --- MOSTRAR/OCULTAR FORMULARIO DE RESEÑAS DE LA PÁGINA ---
        const toggleReviewBtn = document.getElementById('toggle-review-btn');
        const collapsibleReviewSection = document.getElementById('collapsible-review-section');

        toggleReviewBtn.addEventListener('click', () => {
            toggleReviewBtn.classList.toggle('active');
            collapsibleReviewSection.classList.toggle('expanded');
        });

        // --- ABRIR FORMULARIO DE RESEÑAS DENTRO DE LA ISLA DINÁMICA ---
        const islandWriteReviewTrigger = document.getElementById('island-write-review-trigger');

        if (islandWriteReviewTrigger) {
            islandWriteReviewTrigger.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation(); // Evitar que el click cierre/altere la isla inmediatamente

                // Activar el modo de reseña en la isla
                island.classList.add('mode-review');
                if (islandReviewRow) islandReviewRow.style.display = 'flex';

                // Focus en el input del nombre dentro de la isla
                setTimeout(() => {
                    const nameInput = document.getElementById('island-review-name');
                    if (nameInput) nameInput.focus();
                }, 150);
            });
        }

        if (islandReviewBackBtn) {
            islandReviewBackBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();

                // Volver al menú normal de la isla
                island.classList.remove('mode-review');
                if (islandReviewRow) islandReviewRow.style.display = 'none';
            });
        }

        // --- ESTRELLAS EN EL FORMULARIO DE LA ISLA DINÁMICA ---
        const islandStarBtns = document.querySelectorAll('.island-star-btn');
        const islandRatingInput = document.getElementById('island-review-rating');

        islandStarBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const val = btn.getAttribute('data-value');
                islandRatingInput.value = val;
                islandStarBtns.forEach(s => {
                    if (parseInt(s.getAttribute('data-value')) <= parseInt(val)) {
                        s.classList.add('selected');
                    } else {
                        s.classList.remove('selected');
                    }
                });
            });

            btn.addEventListener('mouseover', (e) => {
                const val = btn.getAttribute('data-value');
                islandStarBtns.forEach(s => {
                    if (parseInt(s.getAttribute('data-value')) <= parseInt(val)) {
                        s.style.color = 'var(--color-gold-hover)';
                    } else {
                        s.style.color = '#D1D5DB';
                    }
                });
            });

            btn.addEventListener('mouseout', () => {
                islandStarBtns.forEach(s => {
                    s.style.color = '';
                });
            });
        });
        islandStarBtns.forEach(s => s.classList.add('selected'));

        // --- SUBMIT DEL FORMULARIO DE LA ISLA DINÁMICA ---
        const islandReviewForm = document.getElementById('island-add-review-form');
        const islandSuccessMsg = document.getElementById('island-form-success-msg');

        if (islandReviewForm) {
            islandReviewForm.addEventListener('submit', (e) => {
                e.preventDefault();

                const name = document.getElementById('island-review-name').value;
                const rating = parseInt(islandRatingInput.value);
                const comment = document.getElementById('island-review-comment').value;
                const initials = name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();

                const newReview = {
                    name: name,
                    initials: initials,
                    rating: rating,
                    comment: comment,
                    date: new Date().toISOString()
                };

                saveReview(newReview);
                renderReviewCard(newReview, true);

                // Re-inicializar el carrusel infinito para incluir la nueva reseña
                if (typeof initInfiniteScroll === 'function') {
                    initInfiniteScroll();
                }

                // Mostrar mensaje de éxito en la isla
                if (islandSuccessMsg) islandSuccessMsg.style.display = 'flex';
                islandReviewForm.style.display = 'none';

                setTimeout(() => {
                    // Resetear estado del formulario
                    if (islandSuccessMsg) islandSuccessMsg.style.display = 'none';
                    islandReviewForm.style.display = 'flex';
                    islandReviewForm.reset();
                    islandRatingInput.value = 5;
                    islandStarBtns.forEach(s => s.classList.add('selected'));

                    // Cerrar la isla por completo
                    island.classList.remove('mode-review');
                    island.classList.remove('expanded');
                    if (islandReviewRow) islandReviewRow.style.display = 'none';
                }, 3000);
            });
        }

        // --- SISTEMA INTERACTIVO DE RESEÑAS ---
        const starBtns = document.querySelectorAll('.star-rating-widget .star-btn');
        const ratingInput = document.getElementById('review-rating');

        starBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const val = btn.getAttribute('data-value');
                ratingInput.value = val;
                starBtns.forEach(s => {
                    if (parseInt(s.getAttribute('data-value')) <= parseInt(val)) {
                        s.classList.add('selected');
                    } else {
                        s.classList.remove('selected');
                    }
                });
            });

            btn.addEventListener('mouseover', () => {
                const val = btn.getAttribute('data-value');
                starBtns.forEach(s => {
                    if (parseInt(s.getAttribute('data-value')) <= parseInt(val)) {
                        s.style.color = 'var(--color-gold-hover)';
                    } else {
                        s.style.color = '#D1D5DB';
                    }
                });
            });

            btn.addEventListener('mouseout', () => {
                starBtns.forEach(s => {
                    s.style.color = '';
                });
            });
        });

        starBtns.forEach(s => s.classList.add('selected'));

        const reviewForm = document.getElementById('add-review-form');
        const reviewsContainer = document.getElementById('reviews-container');
        const successMsg = document.getElementById('form-success-msg');

        reviewForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('review-name').value;
            const rating = parseInt(ratingInput.value);
            const comment = document.getElementById('review-comment').value;
            const initials = name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();

            const newReview = {
                name: name,
                initials: initials,
                rating: rating,
                comment: comment,
                date: new Date().toISOString()
            };

            saveReview(newReview);
            renderReviewCard(newReview, true);

            // Re-inicializar el carrusel infinito para incluir la nueva reseña
            if (typeof initInfiniteScroll === 'function') {
                initInfiniteScroll();
            }

            successMsg.style.display = 'flex';
            reviewForm.reset();
            ratingInput.value = 5;
            starBtns.forEach(s => s.classList.add('selected'));

            setTimeout(() => {
                successMsg.style.display = 'none';
                collapsibleReviewSection.classList.remove('expanded');
                toggleReviewBtn.classList.remove('active');
            }, 4000);
        });

        function saveReview(review) {
            let reviews = JSON.parse(localStorage.getItem('korta_user_reviews')) || [];
            reviews.unshift(review);
            localStorage.setItem('korta_user_reviews', JSON.stringify(reviews));
        }

        function deleteReviewFromStorage(date) {
            let reviews = JSON.parse(localStorage.getItem('korta_user_reviews')) || [];
            reviews = reviews.filter(r => r.date !== date);
            localStorage.setItem('korta_user_reviews', JSON.stringify(reviews));
        }

        function loadReviews() {
            let reviews = JSON.parse(localStorage.getItem('korta_user_reviews')) || [];
            reviews.forEach(review => {
                renderReviewCard(review, false);
            });
        }

        function renderReviewCard(review, isNew) {
            const card = document.createElement('div');
            card.className = `review-card stagger-item ${isNew ? 'active' : ''}`;
            if (isNew) {
                card.style.animation = 'fadeIn 0.5s ease-out forwards';
            }
            if (review.date) {
                card.setAttribute('data-date', review.date);
            }

            let starsHtml = '';
            for (let i = 1; i <= 5; i++) {
                const isFilled = i <= review.rating;
                starsHtml += `<svg class="star-icon ${isFilled ? 'filled' : ''}" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>`;
            }

            // Solo mostrar botón de eliminar en las reseñas que tienen fecha (las creadas por el usuario local)
            const deleteButtonHtml = review.date ? `
                <button class="delete-review-btn" aria-label="Eliminar reseña">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        <line x1="10" y1="11" x2="10" y2="17"></line>
                        <line x1="14" y1="11" x2="14" y2="17"></line>
                    </svg>
                </button>
            ` : '';

            card.innerHTML = `
                <div class="review-header">
                    <div class="reviewer-avatar">${review.initials}</div>
                    <div style="flex: 1;">
                        <div class="reviewer-name">${review.name}</div>
                        <div class="stars-svg">${starsHtml}</div>
                    </div>
                    ${deleteButtonHtml}
                </div>
                <p class="review-text">"${review.comment}"</p>
            `;

            reviewsContainer.insertBefore(card, reviewsContainer.firstChild);
        }

        // --- DELEGACIÓN DE EVENTOS PARA ELIMINAR RESEÑAS (Originales y Clones) ---
        if (reviewsContainer) {
            reviewsContainer.addEventListener('click', (e) => {
                const deleteBtn = e.target.closest('.delete-review-btn');
                if (deleteBtn) {
                    e.stopPropagation();
                    e.preventDefault();

                    const card = deleteBtn.closest('.review-card');
                    if (card) {
                        const date = card.getAttribute('data-date');
                        const confirmationMsg = currentLang === 'eu' ? 'Ziur zaude iritzi hau ezabatu nahi duzula?' : '¿Estás seguro de que quieres eliminar esta reseña?';
                        if (confirm(confirmationMsg)) {
                            // Eliminar la tarjeta original y todos sus clones del carrusel
                            const matchingCards = reviewsContainer.querySelectorAll(`[data-date="${date}"]`);
                            matchingCards.forEach(c => c.remove());

                            deleteReviewFromStorage(date);

                            // Re-inicializar el carrusel infinito para adaptar el bucle
                            if (typeof initInfiniteScroll === 'function') {
                                initInfiniteScroll();
                            }
                        }
                    }
                }
            });
        }


        // --- FLASHCARD COVERFLOW LOGIC ---
        const menuCarousel = document.getElementById('menuCarousel');
        if (menuCarousel) {
            const menuCards = menuCarousel.querySelectorAll('.menu-card');
            let currentCardIndex = 0;

            function updateMenuCards() {
                const total = menuCards.length;
                menuCards.forEach((card, index) => {
                    card.className = 'menu-card'; // Reset classes

                    if (index === currentCardIndex) {
                        card.classList.add('active');
                    } else if (index === (currentCardIndex - 1 + total) % total) {
                        card.classList.add('prev');
                    } else if (index === (currentCardIndex + 1) % total) {
                        card.classList.add('next');
                    } else {
                        card.classList.add('hidden-card');
                    }
                });
            }

            updateMenuCards();
            setInterval(() => {
                currentCardIndex = (currentCardIndex + 1) % menuCards.length;
                updateMenuCards();
            }, 2000); // Cambia cada 2 segundos
        }

        // --- FULLSCREEN GALLERY LOGIC ---
        const fullMenuBtn = document.getElementById('fullMenuBtn');
        const fsGallery = document.getElementById('fsGallery');
        const fsClose = document.getElementById('fsClose');
        const fsPrev = document.getElementById('fsPrev');
        const fsNext = document.getElementById('fsNext');
        const fsImg = document.getElementById('fsImg');
        const fsCaption = document.getElementById('fsCaption');

        let galleryImages = [];
        let galleryIndex = 0;

        function initGallery() {
            document.querySelectorAll('.menu-card').forEach(card => {
                const bgImg = card.querySelector('.card-img').style.backgroundImage;
                const urlMatch = bgImg.match(/url\(['"]?(.*?)['"]?\)/);
                if (urlMatch && urlMatch[1]) {
                    const title = card.querySelector('.card-header h3').innerText;
                    galleryImages.push({ url: urlMatch[1], title: title });
                }
            });
        }

        function openGallery(index) {
            if (galleryImages.length === 0) initGallery();
            galleryIndex = index;
            updateGallery();
            fsGallery.classList.add('open');
            document.body.style.overflow = 'hidden'; // Evitar scroll de fondo
        }

        function closeGallery() {
            fsGallery.classList.remove('open');
            document.body.style.overflow = '';
        }

        function updateGallery() {
            if (galleryImages.length > 0) {
                fsImg.src = galleryImages[galleryIndex].url;
                fsCaption.innerText = galleryImages[galleryIndex].title;
            }
        }

        function nextImage() {
            galleryIndex = (galleryIndex + 1) % galleryImages.length;
            updateGallery();
        }

        function prevImage() {
            galleryIndex = (galleryIndex - 1 + galleryImages.length) % galleryImages.length;
            updateGallery();
        }

        if (fullMenuBtn) {
            fullMenuBtn.addEventListener('click', (e) => {
                e.preventDefault();
                // Abrir la galería en la tarjeta que esté activa en el carrusel en ese momento
                const menuCards = document.querySelectorAll('.menu-card');
                let activeIndex = 0;
                menuCards.forEach((card, idx) => {
                    if (card.classList.contains('active')) activeIndex = idx;
                });
                openGallery(activeIndex);
            });
        }

        if (fsClose) fsClose.addEventListener('click', closeGallery);
        if (fsNext) fsNext.addEventListener('click', nextImage);
        if (fsPrev) fsPrev.addEventListener('click', prevImage);

        // Cerrar al pulsar fuera de la imagen
        if (fsGallery) {
            fsGallery.addEventListener('click', (e) => {
                if (e.target === fsGallery) closeGallery();
            });
        }

        // --- MULTI-DIRECTIONAL GALLERY SCROLL ---
        const galleryStack = document.querySelector('.gallery-fullscreen-stack');
        const galleryItems = document.querySelectorAll('.gallery-fs-item');
        const galleryTitleSlide = document.querySelector('.gallery-title-slide');

        if (galleryStack && galleryItems.length > 0) {
            galleryItems.forEach((item, index) => {
                item.style.zIndex = index + 5;
                if (index === 0) {
                    item.style.opacity = '1';
                    item.style.transform = 'translate(0, 0)';
                } else {
                    resetGalleryItemTransform(item);
                }
            });

            window.addEventListener('scroll', () => {
                const rect = galleryStack.getBoundingClientRect();
                const totalScroll = rect.height - window.innerHeight;
                let progress = -rect.top / totalScroll;

                if (progress < 0) progress = 0;
                if (progress > 1) progress = 1;

                const step = 1 / galleryItems.length;

                // Title slide interaction
                if (galleryTitleSlide) {
                    galleryTitleSlide.style.opacity = '1';
                }

                galleryItems.forEach((item, index) => {
                    if (index === 0) {
                        item.style.transform = 'translate(0, 0)';
                        item.style.opacity = '1';
                        item.classList.add('active');
                        return;
                    }
                    const startStep = index * step;
                    const endStep = startStep + step;

                    if (progress <= startStep) {
                        resetGalleryItemTransform(item);
                        item.classList.remove('active');
                    } else if (progress >= endStep) {
                        item.style.transform = 'translate(0, 0)';
                        item.style.opacity = '1';
                        item.classList.add('active');
                    } else {
                        const localProgress = (progress - startStep) / step;
                        const easeP = 1 - Math.pow(1 - localProgress, 3); // easeOutCubic
                        const moveIn = (1 - easeP) * 100;

                        item.style.opacity = '1';
                        item.classList.add('active');

                        if (item.classList.contains('dir-left')) item.style.transform = `translateX(-${moveIn}vw)`;
                        if (item.classList.contains('dir-right')) item.style.transform = `translateX(${moveIn}vw)`;
                        if (item.classList.contains('dir-top')) item.style.transform = `translateY(-${moveIn}vh)`;
                        if (item.classList.contains('dir-bottom')) item.style.transform = `translateY(${moveIn}vh)`;
                    }
                });
            }, { passive: true });
        }

        function resetGalleryItemTransform(item) {
            item.style.opacity = '0';
            if (item.classList.contains('dir-left')) item.style.transform = 'translateX(-100vw)';
            if (item.classList.contains('dir-right')) item.style.transform = 'translateX(100vw)';
            if (item.classList.contains('dir-top')) item.style.transform = 'translateY(-100vh)';
            if (item.classList.contains('dir-bottom')) item.style.transform = 'translateY(100vh)';
        }
