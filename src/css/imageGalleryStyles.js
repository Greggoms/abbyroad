import styled from "styled-components"
import "react-responsive-carousel/lib/styles/carousel.min.css"

export const ImageGalleryContainer = styled.section`
  display: flex;
  flex-direction: column;

  .carousel-slider {
    height: 100%;
    max-height: 89vh;
  }

  .slider-wrapper {
  }

  .carousel-root {
  }

  .modal-close-btn {
    position: absolute;
    right: 40px;
    top: 10px;

    width: 50px;
    height: 50px;
    font-size: 24pt;
    color: red;
    background: rgba(255, 255, 255, 0.8);
    border: none;
    z-index: 10;
    border-radius: 8px;
  }

  .control-prev {
    background: rgba(51, 51, 51, 0.8) !important;
  }

  .control-next {
    background: rgba(51, 51, 51, 0.8) !important;
  }

  .control-dots {
    background: ${props => props.theme.grayscale.dark4};
    padding: 5px !important;
    border-radius: 10px;
    right: 50%;
    transform: translateX(50%);
    max-width: max-content;
  }
`
