// src/mocks/handlers.js
import { rest } from "msw";
import tasksMocks from "./tasksMocks";

const apiURL = import.meta.env.VITE_API_URL;

export const handlers = [
  rest.get(`${apiURL}tasks`, (_request, response, context) => {
    return response(context.status(200), context.json(tasksMocks));
  }),
];
