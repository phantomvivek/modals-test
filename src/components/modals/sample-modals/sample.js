import React, { useContext } from 'react'
import ModalContext from '../state/modal-context'

const SampleModal = () => {
    const { dispatch } = useContext(ModalContext)

    // Close this modal
    const closeModal = () => {
        dispatch({ type: 'CLOSE', payload: { key: 'sample' } })
    }

    // Open the 2nd modal from the 1st
    const showModal2 = () => {
        dispatch({ type: 'OPEN', payload: { key: 'sample2' } })
    }

    return (
        <div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse et bibendum ante. Donec sit amet sem commodo,
                vehicula felis a, consectetur sem. Sed non sem eget nibh
                volutpat fermentum. Morbi aliquet metus quis nisl aliquam
                mattis. Donec sagittis facilisis urna sit amet tempus.
            </p>
            <button onClick={showModal2}>Show Modal 2</button>
            <button onClick={closeModal}>Close</button>
        </div>
    )
}

export default SampleModal
