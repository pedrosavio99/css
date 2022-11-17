import React, { useState } from 'react'
import { Container } from './indexPage'
import { AiOutlineDoubleRight } from "react-icons/ai";
import Sidebar from './Indexsidebar'

const IndexPage = () => {
  const [sidebar, setSidebar] = useState(true)

  const showSiderbar = () => setSidebar(!sidebar)

  return (
    <Container>
      <AiOutlineDoubleRight onClick={showSiderbar} />
      {sidebar && <Sidebar active={setSidebar} />}
    </Container>
  )
}

export default IndexPage