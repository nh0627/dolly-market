import { userRepository } from '../repository'
import { imageService } from '../service'
import { User } from '../model'
import createError from 'http-errors'

class UserService {

    async getAuth(email, password){
        const user_ = await userRepository.getAuth(email, password)

        const imgId = user_.img_rid

        const image = await this.getProfileImage(imgId)

        const user = new User(user_)

        user.image = image

        return user
    }

    async getUserByEmail(email) {
        const user_ = await userRepository.getUserByEmail(email, password)
        const user = new User(user_)

        return user
    }

    async getProfileImage(imgId) {
        // 마스터 이미지 리스트 추가
        const image = await imageService.getImageById(imgId)

        return image
    }

    async saveUser(user) {
        await userRepository.saveUser(user)
    }

}

export default new UserService()