import React from 'react'

import cls from "./index.module.scss"

interface IAuthGoogle {
  location: string
}

export const AuthGoogle: React.FunctionComponent<IAuthGoogle> = ({location}) => {

  const googleIcon = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/471px-Google_%22G%22_Logo.svg.png" ;

  const handleAuthWithGoogle = () => {

  }

  return (
    <p className={cls.authGoogle} onClick={handleAuthWithGoogle}>
      {
        location === "signIn"
          ? "Or you can Log in with"
          : "Or you can Sign up with"
      }

      <img src={googleIcon} alt="" />
    </p>
  )
}
