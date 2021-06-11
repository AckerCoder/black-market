import React, {useState, useEffect} from 'react';

import CustomButton from '../../components/custom-button/custom-button.component';

import { auth, getUserData, getUser } from '../../firebase/firebase.utils';

import './side-panel.styles.scss';


const SidePanel = () => {
    const [currentUserData, setCurrentUserData] = useState({email:""});
    
    const loadUserData = () => {
        if(auth.currentUser){
            console.log(getUser(auth.currentUser.uid))
            //setCurrentUserData();
        }
    }

    return(
        <div className="side-panel">
            <CustomButton redButton onClick = {() => {auth.currentUser.delete().then().catch()}}>Cerrar Cuenta</CustomButton>
            <div className="options">
                <CustomButton greyButton>Historial de Compras</CustomButton>
                <CustomButton redButton onClick={() => auth.signOut()}>Salir</CustomButton>
            </div>
        </div>
    )
    
}

export default SidePanel;
