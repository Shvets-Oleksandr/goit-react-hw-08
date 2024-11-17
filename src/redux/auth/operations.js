import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

export const authInstance = axios.create({
  baseURL: 'https://connections-api.goit.global/',
});

export const setToken = token => {
  authInstance.defaults.headers.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  authInstance.defaults.headers.Authorization = '';
};

export const registerUser = createAsyncThunk(
  '/auth/signup',
  async (formData, thunkAPI) => {
    try {
      const { data } = await authInstance.post('/users/signup', formData);
      setToken(data.token);
      return data;
    } catch (error) {
      if (error.response && error.response.status === 400) {
        return thunkAPI.rejectWithValue(
          'The user with this E-mail is already registered!'
        );
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  '/auth/login',
  async (formData, thunkAPI) => {
    try {
      const { data } = await authInstance.post('/users/login', formData);
      setToken(data.token);
      return data;
    } catch (error) {
      if (error.response && error.response.status === 400) {
        return thunkAPI.rejectWithValue('Incorrect user email or password!');
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  '/auth/logout',
  async (_, thunkAPI) => {
    try {
      const { data } = await authInstance.post('/users/logout');
      clearToken();
      return data;
    } catch (error) {
      if (error.response && error.response.status === 401) {
        return thunkAPI.rejectWithValue(
          'The user with this e-mail is logged in from another device. Refresh the page and Sign in again on the current device.!'
        );
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  '/auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;

    if (token === null) {
      return thunkAPI.rejectWithValue(
        'Failed to get user, please login or register user'
      );
    }
    try {
      setToken(token);
      const { data } = await authInstance.get('/users/current');
      return data;
    } catch (error) {
      if (error.response && error.response.status === 401) {
        return thunkAPI.rejectWithValue(
          'The user with this e-mail is logged in from another device. Sign in again on the current device.!'
        );
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
