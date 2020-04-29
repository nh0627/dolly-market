import { paging } from "../constant"

const itemQuery = {
  get(
    pageNum = paging.DEFAULT_PAGE_INDEX,
    pageSize = paging.DEFAULT_PAGE_SIZE
  ) {
    return `SELECT
                    A.pid,
                    A.create_date,
                    A.modify_date,
                    A.status,
                    A.product_condition,
                    A.quantity,
                    A.price,
                    A.payment_method,
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
                ORDER BY A.create_date DESC
                LIMIT ${(pageNum - 1) * pageSize}, ${pageSize}`
  },
  getById(itemId) {
    return `SELECT
                    A.pid,
                    A.create_date,
                    A.modify_date,
                    A.status,
                    A.product_condition,
                    A.quantity,
                    A.price,
                    A.payment_method,
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
  },
  save({ pid, price, userId, title, description }) {
    return `INSERT
                INTO
                dollymarket.item(pid,
                    create_date,
                    modify_date,
                    status,
                    product_condition,
                    quantity,
                    price,
                    payment_method,
                    delivery_method,
                    delivery_charge,
                    user_rid,
                    title,
                    description)
                VALUES('${pid}',
                    NOW(),
                    NOW(),
                    null,
                    null,
                    1,
                    '${price}',
                    null,
                    null,
                    20,
                    '${userId}',
                    '${title}',
                    '${description}')`
  },
}

export default itemQuery
