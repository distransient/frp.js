var $ = document.querySelector.bind(document)
  , model = { value: 0 }

$('button').onclick = () => { model.value += 1 }
Object.observe(model, () => { $('output').textContent = model.value })
