import { DIRECTION_LEFT, DIRECTION_RIGHT, DIRECTION_UP, DIRECTION_DOWN } from './constants' 

function getKeyFrameModifier(direction) {
    const dir = direction.toLowerCase()
    switch (dir) {
        case DIRECTION_LEFT:
          return directionLeft
        case DIRECTION_RIGHT:
          return directionRight
        case DIRECTION_UP:
          return directionUp
        case DIRECTION_DOWN:
          return directionDown
        default:
          return () => {}
      }
}

function directionLeft(boundingRect)  {
    let distance = boundingRect.width
    return getHorizontal(-distance, 'INFINITESCROLLLEFT')
}

function directionRight(boundingRect)  {
    let distance = boundingRect.width
    return getHorizontal(distance, 'INFINITESCROLLRIGHT') + `.infinite-scroll-right {position:absolute;left:${-distance}px`
}

function directionUp(boundingRect)  {
    let distance = boundingRect.height
    return getVertical(-distance, 'INFINITESCROLLUP')
}

function directionDown(boundingRect)  {
    let distance = boundingRect.height
    return getVertical(distance, 'INFINITESCROLLDOWN') + `.infinite-scroll-down {position:absolute;top:${-distance}px`
}

function getHorizontal(distance, key) {
    return `@-webkit-keyframes ${key} {
        0% {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
        }
        100% {
            -webkit-transform: translate3d(${distance}px, 0, 0);
            transform: translate3d(${distance}px, 0, 0);
        }
    }
    @keyframes ${key} {
        0% {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
        }
        100% {
            -webkit-transform: translate3d(${distance}px, 0, 0);
            transform: translate3d(${distance}px, 0, 0);
        }
    }`
}

function getVertical(distance, key) {
    return `@-webkit-keyframes ${key} {
        0% {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
        }
        100% {
            -webkit-transform: translate3d(0, ${distance}px, 0);
            transform: translate3d(0, ${distance}px, 0);
        }
    }
    @keyframes ${key} {
        0% {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
        }
        100% {
            -webkit-transform: translate3d(0, ${distance}px, 0);
            transform: translate3d(0, ${distance}px, 0);
        }
    }`
}


export { getKeyFrameModifier }