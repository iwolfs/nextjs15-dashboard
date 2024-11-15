import { fetchCustomers } from '@/app/lib/actions';
import { useEffect, useState } from 'react';
import { CustomerField } from '@/app/lib/definitions';

export default function CustomerSelect() {
  const [customers, setCustomers] = useState<CustomerField[]>([])
  
  useEffect(() => {
    requestCustomers();
  }, [])

  const requestCustomers = async () => {
    const rows = await fetchCustomers();
    console.log('customers rows', rows)
    setCustomers(rows)
  }
  
  return (
    <select
      id="customer"
      name="customerId"
      className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
      defaultValue=""
      aria-describedby="customer-error"
    >
      <option value="" disabled>
        Select a customer
      </option>
      {customers.map((customer) => (
        <option key={customer.id} value={customer.id}>
          {customer.name}
        </option>
      ))}
    </select>
  )
} 