// Q.1) Create a web server using HTTP module and implement 3 routes, "/" route should print "Hello World" which has to be in the HTML file, "/books" route prints object of books,"/video" should display any video on the browser.

//Solution:-

// const http = require('http');
// const fs = require('fs');
// const Databooks = fs.readFileSync('books.json',"utf-8");
// const server = http.createServer((req,res)=>{
//     if(req.url == "/"){
//     res.writeHead(200,{"content-type" :"text/html"})
//     const Data =  fs.readFileSync('index.html')
//     res.end(`${Data}`)
//     }
//     else if(req.url == "/books"){
//     res.writeHead(200,{"content-type" :"application/json"})
//     res.end(`${Databooks}`)
//     }
//     else if(req.url == "/video"){
//     res.writeHead(200,{"content-type" :"video/mp4"})
//     fs.readFile('Earth_Zoom_In.mov',(err,data)=>{
//     res.end(data);
//     })
//     }
//     else{
//     res.end('no page available')
//     }
// })

// server.listen('5678',"127.0.0.1",()=>{
//     console.log('server is made, go and check server')
// })

// *********************************************************************************** // 


// Q.2Show the output of the code and explain it in steps what is happening behind the scene in Eventloop, Node Api's, callback queue, call stack, and also explain what is the event loop, call stack and callback queue.Explain what are streams and event emitters ?


// Solution :- 
// Eventloop:-  it is an event-listener which functions inside the nodejs environment and is always ready to listen, process, and output for an event. it continously check whether the call stack is empty or not and and it call stack is empty then eventloop push the pending task into it and this call continue untill all functions are processed.

// call stack :- call stack is the place where all functions execute in javascript and in nodejs. it work on last in first out principle. call stack execution happen in 2 phases:- 1st is memory allocation where each var is given a special placeholder "undefined" and function are stored as it is, In 2nd phase(code execution phase) all the calculations/actuall exection of code starts and var are assigned their given values.

// callback queue :- these queues hold callback functions to asynchronous operations when they have been completed in background and then push into call stack one by one whenever callstack execute all synxhronous codes.

// streams :- Streams are objects that let you read data from a source or write data to a destination in continuous fashion. In Node.js, there are four types of streams − readable,writable,duplex and transform.

//Event Emitter:- event emitters are used to create and handle custom events and use events module.

// *********************************************************************************** // 

// const LoopNames = (names) => {
//   names.map((data, i) => {
//     console.log(data);
//   });
// };

// for (var i = 0; i <= 5; i++) {
//   console.log(`${i}`);
// }
// console.log("Hello");
// setTimeout(() => {
//   console.log("In SetTimeout with timer 0");
//   setTimeout(() => {
//     LoopNames(["Rahul", "Ramesh"]);
//     console.log("Second SetTimeout with timer as 0");
//       setTimeout(() => {
//       console.log("Third SetTimeout with timer as 0");
//     }, 0);
//   }, 0);
// }, 0);


// *********************************************************************************** // 


// Step 1 :- A exections context will be created in call stack and then a placeholder "undefined" is assigned to all the variable in code and after it 2nd phase which is code execution phase starts in call stack and given values are assigned to them.

// step 2 :- call stack start resolving codes if it find any browser api/node api which is Asynchronous code then it push it to an other separate area to resolve and mean while all synchronous code executes (0,1,2,3,4,5,Hello)

// Step 3:- when all api/settimeouts finshed then all functions are arranged in Eventqueue in first in first out format and event queue also check continously whether call stack is empty or not and if it is empty then event loop push all the functions/ codes in call stack and all remaining asyncronous code executes(" In SetTimeout with timer 0","Rahul","Ramesh","Second SetTimeout with timer as 0","Third SetTimeout with timer as 0")

// Step 4 :- After execution of all codes call stack deleted automatically.

// Step 5 :- final output will be :- (
// 0
// 1
// 2
// 3
// 4
// 5
// Hello
// In SetTimeout with timer 0
// Rahul
// Ramesh
// Second SetTimeout with timer as 0
// Third SetTimeout with timer as 0
// )