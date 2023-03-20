import React from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useForm } from 'react-hook-form';
import { Components } from '../../../components';
import { FormsInstruments } from '../../../helpers/Forms';

import { auth } from '../../../firebase/firebase';
import { Hooks } from '../../../hooks';

import cls from "./index.module.scss";


const Register: React.FunctionComponent = () => {

  const { actions } = Hooks.useRedirect();

  const {
    handleSubmit,
    register,
    reset,
    formState: {errors}
  } = useForm({
    mode: "onSubmit"
  });

  const handleregister = (data: any) => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((res: any) => {
        localStorage.setItem("accessToken", res.user.accessToken);
        actions.goToLogin();
        reset();
      })
  }

  return (
    <React.Fragment>
      <Components.Container>
        <section className={cls.register_page}>
          <h2>Sign up</h2>


          <form onClick={handleSubmit(handleregister)}>
            <Components.Divider>
              <Components.TextInput 
                type='email'
                placeholder='Email'
                {...register("email" , {
                  required:{
                    message: "This area should be filled!",
                    value: true
                  },
                  maxLength: {
                    message: FormsInstruments.LengthOfValue("max", "Email", 25),
                    value: 25
                  },
                  minLength: {
                    message: FormsInstruments.LengthOfValue("min", "Email", 5),
                    value: 5
                  }
                })}
              />
              <Components.Errors err={errors?.email && errors?.email.message}/>
            </Components.Divider>

            <Components.Divider>
              <Components.TextInput 
                type='password'
                placeholder='Password'
                {...register("password", {
                  required:{
                    message: "This area should be filled!",
                    value: true
                  },
                  maxLength: {
                    message: FormsInstruments.LengthOfValue("max", "Password", 25),
                    value: 25
                  },
                  minLength: {
                    message: FormsInstruments.LengthOfValue("min", "Password", 5),
                    value: 5
                  }
                })}
              />
              <Components.Errors err={errors?.password && errors?.password.message}/>
            </Components.Divider>

            <Components.Divider>
              <Components.AuthSubmit location="Sign Up"/>
            </Components.Divider>

            <Components.Divider>
              <Components.AuthNavigate location='signUp'/>
            </Components.Divider>

            <Components.Divider>
              <Components.AuthGoogle location='signUp'/>
            </Components.Divider>
          </form>
        </section>
      </Components.Container>
    </React.Fragment>
  )
}

export default Register;
