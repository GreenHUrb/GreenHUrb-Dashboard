import React from 'react'
import './TopProducts.scss'

const TopProducts = () => {
    return (
        <div className='top_products_dashboard'>
            <div className="top_products_dashboard_container">
                <h2 className="top_products_dashboard_header">
                    Top Products
                </h2>
                <div className="top_products_dashboard_content">
                    You have no products up yet
                </div>
            </div>
        </div>
    )
}

export default TopProducts