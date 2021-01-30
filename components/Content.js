import Image from 'next/image';

export function Video() {
  return (
    <>
      <div className='video-wrap'>
        <video
          poster='/photos/poster.svg'
          autoPlay
          muted
          loop
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
            transition: 'opacity, 2s ease-in-out',
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
            background-color: white;
            color: black;
          }

          .button1:hover {
            background-color: grey;
            color: white;
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
        height={992.5}
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
        height={992.5}
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
          color: grey;
          padding: 10rem 9rem 9rem 3rem;
        }
        .apercu-about h2 {
          line-height: 1.2vh;
          font-size: 3vw;
          font-weight: bold;
        }
        .apercu-about p {
          font-size: 1vw;
          padding-top: 2rem;
          line-height: 1.3rem;
        }
        .commonbtn {
          padding-top: 4rem;
        }
      `}</style>
    </>
  );
}
