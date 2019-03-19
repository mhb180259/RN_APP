#### 项目初始化

```
yarn install

yarn start

yarn run ios (android)     

```

**项目结构**

```
├── README.md                   // help
├── src                         // Ract Native
│   ├── app                     // redux部分
│   │    ├── actions            // creat action
│   │    ├── constants          // constants
│   │    ├── reducers           // reducer
│   │    ├── sagas              // redux saga
│   │    ├── selectors          // 过滤以及准备view层需要的数据
│   │    └── store              // store
│   ├── commons                 // 共享基础模块
│   ├── components              // Ract Native 通用组件
│   ├── containers
│   │    └── page               // 具体业务模块
│   ├── routers                 // 路由部分
│   │    ├── index.js           // page模块聚合页
│   │    └── app.js             // 导航注册
│   ├── AppNavigationState.js   // Nvigation state 入口
│   ├── config.js               // 导航通用配置
│   └── root.js                 // Ract Native 入口页
│
├── ios                         // ios原生部分
├── index.js                    // 项目注册入口文件
├── android                     // android原生部分
├── node_modules                // 项目依赖包
├── __test__                    // 自动化测试
├── package.json                // 项目配置信息
├── pre-commit                  // 提交代码时按照.eslint的配置进行校验
├── .editorconfig               // 统一不同编辑器配置
├── .babelrc                    // 设置转码的规则,插件,文件地址映射
├── .eslintrc                   // 代码校验规则配置
└── yarn.lock                   // 依赖的版本信息管理
```
