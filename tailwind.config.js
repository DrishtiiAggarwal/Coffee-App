/** @type {import('tailwindcss').Config} */
module = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily:{
        'inter':['Inter-Regular','sans-serif'],
        'inter-bold':['Inter-Bold','sans-serif'],
        'inter-extrabold':['Inter-Extrabold','sans-serif'],
        'inter-medium':['Inter-Medium','sans-serif'],
        'inter-light':['Inter-Light','sans-serif'],
        'inter-italic':['Inter-Italic','sans-serif'],
        'inter-semibold':['Inter-semibold','sans-serif'],
        'inter-thin':['Inter-Thin','sans-serif'],
        'inter-black':['Inter-Black','sans-serif'],
        'inter-extralight':['Inter-ExtraLight','sans-serif'],
      },
      colors:{
        "skinColor":"#f9e7d9",
        "brownishPink":"#ab6067",
        "cream":"#f1f0ee",
        "brown":"#2b2118",
        "darkGrey":"#2c3c4a"
      }
    },
  },
  plugins: [],
}

export default module;