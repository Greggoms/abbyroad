import React, { useState, useEffect } from "react"
import format from "date-fns/format"
import styled from "styled-components"

export const Clock = () => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    setInterval(() => tick(), 1000)
    return clearInterval()
  }, [])

  const tick = () => {
    setTime(new Date())
  }

  const handleFormatDate = () => {
    return format(new Date(), `EEEE MMMM do,`)
  }

  return (
    <ClockContainer>
      <p>{handleFormatDate()}</p> <p>{time.toLocaleTimeString()}</p>
    </ClockContainer>
  )
}

const ClockContainer = styled.div`
  grid-column: 1/-1;
  grid-row: 2;

  color: ${props => props.theme.grayscale.light1};
  background: ${props => props.theme.grayscale.dark4};
  padding: 10px 0;
  margin: 15px 0;

  display: flex;
  justify-content: center;
  gap: 5px;

  @media ${props => props.theme.breakpoints.tablet} {
    flex-direction: row;
  }

  p {
    margin: 0;
  }
`
