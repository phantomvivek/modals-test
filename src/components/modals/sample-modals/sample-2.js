import React, { useContext } from 'react'
import ModalContext from '../state/modal-context'

const SampleModal2 = () => {
    const { dispatch } = useContext(ModalContext)
    const closeModal = (key) => () => {
        dispatch({ type: 'CLOSE', payload: { key } })
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
            <button onClick={closeModal('sample')}>Close Modal 1</button>
            <button onClick={closeModal('sample2')}>Close Modal 2</button>
        </div>
    )
}

export default SampleModal2
