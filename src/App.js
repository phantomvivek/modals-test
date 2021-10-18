import React, { useReducer } from 'react'
import './App.css'
import ModalParent from './components/modals/modal-parent'
import SampleModal from './components/modals/sample-modals/sample'
import SampleModal2 from './components/modals/sample-modals/sample-2'
import ModalContext from './components/modals/state/modal-context'
import ModalReducer from './components/modals/state/modal-reducer'

function App() {
    // The state is set on the app level, with the provider added on the app so dispatch can be accessed at any part of the app
    const [state, dispatch] = useReducer(ModalReducer, {})

    // Sample create modal call via one button
    const createModal = () => {
        // Create sample modal & also show
        dispatch({
            type: 'CREATE',
            payload: { key: 'sample', children: <SampleModal />, isOpen: true },
        })

        // Dispatch sample 2 so it is created, but don't show, we will show this from another part of the tree
        dispatch({
            type: 'CREATE',
            payload: { key: 'sample2', children: <SampleModal2 /> },
        })
    }

    return (
        <ModalContext.Provider value={{ state, dispatch }}>
            <ModalParent />
            <div className="App">
                <button onClick={createModal}>Create Modal 1</button>
            </div>
        </ModalContext.Provider>
    )
}

export default App
