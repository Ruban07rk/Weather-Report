import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_WEATHER_START, fetchWeatherSuccess, fetchWeatherFailure } from '../redux/actions';

const API_KEY = "4ef6114e1454249bf4ca960ffd2fb955";

function* fetchWeatherSaga(action) {
  const requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${action.payload}&appid=${API_KEY}&units=metric`;
  try {
    const response = yield call(axios.get, requestUrl);
    yield put(fetchWeatherSuccess(response.data));
  } catch (error) {
    yield put(fetchWeatherFailure(error.message));
  }
}

function* weatherSaga() {
  yield takeLatest(FETCH_WEATHER_START, fetchWeatherSaga);
}

export default weatherSaga;
