/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('https://img.freepik.com/free-photo/portrait-artificial-intelligence-app-developer-sitting-down-typing-laptop-fixing-glasses-looking-up-smiling-camera-programer-using-portable-computer-innovating-cloud-computing_482257-40643.jpg?size=626&ext=jpg&ga=GA1.2.405634466.1654584137')"
      }
    },
  },
  plugins: [],
}
