import { FaCheckDouble } from "react-icons/fa"

export function AppLogo() {
  return (
    <div className="flex gap-2 items-center mb-11 justify-center ">
      <div className="bg-primary p-2 text-white rounded-sm text-lg">
        <FaCheckDouble/>
      </div>
      <div className="font-bold text-2x1 flex gap-1 justify-center items-center">
        <span className="text-primary">Quick</span>
        <span>Task</span>
      </div>
    </div>
  )
}