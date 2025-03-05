import { ClearAllDialog } from "../ClearAllDialog/ClearAllDialog";

export function TaskFooter() {
    return (
        <div>
            <div className="flex justify-between mt-5 items-center">
                <p className="text-gray-500 text-sm">12 Tasks</p>
                <ClearAllDialog />
            </div>
        </div>
    )
}

