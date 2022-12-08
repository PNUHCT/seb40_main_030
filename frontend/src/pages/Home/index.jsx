import { Suspense } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { BatteryCharging, SnackBar, SplashScreen } from '@/components/@commons';
import PayNotice from '@/components/@commons/Notice/PayNotice';
import BottomNav from '@/components/@layout/BottomNav/BottomNav';
import BottomSheet from '@/components/@layout/BottomSheet/BottomSheet';
import MapArea from '@/components/Home/Maps';
import Reservation from '@/components/Home/Reservation/Reservation';
import { DESKTOP_MEDIA_QUERY, ROUTES } from '@/constants';
import { useSplashScreen, useSnackBar, useMediaQuery } from '@/hooks';

const Home = () => {
  const isNoticeRead = JSON.parse(localStorage.getItem('notice'));
  const [isModalOpen, setIsModalOpen] = useState(true);
  const matches = useMediaQuery(DESKTOP_MEDIA_QUERY);
  const { pathname } = useLocation();
  const { isLoading, isSplashed } = useSplashScreen();
  const { isActive, message } = useSnackBar();

  return (
    <>
      {/* <SplashScreen matches={matches} /> */}
      {isLoading && <SplashScreen matches={matches} />}

      <Suspense fallback={<BatteryCharging />}>
        <MapArea matches={matches} />
        {/* Bottom Sheet 에 대한 visibility transition 이 들어가야함 */}
        {/* session storage 값으로 검증을 하는 방식이 맞는지 확인이 필요함 */}
        {isSplashed !== null ? (
          <div>
            {pathname === ROUTES.HOME.PATH && (
              <BottomSheet matches={matches}>
                <Reservation />
              </BottomSheet>
            )}
            {!isNoticeRead && (
              <PayNotice
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
              />
            )}
          </div>
        ) : null}
        {/* 임시 공지사항 카카오 페이 결제 */}
        <SnackBar
          isActive={isActive}
          message={message}
          path={ROUTES.HOME.PATH}
        />
        <BottomNav matches={matches} />
      </Suspense>
    </>
  );
};

export default Home;
