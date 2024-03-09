import {open} from "sqlite";
import sqlite3 from "sqlite3";

const sqlite_db: string = '/tmp/data.db'

export async function exec(sql: string) {
    const res = open({
        filename: sqlite_db,
        driver: sqlite3.Database
    }).then((db) => {
        return db.all(sql)
    })

    return res
}