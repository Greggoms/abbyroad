import React, { useState } from "react"
import Modal from "react-modal"
import { Carousel } from "react-responsive-carousel"
import { ImageGalleryContainer } from "../elements"

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
}

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#___gatsby")

export const ImageGallery = props => {
  const [modalIsOpen, setIsOpen] = useState(false)

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  return (
    props.gallery.length > 0 && (
      <>
        <button onClick={openModal}>See More Pictures</button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <ImageGalleryContainer>
            <button onClick={closeModal} className="modal-close-btn">
              X
            </button>
            <Carousel
              swipeable
              emulateTouch
              infiniteLoop
              showThumbs={false}
              showStatus={false}
            >
              {props.gallery.map((images, key) => (
                <div key={key}>{images}</div>
              ))}
            </Carousel>
          </ImageGalleryContainer>
        </Modal>
      </>
    )
  )
}
