var $ = document.querySelector.bind(document)
  , model = { value: 0 }

$('button').onclick = function() { model.value += 1 }
Object.observe(model, function() { $('output').textContent = model.value })
