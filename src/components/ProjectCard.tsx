import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectCardProps {
  project: ProjectItem;
  variant: 'featured' | 'compact';
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, variant }) => {
  if (variant === 'featured') {
    return (
      <a
        href={project.link}
        target="_blank"
        rel="noreferrer"
        className="group flex flex-col h-full rounded-[20px] overflow-hidden transition-colors duration-150 hover:bg-[#EFF1F4]"
        style={{
          backgroundColor: '#F7F8FA',
          textDecoration: 'none',
          color: 'inherit',
        }}
      >
        {project.image && (
          <div className="w-full h-[210px] sm:h-[260px] bg-[#141414] overflow-hidden">
            <img
              src={project.image}
              alt={`${project.title} live interface`}
              className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </div>
        )}

        <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-3">
              <h3
                className="m-0 text-[21px] sm:text-[22px] font-semibold tracking-[-0.025em] inline-flex items-center gap-1"
                style={{ color: '#0F0F10' }}
              >
                <span>{project.title}</span>
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </h3>
              <span className="text-[13px] tabular" style={{ color: '#7C818B' }}>
                {project.year}
              </span>
            </div>

            <p
              className="mt-2.5 mb-0 text-[15px] leading-[1.58]"
              style={{ color: '#5C616B' }}
            >
              {project.description}
            </p>
          </div>

          <div
            className="mt-5 text-[13px] leading-relaxed"
            style={{ color: '#7C818B' }}
          >
            {project.tech.join(' · ')}
          </div>
        </div>
      </a>
    );
  }

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noreferrer"
      className="group block rounded-[18px] p-5 sm:p-6 transition-colors duration-150 hover:bg-[#EFF1F4]"
      style={{
        backgroundColor: '#F7F8FA',
        textDecoration: 'none',
        color: 'inherit',
      }}
    >
      <div className="flex items-start justify-between gap-3">
        <h3
          className="m-0 text-[18px] sm:text-[19px] font-semibold tracking-[-0.02em] leading-snug"
          style={{ color: '#0F0F10' }}
        >
          {project.title}
          <ArrowUpRight
            size={15}
            className="inline-block ml-1 -mt-0.5 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </h3>
        <span className="text-[12.5px] tabular shrink-0 pt-1" style={{ color: '#7C818B' }}>
          {project.year}
        </span>
      </div>

      <p
        className="mt-2 mb-0 text-[14.5px] leading-[1.55]"
        style={{ color: '#5C616B' }}
      >
        {project.description}
      </p>

      <div className="mt-3.5 text-[12.5px]" style={{ color: '#7C818B' }}>
        {project.tech.join(' · ')}
      </div>
    </a>
  );
};
