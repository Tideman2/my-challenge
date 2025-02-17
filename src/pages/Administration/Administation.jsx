import { Outlet } from "react-router-dom"

export default function Administration() {

    return (
       <>
          <p>This is the Administration page</p>
          <Outlet />
       </>
    )
}