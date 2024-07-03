import iTransaction from './iTransaction';

export default interface iWithdrawal extends iTransaction {
  sentTo: string;
}
