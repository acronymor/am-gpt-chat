export const selectUserIdByNameSql = (name: string) => {
    return `SELECT t.ID
            FROM t_user t
            WHERE t.NAME = '${name}'`;
}

export const selectSettingByUserIdSql = (userId: number) => {
    return `SELECT t.ID, t.CONTENT
            FROM t_setting t
            WHERE t.USER_ID = '${userId}'`
}

export const updateSettingSql = (id: number, content: string) => {
    return `UPDATE t_setting
            SET CONTENT = '${content}'
            WHERE id = ${id}`
}