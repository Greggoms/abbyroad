import React from "react"
import { useForm } from "react-hook-form"
import emailjs, { init } from "@emailjs/browser"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.min.css"
import { FormContainer } from "../elements"

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const toastifySuccess = () => {
    toast("Form Sent!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className: "submit-feedback success",
      toastId: "notifyToast",
    })
  }

  const onSubmit = async data => {
    const { name, email, subject, message } = data

    try {
      init(`${process.env.EMAILJS_USER_ID}`)
      const templateParams = {
        name,
        email,
        subject,
        message,
      }
      await emailjs.send(
        `${process.env.GATSBY_EMAILJS_SERVICE_ID}`,
        `${process.env.GATSBY_EMAILJS_TEMPLATE_ID}`,
        templateParams,
        `${process.env.GATSBY_EMAILJS_USER_ID}`
      )
      reset()
      toastifySuccess()
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <>
      <FormContainer
        id="contact-form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <div className="form-section">
          <input
            type="text"
            name="name"
            {...register("name", {
              required: {
                value: true,
                message: "Please enter your name",
              },
              maxLength: {
                value: 30,
                message: "Please use 30 characters or less",
              },
            })}
            className="input-name"
            placeholder="Name"
          />
          {errors.name && (
            <span className="error-message">{errors.name.message}</span>
          )}
        </div>
        <div className="form-section">
          <input
            type="email"
            name="email"
            {...register("email", {
              required: true,
              pattern:
                /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            })}
            className="input-email"
            placeholder="Email address"
          />
          {errors.email && (
            <span className="error-message">
              Please enter a valid email address
            </span>
          )}
        </div>
        <div className="form-section">
          <input
            type="text"
            name="subject"
            {...register("subject", {
              required: {
                value: true,
                message: "Please enter a subject",
              },
              maxLength: {
                value: 75,
                message: "Subject cannot exceed 75 characters",
              },
            })}
            className="input-subject"
            placeholder="Subject"
          />
          {errors.subject && (
            <span className="error-message">{errors.subject.message}</span>
          )}
        </div>
        <div className="form-section">
          <textarea
            rows={3}
            name="message"
            {...register("message", {
              required: true,
            })}
            className="input-message"
            placeholder="Message"
          />
          {errors.message && (
            <span className="error-message">Please enter a message</span>
          )}
        </div>
        <button className="submit-btn" type="submit">
          Submit
        </button>
      </FormContainer>
      <ToastContainer />
    </>
  )
}
