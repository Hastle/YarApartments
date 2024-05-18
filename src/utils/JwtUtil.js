import * as jose from "jose";

const JWT_KEY = process.env.JWT_KEY;

export const decodeToken = (token) => {
	if (!token) {
		console.log("No token provided");
		return null;
	}

	try {
		return jose.decodeJwt(token);
	} catch (error) {
		console.error("Error decoding JWT token:", error);
		return null;
	}
};
