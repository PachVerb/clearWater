/*
 * @LastEditTime: 2022-04-03 00:53:41
 * @Description: redux计数器
 * @Date: 2022-03-28 01:10:17
 * @Author: wangshan
 * @LastEditors: wangshan
 */

import React from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { decrement, increment } from '@/reducers/counterReducer'

export function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <span>{count}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
            </div>
        </div>
    )
}
