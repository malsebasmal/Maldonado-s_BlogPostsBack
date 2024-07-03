class IndexController {
  static getIndex = (req, res) => {
    const welcomeMessage = "Welcome to my API"
    res.send(welcomeMessage)
  }
}

export {
  IndexController
}