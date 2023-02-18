const app = require('./build/index')
try {
  const PORT = process.env.PORT || 5000
  // app.listen(PORT, () => runningAt.print(PORT))
  app.listen(PORT, () => console.log(`http://localhost:${PORT}`))
} catch (err) {
  console.log(err)
  process.exit(1)
}
