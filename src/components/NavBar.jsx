import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
const NavBar = ({ setPostsFiltered, posts }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isClickedGuests, setIsClickedGuests] = useState(false);
  const [isClickedLocation, setIsClickedLocation] = useState(false);
  const [numberOfAdults, setNumberOfAdults] = useState(0);
  const [numberOfChildren, setNumberOfChildren] = useState(0);
  const [cityFilter, setCityFilter] = useState("");
  const [guestsFilter, setGuestsFilter] = useState(0);
  const handleClick = () => {
    setIsClicked(true);
  };
  const handleGuestsClickedBtn = () => {
    setIsClickedGuests(true);
    setIsClickedLocation(false);
  };
  const handleClickLocation = () => {
    setIsClickedLocation(true);
    setIsClickedGuests(false);
  };
  useEffect(() => {
    filterAccommodations();
  }, [cityFilter, guestsFilter]);

  const filterAccommodations = () => {
    const filteredAccommodations = posts.filter((accommodation) => {
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

    setPostsFiltered(filteredAccommodations);
  };

  const handleSearchClick = () => {
    setIsClicked(false);
  };
  useEffect(() => {
    setGuestsFilter(numberOfAdults + numberOfChildren);
  }, [numberOfAdults, numberOfChildren]);

  const uniqueCities = Array.from(new Set(posts.map((post) => post.city)));

  const handleIncrementAdults = () => {
    setNumberOfAdults(numberOfAdults + 1);
  };

  const handleDecrementAdults = () => {
    if (numberOfAdults > 0) {
      setNumberOfAdults(numberOfAdults - 1);
    }
  };
  const handleIncrementChildren = () => {
    setNumberOfChildren(numberOfChildren + 1);
  };

  const handleDecrementChildren = () => {
    if (numberOfChildren > 0) {
      setNumberOfChildren(numberOfChildren - 1);
    }
  };
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
              <div
                className={
                  !cityFilter
                    ? `text-stone-300 text-sm font-normal`
                    : `text-zinc-800 text-sm font-normal`
                }
              >
                {!cityFilter ? `Location` : `${cityFilter}, Finland`}
              </div>
            </button>
            <button
              className="w-[40%] border border-y-[#F2F2F2] h-[100%] p-4 "
              onClick={handleClick}
            >
              <div
                className={
                  !guestsFilter
                    ? `text-stone-300 text-sm font-normal`
                    : `text-zinc-800 text-sm font-normal`
                }
              >
                {!guestsFilter ? `Add guest` : `${guestsFilter} guests`}
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
          <div className="w-[80%] h-14  rounded-2xl shadow my-24 mx-24 flex flex-row  max-md:flex-col max-md:justify-between justify-around">
            <div
              className="h-[100%] px-10 flex  flex-col  "
              onClick={handleClickLocation}
            >
              <div className="font-extrabold uppercase">
                <div className="text-zinc-800 text-[9px] font-extrabold uppercase mt-2">
                  Location
                </div>
                <div
                  className={
                    !cityFilter
                      ? `text-stone-300 text-sm font-normal`
                      : `text-zinc-800 text-sm font-normal`
                  }
                >
                  {!cityFilter ? `Add Location` : `${cityFilter}, Finland`}
                </div>
              </div>
              {isClickedLocation ? (
                <div className=" mt-12  max-md:mt-32">
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
              ) : (
                <></>
              )}
            </div>
            <div
              className="h-[100%] px-10 flex  flex-col  max-md:mb-4 "
              onClick={handleGuestsClickedBtn}
            >
              <div className=" rounded-2xl  w-full h-full">
                <div className="text-zinc-800 text-[9px] font-extrabold uppercase mt-2">
                  Guests
                </div>

                <div
                  className={
                    guestsFilter <= 0
                      ? `text-stone-300 text-sm font-normal`
                      : `text-zinc-800 text-sm font-normal`
                  }
                >
                  {!guestsFilter ? `Add guest` : `${guestsFilter} guests`}
                </div>
              </div>
              {isClickedGuests ? (
                <div className=" my-12 max-md:flex max-md:flex-row max-md:my-32">
                  <div className="max-md:mx-8">
                    <div className="flex flex-col ">
                      <span className="text-zinc-800 text-sm font-bold">
                        Adults
                      </span>
                      <span className="text-stone-300 text-sm font-normal">
                        Ages 13 or above
                      </span>
                    </div>
                    <div className=" flex flex-row my-4  justify-between w-[100px]">
                      <button
                        className="w-[23px] h-[23px] rounded border border-zinc-500 "
                        onClick={handleDecrementAdults}
                        disabled={numberOfAdults <= 0}
                      >
                        -
                      </button>
                      <span>{numberOfAdults}</span>
                      <button
                        className="w-[23px] h-[23px] rounded border border-zinc-500"
                        onClick={handleIncrementAdults}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-col">
                      <span className="text-zinc-800 text-sm font-bold">
                        Children
                      </span>
                      <span className="text-stone-300 text-sm font-normal">
                        Ages 2-12
                      </span>
                    </div>
                    <div className="flex flex-row my-4  justify-between w-[100px]">
                      <button
                        className="w-[23px] h-[23px] rounded border border-zinc-500"
                        onClick={handleDecrementChildren}
                        disabled={numberOfChildren <= 0}
                      >
                        -
                      </button>
                      <span>{numberOfChildren}</span>
                      <button
                        className="w-[23px] h-[23px] rounded border border-zinc-500"
                        onClick={handleIncrementChildren}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <></>
              )}
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
