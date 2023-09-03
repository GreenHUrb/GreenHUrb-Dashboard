import React, { useState } from 'react'
import '../styles/transaction_home_styles.scss'
import Button from '../../../components/Button/Button'
import TransactionTable from '../components/Tables/TransactionTable'
import { dummyTransactions, transactionTableHead } from '../../Home/data/dummyTransactions'
import { ITransactionStatus } from '../../Home/interfaces/ITransaction'

export const Home = () => {
    const [transactionTableFilter, setTransactionTableFilter] = useState<'all' | ITransactionStatus>('all')
    return (
        <div className='transaction_home'>
            <div className="transaction_home_table_filter">
                <div className="transaction_home_table_filter_container">
                    <div className='transaction_home_table_filter_left'>
                        <Button
                            label='All Transactions'
                            variant='text'
                            customClassName={`transaction_home_table_filter_left_button ${transactionTableFilter !== 'all' && 'inactive'}`}
                        />
                        <Button
                            label='Pending'
                            variant='text'
                            customClassName={`transaction_home_table_filter_left_button ${transactionTableFilter !== 'pending' && 'inactive'}`}
                        />
                        <Button
                            label='Successful'
                            variant='text'
                            customClassName={`transaction_home_table_filter_left_button ${transactionTableFilter !== 'successful' && 'inactive'}`}
                        />
                    </div>

                </div>
            </div>
            <div className="transaction_home_table_container">

                <TransactionTable tableData={dummyTransactions} tableHead={transactionTableHead} pagination />
            </div>

        </div>
    )
}

