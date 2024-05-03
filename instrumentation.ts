import {getDataSource} from "@/app/db/datasource";
import {getServerSideConfig} from "@/app/config/server";

export async function register() {
    // init db
    const db = getDataSource()
    console.log("DB Start: register instrumentation")

    // init config
    const config = getServerSideConfig()
    console.log("Config Start: register instrumentation", config)
}