
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 2323, hash: '0be62ed91c2933374175c9f33c338b45bad7023262e27f30ec54071b58eec1c2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1007, hash: 'fcc511aefb435749b646603ea1035226c5ff902689ec1029346ca45ffaa9027f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 71798, hash: 'dec671531bcf1260d68effdf620f62f7cc96651f937a51b0477063c93efddfff', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-FTBFSEUN.css': {size: 14205, hash: 'x2FnHvts1ZQ', text: () => import('./assets-chunks/styles-FTBFSEUN_css.mjs').then(m => m.default)}
  },
};
