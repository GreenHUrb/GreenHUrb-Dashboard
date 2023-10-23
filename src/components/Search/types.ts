export interface ISearchProps<T extends Record<string, any>, K extends keyof T> {
  initialState: T[];
  setState: React.Dispatch<React.SetStateAction<T[]>>;
  conditionKeyword: K;
  resetState: T[];
}
