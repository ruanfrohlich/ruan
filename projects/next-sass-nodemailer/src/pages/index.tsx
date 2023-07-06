import styles from '../styles/pages/home.module.scss';
import { FormEvent, useRef, useState } from 'react';

export default function Home() {
  const [userName, setUserName] = useState<string>(null);
  const [email, setEmail] = useState<string>(null);
  const [phone, setPhone] = useState<number>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage]  = useState<string>(null);
  const formRef = useRef<HTMLFormElement>(null)

  const sendEmail = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);

    const req = await fetch(`http://localhost:3000/api/send-email`, {
      method: 'post',
      body: JSON.stringify({
        userName,
        email,
        phone
      })
    });

    const res = await req.json();

    setMessage(res.message);
    setLoading(false);
    formRef.current.reset();
  }

  return (
    <main className="site-main">
      <section>
        <div className={`wrapper ${styles.wrapper}`}>
        <div className={styles.test}>Teste Envio de E-mail</div>
        <form className={styles['form']} onSubmit={(e) => sendEmail(e)} method='post' ref={formRef}>
          <div className={styles['field-group']}>
            <label htmlFor="username">Seu nome:</label>
            <input className='field-control' type="text" onChange={(e) => setUserName(e.currentTarget.value)} required/>
          </div>
          <div className={styles['field-group']}>
            <label htmlFor="username">Seu email:</label>
            <input className='field-control' type="email" onChange={(e) => setEmail(e.currentTarget.value)} required/>
          </div>
          <div className={styles['field-group']}>
            <label htmlFor="username">Seu celular:</label>
            <input className='field-control' type="text" onChange={(e) => setPhone(Number(e.currentTarget.value))} required/>
          </div>
          <button className='button button-primary' type="submit" disabled={loading ? true : false}>Enviar</button>
        </form>
        <p className={styles['form-message']}>{loading ? 'Aguarde...' : message ? message : ''}</p>
      </div>
      </section>
    </main>
  )
}