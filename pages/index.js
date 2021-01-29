import Burger from '../components/Burger';
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
} from '../components/Content';
import Logo from '../components/Logo';

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
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestias quo ex porro alias, reiciendis neque quae et officiis,
              amet ullam harum a incidunt ipsa! Neque possimus nobis mollitia
              qui architecto.
            </p>
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
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestias quo ex porro alias, reiciendis neque quae et officiis,
              amet ullam harum a incidunt ipsa! Neque possimus nobis mollitia
              qui architecto.
            </p>
          </div>
        </div>
      </div>
      <div className='scroll-area'>
        <div className='containerBig'>
          <div className='column-1 box'>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestias quo ex porro alias, reiciendis neque quae et officiis,
              amet ullam harum a incidunt ipsa! Neque possimus nobis mollitia
              qui architecto.
            </p>
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
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestias quo ex porro alias, reiciendis neque quae et officiis,
              amet ullam harum a incidunt ipsa! Neque possimus nobis mollitia
              qui architecto.
            </p>
          </div>
        </div>
      </div>
      <div className='scroll-area'>
        <div className='containerBig'>
          <div className='column-1 box'>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestias quo ex porro alias, reiciendis neque quae et officiis,
              amet ullam harum a incidunt ipsa! Neque possimus nobis mollitia
              qui architecto.
            </p>
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
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestias quo ex porro alias, reiciendis neque quae et officiis,
              amet ullam harum a incidunt ipsa! Neque possimus nobis mollitia
              qui architecto.
            </p>
          </div>
        </div>
      </div>
      <div className='scroll-area'>
        <div className='containerBig'>
          <div className='column-1 box'>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestias quo ex porro alias, reiciendis neque quae et officiis,
              amet ullam harum a incidunt ipsa! Neque possimus nobis mollitia
              qui architecto.
            </p>
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
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestias quo ex porro alias, reiciendis neque quae et officiis,
              amet ullam harum a incidunt ipsa! Neque possimus nobis mollitia
              qui architecto.
            </p>
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
        background: black;
      }
      .scroll-area:nth-of-type(2) {
        background: #c94e4b;
      }
      .scroll-area:nth-of-type(3) {
        background: #4cc1be;
      }
      .scroll-area:nth-of-type(4) {
        background: #8360a6;
      }
      .scroll-area:nth-of-type(5) {
        background: #8360a6;
      }
      .scroll-area:nth-of-type(6) {
        background: #8360a6;
      }
      .scroll-area:nth-of-type(7) {
        background: #8360a6;
      }
      .scroll-area:nth-of-type(8) {
        background: #8360a6;
      }
      .scroll-area:nth-of-type(9) {
        background: #8360a6;
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
        background-color: rgb(245, 215, 160);
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
