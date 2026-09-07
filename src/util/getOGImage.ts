import themeConfig from "./themeConfig"

function getBasePath(): string {
  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:4321';
  }

  return themeConfig.general.seo.url;
}

export function getOGImage(slug: string) {
  return '/favicon.svg'; // og 分享图：静态默认（已移除动态 og 生成）
}