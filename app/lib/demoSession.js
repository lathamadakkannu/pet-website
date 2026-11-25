const DEMO_SESSION_KEY = "treasuremount-demo-signed-in";
const DEMO_USER_NAME_KEY = "treasuremount-demo-user-name";

export function getDemoUserName() {
  if (
    typeof window === "undefined" ||
    window.sessionStorage.getItem(DEMO_SESSION_KEY) !== "true"
  ) {
    return null;
  }

  return window.sessionStorage.getItem(DEMO_USER_NAME_KEY);
}

export function signInDemoUser(name) {
  window.sessionStorage.setItem(DEMO_SESSION_KEY, "true");
  window.sessionStorage.setItem(DEMO_USER_NAME_KEY, name);
}

export function signOutDemoUser() {
  window.sessionStorage.removeItem(DEMO_SESSION_KEY);
  window.sessionStorage.removeItem(DEMO_USER_NAME_KEY);
}
