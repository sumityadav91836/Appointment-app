import './index.css'
import {format} from 'date-fns'

const AppointmentItem = props => {
  const {appointmentDetails, onClickStar} = props
  const {id, title, date, isStared} = appointmentDetails

  const onClickStarButton = () => {
    onClickStar(id)
  }

  const starImgUrl = isStared
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  return (
    <li className="list-container">
      <div className="name-and-star-container">
        <p className="name">{title}</p>
        <button
          type="button"
          className="btn-star"
          data-testid="star"
          onClick={onClickStarButton}
        >
          <img src={starImgUrl} alt="star" />
        </button>
      </div>
      <p className="date">{date}</p>
    </li>
  )
}

export default AppointmentItem
