export const login = (state) => ({ type: 'LOGIN', state });

export const wallet = (state) => ({ type: 'GET_CURRENCY', state });

export const fetchCurrency = () => async (dispatch) => {
  try {
    const reponse = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await reponse.json();
    const moedas = Object.keys(data).filter((coin) => coin !== 'USDT');
    dispatch(wallet(moedas));
  } catch (error) {
    console.log(error);
  }
};

export const addNewDespesa = (state) => ({ type: 'NEW_DESPESA', despesa: state });
