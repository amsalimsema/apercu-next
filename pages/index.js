import Burger from '../components/Burger';
import Content from '../components/Content';
import Logo from '../components/Logo';

const Index = () => (
  <>
    <div>
      <Burger />
      <Logo />
    </div>

    <div className='scroll-con'>
      <div className='scroll-area'>
        <Content />
      </div>
      <div className='scroll-area'>
        <div className='flex-container'>
          <div className='flex-item-left'>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestias quo ex porro alias, reiciendis neque quae et officiis,
              amet ullam harum a incidunt ipsa! Neque possimus nobis mollitia
              qui architecto.
            </p>
          </div>
          <div className='flex-item-right'></div>
        </div>
      </div>
      <div className='scroll-area'>3</div>
      <div className='scroll-area'>4</div>
    </div>
    <style jsx>{`
      .scroll-con,
      .scroll-area {
        height: 100vh;
      }

      .scroll-con {
        overflow-x: auto;
        scroll-snap-type: y mandatory;
      }

      .scroll-area {
        scroll-snap-align: start;
      }

      .scroll-con,
      .scroll-area {
        margin: 0;
      }

      .scroll-area {
        display: flex;

        color: white;
      }

      .scroll-area:nth-of-type(1) {
        background: #49b293;
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
      .flex-container {
        display: flex;
        flex-direction: row;
        font-size: 30px;
        text-align: center;
      }

      .flex-item-left {
        width: 50vw;
        flex: 50%;
      }

      .flex-item-right {
        width: 50vw;
        flex: 50%;
        background-image: url('/test.png');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
      }

      @media (max-width: 800px) {
        .flex-container {
          flex-direction: column;
        }
      }
    `}</style>
  </>
);

export default Index;
