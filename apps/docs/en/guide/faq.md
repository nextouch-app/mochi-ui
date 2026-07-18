# FAQ

**Q: Do Web and Mobile need two packages?**  
A: Yes. Dual-target apps should install both `@mochi-ui/react` and `@mochi-ui/mobile`. Props stay aligned; only the import path differs.

**Q: Can I customize the theme?**  
A: Yes. Override CSS variables via `ConfigProvider` `theme` (for example primary color), or set `--mochi-*` yourself.

**Q: How do I change fonts?**  
A: Update `--mochi-font-family` in tokens or through `ConfigProvider`. No component code changes required.

**Q: Can I use it commercially?**  
A: Yes. MIT licensed.
