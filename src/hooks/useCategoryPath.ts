import { useParams } from 'react-router';
import type { CategoryType } from '@models/ITask';

type CategoryParams = {
  category: CategoryType;
};

export const useCategoryPath = () => {
  const { category } = useParams<CategoryParams>();

  return category ?? 'All';
};
