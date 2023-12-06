import React from 'react'
import ContactsLogos from '../components/ContactsLogos'
import Form from '../components/Form'
const Contacts = () => {
  React.useEffect(()=> {
    window.scrollTo(0,0)
  }, [])
  return (
    <section className="container--contacts">
      <div className="container--contacts__text">
          <h2>контакты</h2>
      </div>
      <ContactsLogos />
      <Form />
    </section>
  )
}

export default Contacts