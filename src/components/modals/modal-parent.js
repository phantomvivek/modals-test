import { useContext } from 'react'
import ReactDOM from 'react-dom'
import ModalContext from './state/modal-context'

const ModalParent = () => {
    const { state } = useContext(ModalContext)

    const modalWrapper = (children) => (
        <div className="modal-wrapper">{children}</div>
    )

    // Filter out modals that don't need to be shown
    const modals = Object.keys(state)
        .map((key) => state[key])
        // Filter out created but not shown modals
        .filter((modal) => modal && modal.isOpen)
        // Wrap the modal children in a container
        .map((modal) => modalWrapper(modal.children))

    // Append all the modals via portal to modals-root, which lives outside the app root
    return ReactDOM.createPortal(modals, document.getElementById('modals-root'))
}

export default ModalParent
