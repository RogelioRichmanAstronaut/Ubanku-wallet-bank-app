export default interface iTransaction {
  transactionType: string;
  transactionName: string;
  transactionDate: string;
  transactionStatus: string;
  transactionId: string;
  transactionPaymentMethod?: string;
  transactionValue: number;
}
