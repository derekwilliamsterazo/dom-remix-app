import { ActionFunction } from "@remix-run/node";
import { Form } from "@remix-run/react";

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
                <fieldset>
                    <input type="text" name="title" placeholder="" />
                    <button type="submit">Publish</button>                    
                </fieldset>
            </Form>
        </div>
    )
}