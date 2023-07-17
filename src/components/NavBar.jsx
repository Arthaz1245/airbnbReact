import { useState } from "react";
import logo from "../assets/logo.png";
const NavBar = ({
  postsFiltered,
  setPostsFiltered,
  posts,
  setIsFiltered,
  isFiltered,
}) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isClickedLocation, setIsClickedLocation] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
    setIsClickedLocation(!isClickedLocation);
  };
  const uniqueCities = Array.from(new Set(posts.map((post) => post.city)));

  return (
    <>
      {!isClicked ? (
        <div className="mx-20 mt-10 flex flex-row max-md:flex-col justify-between">
          <div>
            <img src={logo} alt="" className="w-[96px] h-[18.75px]" />
          </div>
          <div className="flex flex-row  border-[1px] border-[#F2F2F2] h-14 w-[297px] rounded-2xl max-md:m-10 ">
            <button
              className="w-[40%] border border-y-[#F2F2F2] h-[100%] p-4 text-sm"
              onClick={handleClick}
            >
              Add location
            </button>
            <button className="w-[40%] border border-y-[#F2F2F2] h-[100%] p-4 text-sm">
              Add guests
            </button>
            <div className="w-[20%] p-4">
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
        </div>
      ) : (
        <div className="w-full h-[40%] bg-white">
          <div className="w-[80%] h-14 bg-white rounded-2xl shadow my-24 mx-24 flex flex-row justify-around">
            <div className="border border-y-[#F2F2F2] h-[100%] px-10 flex items-center">
              <span className="text-sm" onClick={handleClick}>
                Add location
              </span>
            </div>
            <div className="border border-y-[#F2F2F2] h-[100%] px-10 flex items-center">
              <span className="text-sm">Add guests</span>
            </div>
            <div className="border border-y-[#F2F2F2] h-[100%] px-10 text-sm flex items-center">
              <button className="px-8 py-3 bg-rose-500 rounded-2xl shadow text-zinc-100 text-sm font-bold flex flex-row ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#F2F2F2"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
                <span className="mx-3"> Search</span>
              </button>
            </div>
          </div>
          {isClickedLocation &&
            uniqueCities.map((post, k) => (
              <div key={k} className="m-5">
                <p className="text-neutral-600 text-sm font-normal">
                  {post}, Finland
                </p>
              </div>
            ))}
        </div>
      )}
    </>
  );
};

export default NavBar;
