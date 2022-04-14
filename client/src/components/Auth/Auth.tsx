import styles from './Auth.module.sass';

import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import $api from './../../http';

type AuthorizationFields = {
  login: string;
  password: string;
}

function Authorization() {
  const { register, handleSubmit, reset} = useForm<AuthorizationFields>();

  function signin(fields: AuthorizationFields) {
    $api.post('/auth', {
      login: fields.login,
      password: fields.password
    })
      .then((response) => {
        console.log(response);
        reset();
      })
      .catch((error) => console.log(error));
  } 
  
  return (
    <>
      <form className={styles.mainBlock} onSubmit={handleSubmit(signin)}>
        <h1 className={styles.title}>Авторизация</h1>

        <div className={styles.fieldBlock}>
          <input 
            type="text"
            className={styles.field}
            placeholder="Логин"
            {...register('login')}
          />
        </div>
        
        <div className={styles.fieldBlock}>
          <input 
            type="password"
            className={styles.field}
            placeholder="Пароль"
            {...register('password')}
          />
        </div>

        <div className={styles.btnBlock}>
          <NavLink to='/signup' className={styles.logIn}>Регистрация</NavLink>
          <input 
            className={styles.signUp}
            type="submit"
            value="Войти"
          />
        </div>
      </form>
      <NavLink to='/profile' className={styles.signUp}>Профиль</NavLink>
    </>
  );
}

export default Authorization;
