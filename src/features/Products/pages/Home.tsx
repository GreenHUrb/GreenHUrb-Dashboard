import React, { useEffect, useState } from 'react'
import '../styles/product_home_styles.scss'
import ProductTable from '../components/Tables/ProductTable'
import { productTableHead } from '../../Home/data/dummyProducts'
import { TableHead, TableHeadContainer } from '../../../layouts/TableLayout/TableLayout'
import ImageStack from '../components/Imagestack/ImageStack'
import ShoppingCart from '../../../assets/icons/shopping cart.svg'
import Button from '../../../components/Button/Button'
import { IoAddOutline } from 'react-icons/io5'
export const Home = () => {
    const [products, setProducts] = useState({
        all: [],
        fiiltered: []
    })


    return (
        <div className='product_home'>
            <div className="product_home_table_filter">
                <div className="product_home_table_filter_container">


                </div>
            </div>
            <div className="product_home_table_container">
                <TableHeadContainer checkbox>
                    <>
                        {productTableHead.map((head) => (
                            <TableHead label={head} key={head} />
                        ))}
                    </>
                </TableHeadContainer>
                {/* <ProductTable tableData={products.fiiltered} tableHead={productTableHead} > */}
                <div className='product_home_table_empty_state'>
                    <div className="product_home_table_empty_state_container">
                        <div className="product_home_table_empty_state_img_container">
                            <img src={ShoppingCart} alt='cart' />
                        </div>
                        <p className='product_home_table_empty_state_content'>You have no products for sale click on the button to add products</p>
                        <Button variant='contained' label={
                            <div className='product_home_table_empty_state_button'>
                                <IoAddOutline className='icon' />
                                Add New Product
                            </div>
                        } />
                    </div>
                </div>
                {/* </ProductTable> */}
            </div>
            <ImageStack />

        </div>
    )
}

