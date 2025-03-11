import { wrapFunctional } from './utils'

export { default as DropDown } from '../../components/DropDown.vue'
export { default as Footer } from '../../components/Footer.vue'
export { default as Header } from '../../components/Header.vue'
export { default as Logo } from '../../components/Logo.vue'
export { default as MainMenu } from '../../components/MainMenu.vue'
export { default as Menu } from '../../components/Menu.vue'
export { default as Pagination } from '../../components/Pagination.vue'
export { default as CardArticleCard } from '../../components/Card/ArticleCard.vue'
export { default as CardImage } from '../../components/Card/Image.vue'
export { default as CardInfo } from '../../components/Card/Info.vue'
export { default as CardMemberCard } from '../../components/Card/MemberCard.vue'
export { default as BlocksArticleAuthor } from '../../components/Blocks/ArticleAuthor.vue'
export { default as BlocksArticleBigImage } from '../../components/Blocks/ArticleBigImage.vue'
export { default as BlocksArticleBigNav } from '../../components/Blocks/ArticleBigNav.vue'
export { default as BlocksArticleIntro } from '../../components/Blocks/ArticleIntro.vue'
export { default as BlocksArticleNav } from '../../components/Blocks/ArticleNav.vue'
export { default as BlocksArticlePhotoWall } from '../../components/Blocks/ArticlePhotoWall.vue'
export { default as BlocksArticleTextBlock } from '../../components/Blocks/ArticleTextBlock.vue'
export { default as BlocksArticleVideo } from '../../components/Blocks/ArticleVideo.vue'
export { default as BlocksBreadCrumb } from '../../components/Blocks/BreadCrumb.vue'
export { default as BlocksFeaturedArticle } from '../../components/Blocks/FeaturedArticle.vue'
export { default as BlocksGallerySlide } from '../../components/Blocks/GallerySlide.vue'
export { default as BlocksGoogleMap } from '../../components/Blocks/GoogleMap.vue'
export { default as BlocksParallaxGallery } from '../../components/Blocks/ParallaxGallery.vue'
export { default as BlocksSlideShow } from '../../components/Blocks/SlideShow.vue'
export { default as ButtonDark } from '../../components/Button/Dark.vue'
export { default as ButtonLight } from '../../components/Button/Light.vue'
export { default as ButtonNuxtLinkButton } from '../../components/Button/NuxtLinkButton.vue'
export { default as LoadingAjax } from '../../components/Loading/Ajax.vue'
export { default as LoadingAnimation } from '../../components/Loading/Animation.vue'
export { default as LoadingDefault } from '../../components/Loading/Default.vue'

export const LazyDropDown = import('../../components/DropDown.vue' /* webpackChunkName: "components/drop-down" */).then(c => wrapFunctional(c.default || c))
export const LazyFooter = import('../../components/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const LazyHeader = import('../../components/Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c))
export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const LazyMainMenu = import('../../components/MainMenu.vue' /* webpackChunkName: "components/main-menu" */).then(c => wrapFunctional(c.default || c))
export const LazyMenu = import('../../components/Menu.vue' /* webpackChunkName: "components/menu" */).then(c => wrapFunctional(c.default || c))
export const LazyPagination = import('../../components/Pagination.vue' /* webpackChunkName: "components/pagination" */).then(c => wrapFunctional(c.default || c))
export const LazyCardArticleCard = import('../../components/Card/ArticleCard.vue' /* webpackChunkName: "components/card-article-card" */).then(c => wrapFunctional(c.default || c))
export const LazyCardImage = import('../../components/Card/Image.vue' /* webpackChunkName: "components/card-image" */).then(c => wrapFunctional(c.default || c))
export const LazyCardInfo = import('../../components/Card/Info.vue' /* webpackChunkName: "components/card-info" */).then(c => wrapFunctional(c.default || c))
export const LazyCardMemberCard = import('../../components/Card/MemberCard.vue' /* webpackChunkName: "components/card-member-card" */).then(c => wrapFunctional(c.default || c))
export const LazyBlocksArticleAuthor = import('../../components/Blocks/ArticleAuthor.vue' /* webpackChunkName: "components/blocks-article-author" */).then(c => wrapFunctional(c.default || c))
export const LazyBlocksArticleBigImage = import('../../components/Blocks/ArticleBigImage.vue' /* webpackChunkName: "components/blocks-article-big-image" */).then(c => wrapFunctional(c.default || c))
export const LazyBlocksArticleBigNav = import('../../components/Blocks/ArticleBigNav.vue' /* webpackChunkName: "components/blocks-article-big-nav" */).then(c => wrapFunctional(c.default || c))
export const LazyBlocksArticleIntro = import('../../components/Blocks/ArticleIntro.vue' /* webpackChunkName: "components/blocks-article-intro" */).then(c => wrapFunctional(c.default || c))
export const LazyBlocksArticleNav = import('../../components/Blocks/ArticleNav.vue' /* webpackChunkName: "components/blocks-article-nav" */).then(c => wrapFunctional(c.default || c))
export const LazyBlocksArticlePhotoWall = import('../../components/Blocks/ArticlePhotoWall.vue' /* webpackChunkName: "components/blocks-article-photo-wall" */).then(c => wrapFunctional(c.default || c))
export const LazyBlocksArticleTextBlock = import('../../components/Blocks/ArticleTextBlock.vue' /* webpackChunkName: "components/blocks-article-text-block" */).then(c => wrapFunctional(c.default || c))
export const LazyBlocksArticleVideo = import('../../components/Blocks/ArticleVideo.vue' /* webpackChunkName: "components/blocks-article-video" */).then(c => wrapFunctional(c.default || c))
export const LazyBlocksBreadCrumb = import('../../components/Blocks/BreadCrumb.vue' /* webpackChunkName: "components/blocks-bread-crumb" */).then(c => wrapFunctional(c.default || c))
export const LazyBlocksFeaturedArticle = import('../../components/Blocks/FeaturedArticle.vue' /* webpackChunkName: "components/blocks-featured-article" */).then(c => wrapFunctional(c.default || c))
export const LazyBlocksGallerySlide = import('../../components/Blocks/GallerySlide.vue' /* webpackChunkName: "components/blocks-gallery-slide" */).then(c => wrapFunctional(c.default || c))
export const LazyBlocksGoogleMap = import('../../components/Blocks/GoogleMap.vue' /* webpackChunkName: "components/blocks-google-map" */).then(c => wrapFunctional(c.default || c))
export const LazyBlocksParallaxGallery = import('../../components/Blocks/ParallaxGallery.vue' /* webpackChunkName: "components/blocks-parallax-gallery" */).then(c => wrapFunctional(c.default || c))
export const LazyBlocksSlideShow = import('../../components/Blocks/SlideShow.vue' /* webpackChunkName: "components/blocks-slide-show" */).then(c => wrapFunctional(c.default || c))
export const LazyButtonDark = import('../../components/Button/Dark.vue' /* webpackChunkName: "components/button-dark" */).then(c => wrapFunctional(c.default || c))
export const LazyButtonLight = import('../../components/Button/Light.vue' /* webpackChunkName: "components/button-light" */).then(c => wrapFunctional(c.default || c))
export const LazyButtonNuxtLinkButton = import('../../components/Button/NuxtLinkButton.vue' /* webpackChunkName: "components/button-nuxt-link-button" */).then(c => wrapFunctional(c.default || c))
export const LazyLoadingAjax = import('../../components/Loading/Ajax.vue' /* webpackChunkName: "components/loading-ajax" */).then(c => wrapFunctional(c.default || c))
export const LazyLoadingAnimation = import('../../components/Loading/Animation.vue' /* webpackChunkName: "components/loading-animation" */).then(c => wrapFunctional(c.default || c))
export const LazyLoadingDefault = import('../../components/Loading/Default.vue' /* webpackChunkName: "components/loading-default" */).then(c => wrapFunctional(c.default || c))
