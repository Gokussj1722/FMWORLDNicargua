// .vuepress/config.js
module.exports = {
  title: 'FM WORLD Nicaragua',
  //plugins: ['vuepress-plugin-export'],
  head: [
    ['link', {rel: 'icon', href: '/favicon1.ico'}]
  ],
   //BORRAR EN MULTILENGUAJE
  locales: {
    '/': { lang: 'es-ES'}
      },
 /* MULTILENGUAJE ***RECORDAR CREAR EL DIRECTORIO "EN" PARA PODER ACCEDER AL MULTILENGUAJE***
  locales: {
'/': { lang: 'es-ES'},
'/en/': { lang: 'en-US'}
  },
  */
  //base: '/fmworld-nicaragua/',
   themeConfig: {    
    docsDir: 'docs',
    repo: 'Gokussj1722/FMWORLDNicargua',
    logo: '/main.png',
      locales: {
      '/':{
    selectText: 'Lenguaje',
    label:'Español',
    sidebar: [
       '/',
       '/hombres',
       '/mujer',
       '/unisex'
		 
	  ],
    sidebarDepth: 1, //Controla los sub niveles en las droplists
    displayAllHeaders: false, // Default: false
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Hombres', link: '/hombres'},
     /* Para tener una droplist 
     { text: 'Hombres',
				items: [          
          { text: 'Hombres Pure', link: '/hombres'},
          {	text: 'Hombres Royal',link: '/hombres'}
        ]
      },*/
      { text: 'Mujeres', link: '/mujer'},
      { text: 'Unisex', link: '/unisex'},
      { text: 'Facebook', link: 'https://www.facebook.com/fmworld.nicaragua'},
      { text: 'Instagram', link: 'https://www.instagram.com/p/CHK5n_wnm2f/?utm_source=ig_web_copy_link'},
      { text: 'Haz tu pedido aquí', link: 'https://wa.me/50588506541'}
    ]
  } //QUITAR ESTA LLAVE PARA MULTIIDIOMA
  },
/*MULTIIDIOMA 
  '/en/':{
    selectText: 'Language',
    label:'English',    
    sidebar: [
	     '/en/',
		 '/en/introduction',
		 '/en/start',
		 '/en/objects',
		 '/en/structure',
		 '/en/uses',
		 '/en/appendixa',
		 '/en/appendixb',
		 '/en/appendixc'
	  ],
    sidebarDepth: 2,
    displayAllHeaders: false, // Default: false
    nav: [
      { text: 'Home', link: '/en/' },
      { text: 'Objects Dictionary', link: '/en/objects'},
      { text: 'System Structure', link: '/en/structure'}
    ]
  }
  },
*/

  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: true },
    // options for markdown-it-toc
    toc: { includeLevel: [1] },
    config: md => {
      // use more markdown-it plugins!
      md.set({html: true})
      md.use(require("markdown-it-katex"));
      md.use(require('markdown-it-task-lists'));
      md.use(require("markdown-it-plantuml"));
      md.use(require("markdown-it-admonition"));
      // use for easy syntax mermaid diagrams
 
    }
  }
}
}