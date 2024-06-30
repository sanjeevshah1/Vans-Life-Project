import Star from "./../../assets/star.png"
const Reviews = () => {
  return (
   <div className="review-container">
      <div className="your-review">
        <div className="verti-center">
          <p>Your review</p>
          <p>last <span id="days">30 days</span></p>
        </div>
      </div>
      <div className="rating verti-center">
        <p>5.0</p>
        <img src={Star} id="star" alt="star-logo" />
        <p>overall rating</p>
      </div>
      <div className="rate-percent flex verti-center">
        <p>4 Stars</p>
        <div className="percent-bar">
          <div className="inner-100"></div>
        </div>
        <p>100%</p>
      </div>
      <div className="rate-percent flex verti-center">
        <p>4 Stars</p>
        <div className="percent-bar">
          <div className=""></div>
        </div>
        <p>0%</p>
      </div>
      <div className="rate-percent flex verti-center">
        <p>3 Stars</p>
        <div className="percent-bar">
          <div className=""></div>
        </div>
        <p>0%</p>
      </div>
      <div className="rate-percent flex verti-center">
        <p>2 Stars</p>
        <div className="percent-bar">
          <div className=""></div>
        </div>
        <p>0%</p>
      </div>
      <div className="rate-percent flex verti-center">
        <p>1 Stars</p>
        <div className="percent-bar">
          <div className=""></div>
        </div>
        <p>0%</p>
      </div>
   </div>
  )
}

export default Reviews