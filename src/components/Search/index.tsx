import "./styles.scss";
import { Input } from "../form";
import { useSearch } from "./useSearch";
import { ISearchProps } from "./types";
import { AiOutlineClose } from "react-icons/ai";

import SearchActive from "@icons/searchIconActive.svg";

export const Search = <T extends Record<string, any>, K extends keyof T>({
  initialState,
  setState,
  conditionKeyword,
  resetState
}: ISearchProps<T, K>): JSX.Element => {
  const { clearSearch, handleSearch, searchKeyword } = useSearch({
    initialState,
    setState,
    conditionKeyword,
    resetState
  });

  return (
    <div className="search_bar">
      <span className="search_bar_icon">
        <img src={SearchActive} />
      </span>
      <input
        type="text"
        className="search"
        placeholder="Search ....."
        value={searchKeyword}
        onChange={handleSearch}
      />
      <span className="search_bar_clear_icon" onClick={clearSearch}>
        {searchKeyword && <AiOutlineClose />}
      </span>
    </div>
  );
};
