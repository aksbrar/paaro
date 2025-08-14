// gather all required elemnets
const messageDisplay = document.querySelector(".response")
const questionInput = document.querySelector("#questionBox") 
const sumbitAction = document.querySelector("#sumbitBtn")

sumbitAction.addEventListener('click', async (e) => {
  // stop default event trigger
  e.preventDefault()

  // store question & clear input
  const question = questionInput.value
  questionInput.value = ""
  messageDisplay.innerHTML = loader

  // ask for answer
  const res = await fetch('http://localhost:8000/api/answer', {
    method : "POST",
    headers : {
      'Content-Type' : 'application/json'
    },
    body : JSON.stringify({
      question
    })
  })

  // treat answer
  const data = await res.json()
  
  // display answer
  messageDisplay.innerHTML = ""
  const words = data.answer.split(" ")
  type(messageDisplay, words, 20)
})

const type = (element, data, speed) => {
  data.forEach((word, i) => {
    setTimeout(() => {
      element.textContent += word + " "
    }, speed * i);
  })
}

// loader
const loader = ` 
  <div class="loader" >
    <span class="loaders-1">&#x25CF;</span>
    <span class="loaders-2">&#x25CF;</span>
    <span class="loaders-3">&#x25CF;</span>
  </div>
`