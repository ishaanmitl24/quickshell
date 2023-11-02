import React, { useContext } from 'react'
import Context from '../store/Context'
import UserMain from './UserMain';
import Main from './Main';
import Priority from './Priority';

const All = () => {
  const ctx = useContext(Context);
  console.log(ctx.activeData === 'Display');
  return (
    <div>
        {ctx.activeData==='User' && <UserMain/>}
        {ctx.activeData==='Display' && <Main/>}
        {ctx.activeData==='Priority' && <Priority/>}
    </div>
  )
}

export default All