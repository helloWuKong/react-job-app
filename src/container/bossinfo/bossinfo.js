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
class BossInfo extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      company: '',
      money: '',
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
        <NavBar mode="dark">BOSS完善信息页</NavBar>
        <AvatarSelector selectAvatar={this.selectAvatar}></AvatarSelector>
        <InputItem onChange={(v) => {this.handleChange('title', v)}}>招聘职位</InputItem>
        <InputItem onChange={(v) => {this.handleChange('company', v)}}>公司名称</InputItem>
        <InputItem onChange={(v) => {this.handleChange('money', v)}}>职位薪资</InputItem>
        <TextareaItem
          rows={3}
          autoHeight
          onChange={(v) => {this.handleChange('desc', v)}}
          title="职位要求"
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

export default BossInfo