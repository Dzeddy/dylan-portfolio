import React, { useState } from 'react';
import { 
  Code2, 
  Cloud, 
  Layers, 
  Brain,
  Sparkles,
  Zap
} from 'lucide-react';
import { skills } from '../data/portfolio';

interface SkillCategory {
  title: string;
  icon: React.ComponentType<any>;
  items: string[];
  color: string;
  gradient: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    icon: Code2,
    items: skills.languages,
    color: 'text-yellow-500',
    gradient: 'from-yellow-500 to-yellow-600'
  },
  {
    title: 'Technologies',
    icon: Cloud,
    items: skills.technologies,
    color: 'text-yellow-500',
    gradient: 'from-yellow-500 to-yellow-600'
  },
  {
    title: 'Frameworks',
    icon: Layers,
    items: skills.frameworks,
    color: 'text-yellow-500',
    gradient: 'from-yellow-500 to-yellow-600'
  },
  {
    title: 'Topics',
    icon: Brain,
    items: skills.topics,
    color: 'text-yellow-500',
    gradient: 'from-yellow-500 to-yellow-600'
  }
];

const SkillCard: React.FC<{ category: SkillCategory; index: number }> = ({ category, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
  const [clickedSkill, setClickedSkill] = useState<number | null>(null);
  const Icon = category.icon;

  const handleSkillClick = (skillIndex: number) => {
    setClickedSkill(clickedSkill === skillIndex ? null : skillIndex);
  };

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Background glow effect */}
      <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 
        group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
      
      <div className={`relative bg-gray-900 border-2 border-yellow-600 
        rounded-lg p-4 sm:p-6 h-full transform transition-all duration-300 
        hover:border-yellow-500 hover:scale-105 hover:-translate-y-2
        hover:shadow-2xl hover:shadow-yellow-500/10`}>
        
        {/* Header */}
        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
          <div className={`p-2 sm:p-3 rounded-lg bg-gray-800 border border-yellow-600/30 ${category.color} 
            transform transition-all duration-300 ${isHovered ? 'rotate-12 scale-110' : ''}`}>
            <Icon size={20} className="sm:w-6 sm:h-6" />
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-yellow-500">{category.title}</h3>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {category.items.map((skill, skillIndex) => {
            const isSkillHovered = hoveredSkill === skillIndex;
            const isSkillClicked = clickedSkill === skillIndex;
            const showSparkles = isSkillHovered || isSkillClicked;
            
            return (
              <div
                key={skillIndex}
                className={`relative px-2 sm:px-3 py-1 rounded-full bg-gray-800 border border-yellow-600/30 
                  text-yellow-500 text-xs sm:text-sm font-medium overflow-hidden cursor-pointer
                  transform transition-all duration-300 hover:scale-105 hover:border-yellow-500
                  hover:shadow-lg hover:shadow-yellow-500/20 text-center
                  ${isSkillClicked ? 'scale-105 border-yellow-500 shadow-lg shadow-yellow-500/20' : ''}`}
                style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
                onMouseEnter={() => setHoveredSkill(skillIndex)}
                onMouseLeave={() => setHoveredSkill(null)}
                onClick={() => handleSkillClick(skillIndex)}
              >
                {/* Hover effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} 
                  opacity-0 hover:opacity-10 transition-opacity duration-300
                  ${isSkillClicked ? 'opacity-10' : ''}`} />
                
                <span className="relative flex items-center justify-center gap-1 sm:gap-2">
                  {showSparkles && (
                    <Sparkles size={10} className="animate-pulse sm:w-3 sm:h-3 text-yellow-400" />
                  )}
                  {skill}
                </span>
              </div>
            );
          })}
        </div>

        {/* Proficiency indicator */}
        <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-800">
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>Proficiency</span>
            <div className="flex items-center gap-1">
              <Zap size={10} className="text-yellow-500 sm:w-3 sm:h-3" />
              <span>Advanced</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4">
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 via-red-500 via-pink-500 via-purple-500 via-blue-500 via-cyan-500 via-green-500 to-yellow-400 bg-clip-text text-transparent bg-[length:200%_200%] animate-gradient">
              Technical Skills
            </span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg px-4">Technologies I work with to build amazing solutions</p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} category={category} index={index} />
          ))}
        </div>

        {/* Bottom decoration */}
        <div className="mt-8 sm:mt-12 md:mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-gray-900 
            border border-yellow-500/30 rounded-full text-xs sm:text-sm text-gray-400">
            <Sparkles size={14} className="text-yellow-500 animate-pulse sm:w-4 sm:h-4" />
            Always learning and expanding my skillset
          </div>
        </div>
      </div>
    </section>
  );
}; 