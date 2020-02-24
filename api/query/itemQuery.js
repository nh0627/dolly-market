const itemQuery = {
    getItems(pageNum = 0) {
        return `SELECT
                    A.pid,
                    A.create_date,
                    A.modify_date,
                    A.status,
                    A.product_condition,
                    A.quantity,
                    A.price,
                    A.paymenth_method,
                    A.delivery_method,
                    A.delivery_charge,
                    A.title,
                    A.description,
                    B.pid AS master_file_pid,
                    B.create_date AS master_file_create_date,
                    B.file_name AS master_file_name,
                    B.file_url AS master_file_url,
                    B.size AS master_file_size,
                    B.master_flag AS master_file_master_flag,
                    C.pid AS user_pid,
                    C.create_date AS user_create_date,
                    C.modify_date AS user_modify_date,
                    C.email AS user_email,
                    C.nickname AS user_nickname,
                    D.pid AS user_file_pid,
                    D.create_date AS user_file_create_date,
                    D.file_name AS user_file_name,
                    D.file_url AS user_file_url
                FROM
                    dollymarket.item A
                LEFT OUTER JOIN dollymarket.image B ON
                    B.item_rid = A.pid
                AND B.master_flag = 1
                INNER JOIN dollymarket.user C ON
                    A.user_rid = C.pid
                LEFT OUTER JOIN dollymarket.image D ON
                    C.img_rid = D.pid
                LIMIT ${pageNum}, 8`
    },
    getItemById(itemId) {
        return `SELECT
                    A.pid,
                    A.create_date,
                    A.modify_date,
                    A.status,
                    A.product_condition,
                    A.quantity,
                    A.price,
                    A.paymenth_method,
                    A.delivery_method,
                    A.delivery_charge,
                    A.title,
                    A.description,
                    C.pid AS user_pid,
                    C.create_date AS user_create_date,
                    C.modify_date AS user_modify_date,
                    C.email AS user_email,
                    C.nickname AS user_nickname,
                    D.pid AS user_file_pid,
                    D.create_date AS user_file_create_date,
                    D.file_name AS user_file_name,
                    D.file_url AS user_file_url
                FROM
                    dollymarket.item A
                INNER JOIN dollymarket.user C ON
                    A.user_rid = C.pid
                LEFT OUTER JOIN dollymarket.image D ON
                    C.img_rid = D.pid
                WHERE A.pid = '${itemId}'`
    }
}

export default itemQuery 