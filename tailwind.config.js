/** @type {import('tailwindcss').Config} */
// tailwind.config.js
const { plugin } = require('twrnc');
const defaultTheme = require('tailwindcss/defaultTheme')
// or, you can use tailwinds plugin function:
// const plugin = require('tailwindcss/plugin');
const beachImage = "url('./src/assets/images/background-image.png')"
module.exports = {
  important: true,
  // purge: [],
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./App.js"], // this line is important to use tailwind CSS.
  theme: {
    screens: {
      // 'sm': '668px',
      // => @media (min-width: 640px) { ... }

      // 'md': '768px',
      // => @media (min-width: 768px) { ... }

      // 'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      // 'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      // '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      // 'sm': '668px',
      // => @media (min-width: 640px) { ... }

      'md': '43rem',
      // => @media (min-width: 689px) { ... }

      'lg': '63rem',
      // => @media (min-width: 1009px) { ... }

      'xl': '82rem',
      // => @media (min-width: 1313px) { ... }

      // '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/assets/images/background-image.png')",
        'footer-texture': "url('./src/assets/images/background-image.png')",
      },
      colors: {
        darklogo: '#00216e',
        lightlogo: '#0c54ff',
        'regal-blue': '#243c5a',
        gold:
        { 
          '50': '#FFCE5C',
          100: '#FFC233',
          // 100: '#b98b41',
          // 75: '#c29752',
          200: '#ffb70c',
          300: '#c29752',
          '400': '#c9a265',
          // 500: '#cfae78',
          // 600: '#d6b98b',
        },
        // transparent: 'transparent',
        
        blacklogo:{
          100:'#000',
          200: '#090C08'
        },
        whitelogo: {
          50: '#e5e5e5',
          100:'#fff',
          200: '#FFF5FF',
          300: '#FFE8F7',
          400: '#F2ECFF',
        },
        redlogo: {
          50: '#fff1f3',
          100: '#ffdfe4',
          200: '#ffc4cd',
          300: '#ff9baa',
          400: '#ff6179',
          500: '#ff304f',
          600: '#f21032',
          700: '#c20925',
          800: '#a80c24',
          900: '#8b1123',
        },
        greenlogo: {
          '50': '#eefbf5',
          '100': '#d5f6e5',
          '200': '#afebcf',
          '300': '#7adbb4',
          '400': '#44c395',
          '500': '#21a87b',
          '600': '#148763',
          '700': '#106c52',
          '800': '#0f5642',
          '900': '#0d4738',
        },
        bluelogo: {
          '50': '#e6f9ff',
          '100': '#d1f4ff',
          '200': '#ade9ff',
          '300': '#7cd5ff',
          '400': '#49b2ff',
          '500': '#218cff',
          '550': '#117AFF',
          '580': '#0068ff',
          '590': '#006Aff',
          '600': '#006Cff',
          '650': '#0064ec',
          '660': '#0060E3',
          // '68': '#005BD9',
          '700': '#006cff',
          '800': '#005bd9',
          '850': '#024396',
          '900': '#042a5e',
        },
        bahamablue: {
          '50': '#f0f7ff',
          '100': '#e0effe',
          '200': '#badffd',
          '300': '#7ec5fb',
          '400': '#39a7f7',
          '500': '#108de7',
          '600': '#036fc6',
          '700': '#04559b',
          '800': '#084b84',
          '900': '#0d406d',
        },
        brightsun: {
          '50': '#fffbeb',
          '100': '#fff3c6',
          '200': '#ffe588',
          '300': '#ffcf40',
          '400': '#ffbd20',
          // '500': '#f99b07',
          // '600': '#dd7302',
          // '700': '#b75006',
          // '800': '#943d0c',
          // '900': '#7a330d',
        },
        gray: {
          100: '#f7fafc',
          // ...
          900: '#1a202c',
        },
      },
      fontFamily: {
        sans: ['Nunito','Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      boxShadow: {
        rainbow: '0 0 0 10px #ff0000,0 0 0 20px #ff7700,0 0 0 30px #FFDD00,0 0 0 40px #00FF00,0 0 0 50px #0000FF,0 0 0 60px #C77DF3,0 0 0 70px #8A2BE2',
      },
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': 20,
      }
    }
  },
  // variants: {},
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        bgImage: {
          // bgImage: {
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1124&q=100')",
          backgroundPosition: 'center',
          // },
        },

        bgImageBeach: {
          backgroundImage: "url('./src/assets/images/background-image.png')",
        },
        goldgradient: {
          backgroundColor:
            'radial-gradient(ellipse farthest-corner at right bottom, #FEDB37 0%, #FDB931 8%, #9f7928 30%, #8A6E2F 40%, transparent 80%),radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #5d4a1f 62.5%, #5d4a1f 100%)',
        },
        'border-outline': {
          border: '4px dashed blue',
        },
        container: {
          width: '100%',
        },
        container1: {
          width: '100vw',
          // display: 'flex',
          // flex: 1,
          // width: '100vw',
          // height: 'auto',
          // display: 'flex',
          // width: '100vw',
          // height: 'auto',
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'center',
          justifyItems: 'center',
          // border: '1px dashed blue'
          // justifyContent: 'center',
        },
        container2: {
          flex: 1,
          // display: 'flex',
          // width: '100vw',
          // height: 'auto',
          backgroundColor: 'white',
          alignItems: 'center',
          // border: '1px dashed blue'
          // justifyContent: 'center',
        },
        btn: {
          padding: 3,
          borderRadius: 10,
          textTransform: `uppercase`,
          backgroundColor: `#333`,
        },
        'glass-border': {
          border: '1px solid white',
        },
        visible: {
          display: 'flex',
        },

        nav: {
          // opacity: '0.4',
          overflowX: 'hidden',
          display: 'flex',
          width: '87vw',
          alignSelf: 'center',
          // maxWidth: '100vw',
          overflow: 'hidden',
          borderRadius: '12px',
          fontSize: 20,
          backgroundColor: 'transparent',
          height: '12.4%',
          minHeight: 70,
          // display: 'flex',
          flexDirection: 'row',
          padding: '2rem, 3rem',
          alignContent: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          justifyItems: 'center',
        },
        btnContainer: {
          flexDirection: 'row',
        },
        navIcon: {
          // fdlkj:'Adrian Codes',
          height: '80%',
          width: 'auto',
          aspectRatio: 'maintain',
        },
        'aspect-maintain': {
          aspectRatio: 'maintain',
        },
        'justify-items-center': {
          justifyItems: 'center',
        },
        navBtn: {
          border: 'none',
          // backgroundColor: 'red',
          // padding: '2rem 3rem',
          color: 'white',
          alignSelf: 'center',
          justifySelf: 'center',
        },
        'nav-text': `text-base leading-relaxed tracking-wide font-bold text-blue-500 font-sans`,
        'resize-repeat': {
          resizeMode: `contain`,
        },
        'd-none': {
          display: 'none',
        },
        logoTagline: `py-1 px-1 text-md font-sans`,
        'text-logo': `font-sans text-large`,
        ctaButton: {
          fontSize: '26px',
          backgroundColor: 'blue-400',
        },
        dNone: {display: 'none'},
        header: {
          fontSize: '42px',
          // spacing:
        },
        'resize-cover': {
          resizeMode: 'cover',
        },
        scroll: {width: '100vw'},
        contents: {
          display: 'contents',
        },
        // 'section-mb': `flex flex-column md:flex-row justify-between align-center` ,
        section: {
          // backgroundColor: 'red',
          border: '1px solid white',
          alignSelf: 'center',
          width: '85%',
          // height: '80vh',
          // marginTop: 8,
          // marginBottom: 8,
          borderRadius: 20,
          // display: 'flex',
          // flexDirection: 'column'
        },
        'place-content-end': {
          placeContent: 'end',
        },
        sectionButton: `bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`,
        sectionButtonAlt: `block px-4 py-2 text-sm text-gray-700`,
        sectionMobile: {
          height: '87vh',
          width: '96vw',
          margin: '4rem',
          padding: '4rem 6rem',
        },
        // sectionWebLg: {
        //   height: '80&vh',
        //   width: '100vw',
        //   margin: '4rem',
        //   padding: '4rem 6rem',
        // },
        sectionWeb: {
          height: '80%',
          width: '90%',
          alignSelf: 'center',
          margin: '4rem',
          padding: '4rem 6rem',
        },
        glass: {},
        form: `mb-4 md:flex md:flex-wrap md:justify-between`,
        formDiv: `flex flex-col mb-6 md:w-full`,
        formLabel: `mb-2 uppercase font-bold text-lg text-gray-100`,
        formInput: `border py-2 px-3 text-gray-900`,
        formButton: ` bg-teal-500 hover:bg-teal-800 text-white uppercase text-lg mx-auto p-4 rounded`,
        'resize-contain': {
          resizeMode: `contain`,
        },
        grid: {
          display: 'grid',
        },
        'grid-cols-1': {
          gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
        },
        'grid-cols-2': {
          gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
        },
        'grid-cols-3': {
          gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
        },
        'grid-cols-4': {
          gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
        },
        'grid-cols-5': {
          gridTemplateColumns: 'repeat(5, minmax(0, 1fr))',
        },
        'grid-cols-6': {
          gridTemplateColumns: 'repeat(6, minmax(0, 1fr))',
        },
        'grid-cols-7': {
          gridTemplateColumns: 'repeat(7, minmax(0, 1fr))',
        },
        'grid-cols-8': {
          gridTemplateColumns: 'repeat(8, minmax(0, 1fr))',
        },
        'grid-cols-9': {
          gridTemplateColumns: 'repeat(9, minmax(0, 1fr))',
        },
        'grid-cols-10': {
          gridTemplateColumns: 'repeat(10, minmax(0, 1fr))',
        },
        'grid-cols-11': {
          gridTemplateColumns: 'repeat(11, minmax(0, 1fr))',
        },
        'grid-cols-12': {
          gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
        },
        'col-auto': {gridColumn: 'auto'},
        'col-span-1': {gridColumn: 'span 1 / span 1'},
        'col-span-2': {gridColumn: 'span 2 / span 2'},
        'col-span-3': {gridColumn: 'span 3 / span 3'},
        'col-span-4': {gridColumn: 'span 4 / span 4'},
        'col-span-5': {gridColumn: 'span 5 / span 5'},
        'col-span-6': {gridColumn: 'span 6 / span 6'},
        'col-span-7': {gridColumn: 'span 7 / span 7'},
        'col-span-8': {gridColumn: 'span 8 / span 8'},
        'grid-rows-1': {
          gridTemplateRows: 'repeat(1, minmax(0, 1fr))',
        },
        'grid-rows-2': {
          gridTemplateRows: 'repeat(2, minmax(0, 1fr))',
        },
        'grid-rows-3': {
          gridTemplateRows: 'repeat(3, minmax(0, 1fr))',
        },
        'grid-rows-4': {
          gridTemplateRows: 'repeat(4, minmax(0, 1fr))',
        },
        'grid-rows-5': {
          gridTemplateRows: 'repeat(5, minmax(0, 1fr))',
        },
        'grid-rows-6': {
          gridTemplateRows: 'repeat(6, minmax(0, 1fr))',
        },
        'grid-rows-7': {
          gridTemplateRows: 'repeat(7, minmax(0, 1fr))',
        },
        'grid-rows-8': {
          gridTemplateRows: 'repeat(8, minmax(0, 1fr))',
        },
        'grid-rows-9': {
          gridTemplateRows: 'repeat(9, minmax(0, 1fr))',
        },
        'grid-rows-10': {
          gridTemplateRows: 'repeat(10, minmax(0, 1fr))',
        },
        'grid-rows-11': {
          gridTemplateRows: 'repeat(11, minmax(0, 1fr))',
        },
        'grid-rows-12': {
          gridTemplateRows: 'repeat(12, minmax(0, 1fr))',
        },
        'row-auto': {gridRow: 'auto'},
        'row-span-1': {gridRow: 'span 1 / span 1'},
        'row-span-2': {gridRow: 'span 2 / span 2'},
        'row-span-3': {gridRow: 'span 3 / span 3'},
        'row-span-4': {gridRow: 'span 4 / span 4'},
        'row-span-5': {gridRow: 'span 5 / span 5'},
        'row-span-6': {gridRow: 'span 6 / span 6'},
        'row-span-7': {gridRow: 'span 7 / span 7'},
        'row-span-8': {gridRow: 'span 8 / span 8'},
        'gap-4': {
          gap: '1rem',
        },
        'gap-5': {
          gap: '1.25rem',
        },
        'gap-6': {
          gap: '1.5rem',
        },
        'gap-8': {
          gap: '2rem',
        },
        'scale-50': {
          transform: [{scale: '0.5'}],
        },
        'scale-60': {
          transform: [{scale: '0.6'}],
        },
        'scale-75': {
          transform: [{scale: '0.75'}],
        },
        'scale-80': {
          transform: [{scale: '0.80'}],
        },
        'scale-85': {
          transform: [{scale: '0.85'}],
        },
        'scale-9': {
          transform: [{scale: '0.9'}],
        },
        'scale-100': {
          transform: [{scale: '1.00'}],
        },
        'scale-115': {
          transform: [{scale: '1.15'}],
        },
        'scale-125': {
          transform: [{scale: '1.25'}],
        },
        'scale-150': {
          transform: [{scale: '1.5'}],
        },
        'backdrop-opacity-20': {backdropOpacity: 'opacity(0.2)'},
        btn1: `px-4 py-1 rounded-full text-white`,
        'body-text': `font-serif leading-relaxed tracking-wide text-gray-900`,
        contactForm: {
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI" ,Roboto, Oxygen,Ubuntu, Cantarell, "Open Sans,"Helvetica Neue", sans-serif',
        },
        dropShadow: {
          overflow: 'visible',
          shadowOffset: {
            width: 0,
            height: 25,
          },
          shadowRadius: 2,
          shadowOpacity: '0.8',
        },
      });
    }),
  ],
  // content: [],
}



