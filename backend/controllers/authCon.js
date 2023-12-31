import User from '../models/User.js';
import bycrypt from 'bcryptjs';
import { createError } from '../utilits/error.js';
import jwt from 'jsonwebtoken';

//# Register controller
export const register = async (req, res, next) => {
  try {
    //incript password
    const salt = bycrypt.genSaltSync(10);
    const hash = bycrypt.hashSync(req.body.password, salt);
    console.log(hash);

    const newUser = new User({
      ...req.body,
      password: hash,
    });

    await newUser.save();
    res.status(200).send('User has been created');
  } catch (err) {
    next(err);
  }
};

//# Login controller
export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return next(createError(404, 'User not found!'));

    const isPasswordCorrect = await bycrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect)
      return next(createError(400, 'Wrong password or user name'));

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT,
      {
        expiresIn: 100,
      }
    );

    const { password, isAdmin, ...otherDetails } = user._doc;

    res
      .cookie('access_token', token, {
        httpOnly: true,
      })
      .status(200);
    res.send({ details: { ...otherDetails }, isAdmin, token });
  } catch (err) {
    next(err);
  }
};
