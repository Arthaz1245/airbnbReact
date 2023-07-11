import logo from "../assets/logo.png";
const NavBar = () => {
  return (
    <div className="mx-20 mtflex flex-row max-md:flex-col justify-between">
      <div>
        <img src={logo} alt="" className="w-[96px] h-[18.75px]" />
      </div>
      <div className="flex flex-row  border-[1px] border-[#F2F2F2] p-4 h-14 w-[297px] rounded-2xl">
        <button>Add location</button>
        <button> Add guests</button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#f34e4eea"
          className="bi bi-search"
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
      </div>
    </div>
  );
};

export default NavBar;
