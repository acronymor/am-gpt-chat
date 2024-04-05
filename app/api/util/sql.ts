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

export const getAllTemplateByUserNameSql = (name: string) => {
    return `SELECT p.ID          as id,
                   p.NAME        as name,
                   p.CONTEXT     as context,
                   p.CONFIG      as config,
                   p.CREATE_TIME as create_time,
                   p.UPDATE_TIME as update_time,
                   p.NOTE        as note
            FROM t_template AS p
                     LEFT JOIN t_user AS q ON p.USER_ID == q.ID
            WHERE q.NAME = '${name}';`
}