// väliaikainen sisäänkirjautuminen

const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "admin123";
const TOKEN_KEY = "adminToken";

/**
 * @param {string} username
 * @param {string} password
 * @return {boolean} true kun kirjautuminen onnistuu
 */

const loginAdmin = (username, password) => {
  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    localStorage.setItem(TOKEN_KEY, "demo-token");
    return true;
  }
  return false;
};

const logoutAdmin = () => {
  localStorage.removeItem(TOKEN_KEY);
};

const isAdminLoggedIn = () => localStorage.getItem(TOKEN_KEY) === "demo-token";

export { loginAdmin, logoutAdmin, isAdminLoggedIn };
