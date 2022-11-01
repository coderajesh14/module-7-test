import React from 'react'
import { useState } from 'react';
import  './FooterTwo.css';

function FooterTwo() {

  const [email, setEMail] = useState('');
  const [mailValidate, setEMailValidate] = useState(false);

  const getMail = e => {
    e.preventDefault();
    setEMail(e.target.value);
  };

  const subscribed = async e => {
    e.preventDefault();
    try {
      if (
        email.includes('@') &&
        email.includes('.') &&
        !email.startsWith('@') &&
        email.length - (email.lastIndexOf('.') + 1) >= 2
      ) {
        const resp = await fetch(
          'https://emailaddress-2fd5c-default-rtdb.asia-southeast1.firebasedatabase.app/emailaddress.json',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              mail: email,
            }),
          }
        );

        if (!resp.ok) {
          throw new Error('Something went wrong!!');
        }

        setEMailValidate(false);
        setEMail('');
      } else {
        setEMailValidate(true);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className= 'footer'>
     <hr style={{ margin: '53px 0' }} />
     <div className= 'tableContainer'>
       <table>
          <thead>
            <tr>
              <th>Company Info</th>
              <th>Legal</th>
              <th>Features</th>
              <th>Resources</th>
              <th>Get in Touch</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>About us</td>
              <td>About us</td>
              <td>Business Marketing</td>
              <td>IOS & Android</td>
              <td rowSpan={3}>
                <div className= 'subscribeButton'>
                  <input
                    type='text'
                    value={email}
                    placeholder='Your Mail'
                    onChange={getMail}
                  />
                  <span>
                    <button onClick={subscribed}>Subscribe</button>
                  </span>
                  {mailValidate && (
                    <p className= 'err'>Mail not valid!</p>
                  )}
                </div>
              </td>
            </tr>
            <tr>
              <td>Carrier</td>
              <td>Carrier</td>
              <td>User Analytic</td>
              <td>Watch a demo</td>
            </tr>
            <tr>
              <td>We are hiring</td>
              <td>We are hiring</td>
              <td>Live Chat</td>
              <td>Customers</td>
            </tr>
            <tr>
              <td>Blog</td>
              <td>Blog</td>
              <td>Unlimited Sport</td>
              <td>API</td>
            </tr>
          </tbody>
       </table>
      </div>

      <div className = 'landing-page' style={{ width: '100%' }}>
            <footer>
                Made with ❤️ at Acciojob
            </footer>
        </div>

    </div>
  )
}

export default FooterTwo