import { deleteBattery } from '../../../apis/admin';
import * as S from './Battery.style';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const BatteryDeleteButton = ({ deleteState, status, batteryId }) => {
  const queryClient = useQueryClient();
  const { mutate: deleteMutate } = useMutation(
    (batteryId) => deleteBattery(batteryId),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['adminInfo']);
      },
    }
  );

  const deleterHandler = () => {
    console.log('삭제클릭', batteryId);
    deleteMutate(batteryId);
  };
  return (
    <S.deleteButtonContainer
      onClick={() => deleterHandler()}
      deleteState={deleteState}
      status={status}
    >
      X
    </S.deleteButtonContainer>
  );
};

export default BatteryDeleteButton;
