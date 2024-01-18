import { cn } from '@/lib/utils'
import { IconNode } from 'lucide-react'
import React, { MouseEventHandler } from 'react'

interface IconButtonProps {
  icon: React.ReactElement,
  className?: "string",
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined
}

const IconButton:React.FC<IconButtonProps> = ({
  icon,
  className,
  onClick
}) => {
  return (
    <button 
      onClick={onClick}
      className={cn("rounded-full flex items-center bg-white border shadow-md p-2 hover:scale-110 transition", className)}
    >
      {icon}
    </button>
  )
}

export default IconButton