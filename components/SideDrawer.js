import styled from 'styled-components';
import Image from 'next/image';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  a {
    padding: 8px 10px 10px 2rem;
    line-height: normal;
    &:hover {
      text-decoration: none;
    }
  }
  @media (min-width: 320px) {
    flex-flow: column nowrap;
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
      color: white;
      transition: 0.2s;
      &:hover {
        color: grey;
      }
    }
  }
`;

const SideDrawer = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        <Image
          src='/photos/SideBarIcon.png'
          alt='apercu icon'
          width={45}
          height={55}
          priority
        />
      </li>
    </Ul>
  );
};

export default SideDrawer;
