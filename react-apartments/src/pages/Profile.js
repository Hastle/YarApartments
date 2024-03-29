import React from 'react';
import {Navigate, useNavigate} from 'react-router-dom';
import AuthService from '../services/auth.service';

const Profile = () => {
    const currentUser = AuthService.getCurrentUser();
    let navigate = useNavigate();
    const logout = () => {
        AuthService.logout();
        navigate("/");
    };
    return (
        <>
            {currentUser ? (
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h3>Профиль</h3>
                                <p>Имя пользователя: {currentUser.userName}</p>
                                <button onClick={logout}>Выйти</button>
                            </div>
                        </div>
                    </div>
                </section>
            ) : (
                <Navigate to="/" />
            )
            }
        </>
    );
}

export default Profile;
