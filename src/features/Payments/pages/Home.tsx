import React, { useState } from 'react';
import '../styles/payment_home_styles.scss';

import { AllRouteConstants } from '../../../router/RouteConstants';

import Button from '../../../components/Button/Button';
import TransactionTable from '../../Transactions/components/Tables/TransactionTable';
import { useNavigate } from 'react-router-dom';
import KpiBalanceCard from '../../Home/components/KpiBalanceCard/KpiBalanceCard';
import PaymentsTable from '../components/Tables/PaymentsTable';
import { dummyPayments, paymentTableHead } from '../data/dummyPayments';

export const Home = () => {
    const navigate = useNavigate()
    const [paymentTableFilter, setPaymentTableFilter] = useState<'all' | 'received' | 'widthdrawn'>('all')

    const walletBalance = '100,000.00';
    const todaysBalance = '35,000.00';



    return (
        <div className='payment_home animate__animated animate__fadeIn'>
            <div className="payment_home_top">
                <KpiBalanceCard cardAmount={walletBalance} cardHeading='Wallet Balance' shadowColor='#355312' />
                <KpiBalanceCard cardAmount={todaysBalance} cardHeading="Today's Balance" shadowColor='#F2C570' />
            </div>
            <div className='payment_home_bottom '>
                <div className="payment_home_table_filter">
                    <div className="payment_home_table_filter_container">
                        <div className='payment_home_table_filter_left'>
                            <Button
                                label='All Payments'
                                variant='text'
                                customClassName={`payment_home_table_filter_left_button ${paymentTableFilter !== 'all' && 'inactive'}`}
                                onClick={() => setPaymentTableFilter('all')}
                            />
                            <Button
                                label='Received'
                                variant='text'
                                customClassName={`payment_home_table_filter_left_button ${paymentTableFilter !== 'received' && 'inactive'}`}
                                onClick={() => setPaymentTableFilter('received')}
                            />
                            <Button
                                label='Withdrawn'
                                variant='text'
                                customClassName={`payment_home_table_filter_left_button ${paymentTableFilter !== 'widthdrawn' && 'inactive'}`}
                                onClick={() => setPaymentTableFilter('widthdrawn')}
                            />
                        </div>

                    </div>
                </div>
                <div className="payment_home_table_container">
                    <PaymentsTable tableData={dummyPayments} tableHead={paymentTableHead} pagination />
                </div>

            </div>

        </div>
    );
}

