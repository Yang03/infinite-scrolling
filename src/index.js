import React from 'react'
import PropTypes from "prop-types"
import { DIRECTION_LEFT, DIRECTION_RIGHT, DIRECTION_UP, DIRECTION_DOWN  } from './constants' 
import { getKeyFrameModifier } from './modifiers'

class InfiniteScroll extends React.Component {
    constructor(props) {
        super(props)
        this.container = null
        this.scrollItem = null
        this.boundingRect = {}
        this.mouseOver = this.mouseOver.bind(this)
        this.mouseOut = this.mouseOut.bind(this)
    }
    componentDidMount() {
        this.boundingRect = this.scrollItem.getBoundingClientRect()
        this.animationLoop()
    }
    animationModifier(speed) {
        const key = ('infiniteScroll' + this.props.direction).toUpperCase()
        return `${speed}s ${key} linear infinite normal`
    }
    animationLoop() {
        const modifier = getKeyFrameModifier(this.props.direction)
        let style = document.createElement('style')
        style.type = 'text/css'
        style.innerHTML = modifier(this.boundingRect)
        document.getElementsByTagName('head')[0].appendChild(style)
        let animation = this.animationModifier(this.props.duration)
        this.container.style.animation = animation
        this.container.style.WebkitAnimation = animation
    }
   
    mouseOver() {
        this.setPayStatus("paused")
        this.props.mouseOver && this.props.mouseOver()
    }
    mouseOut() {
        this.setPayStatus("running")
        this.props.mouseOut && this.props.mouseOut()
    }
    setPayStatus(status) {
        this.container.style.WebkitAnimationPlayState = status
        this.container.style.animationPlayState = status
    }
    render() {
        let reversion = false
        if (this.props.direction === DIRECTION_RIGHT || this.props.direction === DIRECTION_DOWN) {
            reversion = true
        }
        const cls = `infinite-scroll-${this.props.direction}`
        return (
            <div className={cls} ref={(el) => { this.container = el }} onMouseOver={ this.mouseOver } onMouseOut={ this.mouseOut } >
                {reversion ? (<div className="clone">
                    {this.props.children} 
                </div>) : ''}
                <div className="infinite-scroll-items" ref={(el) => { this.scrollItem = el }}>
                    {this.props.children}
                </div>
                {!reversion ? (<div className="clone">
                    {this.props.children} 
                </div>) : ''}
        </div>)
    }
}

InfiniteScroll.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    direction: PropTypes.oneOf([DIRECTION_LEFT, DIRECTION_RIGHT, DIRECTION_UP, DIRECTION_DOWN]),
    mouseOver: PropTypes.func,
    mouseOut: PropTypes.func,
    duration: PropTypes.number
  }

InfiniteScroll.defaultProps = {
    children: null,
    direction: DIRECTION_LEFT,
    duration: 10,
    mouseOver: null,
    mouseOut: null
  }

export default InfiniteScroll