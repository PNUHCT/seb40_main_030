import { useQueryClient, useMutation } from '@tanstack/react-query';
import { useRecoilValue } from 'recoil';

import { deleteBattery } from '@/apis/admin';
import { deleteModeState } from '@/recoil/business';

const useDelBattery = (queryKeyName) => {
  const isDeleteMode = useRecoilValue(deleteModeState);
  const queryClient = useQueryClient();
  const { mutate: deleteMutate } = useMutation(
    (batteryId) => deleteBattery(batteryId),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKeyName]);
      },
    },
  );

  return { deleteMutate, isDeleteMode };
};

export default useDelBattery;