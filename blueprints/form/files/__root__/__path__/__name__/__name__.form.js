import PropTypes from 'prop-types'
import React from 'react'
import { View, Button, Text, TextInput } from 'react-native'
import { reduxForm, Field } from 'redux-form'

const propTypes = {
  onSubmit: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}

const renderField = ({
                       input,
                       label,
                       type,
                       meta: {touched, error, warning}
                     }) => (
  <View style={{minHeight: 50, marginBottom: 10}}>
    <Text>{label}</Text>
    <TextInput {...input} placeholder={label} type={type} style={{height: 50}}/>
    {touched && ((error && <Text>{error}</Text>) || (warning && <Text>{warning}</Text>))}
  </View>
)

const required = value => (value ? undefined : 'Required')

let <%= pascalEntityName %>Form = ({pristine, submitting, handleSubmit, onSubmit, style}) => {
  return (
    <View {...style}>
      <Field name="someText"
             component={renderField}
             type="text"
             label="Some Text"
             validate={[required]}/>
      <Button title="Submit" onPress={handleSubmit(onSubmit)} disabled={pristine || submitting}/>
    </View>
  )
}

<%= pascalEntityName %>Form.propTypes = propTypes
<%= pascalEntityName %>Form = reduxForm({
  form: '<%= pascalEntityName %>',
})(<%= pascalEntityName %>Form)

export default <%= pascalEntityName %>Form
