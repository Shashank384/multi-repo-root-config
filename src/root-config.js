import { registerApplication, start, unloadApplication, unregisterApplication } from "single-spa";
import * as isActive from "./activity-functions";

registerApplication(
  "login",
  () => System.import("login"),
  isActive.login,
  { domElement: document.getElementById("login-container") }
);

registerApplication(
  "admin",
  () => System.import("admin"),
  isActive.admin,
  { domElement: document.getElementById("admin-container") }
);


start();