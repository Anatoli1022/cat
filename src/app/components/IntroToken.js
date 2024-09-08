'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import dex from '../assets/img/dex-icon.png';
import tg from '../assets/img/tg.svg';
import x from '../assets/img/x.svg';
const IntroToken = () => {
  useEffect(() => {
    const tokenContainers = Array.from(
      document.querySelectorAll('.intro__token')
    );

    tokenContainers.forEach((container) => {
      const inner = container.querySelector('.intro__token-inner');
      container
        .querySelector('.intro__token-btn')
        .addEventListener('click', () => {
          navigator.clipboard.writeText(inner.innerHTML.trim());
        });
    });
  }, []);

  return (
    <section className="intro">
      <div className="intro__top">Just. Sunny. Cat.</div>

      <div className="intro__heading">
        JUST SUNNY CAT: UNITING THE CAT <br />
        COMMUNITY TO CREATE PET MARKET ON TRON
      </div>

      <div className="intro__buttons">
        <a className="intro__buttons-thron"></a>

        <a className="btn-primary">Buy Just Cat</a>

        <div className="intro__token">
          <div className="intro__token-inner">soon</div>

          <div className="intro__token-btn">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 7V7C14 6.06812 14 5.60218 13.8478 5.23463C13.6448 4.74458 13.2554 4.35523 12.7654 4.15224C12.3978 4 11.9319 4 11 4H8C6.11438 4 5.17157 4 4.58579 4.58579C4 5.17157 4 6.11438 4 8V11C4 11.9319 4 12.3978 4.15224 12.7654C4.35523 13.2554 4.74458 13.6448 5.23463 13.8478C5.60218 14 6.06812 14 7 14V14"
                stroke="#41311B"
                strokeWidth="2"
              />
              <rect
                x="10"
                y="10"
                width="10"
                height="10"
                rx="2"
                stroke="#41311B"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>

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

export default IntroToken;
