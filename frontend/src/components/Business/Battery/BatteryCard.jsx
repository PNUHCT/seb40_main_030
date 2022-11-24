import * as S from './Battery.style';
import BatteryDetails from './BatteryDetails';
import BatteryStatus from './BatteryStatus';
import BatteryDeleteButton from './BatteryDeleteButton';

const BatteryCard = ({ imgUrl, details, deleteState, status }) => {
  return (
    <S.BatteryContainer>
      <S.BatteryImgContainer src={imgUrl}></S.BatteryImgContainer>
      <BatteryDetails details={details} />
      <BatteryDeleteButton deleteState={deleteState} status={status} />
      <BatteryStatus status={status} />
    </S.BatteryContainer>
  );
};

export default BatteryCard;
