module.exports = {
  base: "/ts-axios-doc/",
  dest: "dist",
  title: "TypeScript 从零实现 axios",
  description: "学习使用 TypeScript 从零实现 axios 库",
  head: [["link", { rel: "icon", href: `./ts-logo.png` }]],
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: "huxingyi1997/ts-axios",
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: "GitHub源码",

    // 以下为可选的编辑链接选项

    // 假如你的文档仓库和项目本身不在一个仓库：
    docsRepo: "huxingyi1997/ts-axios-doc",
    // 假如文档不是放在仓库的根目录下：
    docsDir: "docs",
    // 可编辑默认是 false
    editLinks: false,
    docsDir: "docs",
    nav: [
      { text: '博客', link: 'https://hxy1997.xyz/2021/05/13/TypeScript%E9%87%8D%E6%9E%84axios/' },
      { text: 'Gitee文档', link: 'https://gitee.com/hxy1997/ts-axios-doc' },
      { text: 'GitHub文档', link: 'https://github.com/huxingyi1997/ts-axios-doc' },
      { text: 'Gitee源码', link: 'https://gitee.com/hxy1997/ts-axios' }
    ],
    sidebar: [
      {
        title: "初识 TypeScript",
        collapsable: false,
        children: [
          ["chapter1/", "Introduction"],
          "chapter1/install",
          "chapter1/start",
        ],
      },
      {
        title: "TypeScript 常用语法",
        collapsable: false,
        children: [
          "chapter2/type",
          "chapter2/declare",
          "chapter2/interface",
          "chapter2/class",
          "chapter2/function",
          "chapter2/generic",
          "chapter2/inference",
          "chapter2/advance",
        ],
      },
      {
        title: "ts-axios 项目初始化",
        collapsable: false,
        children: ["chapter3/require", "chapter3/init", "chapter3/base"],
      },
      {
        title: "ts-axios 基础功能实现",
        collapsable: false,
        children: [
          "chapter4/url",
          "chapter4/data",
          "chapter4/header",
          "chapter4/response",
          "chapter4/response-header",
          "chapter4/response-data",
        ],
      },
      {
        title: "ts-axios 异常情况处理",
        collapsable: false,
        children: ["chapter5/error", "chapter5/enhance"],
      },
      {
        title: "ts-axios 接口扩展",
        collapsable: false,
        children: ["chapter6/extend", "chapter6/overload", "chapter6/generic"],
      },
      {
        title: "ts-axios 拦截器实现",
        collapsable: false,
        children: ["chapter7/interceptor"],
      },
      {
        title: "ts-axios 配置化实现",
        collapsable: false,
        children: ["chapter8/merge", "chapter8/transform", "chapter8/create"],
      },
      {
        title: "ts-axios 取消功能实现",
        collapsable: false,
        children: ["chapter9/cancel"],
      },
      {
        title: "ts-axios 更多功能实现",
        collapsable: false,
        children: [
          "chapter10/withCredentials",
          "chapter10/xsrf",
          "chapter10/upload-download",
          "chapter10/auth",
          "chapter10/validateStatus",
          "chapter10/paramsSerializer",
          "chapter10/baseURL",
          "chapter10/static",
        ],
      },
      {
        title: "ts-axios 单元测试",
        collapsable: false,
        children: [
          "chapter11/preface",
          "chapter11/jest",
          "chapter11/helpers",
          "chapter11/requests",
          "chapter11/headers",
          "chapter11/instance",
          "chapter11/interceptor",
          "chapter11/mergeConfig",
          "chapter11/cancel",
          "chapter11/more",
        ],
      },
      {
        title: "ts-axios 部署与发布",
        collapsable: false,
        children: ["chapter12/build-deploy", "chapter12/demo"],
      },
      {
        title: "课程总结",
        collapsable: false,
        children: ["chapter13/summary"],
      },
    ],
  },
};
