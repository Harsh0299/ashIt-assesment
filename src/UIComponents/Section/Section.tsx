import React from 'react'
import { Container } from '../Conatiner';
import { FlexChild, FlexLayout } from '../FlexLayout';

interface PropsI {
    heading: string;
    para?: string;
    children?: React.ReactElement | React.ReactElement[];
    conatainerMaxWidth?: number
    id?: string
}

const Section = (props: PropsI) => {
    return (
        <section className='section' id={props?.id || ''}>
            <FlexLayout direction='vertical' gap={32}>
                <FlexChild childWidth='fullWidth'>
                    <h2 className='section-header'>{props.heading}</h2>
                </FlexChild>
                {props?.para && <FlexChild childWidth='fullWidth'>
                    <p className='section-para'>{props?.para}</p>
                </FlexChild>}
                {props.children && <FlexChild childWidth='fullWidth'>
                    <Container maxWidth={props?.conatainerMaxWidth || 1290}>
                        {props.children}
                    </Container>
                </FlexChild>}
            </FlexLayout>
        </section>
    )
}

export default Section