'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import paw from '../assets/img/paw-block.svg';
import group from '../assets/img/group-fill.svg';
import prize from '../assets/img/prize-block.svg';

const WhySection = () => {
  const whyOuterRef = useRef(null);
  const cardsOuterRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const cardToCardOffset = 20;
    const marginBetweenCards = 24;
    let offsetTop, bodyHeight, screenHeight, cardsMaxHeight;

    const html = document.documentElement;
    const body = document.body;

    const handlerScroll = () => {
      const scrollTop = html.scrollTop;
      const canonicalScroll =
        offsetTop -
        (screenHeight -
          (cardsOuterRef.current.offsetTop +
            cardRefs.current[0].offsetHeight +
            cardToCardOffset * 4));

      if (scrollTop <= canonicalScroll) {
        body.style.paddingTop = null;
        cardRefs.current[1].style.marginTop = null;
        cardRefs.current[2].style.marginTop = null;
      } else {
        const firstCardHeight = cardRefs.current[0].offsetHeight;
        const secondCardHeight = cardRefs.current[1].offsetHeight;
        const delta = scrollTop - canonicalScroll;
        const secondCardOverlap =
          firstCardHeight - cardToCardOffset + marginBetweenCards;
        const thirdCardOverlap =
          secondCardHeight - cardToCardOffset + marginBetweenCards;

        let paddingBody = delta;
        let marginSecond = delta;
        let marginThird = 0;

        if (delta > secondCardOverlap) {
          marginSecond = secondCardOverlap;
          marginThird = delta - secondCardOverlap;

          if (delta > secondCardOverlap + thirdCardOverlap) {
            marginThird = thirdCardOverlap;
            paddingBody =
              delta - (delta - secondCardOverlap - thirdCardOverlap);
          }
        }

        body.style.paddingTop = `${paddingBody}px`;
        cardRefs.current[1].style.marginTop = `-${marginSecond}px`;
        cardRefs.current[2].style.marginTop = marginThird
          ? `-${marginThird}px`
          : undefined;
      }
    };

    const handlerResize = () => {
      offsetTop = whyOuterRef.current.offsetTop;
      bodyHeight = html.offsetHeight;
      screenHeight = html.clientHeight;
      cardsMaxHeight = Math.max.apply(
        Math,
        cardRefs.current.map((c) => c.offsetHeight)
      );
      handlerScroll();
    };

    handlerResize();

    window.addEventListener('resize', handlerResize);
    window.addEventListener('scroll', handlerScroll);

    return () => {
      window.removeEventListener('resize', handlerResize);
      window.removeEventListener('scroll', handlerScroll);
    };
  }, []);

  return (
    <section ref={whyOuterRef} className="why">
      <div className="why__heading">Why Just Sunny Cat?</div>

      <div ref={cardsOuterRef} className="why__cards">
        <div ref={(el) => (cardRefs.current[0] = el)} className="why__card">
          <div className="why__card-icon">
            <Image
              src={paw}
              alt="Simplicity"
              width={100}
              height={100}
              className="why__card-icon-img"
            />
          </div>
          <div className="why__card-heading">Simplicity</div>
          <div className="why__card-desc">Any cat can take part in it.</div>
        </div>

        <div ref={(el) => (cardRefs.current[1] = el)} className="why__card">
          <div className="why__card-icon">
            <Image
              src={group}
              alt="Community"
              width={100}
              height={100}
              className="why__card-icon-img"
            />
          </div>
          <div className="why__card-heading">Community</div>
          <div className="why__card-desc">Unite all cat lovers in 1 group</div>
        </div>

        <div ref={(el) => (cardRefs.current[2] = el)} className="why__card">
          <div className="why__card-icon">
            <Image
              src={prize}
              alt="Cat Lovers JUSTice"
              width={100}
              height={100}
              className="why__card-icon-img"
            />
          </div>
          <div className="why__card-heading">Cat Lovers JUSTice</div>
          <div className="why__card-desc">
            Filling the gap between DOG <br />
            and CAT coins Marketcap
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
