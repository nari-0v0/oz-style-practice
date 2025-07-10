import styled from 'styled-components';

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 2px solid #ccc;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  color: #ff6600;
  margin: 0;
`;

const Nav = styled.nav`
  a {
    margin: 0 8px;
    text-decoration: none;
    color: #333;

    &:hover {
      color: #ff6600;
    }
  }
`;

function Header() {
  return (
    <HeaderWrapper>
      <Logo>OZ코딩스쿨</Logo>
      <Nav>
        <a href="#home">로그인</a>
        <a href="#about">회원가입</a>
        <a href="#contact">내클래스</a>
      </Nav>
    </HeaderWrapper>
  );
}

export default Header;
//     <header className="header-container">
//       <h1>OZ코딩스쿨</h1>
//       <ul className="menu-container">
//         <li>로그인</li>
//         <li>회원가입</li>
//         <li>내클래스</li>
//       </ul>
//     </header>
//   );
// }
