import WPApi from 'wpapi'

const options = {"sitemap":true,"endpoint":"http:\u002F\u002Flocalhost:9000\u002Fwp-json","customRoutes":[{"extension":"api","route":"field\u002F(?P\u003Cs\u003E)","name":"field"},{"extension":"api","route":"fields\u002F(?P\u003Cs\u003E)","name":"fields"},{"extension":"api","route":"languages","name":"lang"},{"extension":"wp\u002Fv2","route":"news","name":"news"},{"extension":"wp\u002Fv2","route":"cat-news","name":"cat-news"}]}
let wp = new WPApi(options)

export default async (ctx, inject) => {
    options.customRoutes.forEach(element => {
      wp[element.name] = wp.registerRoute(element.extension, element.route);
    });

  inject('wp', wp)
}
