import React, { useState } from 'react';
import listCustomers from '../../path/to/customers.json';
import css from '../../pages/customers/css/customers.module.css';
import sprite from '../../img/svg/sprite-icon.svg';

const Customers = () => {

  const [filter, setFilter] = useState('');
  const [isFocused, setIsFocused] = useState(true);

  const filteredCustomers = listCustomers.filter(row => row.name.toLowerCase().includes(filter.toLowerCase()) || row.company.toLowerCase().includes(filter.toLowerCase()) || row.phone.includes(filter) || row.email.toLowerCase().includes(filter.toLowerCase()) || row.country.toLowerCase().includes(filter.toLowerCase()) || row.status.includes(filter));
  
  const handleChangeName = (event) => {
    setFilter(event.currentTarget.value)
  };

  

  return (
    <div className={css.customersContainer}>
      <div className={css.customersContainer__filterBoard}>
        <div className={css.customersContainer__filterBoard__btns}>
          <button className={isFocused ? css.customersContainer__filterBoard__btns__all : css.customersContainer__filterBoard__btns__allBlur} onClick={() => setFilter('') } onFocus={() => setIsFocused(true)} >All Customers</button>
          <button className={!isFocused ? css.customersContainer__filterBoard__btns__active : css.customersContainer__filterBoard__btns__activeBlur} onClick={() => setFilter("Active")} onFocus={() => setIsFocused(false)}>Active Members</button>
        </div>
        <div className={css.customersContainer__filterBoard__inputBox}>
          <svg width="24" height="24" className={css.customersContainer__filterBoard__inputBox__svg}>
                <use xlinkHref={`${sprite}#search`} />
          </svg>
          <input type="text" value={filter} onChange={handleChangeName} placeholder="Search" className={css.customersContainer__filterBoard__inputBox__input} />
        </div>
      </div>
      <table className={css.customersContainer__table}>
              <thead>
              <tr className={css.customersContainer__table__tr}>
                  <th className={css.customersContainer__table__tr__indentBgn}></th>
                  <th className={css.customersContainer__table__tr__th}>Customer Name</th>
                  <th className={css.customersContainer__table__tr__th}>Company</th>
                  <th className={css.customersContainer__table__tr__th}>Phone Number</th>
                  <th className={css.customersContainer__table__tr__th}>Email</th>
                  <th className={css.customersContainer__table__tr__th}>Country</th>
                  <th className={css.customersContainer__table__tr__thStatus}>Status</th>
                  <th className={css.customersContainer__table__tr__indentEnd}></th>
              </tr>
              </thead>
  
              {filter ?
              <tbody>
                  {filteredCustomers.map(filteredCustomer => (
                          <tr key={filteredCustomer.id}>
                              <td></td>
                              <td className={css.customersContainer__table__td}>{filteredCustomer.name}</td>
                              <td className={css.customersContainer__table__td}>{filteredCustomer.company}</td>
                              <td className={css.customersContainer__table__td}>{filteredCustomer.phone}</td>
                              <td className={css.customersContainer__table__td}>{filteredCustomer.email}</td>
                              <td className={css.customersContainer__table__td}>{filteredCustomer.country}</td>
                              <td className={css.customersContainer__table__tdStatus}><div className={filteredCustomer.status === "Inactive" ? css.customersContainer__table__tdStatus__inactive : css.customersContainer__table__tdStatus__active}>{filteredCustomer.status}</div></td>
                              <td></td>
                          </tr>
                      ))}
              </tbody>
              :
              <tbody>
                  {listCustomers.map(listCustomer => (
                          <tr key={listCustomer.id}>
                              <td></td>
                              <td className={css.customersContainer__table__td}>{listCustomer.name}</td>
                              <td className={css.customersContainer__table__td}>{listCustomer.company}</td>
                              <td className={css.customersContainer__table__td}>{listCustomer.phone}</td>
                              <td className={css.customersContainer__table__td}>{listCustomer.email}</td>
                              <td className={css.customersContainer__table__td}>{listCustomer.country}</td>
                              <td className={css.customersContainer__table__tdStatus}><div className={listCustomer.status === "Inactive" ? css.customersContainer__table__tdStatus__inactive : css.customersContainer__table__tdStatus__active}>{listCustomer.status}</div></td>
                              <td></td>
                          </tr>
                      ))}
              </tbody>}
          </table>
    </div>
  );
};

export default Customers;