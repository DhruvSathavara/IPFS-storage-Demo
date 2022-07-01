import './App.css'
import { useState } from 'react'
import {create} from 'ipfs-http-client'

const client = create('https://ipfs.infura.io:5001/api/v0')

function App (){
  const [fileUrl,updateFileUrl]=useState(``)
  console.log(fileUrl);

  async function onchange(e){
    const file =e.target.files[0]
    try{
      const added = await client.add(file)
      const url = `https://ipfs.infura.io/ipfs/${added.path}`
      updateFileUrl(...fileUrl,url)
    }catch(error){
      console.log(error);
    }
  }

  return(
    <div className='App'>
       <h1>IPFS Example</h1>
       <input type = "file"  onChange = {onchange}/>
        {
          fileUrl &&(
            <img src={fileUrl} width="120px"></img>
          )
        }
       
    </div>
  )
}

export default App;

