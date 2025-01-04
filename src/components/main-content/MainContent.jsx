import { ArrowRight } from "lucide-react";
import ChipCard from "../../../public/Chip_Card.svg";

export const MainContent = () => {
    return (

        <div className="grid grid-cols-12 gap-6 h-screen">
            <div className="col-span-8  p-6">
                <div className="flex justify-between items-center">

                    <h2 className=" text-lg font-semibold mb-2 text-#343C6A">My Cards</h2>
                    <h3 className=" text-lg font-semibold mb-2 text-#343C6A">See All</h3>
                </div>
                <div className="grid grid-cols-2 gap-6">


                    <div className="p-4 text-white rounded-2xl w-[335px] h-[230px]"
                        style={{
                            background: "linear-gradient(90deg, rgba(91, 90, 111, 1) 0%, rgba(0, 0, 0, 1) 100%)",
                        }}>
                        <div className="flex justify-between items-center">
                            <div className="text-left">
                                <p className="text-sm font-medium ">Balance</p>
                                <h3 className="text-[18px] font-semibold tracking-tight">$5,332.18</h3>
                            </div>
                            <img
                                src={ChipCard}
                                alt="Chip Card"
                                className="h-8 w-8"
                            />
                        </div>
                        <div className="mt-14">
                            <div className="flex justify-between mb-6">
                                <div>
                                    <p className="text-[#9BA0AB] text-sm font-medium mb-1">CARD HOLDER</p>
                                    <p className="text-[17px] font-medium">Eddy Cusuma</p>
                                </div>
                                <div>
                                    <p className="text-[#9BA0AB] text-sm font-medium mb-1">VALID THRU</p>
                                    <p className="text-[17px] font-medium">12/22</p>
                                </div>
                            </div>
                        </div>
                        <p className="mt-2 text-sm">3778 **** 1234</p>
                    </div>

                    <div className="p-4 text-white rounded-2xl w-[335px] h-[230px]"
                        style={{
                            background: "linear-gradient(90deg, rgba(91, 90, 111, 1) 0%, rgba(0, 0, 0, 1) 100%)",
                        }}>
                        <div className="flex justify-between items-center">
                            <div className="text-left">
                                <p className="text-sm font-medium ">Balance</p>
                                <h3 className="text-[18px] font-semibold tracking-tight">$5,332.18</h3>
                            </div>
                            <img
                                src={ChipCard}
                                alt="Chip Card"
                                className="h-8 w-8"
                            />
                        </div>
                        <div className="mt-14">
                            <div className="flex justify-between mb-6">
                                <div>
                                    <p className="text-[#9BA0AB] text-sm font-medium mb-1">CARD HOLDER</p>
                                    <p className="text-[17px] font-medium">Eddy Cusuma</p>
                                </div>
                                <div>
                                    <p className="text-[#9BA0AB] text-sm font-medium mb-1">VALID THRU</p>
                                    <p className="text-[17px] font-medium">12/22</p>
                                </div>
                            </div>
                        </div>
                        <p className="mt-2 text-sm">3778 **** 1234</p>
                    </div>
                </div>
            </div>

            {/* Recent Transactions */}
            <div className="col-span-4 p-6 ">
                <h2 className="text-lg text-left font-semibold mb-2 text-#343C6A">Recent Transactions</h2>

                <div className=" bg-white p-6 rounded-lg shadow-md">
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-semibold">Deposit from my Card</p>
                                <p className="text-sm text-gray-500">28 January 2021</p>
                            </div>
                            <p className="text-red-600 font-bold">- $850</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-semibold">Deposit Paypal</p>
                                <p className="text-sm text-gray-500">25 January 2021</p>
                            </div>
                            <p className="text-green-600 font-bold">+ $2,500</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-semibold">Jemi Wilson</p>
                                <p className="text-sm text-gray-500">21 January 2021</p>
                            </div>
                            <p className="text-green-600 font-bold">+ $5,400</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Weekly Activity */}

            <div className="col-span-8 p-6 ">
                <h2 className=" text-lg text-left font-semibold mb-2 text-#343C6A">Weekly Activity</h2>
                <div className=" bg-white rounded-lg shadow-md h-[280px]">
                    <div className="flex items-center justify-center h-40">
                        {/* Placeholder for Chart */}
                        <p className="text-gray-400">[Insert Weekly Activity Chart]</p>
                    </div>
                </div>
            </div>

            {/* Expense Statistics */}
            <div className="col-span-4 p-6 ">
                <h2 className=" text-lg text-left font-semibold mb-2 text-#343C6A">Expense Statistics</h2>
                <div className=" bg-white h-[280px] rounded-lg shadow-md">
                    <div className="flex items-center justify-center h-40">
                        {/* Placeholder for Pie Chart */}
                        <p className="text-gray-400">[Insert Pie Chart]</p>
                    </div>
                </div>
            </div>

            {/* Quick Transfer */}
            <div className="col-span-6 p-6 ">
                <h2 className=" text-lg text-left font-semibold mb-2 text-#343C6A">Balance History</h2>

                <div className=" bg-white rounded-lg shadow-md h-[500px] ">
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                            <img
                                src="https://via.placeholder.com/40"
                                alt="User"
                                className="w-10 h-10 rounded-full"
                            />
                            <div>
                                <p className="font-semibold">Livia Bator</p>
                                <p className="text-sm text-gray-500">CEO</p>
                            </div>
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder="$25.50"
                                className="w-24 px-2 py-1 border border-gray-300 rounded-lg focus:outline-none"
                            />
                        </div>
                        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg">
                            Send
                            <ArrowRight className="ml-2" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Balance History */}
            <div className="col-span-6 p-6 ">
                <h2 className=" text-lg text-left font-semibold mb-2 text-#343C6A">Balance History</h2>

                <div className=" bg-white rounded-lg shadow-md h-[300px]">
                    <div className="flex items-center justify-center h-40">
                        {/* Placeholder for Line Chart */}
                        <p className="text-gray-400">[Insert Balance History Line Chart]</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
