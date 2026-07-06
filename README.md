# 自用的模板项目

Vue3 + TSX + Vite 项目，使用 jake 管理构建

每个模板中都做了以下配置：
- 默认已经添加了额外的依赖 vueuse 和 pinia 
- 配置了 unplugin-auto-import 以简化导入（必须要先运行一次 `pnpm build` 生成类型定义文件才能获取类型提示）
- 配置了 `'src/'` 目录的别名 `'@/'`
- minifier 设置为了 terser

为每个模板单独进行了以下配置：
- lib:
    - 配置了用于 pnpm dev 预览时的网页页面
    - 配置了 unplugin-dts 自动类型定义生成
    - 关闭了混淆并配置了 vite-plugin-prettier-format 格式化输出（后续可以通过项目根目录添加 `.prettierrc.js` 以配置）
- app: 暂无额外配置
