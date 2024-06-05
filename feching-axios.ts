import axios, { AxiosRequestHeaders, AxiosResponse } from 'axios'
import { token } from '@/utils/utils'

interface PostParams {
    data: any
    header?: any | AxiosRequestHeaders
}

interface GetParams {
    header?: any | AxiosRequestHeaders
}

interface UseFetchReturnType {
    post: (params: PostParams) => Promise<AxiosResponse<any>>
    get: (params?: GetParams) => Promise<AxiosResponse<any>>
    put: (params: PostParams) => Promise<AxiosResponse<any>>
    patch: (params: PostParams) => Promise<AxiosResponse<any>>
    delete: (params: GetParams) => Promise<AxiosResponse<any>>
}

export const useFetch = (url: string): UseFetchReturnType => {
    const post = async ({ data, header = {} }: PostParams): Promise<AxiosResponse<any>> => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
                ...header,
            },
        }
        try {
            return await axios.post(`${url}`, data, config)
        } catch (error) {
            throw error
        }
    }

    const get = async ({ header = {} }: GetParams = {}): Promise<AxiosResponse<any>> => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
                ...header,
            },
        }
        try {
            return await axios.get(`${url}`, config)
        } catch (error) {
            throw error
        }
    }

    const put = async ({ data, header = {} }: PostParams): Promise<AxiosResponse<any>> => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
                ...header,
            },
        }
        try {
            return await axios.put(`${url}`, data, config)
        } catch (error) {
            throw error
        }
    }

    const patch = async ({ data, header = {} }: PostParams): Promise<AxiosResponse<any>> => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
                ...header,
            },
        }
        try {
            return await axios.patch(`${url}`, data, config)
        } catch (error) {
            throw error
        }
    }

    const remove = async ({ header = {} }: GetParams = {}): Promise<AxiosResponse<any>> => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
                ...header,
            },
        }
        try {
            return await axios.delete(`${url}`, config)
        } catch (error) {
            throw error
        }
    }

    return { post, get, put, patch, delete: remove }
}
