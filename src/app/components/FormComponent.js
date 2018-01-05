import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Button from '../styled_components/Button'
import FieldSet from '../styled_components/FieldSet'
import Label from '../styled_components/Label'
import Input from '../styled_components/Input'
import FieldGroup from '../styled_components/FieldGroup'
import InputError from '../styled_components/InputError'

class FormComponent extends React.Component {
  static props = {
    dispatch: PropTypes.func.isRequired,
    builtInputs: PropTypes.object.isRequired,
    inputErrors: PropTypes.object.isRequired
  }

  state = {
    focused: ''
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.handleSubmit(event)
  }

  handleChange = event => {
    this.props.handleChange(event.currentTarget.id, event.currentTarget.value)
  }

  renderNonFieldErrors = () => {
    const { inputErrors } = this.props
    if ('non_field_errors' in inputErrors) {
      return inputErrors.non_field_errors.map(value => {
        return <InputError key={value}>{value}</InputError>
      })
    }
  }

  renderFieldErrors = (input, inputErrors) => {
    return inputErrors[input].map(error => {
      return <InputError key={error}>{error}</InputError>
    })
  }

  renderInputs = () => {
    const { formBuilder, inputErrors, fields } = this.props
    const inputs = Object.keys(fields)
    const errorKeys = Object.keys(inputErrors)

    return inputs.map(input => {
      if (
        formBuilder.noDisplayFields === undefined ||
        formBuilder.noDisplayFields.indexOf(input) === -1
      ) {
        const type = input.includes('password')
          ? 'password'
          : fields[input].type
        const fieldErrorsPresent = errorKeys.indexOf(input) !== -1
        return (
          <FieldGroup key={input}>
            {(this.state.focused === input || fields[input].value !== '') && (
              <Label htmlFor={input}>{`${fields[input].label} `}</Label>
            )}
            <Input
              id={input}
              type={type}
              placeholder={
                this.state.focused === input ? '' : fields[input].label
              }
              onChange={this.handleChange}
              onFocus={() => {
                this.setState({ focused: input })
              }}
              onBlur={() => {
                this.setState({ focused: '' })
              }}
              defaultValue={fields[input].value}
              error={fieldErrorsPresent}
            />
            {fieldErrorsPresent && this.renderFieldErrors(input, inputErrors)}
          </FieldGroup>
        )
      }
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <FieldSet>
          {this.props.name && <p>{this.props.name.toUpperCase()}</p>}
          {this.props.description !== '' && <p>{this.props.description}</p>}
          {this.renderInputs()}
          <Button>{this.props.formBuilder.button.text}</Button>
          {this.renderNonFieldErrors()}
        </FieldSet>
      </form>
    )
  }
}

function mapStateToProps(state, ownProps) {
  const inputErrors = state.errors.fields
  return {
    inputErrors
  }
}

export default connect(mapStateToProps)(FormComponent)
