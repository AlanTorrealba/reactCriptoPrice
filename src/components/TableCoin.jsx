import React from "react";
const titles = ["#", "Coin", "Price", "Price Change %", "24h Volume"];
function TableCoin({ coins }) {
  return (
    <div>
      <div class="table-container">
        <table class="table is-bordered  is-hoverable is-fullwidth has-background-light">
          <thead class="">
            <tr class="has-text-black" >
              {titles.map((title) => (
                <td>{title}</td>
              ))}
            </tr>
          </thead>
          <tbody>
            {coins.map((coin) => (
              <tr>
                <td>
                  <img src={coin.image} alt={coin.name} style={{width:'9%'}}  />
                </td>
                <td>{coin.name}</td>
                <td>{coin.current_price}</td>
                <td className={coin.price_change_percentage_24h > 0 ? 'has-text-success' : 'has-text-danger'}>{coin.price_change_percentage_24h}</td>
                <td>{coin.total_volume}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableCoin;
