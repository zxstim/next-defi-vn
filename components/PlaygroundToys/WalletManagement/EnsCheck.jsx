import { useEnsAddress } from 'wagmi';
import { useState } from 'react';
import styles from "./EnsCheck.module.css";

// create a component that has an text input box to type in an ENS name and a button to call the useEnsResolver hook to resolve an ENS name
export default function EnsCheck() {
  const [ensName, setEnsName] = useState('')
  const [ensAddress, setEnsAddress] = useState('')
  const [ensError, setEnsError] = useState('')
  const { data, isError, isLoading } = useEnsAddress({name: ensName})
 
  const handleEnsNameChange = (event) => {
    setEnsName(event.target.value)
  }
 
  const handleEnsNameResolve = async () => {
    try {
      const address = await resolveEnsName(ensName)
      setEnsAddress(address)
      setEnsError('')
    } catch (error) {
      setEnsAddress('')
      setEnsError(error.message)
    }
  }


  return (
    <div className={styles.ens_check_container}>
      <div className={styles.ens_resolve_container}>
        <input
          className={styles.ens_input}
          type="text"
          value={ensName}
          onChange={handleEnsNameChange}
        />
        <button className={styles.action_button} onClick={handleEnsNameResolve}>Resolve</button>
      </div>
      {isLoading ? <div className={styles.warning_message}>Fetching resolver…</div> : isError ? <div className={styles.error_message}>Error fetching resolver</div> : <div className={styles.success_message}>Address: {JSON.stringify(data)}</div>}
      {/* <div>
        <div>Address: {JSON.stringify(data)}</div>
        <div>Error: {isError}</div>
      </div> */}
    </div>
  )
}