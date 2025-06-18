
import React from 'react';
import { Switch } from '@/components/ui/switch';
import { Moon, Sun } from 'lucide-react';

interface HeaderProps {
  isDarkTheme: boolean;
  onThemeToggle: () => void;
}

const Header = ({ isDarkTheme, onThemeToggle }: HeaderProps) => {
  return (
    <header className={`${isDarkTheme ? 'bg-gradient-to-br from-black via-gray-900 to-orange-900' : 'bg-gradient-to-br from-gray-100 via-white to-orange-100'} ${isDarkTheme ? 'text-white' : 'text-black'} relative overflow-hidden shadow-2xl`}>
      {/* Theme Toggle */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20">
        <div className={`flex items-center gap-3 px-4 py-2 rounded-full ${isDarkTheme ? 'bg-black/40 border-orange-500/30' : 'bg-white/40 border-orange-400/30'} border backdrop-blur-sm shadow-lg`}>
          <Sun className={`h-4 w-4 ${isDarkTheme ? 'text-gray-400' : 'text-orange-600'}`} />
          <Switch
            checked={isDarkTheme}
            onCheckedChange={onThemeToggle}
            className="data-[state=checked]:bg-orange-600"
          />
          <Moon className={`h-4 w-4 ${isDarkTheme ? 'text-orange-400' : 'text-gray-400'}`} />
        </div>
      </div>

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className={`absolute inset-0 ${isDarkTheme ? 'bg-gradient-to-r from-orange-600/20 via-transparent to-orange-400/20' : 'bg-gradient-to-r from-orange-400/30 via-transparent to-orange-600/30'}`}></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='%23f97316' stroke-width='0.8' opacity='0.3'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)' /%3E%3C/svg%3E")`
          }}
        ></div>
      </div>
      
      {/* Floating Orbs */}
      <div className={`absolute top-10 right-10 w-32 h-32 ${isDarkTheme ? 'bg-gradient-to-r from-orange-500/20 to-orange-300/20' : 'bg-gradient-to-r from-orange-400/30 to-orange-500/30'} rounded-full blur-xl animate-pulse`}></div>
      <div className={`absolute bottom-10 left-10 w-24 h-24 ${isDarkTheme ? 'bg-gradient-to-r from-orange-600/15 to-orange-400/15' : 'bg-gradient-to-r from-orange-500/25 to-orange-600/25'} rounded-full blur-lg animate-pulse delay-1000`}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <div className="space-y-6 sm:space-y-8">
            {/* Logo/Brand */}
            <div className="inline-flex items-center gap-3 sm:gap-4 mb-4">
              <div className="w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-xl shadow-orange-500/30 border-2 border-orange-400/30">
                <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-white drop-shadow-lg">H</span>
              </div>
              <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold ${isDarkTheme ? 'bg-gradient-to-r from-white via-orange-100 to-orange-200' : 'bg-gradient-to-r from-gray-900 via-orange-800 to-orange-900'} bg-clip-text text-transparent drop-shadow-2xl`}>
                Redhead Hypothesis Forge
              </h1>
            </div>
            
            {/* Subtitle */}
            <div className="space-y-3 sm:space-y-4">
              <div className={`inline-block px-4 py-2 sm:px-6 sm:py-3 ${isDarkTheme ? 'bg-gradient-to-r from-orange-600/30 via-orange-500/20 to-orange-400/30 border-orange-400/30' : 'bg-gradient-to-r from-orange-400/40 via-orange-500/30 to-orange-600/40 border-orange-500/40'} rounded-full border backdrop-blur-sm shadow-lg`}>
                <p className={`text-lg sm:text-xl lg:text-2xl ${isDarkTheme ? 'text-orange-100' : 'text-orange-900'} font-semibold`}>
                  Autonomous Redhead Hypothesis Generator
                </p>
              </div>
              
              {/* Description */}
              <p className={`${isDarkTheme ? 'text-gray-300' : 'text-gray-700'} text-base sm:text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed font-light`}>
                An advanced AI-powered scientific hypothesis engine that generates unique,
              </p>
            </div>
            
            {/* Stats or Features */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 lg:gap-12 mt-8 sm:mt-12">
              <div className="text-center group">
                <div className={`inline-block p-4 ${isDarkTheme ? 'bg-gradient-to-br from-black/40 to-orange-900/40 border-orange-500/30' : 'bg-gradient-to-br from-white/60 to-orange-100/60 border-orange-400/40'} rounded-xl border shadow-lg backdrop-blur-sm group-hover:scale-105 transition-transform duration-300`}>
                  <div className={`${isDarkTheme ? 'text-orange-400' : 'text-orange-600'} font-bold text-lg sm:text-xl mb-1`}>AI-Powered</div>
                  <div className={`${isDarkTheme ? 'text-gray-300' : 'text-gray-600'} text-sm sm:text-base`}>Advanced Generation</div>
                </div>
              </div>
              <div className="text-center group">
                <div className={`inline-block p-4 ${isDarkTheme ? 'bg-gradient-to-br from-black/40 to-orange-900/40 border-orange-500/30' : 'bg-gradient-to-br from-white/60 to-orange-100/60 border-orange-400/40'} rounded-xl border shadow-lg backdrop-blur-sm group-hover:scale-105 transition-transform duration-300`}>
                  <div className={`${isDarkTheme ? 'text-orange-400' : 'text-orange-600'} font-bold text-lg sm:text-xl mb-1`}>Scientific</div>
                  <div className={`${isDarkTheme ? 'text-gray-300' : 'text-gray-600'} text-sm sm:text-base`}>Evidence-Based</div>
                </div>
              </div>
              <div className="text-center group">
                <div className={`inline-block p-4 ${isDarkTheme ? 'bg-gradient-to-br from-black/40 to-orange-900/40 border-orange-500/30' : 'bg-gradient-to-br from-white/60 to-orange-100/60 border-orange-400/40'} rounded-xl border shadow-lg backdrop-blur-sm group-hover:scale-105 transition-transform duration-300`}>
                  <div className={`${isDarkTheme ? 'text-orange-400' : 'text-orange-600'} font-bold text-lg sm:text-xl mb-1`}>Specialized</div>
                  <div className={`${isDarkTheme ? 'text-gray-300' : 'text-gray-600'} text-sm sm:text-base`}>Redhead Research</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade with enhanced shadow */}
      <div className={`absolute bottom-0 left-0 right-0 h-6 ${isDarkTheme ? 'bg-gradient-to-b from-transparent via-black/20 to-white/10' : 'bg-gradient-to-b from-transparent via-gray-200/20 to-black/10'}`}></div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 shadow-lg"></div>
    </header>
  );
};

export default Header;
