

function testGS() {
    const url = "https://script.google.com/macros/s/AKfycbzX4SR5EM7Q1Im1S8Kd5WzY06mDukb-zq2WApzEfiipg3sWU4SFurn4aiXubyM2dkXReQ/exec"
    fetch(url,).then(d => d.json()).then(d => {
        document.getElementById("app").textContent = d[0].status
    })
}

document.getElementById("btn").addEventListener("click",testGS)