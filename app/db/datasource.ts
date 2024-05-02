import "reflect-metadata";

import {getUserHome} from "@/app/config/server";
import {DataSource} from "typeorm";
import {ENTITIES} from "@/app/db/entities/entity";
import {SqliteMigrations} from "@/app/db/migrations/sqlite";
import path from "path";

let appDataSource: DataSource

const DbInit = () => {
    let homePath
    let dbpath = path.join(getUserHome(), 'am-gpt-chat')

    switch (process.env.DATABASE_TYPE) {
        default:
            homePath = process.env.DATABASE_PATH ?? dbpath
            appDataSource = new DataSource({
                type: 'sqlite',
                database: path.resolve(homePath, 'data.sqlite'),
                synchronize: false,
                migrationsRun: false,
                entities: Object.values(ENTITIES),
                migrations: SqliteMigrations
            })
            break
    }
}

export function getDataSource(): DataSource {
    if (appDataSource === undefined) {
        DbInit()
    }
    return appDataSource
}