export const convertDataToDropdownData = <T>(data: T[], label: keyof T, value: keyof T) => {
  const result: { value: string; label: string }[] = [];
  data?.forEach(elem => {
    result.push({
      value: elem[value] as string,
      label: elem[label] as string
    });
  });
  return result;
};

export const getDropdownValue = <T>(data: T[], label_key: keyof T, value: keyof T, item: any) => {
  let result: { value: string; label: string } | null = null;

  const response = data?.find(elem => elem[value] === item);

  if (response) {
    result = {
      label: String(response[label_key]),
      value: String(response[value])
    };
  }

  return result;
};
