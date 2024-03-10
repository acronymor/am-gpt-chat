export const selectSettingByUserNameSql = (name: string) => {
    return `SELECT p.ID, p.CONTENT
            FROM t_setting AS p
                     LEFT JOIN t_user AS q ON p.USER_ID = q.ID
            WHERE q.NAME = '${name}';`
}

export const updateSettingSql = (id: number, content: string) => {
    return `UPDATE t_setting
            SET CONTENT = '${content}'
            WHERE id = ${id}`
}