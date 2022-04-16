import { axiosClassic } from 'api/interceptors'
import axios from 'axios'
import Cookies from 'js-cookie'

import { getAuthUrl } from '@/configs/api.config'

import { IAuthResponse } from '@/store/user/user.interface'

import { getContentType } from './../../api/api.hepler'
import { removeTokensStorage, saveToStorage } from './auth.helper'

export const AuthService = {
	async register(email: string, password: string) {
		const response = await axiosClassic.post<IAuthResponse>(
			getAuthUrl('/register'),
			{
				email,
				password,
			}
		)

		if (response.data.accessToken) {
			saveToStorage(response.data)
		}

		return response
	},
	async login(email: string, password: string) {
		const response = await axios.post<IAuthResponse>(getAuthUrl('/login'), {
			email,
			password,
		})

		if (response.data.accessToken) {
			saveToStorage(response.data)
		}

		return response
	},
	logout() {
		removeTokensStorage()
		localStorage.removeItem('user')
	},
	async getNewTokens() {
		const refreshToken = Cookies.get('refreshToken')
		const response = await axios.post<IAuthResponse>(
			getAuthUrl('/login/access-token'),
			{
				refreshToken,
			},
			{
				headers: getContentType(),
			}
		)

		if (response.data.accessToken) {
			saveToStorage(response.data)
		}

		return response
	},
}
