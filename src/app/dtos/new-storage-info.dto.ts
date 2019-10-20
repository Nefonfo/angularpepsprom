

interface Balance {
  quantity: number;
  unitCost: number;
  total: number;
}
export class NewStorageInfoDto {
  idRefTo: string;
  operation: string;
  quantity: number;
  unitCost: number;
  type: string;
  existence: number;
  balance: Balance;
}
