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
          <div className='apercu-left'>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestias quo ex porro alias, reiciendis neque quae et officiis,
              amet ullam harum a incidunt ipsa! Neque possimus nobis mollitia
              qui architecto.
            </p>
          </div>
          <div className='apercu-right'></div>
        </div>
      </div>
      <div className='scroll-area'>
        <div className='flex-container'>
          <div className='principles-left'></div>
          <div className='principles-right'>
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
        <div className='flex-container'>
          <div className='studio-left'>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestias quo ex porro alias, reiciendis neque quae et officiis,
              amet ullam harum a incidunt ipsa! Neque possimus nobis mollitia
              qui architecto.
            </p>
          </div>
          <div className='studio-right'></div>
        </div>
      </div>
      <div className='scroll-area'>
        <div className='flex-container'>
          <div className='ui-left'></div>
          <div className='ui-right'>
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
        <div className='flex-container'>
          <div className='design-left'>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestias quo ex porro alias, reiciendis neque quae et officiis,
              amet ullam harum a incidunt ipsa! Neque possimus nobis mollitia
              qui architecto.
            </p>
          </div>
          <div className='design-right'></div>
        </div>
      </div>
      <div className='scroll-area'>
        <div className='flex-container'>
          <div className='comm-left'></div>
          <div className='comm-right'>
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
        <div className='flex-container'>
          <div className='branding-left'>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestias quo ex porro alias, reiciendis neque quae et officiis,
              amet ullam harum a incidunt ipsa! Neque possimus nobis mollitia
              qui architecto.
            </p>
          </div>
          <div className='branding-right'></div>
        </div>
      </div>
      <div className='scroll-area'>
        <div className='flex-container'>
          <div className='contact-left'></div>
          <div className='contact-right'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
              tenetur placeat repellendus ratione, minus molestiae facilis quas
              culpa odio vel deleniti, dolores esse obcaecati ea ut! Veniam
              cumque soluta debitis.
            </p>
          </div>
        </div>
      </div>
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
      .flex-container {
        display: flex;
        flex-direction: row;
      }
      .apercu-left {
        flex: 50%;
      }
      .principles-left {
        flex: 50%;
        background-image: url('/principles.png');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
      }
      .studio-left {
        flex: 50%;
      }
      .ui-left {
        flex: 50%;
        background-image: url('/ui.png');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
      }
      .design-left {
        flex: 50%;
      }
      .comm-left {
        flex: 50%;
        background-image: url('/comm.png');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
      }
      .branding-left {
        flex: 50%;
      }
      .contact-left {
        flex: 50%;
        background-image: url('/contact.png');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
      }
      .apercu-right {
        flex: 50%;
        background-image: url('/apercu.png');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
      }
      .principles-right {
        flex: 50%;
      }
      .studio-right {
        flex: 50%;
        background-image: url('/studio.png');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
      }
      .ui-right {
        flex: 50%;
      }
      .design-right {
        flex: 50%;
        background-image: url('/design.png');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
      }
      .comm-right {
        flex: 50%;
      }
      .branding-right {
        flex: 50%;
        background-image: url('/branding.png');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
      }
      .contact-right {
        flex: 50%;
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
