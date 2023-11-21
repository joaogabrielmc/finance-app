const passport = require('passport')
const validator = require('validator')
const User = require('../models/User')

exports.getLogin = (req, res) => {
  if (req.user) {
    return res.redirect('/finance')
  }
  res.render('login', {
    title: 'Login'
  })
}

exports.postLogin = (req, res, next) => {
  const validationErrors = []
  if (!validator.isEmail(req.body.email)) {validationErrors.push({ msg: 'Insira um email valido' })}
  if (validator.isEmpty(req.body.password)) validationErrors.push({ msg: 'A senha não pode ser nula' })

  if (validationErrors.length) {
    // req.flash('errors', validationErrors)
    alert(validationErrors)
    return res.redirect('/login')
  }
  req.body.email = validator.normalizeEmail(req.body.email, { gmail_remove_dots: false })

  passport.authenticate('local', (err, user, info) => {
    if (err) { return next(err) }
    if (!user) {
      req.flash('errors', info)
      return res.redirect('/login')
    }
    req.logIn(user, (err) => {
      if (err) { return next(err) }
      req.flash('success', { msg: 'Você está logado.' })
      res.redirect(req.session.returnTo || '/finance')
    })
  })(req, res, next)
}

exports.logout = (req, res) => {
  req.logout(() => {
    console.log('Usuário deslogou.')
  })
  req.session.destroy((err) => {
    if (err) console.log('Error : Falha durante o logout.', err)
    req.user = null
    res.redirect('/')
  })
}

exports.getSignup = (req, res) => {
  if (req.user) {
    return res.redirect('/finance')
  }
  res.render('signup', {
    title: 'Criar Conta'
  })
}

exports.postSignup = (req, res, next) => {
  const validationErrors = []
  if (!validator.isEmail(req.body.email)) validationErrors.push({ msg: 'Insira um email válido.' })
  if (!validator.isLength(req.body.password, { min: 8 })) validationErrors.push({ msg: 'A senha deve ter no mínimo 8 characteres' })
  if (req.body.password !== req.body.confirmPassword) validationErrors.push({ msg: 'As senhas não conferem' })

  if (validationErrors.length) {
    // req.flash('errors', validationErrors)
    alert(validationErrors)
    return res.redirect('../signup')
  }
  req.body.email = validator.normalizeEmail(req.body.email, { gmail_remove_dots: false })

  const user = new User({
    userName: req.body.userName,
    email: req.body.email,
    password: req.body.password
  })

  User.findOne({
    $or: [
      { email: req.body.email },
      { userName: req.body.userName }
    ]
  }, (err, existingUser) => {
    if (err) { return next(err) }
    if (existingUser) {
      // req.flash('errors', { msg: 'Já existe uma conta com tal email.' })
      alert('Já existe uma conta com tal email.' )
      return res.redirect('../signup')
    }
    user.save((err) => {
      if (err) { return next(err) }
      req.logIn(user, (err) => {
        if (err) {
          return next(err)
        }
        res.redirect('/finance')
      })
    })
  })
}