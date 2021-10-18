const ModalReducer = (state = {}, action) => {
    const { type, payload } = action
    switch (type) {
        // Action for creating a modal
        // Modal will only be shown if the isOpen param is true
        case 'CREATE': {
            const modal = {
                key: payload.key,
                children: payload.children,
                isOpen: payload.isOpen || false,
            }

            state = {
                ...state,
                [payload.key]: modal,
            }
            return state
        }

        // Action for showing a modal
        case 'OPEN': {
            const modalKey = payload.key
            const modalData = state[modalKey]
            state = {
                ...state,
                [modalKey]: {
                    ...modalData,
                    isOpen: true,
                },
            }
            return state
        }

        // Action for closing an open modal
        case 'CLOSE': {
            const modalKey = payload.key
            const modalData = state[modalKey]
            state = {
                ...state,
                [modalKey]: {
                    ...modalData,
                    isOpen: false,
                },
            }
            return state
        }

        default:
            return state
    }
}

export default ModalReducer
