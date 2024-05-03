import {List, ListItem} from "@/app/ui/lib/list";
import {InputText} from "@/app/ui/lib/input";
import React from "react";
import useSetting from "@/app/unit/setting/lib/data";
import {revalidatePath} from "next/cache";

const Llm = async () => {
    const {getLlmCredential, setLlmCredential} = useSetting()
    const all = await getLlmCredential()

    const update = async (key: string, value: any) => {
        'use server'

        await setLlmCredential(key, value)
        revalidatePath('/unit/setting');
    }

    return (
        <div> {
            all.map(config => {
                return (
                    <>
                        <List key={config.label}>
                            <ListItem title={config.label}/>
                            {config.inputs.map((t, index) => {
                                return (
                                    <ListItem key={index} title={t.label} subTitle={t.name}>
                                        <InputText onChange={update} uKey={t.name}
                                                   uValue={t.value ?? t.placeholder}/>
                                    </ListItem>
                                )
                            })}
                        </List>
                    </>
                )
            })
        }
        </div>
    )


}

export default Llm;