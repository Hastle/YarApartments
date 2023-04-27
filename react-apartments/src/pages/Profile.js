import React from 'react';
import { useNavigate } from 'react-router-dom';
import Wrapper from '../components/wrapper/Wrapper';
import AuthService from "../services/auth.service";
const Profile = () => {
        const user = AuthService.getCurrentUser();
        let navigate = useNavigate();
        const logout = () => {
            AuthService.logout();
            navigate("/");
        };
        return (
            <Wrapper>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h3>Профиль</h3>
                                <p>Имя пользователя: {user.userName}</p>
                                <button onClick={logout}>Выйти</button>
                            </div>
                        </div>
                    </div>
                </section>
            </Wrapper>
        );
}

export default Profile;