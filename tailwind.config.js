/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                'yellow-dark': '#C37F17',
                'yellow': '#DBAC2C',
                'yellow-light': '#F1E9C9',
                'purple-dark': '#4B2995',
                'purple': '#8047F8',
                'purple-light': '#EBE5F9',
                'base-title': '#272221',
                'base-subtitle': '#403937',
                'base-text': '#574F4D',
                'base-label': '#8D8686',
                'base-hover': '#D7D5D5',
                'base-button': '#E6E5E5',
                'base-card': '#F3F2F2',
                
            },
            backgroundImage: {
                'main-bg': "url('/src/assets/Background.png')"
            }
        },
    },
    plugins: [],
}

