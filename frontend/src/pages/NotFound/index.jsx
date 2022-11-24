import { useNavigate } from 'react-router-dom';

import * as S from './NotFound.style';

const NotFound = ({ message = '404 Not Found', button = true, ...rest }) => {
  const navigate = useNavigate();

  return (
    <S.Wrapper exit={{ opacity: 0 }} transition={{ duration: 1.3 }} {...rest}>
      <S.Message>{message}</S.Message>
      {button && (
        <S.GoBackButton onClick={() => navigate(-1)}>뒤로가기</S.GoBackButton>
      )}
    </S.Wrapper>
  );
};

export default NotFound;
