import User from "../models/user.model.js"
import UrlModel from "../models/shortUrl.model.js"

export const findUserByEmail = async (email) => {
    return await User.findOne({email})
}

export const findUserByEmailByPassword = async (email) => {
    return await User.findOne({email}).select('+password')
}

export const findUserById = async (id) => {
    return await User.findById(id)
}

export const createUser = async (name, email, password) => {
    const createdNewUser = new User({name, email, password})
    await createdNewUser.save()
    return createdNewUser
}

export const getAllUserUrlsDao = async (id) => {
    return await UrlModel.find({user:id})
}