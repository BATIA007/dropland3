
document.addEventListener('DOMContentLoaded', () => {
  // НОВЫЙ КОД ДЛЯ PROFILE (ИДЁТ ДО КОДА showPopup)
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


    const soundBtn = profile.querySelector('.profile__sound-btn')
    soundBtn.addEventListener('click', (e) => {
      const text = soundBtn.querySelector('span')
      if (soundBtn.classList.contains('profile__sound-active')) {
        text.textContent = 'sound on'
      } else {
        text.textContent = 'sound off'
      }
      soundBtn.classList.toggle('profile__sound-active')
    })

    const items = document.querySelector('.items')
    const tabs = items.querySelector('.items__tabs')
    const contents = items.querySelectorAll('.items__tab-content')
    for (let tab of tabs.children) {
      tab.addEventListener('click', (e) => {
        for (let content of contents) {
          content.style.display = "none"
          if (tab.dataset.tab === content.dataset.tab) {
            content.style.display = 'grid'

            if (tab.dataset.tab === 'items') {
              content.style.display = 'flex'
            }
          }
        }

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

  //    ЭТОТ БЛОК УЖЕ БЫЛ В ВЕРСТКЕ ШАПКА + ФУТЕР ЕГО КОПИРОВАТЬ НЕ НАДО
  function showPopup(elem, name) {
    elem.classList.add(name)
    document.body.style.overflowY = 'hidden'
  }

  function hidePopup(elem, name) {
    elem.classList.remove(name)
    document.body.style.overflowY = 'auto'
  }
  //    ЭТОТ БЛОК УЖЕ БЫЛ В ВЕРСТКЕ ШАПКА + ФУТЕР ЕГО КОПИРОВАТЬ НЕ НАДО
})
