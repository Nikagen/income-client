import styles from './Registration.module.sass';

import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import $api from './../../http'

type RegistrationFields = {
  login: string;
  password: string;
}

const loginErrors = {
  required: {
    value: true, 
    message: 'Логин является обязательным полем для заполнения.'
  },
  minLength: {
    value: 4, message: 'Логин должен быть не менее 4 символов.'
  },
  maxLength: {
    value: 20, message: 'Логин не должен содержать в себе более 20 символов.'
  }
};

const passwordErrors = {
  required: {
    value: true, 
    message: 'Пароль является обязательным полем для заполнения.'
  },
  minLength: {
    value: 8, message: 'Пароль должен быть не менее 4 символов.'
  },
  maxLength: {
    value: 64, message: 'Пароль не должен содержать в себе более 64 символов.'
  }
};

function Registration() {
  const { register, handleSubmit, reset, formState: {errors}} = useForm<RegistrationFields>();

  function signup(fields: RegistrationFields) {
    $api.post('/users', {
      login: fields.login,
      password: fields.password
    })
      .then((response) => {
        console.log(response);
        localStorage.setItem('accessToken', response.data.accessToken);
        reset();
      })
      .catch((error) => console.log(error));
  }
  
  return (
    <>
      <form className={styles.mainBlock} onSubmit={handleSubmit(signup)}>
        <h1 className={styles.title}>Регистрация</h1>

        <div className={styles.fieldBlock}>
          <input 
            type="text"
            className={styles.field}
            placeholder="Логин"
            {...register('login', loginErrors)}
          />
          {errors.login?.message && <span className={styles.error}>* {errors.login?.message}</span>}
        </div>
        
        <div className={styles.fieldBlock}>
          <input 
            type="password"
            className={styles.field}
            placeholder="Пароль"
            {...register('password', passwordErrors)}
          />
          {errors.password?.message && <span className={styles.error}>* {errors.password?.message}</span>}
        </div>

        <div className={styles.btnBlock}>
          <NavLink to='/signin' className={styles.signUp}>Вход</NavLink>
          <input 
            className={styles.signUp}
            type="submit" 
            value="Зарегистрироваться"
          />
        </div>
      </form>
      <NavLink to='/profile' className={styles.signUp}>Профиль</NavLink>
    </>
  );
}

export default Registration;
