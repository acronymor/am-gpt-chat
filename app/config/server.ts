import * as process from "process";

export const getUserHome = (): string => {
    let variableName = 'HOME'

    if (process.env[variableName] === undefined) {
        return process.cwd()
    }
    return process.env[variableName] as string
}

export const getServerSideConfig = () => {
    return {
        DB_TYPE: process.env.DATABASE_TYPE,
    }
}