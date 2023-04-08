import axios from "axios";

const API_URL = "https://fe22-178-57-124-20.eu.ngrok.io/auth/";

const register = (userName, email, password) => {
    return axios.post(API_URL + "signup", {
        userName,
        email,
        password,
    });
};

const login = (userName, password) => {
    return axios
        .post(API_URL + "signin", {
            userName,
            password,
        })
        .then((response) => {
            if (response.data.token) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }

            return response.data;
        });
};

const logout = () => {
    localStorage.removeItem("user");
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
    register,
    login,
    logout,
    getCurrentUser,
};

export default AuthService;