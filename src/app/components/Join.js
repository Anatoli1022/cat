'use client';

import Image from 'next/image';
import dex from '../assets/img/dex-icon.png';
import tg from '../assets/img/tg.svg';
import x from '../assets/img/x.svg';

import React from 'react';

const Join = () => {
  return (
    <section className="join">
      <div className="join__heading">Join Us</div>

      <div className="join__buttons">
        <a className="btn-primary">Buy Token</a>

        <a className="join__btn">
          <span>Telegram</span>

          <Image src={tg} alt="Telegram" className="join__btn-img tg" />
        </a>

        <a className="join__btn">
          <span>Twitter</span>

          <Image src={x} alt="X" className="join__btn-img x" />
        </a>

        <a className="join__btn">
          <span>Dex Screener</span>

          <Image src={dex} alt="Dex" className="join__btn-img dex" />
        </a>
      </div>
    </section>
  );
};

export default Join;
