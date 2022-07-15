import {CURRENT_USER } from "./user.types"


export const setCurrentuser = (user) => ({
type:CURRENT_USER,
payload: user,
});
