import React from 'react'
import PropTypes from 'prop-types'

import { Grid, List } from 'antd-mobile'

class AvatarSelector extends React.Component {
  static propTypes = {
    selectAvatar: PropTypes.func.isRequired
  }

  constructor (props) {
    super(props)
    this.state = {
      icon: '',
      text: ''
    }
  }
  render () {
    const avatarList = 'gur-project-01,gur-project-02,gur-project-03,gur-project-04,gur-project-05,gur-project-06,gur-project-07,gur-project-08,gur-project-09,gur-project-10,gur-project-11,gur-project-12,gur-project-13,gur-project-14,gur-project-15'
                      .split(',')
                      .map(v => {
                        return {
                          icon: require(`./img/${v}.png`),
                          text: v
                        }
                      })
    const gridHeader = this.state.text ? (<div>
                                            <span>已选择头像</span>
                                            <img style={{width: 20}} src={this.state.icon} alt={this.state.text}/>
                                          </div>)
                                        : '请选择头像'
    return (
      <div>
        <List renderHeader={() => gridHeader}>
          <Grid
            data={avatarList}
            columnNum={5}
            onClick={(v) => {
              this.setState(v)
              this.props.selectAvatar(v.text)
            }}
          />
        </List>
      </div>
    )
  }
}

export default AvatarSelector