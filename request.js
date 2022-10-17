const  cheerio = require('cheerio');
const request = require('request');
const chalk= require('chalk');
request('https://www.espncricinfo.com/series/icc-men-s-t20-world-cup-2022-23-1298134?ex_cid=google_cpc:search:brand:t20wc2022',cd);
function cd( error, response, html) {
 if( error){
    console.log(error);
 }
 else{
    handlehtml(html)
 }
};
function handlehtml(html){
    let $=cheerio.load(html);
    let content=$("");
    for(let i=0;i<contentArr.length;i++){
        let data=(setTool(contentArr[i]).text());
        console.log(data);
    }

    
}