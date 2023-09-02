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
    date: "2023/09/01",
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
];
