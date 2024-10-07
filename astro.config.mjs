// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://txs.github.io',
	base: '/soft-tennis-guide',
	integrations: [
		starlight({
			title: {
				'zh-TW': '軟式網球入門指南 Intro to Soft Tennis 101',
				en: 'Intro to Soft Tennis 101',
				'zh-CN': '软式网球入门指南 Intro to Soft Tennis 101',
				fr: 'Guide de débutant en Soft Tennis',
				es: 'Guía de inicio en Tenis Suave',
			  },
			defaultLocale: 'root', // optional
			locales: {
			  root: {
				label: '正體中文',
				lang: 'zh-TW', // lang is required for root locales
			  },
			  'en': {
				label: 'English',
				lang: 'en',
			  },
			  'zh-cn': {
				label: '简体中文',
				lang: 'zh-CN',
			  },
			  'fr': {
				label: 'Français',
				lang: 'fr',
			  },
			  'es': {
				label: 'Español',
				lang: 'es',
			  },
			},
			head:[
				{
					tag: 'script',
					attrs: {
						async: true,
						src: 'https://www.googletagmanager.com/gtag/js?id=G-2VKKN77WMF',
					},
				},
				{
					tag: 'script',
					content: `
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', 'G-2VKKN77WMF');
					`,
				},
			],
			social: {
				github: 'https://github.com/txs/soft-tennis-guide',
			},
			sidebar: [
				{ 
					label: '前言',
					link: '/preface',
					translations: {
						en: 'Preface',
						'zh-CN': '前言',
						'zh-tw': '前言',
						fr: 'Préface',
						es: 'Prefacio',
					},
				 },
				{
					label: '軟式網球入門',
					translations: {
						en: 'Introduction to Soft Tennis',
						'zh-CN': '软式网球入门',
						'zh-tw': '軟式網球入門',
						fr: 'Introduction au Soft Tennis',
						es: 'Introducción al Tenis Suave',
					},
					items: [
						{ 
							label: '軟網硬網的差異', 
							link: '/introduction/soft-vs-hard-tennis',
							translations: {
								en: 'Differences Between Soft and Hard Tennis',
								'zh-CN': '软网硬网的差异',
								'zh-tw': '軟網硬網的差異',
								fr: 'Différences entre le Soft Tennis et le Tennis Dur',
								es: 'Diferencias entre el Tenis Suave y el Tenis Duro',
							},
						},
						{ 
							label: '軟式網球的歷史', 
							link: '/introduction/history-of-soft-tennis',
							translations: {
								en: 'History of Soft Tennis',
								'zh-CN': '软式网球的历史',
								'zh-tw': '軟式網球的歷史',
								fr: 'Histoire du Soft Tennis',
								es: 'Historia del Tenis Suave',
							},
						},
						{ 
							label: '軟式網球的魅力', 
							link: '/introduction/charm-of-soft-tennis',
							translations: {
								en: 'The Charm of Soft Tennis',
								'zh-CN': '软式网球的魅力',
								'zh-tw': '軟式網球的魅力',
								fr: 'Le Charme du Soft Tennis',
								es: 'El encanto del Tenis Suave',
							},
						},
					],
				},
				{
					label: '學習基本規則',
					translations: {
						en: 'Learning Basic Rules',
						'zh-CN': '学习基本规则',
						'zh-tw': '學習基本規則',
						fr: 'Apprendre les règles de base',
						es: 'Aprender las reglas básicas',
					},
					items: [
						{ 
							label: '軟式網球的基本規則', 
							link: '/basics/rules',
							translations: {
								en: 'Basic Rules of Soft Tennis',
								'zh-CN': '软式网球的基本规则',
								'zh-tw': '軟式網球的基本規則',
								fr: 'Règles de base du Soft Tennis',
								es: 'Reglas básicas del Tenis Suave',
							},
						},
						{ 
							label: '軟式網球的計分方式', 
							link: '/basics/scores',
							translations: {
								en: 'Scoring System of Soft Tennis',
								'zh-CN': '软式网球的计分方式',
								'zh-tw': '軟式網球的計分方式',
								fr: 'Système de notation du Soft Tennis',
								es: 'Sistema de puntuación del Tenis Suave',
							},
						},
					],
				},
				{
					label: '第1章：熱身與準備活動',
					translations: {
						en: 'Chapter 1: Warm-up and Preparation Activities',
						'zh-CN': '第1章：热身与准备活动',
						'zh-tw': '第1章：熱身與準備活動',
						fr: 'Chapitre 1 : Préparation et activités de préchauffage',
						es: 'Capítulo 1: Preparación y actividades de calentamiento',
					},
					items: [
						{ 
							label: '熱身的重要性', 
							link: '/chapter-1/importance-of-warm-up',
							translations: {
								en: 'Importance of Warm-up',
								'zh-CN': '热身的重要性',
								'zh-tw': '熱身的重要性',
								fr: 'Importance du préchauffage',
								es: 'Importancia del calentamiento',
							},
						},
						{ 
							label: '協調性與柔韌性訓練', 
							link: '/chapter-1/coordination-and-flexibility',
							translations: {
								en: 'Coordination and Flexibility Training',
								'zh-CN': '协调性与柔韧性训练',
								'zh-tw': '協調性與柔韌性訓練',
								fr: 'Entraînement de coordination et de souplesse',
								es: 'Entrenamiento de coordinación y flexibilidad',
							},
						},
						{ 
							label: '基本熱身動作', 
							link: '/chapter-1/basic-warm-up-exercises',
							translations: {
								en: 'Basic Warm-up Exercises',
								'zh-CN': '基本热身动作',
								'zh-tw': '基本熱身動作',
								fr: 'Exercices de préchauffage de base',
								es: 'Ejercicios de calentamiento básicos',
							},
						},
					],
				},
				{
					label: '第2章：基本動作與技巧',
					translations: {
						en: 'Chapter 2: Basic Movements and Techniques',
						'zh-CN': '第2章：基本动作与技巧',
						'zh-tw': '第2章：基本動作與技巧',
						fr: 'Chapitre 2 : Mouvements et techniques de base',
						es: 'Capítulo 2: Movimientos y técnicas básicos',
					},
					items: [
						{ 
							label: '握拍方式', 
							link: '/chapter-2/grip-types',
							translations: {
								en: 'Types of Grips',
								'zh-CN': '握拍方式',
								'zh-tw': '握拍方式',
								fr: 'Types de griffes',
								es: 'Tipos de grifos',
							},
						},
						{ 
							label: '基本站姿與步法', 
							link: '/chapter-2/stance-and-footwork',
							translations: {
								en: 'Basic Stance and Footwork',
								'zh-CN': '基本站姿与步法',
								'zh-tw': '基本站姿與步法',
								fr: 'Posture et déplacement de base',
								es: 'Postura y movimientos básicos',
							},
						},
						{ 
							label: '擊球動作', 
							link: '/chapter-2/stroking-techniques',
							translations: {
								en: 'Stroking Techniques',
								'zh-CN': '击球动作',
								'zh-tw': '擊球動作',
								fr: 'Techniques de frappe',
								es: 'Técnicas de golpeo',
							},
						},
					],
				},
				{
					label: '第3章：發球與接發球',
					translations: {
						en: 'Chapter 3: Serving and Receiving',
						'zh-CN': '第3章：发球与接发球',
						'zh-tw': '第3章：發球與接發球',
						fr: 'Chapitre 3 : Service et réception',
						es: 'Capítulo 3: Servir y recibir',
					},
					items: [
						{ 
							label: '發球技巧', 
							link: '/chapter-3/serving-techniques',
							translations: {
								en: 'Serving Techniques',
								'zh-CN': '发球技巧',
								'zh-tw': '發球技巧',
								fr: 'Techniques de service',
								es: 'Técnicas de servicio',
							},
						},
						{ 
							label: '接發球要點', 
							link: '/chapter-3/receiving-strategies',
							translations: {
								en: 'Receiving Strategies',
								'zh-CN': '接发球要点',
								'zh-tw': '接發球要點',
								fr: 'Stratégies de réception',
								es: 'Técnicas de recepción',
							},
						},
					],
				},
				{
					label: '第4章：網前截擊與防守',
					translations: {
						en: 'Chapter 4: Volleying and Defending',
						'zh-CN': '第4章：网前截击与防守',
						'zh-tw': '第4章：網前截擊與防守',
						fr: 'Chapitre 4 : Volée et défense',
						es: 'Capítulo 4: Volteo y defensa',
					},
					items: [
						{ 
							label: '截擊技巧', 
							link: '/chapter-4/volley-techniques',
							translations: {
								en: 'Volley Techniques',
								'zh-CN': '截击技巧',
								'zh-tw': '截擊技巧',
								fr: 'Techniques de volée',
								es: 'Técnicas de volteo',
							},
						},
						{ 
							label: '防守策略', 
							link: '/chapter-4/defensive-strategies',
							translations: {
								en: 'Defensive Strategies',
								'zh-CN': '防守策略',
								'zh-tw': '防守策略',
								fr: 'Stratégies de défense',
								es: 'Técnicas de defensa',
							},
						},
					],
				},
				{
					label: '第5章：進階技巧與戰術',
					translations: {
						en: 'Chapter 5: Advanced Skills and Tactics',
						'zh-CN': '第5章：进阶技巧与战术',
						'zh-tw': '第5章：進階技巧與戰術',
						fr: 'Chapitre 5 : Compétences avancées et tactiques',
						es: 'Capítulo 5: Técnicas avanzadas y estrategias',
					},
					items: [
						{ 
							label: '進階技巧', 
							link: '/chapter-5/advanced-skills',
							translations: {
								en: 'Advanced Skills',
								'zh-CN': '进阶技巧',
								'zh-tw': '進階技巧',
								fr: 'Compétences avancées',
								es: 'Técnicas avanzadas',
							},
						},
						{ 
							label: '戰術運用', 
							link: '/chapter-5/tactical-applications',
							translations: {
								en: 'Tactical Applications',
								'zh-CN': '战术运用',
								'zh-tw': '戰術運用',
								fr: 'Applications tactiques',
								es: 'Aplicación de estrategias',
							},
						},
					],
				},
				{
					label: '第6章：單打與雙打比賽',
					translations: {
						en: 'Chapter 6: Singles and Doubles Matches',
						'zh-CN': '第6章：单打与双打比赛',
						'zh-tw': '第6章：單打與雙打比賽',
						fr: 'Chapitre 6 : Jeux simples et doubles',
						es: 'Capítulo 6: Partidos de simple y dobles',
					},
					items: [
						{ 
							label: '單打技術', 
							link: '/chapter-6/singles-techniques',
							translations: {
								en: 'Singles Techniques',
								'zh-CN': '单打技术',
								'zh-tw': '單打技術',
								fr: 'Techniques de simple',
								es: 'Técnicas de simple',
							},
						},
						{ 
							label: '雙打配合', 
							link: '/chapter-6/doubles-coordination',
							translations: {
								en: 'Doubles Coordination',
								'zh-CN': '双打配合',
								'zh-tw': '雙打配合',
								fr: 'Coordination de double',
								es: 'Coordinación de dobles',
							},
						},
					],
				},
				{
					label: '第7章：訓練與比賽準備',
					translations: {
						en: 'Chapter 7: Training and Match Preparation',
						'zh-CN': '第7章：训练与比赛准备',
						'zh-tw': '第7章：訓練與比賽準備',
						fr: 'Chapitre 7 : Entraînement et préparation de match',
						es: 'Capítulo 7: Entrenamiento y preparación de partidos',
					},
					items: [
						{ 
							label: '綜合技能訓練', 
							link: '/chapter-7/comprehensive-skill-training',
							translations: {
								en: 'Comprehensive Skill Training',
								'zh-CN': '综合技能训练',
								'zh-tw': '綜合技能訓練',
								fr: 'Entraînement de compétences complètes',
								es: 'Entrenamiento de habilidades completas',
							},
						},
						{ 
							label: '比賽心態與準備', 
							link: '/chapter-7/match-preparation',
							translations: {
								en: 'Match Mindset and Preparation',
								'zh-CN': '比赛心态与准备',
								'zh-tw': '比賽心態與準備',
								fr: 'Mentalité de match et préparation',
								es: 'Mentalidad de partido y preparación',
							},
						},
					],
				},
				{
					label: '結論',
					translations: {
						en: 'Conclusion',
						'zh-CN': '结论',
						'zh-tw': '結論',
						fr: 'Conclusion',
						es: 'Conclusión',
					},
					items: [
						{ 
							label: '軟式網球的魅力與挑戰', 
							link: '/conclusion/soft-tennis-charm',
							translations: {
								en: 'The Charm and Challenges of Soft Tennis',
								'zh-CN': '软式网球的魅力与挑战',
								'zh-tw': '軟式網球的魅力與挑戰',
								fr: 'Charme et défis du Soft Tennis',
								es: 'Encanto y desafíos del Tenis Suave',
							},
						},
						{ 
							label: '未來的網球之路', 
							link: '/conclusion/future-tennis-path',
							translations: {
								en: 'The Future of Tennis Path',
								'zh-CN': '未来的网球之路',
								'zh-tw': '未來的網球之路',
								fr: 'Le futur du tennis',
								es: 'El futuro del tenis',
							},
						},
					],
				},
				{
					label: '附錄',
					translations: {
						en: 'Appendix',
						'zh-CN': '附录',
						'zh-tw': '附錄',
						fr: 'Appendice',
						es: 'Apéndice',
					},
					items: [
						{ 
							label: '常見問題解答', 
							link: '/appendix/faq',
							translations: {
								en: 'Frequently Asked Questions',
								'zh-CN': '常见问题解答',
								'zh-tw': '常見問題解答',
								fr: 'Questions fréquemment posées',
								es: 'Preguntas frecuentes',
							},
						},
						{ 
							label: '推薦資源', 
							link: '/appendix/recommended-resources',
							translations: {
								en: 'Recommended Resources',
								'zh-CN': '推荐资源',
								'zh-tw': '推薦資源',
								fr: 'Ressources recommandées',
								es: 'Recursos recomendados',
							},
						},
					],
				},
			],
			customCss: [
				'./src/styles/soft-tennis.css',
			],
			components: {
				Footer: './src/components/Footer.astro',
				PageSidebar: './src/components/PageSidebar.astro',
			},
			// ... (rest of the configuration)
		}),
	],
});