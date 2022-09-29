import React from 'react'
import MyNavbar from '../../Navbar/MyNavbar'

export const LayoutUser = ({ children }) => {

    return (
        <>
            <div className="flex">
                <MyNavbar />
                <div style={{marginTop: 80}}>
                    {children}
                </div>
            </div>
        </>
    )
}
