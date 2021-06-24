import React from 'react';
import UserDetails from '../../UserDetails';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import { useSingIn } from '../../../hooks/useSingIn';

export default function ControlAccount({ isSingIn, username, silk }){
    console.log(isSingIn)
    const { userCtx } = useSingIn()

    return(
            userCtx.isSingIn === false || userCtx.isSingIn === undefined && username !== null
            ? <Button variant='outlined' color="inherit">
                <Link style={{ textDecoration: 'none', color: 'white'}} to='/singIn'>Login</Link>
              </Button>
            : <UserDetails username={userCtx.username} silk={userCtx.silk} />
        )

}
