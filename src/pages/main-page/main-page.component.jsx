import React from 'react';
import SidePanel from '../../components/side-panel/side-panel.component';

import UserHeader from '../../components/user-header/user-header.component';

import './main-page.styles.scss';

const MainPage = () => {
    return(
      <div className='main-page'>
        <UserHeader/>
        <SidePanel/>
      </div>
    )
}

export default MainPage;
