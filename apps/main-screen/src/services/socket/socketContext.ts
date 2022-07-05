import {
  MainScreenToServerEvents,
  ServerToMainScreenEvents,
} from "@jitsi-box-pro/model"
import { createContext } from "react"
import { Socket } from "socket.io-client"

export interface SocketContextType {
  socket: Socket<ServerToMainScreenEvents, MainScreenToServerEvents> | null
  isConnected: boolean
}

const SocketContext = createContext<SocketContextType | undefined>(undefined)

export default SocketContext
