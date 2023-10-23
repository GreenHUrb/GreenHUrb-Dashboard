import "./styles.scss";
import { Input } from "../form";
import { useSearch } from "./useSearch";
import { ISearchProps } from "./types";
import { AiOutlineClose } from "react-icons/ai";

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
      <Input
        id="Search"
        label=""
        error={null}
        rightIcon={
          <div style={{ marginLeft: "10px", cursor: "pointer" }} onClick={clearSearch}>
            {searchKeyword && <AiOutlineClose />}
          </div>
        }
        inputProps={{
          placeholder: "Search .....",
          value: searchKeyword,
          onChange: e => handleSearch(e)
        }}
      />
    </div>
  );
};
