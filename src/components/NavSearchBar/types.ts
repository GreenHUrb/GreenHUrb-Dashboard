import { Dispatch, SetStateAction } from "react";

export interface ISearchInputProps {
  setIsSearchOpen: Dispatch<SetStateAction<boolean>>;
  isSearchOpen: boolean;
}
