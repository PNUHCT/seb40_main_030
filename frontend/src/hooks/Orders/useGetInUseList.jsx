import { useQuery } from '@tanstack/react-query';

import { getPaymentsTable } from '@/apis/payments';

const useGetInUseList = () => {
  const { data, status } = useQuery(['order-inUse'], getPaymentsTable, {
    useErrorBoundary: true,
    suspense: true,
    select: (lists) =>
      lists
        .filter((list) => list.payStatus === 'USE_NOW')
        .sort(
          (a, b) =>
            new Date(a.endTime).getTime() - new Date(b.endTime).getTime(),
        ),
  });

  return { data, status };
};

export default useGetInUseList;