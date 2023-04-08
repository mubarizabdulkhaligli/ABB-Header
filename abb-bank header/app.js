let credit = document.querySelector('.credit');
let subCredit = document.querySelector('.sub-credit');

credit.addEventListener('mouseover', () => {
  subCredit.style.display = 'block';
});

credit.addEventListener('mouseout', () => {
  setTimeout(() => {
    if (!subCredit.matches(':hover')) {
      subCredit.style.display = 'none';
    }
  }, 20);
});

subCredit.addEventListener('mouseover', () => {
  subCredit.style.display = 'block';
});

subCredit.addEventListener('mouseout', () => {
  subCredit.style.display = 'none';
});



let mortgage = document.querySelector('.mortgage');
let subMortgage = document.querySelector('.sub-mortgage');

mortgage.addEventListener('mouseover', () => {
    subMortgage.style.display = 'block';
});

mortgage.addEventListener('mouseout', () => {
  setTimeout(() => {
    if (!subMortgage.matches(':hover')) {
        subMortgage.style.display = 'none';
    }
  }, 20);
});

subMortgage.addEventListener('mouseover', () => {
    subMortgage.style.display = 'block';
});

subMortgage.addEventListener('mouseout', () => {
    subMortgage.style.display = 'none';
});

let deposits = document.querySelector('.deposits');
let subDeposits = document.querySelector('.sub-deposits');

deposits.addEventListener('mouseover', () => {
    subDeposits.style.display = 'block';
});

deposits.addEventListener('mouseout', () => {
  setTimeout(() => {
    if (!subDeposits.matches(':hover')) {
        subDeposits.style.display = 'none';
    }
  }, 20);
});

subDeposits.addEventListener('mouseover', () => {
    subDeposits.style.display = 'block';
});

let cards = document.querySelector('.cards');
let subCards = document.querySelector('.sub-cards');

cards.addEventListener('mouseover', () => {
    subCards.style.display = 'block';
});

cards.addEventListener('mouseout', () => {
  setTimeout(() => {
    if (!subCards.matches(':hover')) {
        subCards.style.display = 'none';
    }
  }, 20);
});

subCards.addEventListener('mouseover', () => {
    subCards.style.display = 'block';
});

subCards.addEventListener('mouseout', () => {
    subCards.style.display = 'none';
});


let moneyTransfers = document.querySelector('.money-transfers');
let subMoneyTransfers = document.querySelector('.sub-money-transfers');

moneyTransfers.addEventListener('mouseover', () => {
    subMoneyTransfers.style.display = 'block';
});

moneyTransfers.addEventListener('mouseout', () => {
  setTimeout(() => {
    if (!subMoneyTransfers.matches(':hover')) {
        subMoneyTransfers.style.display = 'none';
    }
  }, 20);
});

subMoneyTransfers.addEventListener('mouseover', () => {
    subMoneyTransfers.style.display = 'block';
});

subMoneyTransfers.addEventListener('mouseout', () => {
    subMoneyTransfers.style.display = 'none';
});

let currentAccount = document.querySelector('.current-account');
let subCurrentAccount = document.querySelector('.sub-current-account');

currentAccount.addEventListener('mouseover', () => {
    subCurrentAccount.style.display = 'block';
});

currentAccount.addEventListener('mouseout', () => {
  setTimeout(() => {
    if (!subCurrentAccount.matches(':hover')) {
        subCurrentAccount.style.display = 'none';
    }
  }, 20);
});

subCurrentAccount.addEventListener('mouseover', () => {
    subCurrentAccount.style.display = 'block';
});

subCurrentAccount.addEventListener('mouseout', () => {
    subCurrentAccount.style.display = 'none';
});


let eServices = document.querySelector('.e-services');
let subEservices = document.querySelector('.sub-e-services');

eServices.addEventListener('mouseover', () => {
    subEservices.style.display = 'block';
});

eServices.addEventListener('mouseout', () => {
  setTimeout(() => {
    if (!subEservices.matches(':hover')) {
        subEservices.style.display = 'none';
    }
  }, 20);
});

subEservices.addEventListener('mouseover', () => {
    subEservices.style.display = 'block';
});

subEservices.addEventListener('mouseout', () => {
    subEservices.style.display = 'none';
});

let bank = document.querySelector('.bank');
let subBank = document.querySelector('.sub-bank');

bank.addEventListener('mouseover', () => {
    subBank.style.display = 'block';
});

bank.addEventListener('mouseout', () => {
  setTimeout(() => {
    if (!subBank.matches(':hover')) {
        subBank.style.display = 'none';
    }
  }, 20);
});

subBank.addEventListener('mouseover', () => {
    subBank.style.display = 'block';
});

subBank.addEventListener('mouseout', () => {
    subBank.style.display = 'none';
});

let toggleButton = document.querySelector('#toggle-menu');
  let menu = document.querySelector('.header-search-menu');
  let middle = document.querySelector('.header-middle');
  let bottom = document.querySelector('.header-bottom');
  let mobile = document.querySelector('.header-mobile');


  
  toggleButton.addEventListener('click', () => {
    if (menu.style.display === 'none') {
      menu.style.display = 'block';
      middle.style.display = 'none';
      bottom.style.display = 'none';
      mobile.style.display = 'none';

      toggleButton.style.transition = '0.1'
      toggleButton.style.color = '#0156c1'
    } else {
      menu.style.display = 'none';
      middle.style.display = 'block';
      bottom.style.display = 'block'
      mobile.style.display = 'block';
      toggleButton.style.transition = '0.1'
      toggleButton.style.color = '#666666'
    }
  });

  let closeSearchMenu = document.querySelector('.close-btn')

  closeSearchMenu.addEventListener('click', () => {
    menu.style.display = 'none';
    middle.style.display = 'block';
    bottom.style.display = 'block'
    toggleButton.style.transition = '0.1'
    toggleButton.style.color = '#666666'
    } )

    let changeLanguage = document.querySelector('#lang')
    let languageOptions = document.querySelector('.language-options')

    changeLanguage.addEventListener('click', () => {
      if (languageOptions.style.display === 'none') {
        languageOptions.style.display = 'block';
      } else {
        languageOptions.style.display = 'none';
      }
    });

    document.addEventListener('click', (event) => {
      if (event.target.closest('#lang') || event.target.closest('.language-options')) return;
      languageOptions.style.display = 'none';
    });

    let iconToggleBtn = document.querySelector('.icon-toggle');
let iconElement = iconToggleBtn.querySelector('i');
let openedMenu = document.querySelector('.opened-menu');

iconToggleBtn.addEventListener('click', function() {
  if (iconElement.classList.contains('fa-bars')) {
    iconElement.classList.remove('fa-bars');
    iconElement.classList.add('fa-x');
    openedMenu.style.right = '0';
    
  } else {
    iconElement.classList.remove('fa-x');
    iconElement.classList.add('fa-bars');
    openedMenu.style.right = '-100%';
  }
});


