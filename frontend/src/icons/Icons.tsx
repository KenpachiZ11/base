import React from 'react';

import {
  CaretUpOutlined,
  CaretDownOutlined,
  CaretLeftOutlined,
  CaretRightOutlined,
  CloseOutlined,
  PlusOutlined,
  FullscreenOutlined,
  FullscreenExitOutlined,
  UserOutlined,
  LoginOutlined,
} from '@ant-design/icons';

type IconName = 
  | 'arrow_up'
  | 'arrow_down'
  | 'arrow_left'
  | 'arrow_right'
  | 'closed'
  | 'plus'
  | 'fullscreen'
  | 'fullscreen_closed'
  | 'user'
  | 'user_out'
;


type Props = {
  name: IconName;
  cb?: () => void;
  cN?: string;
  disabled?: boolean;
};

export const Icons = ({
  name,
  cb,
  cN,
  disabled
}: Props) => {

  const iconMap: Record<IconName, React.ReactNode> = {
    arrow_up: <CaretUpOutlined />,
    arrow_down: <CaretDownOutlined />,
    arrow_left: <CaretLeftOutlined />,
    arrow_right: <CaretRightOutlined />,
    closed: <CloseOutlined />,
    plus: <PlusOutlined />,
    fullscreen: <FullscreenOutlined />,
    fullscreen_closed: <FullscreenExitOutlined />,
    user: <UserOutlined />,
    user_out: <LoginOutlined />,
  };

  const icon = iconMap[name];

  return <div
    onClick={!disabled ? cb : undefined}
    className={cN}
    style={{ cursor: disabled ? 'not-allowed' : cb ? 'pointer' : 'default' }}
  >
      { icon }
  </div>
};