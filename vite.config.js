import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/proxy': 'http://localhost:3001'
    },
  },
})

// export default {
//   server: {
//     proxy: {
//       '/proxy': 'http://localhost:3001'
//     }
//   }
// }
