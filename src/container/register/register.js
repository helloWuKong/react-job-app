import React from 'react'
import Logo from '../../components/logo/logo'
import { List, InputItem, Radio, WingBlank, WhiteSpace, Button } from 'antd-mobile'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { register } from '../../redux/user.redux'

@connect(
  state => state.user,
  {
    register
  }
)
class Register extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      user: '',
      pwd: '',
      rePwd: '',
      type: 'genius'
    }
    this.handleRegister = this.handleRegister.bind(this)
  }

  handleRegister () {
    this.props.register(this.state)
    console.log(this.state)
  }

  handleChange (key, val) {
    this.setState({
      [key]: val
    })
  }

  render () {
    const RadioItem = Radio.RadioItem
    return (
      <div>
        { this.props.redirectTo ? <Redirect to={this.props.redirectTo} /> : null }
        <Logo></Logo>
        <List>
          { this.props.msg ? <p className='error-msg'>{this.props.msg}</p> : '' }
          <InputItem
            onChange={(v) => this.handleChange('user', v)}
          >用户</InputItem>
          <InputItem
            type="password"
            onChange={(v) => this.handleChange('pwd', v)}
          >密码</InputItem>
          <InputItem
            type="password"
            onChange={(v) => this.handleChange('rePwd', v)}
          >确认密码</InputItem>
          <WhiteSpace />
          <RadioItem
            checked={this.state.type === 'genius'}
            onChange={() => this.handleChange('type', 'genius')}
          >牛人</RadioItem>
          <RadioItem
            checked={this.state.type === 'boss'}
            onChange={() => this.handleChange('type', 'boss')}
          >BOSS</RadioItem>
        </List>
        <WhiteSpace />
        <WingBlank>
          <Button type="primary" onClick={this.handleRegister}>注册</Button>
        </WingBlank>
      </div>
    )
  }
}

export default Register
