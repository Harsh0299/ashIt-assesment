import React, { ReactElement } from 'react'

const Container = ({ maxWidth, children }: { maxWidth?: number; children: ReactElement | ReactElement[] }) => {
    return (
        <div className='container' style={{ ...maxWidth ? { maxWidth } : {} }}>{children}</div>
    )
}

export default Container