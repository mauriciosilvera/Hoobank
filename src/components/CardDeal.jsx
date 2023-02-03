import React from 'react';
import { card } from '../assets';
import styles, { layout } from '../style';
import Button from './Button';

function CardDeal() {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better card deal
          {' '}
          <br className="sm:block hidden" />
          {' '}
          in few easy steps.
          {' '}
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Minim irure consequat in ex qui cillum. Nostrud dolor enim id aliquip excepteur consectetur qui. Consequat sint in elit Lorem minim do cupidatat quis ullamco excepteur excepteur. Qui sit est ullamco consequat est sint do nisi et aliqua esse.
        </p>
        <Button styles="mt-10" />
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt="card" className="w-[100%] h-[100%]" />
      </div>
    </section>
  );
}

export default CardDeal;
