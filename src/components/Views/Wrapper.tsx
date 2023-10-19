import React, { PropsWithChildren, ReactNode } from 'react'

const Wrapper = ({ children }: PropsWithChildren) => {
    return (
        <div className='min-h-screen'>{children}</div>
    )
}

export default Wrapper