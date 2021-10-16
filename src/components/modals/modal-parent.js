import { useContext } from 'react'
import ReactDOM from 'react-dom'
import ModalContext from './state/modal-context'

const ModalParent = () => {
    const { state } = useContext(ModalContext)

    const modalWrapper = (children) => (
        <div className="modal-wrapper">{children}</div>
    )

    console.log(state)

    const modals = Object.keys(state)
        .map((key) => state[key])
        .filter((modal) => modal && modal.isOpen)
        .map((modal) => modalWrapper(modal.children))

    // Append all the modals
    return ReactDOM.createPortal(modals, document.getElementById('modals-root'))
}

export default ModalParent
