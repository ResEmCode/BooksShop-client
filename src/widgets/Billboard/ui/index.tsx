import React from 'react';

import { ArrowLeft, ArrowRight } from '@/src/shared/svgs';

import s from './index.module.scss';

const Billboard = () => {
  return (
    <div className={s.billboard}>
      <button>
        <ArrowLeft />
      </button>
      <img className={s.img} />
      <button>
        <ArrowRight />
      </button>
    </div>
  );
};

export default Billboard;
