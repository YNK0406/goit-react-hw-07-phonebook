
import { createAction } from "@reduxjs/toolkit";

export const addContactRequest = createAction("contacts/addContactRequest");
export const addContactSeccess = createAction("contacts/addContactSeccess");
export const addContactError = createAction("contacts/addContactError");
export const changeFilter = createAction("contacts/changeFilter");
