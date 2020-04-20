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
}

export default itemQuery
