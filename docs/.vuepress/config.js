module.exports = {
    base:"/vuepress-components/",
    title: '亦云组件使用文档',
    // dest:'public',
    // description: '亦云自己使用的组件库',
    markdown: {
        // markdown-it-anchor 的选项
        anchor: { permalink: false },
        // markdown-it-toc 的选项
        toc: { includeLevel: [1, 2, 3] },
        lineNumbers: true
      },
    head: [
        ['link', { rel: 'icon', href: '/logo_demo.png' }]
    ],
    /* vuepress 默认主题配置 */
    themeConfig: {
        logo: '/logo_demo.png', //导航栏logo
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/install/install' },
            { text: 'External', link: 'https://baidu.com' },
            {
                text: 'Languages', ariaLabel: 'Language Menu', items: [
                    { text: 'Chinese', link: '/language/chinese/' },
                    { text: 'English', link: '/language/English/' }
                ]
            },
        ], //导航栏
        sidebar: [
            {
                title: '使用指南',
                collapsable: false, //是否展开
                children: [
                    ['/guide/install/install', '安装'],
                    ['/guide/start/start', '快速上手'],
                ]
            },
            {
                title: '组件使用介绍',
                collapsable: false,
                children: [
                    ['/guide/customForm/customForm', '自定义表单'],
                    ['/guide/organization/organization', '组织架构'],
                    ['/guide/empty/empty', '暂无数据'],
                    
                ]
            },
        ]
    }
}