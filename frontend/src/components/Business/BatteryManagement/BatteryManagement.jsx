import { useRecoilState, useSetRecoilState } from 'recoil';

import { batteryAddModeState, batteryDeleteModeState } from '@/recoil/business';

import * as S from './BatteryManagement.style';
import BatteryManagementButton from './BatteryManagementButton';

const BatteryManagement = () => {
  const [isDeleteMode, setIsDeleteMode] = useRecoilState(
    batteryDeleteModeState,
  );
  const setIsAddMode = useSetRecoilState(batteryAddModeState);

  const addHandler = () => {
    if (isDeleteMode) setIsDeleteMode(false);
    setIsAddMode((preState) => !preState);
  };
  const deleteHandler = () => {
    console.log('삭제');
    setIsDeleteMode((preState) => !preState);
  };
  return (
    <S.ButtonWrapper>
      <BatteryManagementButton onClick={() => addHandler()} action={'add'} />
      <BatteryManagementButton
        onClick={() => deleteHandler()}
        action={'remove'}
      />
    </S.ButtonWrapper>
  );
};

export default BatteryManagement;