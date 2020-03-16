import passport from 'passport'
import createError from 'http-errors'
import jwt from 'jsonwebtoken'
import { methods } from '../constant'
import DollyRouter from './dollyRouter'
const dollyRouter = new DollyRouter()
const router = dollyRouter.getRouter()

dollyRouter.handler(methods.POST, '/login', async (req, res, next) => {
    passport.authenticate('local', { session: false }, (err, user) => {

        if(!user){
            return next(createError(400, 'User not Found'))
        }
        
        req.login(user, { session: false }, () => {
            const token = jwt.sign(JSON.stringify(user), process.env.JWT_SECRET)
            return res.json({ user, token })
        })

    })(req, res)
})

// Todo: 에러 핸들링
dollyRouter.handler(methods.GET, '/test', passport.authenticate('jwt', {session: false}), async (req, res) => {
    res.json({message: 'success'})
})

export default router