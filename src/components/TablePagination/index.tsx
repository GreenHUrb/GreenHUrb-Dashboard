import React from 'react'
import './styles.scss'
// import { GrFormPrevious, GrFormNext } from 'react-icons/gr'
import NextIcon from '../../assets/icons/NextIcon.svg'
import PrevIcon from '../../assets/icons/PrevIcon.svg'
import { ITablePaginationProps } from './types'



export const TablePagination = (props: ITablePaginationProps) => {
    const { goToPage, nextPage, prevPage, currentPage, totalPages, itemsAmount, totalDataLength } = props
    return (
        <div className="pagination_component">
            <p className="pagination_component_left">
                Showing <strong>1-{itemsAmount}</strong> of <strong>{totalDataLength}</strong> entries
            </p>
            <div className="pagination_component_right">

                <button onClick={prevPage} disabled={currentPage === 1} className='pagination_component_right_icon'>
                    <img src={PrevIcon} alt='icon' />
                </button>
                <div className="pagination_component_right_number_container">
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i}
                            onClick={() => goToPage(i + 1)}
                            className={`pagination_component_right_number ${currentPage === i + 1 ? 'pagination_component_right_number-active' : ''}`}
                        >
                            {i + 1}
                        </button>
                    ))}
                </div>
                <button onClick={nextPage} disabled={currentPage === totalPages} className='pagination_component_right_icon'>
                    <img src={NextIcon} alt='icon' />
                </button>
            </div>
        </div>
    )
}

