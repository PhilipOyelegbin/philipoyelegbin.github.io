/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('https://img.freepik.com/free-photo/portrait-artificial-intelligence-app-developer-sitting-down-typing-laptop-fixing-glasses-looking-up-smiling-camera-programer-using-portable-computer-innovating-cloud-computing_482257-40643.jpg?size=626&ext=jpg&ga=GA1.2.405634466.1654584137')",
        hero0: "url('https://img.freepik.com/free-photo/sofware-developer-thinking-while-touching-beard-while-typing-laptop-sitting-desk-with-multiple-screens-parsing-code-focused-database-admin-working-with-team-coding-background_482257-33556.jpg?size=626&ext=jpg&ga=GA1.2.405634466.1654584137')",
        hero1: "url('https://img.freepik.com/free-photo/hooded-computer-hacker-stealing-information-with-laptop_155003-1918.jpg?size=626&ext=jpg&ga=GA1.2.405634466.1654584137')",
        hero2: "url('https://img.freepik.com/free-photo/african-american-it-employee-with-headset-working-remote-from-home_482257-19329.jpg?size=626&ext=jpg&ga=GA1.2.405634466.1654584137')",
      }
    },
  },
  plugins: [],
}
