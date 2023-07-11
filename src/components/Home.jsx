import AcommodationsData from "../stays.json";
import { useState } from "react";
import Accomodations from "./Accomodations";
import Pagination from "./Pagination";
import NavBar from "./NavBar";
const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(6);
  // const [order, setOrder] = useState("");
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = AcommodationsData.slice(firstPostIndex, lastPostIndex);

  return (
    <div>
      <NavBar />
      <Accomodations accomodations={currentPosts} />
      <Pagination
        totalPosts={AcommodationsData.length}
        postPerPage={postPerPage}
        setPostPerpage={setPostPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Home;
