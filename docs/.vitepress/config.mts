import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SOM",
  description: "Sistemas Operativos Monopuesto",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Windows', link: '/windows/index' },
      { text: 'Linux', link: '/linux/index' }
    ],

    sidebar: [
      {
        text: 'Windows',
        items: [
          { text: '🔗 Atajos', link: '/windows/atajos' },
          {
            text: '​🖥️​ Comandos (CMD)',
            link: '/windows/comandos-cmd',
            items: [
              {
                text: '📒 Ejemplos',
                collapsed: true,
                items: [
                  { text: '📁 Directorios', link: '/windows/ejemplos/directorios.md' },
                  { text: '​🗃️​ Archivos', link: '/windows/ejemplos/archivos.md' },
                  { text: '🌐 Red', link: '/windows/ejemplos/red' },
                  { text: '⚙️ Administración', link: '/windows/ejemplos/administracion' },
                  { text: '🧰​ Utilidades', link: '/windows/ejemplos/utilidades' },
                  { text: '🔐​ Usuarios', link: '/windows/ejemplos/usuarios' },                  
                  { text: '💾​ Discos', link: '/windows/ejemplos/discos' },                  
                  { text: '🧮​ Scripts', link: '/windows/ejemplos/scripts' },                  
                  { text: '🧱​ Entorno', link: '/windows/ejemplos/entorno' }
                ]
              },
              { text: '📋 Ejercicios', link: '/windows/ejercicios/directorios-archivos' }
            ]
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
