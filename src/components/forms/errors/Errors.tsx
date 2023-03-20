import React from 'react'

interface IError {
  err: string | undefined | any
}

export const Errors: React.FunctionComponent<IError> = ({err}) => <p style={{color: "red"}}>{err}</p>
