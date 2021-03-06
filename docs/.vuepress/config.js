module.exports = {
    // 网站 Title
    title: 'Spring\'s Blog',

    port: 8090,
  
    // 网站描述
    description: 'This is my blog',
  
    // 网站语言
    locales: {
      '/': {
        lang: 'en-US',
      },
    },
  
    // 使用的主题
    theme: 'meteorlxy',
  
    // 主题配置
    themeConfig: {
      // 主题语言，参考下方 [主题语言] 章节
      lang: Object.assign(require('vuepress-theme-meteorlxy/lib/langs/en-US'), {
        home: `Welcome to Spring's Blog`,
        posts: 'My Posts',
      }),
  
      // 个人信息（没有或不想设置的，删掉对应字段即可）
      personalInfo: {
        // 昵称
        nickname: 'Spring Liao',
  
        // 个人简介
        description: '纵使我是诗人，也写不尽悲伤，满纸哀愁，泛着墨香。',
  
        // 电子邮箱
        email: '389055604@qq.com',
  
        // 所在地
        location: 'Cheng\'du City, China',
  
        // 组织
        organization: '',
  
        // 头像
        // 设置为外部链接
        avatar: '/avatar.jpg',
        // 或者放置在 .vuepress/public 文件夹，例如 .vuepress/public/img/avatar.jpg
        // avatar: '/img/avatar.jpg',
        
  
        // 社交平台帐号信息
        sns: {
          // Github 帐号和链接
          github: {
            account: 'Liaoct',
            link: 'https://github.com/Liaoct',
          }
        },
      },
  
      // 上方 header 的相关设置
      header: {
        // header 的背景，可以使用图片，或者随机变化的图案（geopattern）
        background: {
          // 使用图片的 URL，如果设置了图片 URL，则不会生成随机变化的图案，下面的 useGeo 将失效
          url: '/banner.jpg',
  
          // 使用随机变化的图案，如果设置为 false，且没有设置图片 URL，将显示为空白背景
          useGeo: true,
        },
  
        // 是否在 header 显示标题
        showTitle: true
      },
  
      // 是否显示文章的最近更新时间
      lastUpdated: true,
  
      // 顶部导航栏内容
      nav: [
        { text: 'Home', link: '/', exact: true },
        { text: 'Posts', link: '/posts/', exact: false },
        { text: 'Projects', link: '/projects' },
        { text: 'About', link: '/about' },
        { text: 'Github', link: 'https://github.com/Liaoct'}
      ],
  
      // 评论配置，参考下方 [页面评论] 章节
      comments: {
        owner: 'Liaoct',
        repo: 'Liaoct.github.io',
        clientId: process.env.NODE_ENV === 'development' ? 'b23f2cb8b3dcfe392188' : 'c176f1463ba53e0db662',
        clientSecret: process.env.NODE_ENV === 'development' ? '71e1f60b8655f8b4c7da9be867f26d5b01d489e9' : 'c797b2e12086ce487582d2adcb03e7cabd3d5667',
        prefix: '[Comments] ',
        labels: ['comments'],
        autoCreateIssue: process.env.NODE_ENV !== 'development',
      },
    },
  }