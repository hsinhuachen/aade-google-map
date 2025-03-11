import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  DropDown: () => import('../../components/DropDown.vue' /* webpackChunkName: "components/drop-down" */).then(c => wrapFunctional(c.default || c)),
  Footer: () => import('../../components/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c)),
  Header: () => import('../../components/Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c)),
  Logo: () => import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c)),
  MainMenu: () => import('../../components/MainMenu.vue' /* webpackChunkName: "components/main-menu" */).then(c => wrapFunctional(c.default || c)),
  Menu: () => import('../../components/Menu.vue' /* webpackChunkName: "components/menu" */).then(c => wrapFunctional(c.default || c)),
  Pagination: () => import('../../components/Pagination.vue' /* webpackChunkName: "components/pagination" */).then(c => wrapFunctional(c.default || c)),
  CardArticleCard: () => import('../../components/Card/ArticleCard.vue' /* webpackChunkName: "components/card-article-card" */).then(c => wrapFunctional(c.default || c)),
  CardImage: () => import('../../components/Card/Image.vue' /* webpackChunkName: "components/card-image" */).then(c => wrapFunctional(c.default || c)),
  CardInfo: () => import('../../components/Card/Info.vue' /* webpackChunkName: "components/card-info" */).then(c => wrapFunctional(c.default || c)),
  CardMemberCard: () => import('../../components/Card/MemberCard.vue' /* webpackChunkName: "components/card-member-card" */).then(c => wrapFunctional(c.default || c)),
  BlocksArticleAuthor: () => import('../../components/Blocks/ArticleAuthor.vue' /* webpackChunkName: "components/blocks-article-author" */).then(c => wrapFunctional(c.default || c)),
  BlocksArticleBigImage: () => import('../../components/Blocks/ArticleBigImage.vue' /* webpackChunkName: "components/blocks-article-big-image" */).then(c => wrapFunctional(c.default || c)),
  BlocksArticleBigNav: () => import('../../components/Blocks/ArticleBigNav.vue' /* webpackChunkName: "components/blocks-article-big-nav" */).then(c => wrapFunctional(c.default || c)),
  BlocksArticleIntro: () => import('../../components/Blocks/ArticleIntro.vue' /* webpackChunkName: "components/blocks-article-intro" */).then(c => wrapFunctional(c.default || c)),
  BlocksArticleNav: () => import('../../components/Blocks/ArticleNav.vue' /* webpackChunkName: "components/blocks-article-nav" */).then(c => wrapFunctional(c.default || c)),
  BlocksArticlePhotoWall: () => import('../../components/Blocks/ArticlePhotoWall.vue' /* webpackChunkName: "components/blocks-article-photo-wall" */).then(c => wrapFunctional(c.default || c)),
  BlocksArticleTextBlock: () => import('../../components/Blocks/ArticleTextBlock.vue' /* webpackChunkName: "components/blocks-article-text-block" */).then(c => wrapFunctional(c.default || c)),
  BlocksArticleVideo: () => import('../../components/Blocks/ArticleVideo.vue' /* webpackChunkName: "components/blocks-article-video" */).then(c => wrapFunctional(c.default || c)),
  BlocksBreadCrumb: () => import('../../components/Blocks/BreadCrumb.vue' /* webpackChunkName: "components/blocks-bread-crumb" */).then(c => wrapFunctional(c.default || c)),
  BlocksFeaturedArticle: () => import('../../components/Blocks/FeaturedArticle.vue' /* webpackChunkName: "components/blocks-featured-article" */).then(c => wrapFunctional(c.default || c)),
  BlocksGallerySlide: () => import('../../components/Blocks/GallerySlide.vue' /* webpackChunkName: "components/blocks-gallery-slide" */).then(c => wrapFunctional(c.default || c)),
  BlocksGoogleMap: () => import('../../components/Blocks/GoogleMap.vue' /* webpackChunkName: "components/blocks-google-map" */).then(c => wrapFunctional(c.default || c)),
  BlocksParallaxGallery: () => import('../../components/Blocks/ParallaxGallery.vue' /* webpackChunkName: "components/blocks-parallax-gallery" */).then(c => wrapFunctional(c.default || c)),
  BlocksSlideShow: () => import('../../components/Blocks/SlideShow.vue' /* webpackChunkName: "components/blocks-slide-show" */).then(c => wrapFunctional(c.default || c)),
  ButtonDark: () => import('../../components/Button/Dark.vue' /* webpackChunkName: "components/button-dark" */).then(c => wrapFunctional(c.default || c)),
  ButtonLight: () => import('../../components/Button/Light.vue' /* webpackChunkName: "components/button-light" */).then(c => wrapFunctional(c.default || c)),
  ButtonNuxtLinkButton: () => import('../../components/Button/NuxtLinkButton.vue' /* webpackChunkName: "components/button-nuxt-link-button" */).then(c => wrapFunctional(c.default || c)),
  LoadingAjax: () => import('../../components/Loading/Ajax.vue' /* webpackChunkName: "components/loading-ajax" */).then(c => wrapFunctional(c.default || c)),
  LoadingAnimation: () => import('../../components/Loading/Animation.vue' /* webpackChunkName: "components/loading-animation" */).then(c => wrapFunctional(c.default || c)),
  LoadingDefault: () => import('../../components/Loading/Default.vue' /* webpackChunkName: "components/loading-default" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
