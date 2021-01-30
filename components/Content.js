import Image from 'next/image';

export function Video() {
  return (
    <>
      <div className='video-wrap'>
        <video
          autoPlay
          muted
          loop
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
          }}
          src='/1.mp4'
          type='video/mp4'
        />
        <section className='homebtn-wrap'>
          <button className='button-vid button1'>Explore</button>
        </section>
        <style jsx>{`
          .video-wrap {
            position: relative;
          }
          .homebtn-wrap {
            position: absolute;
            top: 80vh;
            left: 3vw;
          }
          .button-vid {
            background-color: white;
            border: none;
            border-radius: 0.2rem;
            color: white;
            padding: 10px 60px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin: 4px 2px;
            transition-duration: 0.4s;
            cursor: pointer;
          }

          .button1 {
            background-color: grey;
            color: white;
          }

          .button1:hover {
            background-color: grey;
            color: rgba(0, 0, 0, 0.7);
          }
        `}</style>
      </div>
    </>
  );
}
export function Apercu() {
  return (
    <>
      <Image
        src='/photos/apercu.png'
        alt='apercu intro'
        width={960}
        height={992.5}
        priority
      />
    </>
  );
}
export function Principles() {
  return (
    <>
      <Image
        src='/photos/principles.png'
        alt='principles'
        width={960}
        height={989}
        priority
      />
    </>
  );
}
export function Studio() {
  return (
    <>
      <Image
        src='/photos/studio.png'
        alt='studio'
        width={960}
        height={989}
        priority
      />
    </>
  );
}
export function Ui() {
  return (
    <>
      <Image
        src='/photos/ui.png'
        alt='UI/UX'
        width={960}
        height={989}
        priority
      />
    </>
  );
}
export function Design() {
  return (
    <>
      <Image
        src='/photos/design.png'
        alt='design'
        width={960}
        height={989}
        priority
      />
    </>
  );
}
export function Comm() {
  return (
    <>
      <Image
        src='/photos/comm.png'
        alt='communication'
        width={960}
        height={989}
        priority
      />
    </>
  );
}
export function Branding() {
  return (
    <>
      <Image
        src='/photos/branding.png'
        alt='branding'
        width={960}
        height={989}
        priority
      />
    </>
  );
}
export function Contact() {
  return (
    <>
      <Image
        src='/photos/contact.png'
        alt='contact details'
        width={960}
        height={989}
        priority
      />
    </>
  );
}
export function CommonBtn() {
  return (
    <>
      <button className='button-vid button1'>Explore</button>

      <style jsx>{`
        .button-vid {
          background-color: white;
          border: none;
          border-radius: 0.2rem;
          color: white;
          padding: 10px 60px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 16px;
          margin: 4px 2px;
          transition-duration: 0.4s;
          cursor: pointer;
        }

        .button1 {
          background-color: #87ceeb;
          color: white;
        }

        .button1:hover {
          background-color: grey;
          color: white;
        }
      `}</style>
    </>
  );
}
export function ApercuAbout() {
  return (
    <>
      <section className='apercu-about'>
        <h2>Creativity for the</h2>
        <h2>Evolving world</h2>
        <p>
          Apercu is an independent design agency.
          <br />
          We make our clients both successful and truly sustainable.
          <br /> We are led by creative and strategic business people.
          <br /> Our work results in products and experiences that people
          <br />
          love, enduring purpose-led brands and innovative new businesses. All
          of our work is collaborative, together we solve critical challenges
          and capture valuable opportunities.
        </p>
        <div className='commonbtn'>
          <CommonBtn />
        </div>
      </section>

      <style jsx>{`
        .apercu-about {
          padding: 10rem 9rem 9rem 3rem;
        }
        .apercu-about h2 {
          line-height: 1.2vh;
          font-size: 3vw;
          font-weight: bold;
          color: black;
        }
        .apercu-about p {
          font-size: 1vw;
          padding-top: 2rem;
          line-height: 1.3rem;
          color: grey;
        }
        .commonbtn {
          padding-top: 4rem;
        }
      `}</style>
    </>
  );
}
export function PrinciplesInfo() {
  return (
    <>
      <section className='principles-info'>
        <h2>Our principles.</h2>

        <p>
          We work with the people we believe in.
          <br />
          We know there is no such thing as a perfect company but we also know
          that organisations with shared aims can create immense positive
          change.We are actively seeking founders, leaders and organizations who
          have similar ambitions to Apercu. And once we find each other we
          commit 100%.
        </p>
        <div className='commonbtn'>
          <CommonBtn />
        </div>
      </section>

      <style jsx>{`
        .principles-info {
          padding: 9rem 9rem 9rem 9rem;
        }
        .principles-info h2 {
          line-height: 1.2vh;
          font-size: 3vw;
          font-weight: bold;
          color: black;
        }
        .principles-info p {
          font-size: 1vw;
          padding-top: 2rem;
          line-height: 1.3rem;
          color: grey;
        }
        .commonbtn {
          padding-top: 4rem;
        }
      `}</style>
    </>
  );
}
export function StudioInfo() {
  return (
    <>
      <section className='studio-info'>
        <h2>One studio,</h2>
        <h2>One team</h2>

        <p>
          We believe that collaboration is the lifeblood of creativity.
          <br />
          It’s not easy – but we do it every day.
          <br /> We build teams that bring together the right experience and
          expertise to solve the challenge in hand.
          <br /> We stay connected and engaged – whatever the project demands
        </p>
        <div className='commonbtn'>
          <CommonBtn />
        </div>
      </section>

      <style jsx>{`
        .studio-info {
          padding: 10rem 9rem 9rem 3rem;
        }
        .studio-info h2 {
          line-height: 1.2vh;
          font-size: 3vw;
          font-weight: bold;
          color: black;
        }
        .studio-info p {
          font-size: 1vw;
          padding-top: 2rem;
          line-height: 1.3rem;
          color: grey;
        }
        .commonbtn {
          padding-top: 4rem;
        }
      `}</style>
    </>
  );
}
export function UIInfo() {
  return (
    <>
      <section className='ui-info'>
        <h2>Digital Product</h2>
        <h2>& Service Design</h2>

        <p>
          Ever-evolving technology offers multiple possibilities and constant
          challenges for consumers and businesses alike. We believe that making
          a digital product or service that engages on an emotional as well as a
          functional level will separate the great from the merely good. We can
          help organise your portfolio of products, design you an app or build
          you an entire digital design system. We’ve done this for some of our
          clients
        </p>
        <div className='commonbtn'>
          <CommonBtn />
        </div>
      </section>

      <style jsx>{`
        .ui-info {
          padding: 9rem 9rem 9rem 9rem;
        }
        .ui-info h2 {
          line-height: 1.2vh;
          font-size: 3vw;
          font-weight: bold;
          color: black;
        }
        .ui-info p {
          font-size: 1vw;
          padding-top: 2rem;
          line-height: 1.3rem;
          color: grey;
        }
        .commonbtn {
          padding-top: 4rem;
        }
      `}</style>
    </>
  );
}
export function DesignInfo() {
  return (
    <>
      <section className='design-info'>
        <h2>Business Design</h2>
        <p>
          Your business is a living system. To thrive, it needs far more than
          just commercial direction. We will bring our inimitable intelligence
          and humanity to designing your business. Work with us to define your
          winning proposition, organise your portfolio, define your growth,
          shape your culture and create your customer experiences for highly
          dynamic markets.
        </p>
        <div className='commonbtn'>
          <CommonBtn />
        </div>
      </section>

      <style jsx>{`
        .design-info {
          padding: 10rem 9rem 9rem 3rem;
        }
        .design-info h2 {
          line-height: 1.2vh;
          font-size: 3vw;
          font-weight: bold;
          color: black;
        }
        .design-info p {
          font-size: 1vw;
          padding-top: 2rem;
          line-height: 1.3rem;
          color: grey;
        }
        .commonbtn {
          padding-top: 4rem;
        }
      `}</style>
    </>
  );
}
export function CommInfo() {
  return (
    <>
      <section className='comm-info'>
        <h2>Communications</h2>

        <p>
          You need a clear and compelling voice to be heard in a noisy market.
          We help you make your messages unmistakably your own by creating a
          tone of voice that comes from the heart of your brand. We then develop
          the propositions, messaging frameworks and communication materials you
          need to entice, excite and inform your audiences, whether on social
          media, digital platforms or in print.
        </p>
        <div className='commonbtn'>
          <CommonBtn />
        </div>
      </section>

      <style jsx>{`
        .comm-info {
          padding: 10rem 9rem 9rem 3rem;
        }
        .comm-info h2 {
          line-height: 1.2vh;
          font-size: 3vw;
          font-weight: bold;
          color: black;
        }
        .comm-info p {
          font-size: 1vw;
          padding-top: 2rem;
          line-height: 1.3rem;
          color: grey;
        }
        .commonbtn {
          padding-top: 4rem;
        }
      `}</style>
    </>
  );
}
export function BrandingInfo() {
  return (
    <>
      <section className='branding-info'>
        <h2>Branding</h2>
        <p>
          Your brand is your business, both to your customers and to your
          people. It tells the story of who you are, why you exist and how you
          act, when or wherever you meet the world. To do this brilliantly, you
          need a story-led, future-proof and digital-first brand. Work with us
          to create and build a Living Identity System that will make your
          business thrive in an ever-changing world.
        </p>
        <div className='commonbtn'>
          <CommonBtn />
        </div>
      </section>

      <style jsx>{`
        .branding-info {
          padding: 10rem 9rem 9rem 3rem;
        }
        .branding-info h2 {
          line-height: 1.2vh;
          font-size: 3vw;
          font-weight: bold;
          color: black;
        }
        .branding-info p {
          font-size: 1vw;
          padding-top: 2rem;
          line-height: 1.3rem;
          color: grey;
        }
        .commonbtn {
          padding-top: 4rem;
        }
      `}</style>
    </>
  );
}
