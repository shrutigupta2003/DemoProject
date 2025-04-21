import axios from "axios";

const baseURL = 'https://dummyjson.com';

export const fetchTodosAPI = async () => {
    const response = await axios.get(`${baseURL}/todos`);
    console.log(response);
    console.log(response.data.todos);
    return response.data.todos;
}

export const fetchTodosAPILimitAndSkip = async (skip, limit) => {
    const response = await axios.get(`${baseURL}/todos?limit=${limit}&skip=${skip}`)
    // console.log(response);
    // console.log(response.data.todos);
    return response.data.todos;
}

export const postTodosAPI = async (newTodo) => {
    const response = await axios.post(`${baseURL}/todos/add`, newTodo);
    console.log(response);
    return response.data;
}

export const updateTodosAPI = async (id, newTodo) => {
    const response = await axios.put(`${baseURL}/todos/${id}`, newTodo)
    console.log(response.data);
    return response.data;
}

export const deleteTodosAPI = async (id) => {
    const response = await axios.delete(`${baseURL}/todos/${id}`);
    console.log(response.data);
    return response.data;
}