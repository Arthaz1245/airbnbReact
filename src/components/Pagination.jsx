const Pagination = ({
  totalPosts,
  postPerPage,
  setCurrentPage,
  currentPage,
  setPostPerpage,
}) => {
  function handlePrev(e) {
    e.preventDefault();
    setCurrentPage(currentPage - 1);
  }
  function handleNext(e) {
    e.preventDefault();
    setCurrentPage(currentPage + 1);
  }
  function changePostPerPage(e) {
    e.preventDefault();
    setPostPerpage(e.target.value);
  }

  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className="flex items-center justify-center space-x-4 mt-4">
      <button
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
        onClick={(e) => handlePrev(e)}
        disabled={currentPage <= 1}
      >
        {`<Prev`}
      </button>
      {pages.map((page, index) => {
        return (
          <button
            onClick={() => setCurrentPage(page)}
            key={index}
            className={`${
              page === currentPage
                ? "bg-[#f34e4eea] hover:bg-[#f92929]] text-white"
                : "bg-gray-300 hover:bg-gray-400 text-gray-800"
            } font-bold py-2 px-4 rounded`}
          >
            {page}
          </button>
        );
      })}
      <button
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
        onClick={(e) => handleNext(e)}
        disabled={currentPage >= pages.length}
      >
        {`Next>`}
      </button>

      <div>
        <select onChange={changePostPerPage}>
          <option value="default" disabled="disabled"></option>
          <option value="6">6</option>
          <option value="9">9</option>
        </select>
      </div>
    </div>
  );
};

export default Pagination;
