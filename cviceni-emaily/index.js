console.log('Všetko baví')

/*
      <div class="email">
        <div class="email__head">
          <button class="email__icon email__icon--closed"></button>
          <div class="email__info">
            <div class="email__sender">Pavel Chocholouš</div>
            <div class="email__subject">Jak to jde?</div>
          </div>
          <div class="email__time">12:35</div>
        </div>
        <div class="email__body"></div>
      </div>
*/


const createNeprecteneEmails = (emails) => {
    const neprecteneElm = document.querySelector('#neprectene')
    neprecteneElm.innerHTML = emails
        .map((email) =>
            `
            <div class="email">
                <div class="email__head">
                <button class="email__icon email__icon--closed"></button>
                <div class="email__info">
                    <div class="email__sender">${email.sender.name}</div>
                    <div class="email__subject">${email.subject}</div>
                </div>
                <div class="email__time">${email.time}</div>
                </div>
                <div class="email__body"></div>
            </div>`
        )
        .join('')
}

const createPrecteneEmails = (emails) => {
  const precteneElm = document.querySelector('#prectene')
  precteneElm.innerHTML = emails
      .map((email) =>
          `
          <div class="email">
              <div class="email__head">
              <button class="email__icon email__icon--opened"></button>
              <div class="email__info">
                  <div class="email__sender">${email.sender.name}</div>
                  <div class="email__subject">${email.subject}</div>
              </div>
              <div class="email__time">${email.time}</div>
              </div>
              <div class="email__body"></div>
          </div>`
      )
      .join('')
}

fetch('https://apps.kodim.cz/daweb/trening-api/apis/emails?folder=unread')
    .then((response) => response.json())
    .then((data) => {
        createNeprecteneEmails(data.emails)
    })

    fetch('https://apps.kodim.cz/daweb/trening-api/apis/emails?folder=read')
    .then((response) => response.json())
    .then((data) => {
        createPrecteneEmails(data.emails)
    })
