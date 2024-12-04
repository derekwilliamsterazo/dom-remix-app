import { ActionFunction } from "@remix-run/node";
import { Form } from "@remix-run/react";

import { SingleQuantumEdit } from "~/views/SingleQuantumEdit/SingleQuantumEdit";




export let action: ActionFunction = async({ request }) => {
    let formData = await request.formData();
    let title = formData.get("title");
    console.log({ title });
    return { ok: true}

};

export default function QuantumSubmit() {
    return (



        
            <div>
                <Form method="post">
                    <div className="py-4 px-4 flex gap-2">
                        <input className="bg-primary-100 px-3 py-2 rounded-md" type="text" name="title" placeholder="Enter a Quantum Title" />
                        <button type="submit">Publish</button>                    
                    </div>
                </Form>
            </div>
        
    )
}

