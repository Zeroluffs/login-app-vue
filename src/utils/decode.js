import jwt_decode from "jwt-decode";

export const decodeToken = (token) => {
  try {
    let decoded = jwt_decode(token);
    const user = {
      token: token,
      ...decoded,
    };
    return user;
  } catch (error) {}
};
