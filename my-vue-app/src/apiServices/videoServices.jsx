import * as request from "../utils/request"

export const getListVideo = async (type = 'for-you', page, except) => {
    try {
        const res = await request.get('videos', {
            params: {
                type,
                page,
                except
            }
        })

        return res.data
    } catch (error) {
        console.log('Lỗi nè: Phần getVideoServices', error)
    }
}