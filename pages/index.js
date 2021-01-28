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
      <div className='scroll-area'>2</div>
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

      .scroll-container,
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
    `}</style>
  </>
);

export default Index;
