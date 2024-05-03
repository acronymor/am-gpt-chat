import "reflect-metadata";

import {DataSource} from "typeorm";
import {getServerSideConfig} from "@/app/config/server";
import {ENTITIES} from "@/app/entities/entity";
import {SqliteMigrations} from "@/app/db/migrations/sqlite";


export const dbInit = (): DataSource => {
    let db: DataSource
    const {DATABASE_TYPE, DATABASE_PATH} = getServerSideConfig()

    switch (DATABASE_TYPE) {
        default:
            db = new DataSource({
                type: 'sqlite',
                database: DATABASE_PATH,
                synchronize: false,
                migrationsRun: false,
                entities: ENTITIES,
                migrations: SqliteMigrations,
                logging: true,
            })

            break
    }

    return db
}


let appDataSource: DataSource

export async function getDataSource(): Promise<DataSource> {
    if (appDataSource === undefined) {
        appDataSource = dbInit()
    }

    if (!appDataSource.isInitialized) {
        await appDataSource.initialize()
            .then(() => {
                console.log('Database initialized')
            }).catch((e) => {
                console.error('Database initialization error: ', e)
            })
    }

    return appDataSource
}