import React from 'react'
import { NavBar, InputItem, TextareaItem, Button, WingBlank } from 'antd-mobile'
import AvatarSelector from '../../components/avatar-selector/avatar-selector'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { update } from '../../redux/user.redux'

@connect(
  state => state.user,
  { update }
)
class GeniusInfo extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      desc: '',
      avatar: ''
    }
    this.selectAvatar = this.selectAvatar.bind(this)
  }

  handleChange (key, v) {
    this.setState({
      [key]: v
    })
  }

  selectAvatar (v) {
    this.setState({ avatar: v })
  }

  render () {
    const path = this.props.location.pathname
    return (
      <div>
        {this.props.redirectTo && this.props.redirectTo !== path ? <Redirect to={this.props.redirectTo}></Redirect> : ''}
        <NavBar mode="dark">牛人完善信息页</NavBar>
        <AvatarSelector selectAvatar={this.selectAvatar}></AvatarSelector>
        <InputItem onChange={(v) => {this.handleChange('title', v)}}>求职岗位</InputItem>
        <TextareaItem
          rows={3}
          autoHeight
          onChange={(v) => {this.handleChange('desc', v)}}
          title="个人简介"
        />
        <WingBlank>
          <Button
            onClick={() => {
              this.props.update(this.state)
            }}
            type="primary"
          >保存</Button>
        </WingBlank>
      </div>
    )
  }
}

export default GeniusInfo