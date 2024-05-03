import * as path from "path";

export const getUserHome = (): string => {
    return process.cwd() as string
}

export const getServerSideConfig = () => {
    return {
        DATABASE_TYPE: process.env.DATABASE_TYPE ?? 'sqlite',
        DATABASE_PATH: process.env.DATABASE_PATH ?? path.join(getUserHome(), "data.sqlite")
    }
}