document.addEventListener('DOMContentLoaded', function() {
    const guides = {
        1: {
            title: "Какую рыбу на что ловить?",
            content: "Окунь – черви, мотыль, маленькие блесны (вращалки).<br>Щука – живец (маленькая рыбка), воблеры, блесны (колебалки).<br>Карась – хлеб, тесто, опарыш, перловка.<br>Лещ – черви, мотыль, горох, кукуруза.<br>Плотва – опарыш, тесто, манка.<br><br>Совет: Если не клюёт – попробуй другую наживку!"
        },
        2: {
            title: "Где искать рыбу?",
            content: "У берега – карась, плотва, окунь (особенно в траве или у коряг).<br>На глубине – лещ, судак, крупная щука.<br>В тени деревьев – рыба прячется от солнца.<br>На течении – голавль, жерех (нужны тяжёлые грузила).<br><br>Совет: Если видишь пузыри на воде – там может быть рыба!"
        },
        3: {
            title: "Когда лучше ловить?",
            content: "Утро (4:00–9:00) – лучшее время, особенно летом.<br>Вечер (18:00–22:00) – рыба снова активна.<br>Пасмурная погода – клюёт лучше, чем в жару.<br>После дождя – вода мутная, рыба смелее.<br><br>Совет: В жаркий полдень рыба уходит на глубину – ловить почти бесполезно."
        },
        4: {
            title: "Простая снасть для новичка",
            content: "Удочка – телескопическая, 4–5 м.<br>Леска – 0,2–0,25 мм (для мелкой рыбы), 0,3–0,4 мм (на щуку).<br>Поплавок – лёгкий (2–3 г) для тихой воды, тяжёлый (5–10 г) для течения.<br>Крючки – №10–14 (для карася, плотвы), №6–8 (на леща, окуня).<br><br>Совет: Перед рыбалкой проверяй, чтобы крючок был острый (если тупой – замени)."
        },
        5: {
            title: "Что такое ИР (Индекс Рыбности)?",
            content: "Индекс рыбности (ИР) — количественная оценка перспективности водоёма для любительского лова, выраженная в пятибалльной шкале:<br><br>Критерии оценки:<br>1. Плотность рыбных ресурсов<br>2. Стабильность клёва<br>3. Разнообразие ихтиофауны<br>4. Вероятность поимки трофейных экземпляров<br>5. Антропогенная нагрузка<br><br>Шкала оценки:<br>- 5 баллов — водоёмы с исключительной рыбопродуктивностью, регулярным клёвом, наличием трофейных видов<br>- 4 балла — стабильно продуктивные водоёмы с хорошими уловами<br>- 3 балла — водоёмы со средними показателями уловистости<br>- 2 балла — малопродуктивные водоёмы с нестабильным клёвом<br>- 1 балл — деградирующие водоёмы с крайне низкой рыбопродуктивностью<br><br>Методология:<br>Индекс рассчитывается на основе:<br>- Данных ихтиологических исследований<br>- Статистики вылова<br>- Отчётов рыболовов-любителей<br>- Экспертных оценок<br><br>Применение:<br>Используется для сравнительной оценки рыболовных угодий без привязки к абсолютным показателям.<br>"
        },
        6: {
            title: "Как отправить нам отчет об улове?",
            content: "Чтобы поделиться с нами отчетом об улове перейдите в чат с ботом,<br>выберите команду sendreport<br>и отправьте нам информацию о вашем улове:<br>-Название рыбы<br>-Вес рыбы<br>-Координаты места, где вы поймали рыбу<br>-фотография<br>После того как администрация рассмотрит ваш отчет,<br>он будет добавлен в AnglerPRO,<br> и соответственно поменяется ИР этого места.<br>Ни хвоста, ни чешуи!"
        }
    };
    const tg = window.Telegram.WebApp;

    tg.expand();

    const moreBtn = document.querySelector('button[name="more"]');
    const menuModal = document.getElementById('menuModal');
    const guidesModal = document.getElementById('guidesModal');
    const guideContentModal = document.getElementById('guideContentModal');
    const guideText = document.getElementById('guideText');

    moreBtn.addEventListener('click', function() {
        menuModal.style.display = 'block';
    });

    document.querySelectorAll('.menu-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const action = this.getAttribute('data-action');
            menuModal.style.display = 'none';
            
            if (action === 'show') {
                guidesModal.style.display = 'block';
            } else if (action === 'send') {
                window.location.href = 'https://t.me/AnglerPROBot';
            }
        });
    });

    document.querySelectorAll('.guide-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const guideId = this.getAttribute('data-guide');
            const guide = guides[guideId];
            
            guideText.innerHTML = `<h3>${guide.title}</h3><p>${guide.content}</p>`;
            guidesModal.style.display = 'none';
            guideContentModal.style.display = 'block';
        });
    });

    document.querySelector('.back-btn').addEventListener('click', function() {
        guideContentModal.style.display = 'none';
        guidesModal.style.display = 'block';
    });

document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal') || e.target.classList.contains('modal-close-area')) {
            this.style.display = 'none';
        }
    });
});
});
