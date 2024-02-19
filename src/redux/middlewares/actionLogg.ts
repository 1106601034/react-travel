import { Middleware } from "redux"

// Print log to record action
export const actionLog: Middleware = (store) => (next) => (action) => {
    console.log("Current state", store.getState());
    console.log("Fire action", action);
    next(action)
    console.log("Upgraded State", store.getState());
};