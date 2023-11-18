import React from 'react'

function Home() {
  
  const handleLogout=()=>{
    localStorage.clear()
    window.location.reload()
  }
  return (
    <div>Home........
<button onClick={handleLogout}>Logout</button>
    </div>

  )
}

export default Home