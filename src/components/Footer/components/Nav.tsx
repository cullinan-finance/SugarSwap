import React from 'react'
import styled from 'styled-components'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      {/* <StyledLink
        target="_blank"
        href=""
      >
        智能合约
      </StyledLink> */}
      {/* <StyledLink
        target="_blank"
        href=""
      >
        Uniswap SUSHI-ETH
      </StyledLink> */}
      <StyledLink target="_blank" href="#">
        讨论
      </StyledLink>
      {/* <StyledLink target="_blank" href="https://github.com/sushiswap"> */}
      <StyledLink target="_blank" href="">
        源代码
      </StyledLink>
      <StyledLink target="_blank" href="#">
        关于
      </StyledLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
`

const StyledLink = styled.a`
  color: ${(props) => props.theme.color.grey[400]};
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.color.grey[500]};
  }
`

export default Nav
