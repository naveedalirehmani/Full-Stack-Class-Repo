import axios from "axios";

export const rickAndMorty = async (currentPageNumber) => {
  const res = await axios.get(
    `https://rickandmortyapi.com/api/character/?page=${currentPageNumber}`
  );

  return res.data;
};
