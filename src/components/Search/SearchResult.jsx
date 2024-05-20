/* eslint-disable react/prop-types */

import SingleItemResult from "./SingleItemResult";

const SearchResult = ({ searchItems }) => {
  return (
    <>
      {searchItems?.map((item, index) => (
        <div className=" border border-gray-200 rounded mb-2.5" key={index}>
          <SingleItemResult singleItem={item}></SingleItemResult>
        </div>
      ))}
    </>
  );
};

export default SearchResult;
