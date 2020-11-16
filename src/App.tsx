import React, { useState } from 'react';
import './App.css';

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

import { ReactComponent as ChevronLeft } from "bootstrap-icons/icons/chevron-left.svg";

import { useSwipeable } from "react-swipeable";

function App() {
  const [messagesPanelIsOpen, setShowMessagesPanel] = useState(false);
  const handleShowMessagesPanel = () => setShowMessagesPanel(true);
  const handleCloseMessagesPanel = () => setShowMessagesPanel(false);
  const handlers = useSwipeable({
    onSwipedLeft: () => { handleShowMessagesPanel() }
  });

  return (
    <div className="App">

      <div className="messagesPanel">
	<Modal
          size="sm"
          show={messagesPanelIsOpen}
          onHide={handleCloseMessagesPanel}
          dialogClassName="modal-dialog-slideout"
	>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            ...
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseMessagesPanel}>
              Close
            </Button>
            <Button variant="primary" onClick={handleCloseMessagesPanel}>
              Save Changes
            </Button>
          </Modal.Footer>
	</Modal>
      </div>

      <div className="messagePane">
	<div className="message" style={{ marginRight: "1rem", padding: "1rem" }}>
	  <h1>Header</h1>
	  <p>
	    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus euismod, purus vitae varius lacinia, nibh est mollis metus, in tincidunt lorem ligula id lacus. Nunc venenatis nibh ut mauris egestas, vitae tincidunt turpis viverra. Fusce erat lorem, gravida sed mollis in, tempus at turpis. Praesent in justo bibendum, sagittis mauris vel, sollicitudin nulla. Cras facilisis viverra risus at varius. Sed mauris ligula, imperdiet et dictum ac, pellentesque convallis enim. Cras non consectetur nisi, et aliquet ipsum. Aenean tincidunt aliquet tellus et dignissim. Vestibulum volutpat lectus ut arcu condimentum, vitae laoreet ex bibendum. Nam pharetra mollis interdum. Maecenas venenatis dapibus metus, sed interdum arcu hendrerit in.
	  </p>
	</div>
	<Button
	  variant="primary"
	  size="sm"
	  className="position-fixed h-auto p-0 rounded-0"
	  aria-label="Activate messagesPanel"
	  onClick={handleShowMessagesPanel}
	  style={{ top: 0, right: 0 }}
          {...handlers}
	>
          <ChevronLeft
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            className="bi bi-chevron-right"
            fill="#fff"
          />
	</Button>
      </div>

    </div>
  );
}

export default App;
