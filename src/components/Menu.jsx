// Menu.js
const Menu = () => (

    <div>
      <ul className="flex space-x-6 bg-[#171719] text-lg font-semibold justify-center font-spaceGrotesk">
        <li>
          <a href="#home" className="text-sm text-[#7e7e7f] hover:text-blue-500 focus:text-white">Home</a>
        </li>
        <li>
          <a href="#service" className="text-sm text-[#7e7e7f] hover:text-blue-500 focus:text-white">Service</a>
        </li>
        <li>
          <a href="#projects" className="text-sm text-[#7e7e7f] hover:text-blue-500 focus:text-white">Projects</a>
        </li>
        <li>
          <a href="#about" className="text-sm text-[#7e7e7f] hover:text-blue-500 focus:text-white">About</a>
        </li>
        <li>
          <a href="#contact" className="text-sm text-[#7e7e7f] hover:text-blue-500 focus:text-white">Contact</a>
        </li>
      </ul>
    </div>
  );
  
  export default Menu;
  