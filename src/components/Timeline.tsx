import React, { useState } from 'react';
import { 
  Calendar,
  Sparkles
} from 'lucide-react';
import { EnhancedTimelineItem } from '../types';

interface TimelineProps {
  items: EnhancedTimelineItem[];
}

const typeStyles = {
  work: {
    gradient: 'from-blue-600 to-purple-600',
    iconBg: 'bg-blue-500/20',
    iconColor: 'text-blue-400',
    dotColor: 'bg-gradient-to-br from-blue-500 to-purple-500',
    cardBorder: 'border-blue-500/30',
    hoverBorder: 'border-blue-400/70',
    hoverShadow: 'shadow-blue-400/20',
    titleColor: 'text-blue-300',
    sparkleColor: 'text-blue-400'
  },
  education: {
    gradient: 'from-green-600 to-emerald-600',
    iconBg: 'bg-green-500/20',
    iconColor: 'text-green-400',
    dotColor: 'bg-gradient-to-br from-green-500 to-emerald-500',
    cardBorder: 'border-green-500/30',
    hoverBorder: 'border-green-400/70',
    hoverShadow: 'shadow-green-400/20',
    titleColor: 'text-green-300',
    sparkleColor: 'text-green-400'
  },
  research: {
    gradient: 'from-orange-600 to-red-600',
    iconBg: 'bg-orange-500/20',
    iconColor: 'text-orange-400',
    dotColor: 'bg-gradient-to-br from-orange-500 to-red-500',
    cardBorder: 'border-orange-500/30',
    hoverBorder: 'border-orange-400/70',
    hoverShadow: 'shadow-orange-400/20',
    titleColor: 'text-orange-300',
    sparkleColor: 'text-orange-400'
  }
};

const TimelineCard: React.FC<{ item: EnhancedTimelineItem; index: number }> = ({ item, index: _index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const style = typeStyles[item.type];
  const Icon = item.icon;

  return (
    <div 
      className={`relative mb-8 md:mb-12 group md:flex ${item.side === 'left' ? 'md:justify-start' : 'md:justify-end'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Mobile: All cards on one side */}
      <div className="w-full md:w-5/12 pl-12 md:pl-0 md:pr-8">
        <div 
          className={`bg-gray-900/80 backdrop-blur-sm border-2 ${style.cardBorder} rounded-xl p-4 sm:p-6 
            transform transition-all duration-300 hover:scale-105 hover:-translate-y-1
            hover:shadow-2xl hover:${style.hoverShadow} ${
            isHovered ? style.hoverBorder : ''
          }`}
        >
          {/* Header with Icon */}
          <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
            <div className={`p-2 sm:p-3 rounded-lg ${style.iconBg} ${style.iconColor} 
              transform transition-transform duration-300 ${isHovered ? 'rotate-12 scale-110' : ''}`}>
              <Icon size={20} className="sm:w-6 sm:h-6" />
            </div>
            <div className="flex-1">
              <h3 className={`text-lg sm:text-xl font-bold mb-1 ${isHovered ? style.titleColor : 'text-yellow-500'} transition-colors duration-300`}>{item.title}</h3>
              <p className="text-gray-400 text-xs sm:text-sm">{item.company}</p>
            </div>
          </div>

          {/* Date with enhanced styling */}
          <div className={`inline-flex items-center gap-2 px-2 sm:px-3 py-1 rounded-full 
            bg-gradient-to-r ${style.gradient} text-white text-xs sm:text-sm font-bold mb-3`}>
            <Calendar size={12} className="sm:w-3.5 sm:h-3.5" />
            {item.date}
          </div>

          {/* Description */}
          <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">{item.description}</p>

          {/* Technologies */}
          {item.technologies && (
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3">
              {item.technologies.map((tech, i) => (
                <span 
                  key={i} 
                  className={`px-1.5 sm:px-2 py-0.5 sm:py-1 text-xs rounded-full ${style.iconBg} ${style.iconColor} 
                    border border-current transform transition-all duration-300 
                    hover:scale-110 hover:shadow-lg`}
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* Achievements */}
          {item.achievements && (
            <div className="space-y-1.5 sm:space-y-2 mt-3 sm:mt-4">
              {item.achievements.map((achievement, i) => (
                <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
                  <Sparkles size={12} className={`sm:w-3.5 sm:h-3.5 transition-colors duration-300 ${isHovered ? style.sparkleColor : 'text-yellow-500'}`} />
                  {achievement}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Timeline dot - centered on the line for mobile */}
      <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 md:-translate-x-1/2 -translate-y-1/2 top-8">
        <div className={`relative w-5 h-5 sm:w-6 sm:h-6 ${style.dotColor} rounded-full 
          shadow-lg transform transition-all duration-300 ${
          isHovered ? 'scale-150 rotate-180' : ''
        }`}>
          <div className="absolute inset-0 rounded-full animate-ping opacity-30" 
            style={{ background: `inherit` }} />
          <div className="absolute inset-1 bg-gray-950 rounded-full" />
          <div className={`absolute inset-2 ${style.dotColor} rounded-full`} />
        </div>
      </div>
    </div>
  );
};

export const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="mt-8 sm:mt-16">
      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-2">
        <span className="bg-gradient-to-r from-yellow-400 via-orange-500 via-red-500 via-pink-500 via-purple-500 via-blue-500 via-cyan-500 via-green-500 to-yellow-400 bg-clip-text text-transparent bg-[length:200%_200%] animate-gradient">
          My Journey
        </span>
      </h3>
      <p className="text-gray-400 text-sm sm:text-base text-center mb-8 sm:mb-12 px-4">
        A timeline of experiences that shaped my career
      </p>
      
      <div className="relative">
        {/* Timeline line - adjusted for mobile */}
        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 sm:w-1">
          <div className="h-full bg-gradient-to-b from-yellow-600/30 via-yellow-500/20 to-yellow-600/30 rounded-full" />
          <div className="absolute top-0 h-full w-full bg-gradient-to-b from-yellow-500 to-orange-500 rounded-full opacity-20 animate-pulse" />
        </div>

        {/* Timeline Items */}
        {items.map((item, index) => (
          <TimelineCard key={item.id} item={item} index={index} />
        ))}

        {/* Bottom decoration */}
        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 bottom-0">
          <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
        </div>
      </div>

      {/* Legend */}
      <div className="mt-8 sm:mt-16 flex flex-wrap justify-center gap-4 sm:gap-8 text-xs sm:text-sm px-4">
        {Object.entries(typeStyles).map(([type, style]) => (
          <div key={type} className="flex items-center gap-2">
            <div className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full ${style.dotColor}`} />
            <span className="text-gray-400 capitalize">{type}</span>
          </div>
        ))}
      </div>
    </div>
  );
}; 