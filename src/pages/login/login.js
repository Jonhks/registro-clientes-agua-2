import React from 'react';

import FormLogin from '../../Components/FormLogin'


export default (props) => {
  const {checkUser} = props
  return (
    <FormLogin checkUser={checkUser} />
  )
}