import WorkFlow from "@/app/unit/canvas/flow";
import data from "@/app/unit/canvas/data"

export default async function Page() {
    return (<WorkFlow graph={data}/>)
}