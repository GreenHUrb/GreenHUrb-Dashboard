import { IPayment } from "../interfaces/IPayment";

export const paymentTableHead = ["Date", "Product Name", "Order No", "Amount", "Status", ""];

export const dummyPayments: IPayment[] = [
  {
    date: "2023-09-01",
    productName: "Product A",
    orderNo: "12345",
    amount: 1500,
    status: "received"
  },
  {
    date: "2023-09-02",
    productName: "Product B",
    orderNo: "67890",
    amount: 7500,
    status: "withdrawn"
  },
  {
    date: "2023-09-03",
    productName: "Product C",
    orderNo: "54321",
    amount: 50.25,
    status: "received"
  },
  {
    date: "2023-09-04",
    productName: "Product D",
    orderNo: "98765",
    amount: 120.75,
    status: "withdrawn"
  }
  // Repeat the pattern with unique order numbers and dates...
];

// Generate 96 more transactions with unique order numbers and dates
for (let i = 0; i < 96; i++) {
  const date = new Date("2023-09-05");
  date.setDate(date.getDate() + i); // Increment the date for each transaction
  const orderNo = (parseInt(dummyPayments[i].orderNo) + 1).toString();
  const amount = dummyPayments[i].amount + 10;

  dummyPayments.push({
    date: date.toISOString().substring(0, 10),
    productName: `Product ${String.fromCharCode(65 + (i % 4))}`,
    orderNo,
    amount,
    status: i % 2 === 0 ? "received" : "withdrawn"
  });
}
