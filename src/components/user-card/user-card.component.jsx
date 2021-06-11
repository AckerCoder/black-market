import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import Popup from 'reactjs-popup';

import 'reactjs-popup/dist/index.css';
import './user-card.styles.scss';



const UserCard = ({user}) => {
    
    return(
        <div className="user-card">
                <h2>{user.email}</h2>
                <CustomButton redButton>Lista de Calificaciones</CustomButton>
                <CustomButton redButton>Contenidos Descargados</CustomButton>
                <Popup trigger={<CustomButton redButton>Agregar Saldo</CustomButton>} modal>
                    <h2>Introduzca la cantidad de saldo que desea agregar</h2>
                    {
                        console.log(user)
                    }
                </Popup>
        </div>
    )
}

export default UserCard;