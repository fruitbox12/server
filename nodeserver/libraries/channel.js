const fs = require('fs');
const tools = require ("./tools");
const Hyperbeam = require('hyperbeam');
const { connected, stdout } = require('process');
const path = require('path')

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(function () {
      console.log('Blah blah blah blah extra-blah')
    }, 3000)
  })
}
var lol;
var string;

async function createChannel(channelID, code, res) {
  var spawn = require("child_process").spawn;

  console.log('connecting to channID ' + channelID)
  console.log(`using code ${code}`)

  const beam = new Hyperbeam(channelID)

  beam.on('remote-address', async function ({ host, port }) {
    if (!host) console.error('[hyperbeam] Could not detect remote address')
    else
      console.error(
        '[hyperbeam] Joined the DHT - remote address is ' + host + ':' + port,
      )
    if (port) {
      console.error('[hyperbeam] Network is holepunchable \\o/')
      console.log(Object.keys(beam))
      //await sleep(1000)
    }
  })
    beam.on('connected', function () {
    console.error(
      '[hyperbeam] Success! Encrypted tunnel established to remote peer',
    ), 

    console.log(Object.keys(beam))
    lol = readStream()
    lol = toString(lol)
  //   beam.on('data', function(){let me = console.log(stdout)

  //   fs.writeFile("result.txt", me, err => {
  //     if (err) throw err;
  //     console.log('File successfully written to disk');
  //   }) 
  // })
    // const name = prompt('What is your name?')
    lol = beam.on('data', data => {
      data = tools.decode(data.toString())
      process.stdout.write("\n"+data +"\n")
      fs.writeFile("./libraries/result.py",  data, err => {
        if (err) throw err;


        async function searchForRelevantDoc () {  n
          var spawn = require('child_process').spawn,
              py    = spawn('python', [path.join(__dirname, 'result.py')]),
              output = '';
      
          py.stdin.setEncoding = 'utf-8';
      
          py.stdout.on('data', (data) => {
              output += data.toString();
              console.log('output was generated: ' + output);
              beam.write(output)
            });
          // Handle error output
          py.stderr.on('data', (data) => {
          // As said before, convert the Uint8Array to a readable string.
              console.log('error:' + data);
          });
          py.stdout.on('end', async function(code){
    
              beam.write(output)
          });
          beam.write(output)


          return output;
          
      }



        console.log('File successfully written to disk');
        function runScript(){
          return  spawn('python', [
             "-u",
             path.join(__dirname, 'result.py')
          ]);
       }

         try{

          var subprocess = searchForRelevantDoc()
          sleep(20000);

         }
         catch{
          subprocess.stderr.on('data', (data) => {
            console.log(`error:${data}`);
         });
         }
      } )
            
         }) 
     })
//  },)
   

  

const fs = require("fs");
var poop =''
function readStream() {
 nose = toString(resolveAfter2Seconds())

 
 return console.log(nose)
 
 }
 var lol =''
  var current;
var err='nn'

var freeout;
function reads(){
  try{
    return fib
  }
  catch{
console.error(err)
return err
  }
  
}
async function reads() {
  return beam.pipe(process.stdout)

}
async function resolveAfter2Seconds(res) 
{

  return new Promise(resolve => {
    
    setTimeout(() => {

     resolve(reads()); 
     
    }, 2);
  }
).then(console.log(process.stdout))
}

  console.log(`Peer: I am executing ${stdout}`)

  beam.on('end', () => {
    const result = function (lol) {
      fs.writeFile("result.txt", lol, err => {
           if (err) throw err;
           console.log('File successfully written to disk');
      }) };
    console.log(result);


  })

  beam.resume()
  beam.pause()

  process.once('SIGINT', () => {
    if (!beam.connected) closeASAP()
    else beam.end()
  })

  function closeASAP() {
    console.error('[hyperbeam] Shutting down beam...')

    const timeout = setTimeout(() => process.exit(1), 2000)
    beam.destroy()
    beam.on('close', function () {
      clearTimeout(timeout)
    })
  }
  return beam
}

exports.createChannel = createChannel
/*

async function reaStream() {
  console.log('calling');
  const result = await resolveAfter2Seconds(function (err, result, fields) {
    fs.writeFile("result.txt", result, err => {
         if (err) throw err;
         console.log('File successfully written to disk');
    }) });
  console.log(result);
}
*/



