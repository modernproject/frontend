import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import FormComponent from '../components/FormComponent'
import BackButtonContainer from '../containers/BackButtonContainer'
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
    Object.keys(this.fields).map(field => {
      values[field] = this.fields[field].value
    })
    if (this.props.formBuilder.values) {
      values = Object.assign(values, this.props.formBuilder.values)
    }
    this.props.dispatch(clearErrors()).then(() => {
      this.props.dispatch(this.props.formBuilder.action(values))
    })
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
      let options = await obtainFormOptions(this.props.formBuilder.uri)
      return options
    }
    obtainOptions().then(options => {
      let fields = options.actions[this.props.formBuilder.method]
      if (Object.keys(fields).every(field => ['username', 'email'])) {
        delete fields['username']
      }
      Object.keys(fields).map(field => {
        fields[field].value = ''
      })

      this.fields = fields

      if (Object.keys(this.props.formBuilder).indexOf('name') === -1) {
        this.setState({ name: options.name })
      }
      if (Object.keys(this.props.formBuilder).indexOf('description') === -1) {
        this.setState({ description: options.description })
      }

      this.setState({ loading: false })
    })
  }

  render() {
    if (this.state.loading) {
      return null
    } else {
      return (
        <div>
          <BackButtonContainer />
          <FormComponent
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            fields={this.fields}
            {...this.state}
            {...this.props}
          />
        </div>
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
