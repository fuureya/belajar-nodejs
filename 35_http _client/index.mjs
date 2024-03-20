import https from "https";

const url = "https://hookb.in/1gmgywqrLLfd6N0061k8";
const request = https.request(url, {
    method: 'POST',
    headers: {
        "Content-Type": "application/json",
        "Accept" : "application/json"
    }
}, function(response){
    response.addListener("data", function(data){
        console.info(`menerima : ${data.toString()}`)
    })
} )

const body = JSON.stringify({
    fistName : "agil",
    lastName : "jibrin"
})

request.write(body)
request.end();