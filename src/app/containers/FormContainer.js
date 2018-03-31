import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import FormComponent from '../components/FormComponent'
import { clearErrors, obtainFormOptions } from '../actions'

class FormContainer extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    formBuilder: PropTypes.object.isRequired,
    inputErrors: PropTypes.object.isRequired
  }

  state = {
    loading: true,
    name: this.props.formBuilder.name ? this.props.formBuilder.name : '',
    description: this.props.formBuilder.description
      ? this.props.formBuilder.description
      : ''
  }

  fields = {}

  handleSubmit = event => {
    let values = {}
    if (this.props.formBuilder.values) {
      values = Object.assign(values, this.props.formBuilder.values)
    }
    Object.keys(this.fields).map(field => {
      values[field] = this.fields[field].value
    })
    this.props.dispatch(clearErrors())
    this.props.dispatch(this.props.formBuilder.action(values))
  }

  handleChange = (name, value) => {
    this.fields[name].value = value
  }

  componentDidMount = () => {
    this.props.dispatch(clearErrors())
    this.buildFields()
  }

  buildFields = () => {
    let obtainOptions = async () => {
      let options = await obtainFormOptions(
        this.props.formBuilder.uri,
        this.props.dispatch
      )
      return options
    }
    obtainOptions().then(options => {
      if (options !== undefined) {
        let fields = options.actions[this.props.formBuilder.method]
        Object.keys(fields).map(field => {
          let value = ''
          if (this.props.formBuilder.values) {
            value = this.props.formBuilder.values[field]
          }
          fields[field].value = value
          if (this.props.formBuilder.displayNames && this.props.formBuilder.displayNames[field]){
            fields[field].label = this.props.formBuilder.displayNames[field]
          }
        })

        this.fields = fields

        if (Object.keys(this.props.formBuilder).indexOf('name') === -1) {
          this.setState({ name: options.name })
        }
        if (Object.keys(this.props.formBuilder).indexOf('description') === -1) {
          this.setState({ description: options.description })
        }
        this.setState({ loading: false })
      }
    })
  }

  render() {
    if (this.state.loading) {
      return null
    } else {
      return (
        <FormComponent
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          fields={this.fields}
          {...this.state}
          {...this.props}
        />
      )
    }
  }
}

function mapStateToProps(state, ownProps) {
  const inputErrors = state.errors.fields
  return {
    inputErrors
  }
}

export default connect(mapStateToProps)(FormContainer)
