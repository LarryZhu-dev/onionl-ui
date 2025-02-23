import type { App, Plugin } from 'vue'

export function installMaker(Components: Plugin[]) {
  return {
    install(app: App) {
      Components.forEach((component) => {
        app.use(component)
      })
    },
  }
}
