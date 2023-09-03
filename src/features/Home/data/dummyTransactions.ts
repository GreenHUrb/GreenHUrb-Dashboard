import { ITransaction } from "../interfaces/ITransaction";
export const transactionTableHead = [
  "Date",
  "Product Name",
  "Order No",
  "Amount",
  "Status",
  "Customer Name",
  ""
];

export const dummyTransactions: ITransaction[] = [
  {
    date: "2023-09-01",
    productName: "Product A",
    orderNo: "12345",
    amount: 1500,
    status: "pending",
    customerName: "John Doe"
  },
  {
    date: "2023-09-02",
    productName: "Product B",
    orderNo: "67890",
    amount: 7500,
    status: "successful",
    customerName: "Jane Smith"
  },
  {
    date: "2023-09-03",
    productName: "Product C",
    orderNo: "54321",
    amount: 50.25,
    status: "successful",
    customerName: "Bob Johnson"
  },
  {
    date: "2023-09-04",
    productName: "Product D",
    orderNo: "98765",
    amount: 120.75,
    status: "cancelled",
    customerName: "Alice Brown"
  }
  // Repeat the pattern with unique order numbers and dates...
];

// Generate 96 more transactions with unique order numbers and dates
for (let i = 0; i < 96; i++) {
  const date = new Date("2023-09-05");
  date.setDate(date.getDate() + i); // Increment the date for each transaction
  const orderNo = (parseInt(dummyTransactions[i].orderNo) + 1).toString();
  const amount = dummyTransactions[i].amount + 10;

  dummyTransactions.push({
    date: date.toISOString().substring(0, 10),
    productName: `Product ${String.fromCharCode(65 + (i % 4))}`,
    orderNo,
    amount,
    status: i % 2 === 0 ? "successful" : "pending",
    customerName: `Customer ${i + 1}`
  });
}
