import React from 'react'
import { createPortal } from 'react-dom'

interface PortalProps {
    children: React.ReactNode,
    domNode?: Element
}
export const Portal: React.FC<PortalProps> = ({ children, domNode = document.body }) => {
    
    return createPortal(children, domNode)
}