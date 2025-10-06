
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      clipPath: {
        hexagon: "polygon(50% 0%, 100% 38%, 100% 100%, 0 100%, 0% 38%)",
      },


      keyframes: {
        popup: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.1)', opacity: '0.9' },
        },
      },
      animation: {
        popup: 'popup 1s ease-in-out infinite',
        'popup-twice': 'popup 2s ease-in 2',
        'popup-once': 'popup 2s ease-in 1',
      },


      fontFamily: {
        baloo:["'Baloo'"],
        comic:["'comicbook'"]
       },


         


      screens: {
        zIndex: {
          '60': '60',
          '9999': '9999', // Custom high z-index value
        },
        screens: {
          // Reuse Tailwind's default breakpoints
          am: '400px',
          sm:  '550px',  
          md:  '768px' , 
          lg:  '1024px', 
          xl:  '1280px',
        },



      },
      borderImage: {
        'custom-gradient1': 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,161,0,1) 100%)', 
      
        'custom-gradient2': 'linear-gradient(0deg, rgba(217,217,217,1) 50%, rgba(0,0,0,1) 100%)', 
      },
      backgroundImage: {
        'border-gradient': 'linear-gradient(to right, #FF3333 0%, #000000 100%);',
        'text-custom-gradient': ' linear-gradient(to right, #FF3333 0%, #000000 100%);',
        'button-custom-gradient': 'linear-gradient(90deg, #FF3333 0%, #801A1A 50%, #000000 100%);',
        'token-custom-gradient': '   linear-gradient(90deg, # 0%, #801a1a 50%, #000000 100%);',
'roadmap-circle-gradient': ' linear-gradient(110deg, rgba(255,255,255,1) 0%, rgba(255,0,0,0.36) 30%, rgba(255,86,86,1) 66%, rgba(255,51,51,0.65) 100%, rgba(255,0,0,1) 100%);',
'roadmap-circle-gradient2': ' linear-gradient(110deg, rgba(40,0,1,1) 0%, rgba(255,0,0,1) 100%);',
'roadmap-circle-gradient3': ' linear-gradient(110deg, rgba(255,0,0,1) 0%, rgba(40,0,1,1)  100%);',
        'custom-gradient': 'linear-gradient(180deg, # 0%, #000000 100%); ',
        // 'usecase-gradient': 'linear-gradient(90deg, #FF3333 0%,  #000000 100%)',       
      },


      scrollbar: {
        width: {
          thin: '1px', // Adjust width as needed background: linear-gradient(0deg, #D9D9D9, #D9D9D9),
          
          
        },


        color: {
          track: 'bg-gray-200', // Track color
          thumb: 'bg-blue-500', // Thumb color
          hover: 'bg-blue-700', // Thumb hover color
        },
      },
      
      boxShadow: {
        'custom-drop': '0px 0px 5px #FF0000', // Drop shadow
        'custom-inner': 'inset 0px 4px 5px 5px 0.5  #FF0000', // Inner shadow
        'custom-purple': '0px 0px 25px 23px rgba(255, 161, 0, 1)',
        'custom-token': '0px 0px 20px 11px rgba(255, 237, 73, 1)',
        'inner-custom': 'inset 0 10 15px 0.5 #fffff',
      },




      // roadmap card border properties
   
    }
    
  },
  plugins: [ require('tailwind-scrollbar')  ],
}