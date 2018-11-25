const readLastLines = require('read-last-lines');

const compareLastLines = async function (filePath) {
  const data = await readLastLines.read(filePath, 2)
  console.log(data)	
  const lines = data.split("\n")
  
  if(lines[0] !== lines[1]){
    //Send Tweet
    console.log("tweet sent")
  }
}

compareLastLines("log.txt")
