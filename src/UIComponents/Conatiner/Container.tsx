import React, { ReactElement } from 'react'

const Container = ({ children }: { children: ReactElement | ReactElement[] }) => {
    return (
        <div className='container'>{children}</div>
    )
}

export default Container