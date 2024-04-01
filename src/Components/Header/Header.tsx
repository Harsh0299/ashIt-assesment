import React, { useEffect, useState } from 'react'
import './Header.css';
import { Button, Container, FlexChild, FlexLayout, List } from '../../UIComponents';

const Header = () => {
    const [scrollHeight, setScrollHeight] = useState(window.scrollY);
    const [showMobilenav, setMobileNav] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScrollHeight(window.scrollY);
        })
        return window.removeEventListener('scroll', () => {
            setScrollHeight(window.scrollY)
        })
    }, [])

    return (
        <header className='header' id='header' style={{
            ...scrollHeight > 60 ? { background: '#fff', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset' } : {}
        }}>
            <Container>
                <FlexLayout halign='fill' wrap='noWrap' valign='center'>
                    <FlexChild>
                        <a href='#header'>
                            <img width='102' src="https://trophyproperty.ng/wp-content/uploads/2024/02/Trophy-Nig-LOGO-1.png" alt="" />
                        </a>
                    </FlexChild>
                    <FlexChild>
                        <div className='nav-conatiner'>
                            <nav className={'nav ' + (showMobilenav ? "mobile-nav--show" : "")}>
                                <List type='none' horizontal={!showMobilenav} gap={16}>
                                    <a href='#header' className='mobile-nav--side-header-icon'>
                                        <img width='102' src="https://trophyproperty.ng/wp-content/uploads/2024/02/Trophy-Nig-LOGO-1.png" alt="" />
                                    </a>
                                    <Button type="Plain" onClick={() => {setMobileNav(false)}}><span className='cross-icon'><i className="fa-solid fa-xmark"></i></span></Button>
                                    <Button type='Plain'>Home</Button>
                                    <Button type='Plain'>Properties</Button>
                                    <Button type='Plain'>Design</Button>
                                    <Button type='Plain'>Search</Button>
                                    <Button type='Plain'>About us</Button>
                                    <Button type='Plain'>Contact us</Button>
                                    <Button type='Plain' noHover><span className='user-icon' style={{
                                        ...scrollHeight > 60 && !showMobilenav ? { color: '#000' } : {}
                                    }}><i className="fa-regular fa-circle-user"></i> {showMobilenav ? "User" : ""}</span></Button>
                                    <Button><span>Create Listing <i className="fa-solid fa-chevron-down"></i></span></Button>
                                </List>
                            </nav>
                            <Button type='Plain' noHover onClick={() => { setMobileNav(true) }}><span className='hamburger-icon' style={{
                                ...scrollHeight > 60 ? { color: '#000' } : {}
                            }}><i className="fa-solid fa-bars"></i></span></Button>
                        </div>
                    </FlexChild>
                </FlexLayout>
            </Container>
        </header>
    )
}

export default Header