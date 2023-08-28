import { FormEvent, useState } from 'react'
<<<<<<< HEAD
import { FormStyles } from './Form'
=======

import styles from './FormVagas.module.css'

>>>>>>> 6b75ea68847c2a67da4aa2679f111c99ca9da97a
type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
<<<<<<< HEAD
    <FormStyles>
      <form className="form" onSubmit={aoEnviarForm}>
        <input
          className="campo"
          placeholder="Front-end, fullstack, node, design"
          onChange={(e) => setTermo(e.target.value)}
          type="search"
        />
        <button className="btnPesquisar" type="submit">
          Pesquisar
        </button>
      </form>
    </FormStyles>
=======
    <form className={styles.form} onSubmit={aoEnviarForm}>
      <input
        className={styles.campo}
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <button className={styles.btnPesquisar} type="submit">
        Pesquisar
      </button>
    </form>
>>>>>>> 6b75ea68847c2a67da4aa2679f111c99ca9da97a
  )
}
export default FormVagas
