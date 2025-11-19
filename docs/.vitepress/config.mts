import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Sistemas Operativos", 
  description: "Sistemas Operativos Monopuesto",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Windows', link: '/windows/index' },
      { text: 'Linux', link: '/linux/index' }
    ],

    sidebar: {
      '/windows':[
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
                  { text: '💾​ Discos y espacio', link: '/windows/ejemplos/discos' }
                ]
              }
            ]
          }
        ]
      }],
      '/linux/':[ 
      {
        text: 'Linux',
        items: [
          {
            text: '​🐧​ Comandos',
            link: '/linux/comandos',
            items: [
              {
                text: '📒 Ejemplos',
                collapsed: true,
                items: [
                  { text: '📁 Directorios', link: '/linux/ejemplos/directorios.md' },
                  { text: '​🗃️​ Archivos', link: '/linux/ejemplos/archivos.md' },
                  { text: '🔐​ Permisos', link: '/linux/ejemplos/usuarios' },                  
                  { text: '🌐 Red', link: '/linux/ejemplos/red' },
                  { text: '⚙️ Procesos', link: '/linux/ejemplos/administracion' },
                  { text: '📦​ Gestión de paquetes', link: '/linux/ejemplos/paquetes' },
                  { text: '💾​ Discos', link: '/linux/ejemplos/discos' },                  
                  { text: '🧮​ Scripts', link: '/linux/ejemplos/scripts' },                  
                  { text: '🧱​ Entorno', link: '/linux/ejemplos/entorno' }
                ]
              }
            ]
          }
        ]
      }]
    },

    outline: {
      label: 'Navegación'
    },
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
