export default function isLoggedIn() {
  if (localStorage.getItem("jwtToken")) {
    return true;
  }
  return false;
}