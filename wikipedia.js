const request = require("request");
const cheerio = require("cheerio");
let fs = require("fs");
let xlsx = require("xlsx")
const url = "https://en.wikipedia.org/wiki/P";
request(url, cb);

function cb(err, response, html) {
    if (err) {
        console.log(err);
    } else {
        extractHTML(html);
    }
}

// inspect -> 
// unique 
function extractHTML(html) {
    let $ = cheerio.load(html);
    let elemsArr = $(".mw-parser-output p");
    let elem = $(".mw-parser-output ul");
    let history = $(elemsArr[2]).text();
    

    let use1 = $(elemsArr[3]).text();
    let use2 = $(elemsArr[4]).text();
    let use3 = $(elemsArr[4]).text();
    let use4 = $(elemsArr[5]).text();
    let use5 = $(elemsArr[6]).text();
    let use6 = $(elemsArr[7]).text();
  
    let character1 = $(elemsArr[9]).text();
    let character2 = $(elem[13]).text();
   

    let data = [
        {
            "History": history,
            "Use in writting system": use1,
            "Related character": character1
        },
        {
            "History": " ",
            "Use in writting system": use2,
            "Related character": character2
        },
        {
            "History": " ",
            "Use in writting system": use3,
            "Related character": " "
        },
        {
            "History": " ",
            "Use in writting system": use4,
            "Related character": " "
        },
        {
            "History": " ",
            "Use in writting system": use5,
            "Related character": " "
        },
        {
            "History": " ",
            "Use in writting system": use6,
            "Related character": " "
        }
       
    ]
    
    let newB = xlsx.utils.book_new();

    let newWS = xlsx.utils.json_to_sheet(data);

    xlsx.utils.book_append_sheet(newB,newWS,"sheet-1");

    xlsx.writeFile(newB,"P-article.xlsx")

    
}