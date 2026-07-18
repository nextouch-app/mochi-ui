# FAQ

**Q: Web 和 Mobile 要装两个包吗？**  
A: 是的。双端项目需要分别安装 `@mochi-ui/react` 与 `@mochi-ui/mobile`。Props 一致，仅 import 路径不同。

**Q: 可以自定义主题吗？**  
A: 可以。通过 `ConfigProvider` 的 `theme` 覆写 CSS 变量（如主色），或直接覆盖 `--mochi-*`。

**Q: 字体如何更换？**  
A: 修改 `--mochi-font-family`（tokens 或 `ConfigProvider`）即可，无需改组件代码。

**Q: 能否商用？**  
A: 可以。MIT 许可。

**Q: 如何发布 / 安装？**  
A: 源码仓库维护者见根目录 README「发布到 npm」。使用者安装：`npm install @mochi-ui/react @mochi-ui/tokens`（Mobile 用 `@mochi-ui/mobile`）。
