// .vuepress/config.js
module.exports = {
  title: 'Discovery View',
  plugins: ['vuepress-plugin-export'],
  head: [
    ['link', {rel: 'icon', href: '/favicon.ico'}]
  ],
  locales: {
'/': { lang: 'es-ES'},
'/en/': { lang: 'en-US'}
  },
  base: '/Discovery-View/',
   themeConfig: {    
    logo: '/main.jpg',
      locales: {
      '/':{
    selectText: 'Lenguaje',
    label:'Español',
    sidebar: [
	     '/',
		 'introduccion',
		 'comenzar',
		 'objects',
		 'structure',
		 'use',
		 'apendicea',
		 'apendiceb',
		 'apendicec'
	  ],
    sidebarDepth: 2,
    displayAllHeaders: false, // Default: false
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Objects Dictionary', link: '/objects'},
      { text: 'System Structure', link: '/structure'},
      { text:'Descargar',link:'http://96.126.100.137:3000/auditoria_revision/Discovery.git/docs/Visor_Discovery_Manual_del_Usuario_v1.docx'}
    ],
    plugins: [
      ['vuepress-plugin-export',
      {
        sorter: function(a,b){
          var ordering = {
            'Home': 0,
            'introduccion': 1,
            'comenzar': 2,
            'objects': 3,
            'structure': 4,
            'use': 5,
            'apendicea': 6,
            'apendiceb': 7,
            'apendicec': 8
          };
          return (ordering[a["title"]] - ordering[b["title"]]);
        }
      }
      ]
    ]
  },

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
      { text: 'System Structure', link: '/en/structure'},
      { text:'Download',link:'https://github.com/manuales/Discovery.git/Visor_Discovery_Manual_del_Usuario_v1.docx'} 
    ],
    plugins: [
      ['vuepress-plugin-export',
      {
        sorter: function(a,b){
          var ordering = {
            'Home': 0,
            '/en/introduction': 1,
            '/en/start': 2,
            '/en/objects': 3,
            '/en/structure': 4,
            '/en/uses': 5,
            '/en/appendixa': 6,
            '/en/appendixb': 7,
            '/en/appendixc': 8
          };
          return (ordering[a["title"]] - ordering[b["title"]]);
        }
      }
      ]
    ]
  }
  },


  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: true },
    // options for markdown-it-toc
    toc: { includeLevel: [1, 2,3] },
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