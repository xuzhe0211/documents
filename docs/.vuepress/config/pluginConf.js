// const moment = require('moment');
const secretKeyConf = require('./secretKeyConf.js');

// moment.locale("zh-cn");

module.exports = {
    "vuepress-plugin-auto-sidebar": {
        titleMode: "uppercase",
        collapsable: true,
        titleMap: {
            javascript: "JS 基础",
        },
        collapseList: [
            "/frontend/js/"
        ]
    }
};