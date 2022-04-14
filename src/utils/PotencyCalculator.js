import React, { useState } from "react"
import { PotencyCalculatorContainer } from "../elements"

export const PotencyCalculator = () => {
  const [mg, setMg] = useState("")
  const [ml, setMl] = useState("")

  const handleMgChange = event => {
    setMg(event.target.value)
  }
  const handleMlChange = event => {
    setMl(event.target.value)
  }

  function divide(mg, ml) {
    const result = mg / ml
    if (result <= 14.99) {
      return (
        <p>
          {mg}mg &#xf7; {ml}mL = {result} mg/mL &#x2192; (Low Strength)
        </p>
      )
    } else if (result >= 15 && result <= 29.99) {
      return (
        <p>
          {mg}mg &#xf7; {ml}mL = {result} mg/mL &#x2192; (Medium Strength)
        </p>
      )
    } else if (result >= 30 && result <= 59.99) {
      return (
        <p>
          {mg}mg &#xf7; {ml}mL = {result} mg/mL &#x2192; (High Strength)
        </p>
      )
    } else if (result >= 60) {
      return (
        <p>
          {mg}mg &#xf7; {ml}mL = {result} mg/mL &#x2192; (Ultra-High Strength)
        </p>
      )
    } else {
      return <p>Please enter valid numbers.</p>
    }
  }
  return (
    <PotencyCalculatorContainer>
      <h4>Try it yourself!</h4>
      <div className="inputs">
        <div>
          <p>Strength in milligrams</p>
          <input
            type="number"
            name="mg"
            onChange={handleMgChange}
            value={mg}
            placeholder="Strength in mg"
          />
        </div>
        <div>
          <p>Bottle Size in milliliters</p>
          <input
            type="number"
            name="ml"
            onChange={handleMlChange}
            value={ml}
            placeholder="Bottle Size in mL"
          />
        </div>
      </div>
      {divide(mg, ml)}
    </PotencyCalculatorContainer>
  )
}
