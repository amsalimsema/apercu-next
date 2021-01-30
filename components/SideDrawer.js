import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  a {
    line-height: 0;
    &:hover {
      text-decoration: none;
    }
  }
  @media (min-width: 320px) {
    flex-flow: column nowrap;
    over-flow: auto;
    background: white;
    z-index: 120;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    margin-top: 0;
    right: 0;
    height: 100vh;
    width: 320px;
    padding-top: 2.4rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: black;
      transition: 0.2s;
      &:hover {
        color: grey;
      }
    }
  }
`;

const SideDrawer = ({ open }) => {
  return (
    <>
      <Ul open={open}>
        <li>
          <div className='drawer'>
            <Image
              src='/photos/SideBarIcon.png'
              alt='apercu icon'
              width={30}
              height={35}
              priority
            />
          </div>
        </li>
        <div className='drawer-list-one'>
          <li>
            <Link href='/work'>
              <a>
                <p>Work</p>
              </a>
            </Link>
          </li>
          <li>
            <Link href='/careers'>
              <a>
                <p>Careers</p>
              </a>
            </Link>
          </li>
          <li>
            <Link href='/about'>
              <a>
                <p>About</p>
              </a>
            </Link>
          </li>
        </div>
        <div className='drawer-list-two'>
          <li>
            <Link href='/'>
              <a>
                <p>Behance</p>
              </a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a>
                <p>Instagram</p>
              </a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a>
                <p>Facebook</p>
              </a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a>
                <p>Twitter</p>
              </a>
            </Link>
          </li>
        </div>
        <div className='drawer-list-three'>
          <li>
            <Link href='/'>
              <a>
                <p>Uganda</p>
              </a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a>
                <p>Kenya</p>
              </a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a>
                <p>Atlanta</p>
              </a>
            </Link>
          </li>
        </div>
      </Ul>
      <style jsx>{`
        .drawer {
          padding-top: 0.5rem;
        }
        .drawer-list-one {
          padding-top: 2rem;
        }
        .drawer-list-one p {
          font-weight: bold;
          font-size: 1.6vw;
          color: black;
          line-height: 1rem;
        }
        .drawer-list-two {
          padding-top: 2rem;
          padding-bottom: 2rem;
          margin-right: 2.5rem;
          border-bottom: 2px solid purple;
        }
        .drawer-list-two p {
          font-size: 1.1vw;
          color: grey;
          line-height: 1rem;
        }
        .drawer-list-three {
          padding-top: 2rem;
        }
        .drawer-list-three p {
          font-weight: bold;
          font-size: 1vw;
          color: black;
          line-height: 1rem;
        }
      `}</style>
    </>
  );
};

export default SideDrawer;
