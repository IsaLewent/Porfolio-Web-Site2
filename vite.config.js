import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()],
    esbuild: {
        // Bu satır, her jsx dosyasının tepesine otomatik olarak "import React from 'react'" ekler.
        // Böylece "React is not defined" hatası almazsın.
        jsxInject: `import React from 'react'`,
    },
})