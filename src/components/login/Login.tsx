import styles from './Login.module.css';
import { isMobile } from 'react-device-detect';
const Login = () => {


  return(
    <div className={styles.container}>
      <div className={styles.loginContainer}> 
        <div className={styles.loginHeading}>
          <h1 className={styles.headingText}>Login to <span className={styles.companyName}>Clean</span></h1>
        </div>
      </div>
    </div>
  )
}
export default Login;