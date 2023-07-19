const Accomodation = ({
  city,
  country,
  title,
  rating,
  maxGuests,
  type,
  beds,
  photo,
  superHost,
}) => {
  return (
    <div className="w-[30%] mb-5 max-md:w-[45%] max-sm:w-[100%] ">
      <img
        src={photo ? photo : null}
        alt=""
        className="w-[100%] h-[265px] rounded-lg"
      />
      <div className="flex flex-col">
        <div className="flex flex-row my-4 justify-between ">
          {superHost ? (
            <p className="rounded-full border-solid border-2 border-[#a19d9d] p-1   text-xs">
              SUPER HOST
            </p>
          ) : null}
          <p>{type}</p>
          {beds && <p>{beds} beds</p>}
          <div className=" flex flex-row  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="#f34e4eea"
              className="bi bi-star-fill"
              viewBox="0 0 16 16"
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
            <p className="ml-4">{rating}</p>
          </div>
        </div>

        <div>
          <h1 className="font-semibold text-lg">{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default Accomodation;
