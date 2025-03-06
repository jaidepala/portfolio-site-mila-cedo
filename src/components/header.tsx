import { NavLink } from 'react-router-dom';
import { Flex } from '@mantine/core';
import { IconDeviceTvFilled } from '@tabler/icons-react';

const Header = () => {

    return (<>
        <Flex
            align="center"
            direction="row"
            wrap="wrap"
            justify='space-between'
            p='md'>
            <NavLink to='/'>
                <Flex gap='xs' >
                    <IconDeviceTvFilled />
                    Mila Cedo
                </Flex>
            </NavLink>
            <nav>
                <Flex gap='md'>
                    <NavLink className={({ isActive }) => (isActive ? 'active-link' : 'link')} to="/">
                        Home
                    </NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'active-link' : 'link')} to="/bio">
                        Bio
                    </NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'active-link' : 'link')} to="/about">
                        About
                    </NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'active-link' : 'link')} to="/contact">
                        Contact
                    </NavLink>
                </Flex>
            </nav>

        </Flex>

    </>);
}

export default Header;