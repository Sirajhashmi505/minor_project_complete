const URL = "http://localhost:3000";

export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'client',
        script: [{ src: "https://js.stripe.com/v3" }],
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
            { rel: "stylesheet", href: "/css/font-awesome/css/all.css" },
            { rel: "stylesheet", href: "/css/default.css" }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [{ src: "~/plugins/localStorage.js", ssr: false }],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // Doc: https://bootstrap-vue.js.org
        "bootstrap-vue/nuxt",
        // Doc: https://axios.nuxtjs.org/usage
        "@nuxtjs/axios",
        "@nuxtjs/pwa",
        "@nuxtjs/auth"
    ],
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {
        proxy: true,
        baseURL: URL
    },

    proxy: {
        "/api": URL
    },

    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {}
    },

    auth: {
        strategies: {
            local: {
                endpoints: {
                    login: {
                        propertyName: "token"
                    },
                    logout: true
                }
            }
        }
    }
};