import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { displayAllProfessionals, changeStatusProfessionnal } from '../../api/Professionals'
import { displayExternalProfessionals } from '../../api/ExternalProfessionals'
import { selectAdmin } from '../../slices/adminSlice'
import ProfessionalsAdmin from '../../components/Admin/ProfessionalsAdmin'
import ExternalProfessionalsAdmin from '../../components/Admin/ExternalProfessionalsAdmin'

import '../../styles/adminPage.css'

const Admin = () => {
  const admin = useSelector(selectAdmin);
  const [professionals, setProfessionals] = useState([]);
  const [externalProfessionals, setExternalProfessionals] = useState([])
  const [error, setError] = useState(null);

  const displayPros = () => {
    setError(null);
    displayAllProfessionals()
      .then((res) => {
        setProfessionals(res.result)
      })
      .catch((err) => {
        setError('Une erreur est survenue lors du chargement des professionnels')
      })
  }

  useEffect(() => {
    displayPros()
  }, [])

  const displayExternalPros = () => {
    setError(null)
    displayExternalProfessionals()
      .then((res) => {
        setExternalProfessionals(res.result)
      })
      .catch((err) => {
        setError('Une erreur est survenue lors du chargement des professionnels externes')
      })
  }

  useEffect(() => {
    displayExternalPros()
  }, [])

  const handleChangeStatus = (id, token) => {
    setError(null);
    changeStatusProfessionnal(id, token)
      .then((data) => {
        displayPros();
        setProfessionals((prevProfs) =>
          prevProfs.map((pros) => {
            if (pros.id === id) {
              return { ...pros, isActive: !pros.isActive }
            }
            return pros;
          })
        )
      })
      .catch((err) => {
        setError('Une erreur est survenue lors de la modification du status')
      })
  }

  return (
    <>
      <section className="container-admin">
        <aside className='section-admin'>
          {admin.infos && <h2>Bienvenue {admin.infos.firstname}</h2>}
          <Link to="/register">
            Enregistrer un nouvel administrateur
          </Link>
          <a 
            href="https://search.google.com"
            target='_blank'
            rel="noopener noreferrer"
          >
            Google Search Console
          </a>
        </aside>
        
        <section className='admin-panel'>
            <h2>Portail Administrateur</h2>
            <div className="category-admin">
              
            </div>

          <div className='professionals-MSP'>
            <h3>Les professionnels de la MSP</h3>
            <div className="new-pro">
              <Link to="/ajouter/professionnel">
                Ajouter un professionnel de santé
              </Link>
              <Link to="/ajouter/horaires-professionnel">
                Ajouter les horaires d'un professionnel
              </Link>
            </div>
            <ProfessionalsAdmin professionals={professionals} onChangeStatus={handleChangeStatus} />
            {error && <div className="error-message">{error}</div>}
          </div>

          <div className='external-professionals'>
            <h3>Les autres professionnels</h3>
            <Link to="/ajouter/professionnel-externe">
              Ajouter un professionnel externe
            </Link>
            <ExternalProfessionalsAdmin externalProfessionals={externalProfessionals} />
          </div>
        </section>
      </section>
    </> 
  )
}

export default Admin;