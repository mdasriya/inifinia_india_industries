import React from 'react'
import { useParams } from 'react-router-dom';
function BlogDetail() {
  const { id } = useParams();
  return (

   <>
      <div>
      <h1>Blog Detail for ID{id}</h1>
      {/* Other content */}
    </div>
   </>
  )
}

export default BlogDetail