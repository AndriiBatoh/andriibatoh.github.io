export const initData = {
    signs: {
        attention: [
            {
                id: 1,
                title: 'Небезпечний поворот праворуч',
                image: 'https://vodiy.ua/media/trafficsign_image/1.1_1.png',
                description: 'Знак 1.1 "Небезпечний поворот праворуч" попереджає про заокруглення дороги радіусом менше 500 м поза населеними пунктами і менше 150 м — у населених пунктах або про заокруглення з обмеженою оглядовістю.\n' +
                    '\n' +
                    'Знак установлюється поза населеними пунктами на відстані 150–300 м, у населених пунктах — на відстані 50–100 м до початку небезпечної ділянки. У разі потреби знак встановлюється і на іншій відстані, яка зазначається на табличці'
            },
            {
                id: 2,
                title: 'Небезпечний поворот ліворуч',
                image: 'https://vodiy.ua/media/trafficsign_image/1.2_1.png',
                description:'Знак 1.2 "Небезпечний поворот ліворуч" попереджає про заокруглення дороги радіусом менше 500 м поза населеними пунктами і менше 150 м — у населених пунктах або про заокруглення з обмеженою оглядовістю.\n' +
                    '\n' +
                    'Знак установлюється поза населеними пунктами на відстані 150–300 м, у населених пунктах — на відстані 50–100 м до початку небезпечної ділянки. У разі потреби знак встановлюється і на іншій відстані, яка зазначається на табличці 7.1.1 Табличка 7.1.1 "Расстояние к объекту".'
            },
            {
                id: 3,
                title: 'Декілька поворотів',
                image: 'https://vodiy.ua/media/trafficsign_image/1.3.1_.png',
                description:'Знак 1.3.1 "Декілька поворотів" позначає ділянку дороги з двома і більше розташованими один за одним небезпечними поворотами, з першим поворотом праворуч.\n' +
                    '\n' +
                    'Знак установлюється поза населеними пунктами на відстані 150–300 м, у населених пунктах — на відстані 50–100 м до початку небезпечної ділянки. У разі потреби знак встановлюється і на іншій відстані, яка зазначається на табличці 7.1.1 Табличка 7.1.1 "Расстояние к объекту".\n' +
                    '\n' +
                    'За наявності трьох і більше поворотів, що йдуть один за одним, із знаком потрібно застосовувати табличку 7.10 Табличка 7.10 "Количество поворотов" з зазначенням кількості поворотів.\n' +
                    '\n' +
                    'Допускається зазначати кількість поворотів і на самому знаку.'
            },
            {
                id: 4,
                title: 'Напрямок повороту',
                image: 'https://vodiy.ua/media/trafficsign_image/1.4.1_.png',
                description:'Знак 1.4.1 "Напрямок повороту" (рух праворуч) показує напрямок повороту дороги, позначеної знаками 1.1 Знак 1.1 "Небезпечний поворот праворуч", напрямок об’їзду перешкоди на дорозі, і крім того, — напрямок об’їзду центра перехрестя з круговим рухом.\n' +
                    '\n' +
                    'На поворотах радіусом менше 1000 м поза населеними пунктами і менше 250 м у населених пунктах дозволяється застосовувати знак, що являє собою частину знака 1.4.1 (одна стрілка). В цьому разі він повинен повторюватись вздовж повороту на відстані від 3 м до 85 м, залежно від радіуса поворота'
            }
        ],
        permitted: [
            {
                id: '1',
                title: 'Prmitted 1',
                image: '',
                description:'Descripption'
            },
            {
                id: '2',
                title: 'Prmitted 2',
                image: '',
                description:'Descripption'
            },
            {
                id: '3',
                title: 'Prmitted 3',
                image: '',
                description:'Descripption'
            },
            {
                id: '4',
                title: 'Prmitted 4',
                image: '',
                description:'Descripption'
            }
        ]
    },
    i18n: {
        attention: 'Попереджувальні знаки',
        permitted: 'Заборонні знаки'
    },
    selectedSection: 'attention',
    question: {
        item: {},
        answers: [{title: 'answer'}, {title: 'answer'}, {title: 'answer'}]
    }
}