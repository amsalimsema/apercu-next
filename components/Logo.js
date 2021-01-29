import Image from 'next/image';
export default function Logo() {
  return (
    <>
      <div className='apercu'>
        <Image
          src='/logo.png'
          alt='apercu logo'
          width={183}
          height={55}
          priority
        />
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
