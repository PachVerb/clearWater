/*
 * @LastEditTime: 2022-04-07 17:48:28
 * @Description: 计数器-redux
 * @Date: 2022-04-07 16:37:22
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Counter extends Component {
    constructor(props) {
        super(props)
        this.incrementAsync = this.incrementAsync.bind(this)
        this.incrementIfOdd = this.incrementIfOdd.bind(this)
    }

    incrementIfOdd() {
        if (this.props.value % 2 !== 0) {
            this.props.onIncrement()
        }
    }

    incrementAsync() {
        setTimeout(this.props.onIncrement, 1000)
    }

    render() {
        const { value, onIncrement, onDecrement } = this.props
        return (
            <p>
                Clicked: {value} times <button onClick={onIncrement}>+</button>{' '}
                <button onClick={onDecrement}>-</button>{' '}
                <button onClick={this.incrementIfOdd}>Increment if odd</button>{' '}
                <button onClick={this.incrementAsync}>Increment async</button>
            </p>
        )
    }
}

// 设置Counter设置类型检查
Counter.propTypes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
}

export default Counter
