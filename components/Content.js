export default function Content() {
  return (
    <>
      <div className='vid'>
        <style jsx>{`
          .vid {
            height: 100vh;
            width: 100vw;
            background-image: url('/test.png');
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center center;
          }
        `}</style>
      </div>
    </>
  );
}
