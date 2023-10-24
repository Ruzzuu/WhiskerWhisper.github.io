const endpoint = "http://regres.in/api/users"

fetch(endpoint,{
    method: "POST",
    headers:{
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        Username:"Dewa",
        Password: "nasikerapu77",
    })
})
    .then((result) => result.json())
    .then((data) => console.log(data))