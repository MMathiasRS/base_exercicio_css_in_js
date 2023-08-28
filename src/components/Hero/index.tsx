<<<<<<< HEAD
import { HeroStyled } from './Hero'

const Hero = () => (
  <HeroStyled>
    <form className="form">
      <div className="container">
        <h2 className="heroTitle">
          As melhores vagas para tecnologia, design e artes visuais.
        </h2>
      </div>
    </form>
  </HeroStyled>
=======
import styles from './Hero.module.css'

const Hero = () => (
  <form className={styles.form}>
    <div className="container">
      <h2 className={styles.heroTitle}>
        As melhores vagas para tecnologia, design e artes visuais.
      </h2>
    </div>
  </form>
>>>>>>> 6b75ea68847c2a67da4aa2679f111c99ca9da97a
)

export default Hero
