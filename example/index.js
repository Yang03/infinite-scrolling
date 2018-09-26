import React from 'react'
import { render } from 'react-dom'
import InfiniteScroll from '../src/index.js'

class Test extends React.Component {
    render() {
        let arr= [
            '关关雎鸠，在河之洲。窈窕淑女，君子好逑。',
            '参差荇菜，左右流之。窈窕淑女，寤寐求之。',
            '求之不得，寤寐思服。悠哉悠哉，辗转反侧。',
            '参差荇菜，左右采之。窈窕淑女，琴瑟友之。',
            '参差荇菜，左右芼之。窈窕淑女，钟鼓乐之。',
            '由来称独立，本自号倾城。',
            '柳叶眉间发，桃花脸上生。',
            '腕摇金钏响，步转玉环鸣。',
            '纤腰宜宝袜，红衫艳织成。',
            '悬知一顾重，别觉舞腰轻。'
        ]
        return (
            <div className="example">
                <div className="box up">
                    <InfiniteScroll speed={5} direction={'up'}>
                        {arr.map((item) => <p>{item}</p>)}
                    </InfiniteScroll>
                </div>
                <div className="box left">
                    <InfiniteScroll speed={25} direction={'left'}>
                        {arr.map((item) => <p>{item}</p>)}
                    </InfiniteScroll>
                </div>
                <div className="box down">
                    <InfiniteScroll speed={5} direction={'down'}>
                        {arr.map((item) => <p>{item}</p>)}
                    </InfiniteScroll>
                </div>
                <div className="box right">
                    <InfiniteScroll speed={25} direction={'right'}>
                        {arr.map((item) => <p>{item}</p>)}
                    </InfiniteScroll>
                </div>
            </div>    
        )
    }
}

render(<Test></Test>, document.getElementById('app'))
