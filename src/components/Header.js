import React from 'react';
import styled from 'styled-components';

// Styled Componentsの定義
const HeaderContainer = styled.header`
  height: 108px;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  padding: 0 20px;
`;

const Logo = styled.img`
  height: 60px;
  margin-right: 20px;
`;

const Nav = styled.nav`
  flex-grow: 1;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  a {
    text-decoration: none;
    color: #333;

    &:hover {
      color: #007bff; // ホバー時の色変更
    }
  }
`;

// ヘッダーコンポーネント
function Header() {
  return (
    <HeaderContainer>
      <Logo src="logo.png" alt="ロゴ" />
      <Nav>
        <NavList>
          <NavItem><a href="/">ホーム</a></NavItem>
          <NavItem><a href="/shift">シフト勤怠</a></NavItem>
          <NavItem><a href="/scenario">シナリオ</a></NavItem>
          <NavItem><a href="/staff">スタッフ</a></NavItem>
          <NavItem><a href="/license">ライセンス</a></NavItem>
          <NavItem><a href="/scenario_management">シナリオ管理</a></NavItem>
          <NavItem><a href="/rules">規約設定</a></NavItem>
          <NavItem><a href="/payroll">給与計算</a></NavItem>
          <NavItem><a href="/accounting">経理</a></NavItem>
        </NavList>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;