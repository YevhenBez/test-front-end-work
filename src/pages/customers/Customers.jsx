import listCustomers from '../../path/to/customers.json';
import css from '../../pages/customers/css/customers.module.css';

const Customers = () => {
  
  return (
    <table className={css.customersTable}>
            <thead>
            <tr className={css.customersTable__tr}>
                <th className={css.customersTable__tr__indentBgn}></th>
                <th className={css.customersTable__tr__th}>Customer Name</th>
                <th className={css.customersTable__tr__th}>Company</th>
                <th className={css.customersTable__tr__th}>Phone Number</th>
                <th className={css.customersTable__tr__th}>Email</th>
                <th className={css.customersTable__tr__th}>Country</th>
                <th className={css.customersTable__tr__thStatus}>Status</th>
                <th className={css.customersTable__tr__indentEnd}></th>
            </tr>
            </thead>

            <tbody>
                {listCustomers.map(listCustomer => (
                        <tr key={listCustomer.id}>
                            <td></td>
                            <td className={css.customersTable__td}>{listCustomer.name}</td>
                            <td className={css.customersTable__td}>{listCustomer.company}</td>
                            <td className={css.customersTable__td}>{listCustomer.phone}</td>
                            <td className={css.customersTable__td}>{listCustomer.email}</td>
                            <td className={css.customersTable__td}>{listCustomer.country}</td>
                            <td className={css.customersTable__tdStatus}><div className={listCustomer.status === "Inactive" ? css.customersTable__tdStatus__inactive : css.customersTable__tdStatus__active}>{listCustomer.status}</div></td>
                            <td></td>
                        </tr>
                    ))}
            </tbody>
        </table>
  );
};

export default Customers;