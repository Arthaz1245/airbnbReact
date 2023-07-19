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

  const [cityFilter, setCityFilter] = useState("");
  const [guestsFilter, setGuestsFilter] = useState("");
  const handleClick = () => {
    setIsClicked(true);
  };
  const handleSearchClick = () => {
    setPostsFiltered(filteredAccommodations);
    setIsClicked(false);
  };
  const onChangeLocation = (e) => {
    const value = e.target.value;
    setCityFilter(value);
  };
  const filteredAccommodations = postsFiltered.filter((accommodation) => {
    if (cityFilter && guestsFilter) {
      return (
        accommodation.city.toLowerCase() === cityFilter.toLowerCase() &&
        accommodation.maxGuests >= Number(guestsFilter)
      );
    } else if (cityFilter) {
      return accommodation.city.toLowerCase() === cityFilter.toLowerCase();
    } else if (guestsFilter) {
      return accommodation.maxGuests >= Number(guestsFilter);
    } else {
      return true;
    }
  });

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
              <div className="text-stone-300 text-sm font-normal">Location</div>
            </button>
            <button
              className="w-[40%] border border-y-[#F2F2F2] h-[100%] p-4 "
              onClick={handleClick}
            >
              <div className="text-stone-300 text-sm font-normal">
                Add guests
              </div>
            </button>
            <button className="w-[20%] p-4" onClick={handleClick}>
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
            </button>
          </div>
        </div>
      ) : (
        <div className="w-full h-[40%] bg-white pb-28 ">
          <div className="w-[80%] h-14 bg-white rounded-2xl shadow my-24 mx-24 flex flex-row  max-md:flex-col  justify-around">
            <div className="h-[100%] px-10 flex  flex-col   max-md:mb-4">
              <div className="mt-2 text-zinc-800 text-sm font-extrabold uppercase">
                location
              </div>
              <input
                placeholder="Add location"
                onChange={onChangeLocation}
                type="text"
                value={cityFilter}
              />
              <div className=" mt-12 ">
                {uniqueCities.map((post, k) => (
                  <button
                    key={k}
                    className="mx-2 my-5 flex flex-row text-neutral-600 text-sm font-normal"
                    value={post}
                    onClick={() => {
                      setCityFilter(post);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#4F4F4F"
                      className="bi bi-geo-alt mx-2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                      <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    </svg>
                    {post}, Finland
                  </button>
                ))}
              </div>
            </div>
            <div className="h-[100%] px-10 flex  flex-col  max-md:mb-4">
              <div className="mt-2 text-zinc-800 text-sm font-extrabold uppercase">
                Guests
              </div>
              <input placeholder="Search destinations" />
            </div>
            <div className=" h-[100%] px-10 text-sm flex items-center">
              <button
                className="px-8 py-3 bg-rose-500 rounded-2xl shadow text-zinc-100 text-sm font-bold flex flex-row "
                onClick={handleSearchClick}
              >
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
        </div>
      )}
    </>
  );
};

export default NavBar;
