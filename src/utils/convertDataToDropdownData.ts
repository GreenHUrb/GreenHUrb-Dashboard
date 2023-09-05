export const convertDataToDropdownData = <T>(data: T[],label: keyof T, value: keyof T, ) => {
  const result: { value: string; label: string }[] = [];
  data?.forEach(elem => {
    result.push({
      value: elem[value] as string,
      label: elem[label] as string
    });
  });
  return result;
};
