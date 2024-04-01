import { useMemo } from 'react';
import { Tooltip } from 'react-tippy';
import PageWrapper from './PageWrapper';

const BIRTH = new Date('2001-12-28T10:15:00Z');
const YEAR_MILLIS = 31556952000;

const Home = () => {
  const age = useMemo(() => Math.floor((Date.now() - BIRTH.getTime()) / YEAR_MILLIS), []);

  return (
    <PageWrapper forceReadableWidth>
      <h1>A Little About Us</h1>
      <p>
        At UVS, we pride ourselves on being the foremost authority in e-commerce, dedicated to delivering an unparalleled range of services tailored to meet all your digital gaming aspirations. 
        With a fervent focus on account boosting, we elevate your gaming prowess to new heights, ensuring you dominate the competitive landscape with ease.
      </p>

      <h3>A note about our commitment</h3>

      <p>
      But our commitment doesn't end there. We curate a diverse array of accounts across a myriad of online games, 
      meticulously handpicked to cater to your every gaming desire. Whether you're a seasoned pro seeking that extra edge or a novice eager to embark on your gaming journey, 
      we've got you covered.
      </p>

      <h3>About our services</h3>
      <p>
      Our extensive range of services goes beyond mere transactions; it's about crafting unforgettable gaming experiences. 
      From account boosting to account acquisition, we're your trusted ally in navigating the digital gaming universe.
      </p> 
      <h3>Join us today</h3>
      <p>
        Join us at UVS, where excellence meets expertise, and let us redefine what it means to elevate your gaming experience.
      </p>
    </PageWrapper>
  );
};

export default Home;
