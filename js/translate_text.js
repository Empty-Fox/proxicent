$(document).ready(function () {
    function addEventListenersEvents_translate(){
        var arrLang = {
            'en': {
                'menu_homeText': 'Home',
                'menu_aboutUs': 'About us',
                'menu_topOffers': 'Top Offers',
                'menu_blog': 'Blog',
                'menu_meetUs': 'Meet us',
                'menu_login': 'Login',
                'exclusive_affiliate': 'Exclusive Affiliate Network',
                'for_crypto': 'for Crypto Traffic',
                'created_by': 'Created by a unique and powered-up team of professionals to provide you individual and best-performing solutions to monetize your traffic',
                'join_us': 'Join us',
                'to_discover': 'to discover the whole potential of our',
                'next-gen': 'next-gen platform in the finance field',
                'unique': 'Unique',
                'landing_pages': 'landing pages',
                'support': 'Support',
                'payouts': 'Payouts',
                'up_to': 'up to',
                'immediate': 'Immediate',
                'payouts': 'payouts',
                'key_about': 'About Us',
                'our_primary': 'Our primary mission is to help our partners grow. To achieve the mission, we engage a target audience and build a strategy of communication. Being the long-term player in the affiliate         marketing industry, we analyze in detail every click and every conversion on a platform to create the most effective marketing flow. Our managers assist you non-stop to provide the highest level of support at any time.',
                'our_benefits': 'Our benefits:',
                'highest_cpa': 'Highest CPA',
                'crg_deals': 'CRG deals',
                'exclusive_funnels': 'Exclusive funnels',
                'smart_delivery': 'Smart delivery algorithm',
                'transparent_CRM': 'Transparent CRM',
                'top_offers': 'TOP offers',
                'in_ourB': 'In our blog you can find any information, including news and upcoming conferences in the finance and crypto field.',
                'crypto_vertical': 'Crypto vertical: trending funnels and traffic sources',
                'cryptocurrency_and': 'Cryptocurrency and brokers: regulated and unregulated',
                'how_to': 'How to succeed in crypto vertical',
                'next': 'Next',
                'contactUs': 'Contact Us',
                'send': 'Send',
                'register': 'Register',
                'inOurB': 'In our blog you can find any information, including news and upcoming conferences in the finance and crypto field.',
                'getInTouch': 'GET IN TOUCH',
                'we_areHappy': 'We are happy to help you if have you any additional questions.',
                'email': 'Email us for any business inquiries.',
                'fillTheForm': 'Fill the form if you have any useful information or a project you want to discuss with us.',
                'weWillReply': 'We will reply to you to provide the most efficient solution.',
                'meetThe': 'Meet the Proxicent team at',
                'iFX': 'the iFX EXPO',
                'leadingB2B': '- leading B2B conference in online trading, financial services, and fin-tech.',
                'speakers_will': 'Speakers will share unique and innovative ideas so you can push your career forward.',
                'lets_share': 'Let’s share this experience!',
                'when1920': 'When: 19-20 May 2021',
                'whereDubai': 'Where: Dubai | Grand Hyatt Hotel',
                'contactUs:': 'Contact us:',
                'isATwo': 'is a two-day conference event taking place in Barcelona',
                'on78': 'on 7-8 July 2021.',
                'getOntrack': 'Get on track with the',
                'b_word': 'Proxicent Team',
                'thisSummer': 'this summer and meet the opportunities to develop your career path.',
                'expertsWill': 'Experts will take the stage and present new insights, data-driven strategies, and innovative ideas on affiliate and eCommerce marketing.',
                'emptyWhere': '',
                'theAffiliate': 'The Affiliate Grand Slam',
                'takes_place': 'takes place at Dubai Expo,',
                'uae': 'UAE.',
                'takes_place_empty': '',
                'takes_place_empty2': '',
                'join_the': 'Join the Proxicent Team',
                'joinTheEmpty': '',
                'on2526': 'on 25-26th of May',
                'toDiscover_the': 'to discover the latest trends and technologies from long-term players in the affiliate marketing industry.',
                'dont_miss': 'Don’t miss a chance to meet the Proxicent team at the',
                'aibc_ua': 'AIBC UAE.',
                'the_event': 'The event will take place',
                'fromThe25th': 'from the 25th to 26th May 2021, in the emirate of Dubai.',
                'the_aibcS': 'The AIBC Summit brings together fin-tech and crypto experts, business owners, and politicians from all around the world.',
                'take_an1': 'Take an opportunity to dive into the blockchain, AI, and crypto environment.',
                'take_an2': '',
            },
            'ru': {
    
                'menu_homeText': 'Главная',
                'menu_aboutUs': 'Про нас',
                'menu_topOffers': 'Top Offers',
                'menu_blog': 'Блог',
                'menu_meetUs': 'Встречайте нас',
                'menu_login': 'Войти',
                'exclusive_affiliate': 'Эксклюзивная Партнерская Сеть',
                'for_crypto': 'для Крипто-Трафика',
                'created_by': 'Создана уникальной и мощной командой профессионалов, чтобы предложить вам индивидуальные и наиболее эффективные решения для монетизации вашего трафика',
                'join_us': 'Присоедениться',
                'to_discover': 'и раскройте весь потенциал нашей',
                'next-gen': 'платформы нового поколения в области финансов',
                'unique': 'Уникальные',
                'landing_pages': 'лендинги и воронки',
                'support': 'Поддержка',
                'payouts': 'Выплаты ',
                'up_to': 'до',
                'immediate': 'Мгновенная',
                'payouts': 'оплата',
                'key_about': 'Про нас',
                'our_primary': 'Proxicent - это платформа эффективного взаимодействия рекламодателей и их продуктов с источниками трафика, которые генерируют целевую аудиторию с высоким потенциалом LTV для продуктов. Наша основная миссия - клиентоориентированность и нацеленность на результат. Мы анализируем детально каждый клик и каждую конверсию на платформе, чтобы создать прибыльную связку как для рекламодателя, так и  для аффилиейта. Мы предоставляем каждому персональную поддержку высшего уровня - менеджеры Proxicent всегда доступны и готовы помочь.',
                'our_benefits': 'Наши преимущества:',
                'highest_cpa': 'Высокие CPA выплаты',
                'crg_deals': 'CRG-сделки',
                'exclusive_funnels': 'Высококачественные воронки и лендинги',
                'smart_delivery': 'Новейший Smart алгоритм оптимизации крипто-трафика',
                'transparent_CRM': 'Одна из лучших high-end платформ и CRM-система для отслеживания статистики в реальном времени',
                'top_offers': 'TOP offers',
                'in_ourB': 'В нашем блоге вы можете найти любую информацию, включая новости и предстоящие конференции в области финансов и криптовалюты.',
                'crypto_vertical': 'Крипто-вертикаль: трендовые воронки и источники трафика',
                'cryptocurrency_and': 'Криптовалюта и брокеры: регулируемые и нерегулируемые',
                'how_to': 'Как добиться успеха в криптовалютной вертикали',
                'next': 'Next',
                'contactUs': 'Связаться с нами',
                'send': 'Отправить',
                'register': 'Регистрация',
                'inOurB': 'В нашем блоге вы можете найти любую информацию, включая новости и предстоящие конференции в области финансов и криптовалют.',
                'getInTouch': 'КОНТАКТЫ',
                'we_areHappy': 'Мы будем рады помочь вам, если у вас возникнут дополнительные вопросы.',
                'email': 'Напишите нам по любым бизнес вопросам.',
                'fillTheForm': 'Заполните форму, если у вас есть полезная информация или проект, который вы хотите обсудить с нами.',
                'weWillReply': 'Мы ответим вам и предложим наиболее эффективное решение.',
                'meetThe': '',
                'iFX': 'iFX EXPO',
                'leadingB2B': '- одна из ведущих B2B конференций 2021 года, которая будет проходить в Дубае в Grand Hyatt Hotel.',
                'speakers_will': 'Онлайн трейдинг, финансы и технологии - основные направления конференции.',
                'lets_share': 'У вас будет возможность не только погрузиться технологии будущего, но и встретить нашу команду! ',
                'when1920': 'Когда: 19-20 мая 2021 года',
                'whereDubai': 'Где: Дубаи, Grand Hyatt Hotel',
                'contactUs:': 'Связаться с нами:',
                'isATwo': '- это двухдневная конференция, которая состоится в начале июля в Барселоне.',
                'on78': '',
                'getOntrack': 'Если вы ищите новые знания в индустрии партнерского маркетинга и сфере eCommerce, то эта конференция точно для вас!  Куча полезной информации - инсайты, тренды, инновационные идеи, нетворкинг и это только минимум того, что вы получите от',
                'b_word': 'Affiliate World Europe.',
                'thisSummer': 'Присоединяйтесь к команде Proxicent!',
                'expertsWill': 'Когда: 7-8 июля 2021 года',
                'emptyWhere': 'Где: Барселона, Испания',
                'theAffiliate': 'Affiliate Grand Slam',
                'takes_place': 'пройдет параллельно вместе',
                'uae': 'AIBC Summit',
                'takes_place_empty': 'также в Дубае, Grand Hyatt Hotel.',
                'takes_place_empty2': 'Не упустите свой шанс встретить нашу команду на этом ивенте, где вы узнаете о последних трендах и технологиях от экспертов своего дела.',
                'join_the': 'Когда: 25-26 мая 2021 года',
                'joinTheEmpty': 'Где: Дубай, Grand Hyatt Hotel',
                'on2526': '',
                'toDiscover_the': '',
                'dont_miss': 'Встречайте команду Proxicent на ',
                'aibc_ua': 'AIBC Summit.',
                'the_event': 'Двухдневная конференция состоится 25-26 мая в Объединенных Арабских Эмиратах. Лучшие спикеры в сфере крипты, fin-tech  и предприниматели со всего мира поделятся своим многолетним опытом и инновационными идеями. Уникальная возможность для вашего карьерного роста. А нетворкинг - приятный бонус.',
                'fromThe25th': '',
                'the_aibcS': '',
                'take_an1': 'Когда: 25-26 мая 2021 года',
                'take_an2': 'Где: Дубай, Grand Hyatt Hotel'
            }
        };
    
    
        $(function () {
            $('.translate').click(function () {
                var lang = $(this).attr('id');
                $('.lang').each(function (index, element) {
                    $(this).text(arrLang[lang][$(this).attr('key')]);
                });
            });
        });
    }

    window.addEventListener('click', addEventListenersEvents_translate);

});