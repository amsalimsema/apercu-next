import Burger from '../components/Burger';
import Head from 'next/head';

import {
  Apercu,
  Principles,
  Studio,
  Comm,
  Ui,
  Design,
  Branding,
  Contact,
  Video,
  ApercuAbout,
  PrinciplesInfo,
  StudioInfo,
  UIInfo,
  DesignInfo,
  CommInfo,
  BrandingInfo,
} from '../components/Content';
import Logo from '../components/Logo';
<Head>
  <link
    rel='preload'
    href='https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap'
    as='font'
    crossOrigin='anonymous'
  />
</Head>;

const Index = () => (
  <>
    <div>
      <Burger />
      <Logo />
    </div>

    <div className='scroll-container'>
      <div className='scroll-area'>
        <Video />
      </div>

      <div className='scroll-area'>
        <div className='containerBig'>
          <div className='column-1 box'>
            <ApercuAbout />
          </div>
          <div className='column-2 box'>
            <Apercu />
          </div>
        </div>
      </div>
      <div className='scroll-area'>
        <div className='containerBig'>
          <div className='column-1 box'>
            <Principles />
          </div>
          <div className='column-2 box'>
            <PrinciplesInfo />
          </div>
        </div>
      </div>
      <div className='scroll-area'>
        <div className='containerBig'>
          <div className='column-1 box'>
            <StudioInfo />
          </div>
          <div className='column-2 box'>
            <Studio />
          </div>
        </div>
      </div>
      <div className='scroll-area'>
        <div className='containerBig'>
          <div className='column-1 box'>
            <Ui />
          </div>
          <div className='column-2 box'>
            <UIInfo />
          </div>
        </div>
      </div>
      <div className='scroll-area'>
        <div className='containerBig'>
          <div className='column-1 box'>
            <DesignInfo />
          </div>
          <div className='column-2 box'>
            <Design />
          </div>
        </div>
      </div>
      <div className='scroll-area'>
        <div className='containerBig'>
          <div className='column-1 box'>
            <Comm />
          </div>
          <div className='column-2 box'>
            <CommInfo />
          </div>
        </div>
      </div>
      <div className='scroll-area'>
        <div className='containerBig'>
          <div className='column-1 box'>
            <BrandingInfo />
          </div>
          <div className='column-2 box'>
            <Branding />
          </div>
        </div>
      </div>
      <div className='scroll-area'>
        <div className='containerBig'>
          <div className='column-1 box'>
            <Contact />
          </div>
          <div className='column-2 box'>
            <ApercuAbout />
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
      .scroll-container,
      .scroll-area {
        height: 100vh;
      }
      .scroll-container {
        overflow-x: auto;
        scroll-snap-type: y mandatory;
      }
      .scroll-area {
        scroll-snap-align: start;
      }
      .scroll-container,
      .scroll-area {
        margin: 0;
      }
      .scroll-area {
        display: flex;
        color: white;
      }
      .scroll-area:nth-of-type(1) {
        background: none;
      }
      .scroll-area:nth-of-type(2) {
        background: white;
      }
      .scroll-area:nth-of-type(3) {
        background: white;
      }
      .scroll-area:nth-of-type(4) {
        background: white;
      }
      .scroll-area:nth-of-type(5) {
        background: white;
      }
      .scroll-area:nth-of-type(6) {
        background: white;
      }
      .scroll-area:nth-of-type(7) {
        background: white;
      }
      .scroll-area:nth-of-type(8) {
        background: white;
      }
      .scroll-area:nth-of-type(9) {
        background: white;
      }

      .containerBig {
        display: flex;
      }

      .column-1,
      column-2 {
        flex-shrink: 0;
        flex-basis: 50%;
      }
      .box {
        background-color: none;
      }

      @media only screen and (max-width: 1024px) {
        .scroll-container {
          display: none;
        }
      }
    `}</style>
  </>
);

export default Index;
