import { useState } from "react"
import axios from 'axios'
import * as XLSX from 'xlsx'
function App() {
  const[status,setstatus] = useState(false)
  const[msg,setmsg] = useState("")
  const[emailList,setemailList] = useState([])
  function handmsg(evt){
      setmsg(evt.target.value)
  }
  function send(){
    setstatus(true)
    axios.post("http://localhost:5001/sendemail",{msg:msg,emailList:emailList})
    .then(
      (data)=>{
        if(data.data === true){
          alert("email sent successfully")
          setstatus(false)
        }
        else{
          alert("failed to send")
        }
      }
    )
  }
  function handlefile(event){
    const file = event.target.files[0]
    const reader = new FileReader()

    reader.onload = (event) => {
        const data = event.target.result;
        const workbook = XLSX.read(data, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName]
        const emailList = XLSX.utils.sheet_to_json(worksheet, { header: "A" })
        const totalmail = emailList.map((item)=>{
           return  item.A
        })
        setemailList(totalmail)
    }

    reader.readAsArrayBuffer(file);
  }
  return (
    <div>
      <div className="bg-blue-950 text-white text-center ">
        <h1 className="text-2xl font-medium py-3 px-5">BulkMail</h1>
      </div>
      <div className="bg-blue-800 text-white text-center ">
        <h1 className="text-2xl font-medium py-3 px-5">We help you to send bulkmail!!!</h1>
      </div>
      <div className="bg-blue-600 text-white text-center ">
        <h1 className="text-2xl font-medium py-3 px-5">Drag and Drop!</h1>
      </div>
      <div className="bg-blue-400 flex flex-col items-center text-black px-5 py-3">
        <textarea onChange={handmsg} value={msg} className="w-[80%] h-32 py-2 outline-none px-2 border border-black bg-white rounded-md" placeholder="Enter the body of the mail to send ..."></textarea>
        <div>
          <input type="file" onChange={handlefile} oncid="finp" className="border-4 border-dashed px-4 py-4 mt-5 mb-5 border-white" />
        </div>
        <button onClick={send} className="bg-blue-950 text-2xl text-white py-4 px-4 mt-5 mb-5 cursor-pointer">{status?"Sending...":"Send"}</button>

      </div>
       <div className="bg-blue-300 text-white text-center p-20">
       
      </div>
       <div className="bg-blue-200 text-white text-center p-20">
        
      </div>

    </div>
  )
}
export default App