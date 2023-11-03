import { useState } from "react";
import SearchBar from "../components/SearchBar";
import { data, languages } from "../data";
import LanguageSelection from "../components/LanguageSelection";
import MovieCard from "../components/MovieCard";
import "../styles/MoviePages.css";

type MovieType = {
  id: number;
  movie_name: string;
  like: string;
  imgSrc: string;
  uaCategory: string;
  language: string;
};

const MoviesPage = () => {
  const [searchVal, setSearchVal] = useState<string>("");
  const [listData, setListData] = useState<MovieType[]>(data);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [emptyMessage, setEmptyMessage] = useState<string>("");

  const originalData = data;

  const handleSearch = (val: string) => {
    setSearchVal(val);
    const filterData: MovieType[] = originalData.filter((d) =>
      d.movie_name.toLowerCase().includes(val.toLowerCase())
    );
    setListData(filterData);
    filterData.length === 0
      ? setEmptyMessage(`No movies found for ${val}`)
      : setEmptyMessage("");
  };

  const handleLanguageFilter = (val: string[]) => {
    console.log(val);
    setSelectedLanguages(val);
    if (val.length === 0) {
      setListData(originalData);
    } else {
      const filterList = originalData.filter((d: MovieType) =>
        val.includes(d.language)
      );
      filterList.length === 0
        ? setEmptyMessage(`No movies found for language: ${val[0]}`)
        : setEmptyMessage("");
      setListData(filterList);
    }
  };

  return (
    <div className="movie-listing-wrapper flex bg-[#000]">
      <div className="listing-header">
        <p>Movies in Mumbai</p>
        <SearchBar searchedValue={searchVal} handleSearch={handleSearch} />
      </div>
      <div className="language-selection-wrapper">
        <LanguageSelection
          listOfLanguages={languages}
          selectedLanguages={selectedLanguages}
          handleSelection={handleLanguageFilter}
        />
      </div>
      <div className="movies-listing-container">
        {listData.length === 0 ? (
          <div>{emptyMessage}</div>
        ) : (
          <>
            {listData.map((d: MovieType) => (
              <MovieCard data={d} key={d.id} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default MoviesPage;
