import axios from "axios";
import { useCallback } from "react";
import { TasksStructure } from "../types";

interface UseApiStructure {
  getTasks: () => Promise<TasksStructure[]>;
}
const apiURL = import.meta.env.VITE_API_URL;

const useApi = (): UseApiStructure => {
  const getTasks = useCallback(async () => {
    const { data: tasks } = await axios.get(`${apiURL}data`);
    return tasks;
  }, []);

  return { getTasks };
};

export default useApi;
