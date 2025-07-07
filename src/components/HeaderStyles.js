import styled, { css } from 'styled-components';

export const Header = styled.header`
  background-color: #fff;
  font-family: 'Georgia', serif;
`;

export const Container = styled.div`
  max-width: 1320px;
  margin: 0 auto;
  padding: 1rem 2rem;
`;

export const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const LogoImage = styled.img`
  height: 64px;
`;

export const RightControls = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const TopActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const Language = styled.span`
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

export const SignInButton = styled.button`
  background-color: #fff;
  color: #111;
  border: 1px solid #111;
  font-size: 1rem;
  font-weight: 500;
  padding: 0.75rem 0;
  width: 180px;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #111;
    color: #fff;
  }
`;

export const NavRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

export const NavLinks = styled.nav`
  display: flex;
  gap: 2rem;

  a {
    text-decoration: none;
    color: #111;
    font-size: 0.85rem;
    letter-spacing: 0.07em;
    font-weight: 500;
    text-transform: uppercase;
    padding-bottom: 0;
    margin-bottom: 0;
    border-bottom: 4px solid transparent;
    transition: border-bottom 0.2s ease;

    &.active,
    &:hover {
      border-bottom: 4px solid #111;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const ReserveButton = styled.button`
  background-color: #111;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  padding: 1rem 2rem;
  border: none;
  width: 180px;
  text-align: center;
  cursor: pointer;
  margin-top: 1rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
