'use server'

import { API_URL } from "@/src/shared/constants/server"

interface IAuthResponse {
	accessToken: string
	refreshToken: string
}

export async function getNewTokensByRefresh(refreshToken: string) {
	const response = await fetch(`${API_URL}/auth/refresh`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Cookie: `refreshToken=${refreshToken}`
		},
		credentials: 'include'
	})

	if (!response.ok) {
		throw new Error('Failed to fetch new tokens')
	}

	const data: IAuthResponse = await response.json()
	return data
}
