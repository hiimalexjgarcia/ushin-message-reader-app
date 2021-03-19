import React, { useState } from 'react'
import './App.css'

import Screen from './Screen'

import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import 'bootstrap/dist/css/bootstrap.min.css'

import { ReactComponent as ChevronLeft } from 'bootstrap-icons/icons/chevron-left.svg'

import { useSwipeable } from 'react-swipeable'

function App (): any {
  const [messagesPanelIsOpen, setShowMessagesPanel] = useState(false)
  const handleShowMessagesPanel = (): any => setShowMessagesPanel(true)
  const handleCloseMessagesPanel = (): any => setShowMessagesPanel(false)
  const swipeableHandlers = useSwipeable({
    onSwipedLeft: () => { handleShowMessagesPanel() }
  })

  return (
    <div className='App'>

      <Jumbotron fluid>
	<Container>
	  <h1>Contextual UI: Screen</h1>
	  <p>
	    This is an example of how to use Screen, a Contextual UI component for visualizing
            and composing ushin messages.
	  </p>
	</Container>
      </Jumbotron>

      <Container>
	<Row>
	  <Col sm={3}>
	    <p>
	      The Screen component contains nine Regions, each of which correspond to the nine ushin "shapes".
	      Each Region contains any number of Points.
	    </p>
	  </Col>
	  <Col sm={9}>
	    <div className='messagePane'>
              <Screen style={{ marginRight: '2rem' }} />
              <Button
		variant='primary'
		size='sm'
		className='position-absolute h-100 p-0 rounded-0'
		aria-label='Activate messagesPanel'
		onClick={handleShowMessagesPanel}
		style={{ top: 0, right: 0 }}
		{...swipeableHandlers}
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
	  </Col>
	</Row>
      </Container>

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


    </div>
  )
}

export default App
