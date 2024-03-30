import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'

const Controls = () => {
    const addElement = useRef();
    const dispatch = useDispatch();

    const handleIncrement = (e) => {
        e.preventDefault();
        dispatch({ type: 'INCREMENT' })
    }
    const handleDecrement = (e) => {
        e.preventDefault();
        dispatch({ type: 'DECREMENT' })
    }

    const AddValue = (event) => {
        event.preventDefault();

        const num = addElement.current.value;
        dispatch({ type: 'ADD_VALUE', payload: { num } });
        addElement.current.value = ""
    }
    const resetValue = (e) => {
        e.preventDefault();
        dispatch({ type: 'RESET' });
    }

    const privacyToggler = () => {
        dispatch({ type: "PRIVACY_TOGGLER" })
    }
    return (
        <>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <button type="button" className="btn btn-primary btn-lg px-4 gap-3" onClick={handleIncrement}>
                    +1
                </button>
                <button type="button" className="btn btn-outline-secondary btn-lg px-4" onClick={handleDecrement}>
                    -1
                </button>

            </div >
            <div className='mt-3'>
                <div className="d-grid gap-2 justify-content-sm-center">
                    <input type='number' placeholder='Enter the value ' className='input-border' ref={addElement} />
                    <div className='mt-2'>
                        <button className='btn btn-primary button-gap' onClick={AddValue}>Add-Value</button>
                        <button className='btn btn-primary button-gap' onClick={resetValue}>Reset</button>
                        <button className='btn btn-primary' onClick={privacyToggler}>Privacy Toggle</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Controls