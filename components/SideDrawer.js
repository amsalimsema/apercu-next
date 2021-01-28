import styled from 'styled-components';

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
    background: green;
    z-index: 1;
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
        transform: translateX(5px);
      }
    }
  }
`;

const SideDrawer = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        <img src='../logo.png' alt='logo' width='90' height='40' />
      </li>
    </Ul>
  );
};

export default SideDrawer;
