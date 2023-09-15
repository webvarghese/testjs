const url = "https://script.google.com/macros/s/AKfycbyZjcWS9C0aenq8gujErTlZDNB-fmOfTuN21rv86XhrQTUEw4BzFGfOHqClDKxtVs9faQ/exec"
function testGS() {
    
    fetch(url,).then(d => d.json()).then(d => {
        document.getElementById("app").textContent = d[0].status
    })
}

function addGS() {
    try{
        console.log("Inside addGS")
    fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "no-cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        // credentials: "omit", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        //referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify({gender:"Female",class:"4. Senior",state:"Kerala",major:"English",extracurricular:"Drama Club",student:"Radhika"}), // body data type must match "Content-Type" header
      });
    } catch(err){
        console.log(err)
    }
}

document.getElementById("btn").addEventListener("click",testGS)
document.getElementById("btn2").addEventListener("click",addGS)
