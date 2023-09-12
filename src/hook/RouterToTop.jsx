/*

라우터 이동시 스크롤 위치를 무조건 0으로 고정시키는 hook 입니다.

사용방법 : 

RouterToTop 을 import 한 후, App 최상위 위치에 <RouterToTop /> 사용

*/

// eslint-disable-next-line
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const RouterToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
};

export default RouterToTop;
