export interface ITransaction {
  date: string;
  productName: string;
  orderNo: string;
  amount: number;
  status: ITransactionStatus;
  customerName: string;
}

export type ITransactionStatus  = 'successful' | 'pending' | 'cancelled'