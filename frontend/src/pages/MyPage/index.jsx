import { PageWrapper } from '../../components/@commons';
import MyPageForm from '../../components/MyPage/MyPageForm';

const MyPage = () => {
  return (
    <PageWrapper title={'마이페이지'} path={-1}>
      <MyPageForm />
    </PageWrapper>
  );
};

export default MyPage;