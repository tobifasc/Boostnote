import PropTypes from 'prop-types'
import React from 'react'
import CSSModules from 'browser/lib/CSSModules'
import styles from './SaveButton.styl'
import _ from 'lodash'
import i18n from 'browser/lib/i18n'

class SaveButton extends React.Component {
  render () {
    const { className } = this.props

    return (
      <button className={_.isString(className)
        ? 'SaveButton ' + className
        : 'SaveButton'
      }
        styleName='control-saveButton'
        onClick={this.props.onClick}>
        <img styleName='icon'
          src='../resources/icon/icon-save.svg'
        />
        <span lang={i18n.locale} styleName='tooltip'>{i18n.__('Save')}</span>
      </button>
    )
  }
}

SaveButton.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string
}

export default CSSModules(SaveButton, styles)
