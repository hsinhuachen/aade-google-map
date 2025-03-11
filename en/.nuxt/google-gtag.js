export default function ({app: {router}}, inject) {
  if(false){
    // inject empty gtag function for disabled mode
    inject('gtag', () => {})
    return
  }

  window.dataLayer = window.dataLayer || []
  function gtag () {
    dataLayer.push(arguments)
    if(false){
      console.debug('gtag tracking called with following arguments:', arguments)
    }
  }
  inject('gtag', gtag)
  gtag('js', new Date())
  gtag('config','G-RWC5B02HW2',{
  "anonymize_ip": true,
  "send_page_view": false,
  "linker": {
    "domains": [
      "aade.project.edu.tw"
    ]
  }
})

  if(!false){
    router.afterEach((to) => {
      gtag('config', 'G-RWC5B02HW2', {'page_path': to.fullPath})
    })
  }

  // additional accounts
}
