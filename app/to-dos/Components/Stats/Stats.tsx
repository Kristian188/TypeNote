import { Separator } from "@/components/ui/separator";
import { useState } from "react";

type SingleStat = { label: string; unit: string; counter: number };

export default function Stats() {
    const [statsArray, setStatsArray] = useState<SingleStat[]>([
        { label: "Completed", unit: "Tasks", counter: 3 },
        { label: "Pending", unit: "Tasks", counter: 4 },
        { label: "Progress", unit: "%", counter: 4 },
    ]);

    return (
        <div className="flex gap-5 py-5">
            {statsArray.map((stat, index) => (
                <div key={index} className="flex w-full gap-5">
                    <SingleStatCard stat={stat} key={index} />
                    {index < statsArray.length - 1 && (
                        <Separator orientation="vertical" className="h-auto" />
                    )}
                </div>
            ))}

        </div>
    );
}

function SingleStatCard({ stat }: { stat: SingleStat }) {
    return (
        <div className="w-full flex flex-col gap-2 items-center">
            <div className="flex justify-between items-center">
                <p className="text-xl font-medium text-gray-500">{stat.label}</p>
            </div>
            <div className="flex gap-1 items-baseline">
                <p className="text-3xl font-bold mt-1">{stat.counter}</p>
                <p className="text-gray-400">{stat.unit}</p>
            </div>
        </div>
    );
}