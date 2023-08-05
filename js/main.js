
document.addEventListener('DOMContentLoaded', () => {
  // НОВЫЙ КОД ДЛЯ PROFILE (ИДЁТ ДО КОДА HEADER)
  const profile = document.querySelector('.profile')
  if (profile) {
    const progress = profile.querySelector('.profile__any-progress')
    const casesList = progress.querySelectorAll('.profile__any-link')
    const lines = progress.querySelectorAll('.profile__icon-link')
    const num = Number(progress.dataset.opened);
    for (let i = 0; i < num; i++) {
      casesList[i].classList.add('profile__any-good')
      if (i > 0) {
        lines[i - 1].classList.add('profile__any-good')
      }
    }
    if (num === 10) lines[9].classList.add('profile__any-good')

    const deposit = profile.querySelector('.profile__money-btn')
    deposit.addEventListener('click', (e) => showPopup(popup, 'popup-active'))

    const items = document.querySelector('.items')
    const tabs = items.querySelector('.items__tabs')
    for (let tab of tabs.children) {
      tab.addEventListener('click', (e) => {
        for (let tab of tabs.children) {
          tab.classList.remove('items__tab-active')
        }
        tab.classList.add('items__tab-active')
      })
    }

    const selectBlock = items.querySelector('.items__select-block')
    const select = selectBlock.querySelector('.items__select')
    const selectList = selectBlock.querySelector('.items__select-list');
    select.addEventListener('click', (e) => {
      selectBlock.classList.toggle('items__select-active')
    })

    for (let link of selectList.children) {
      link.addEventListener('click', (e) => {
        const selectVal = link
        const selectedVal = select.querySelector('.items__selected')
        selectedVal.textContent = selectVal.textContent
        selectBlock.classList.remove('items__select-active')
      })
    }

    const list = items.querySelector('.items__list')
    for (let link of list.children) {
      const send = link.querySelector('.items__content-send')
      const sell = link.querySelector('.items__content-sell')
      if (send) {
        send.addEventListener('click', (e) => {
          link.insertAdjacentHTML('beforeend', `<div class="items__hover">
          <div class="items__hover-top">
            <svg class="items__hover-svg" width="40" height="40" fill="none">
              <use href="./img/sprite.svg#loadingLogo"></use>
            </svg>
            <span class="items__hover-time">05:55</span>
          </div>
          <span class="items__hover-text">Waiting for seller</span>
          <button class="items__hover-btn">Get a item</button>
        </div>`)
          setTimeout(() => {
            link.querySelector('.items__hover').classList.add('items__hover-active')
          }, 100)
        })
      }
      if (sell) {
        sell.addEventListener('click', (e) => {
          const btns = link.querySelector('.items__content-btns')
          btns.innerHTML = `<p class="items__content-info items__content-sold">
          <svg width="8" height="12" fill="none">
            <use href="./img/sprite.svg#dollar"></use>
          </svg>
          <span>Sold</span>
        </p>`;
        })
      }
    }

    const tasks = document.querySelector('.tasks')
    const btn = profile.querySelector('.profile__group-btn')

    btn.addEventListener('click', (e) => showPopup(tasks, 'tasks-active'))
    const close = tasks.querySelector('.tasks__close-img');
    close.addEventListener('click', (e) => hidePopup(tasks, 'tasks-active'))
    const close2 = tasks.querySelector('.tasks__back-btn');
    close2.addEventListener('click', (e) => hidePopup(tasks, 'tasks-active'))
  }
  //   HEADER

  const heder = document.querySelector('.heder')
  const selectBlocks = document.querySelectorAll('.heder__select-block')

  for (let selectBlock of selectBlocks) {
    const select = selectBlock.querySelector('.heder__select')
    const selectList = selectBlock.querySelector('.heder__select-list');
    select.addEventListener('click', (e) => {
      selectBlock.classList.toggle('heder__select-active')
    })

    for (let link of selectList.children) {
      link.addEventListener('click', (e) => {
        const selectVal = link.querySelector('.heder__select-value')
        const selectFlag = link.querySelector('.heder__select-flag')
        const selectedVal = select.querySelector('.heder__selected-value')
        const selectedFlag = select.querySelector('.heder__selected-flag')
        selectedFlag.src = selectFlag.src
        selectedFlag.alt = selectFlag.alt
        selectedVal.textContent = selectVal.textContent
        selectBlock.classList.remove('heder__select-active')
      })
    }
  }

  const notifBlock = heder.querySelector('.heder__notification-block')
  const notif = heder.querySelector('.heder__notification-btn')
  notif.addEventListener('click', (e) => {
    notifBlock.classList.toggle('heder__notification-active')
  })

  const profileBlock = heder.querySelector('.heder__profile-block')
  const profileLinks1 = heder.querySelectorAll('.heder__profile-content')
  const profileLinks2 = heder.querySelectorAll('.heder__profile-arrow')

  for (let link of profileLinks1) {
    link.addEventListener('click', (e) => {
      profileBlock.classList.toggle('heder__profile-active')
    })
  }

  for (let link of profileLinks2) {
    link.addEventListener('click', (e) => {
      profileBlock.classList.toggle('heder__profile-active')
    })
  }

  const hederTabs = heder.querySelectorAll('.heder__tab')
  const hederTabeds = heder.querySelectorAll('.heder__drop-list')

  for (let tab of hederTabs) {
    tab.addEventListener('click', (e) => {
      if (!tab.classList.contains('heder__tab-active')) {
        for (let tab of hederTabs) {
          tab.classList.remove('heder__tab-active')
        }
        tab.classList.add('heder__tab-active')
        for (let tabed of hederTabeds) {
          tab.dataset.tab === tabed.dataset.tabed ? tabed.style.display = 'flex' : tabed.style.display = 'none';
        }
      }
    })
  }



  // POPUP


  const popup = document.querySelector('.popup')
  const signIn = document.querySelector('.login')
  const menu = document.querySelector('.menu')

  function showPopup(elem, name) {
    elem.classList.add(name)
    document.body.style.overflowY = 'hidden'
  }

  function hidePopup(elem, name) {
    elem.classList.remove(name)
    document.body.style.overflowY = 'auto'
  }

  // ***** ВЫЗОВ ПОПАПА 1
  const btns = heder.querySelectorAll('.heder__profile-pay')
  for (let btn of btns) {
    btn.addEventListener('click', (e) => showPopup(popup, 'popup-active'))
  }
  // ***** ВЫЗОВ ПОПАПА 1


  // ***** ВЫЗОВ ПОПАПА 2
  const btn2 = heder.querySelector('.heder__login')
  btn2.addEventListener('click', (e) => showPopup(signIn, 'login-active'))
  // ***** ВЫЗОВ ПОПАПА 2

  // ***** ВЫЗОВ МЕНЮ
  const menuBtn = heder.querySelector('.heder__mobile-menu')
  menuBtn.addEventListener('click', (e) => showPopup(menu, 'menu-active'))
  // ***** ВЫЗОВ МЕНЮ

  const close = document.querySelector('.popup__close')
  close.addEventListener('click', (e) => hidePopup(popup, 'popup-active'))

  const close2 = document.querySelector('.login__close')
  close2.addEventListener('click', (e) => hidePopup(signIn, 'login-active'))

  const close3 = menu.querySelector('.heder__mobile-menu');
  close3.addEventListener('click', (e) => hidePopup(menu, 'menu-active'))

  document.addEventListener('keyup', (event) => {
    if (event.key == 'Escape') {
      hidePopup(popup, 'popup-active')
      hidePopup(signIn, 'login-active')
      if (profile) {
        const tasks = document.querySelector('.tasks')
        hidePopup(tasks, 'tasks-active')
      }
    }
  })

  const loginBtn = document.querySelector('.login__button');
  loginBtn.addEventListener('click', (e) => {
    heder.classList.remove('heder__nonprofile')
    hidePopup(signIn, 'login-active')
  })



  const selectBlock = document.querySelector('.popup__select-block')
  const select = selectBlock.querySelector('.popup__select')
  const selectList = selectBlock.querySelector('.popup__select-list');
  select.addEventListener('click', (e) => {
    selectBlock.classList.toggle('popup__select-active')
  })

  for (let link of selectList.children) {
    link.addEventListener('click', (e) => {
      const selectVal = link.querySelector('.popup__select-value')
      const selectFlag = link.querySelector('.popup__select-flag')
      const selectedVal = select.querySelector('.popup__selected-value')
      const selectedFlag = select.querySelector('.popup__selected-flag')
      selectedFlag.src = selectFlag.src
      selectedFlag.alt = selectFlag.alt
      selectedVal.textContent = selectVal.textContent
      selectBlock.classList.remove('popup__select-active')
    })
  }

  const paymentList = document.querySelector('.popup__payment-list')


  for (let item of paymentList.children) {
    item.addEventListener('click', () => {
      if (!item.classList.contains('popup__payment-active')) {
        for (let item of paymentList.children) {
          item.classList.remove('popup__payment-active')
        }
        item.classList.add('popup__payment-active')
        const atr = item.dataset.paymentLink.toLowerCase()
        const elems = document.querySelector('.popup__right')
        for (let elem of elems.children) {
          elem.classList.remove('popup__right-active')
          elem.dataset.payment.toLowerCase() == atr ? elem.classList.add('popup__right-active') : null
        }
      }
    })
  }

  const promocodes = document.querySelectorAll('.popup__promocode-form')
  for (let promocode of promocodes) {
    const input = promocode.querySelector('.popup__promocode-input')
    const btn = promocode.querySelector('.popup__promocode-button')
    input.addEventListener('input', (e) => {
      e.target.value !== '' ? btn.disabled = false : btn.disabled = true
    })
  }

  const rightBlock = document.querySelector('.popup__right')
  for (let right of rightBlock.children) {
    const tabs = right.querySelectorAll('.popup__tab')
    const input = right.querySelector('.popup__refil-input')
    const price = right.querySelector('.popup__price')
    const switchers = right.querySelectorAll('.popup__switch')
    const switchContainers = right.querySelectorAll('.popup__switch-container')

    if (tabs.length) {
      for (let tab of tabs) {
        tab.addEventListener('click', () => {
          for (let tab of tabs) {
            tab.classList.remove('popup__tab-active')
          }
          tab.classList.add('popup__tab-active')
          const val = tab.querySelector('.popup__tab-value')
          price ? price.textContent = val.textContent : null
        })
      }
    }

    if (input) {
      input.addEventListener('change', (e) => {
        price ? price.textContent = e.target.value : null
      })
    }

    if (switchers.length) {
      for (let switcher of switchers) {
        switcher.addEventListener('click', (e) => {
          for (let container of switchContainers) {
            if (switcher.dataset.switch == container.dataset.switched) {
              for (let switcher of switchers) {
                switcher.classList.remove('popup__switch-active')
              }
              switcher.classList.add('popup__switch-active')
              container.classList.add('popup__switched-active')
            } else {
              container.classList.remove('popup__switched-active')
            }
          }

        })
      }
    }
  }
})
