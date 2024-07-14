
import type {Agenda} from './types';


export const BASE_URL = import.meta.env.API_URL || 'https://api-mock-frontend-day.vercel.app/api/agenda'

const apiGet = async <T>(url: string): Promise<T> => {

  const response:T = await fetch(url, {
    headers:{
      authorization: 'hackthon',
      'Content-Type': 'application/json',
    }
  }).then(r => r.json())

  return response
}

export const getAgenda = () => {
  return apiGet<Agenda>(BASE_URL);
}