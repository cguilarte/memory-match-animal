export const TOKEN_USER = `__USER_MEMORY_MATCH_ANIMAL`;

export const setUserToken = (user) => {
    localStorage.setItem(TOKEN_USER, user);
};

export const getUserToken = () => localStorage.getItem(TOKEN_USER);

export const verifyAuth = () => {
    return getUserToken();
};