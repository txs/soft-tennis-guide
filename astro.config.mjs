// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://txs.github.com/soft-tennis-guide',
	base: '/soft-tennis-guide',
	integrations: [
		starlight({
			title: '軟式網球入門指南 Intro to Soft Tennis 101',
			social: {
				github: 'https://github.com/txs/soft-tennis-guide',
			},
			sidebar: [
				{ label: '前言', link: '/preface' },
				{
					label: '軟式網球入門',
					items: [
						{ label: '軟網硬網的差異', link: 'introduction/soft-vs-hard-tennis' },
						{ label: '軟式網球的歷史', link: 'introduction/history-of-soft-tennis' },
						{ label: '軟式網球的魅力', link: 'introduction/charm-of-soft-tennis' },
					],
				},
				{
					label: '學習基本規則',
					items: [
						{ label: '軟式網球的基本規則', link: 'basics/rules' },
						{ label: '軟式網球的計分方式', link: 'basics/scores' },
					],
				},
				{
					label: '第1章：熱身與準備活動',
					items: [
						{ label: '熱身的重要性', link: 'chapter-1/importance-of-warm-up' },
						{ label: '協調性與柔韌性訓練', link: 'chapter-1/coordination-and-flexibility' },
						{ label: '基本熱身動作', link: 'chapter-1/basic-warm-up-exercises' },
					],
				},
				{
					label: '第2章：基本動作與技巧',
					items: [
						{ label: '握拍方式', link: 'chapter-2/grip-types' },
						{ label: '基本站姿與步法', link: 'chapter-2/stance-and-footwork' },
						{ label: '擊球動作', link: 'chapter-2/stroking-techniques' },
					],
				},
				{
					label: '第3章：發球與接發球',
					items: [
						{ label: '發球技巧', link: '/chapter-3/serving-techniques' },
						{ label: '接發球要點', link: '/chapter-3/receiving-strategies' },
					],
				},
				{
					label: '第4章：網前截擊與防守',
					items: [
						{ label: '截擊技巧', link: '/chapter-4/volley-techniques' },
						{ label: '防守策略', link: '/chapter-4/defensive-strategies' },
					],
				},
				{
					label: '第5章：進階技巧與戰術',
					items: [
						{ label: '進階技巧', link: '/chapter-5/advanced-skills' },
						{ label: '戰術運用', link: '/chapter-5/tactical-applications' },
					],
				},
				{
					label: '第6章：單打與雙打比賽',
					items: [
						{ label: '單打技術', link: '/chapter-6/singles-techniques' },
						{ label: '雙打配合', link: '/chapter-6/doubles-coordination' },
					],
				},
				{
					label: '第7章：訓練與比賽準備',
					items: [
						{ label: '綜合技能訓練', link: '/chapter-7/comprehensive-skill-training' },
						{ label: '比賽心態與準備', link: '/chapter-7/match-preparation' },
					],
				},
				{
					label: '結論',
					items: [
						{ label: '軟式網球的魅力與挑戰', link: '/conclusion/soft-tennis-charm' },
						{ label: '未來的網球之路', link: '/conclusion/future-tennis-path' },
					],
				},
				{
					label: '附錄',
					items: [
						{ label: '常見問題解答', link: '/appendix/faq' },
						{ label: '推薦資源', link: '/appendix/recommended-resources' },
					],
				},
			],
			customCss: [
				'./src/styles/soft-tennis.css',
			],
			// Other valid Starlight options...
		}),
	],
});
