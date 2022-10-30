const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [
        require('@tailwindcss/typography'),
        require('daisyui')
    ],

    daisyui: {
        themes: ['dark']

        // themes: [
        //   {
        //     mytheme: {
        //             "primary": "#be123c",
        //             "secondary": "#ffffff",
        //             "accent": "#2dd4bf",
        //             "neutral": "#191D24",
        //             "base-100": "#2A303C",
        //             "info": "#3ABFF8",
        //             "success": "#36D399",
        //             "warning": "#FBBD23",
        //             "error": "#F87272",
        //     },
        //   },
        // ],
      },
};
