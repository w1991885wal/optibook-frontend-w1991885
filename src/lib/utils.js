export const handleLogout = () => {
  localStorage.removeItem("user");
  window.location.href = "/";
};
