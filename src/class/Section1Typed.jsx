/* eslint-disable */
/* ErrorLens-disable */
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Section1Typed = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        '나의 인생영화를 언제 어디서든,',
        '공유하고 기록하세요. 이것은',
        '무비이터(MOVIE EATER) 입니다.'
    ],
      typeSpeed: 150,
      backSpeed: 30,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      // 컴포넌트가 언마운트될 때 Typed 인스턴스 제거
      typed.destroy();
    };
  }, []);

  return (
    <p className='mainMessage'>
      <span ref={typedRef}></span>
    </p>
  );
};

export default Section1Typed;
