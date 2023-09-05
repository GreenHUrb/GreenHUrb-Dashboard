interface DayOption {
  id: string;
  name: string;
}

export const availabilityOptions: DayOption[] = [
  { id: "now", name: "Now" },
  { id: "2-weeks", name: "2 weeks" },
  { id: "4-weeks", name: "4 weeks" },
  { id: "1-month", name: "1 month" },
  { id: "2-months", name: "2 months" },
  { id: "3-months", name: "3 months" },
  { id: "4-months", name: "4 months" },
  { id: "6-months", name: "6 months" },
  { id: "1-year", name: "1 year" }
];
