import { useParams } from 'react-router';

export const useCategoryPath = () => {
  const { category } = useParams<string>();

  return category ?? 'All';
};
