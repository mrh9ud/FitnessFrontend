import React from 'react'
import { TextInput,Text } from 'react-native-paper'
import { Formik } from 'formik'
import { weightFormValidations } from '../../helpers/Validations'
import{ WEIGHT, REPS } from '../../helpers/FormKeyType'
import { View, StyleSheet } from 'react-native'

const Weight = ({ setNum }) => {
  return (
    <>
    <Text>Set {setNum}:</Text>
    <Formik
      initialValues={{ [WEIGHT]: 0, [REPS]: 0 }}
      onSubmit={ values => console.log('submitting weight and reps to backend')}
      validationSchema={weightFormValidations}
    >
      {({ handleSubmit, handleChange, isValid, values, errors }) => (
        <View>
          <TextInput
            label="Weight"
            mode="outlined"
            placeholder="prev weight"
            values={values.weight}
            keyboardType={'numeric'}
            style={styles.inputField}
            onChangeText={() => console.log('changing weight value')}
          />
          {errors.weight &&
            <Text style={styles.error}>{errors.weight}</Text>
          }
          <TextInput 
            label="Reps"
            mode="outlined"
            placeholder="10"
            values={values.reps}
            keyboardType={'numeric'}
            style={styles.inputField}
            onChangeText={handleChange('reps')}
          />
          {errors.reps &&
            <Text style={styles.error}>{errors.reps}</Text>
          }
        </View>
      )}
    </Formik>
    </>
  )
}

const styles = StyleSheet.create({
  inputField: {
    height: 30, width: 100
  },
  error: {
    fontSize: 10,
    color: 'red'
  }
})

export default Weight