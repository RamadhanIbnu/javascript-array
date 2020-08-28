// answer question no.1
let jobList = [
    'Fron end developer', 
    'Back end developer', 
    'Full-stack developer',
    'System analyst', 
    'Database administrator'
];

document.getElementById("jawab1").innerHTML = "panjang array adalah : " + jobList.length;

document.getElementById("1").innerHTML = jobList[0];
document.getElementById("2").innerHTML = jobList[1];
document.getElementById("3").innerHTML = jobList[2];
document.getElementById("4").innerHTML = jobList[3];
document.getElementById("5").innerHTML = jobList[4];


// answer question no.2
let team1 = [
    'azez', 'krisna', 'amilin', 'ibnu'
]
 document.getElementById("jawab2").innerHTML = team1.toString();


// answer question no.3
let arr = [3, 5, 7, 9, 11];

document.getElementById("jawab3").innerHTML = arr.map(multiply);

function multiply(num){
    sum = num * 5;
    return sum
}


// answer question no.4
let arr1 = ['math', 'english', 'programming'];
let arr2 = ['geography', 'spanish', 'programming'];
document.getElementById("jawab4").innerHTML=arr1.includes(arr2[2])


// answer question no.5
function send() {
  let namastr = [document.twitter.tweet.value]
  document.twitter.yourTweet.value = namastr;
}

// answer question no.6
