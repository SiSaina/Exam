import { useEffect, useState } from "react";

interface GameTimerProps {
    duration: number;
    onUpdate: (newDuration: number) => void;
}

export default function GameTimer({ duration, onUpdate }: GameTimerProps) {
    const [timeLeft, setTimeLeft] = useState(() => {
        const validDuration = Number(duration) || 0;
        return validDuration * 60;
    });

    const [isRunning, setIsRunning] = useState(false);
    const [gameDuration, setGameDuration] = useState(duration);

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (isRunning) {
            timer = setInterval(() => {
                setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [isRunning]);

    function handleGameAction(action: "start" | "stop" | "end") {
        if (action === "start") setIsRunning(true);
        if (action === "stop") setIsRunning(false);
        if (action === "end") {
            setIsRunning(false);
            setTimeLeft(0);
        }
    }

    function handleOvertime() {
        setTimeLeft((prev) => prev + 5 * 60);
        setGameDuration((prev) => prev + 5);
        onUpdate(gameDuration + 5);
    }

    return (
        <div className="mt-6 flex items-center justify-between border p-4 rounded-lg bg-gray-100">
            <h2 className="text-xl font-bold">
                Time Left: {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, "0")}
            </h2>
            <div className="space-x-2">
                <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600" onClick={() => handleGameAction("start")}>
                    Start
                </button>
                <button className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600" onClick={() => handleGameAction("stop")}>
                    Stop
                </button>
                <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600" onClick={() => handleGameAction("end")}>
                    End
                </button>
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={handleOvertime}>
                    Overtime +5 min
                </button>
            </div>
        </div>
    );
}
