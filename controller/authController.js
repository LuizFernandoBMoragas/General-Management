const signup = (req, res, next) => {
    res.json({
        status: 'Login success',
        message: 'Sign up route are working',
    });
};

module.exports = { signup };