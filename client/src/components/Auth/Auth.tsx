import styles from './Auth.module.sass';

function Auth() {
  return (
    <>
      <div className={styles.mainBlock}>
        <span className={styles.title}>Авторизация</span>

        <input 
          type="text"
          className={styles.field}
          placeholder="Логин"
        />
        <input 
          type="text"
          className={styles.field}
          placeholder="Пароль"
        />
        <div className={styles.btnBlock}>
          <button className={styles.logIn}>Вход</button>
          <button className={styles.signIn}>Регистрация</button>
        </div>
      </div>
    </>
  )
}

export default Auth;
