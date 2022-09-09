import React, { useState } from 'react';
// Pages below used to navigate between pages in switch case
import Info from './Info';
import SecInfo from './SecInfo';
// React-Bootstrap used as a framework
import Button from 'react-bootstrap/Button';

const Dashboard = () => {
    // Below is the hooks to navigate between the two pages.
    const [page, setPage] = useState('info');
    const [btnText, setBtnText] = useState('To Second Info Page');

    const btnStyle = {
        textAlign: 'center',
    };

    // Function using switch case for the hooks to navigate between the two pages.
    const activePage = () => {
        // setSwitched(false);
        switch (page) {
            case 'info':
                return <Info />
                break;
            case 'secInfo':
                return <SecInfo />
                break;
            default:
                return <Info />;
        }
    };


    // Changes the page for secinfo and info
    const changePage = () => {
        if(page === 'info') {
            setPage('secInfo');
        } else {
            setPage('info');
        }
    };

    // Changes button text for navigation
    const changeBtnText = () => {
        if(btnText === 'To Second Info Page') {
            setBtnText('Go To First Info Page');
        } else {
            setBtnText('Go To Second Info Page');
        }
    }

    return (
        <div style={btnStyle}>
            {activePage()}
            <Button onClick={() => {
                changePage();
                changeBtnText();
            }}>{btnText}</Button>
        </div>
    )
};

export default Dashboard;