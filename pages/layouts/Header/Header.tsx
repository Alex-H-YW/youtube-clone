import React from 'react'
import styled from 'styled-components'
import SearchBar from '../../../components/SearchBar';
import { BellIcon } from '@heroicons/react/outline'
import { UserIcon } from '@heroicons/react/outline'
import { ViewGridIcon } from '@heroicons/react/solid';
const NavContainer = styled.div`
	display: flex;
  align-items: center;
  justify-content: space-between;
  height: 6vh;
  width: 100%;
  top:0;
`;
const Image = styled.img`
	height: 60px;
	width: 150px;
  object-fit: contain;
  cursor: pointer;
    
`;
const NavRight = styled.div`
    display: flex;
    padding-right: 20px;
    align-items: center;
    justify-content: space-round;
`;

const Header = () => {
  return (
    <header className='border-b-2 fixed w-full flex bg-white z-50'>
      <NavContainer>
        <Image 
        alt="logo"
        src='data:image/png;base64,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'
        />
        <SearchBar />
        <NavRight>
          <BellIcon className="h-6 w-6 hidden sm:inline " />
          <ViewGridIcon className="h-6 w-6 hidden sm:inline" />
          <UserIcon className="h-6 w-6 hidden sm:inline" />
        </NavRight>
      </NavContainer>
    </header>
  )
}
export default Header;