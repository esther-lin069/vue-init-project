import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
// 自動導入插件
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        // 監聽所有位址,
        host: true,
        proxy: {
            '/api': {
                // target: 'http://127.0.0.1:8080',
                target: '',
                changeOrigin: true,
                // rewrite: (path: string) => path.replace(/^\/api/, ''),
            },
        },

    },
    plugins: [
        vue(),
        AutoImport({
            imports: [
                // 需要自動導入的插件，自定義導入的API
                'vue',
                'vue-router',
                'pinia',
            ],
            resolvers: [
                // 自動導入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
                ElementPlusResolver(
                    {
                        importStyle: 'sass',
                    },
                ),
            ],
        }),
        Components({
            resolvers: [
                // 自動導入 组件
                ElementPlusResolver(
                    {
                        importStyle: 'sass',
                    },
                ),
            ],
        }),
    ],
    build: {
        outDir: '../dist', // 打包輸出目錄,
        emptyOutDir: true, // 打包前清空輸出目錄,
        // rollup 配置
        rollupOptions: {
            output: {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                manualChunks(id: any): string | void {
                    if (id.includes('lodash-es')) {
                        return 'lodash-es';
                    }

                    if (id.includes('node_modules')) {
                        return 'vendor';
                    }
                    return undefined;
                },
            },
        },
        minify: 'terser', // 必須開啟：使用terserOptions才有效果,
        terserOptions: {
            compress: {
                // 生產環境時移除console
                drop_console: true,
                drop_debugger: true,
            },
        },
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
})
