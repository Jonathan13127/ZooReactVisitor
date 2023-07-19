import axios from "axios"
import {FormEvent, useState, useEffect} from "react";
import FormSpace from "../FormSpace/FormSpace"
import FormSpaceExit from "../FormSpace/FormSpaceExit";

function Home(){

    const [zooId, setZooId] = useState<string>("");
    const [zooName, setZooName] = useState<string>()
    const [zooStatus, setZooStatus] = useState<string>()

    const {baseUri} = require("../../baseUri")
    const path = "/zoo"

    const [message, setMessage] = useState('')

    async function GetZoo(){
        try {
            const response = await axios.get(encodeURI(baseUri+path+"/649b4b3cb65880740cbc7019"))
            setZooId(response.data._id);
            setZooName(response.data.name);

            if(response.data.status){
                setZooStatus("Ouvert")
            }else{
                setZooStatus("Fermé")
            }
        } catch (err:unknown) {
            console.log(err)
        }
    }
  
    async function enterZoo(){
        try {
            const headers = {
                'Content-Type': 'application/json',
                'zoo': zooId
            }
            const response = await axios.get(encodeURI(baseUri+path+"/enter"),{headers:headers})
            console.log(response.data)
            setMessage("Un nouveau visiteur...")
        } catch (err:unknown) {
            console.log(err)
        }
    }

    async function exitZoo(){
        try {
            const headers = {
                'Content-Type': 'application/json',
                'zoo': zooId
            }
            const response = await axios.get(encodeURI(baseUri+path+"/exit"),{headers:headers})
            console.log(response.data)
            setMessage("Un visiteur est pati...")

        } catch (err:unknown) {
            console.log(err)
        }
    }

    useEffect(()=>{
        GetZoo();
    },[])

    return(
        <main className="flex flex-column">
            <div className="mx-auto mt-12 w-2/3">
                <div className="">
                    <div className="flex flex-row flex-wrap justify-center items-center">
                        <div>
                            <div className="card w-96 bg-neutral m-3 text-neutral-content">
                                <div className="card-body items-center text-center rounded-sm">
                                    <h2 className="card-title font-bold">{zooName}</h2>
                                    <p className="font-semibold">ID: {zooId}</p>
                                    <p className="font-semibold">Statut: {zooStatus}</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card w-96 bg-neutral m-3 text-neutral-content">
                                <div className="card-body items-center text-center rounded-sm space-y-2">
                                    <h2 className="card-title font-bold">Simulation entrée zoo:</h2>
                                    <button className="btn btn-accent m-0" onClick={enterZoo}>Entrer</button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card w-96 bg-neutral m-3 text-neutral-content">
                                <div className="card-body items-center text-center rounded-sm space-y-2">
                                    <h2 className="card-title font-bold">Simulation sortie zoo:</h2>
                                    <button className="btn btn-accent m-0" onClick={exitZoo}>Sortir</button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <FormSpace zoo={zooId} session={""} space={""}/>
                        </div>
                        <div>
                            <FormSpaceExit zoo={zooId} session={""} space={""}/>
                        </div>
                    </div> 
                </div>
            </div>
            {
                message !== '' ? <div className="toast toast-success">{message}</div> : null
            }
        </main>
    )
}

export default Home