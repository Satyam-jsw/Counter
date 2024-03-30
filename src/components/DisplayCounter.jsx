import React from 'react'
import { useSelector } from 'react-redux'

const DisplayCounter = () => {
    const counter = useSelector((store) => store.counter);

    return (
        <>
            <div className="lead mb-4">
                <p>The value of counter is</p>
                <span className='count-color'> {counter} </span>
            </div>
        </>
    )
}

export default DisplayCounter