var ship = document.querySelector('[ship]')
  , velocity = { x: (Math.random - 0.5) * 2, y: 0, rotation: 0 }
  , model = { x: 10, y: 10, rotation: 0 }

window.addEventListener('keydown', function (e) {
  velocity.rotation += (e.keyCode === 65) ? -1 
    : (e.keyCode === 68) ? 1 : 0
  console.log(velocity.rotation)
})

Object.observe(model, function () {
  ship.style.bottom = model.y + "em"
  ship.style.left = model.x  + "em"
  ship.style.transform = 'rotate(' + model.rotation % 360 + 'deg)'
})

window.setInterval(function () {
  model.x += velocity.x
  model.y += velocity.y
  model.rotation += velocity.rotation
  ship.style.bottom = model.y + "em"
  ship.style.left = model.x  + "em"
  ship.style.transform = 'rotate(' + model.rotation % 360 + 'deg)'
}, 0)
