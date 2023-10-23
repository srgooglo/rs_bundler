import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        "style": resolve('src/renderer/src/style'),
        "components": resolve('src/renderer/src/components'),
        "utils": resolve('src/renderer/src/utils'),
        "contexts": resolve('src/renderer/src/contexts'),
        "pages": resolve('src/renderer/src/pages'),
        "hooks": resolve('src/renderer/src/hooks'),
        "services": resolve('src/renderer/src/services'),
        '@renderer': resolve('src/renderer/src')
      }
    },
    plugins: [react()],
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true
        }
      }
    }
  }
})
