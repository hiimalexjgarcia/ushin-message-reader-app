import React, { useState } from 'react'
import './App.css'

import Message from './Message'

import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import 'bootstrap/dist/css/bootstrap.min.css'

import { ReactComponent as ChevronLeft } from 'bootstrap-icons/icons/chevron-left.svg'

import { useSwipeable } from 'react-swipeable'

function App (): any {
  const [messagesPanelIsOpen, setShowMessagesPanel] = useState(false)
  const handleShowMessagesPanel = (): any => setShowMessagesPanel(true)
  const handleCloseMessagesPanel = (): any => setShowMessagesPanel(false)
  const handlers = useSwipeable({
    onSwipedLeft: () => { handleShowMessagesPanel() }
  })

  return (
    <div className='App'>

      <div className='messagesPanel'>
        <Modal
          size='sm'
          show={messagesPanelIsOpen}
          onHide={handleCloseMessagesPanel}
          dialogClassName='modal-dialog-slideout'
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            ...
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={handleCloseMessagesPanel}>
              Close
            </Button>
            <Button variant='primary' onClick={handleCloseMessagesPanel}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      <div className='messagePane'>
        <Message style={{ marginRight: '2rem', padding: '0rem' }} />
        <Button
          variant='primary'
          size='sm'
          className='position-fixed p-0 rounded-0'
          aria-label='Activate messagesPanel'
          onClick={handleShowMessagesPanel}
          style={{ top: 0, right: 0, height: 'calc(100% / 8)' }}
          {...handlers}
        >
          <ChevronLeft
            width='1em'
            height='1em'
            viewBox='0 0 16 16'
            className='bi bi-chevron-left'
            fill='#fff'
          />
        </Button>
      </div>

    </div>
  )
}

export default App
