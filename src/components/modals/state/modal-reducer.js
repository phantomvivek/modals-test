const ModalReducer = (state = {}, action) => {
    const { type, payload } = action
    console.log('Modal action', type, payload)
    switch (type) {
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
