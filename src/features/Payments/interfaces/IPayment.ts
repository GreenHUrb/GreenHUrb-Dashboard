export interface IPayment {
  date: string;
  productName: string;
  orderNo: string;
  amount: number;
  status: PaymentStatus;
}

export type PaymentStatus = "received" | "withdrawn";
