import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class CityList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="city-list-container">
                <h3>热门城市</h3>
                <ul className="clear-fix">
                    <li>
                        <span onClick={this.clickHandle.bind(this, 'Sydney')}>Sydney</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, 'Melbourne')}>Melbourne</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, 'Brisbane')}>Brisbane</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, 'Perth')}>Perth</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, 'Adelaide')}>Adelaide</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, 'Gold Coast')}>Gold Coast</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, 'Newcastle')}>Newcastle</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, 'Canberra')}>Canberra</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, 'Wollongong')}>Wollongong</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, 'Hobart')}>Hobart</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, 'Geelong')}>Geelong</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, 'Darwin')}>Darwin</span>
                    </li>
                </ul>
            </div>
        )
    }
    clickHandle(cityName) {
        const changeFn = this.props.changeFn
        changeFn(cityName)
    }
}

export default CityList