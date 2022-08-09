export type CategoryType = 'Groceries' | 'College' | 'Payments' | 'Uncategorized';

export interface ITask {
  id: string;
  completed: boolean;
  description: string;
  category: CategoryType;
}
