

import React from 'react';

import cls from "./index.module.scss"

const Avatar: React.FunctionComponent = () => {

  const [avatar, setAvatar] = React.useState<string>("")

  const user = {
    avatar: ""
  };

  const NoneAvatar = "https://www.vhv.rs/dpng/d/556-5566192_mystery-man-avatar-new-taipei-city-hd-png.png";

  React.useEffect(() => {
    if(user.avatar) {
      setAvatar(user.avatar)
    } else {
      setAvatar(NoneAvatar)
    }
  } , [])

  return (
    <React.Fragment>
      <img className={cls.avatar} src={avatar} alt="" />
    </React.Fragment>
  )
}

export default Avatar;
