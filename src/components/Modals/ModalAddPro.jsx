import { useEffect } from "react"
import "../../styles/modals.css"

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircleCheck} from '@fortawesome/free-solid-svg-icons'

const ModalAddPro = ({ open, onClose }) => {
  useEffect(()=> {
    if(open) {
      const timer = setTimeout(()=>{
        onClose()
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [open, onClose])

    if(!open) return null

  return (
    <div className={`modal-container ${open ? 'modal-open' : ''}`}> <FontAwesomeIcon icon={faCircleCheck} /> Professionnel ajouté </div>
  )
}
export default ModalAddPro