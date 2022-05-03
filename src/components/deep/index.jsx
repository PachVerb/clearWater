/*
 * @LastEditTime: 2022-05-04 00:21:46
 * @Description:
 * @Date: 2022-05-03 19:52:34
 * @Author: wangshan
 * @LastEditors: wangshan
 */

export function Deep(p) {
    const list = p.list
    function deepRender(lists) {
        console.log(lists)
        // debugger
        if (lists && lists.length != 0) {
            return <Deep list={lists} />
        } else {
            return null
        }
    }
    return (
        <>
            {list.map((item, idx) => {
                return (
                    <li>
                        <h3>{item.name}</h3>
                        {
                            // 当该节点还有children时，则递归调用本身
                            item.children && item.children.length ? (
                                <Deep list={item.children}></Deep>
                            ) : null
                        }
                    </li>
                )
            })}
        </>
    )
}
