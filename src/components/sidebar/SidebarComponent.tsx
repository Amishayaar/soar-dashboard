import React from "react";
import { Home, CreditCard, BarChart, Settings, User, LogOut, ArrowRightLeft, HandCoins, Wrench, CircleDollarSign } from "lucide-react";

export const SidebarComponent = () => {
  return (
    <div className="h-screen w-[200px]  flex flex-col shadow-xl drop-shadow-xl">
      <div className="flex items-center justify-center py-6">
        <span className="text-2xl font-bold">Soar Task</span>
      </div>

      <nav className="flex-1 space-y-2 px-4">
        <NavItem icon={<Home size={20} />} label="Dashboard" />
        <NavItem icon={<ArrowRightLeft size={20} />} label="Transactions" />
        <NavItem icon={<User size={20} />} label="Accounts" />
        <NavItem icon={<BarChart size={20} />} label="Investments" />
        <NavItem icon={<CreditCard size={20} />} label="Credit Cards" />
        <NavItem icon={<HandCoins size={20} />} label="Loans" />
        <NavItem icon={<Wrench size={20} />} label="Services" />
        <NavItem icon={<CircleDollarSign size={20} />} label="My Privilleges" />
        <NavItem icon={<Settings size={20} />} label="Settings" />
      </nav>

    </div>
  );
};

const NavItem = ({ icon, label }) => (
  <div className="flex items-center gap-2 py-2 px-4 rounded-md cursor-pointer">
    {icon}
    <span>{label}</span>
  </div>
);

