import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import AppointmentItem from '../AppointmentItem'
import './index.css'

class Appointments extends Component {
  state = {
    appointmentList: [],
    title: '',
    date: 'dd/mm/yyyy',
  }

  onChangeDate = event => {
    this.setState({
      date: event.target.value,
    })
  }

  onChangeTitle = event => {
    this.setState({
      title: event.target.value,
    })
  }

  onClickAddBtn = event => {
    event.preventDefault()
    const {title, date} = this.state
    const newAppointment = {
      id: uuidv4(),
      title,
      date,
      isStared: false,
    }

    this.setState(prevState => ({
      appointmentList: [...prevState.appointmentList, newAppointment],
      title: '',
      date: 'dd/mm/yyyy',
    }))
  }

  onClickStar = uniqueId => {
    this.setState(prevState => ({
      appointmentList: prevState.appointmentList.map(eachAppointment => {
        if (eachAppointment.id === uniqueId) {
          return {...eachAppointment, isStared: !eachAppointment.isStared}
        }
        return eachAppointment
      }),
    }))
  }

  //   onClickStarredButton = event => {
  //     event.preventDefault()
  //     const {appointmentList} = this.state
  //     const filteredAppointments = appointmentList.filter(eachAppointment => {
  //       if (eachAppointment.isStared) {
  //         this.setState({
  //           appointmentList: eachAppointment,
  //         })
  //       }
  //       return filteredAppointments
  //     })
  //   }

  render() {
    const {date, title, appointmentList} = this.state
    return (
      <div className="app-container">
        <div className="appointments-card">
          <h1 className="main-heading">Add Appointment</h1>
          <div className="content-container">
            <form className="form-control">
              <div className="input-container">
                <label htmlFor="title" className="label-element">
                  Title
                </label>
                <input
                  value={title}
                  type="text"
                  placeholder="Title"
                  id="title"
                  className="input-element"
                  onChange={this.onChangeTitle}
                />
              </div>
              <div className="input-container">
                <label htmlFor="date" className="label-element">
                  Date
                </label>
                <input
                  value={date}
                  type="date"
                  className="input-element"
                  id="date"
                  placeholder="dd/mm/yyyy"
                  onChange={this.onChangeDate}
                />
              </div>
              <button
                className="btn"
                type="submit"
                onClick={this.onClickAddBtn}
              >
                Add
              </button>
            </form>
            <div className="image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt="appointments"
                className="image"
              />
            </div>
          </div>
          <hr />
          <div className="appointment-section">
            <h1 className="appointment">Appointments</h1>
            <button
              type="button"
              className="stared-button"
              onClick={this.onClickStarredButton}
            >
              Starred
            </button>
          </div>
          <ul className="my-appointments">
            {appointmentList.map(eachAppointment => (
              <AppointmentItem
                key={eachAppointment.id}
                appointmentDetails={eachAppointment}
                onClickStar={this.onClickStar}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments
