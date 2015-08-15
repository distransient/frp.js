var $ = document.querySelector.bind(document)
  , input = $('button')
  , output = $('output')
  , model = { value: 0 }

input.onclick = () => { model.value += 1 }
Object.observe(model, () => { output.textContent = model.value })

