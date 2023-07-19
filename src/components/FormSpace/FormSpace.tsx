import {FormEvent, useState} from "react";
import axios from "axios";

export interface FormSpaceEnter {
    session: string;
    zoo: string;
    space: string;
}

const {baseUri} = require("../../baseUri");
const path = "/space";

function FormSpace(attributes: FormSpaceEnter) {

    const [session, setSession] = useState(attributes.session ?? '')
    const [space, setSpace] = useState(attributes.space ?? '')

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) =>{

        event.preventDefault()
        const auth = `Bearer ${session}`
        const headers = {
            'Content-Type': 'application/json',
            'space': space,
            'zoo':attributes.zoo,
            'Authorization': auth
        }

        // space = 64b174727ae45989ac2ef337
        // session = 64b7dea551acc2ac117fad87
        try {
            const response = await axios.get(baseUri+path+"/checkPassVisitor", {headers:headers})
            console.log(response.data)
        } catch (err:unknown) {
            console.log(err)
        }
    }

    const handlChangeSession = (event: FormEvent<HTMLInputElement>) =>{
        setSession(event.currentTarget.value)
    }

    const handlChangeSpace = (event: FormEvent<HTMLInputElement>) =>{
        setSpace(event.currentTarget.value)
    }
    return (
        <div className="card w-96 bg-neutral m-3 text-neutral-content">
            <div className="card-body items-center text-center rounded-sm ">
                <h2 className="card-title font-bold">Simulation entrée espace:</h2>
                <form onSubmit={handleSubmit} className="space-y-2">

                    <input type="text" placeholder="Id zoo" className="input input-bordered w-full max-w-xs"
                        value={attributes.zoo} disabled />

                    <input type="text" placeholder="Id space" className="input input-bordered w-full max-w-xs"
                        value={space} onChange={handlChangeSpace} />

                    <input type="text" placeholder="Id session" className="input input-bordered w-full max-w-xs"
                        value={session} onChange={handlChangeSession} />

                    <button className="btn btn-accent m-0" type="submit">entrer</button>
                </form>
            </div>
        </div>
    )
}

export default FormSpace