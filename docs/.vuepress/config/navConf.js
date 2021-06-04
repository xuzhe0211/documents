module.exports = [
    { text: '首页', link: '/' },
    { text: '课程学习', link: '/source-study/' },
    { text: 'Vue源码', link: '/source-vue/'},
    {
        text: 'Front End',
        ariaLabel: 'Front End Menu',
        items: [
            { text: 'HTML-DOM', link: '/front-end/Html/' },
            { text: 'Css', link: '/front-end/Css/' },
            { text: 'JavaScript', link: '/front-end/JavaScript/' },
            { text: '框架', link: '/front-end/Frame/' },
            { text: '算法', link: '/front-end/Code/' },
            { text: '工程化', link: '/front-end/Engineering/' },
            { text: '前端面试题', link: '/front-end/Interview/' }
        ]
    },
    {
        text: '后端',
        ariaLabel: 'back End Menu',
        items: [
            { text: 'Node', link: '/back-end/Node/' },
            { text: 'Docker', link: '/back-end/Docker/' },
        ]
    },
    {
        text: '开发工具',
        ariaLabel: 'tools End Menu',
        items: [
            { text: 'Git', link: '/tools/Git/' },
            { text: 'VScode', link: '/tools/VScode/' },
            { text: '工具', link: '/tools/Other/' },
        ]
    },
    {
        text: '随记',
        ariaLabel: 'wander End Menu',
        items: [
            { text: '工作', link: '/wander/Work/' },
            { text: '生活', link: '/wander/Life/' },
        ]
    },
];