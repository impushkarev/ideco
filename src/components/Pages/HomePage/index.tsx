import React from 'react'
import './style.scss'

import CreateField from 'src/components/CreateField'
import DataTable from 'src/components/DataTable'



const HomePage:React.FC = () => {
  return (
    <>
      <CreateField />
      <DataTable />
    </>
  )
}

export default HomePage