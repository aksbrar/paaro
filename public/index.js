// gather all required elemnets
const messageDisplay = document.querySelector("#responseDisplay")
const questionInput = document.querySelector("#questionBox") 
const sumbitAction = document.querySelector("#sumbitBtn")

sumbitAction.addEventListener('click', async (e) => {
  // stop default event trigger
  e.preventDefault()

  // store question
  const question = questionInput.value

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
  messageDisplay.textContent = data


})