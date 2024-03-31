import React from 'react'
import './Header.css';
import { Button, Container, FlexChild, FlexLayout, List } from '../../UIComponents';

const Header = () => {
    return (
        <header className='header' id='header'>
            <Container>
                <FlexLayout halign='fill' wrap='noWrap' valign='center'>
                    <FlexChild>
                        <a href='#header'>
                            <img width='142' src="https://trophyproperty.ng/wp-content/uploads/2024/02/Trophy-Nig-LOGO-1.png" alt="" />
                        </a>
                    </FlexChild>
                    <FlexChild>
                        <List type='none' horizontal gap={16}>
                            <Button type='Plain'>Home</Button>
                            <Button type='Plain'>Properties</Button>
                            <Button type='Plain'>Design</Button>
                            <Button type='Plain'>Search</Button>
                            <Button type='Plain'>About us</Button>
                            <Button type='Plain'>Contact us</Button>
                            <Button type='Plain'><i className="fa-regular fa-circle-user"></i></Button>
                            <Button>Create Listing</Button>
                        </List>
                    </FlexChild>
                </FlexLayout>
            </Container>
        </header>
    )
}

export default Header