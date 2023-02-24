import React from 'react'

const DeleayComponent = ({ children }) => {
  const [show, setShow] = React.useState(false)

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true)
    }, 5000)

    return () => clearTimeout(timeout)

  }, [show])

  if (!show) return null

  return <>{children}</>
}

export default DeleayComponent