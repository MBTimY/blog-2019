export interface BannerInterface {
    // Banner点击后的跳转链接
    linkUrl: string;
    // Banner图片地址
    imageUrl: string;
    // Banner描述
    description: string;
    // Banner标题
    title: string;
    // Banner图是否加载完
    imgReady: boolean;
    // 跳转链接
    urlMap?: BannerUrlListInterface;
}

export interface BannerUrlListInterface {
    zh: string;
    en: string;
    ko: string;
}