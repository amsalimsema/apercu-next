export default function Logo() {
  return (
    <>
      <div className='apercu'>
        <img src='../logo.png' alt='logo' />
        <style jsx>{`
          .apercu {
            padding-top: 50px;
            padding-left: 3rem;
            position: fixed;
            z-index: 99;
          }
        `}</style>
      </div>
    </>
  );
}
