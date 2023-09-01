import React from 'react'
import './OverviewStyles.scss'

const Overview = () => {
  const appOverview = [
    {
      amount: 0,
      name: 'Total Orders'
    },
    {
      amount: 0,
      name: 'Pending Orders'
    },
    {
      amount: 0,
      name: 'Profile Visits'
    }
  ]
  return (
    <div className='overview_card'>
      <div className="overview_card_container">

        <div className="overview_card_top">
          <h2>Overview</h2>
        </div>
        <div className="overview_card_bottom">
          {appOverview.map((item) => (
            <div className='overview_card_bottom_item'>
              <h2>{item.amount}</h2>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Overview