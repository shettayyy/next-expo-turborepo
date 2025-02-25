"use client";
import { Button } from "@web/libs/components/core/button/button";
import { LabeledIcon } from "@web/libs/components/core/labeled-icon/labeled-icon";
import {
  BarChart2,
  Bell,
  ChevronLeft,
  ChevronRight,
  Home,
  Menu,
  Moon,
  Settings,
  Sun,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useState } from "react";

const Sidebar = () => {
  const [isDark, setIsDark] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const t = useTranslations("Common");

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const menuItems = [
    { icon: Home, label: "Dashboard", notifications: 0 },
    { icon: BarChart2, label: "Analytics", notifications: 0 },
    { icon: Users, label: "Users", notifications: 0 },
    { icon: Bell, label: "Notifications", notifications: 3 },
    { icon: Settings, label: "Settings", notifications: 0 },
  ];

  const user = {
    name: "Alenn.design",
    email: "alenico725@gmail.com",
    initials: "AD",
  };

  const SidebarContent = ({ isCollapsed }: { isCollapsed: boolean }) => (
    <>
      <nav className="flex-1 p-2 space-y-1">
        {menuItems.map(item => (
          <Button
            key={item.label}
            variant="ghost"
            className="w-full h-10 relative px-3"
          >
            <div className="absolute left-3 flex items-center justify-center w-6">
              <div className="relative">
                <item.icon className="h-5 w-5" />
                {isCollapsed && item.notifications > 0 && (
                  <span className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground rounded-full text-xs w-4 h-4 flex items-center justify-center">
                    {item.notifications}
                  </span>
                )}
              </div>
            </div>
            <div
              className={`pl-8 flex flex-1 items-center ${
                isCollapsed ? "opacity-0" : "opacity-100"
              }`}
            >
              <span className="flex-1 text-left">{item.label}</span>
              {!isCollapsed && item.notifications > 0 && (
                <span className="bg-destructive text-destructive-foreground rounded-full text-xs h-5 px-2 ml-2 flex items-center justify-center">
                  {item.notifications}
                </span>
              )}
            </div>
          </Button>
        ))}
      </nav>

      <div className="p-2 border-t">
        <Button
          variant="ghost"
          onClick={toggleTheme}
          className="w-full h-10 relative px-3"
        >
          <div className="absolute left-3 flex items-center justify-center w-6">
            {isDark ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </div>
          <div
            className={`pl-8 flex flex-1 ${
              isCollapsed ? "opacity-0" : "opacity-100"
            }`}
          >
            <span className="flex-1 text-left">
              {isDark ? "Light Mode" : "Dark Mode"}
            </span>
          </div>
        </Button>
      </div>

      <div className="p-2 border-t">
        <div className="w-full flex items-center px-3 py-2">
          <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center shrink-0">
            <span className="text-sm font-medium text-pink-600">
              {user.initials}
            </span>
          </div>
          {!isCollapsed && (
            <div className="ml-3 overflow-hidden">
              <p className="text-sm font-medium truncate">{user.name}</p>
              <p className="text-xs text-muted-foreground truncate">
                {user.email}
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );

  return (
    <>
      {/* Mobile Header */}
      <div className="px-4 py-2 lg:hidden">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
          className="[&_svg]:size-6"
        >
          <LabeledIcon icon={<Menu size={24} />} label="Menu" />
        </Button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`
        lg:hidden fixed inset-y-0 left-0 z-50 w-64 bg-card border-r
        ${isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        <div className="flex flex-col h-full">
          <div className="py-4 px-4 flex items-center border-b gap-3">
            <div className="min-w-[32px] w-8 h-8 flex items-center justify-center shrink-0">
              <Link className="flex items-center gap-2" href="/">
                <Image
                  src="/icons/logo/edenomics-icon.svg"
                  alt="Logo"
                  width={32}
                  height={32}
                />
              </Link>
            </div>
            <span className="font-semibold text-lg truncate">
              {t("appName")}
            </span>
          </div>
          <SidebarContent isCollapsed={false} />
        </div>
      </div>

      {/* Mobile Overlay */}
      {isMobileSidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsMobileSidebarOpen(false)}
        />
      )}

      {/* Desktop Sidebar */}
      <div
        className={`
        hidden lg:flex relative flex-col h-screen bg-card border-r
        ${isCollapsed ? "w-16" : "w-64"}
      `}
      >
        <div className="relative">
          <div className="py-4 px-4 flex items-center border-b gap-3">
            <div className="min-w-[32px] w-8 h-8 flex items-center justify-center shrink-0">
              <Link className="flex items-center" href="/">
                <Image
                  src="/icons/logo/edenomics-icon.svg"
                  alt="Logo"
                  width={32}
                  height={32}
                />
              </Link>
            </div>
            <span
              className={`font-semibold text-lg truncate ${
                isCollapsed ? "opacity-0 w-0" : "opacity-100"
              }`}
            >
              {t("appName")}
            </span>
          </div>
          <div
            className="absolute -right-3 bottom-0 translate-y-1/2 rounded-full bg-blue-500 hover:bg-blue-600 cursor-pointer z-10"
            onClick={toggleSidebar}
          >
            <div className="h-6 w-6 flex items-center justify-center text-white">
              {isCollapsed ? (
                <ChevronRight className="h-4 w-4" />
              ) : (
                <ChevronLeft className="h-4 w-4" />
              )}
            </div>
          </div>
        </div>
        <SidebarContent isCollapsed={isCollapsed} />
      </div>
    </>
  );
};

export default Sidebar;
