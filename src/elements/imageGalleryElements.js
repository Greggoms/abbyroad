import styled from "styled-components"
import "react-responsive-carousel/lib/styles/carousel.min.css"

export const ImageGalleryContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;

  .carousel-slider {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 2rem 45px;
    grid-gap: 25px;
  }

  .slider-wrapper {
    grid-column: 1 / -1;
    grid-row: 1;
  }

  .carousel-root {
    grid-column: 1;
    grid-row: 1;
    max-height: 99.6vh;
    overflow: clip;
  }

  .modal-close-btn {
    align-self: flex-start;
    justify-self: flex-end;
    grid-column: 1;
    grid-row: 1;
    padding: 1rem;
    font-size: 30pt;
    color: red;
    background: rgba(255, 255, 255, 0.8);
    border: none;
    z-index: 10;
    margin: 10px 20px;
    border-radius: 10px;
  }

  .control-arrow {
    align-self: flex-start;

    border-radius: 10px;
    opacity: 1 !important;
    top: 85% !important;
    height: 100%;
    max-height: 50px;
    width: 100px;
    position: unset !important;
    padding: 0 !important;
    margin-top: 0 !important;
    font-size: 21px !important;
  }

  .control-prev {
    background: rgba(51, 51, 51, 0.8) !important;
    grid-column: 1;
    grid-row: 2;
    align-self: center;
    justify-self: flex-end;
  }

  .control-next {
    background: rgba(51, 51, 51, 0.8) !important;
    grid-column: 2;
    grid-row: 2;
    align-self: center;
    justify-self: flex-start;
  }

  .control-dots {
    background: ${props => props.theme.grayscale.dark4};
    padding: 5px !important;
    border-radius: 10px;
    right: 50%;
    transform: translateX(50%);
    // width: calc(100vw - 50%) !important;
    max-width: max-content;
    grid-row: 3;
    grid-column: 1 / -1;
  }

  .carousel-status {
    display: none;
  }
`
