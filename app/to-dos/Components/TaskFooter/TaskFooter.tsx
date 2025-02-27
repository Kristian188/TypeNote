import { Button } from "@/components/ui/button";

export function TaskFooter() {
    return (
        <div>
            <div className="flex justify-between mt-5 items-center">
                <p className="text-gray-500 text-sm">12 Tasks</p>
                <Button variant={"link"}>Clear All</Button>

            </div>
        </div>
    )
}