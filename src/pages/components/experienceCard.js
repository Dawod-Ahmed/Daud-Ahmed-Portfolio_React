import React from 'react'

const experienceCard = (props) => {
    const {title,location,detail,duration}=props;
  return (
    <>
      <div className="experience-card p-4 mb-5 ">
            <div className="department-location"> {title} </div>

            <span className="duration">
              <span className="duration-dot">● </span>{location}
            </span>
            <div className="department-title pb-2">{detail}</div>

            <p className="experience-detail mb-0">
            {duration}
            </p>
          </div></>
  )
}

export default experienceCard