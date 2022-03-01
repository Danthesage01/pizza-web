let emailCollector = document.getElementById("email-collector")


emailCollector.addEventListener("submit", function (event) {
    event.preventDefault()

    let ourFormData = new FormData(event.target)

    let userFirstname = ourFormData.get("firstName")

    let greetings = `
    <h2>Congratulations ${userFirstname}</h2>

    <p>You're on your way to becoming a PIZZA Master</p>

    <p class="fine-print">We'll never share your information
        without your permission</p>
`
   document.getElementById("main-content").innerHTML = greetings

})