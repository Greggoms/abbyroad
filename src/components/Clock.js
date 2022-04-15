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
    return format(new Date(), `EEEE MMMM dd, yyyy`)
  }

  return (
    <ClockContainer>
      {handleFormatDate()} {time.toLocaleTimeString()}
    </ClockContainer>
  )
}

const ClockContainer = styled.div`
  color: ${props => props.theme.grayscale.light1};
  background: ${props => props.theme.grayscale.dark4};
  padding: 0 10px;
  grid-column: 4;
  justify-self: flex-end;

  @media ${props => props.theme.breakpoints.mobile} {
    grid-column: 1/-1;
    grid-row: 2;
    justify-self: center;
  }
`
