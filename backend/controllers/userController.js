const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
//connect to db
const db = require('../config/db')
const models = db.models
const sequelize = db.sequelize
// // @desc    Register new Account
// // @route   POST /api/Accounts
// // @access  Public
const register = asyncHandler(async (req, res) => {
    const { id, password,cmnd,country } = req.body
    // Check if Account exists
    const account = await models.Accounts.findOne({
        where: {
            id,
        },
    })
    // log account
    // console.log(account)
    if (account) {
        res.status(400)
        throw new Error('Account already exists')
    }
    const khach = await models.Khachs.findOne({
        where: {
            id:cmnd,
        }
    })
    if(khach){
        res.status(400)
        throw new Error('CMND already exists')
    }
    // Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    // log hashpass
    console.log(hashedPassword.length)
    // Create Account
    const newKhach = await models.Khachs.create({
        id:cmnd,
        LoaiKhach:country,

    })
    const newAccount = await models.Accounts.create({
        id:id,
        CMNDKhach:cmnd,
        _password:hashedPassword,
    })
    //check country in {0,1}
    if(country!=0&&country!=1){
        res.status(400)
        throw new Error('Country is not valid')
    }

    //Create Khach

    // Create token
    const token = jwt.sign({ id: newAccount.id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
    })
    console.log(token)
    // Set token in cookie
    res.cookie('token', token, {
        expires: new Date(
            Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
        ),
        httpOnly: true,
    })
    // Send response
    res.status(201).json({
        token,
        Account: {
            id: newAccount.id,
            //email: newAccount.email,
            cmnd: newAccount.cmnd,
            country: newAccount.country,
        },
    })
})
// const registerAccount = asyncHandler(async (req, res) => {
//   const { name, email, password } = req.body

//   if (!name || !email || !password) {
//     res.status(400)
//     throw new Error('Please add all fields')
//   }

//   // Check if Account exists
//   const AccountExists = await Account.findOne({ email })

//   if (AccountExists) {
//     res.status(400)
//     throw new Error('Account already exists')
//   }

//   // Hash password
//   const salt = await bcrypt.genSalt(10)
//   const hashedPassword = await bcrypt.hash(password, salt)

//   // Create Account
//   const Account = await Account.create({
//     name,
//     email,
//     password: hashedPassword,
//   })

//   if (Account) {
//     res.status(201).json({
//       _id: Account.id,
//       name: Account.name,
//       email: Account.email,
//       token: generateToken(Account._id),
//     })
//   } else {
//     res.status(400)
//     throw new Error('Invalid Account data')
//   }
// })

// // @desc    Authenticate a Account
// // @route   POST /api/user/login
// // @access  Public
const login = asyncHandler(async (req, res) => {
    const { id, password } = req.body
    // Check if Account exists
    console.log(id)
    console.log(password)
    const account = await models.Accounts.findOne({
        where: {
            id,
        },
    })
    // log account
    // console.log(account)
    if (!account) {
        res.status(400)
        throw new Error('Account does not exist')
    }
    // Check password
    const isMatch = await bcrypt.compare(password, account._password)
    if (!isMatch) {
        res.status(400)
        throw new Error('Invalid credentials')
    }
    // Create token
    const token = jwt.sign({ id: account.id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
    })
    // Set token in cookie
    res.cookie('token', token, {
        expires: new Date(
            Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
        ),
        httpOnly: true,
    })
    // Send response
    res.status(200).json({
        token,
        Account: {
            id: account.id,
            //email: account.email,
        },
    })
})

//   const { email, password } = req.body

//   // Check for Account email
//   const Account = await Account.findOne({ email })

//   if (Account && (await bcrypt.compare(password, Account.password))) {
//     res.json({
//       _id: Account.id,
//       name: Account.name,
//       email: Account.email,
//       token: generateToken(Account._id),
//     })
//   } else {
//     res.status(400)
//     throw new Error('Invalid credentials')
//   }
// })

// // @desc    Get Account data
// // @route   GET /api/Accounts/me
// // @access  Private
// const getMe = asyncHandler(async (req, res) => {
//   res.status(200).json(req.Account)
// })

// // Generate JWT
// const generateToken = (id) => {
//   return jwt.sign({ id }, process.env.JWT_SECRET, {
//     expiresIn: '30d',
//   })
// }

module.exports = {
  register,
  login,
//   getMe,
}
