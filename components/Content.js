import Image from 'next/image';

export function Video() {
  return (
    <>
      <video
        poster='/photos/test.png'
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
